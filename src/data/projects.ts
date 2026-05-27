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
  detail: string[];
  narrative: string;
  decisions: string[];
  constraints: string[];
  nextSteps: string[];
};

export const projects: Project[] = [
  {
    slug: "hallhop",
    title: "HallHop",
    eyebrow: "School operations",
    summary: "A digital hall pass platform built around the messy parts of real school movement: schedules, permissions, accountability, and adoption.",
    problem: "Paper hall passes create low-visibility movement logs, manual overhead, and difficult accountability for administrators.",
    solution: "A Chrome Extension and Flask API with Supabase auth, RLS, automated logging, and high-performance HAC data integration.",
    impact: "Onboarded 4,000+ students and improved schedule data retrieval performance by about 7x.",
    stack: {
      interface: ["Chrome Extension", "Web dashboard", "Fast pass creation"],
      backend: ["Flask REST API", "Supabase", "PostgreSQL", "JWT"],
      systems: ["RLS", "Session recovery", "HAC data pipeline", "Audit logs"]
    },
    metrics: ["4,000+ students", "7x faster API", "10,000+ scale target"],
    detail: [
      "Designed a FERPA-conscious architecture with multi-user session recovery and row-level security.",
      "Replaced Selenium-heavy scraping with Requests and BeautifulSoup pipelines for lower latency and higher reliability.",
      "Planned Wi-Fi triangulation research for real-time location and emergency workflows."
    ],
    narrative:
      "HallHop is not just a hall pass UI. It is a school workflow system: the product has to feel quick enough for students, legible enough for administrators, and structured enough to produce useful records without turning into surveillance theater.",
    decisions: [
      "Kept the browser extension close to the student workflow so passes could be created without a separate login ritual.",
      "Moved expensive schedule scraping out of the user path where possible, then cached and recovered sessions so the system felt reliable during school-day spikes.",
      "Used row-level security and JWT claims as a core design constraint instead of treating permissions as a later admin feature."
    ],
    constraints: [
      "The system has to work in short hallway-time interactions.",
      "Student data needs conservative access boundaries.",
      "Administrators need useful logs without overwhelming dashboards."
    ],
    nextSteps: ["Emergency-state views", "More precise campus-level permission models", "Location-aware pass validation research"]
  },
  {
    slug: "virtual-robot-simulator",
    title: "Virtual Robot Simulator",
    eyebrow: "Robotics simulation",
    summary: "Robotics simulation tooling that helps teams test code, CAD assumptions, telemetry, and autonomous behavior before competition hardware is ready.",
    problem: "Competitive robotics teams need cheaper, faster ways to test robot code, CAD changes, telemetry, and autonomous routines before hardware is ready.",
    solution: "Simulation features, CAD libraries, SDK tooling, transpilation work, and React Native interfaces for testing and telemetry workflows.",
    impact: "Contributed to a robotics platform serving 50,000+ monthly users.",
    stack: {
      interface: ["React Native", "Telemetry review", "Team collaboration"],
      backend: ["Simulation tooling", "SDK abstractions", "Transpilation pipeline"],
      systems: ["CAD libraries", "FTC workflows", "VEX expansion", "Documentation"]
    },
    metrics: ["50,000+ monthly users", "VEX expansion", "FTC mentorship"],
    detail: [
      "Led VEX-focused expansion of tooling originally built around FTC workflows.",
      "Worked across CAD modeling, debugging, documentation, UX, firmware alignment, and simulator reliability.",
      "Mentored FTC teams on autonomous systems, AprilTag workflows, and control-system debugging."
    ],
    narrative:
      "The hard part of robotics simulation is trust. Teams will only use a simulator if the results map back to real code, real mechanisms, and real debugging habits. My work focused on that bridge between student teams and the tooling underneath.",
    decisions: [
      "Treated CAD libraries as part of the developer experience, not just visual assets.",
      "Focused on simulator reliability and documentation because educational tools fail when teams cannot explain the error state.",
      "Kept mentorship feedback close to platform work so real team pain points shaped the simulator roadmap."
    ],
    constraints: [
      "Robotics teams vary widely in skill level.",
      "Simulation needs to simplify testing without hiding control-system concepts.",
      "VEX and FTC workflows share ideas but differ in SDK expectations and hardware assumptions."
    ],
    nextSteps: ["Better telemetry comparison views", "More reusable CAD primitives", "Guided autonomous debugging flows"]
  },
  {
    slug: "transforze-ai-crm",
    title: "Transforze / AI CRM",
    eyebrow: "AI operations",
    summary: "An AI-native CRM focused on controlled business workflows: multi-tenant data, streaming plan generation, task execution, and auditable agent behavior.",
    problem: "Most CRM workflows split customer data, task execution, planning, and AI assistance across disconnected tools.",
    solution: "A secure multi-tenant platform with Supabase, RLS, Edge Functions, TypeScript frontends, and streaming AI pipelines.",
    impact: "Defines a production-minded architecture for deterministic AI execution in operational software.",
    stack: {
      interface: ["React Admin", "Workspace UI", "Streaming responses"],
      backend: ["Supabase", "PostgreSQL", "Edge Functions", "SSE"],
      systems: ["RLS", "Agent workflows", "Intent taxonomy", "Evaluation loops"]
    },
    metrics: ["Multi-tenant", "Streaming AI", "Auditable workflows"],
    detail: [
      "Built workspace isolation and secure backend foundations with RLS and Edge Functions.",
      "Designed agent workflows for structured business plan generation, refinement, and operational task creation.",
      "Explored agent safety and real-time UX patterns for business software."
    ],
    narrative:
      "The goal is to make AI useful inside operations without letting it become vague automation. Every agent action needs context, permissions, output shape, and a way for people to understand what happened.",
    decisions: [
      "Designed tenancy and permissions before expanding the AI surface area.",
      "Used streaming for long-running generation so the interface feels inspectable instead of frozen.",
      "Separated structured planning from task execution so generated ideas can be reviewed before becoming operational changes."
    ],
    constraints: [
      "Business data has different permission boundaries per workspace.",
      "Agent output needs predictable structure, not just fluent prose.",
      "Latency, accuracy, and auditability all matter at the same time."
    ],
    nextSteps: ["Tool permission previews", "Evaluation dashboards", "Human approval checkpoints for high-impact actions"]
  },
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
    slug: "robotics-autonomous-systems",
    title: "Robotics Autonomous Systems",
    eyebrow: "Controls and autonomy",
    summary: "Competition robot autonomy work across FTC and VEX: control loops, odometry, sensor fusion, AprilTag vision, and maintainable subsystem code.",
    problem: "Reliable autonomous performance requires tuned control loops, localization, sensor fusion, and maintainable code under match pressure.",
    solution: "PID controllers, odometry, IMU and encoder fusion, AprilTag vision, modular subsystems, and iterative testing.",
    impact: "Reached 90%+ autonomous reliability and qualified for VEX State Championship.",
    stack: {
      interface: ["Driver controls", "Telemetry", "Match strategy"],
      backend: ["Java", "C++", "FTC SDK", "PROS"],
      systems: ["PID tuning", "Odometry", "AprilTags", "Subsystem architecture"]
    },
    metrics: ["90%+ autonomy", "5x consistency gain", "State qualifier"],
    detail: [
      "Implemented Ziegler-Nichols PID tuning and odometry with IMU, tracking wheels, and encoders.",
      "Transitioned codebases from Python to C++ for more direct control and responsiveness.",
      "Mentored younger programmers through reviews, documentation, and testing sessions."
    ],
    narrative:
      "Autonomous robotics is where software becomes visible. If the code is sloppy, the robot misses. If the design is clear, the robot repeats. That feedback loop shaped how I write and test control code.",
    decisions: [
      "Modularized drivetrain, intake, launcher, and sensing code so new members could understand one subsystem at a time.",
      "Moved toward lower-level motor control when reliability mattered more than quick scripting.",
      "Used telemetry and repeated field tests to tune behavior instead of guessing from code alone."
    ],
    constraints: ["Match time is unforgiving.", "Sensors drift.", "Robot code has to survive hurried debugging at competitions."],
    nextSteps: ["Reusable autonomous path templates", "Better simulation-to-field comparison", "More structured pre-match diagnostics"]
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
