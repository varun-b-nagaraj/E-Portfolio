export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  metrics: string[];
  detail: string[];
};

export const projects: Project[] = [
  {
    slug: "hallhop",
    title: "HallHop",
    summary: "A digital hall pass platform built for real school workflows.",
    problem: "Paper hall passes create low-visibility movement logs, manual overhead, and difficult accountability for administrators.",
    solution: "A Chrome Extension and Flask API with Supabase auth, RLS, automated logging, and high-performance HAC data integration.",
    impact: "Onboarded 4,000+ students and improved schedule data retrieval performance by about 7x.",
    stack: ["Flask", "Supabase", "PostgreSQL", "JWT", "Chrome Extension", "BeautifulSoup"],
    metrics: ["4,000+ students", "7x faster API", "10,000+ scale target"],
    detail: [
      "Designed a FERPA-conscious architecture with multi-user session recovery and row-level security.",
      "Replaced Selenium-heavy scraping with Requests and BeautifulSoup pipelines for lower latency and higher reliability.",
      "Planned Wi-Fi triangulation research for real-time location and emergency workflows."
    ]
  },
  {
    slug: "virtual-robot-simulator",
    title: "Virtual Robot Simulator",
    summary: "Robotics simulation tooling for VEX and FTC teams.",
    problem: "Competitive robotics teams need cheaper, faster ways to test robot code, CAD changes, telemetry, and autonomous routines before hardware is ready.",
    solution: "Simulation features, CAD libraries, SDK tooling, transpilation work, and React Native interfaces for testing and telemetry workflows.",
    impact: "Contributed to a robotics platform serving 50,000+ monthly users.",
    stack: ["React Native", "Simulation", "CAD", "FTC SDK", "JavaScript", "VEX"],
    metrics: ["50,000+ monthly users", "VEX expansion", "FTC mentorship"],
    detail: [
      "Led VEX-focused expansion of tooling originally built around FTC workflows.",
      "Worked across CAD modeling, debugging, documentation, UX, firmware alignment, and simulator reliability.",
      "Mentored FTC teams on autonomous systems, AprilTag workflows, and control-system debugging."
    ]
  },
  {
    slug: "transforze-ai-crm",
    title: "Transforze / AI CRM",
    summary: "An AI-native CRM for auditable agent-driven operations.",
    problem: "Most CRM workflows split customer data, task execution, planning, and AI assistance across disconnected tools.",
    solution: "A secure multi-tenant platform with Supabase, RLS, Edge Functions, TypeScript frontends, and streaming AI pipelines.",
    impact: "Defines a production-minded architecture for deterministic AI execution in operational software.",
    stack: ["TypeScript", "React Admin", "Supabase", "Postgres", "RLS", "SSE"],
    metrics: ["Multi-tenant", "Streaming AI", "Auditable workflows"],
    detail: [
      "Built workspace isolation and secure backend foundations with RLS and Edge Functions.",
      "Designed agent workflows for structured business plan generation, refinement, and operational task creation.",
      "Explored agent safety and real-time UX patterns for business software."
    ]
  },
  {
    slug: "inventory-counter-app",
    title: "Inventory Counter App",
    summary: "A mobile inventory tool for student-run store operations.",
    problem: "Manual inventory counts were slow, error-prone, and difficult to coordinate across student teams.",
    solution: "A React Native app with barcode scanning, real-time database sync, and manual plus automated counting workflows.",
    impact: "Reduced manual entry errors and accelerated inventory audits for LightSpeed IT.",
    stack: ["React Native", "Barcode scanning", "Database sync", "Mobile UX"],
    metrics: ["Barcode workflows", "Real-time sync", "Audit acceleration"],
    detail: [
      "Designed workflows around real store operations and student team constraints.",
      "Connected inventory verification with e-commerce process improvements.",
      "Supported inclusive fulfillment coordination with administrators and special education staff."
    ]
  },
  {
    slug: "robotics-autonomous-systems",
    title: "Robotics Autonomous Systems",
    summary: "Control systems and autonomous routines for FTC and VEX competition robots.",
    problem: "Reliable autonomous performance requires tuned control loops, localization, sensor fusion, and maintainable code under match pressure.",
    solution: "PID controllers, odometry, IMU and encoder fusion, AprilTag vision, modular subsystems, and iterative testing.",
    impact: "Reached 90%+ autonomous reliability and qualified for VEX State Championship.",
    stack: ["PROS", "LemLib", "FTC SDK", "Java", "C++", "AprilTags"],
    metrics: ["90%+ autonomy", "5x consistency gain", "State qualifier"],
    detail: [
      "Implemented Ziegler-Nichols PID tuning and odometry with IMU, tracking wheels, and encoders.",
      "Transitioned codebases from Python to C++ for more direct control and responsiveness.",
      "Mentored younger programmers through reviews, documentation, and testing sessions."
    ]
  },
  {
    slug: "quantum-error-mitigation",
    title: "Quantum Error Mitigation",
    summary: "AP Research on contextuality as an error mitigation resource.",
    problem: "Noisy quantum hardware limits reliable measurement and circuit outcomes, especially in contextuality experiments.",
    solution: "Qiskit and IBM Quantum experiments using the Mermin-Peres Magic Square, zero-noise extrapolation, gate folding, and Richardson extrapolation.",
    impact: "Improved fidelity from 0.753 to 0.805 across 8,192-shot IBM Quantum configurations.",
    stack: ["Qiskit", "IBM Quantum", "AerSimulator", "ZNE", "Noise modeling"],
    metrics: ["8,192 shots", "9 configurations", "0.753 to 0.805 fidelity"],
    detail: [
      "Compared contextuality-preserving and non-contextual circuits under real hardware noise.",
      "Modeled noisy superconducting qubit behavior through controlled circuit variants.",
      "Treated research as an engineering system with reproducible experiments and measurable outcomes."
    ]
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    summary: "Modernized Round Rock school store operations.",
    problem: "Catalog data, checkout, accessibility, and inventory workflows needed stronger structure for a student-run retail operation.",
    solution: "Rebuilt product listings, improved frontend UX, added Stripe checkout options, and connected operations to inventory tooling.",
    impact: "Updated 400+ product listings and supported growth to 15,000+ monthly views.",
    stack: ["HTML/CSS", "Stripe", "Wix Velo", "UI/UX", "Operations"],
    metrics: ["400+ listings", "15,000+ monthly views", "Apple Pay / Google Pay"],
    detail: [
      "Re-photographed, rewrote, and reformatted catalog content for clearer browsing.",
      "Improved checkout accessibility and operational fulfillment paths.",
      "Connected technical improvements with inclusive student roles."
    ]
  },
  {
    slug: "meals-for-students",
    title: "Meals for Students",
    summary: "A student-facing food resource platform for Central Texas.",
    problem: "Food insecurity resources can be fragmented and stigmatized for students who need help.",
    solution: "A Google Sites platform, outreach materials, and community coordination through Sewa International and Texas Baptist Children's Home.",
    impact: "Improved access to local food resources through youth-led service and technology-enabled outreach.",
    stack: ["Google Sites", "Canva", "Community outreach", "Research"],
    metrics: ["Central Texas", "Youth service", "Resource access"],
    detail: [
      "Researched food insecurity needs in the region.",
      "Built a student-facing platform that connects people with nearby support.",
      "Created social and printed materials to reduce stigma and improve awareness."
    ]
  }
];

export const featuredProjects = projects.slice(0, 6);
