"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Microscope, School } from "lucide-react";

const nodes = [
  {
    icon: School,
    title: "School systems",
    body: "HallHop, Co-Op, inventory, e-commerce, and workflows that have to survive a normal school day."
  },
  {
    icon: Bot,
    title: "Robotics",
    body: "Autonomous routines, odometry, PID tuning, AprilTags, simulator feedback, and mentoring other teams."
  },
  {
    icon: BrainCircuit,
    title: "AI tools",
    body: "CRM agents, conversational AI, streaming interfaces, permission checks, and structured task execution."
  },
  {
    icon: Microscope,
    title: "Research",
    body: "Qiskit experiments, IBM Quantum runs, SEM in R, survey analysis, and reproducible notes."
  }
];

export function AboutSystemsMap() {
  return (
    <section className="relative min-h-[640px] overflow-hidden rounded-lg border border-white/12 bg-panel/80 p-6 shadow-glass">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-amber-300/14 blur-3xl" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.26em] text-amber-100/75">Personal map</p>
        <h2 className="mt-3 max-w-md text-4xl font-semibold leading-tight text-bone">The same pattern shows up across the work.</h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
          I usually start with a messy real-world workflow, then make the state visible: logs, telemetry, dashboards, docs, or a cleaner handoff.
        </p>
      </div>

      <div className="relative mt-10 grid gap-4 sm:grid-cols-2">
        {nodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <motion.article
              key={node.title}
              className="group min-h-[160px] rounded-lg border border-white/12 bg-black/25 p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-100/35 hover:bg-white/[0.06]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md border border-white/12 bg-white/[0.05] text-teal-100/80">
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
                </span>
                <h3 className="text-xl font-semibold text-bone">{node.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-silver">{node.body}</p>
            </motion.article>
          );
        })}
      </div>

      <div className="relative mt-6 rounded-lg border border-white/12 bg-black/30 p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-teal-100/70">Through-line</p>
        <p className="mt-3 text-lg leading-relaxed text-bone">
          Build the tool, test it with real constraints, explain it clearly, then leave it easier for the next person to use.
        </p>
      </div>
    </section>
  );
}
