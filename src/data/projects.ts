export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  stack: {
    interface: string[];
    backend: string[];
    systems: string[];
  };
  metrics: string[];
  paper?: {
    label: string;
    href: string;
  };
  detail: string[];
  narrative: string;
  decisions: string[];
  constraints: string[];
  nextSteps: string[];
};

export const projects: Project[] = [
  {
    slug: "inventory-counter-app",
    title: "Inventory Counter App",
    eyebrow: "Mobile operations",
    summary: "A barcode-first mobile tool for turning school-store inventory counts into a faster, less error-prone workflow.",
    problem: "Manual inventory counts were slow, error-prone, and difficult to coordinate across student teams.",
    solution: "A React Native app with barcode scanning, real-time database sync, and manual plus automated counting workflows.",
    impact: "Reduced manual entry errors and accelerated inventory audits for LightSpeed IT.",
    stack: {
      interface: ["React Native", "Barcode scanning", "Count modes"],
      backend: ["Realtime sync", "Product records", "Inventory updates"],
      systems: ["Audit flow", "Manual fallback", "Store operations", "Student handoff"]
    },
    metrics: ["Barcode workflows", "Real-time sync", "Audit acceleration"],
    detail: [
      "Designed workflows around real store operations and student team constraints.",
      "Connected inventory verification with e-commerce process improvements.",
      "Supported inclusive fulfillment coordination with administrators and special education staff."
    ],
    narrative:
      "This project came from watching a simple workflow waste time. The app is intentionally practical: scan the item, count it, sync it, and make the next student’s shift easier.",
    decisions: [
      "Designed for mobile-first use because inventory work happens around shelves, boxes, and delivery areas.",
      "Kept manual count flows available because barcode data is never perfect.",
      "Built the app around repeatable audits rather than one-time cleanup."
    ],
    constraints: ["Student teams rotate often.", "Catalog data can be inconsistent.", "Inventory tools need to be fast enough to use during real operations."],
    nextSteps: ["Variance reports", "Low-stock alerts", "Cleaner admin review queue"]
  },
  {
    slug: "quantum-error-mitigation",
    title: "Quantum Error Mitigation",
    eyebrow: "Academic research",
    summary: "AP Research studying whether contextuality can act as a useful error-mitigation resource on noisy IBM Quantum hardware.",
    problem: "Noisy quantum hardware limits reliable measurement and circuit outcomes, especially in contextuality experiments.",
    solution: "Qiskit and IBM Quantum experiments using the Mermin-Peres Magic Square, zero-noise extrapolation, gate folding, and Richardson extrapolation.",
    impact: "Improved fidelity from 0.753 to 0.805 across 8,192-shot IBM Quantum configurations.",
    stack: {
      interface: ["Experiment notebooks", "Result tables", "Circuit diagrams"],
      backend: ["Qiskit", "IBM Quantum", "AerSimulator"],
      systems: ["Mermin-Peres game", "ZNE", "Gate folding", "Noise modeling"]
    },
    metrics: ["8,192 shots", "9 configurations", "0.753 to 0.805 fidelity"],
    paper: {
      label: "Read AP Research paper",
      href: "/research/quantum-error-mitigation-paper.pdf"
    },
    detail: [
      "Compared contextuality-preserving and non-contextual circuits under real hardware noise.",
      "Modeled noisy superconducting qubit behavior through controlled circuit variants.",
      "Treated research as an engineering system with reproducible experiments and measurable outcomes."
    ],
    narrative:
      "This research sits between theory and engineering. The question is mathematical, but the work is operational: define circuits, run hardware experiments, model noise, and compare measured outcomes carefully.",
    decisions: [
      "Used the Mermin-Peres Magic Square because it gives a concrete structure for studying contextuality.",
      "Compared circuit families rather than relying on a single run.",
      "Measured improvement through fidelity changes so the result stayed tied to hardware behavior."
    ],
    constraints: ["Quantum hardware noise changes over time.", "Shot counts and queue timing affect experiment planning.", "Research claims need reproducible comparisons."],
    nextSteps: ["Larger circuit families", "Device-to-device comparison", "Cleaner visual explanation of contextuality for non-specialists"]
  },
  {
    slug: "sustainability-behavior-research",
    title: "Sustainability Behavior Research",
    eyebrow: "Applied research",
    summary: "A Texas State University research contribution analyzing composting behavior across a 600+ student survey dataset.",
    problem: "Sustainability programs need evidence about which attitudes, norms, and perceived barriers actually predict composting behavior.",
    solution: "Cleaned survey data, supported preprocessing workflows, applied SEM methods, and used multiple imputation for missing data.",
    impact: "Contributed to a co-authored manuscript studying sustainability-related decision-making through the Theory of Planned Behavior.",
    stack: {
      interface: ["Research notes", "Tables", "Manuscript support"],
      backend: ["R", "SEM", "Multiple imputation"],
      systems: ["Survey design", "Data cleaning", "Behavior predictors", "Reproducibility"]
    },
    metrics: ["600+ survey sample", "SEM pipeline", "Co-authored manuscript"],
    paper: {
      label: "Read SEM paper",
      href: "/research/sustainability-behavior-research-paper.pdf"
    },
    detail: [
      "Analyzed composting behavior using Theory of Planned Behavior constructs.",
      "Assisted with statistical preprocessing, dataset cleaning, and missing-data handling.",
      "Helped translate research questions into reproducible analysis steps and manuscript evidence."
    ],
    narrative:
      "This project is smaller than a company role, but it reflects the same systems mindset: define the variables, clean the messy inputs, document the assumptions, and make the result understandable enough to support a research claim.",
    decisions: [
      "Used SEM because the research question involved relationships between latent behavioral predictors.",
      "Handled missing data deliberately instead of treating incomplete responses as disposable.",
      "Kept analysis notes tied to manuscript claims so the research stayed traceable."
    ],
    constraints: [
      "Survey data depends on response quality and construct validity.",
      "Missing data can bias results if handled casually.",
      "Research conclusions need to stay narrower than the data can support."
    ],
    nextSteps: ["Clearer visual model diagrams", "Sensitivity checks", "Public-facing summary of findings"]
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    eyebrow: "School store systems",
    summary: "A modernization effort for the Round Rock school store: cleaner catalog data, better checkout, clearer operations, and more inclusive fulfillment.",
    problem: "Catalog data, checkout, accessibility, and inventory workflows needed stronger structure for a student-run retail operation.",
    solution: "Rebuilt product listings, improved frontend UX, added Stripe checkout options, and connected operations to inventory tooling.",
    impact: "Updated 400+ product listings and supported growth to 15,000+ monthly views.",
    stack: {
      interface: ["Product pages", "Checkout UX", "Responsive catalog"],
      backend: ["Stripe", "Wix Velo", "Inventory checks"],
      systems: ["400+ listing cleanup", "Delivery workflows", "Accessibility", "Inclusive fulfillment"]
    },
    metrics: ["400+ listings", "15,000+ monthly views", "Apple Pay / Google Pay"],
    detail: [
      "Re-photographed, rewrote, and reformatted catalog content for clearer browsing.",
      "Improved checkout accessibility and operational fulfillment paths.",
      "Connected technical improvements with inclusive student roles."
    ],
    narrative:
      "This project was about making a student-run store feel less improvised. The technical work mattered because it helped students, staff, and fulfillment teams trust the system.",
    decisions: [
      "Started with catalog quality because broken listings undermine every later checkout improvement.",
      "Treated product photos and descriptions as operational data, not decoration.",
      "Connected e-commerce improvements to delivery workflows so online polish matched real fulfillment."
    ],
    constraints: ["Student teams maintain the store.", "Products and availability change frequently.", "Checkout has to be simple for a school audience."],
    nextSteps: ["Cleaner inventory warnings", "Role-specific operations dashboard", "More structured product update workflow"]
  },
  {
    slug: "meals-for-students",
    title: "Meals for Students",
    eyebrow: "Community technology",
    summary: "A student-facing resource platform and outreach effort connecting Central Texas students with food support options.",
    problem: "Food insecurity resources can be fragmented and stigmatized for students who need help.",
    solution: "A Google Sites platform, outreach materials, and community coordination through Sewa International and Texas Baptist Children's Home.",
    impact: "Improved access to local food resources through youth-led service and technology-enabled outreach.",
    stack: {
      interface: ["Google Sites", "Resource pages", "Student-facing copy"],
      backend: ["Resource research", "Partner coordination", "Content updates"],
      systems: ["Canva outreach", "Social media", "Stigma reduction", "Local support mapping"]
    },
    metrics: ["Central Texas", "Youth service", "Resource access"],
    detail: [
      "Researched food insecurity needs in the region.",
      "Built a student-facing platform that connects people with nearby support.",
      "Created social and printed materials to reduce stigma and improve awareness."
    ],
    narrative:
      "Meals for Students is intentionally simple: the goal was not to over-engineer a platform, but to reduce the distance between a student and the help already available nearby.",
    decisions: [
      "Used an accessible site builder so the resource could be maintained without a custom engineering dependency.",
      "Wrote outreach materials around dignity and clarity, not charity language.",
      "Paired research with local partner conversations so the resource list stayed grounded."
    ],
    constraints: ["Food support information changes.", "Students may avoid resources if the experience feels stigmatizing.", "Simple maintenance matters more than technical novelty."],
    nextSteps: ["Spanish-language resource pass", "More local partner coverage", "Anonymous feedback form for missing resources"]
  }
];

export const featuredProjects = projects.slice(0, 6);
