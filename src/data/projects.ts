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
  categories: string[];
  featured?: boolean;
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
    slug: "co-op-operations-intelligence-platform",
    title: "CO-OP Operations & Intelligence Platform",
    eyebrow: "Enterprise operations",
    summary:
      "A full-stack platform centralizing HR, scheduling, finance, inventory, analytics, AI workflows, and employee coordination for a student-run organization.",
    problem:
      "RRHS Co-Op relied on fragmented spreadsheets, manual scheduling, disconnected communication systems, and separate inventory, HR, finance, marketing, and executive workflows with limited visibility.",
    solution:
      "Designed a unified operations dashboard with role-based access, AI-powered analytics, automated scheduling, inventory synchronization, and department-level tooling across the organization.",
    impact:
      "Replaced disconnected systems, supported workflows across 9+ departments, reduced manual coordination overhead, and gave leadership centralized reporting for operations, finance, inventory, and staffing.",
    stack: {
      interface: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "React Query", "React Hook Form", "Zod"],
      backend: ["Supabase PostgreSQL", "Row-Level Security", "Server Actions", "REST APIs", "IndexedDB offline sync"],
      systems: ["Ollama", "DeepSeek models", "Vercel", "OAuth", "QR/barcode processing", "RBAC"]
    },
    metrics: ["9+ departments", "Offline inventory sync", "AI executive dashboard"],
    categories: ["Full-stack", "AI", "Operations", "Data"],
    featured: true,
    detail: [
      "Built automated employee scheduling around A/B day logic, availability, department coverage, and attendance-aware constraints.",
      "Added executive intelligence views for cross-department analytics, finance reporting, operational audits, and AI-assisted decision support.",
      "Connected inventory, product ordering, vendor management, mobile scanning, and Chick-fil-A forecasting into one operational system."
    ],
    narrative:
      "This is the broadest systems project in the portfolio: it turns a student-run organization from a set of disconnected tools into a coordinated operating platform with permissions, analytics, and offline-aware workflows.",
    decisions: [
      "Used Supabase RLS and role-based access so department tools could share a database without exposing unrelated employee or financial data.",
      "Designed offline inventory sync because store and scanning workflows cannot depend on perfect network conditions.",
      "Kept AI features tied to operational analytics instead of novelty prompts, making the assistant useful for leadership review and forecasting."
    ],
    constraints: [
      "Different departments needed different permissions and workflows.",
      "Operational data changes during real shifts, audits, and product deliveries.",
      "The platform had to stay usable for student employees with varying technical experience."
    ],
    nextSteps: ["Real-time notification center", "More formal audit logs", "Expanded forecasting models", "Department-specific mobile views"]
  },
  {
    slug: "wildlife-conservation-ai-platform",
    title: "Wildlife Conservation AI Platform",
    eyebrow: "Eagle Scout AI",
    summary:
      "An AI-powered environmental education platform helping park visitors identify wildlife and learn about local ecosystems through computer vision and conversational AI.",
    problem:
      "Many park visitors lack accessible information about surrounding wildlife and ecosystems, which reduces environmental awareness and conservation engagement.",
    solution:
      "Developed an interactive platform combining computer vision, conversational AI, ecological datasets, iNaturalist content, and QR-based learning resources.",
    impact:
      "Installed educational signage and QR resources at Champions Park, improved access to ecological information, and created scalable environmental education infrastructure for community spaces.",
    stack: {
      interface: ["React Native", "TypeScript", "Responsive mobile UI", "QR learning flows"],
      backend: ["Flask APIs", "Ollama local inference", "iNaturalist API", "Species data retrieval"],
      systems: ["Custom vision pipeline", "CNN workflows", "RAG responses", "Offline PDF fallback"]
    },
    metrics: ["Champions Park installation", "Computer vision ID", "Local LLM chatbot"],
    categories: ["AI", "Mobile", "Community", "Research"],
    featured: true,
    detail: [
      "Built wildlife image recognition workflows for plants and animals using a custom-trained vision classification pipeline.",
      "Integrated a conversational AI layer that explains habitat, biodiversity, species behavior, and conservation context.",
      "Added dynamic iNaturalist galleries and offline fallback resources so the installation still worked for visitors with limited connectivity."
    ],
    narrative:
      "The project connects service, education, and applied AI. The technical goal was not just classification accuracy; it was helping visitors notice and understand the ecosystem around them.",
    decisions: [
      "Used a mobile-first interface because the experience happens outdoors at signage and trail locations.",
      "Combined API data with generated explanations so users could get both factual species context and approachable conservation education.",
      "Included PDF fallback resources because public park infrastructure should not fail completely when connectivity is weak."
    ],
    constraints: [
      "Wildlife photos can be blurry, partial, or taken in changing lighting.",
      "Public visitors need simple explanations, not research-style taxonomy output.",
      "The installation needed to remain maintainable after the initial Eagle Scout project."
    ],
    nextSteps: ["Confidence-based ID explanations", "More local species coverage", "Admin tooling for signage updates", "Visitor feedback analytics"]
  },
  {
    slug: "quantum-error-mitigation",
    title: "Quantum Error Mitigation Research",
    eyebrow: "Academic research",
    summary: "AP Research investigating contextuality as an error-mitigation resource on noisy IBM Quantum hardware.",
    problem:
      "Quantum hardware suffers from noise and decoherence, limiting reliable execution of contextuality experiments and quantum algorithms.",
    solution:
      "Designed Mermin-Peres Magic Square experiments in Qiskit and IBM Quantum, then evaluated zero-noise extrapolation, Richardson extrapolation, and gate folding strategies.",
    impact:
      "Improved experimental fidelity from 0.753 to 0.805, executed experiments across multiple IBM Quantum configurations, and produced a reproducible methodology for hardware-vs-simulation comparison.",
    stack: {
      interface: ["Experiment notebooks", "Result tables", "Circuit diagrams"],
      backend: ["Python", "Qiskit", "IBM Quantum", "AerSimulator", "NumPy"],
      systems: ["Mermin-Peres Magic Square", "Zero-noise extrapolation", "Gate folding", "Fidelity analysis", "Contextuality inequalities"]
    },
    metrics: ["0.753 to 0.805 fidelity", "IBM Quantum hardware", "Reproducible experiments"],
    categories: ["Research", "Quantum", "Data"],
    featured: true,
    paper: {
      label: "Read AP Research paper",
      href: "/research/quantum-error-mitigation-paper.pdf"
    },
    detail: [
      "Compared contextuality-preserving strategies under noisy hardware conditions and simulator baselines.",
      "Implemented Richardson extrapolation and controlled gate folding to estimate lower-noise behavior.",
      "Benchmarked hardware and simulation outputs using fidelity analysis and contextuality inequality evaluation."
    ],
    narrative:
      "This research sits between theory and engineering. The question is mathematical, but the work is operational: define circuits, run hardware experiments, model noise, and compare measured outcomes carefully.",
    decisions: [
      "Used the Mermin-Peres Magic Square because it gives a concrete structure for studying contextuality.",
      "Compared hardware and simulator runs rather than relying on a single circuit execution.",
      "Measured improvement through fidelity changes so the result stayed tied to observable hardware behavior."
    ],
    constraints: ["Quantum hardware noise changes over time.", "Shot counts and queue timing affect experiment planning.", "Research claims need reproducible comparisons."],
    nextSteps: ["Larger circuit families", "Device-to-device comparison", "Expanded visual explanation of contextuality", "Additional mitigation baselines"]
  },
  {
    slug: "hac-rest-api-for-hallhop",
    title: "HAC REST API for HallHop",
    eyebrow: "Education backend",
    summary: "A FERPA-aware API system enabling secure access to student data and academic workflows for educational applications.",
    problem:
      "Home Access Center lacked a clean developer interface for secure integration into student-focused applications and operational systems.",
    solution:
      "Built a REST API layer around HAC using authenticated scraping pipelines, session management, JWT authentication, and access controls designed around educational data sensitivity.",
    impact:
      "Powered HallHop academic workflows, enabled structured integrations across systems, reduced manual information retrieval, and created clean access to previously difficult-to-query school data.",
    stack: {
      interface: ["REST API contracts", "Student workflow endpoints", "Developer-facing responses"],
      backend: ["Python", "Flask", "BeautifulSoup4", "Requests", "JWT authentication", "Session management"],
      systems: ["Authenticated scraping", "Rate limiting", "FERPA-aware handling", "Role restrictions", "Session lifecycle"]
    },
    metrics: ["Grade and attendance API", "Secure sessions", "HallHop integration"],
    categories: ["Backend", "Security", "Education"],
    featured: true,
    detail: [
      "Implemented secure authentication workflows for grade, attendance, schedule, assignment, and GPA retrieval.",
      "Converted HAC pages into structured API responses while preserving session state and access boundaries.",
      "Designed the system around rate limits, role restrictions, and responsible handling of student academic records."
    ],
    narrative:
      "The hard part was turning an interface built for humans into an API safe enough for student-facing software. The work involved reverse engineering, but the product goal was reliability and responsible data access.",
    decisions: [
      "Used server-side session management so credentials and cookies were not exposed to client applications.",
      "Kept endpoints specific to academic workflows rather than exposing broad scraping primitives.",
      "Added access restrictions and rate limits because educational records need tighter handling than ordinary app data."
    ],
    constraints: [
      "HAC pages can change without warning.",
      "Student records require careful privacy boundaries.",
      "Scraping-based systems need defensive parsing and clear failure states."
    ],
    nextSteps: ["Automated parser regression checks", "More granular audit logging", "Expanded documentation for downstream app developers"]
  },
  {
    slug: "virtual-robotics-simulator-transpiler",
    title: "Virtual Robotics Simulator Transpiler",
    eyebrow: "Compiler systems",
    summary:
      "C++ to JavaScript transpiler and simulation tooling for a large-scale robotics education platform serving 50,000+ users.",
    problem:
      "Robotics simulation workflows required a browser-compatible execution environment while preserving existing C++-based robotics logic and APIs.",
    solution:
      "Contributed to a transpilation pipeline converting robotics-oriented C++ logic into executable JavaScript for browser-based simulation environments.",
    impact:
      "Supported web-based educational robotics workflows, improved accessibility for browser simulation, and contributed to infrastructure used by 50,000+ users.",
    stack: {
      interface: ["Browser simulation", "Robotics API compatibility", "Student-facing runtime feedback"],
      backend: ["C++", "JavaScript", "AST parsing", "Code generation"],
      systems: ["Compiler concepts", "Intermediate representation", "Runtime tooling", "Simulation architecture", "Performance tuning"]
    },
    metrics: ["50,000+ users", "C++ to JavaScript", "Browser runtime"],
    categories: ["Robotics", "Compiler", "Simulation"],
    featured: true,
    detail: [
      "Worked on parsing C++ syntax and translating robotics-oriented logic into browser-executable JavaScript.",
      "Supported compatibility layers so existing robotics APIs could run inside a web simulation environment.",
      "Contributed to runtime tooling that made robotics programming more accessible to students without local setup friction."
    ],
    narrative:
      "This project is strongest as systems work: it required thinking about language translation, browser execution, robotics APIs, and performance constraints at the same time.",
    decisions: [
      "Preserved familiar robotics APIs so students could transfer knowledge from physical robotics to simulation.",
      "Focused on browser execution because accessibility matters in classrooms and at scale.",
      "Kept transformations structured around parse and generation stages instead of one-off string replacement."
    ],
    constraints: [
      "C++ language behavior does not map cleanly to JavaScript in every case.",
      "Simulation runtimes need predictable performance in the browser.",
      "Educational platforms require error states that students can understand."
    ],
    nextSteps: ["More complete syntax coverage", "Improved compiler diagnostics", "Runtime profiling tools", "Expanded simulation test cases"]
  },
  {
    slug: "automatic-smartfood-checker",
    title: "Automatic SmartFood Checker",
    eyebrow: "AI compliance",
    summary: "An AI-powered nutrition classification system that scrapes product pages and determines SmartFood compliance automatically.",
    problem:
      "School-store compliance checks required manual review of product pages, ingredients, nutrition labels, and SmartFood rules, creating slow and inconsistent verification work.",
    solution:
      "Built an automated checker that extracts nutrition and ingredient data from webpages, applies OCR where needed, and uses LLM-assisted classification to flag compliance status.",
    impact: "Reduced manual verification work for school-store compliance processes and made bulk product validation more repeatable.",
    stack: {
      interface: ["Bulk validation reports", "Compliance status output", "Review workflow"],
      backend: ["Python", "Selenium", "BeautifulSoup", "OCR pipelines", "Nutrition parsing"],
      systems: ["LLM classification", "Web scraping", "Ingredient analysis", "Rule matching"]
    },
    metrics: ["Bulk product checks", "OCR label parsing", "AI classification"],
    categories: ["AI", "Automation", "Operations"],
    detail: [
      "Scraped product pages and extracted nutrition facts, ingredients, serving sizes, and product metadata.",
      "Used OCR pipelines for images or labels where structured nutrition data was unavailable.",
      "Combined deterministic parsing with LLM classification so edge cases could be reviewed more efficiently."
    ],
    narrative:
      "The system treats compliance as a repeatable data pipeline: gather product evidence, normalize nutrition fields, classify against rules, and surface uncertain cases for review.",
    decisions: [
      "Mixed scraping and OCR because product pages rarely expose nutrition data in one clean format.",
      "Used AI as an assistant for ambiguous interpretation while keeping structured fields available for review.",
      "Designed output around bulk validation so the tool could support real store catalog maintenance."
    ],
    constraints: ["Product pages vary widely.", "Nutrition labels may be images or incomplete text.", "Compliance decisions need reviewable evidence."],
    nextSteps: ["Confidence scoring", "Saved audit history", "Direct integration with catalog tools"]
  },
  {
    slug: "automatic-hr-scheduling-system",
    title: "Automatic HR Scheduling System",
    eyebrow: "Optimization engine",
    summary: "An intelligent scheduling engine for RRHS Co-Op using optimization algorithms and operational constraints.",
    problem:
      "Manual shift construction was time-consuming and prone to coverage gaps, fairness issues, availability conflicts, and A/B day mistakes.",
    solution:
      "Created a scheduling engine that uses availability analysis, LSLR-style heuristics, conflict resolution, attendance context, and fairness balancing to generate reliable shifts.",
    impact: "Reduced manual schedule construction time while improving shift coverage reliability and lowering avoidable scheduling conflicts.",
    stack: {
      interface: ["Schedule outputs", "Conflict review", "Coverage summaries"],
      backend: ["Python", "Constraint optimization", "Availability analysis", "Conflict resolution"],
      systems: ["LSLR-style heuristics", "Fairness balancing", "Attendance-aware scheduling", "A/B day optimization"]
    },
    metrics: ["A/B day logic", "Conflict minimization", "Fairness balancing"],
    categories: ["Automation", "Operations", "Data"],
    detail: [
      "Generated shifts around employee availability, department needs, attendance history, and school calendar structure.",
      "Balanced fairness and reliability so the schedule did not overuse the same employees or leave recurring gaps.",
      "Produced reviewable outputs that made conflicts visible before schedules were finalized."
    ],
    narrative:
      "This project turns scheduling from a manual puzzle into an optimization workflow with human review. The aim was not to remove judgment, but to make the first pass dramatically better.",
    decisions: [
      "Used heuristics where exact optimization would be too rigid for real school operations.",
      "Made conflict visibility part of the output so HR could adjust intentionally.",
      "Included attendance context because reliability matters as much as theoretical availability."
    ],
    constraints: ["Availability data can be stale.", "Fairness and coverage sometimes conflict.", "School A/B schedules add calendar-specific complexity."],
    nextSteps: ["Manager override tools", "Schedule change notifications", "Historical fairness dashboards"]
  },
  {
    slug: "inventory-counter-app",
    title: "Inventory Counter App",
    eyebrow: "Mobile operations",
    summary: "A barcode-first mobile inventory management system for school-store operations.",
    problem: "Manual inventory counts were slow, error-prone, and difficult to coordinate across student teams.",
    solution: "Built a React Native inventory app with barcode scanning, Supabase-backed records, and real-time synchronization for count updates.",
    impact: "Reduced inventory counting errors and accelerated audit workflows for school-store operations.",
    stack: {
      interface: ["React Native", "Barcode scanning", "Mobile count modes"],
      backend: ["Supabase", "Realtime sync", "Product records", "Inventory updates"],
      systems: ["Audit flow", "Manual fallback", "Store operations", "Student handoff"]
    },
    metrics: ["Barcode workflows", "Real-time sync", "Audit acceleration"],
    categories: ["Mobile", "Operations", "Data"],
    detail: [
      "Designed workflows around real store operations and student team constraints.",
      "Connected inventory verification with e-commerce process improvements.",
      "Supported fast manual fallback flows because barcode data is never perfect."
    ],
    narrative:
      "This project came from watching a simple workflow waste time. The app is intentionally practical: scan the item, count it, sync it, and make the next student's shift easier.",
    decisions: [
      "Designed for mobile-first use because inventory work happens around shelves, boxes, and delivery areas.",
      "Kept manual count flows available because barcode data is never perfect.",
      "Built the app around repeatable audits rather than one-time cleanup."
    ],
    constraints: ["Student teams rotate often.", "Catalog data can be inconsistent.", "Inventory tools need to be fast enough to use during real operations."],
    nextSteps: ["Variance reports", "Low-stock alerts", "Cleaner admin review queue"]
  },
  {
    slug: "e-commerce-modernization-platform",
    title: "E-Commerce Modernization Platform",
    eyebrow: "School store systems",
    summary: "An operational redesign of RRHS LightSpeed's digital storefront and fulfillment systems.",
    problem: "Catalog data, checkout, accessibility, and inventory workflows needed stronger structure for a student-run retail operation.",
    solution: "Modernized the storefront with improved product listings, mobile responsiveness, Stripe checkout support, and inventory-aware fulfillment workflows.",
    impact: "Improved 400+ product listings, supported 15,000+ monthly views, and made checkout and browsing more accessible on mobile devices.",
    stack: {
      interface: ["Responsive catalog", "Product pages", "Checkout UX", "Mobile storefront"],
      backend: ["Wix Velo", "Stripe", "JavaScript", "Inventory APIs"],
      systems: ["400+ listing cleanup", "Fulfillment workflows", "Accessibility", "Store operations"]
    },
    metrics: ["400+ listings", "15,000+ monthly views", "Stripe checkout"],
    categories: ["Web", "Operations", "Commerce"],
    detail: [
      "Re-photographed, rewrote, and reformatted catalog content for clearer browsing.",
      "Improved checkout accessibility and operational fulfillment paths.",
      "Connected e-commerce improvements with inventory and delivery workflows."
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
    slug: "sustainability-behavior-research",
    title: "Sustainability Behavior Research",
    eyebrow: "Applied research",
    summary: "A Texas State University research contribution analyzing composting behaviors through SEM modeling.",
    problem: "Sustainability programs need evidence about which attitudes, norms, and perceived barriers actually predict composting behavior.",
    solution: "Cleaned survey data, supported preprocessing workflows, applied structural equation modeling, and used multiple imputation for missing data.",
    impact: "Contributed to co-authored behavioral sustainability research using a 600+ student dataset.",
    stack: {
      interface: ["Research notes", "Tables", "Manuscript support"],
      backend: ["R", "Structural Equation Modeling", "Multiple imputation", "Survey analysis"],
      systems: ["Theory of Planned Behavior", "Data cleaning", "Behavior predictors", "Reproducibility"]
    },
    metrics: ["600+ student dataset", "SEM pipeline", "Co-authored research"],
    categories: ["Research", "Data", "Sustainability"],
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
      "This project reflects the same systems mindset as larger software work: define the variables, clean messy inputs, document assumptions, and make the result understandable enough to support a research claim.",
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
  }
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 5);
export const projectCategories = Array.from(new Set(projects.flatMap((project) => project.categories))).sort();
