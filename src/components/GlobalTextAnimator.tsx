"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useMotionEnabled } from "./ReducedMotionProvider";

const TEXT_SELECTOR = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "li",
  "a",
  "button",
  "label",
  "div",
  "span"
].join(",");

const SURFACE_SELECTOR = [
  ".glass",
  ".surface-glow",
  ".accent-chip",
  "article",
  "section[class*='rounded']",
  "div[class*='rounded']",
  "a[class*='rounded']",
  "button[class*='rounded']",
  "span[class*='rounded']"
].join(",");

const SKIP_SELECTOR = [
  "script",
  "style",
  "svg",
  "input",
  "textarea",
  "select",
  "option",
  "[aria-hidden='true']",
  "[data-no-type]",
  ".noise"
].join(",");

const primaryHeadingTags = new Set(["H1", "H2", "H3"]);
const subheadingTags = new Set(["H4", "H5", "H6"]);
const subheadingDelayAfterHeading = 45;
const bodyDelayAfterHeading = 85;

type TextPlan = {
  entries: Array<{ node: Text; text: string }>;
  started: boolean;
  key: string;
};

const textPlans = new WeakMap<HTMLElement, TextPlan>();
const completedTextKeys = new Set<string>();

function hasReadableText(element: Element) {
  const text = element.textContent?.replace(/\s+/g, " ").trim() ?? "";
  return text.length > 0;
}

function hasDirectText(element: Element) {
  return Array.from(element.childNodes).some((node) => node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim()));
}

function isSkippable(element: Element) {
  return Boolean(element.closest(SKIP_SELECTOR));
}

function getTypingMeta(element: HTMLElement) {
  const textLength = Math.max(8, Math.min((element.textContent ?? "").trim().length, 220));
  const typeKind = getTypeKind(element);
  const isPrimaryHeading = typeKind === "primary";
  const isHeroName = isHeroNameElement(element);
  const isCompact = element.tagName === "A" || element.tagName === "BUTTON" || element.className.includes("rounded-full") || element.className.includes("accent-chip");
  const duration = isHeroName
    ? Math.min(4200, Math.max(2600, textLength * 72))
    : isPrimaryHeading
    ? Math.min(1150, Math.max(380, textLength * 15))
    : Math.min(360, Math.max(90, textLength * 3));
  const delay = isPrimaryHeading ? 120 : isCompact ? 70 : 90;
  const steps = Math.max(12, Math.min(textLength, 90));

  return { duration, delay, steps, typeKind, isPrimaryHeading };
}

function isHeroNameElement(element: HTMLElement) {
  return element.tagName === "H1" && element.classList.contains("accent-text");
}

function getTypeKind(element: HTMLElement) {
  if (element.dataset.typeTier === "primary") return "primary";
  if (element.dataset.typeTier === "subheading") return "subheading";
  if (element.dataset.typeTier === "body") return "body";
  if (primaryHeadingTags.has(element.tagName)) return "primary";
  if (subheadingTags.has(element.tagName) || element.classList.contains("section-kicker")) return "subheading";
  if (element.className.includes("uppercase") || element.className.includes("tracking-[")) return "subheading";
  return "body";
}

function prepareSurface(element: HTMLElement, index: number) {
  if (element.dataset.appearPrepared === "true") return;
  element.dataset.appearPrepared = "true";
  element.classList.add("shell-reveal");
  element.style.setProperty("--shell-delay", `${Math.min(index * 35, 280)}ms`);
}

function prepareText(element: HTMLElement) {
  if (element.dataset.typePrepared === "true") return;
  if (isSkippable(element) || !hasReadableText(element)) return;
  if (element.parentElement?.closest("[data-type-prepared='true']:not(.shell-reveal)")) return;
  if (!hasDirectText(element) && element.querySelector(TEXT_SELECTOR)) return;

  const nestedPrepared = element.querySelector("[data-type-prepared='true']");
  if (nestedPrepared && !hasDirectText(element)) return;

  const { duration, delay, steps, typeKind, isPrimaryHeading } = getTypingMeta(element);
  const textKey = getTextKey(element);
  const alreadyTyped = completedTextKeys.has(textKey);
  const characterCount = prepareTextNodes(element, textKey, alreadyTyped);
  if (characterCount === 0) return;

  element.dataset.typePrepared = "true";
  element.dataset.typeKind = typeKind;
  element.dataset.typeEnd = `${delay + duration}`;
  element.classList.add("typing-reveal");
  if (isPrimaryHeading) element.classList.add("typing-reveal-heading");
  if (typeKind === "subheading") element.classList.add("typing-reveal-subheading");
  if (typeKind === "body") element.classList.add("typing-reveal-body");
  element.style.setProperty("--typing-duration", `${duration}ms`);
  element.style.setProperty("--typing-delay", `${delay}ms`);
  element.style.setProperty("--typing-steps", `${steps}`);
  element.style.setProperty("--typing-char-step", `${duration / characterCount}ms`);
  element.style.setProperty("--typing-char-count", `${characterCount}`);

  if (alreadyTyped) {
    element.classList.add("is-visible", "is-typed");
    element.dataset.typeEnd = `${delay}`;
  }
}

function getTextKey(element: HTMLElement) {
  const text = element.textContent?.replace(/\s+/g, " ").trim() ?? "";
  const container = element.closest<HTMLElement>("[data-typing-scope], article, section, main");
  const scope =
    container?.dataset.typingScope ??
    container?.getAttribute("aria-label") ??
    container?.querySelector("h1,h2,h3")?.textContent?.replace(/\s+/g, " ").trim() ??
    "";

  return `${location.pathname}|${scope}|${element.tagName}|${text}`;
}

function prepareTextNodes(element: HTMLElement, textKey: string, alreadyTyped: boolean) {
  let characterIndex = 0;
  const nodes = Array.from(element.childNodes);
  const entries: TextPlan["entries"] = [];
  const rect = element.getBoundingClientRect();

  if (rect.height > 0) element.style.minHeight = `${rect.height}px`;

  nodes.forEach((node) => {
    if (node.nodeType !== Node.TEXT_NODE) return;

    const value = node.textContent ?? "";
    if (!value.trim()) return;

    entries.push({ node: node as Text, text: value });
    characterIndex += Array.from(value).length;
    node.textContent = alreadyTyped ? value : "";
  });

  if (entries.length > 0 && !alreadyTyped) textPlans.set(element, { entries, started: false, key: textKey });
  return characterIndex;
}

function getSequenceContainer(element: HTMLElement) {
  let current = element.parentElement;

  while (current) {
    const canSequence = current.matches(`${SURFACE_SELECTOR}, section, article, main`);
    if (canSequence && current.querySelector(".typing-reveal[data-type-kind='primary']")) return current;
    current = current.parentElement;
  }

  return element.closest<HTMLElement>(SURFACE_SELECTOR) ?? element.closest<HTMLElement>("section, article, main");
}

function sequenceText(root: ParentNode) {
  const typedSecondary = Array.from(root.querySelectorAll<HTMLElement>(".typing-reveal[data-type-kind='subheading'], .typing-reveal[data-type-kind='body']"));

  typedSecondary.forEach((element) => {
    const container = getSequenceContainer(element);
    if (!container) return;

    const headingEnd = Array.from(container.querySelectorAll<HTMLElement>(".typing-reveal[data-type-kind='primary']"))
      .filter((heading) => heading !== element)
      .reduce((latest, heading) => Math.max(latest, Number(heading.dataset.typeEnd ?? 0)), 0);

    if (headingEnd <= 0) return;

    const nextStart =
      element.dataset.typeKind === "subheading"
        ? headingEnd + subheadingDelayAfterHeading
        : headingEnd + bodyDelayAfterHeading;
    const currentDelay = Number.parseFloat(element.style.getPropertyValue("--typing-delay")) || 0;
    const nextDelay = Math.max(currentDelay, nextStart);
    element.style.setProperty("--typing-delay", `${nextDelay}ms`);
    element.dataset.typeEnd = `${nextDelay + (Number.parseFloat(element.style.getPropertyValue("--typing-duration")) || 0)}`;
  });
}

function normalizeBatchTiming(root: ParentNode) {
  const containers = Array.from(
    new Set(
      Array.from(root.querySelectorAll<HTMLElement>(".typing-reveal"))
        .map(getSequenceContainer)
        .filter((container): container is HTMLElement => Boolean(container))
    )
  );

  containers.forEach((container) => {
    ["primary", "subheading", "body"].forEach((typeKind) => {
      const batch = Array.from(container.querySelectorAll<HTMLElement>(`.typing-reveal[data-type-kind='${typeKind}']`));
      if (batch.length < 2) return;

      const targetEnd = batch.reduce((latest, element) => {
        const delay = Number.parseFloat(element.style.getPropertyValue("--typing-delay")) || 0;
        const duration = Number.parseFloat(element.style.getPropertyValue("--typing-duration")) || 0;
        return Math.max(latest, delay + duration);
      }, 0);

      batch.forEach((element) => {
        const delay = Number.parseFloat(element.style.getPropertyValue("--typing-delay")) || 0;
        const duration = Math.max(260, targetEnd - delay);
        const characterCount = Number.parseFloat(element.style.getPropertyValue("--typing-char-count")) || 1;
        element.style.setProperty("--typing-duration", `${duration}ms`);
        element.style.setProperty("--typing-char-step", `${duration / characterCount}ms`);
        element.dataset.typeEnd = `${delay + duration}`;
      });
    });
  });
}

function startTyping(element: HTMLElement) {
  const plan = textPlans.get(element);
  if (!plan || plan.started) return;

  plan.started = true;
  element.classList.add("is-typing");

  const delay = Number.parseFloat(element.style.getPropertyValue("--typing-delay")) || 0;
  const step = Math.max(6, Number.parseFloat(element.style.getPropertyValue("--typing-char-step")) || 16);
  const totalCharacters = plan.entries.reduce((total, entry) => total + Array.from(entry.text).length, 0);
  const startedAt = performance.now() + delay;
  let lastCount = -1;

  const render = (now: number) => {
    const elapsed = Math.max(0, now - startedAt);
    const visibleCount = Math.min(totalCharacters, Math.floor(elapsed / step));

    if (visibleCount !== lastCount) {
      let remaining = visibleCount;
      plan.entries.forEach((entry) => {
        const characters = Array.from(entry.text);
        const nextLength = Math.max(0, Math.min(characters.length, remaining));
        entry.node.textContent = characters.slice(0, nextLength).join("");
        remaining -= nextLength;
      });
      lastCount = visibleCount;
    }

    if (visibleCount < totalCharacters) {
      requestAnimationFrame(render);
      return;
    }

    plan.entries.forEach((entry) => {
      entry.node.textContent = entry.text;
    });
    completedTextKeys.add(plan.key);
    element.classList.remove("is-typing");
    element.classList.add("is-typed");
  };

  requestAnimationFrame(render);
}

function scan(root: ParentNode) {
  const surfaces = Array.from(root.querySelectorAll<HTMLElement>(SURFACE_SELECTOR)).filter((element) => !isSkippable(element));
  surfaces.forEach(prepareSurface);

  const candidates = Array.from(root.querySelectorAll<HTMLElement>(TEXT_SELECTOR));
  candidates.forEach(prepareText);
  sequenceText(root);
  normalizeBatchTiming(root);
  sequenceText(root);
  normalizeBatchTiming(root);
}

function observePreparedElements(root: ParentNode) {
  const prepared = Array.from(root.querySelectorAll<HTMLElement>(".typing-reveal, .shell-reveal"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        if (entry.target instanceof HTMLElement && entry.target.classList.contains("typing-reveal")) {
          startTyping(entry.target);
        }
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
  );

  prepared.forEach((element) => observer.observe(element));
  return observer;
}

export function GlobalTextAnimator() {
  const pathname = usePathname();
  const motionEnabled = useMotionEnabled();

  useEffect(() => {
    if (!motionEnabled) return;

    let cancelled = false;
    let startTimer: ReturnType<typeof setTimeout> | null = null;
    let idleHandle: number | null = null;
    let visibilityObserver: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const scheduleWhenIdle = (callback: () => void) => {
      const idleWindow = window as Window & {
        requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
        cancelIdleCallback?: (handle: number) => void;
      };

      if (idleWindow.requestIdleCallback) {
        idleHandle = idleWindow.requestIdleCallback(callback, { timeout: 1600 });
        return;
      }

      startTimer = globalThis.setTimeout(callback, 500);
    };

    const start = () => {
      scheduleWhenIdle(() => {
        if (cancelled) return;

        const root = document.querySelector("main") ?? document.body;
        scan(root);
        visibilityObserver = observePreparedElements(root);

        mutationObserver = new MutationObserver((mutations) => {
          const shouldRescan = mutations.some((mutation) => mutation.addedNodes.length > 0);
          if (!shouldRescan) return;
          scan(root);
          visibilityObserver?.disconnect();
          visibilityObserver = observePreparedElements(root);
        });

        mutationObserver.observe(root, { childList: true, subtree: true });
      });
    };

    const startAfterAssets = () => {
      void document.fonts.ready.then(() => {
        if (cancelled) return;
        window.requestAnimationFrame(() => window.requestAnimationFrame(start));
      });
    };

    if (document.readyState === "complete") startAfterAssets();
    else window.addEventListener("load", startAfterAssets, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", startAfterAssets);
      if (startTimer) window.clearTimeout(startTimer);
      const idleWindow = window as Window & { cancelIdleCallback?: (handle: number) => void };
      if (idleHandle && idleWindow.cancelIdleCallback) idleWindow.cancelIdleCallback(idleHandle);
      mutationObserver?.disconnect();
      visibilityObserver?.disconnect();
    };
  }, [motionEnabled, pathname]);

  return null;
}
