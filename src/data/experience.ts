export type Experience = {
  slug: string;
  company: string;
  website?: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  lens?: string;
  bullets: string[];
  tags: string[];
  metric?: string;
  progression?: {
    title: string;
    period: string;
    details: string[];
  }[];
  expanded?: {
    label: string;
    items: string[];
  }[];
};

export const experiences: Experience[] = [
  {
    slug: "virtual-robot-simulator",
    company: "Virtual Robot Simulator",
    website: "https://vrobotsim.com/",
    role: "Project Team Lead",
    period: "Jun 2025 - Present",
    location: "Remote",
    metric: "50,000+ monthly users",
    summary: "Leading VEX-focused expansion for a cross-platform robotics simulation ecosystem.",
    lens:
      "This role is where my robotics work became platform work: less about a single robot and more about helping teams test, debug, and understand robot behavior before hardware is ready.",
    bullets: [
      "Developed full-stack simulation and tooling features for virtual robot testing, debugging, and competitive robotics workflows.",
      "Worked on modular CAD libraries, simulator infrastructure, SDK abstractions, and Java-to-JavaScript transpilation for robot code.",
      "Collaborated across software, UX, firmware, documentation, and community feedback loops."
    ],
    tags: ["React Native", "CAD libraries", "Simulation", "FTC SDK", "VEX", "Transpilers"],
    progression: [
      {
        title: "Summer Intern",
        period: "May 2025 - Jun 2025",
        details: [
          "Contributed across software, CAD, testing, and documentation workflows as part of a cross-functional robotics development team.",
          "Debugged and optimized robotics codebases to improve simulator reliability and performance.",
          "Assisted with CAD modeling and virtual robot design for competitive robotics applications.",
          "Mentored FTC robotics teams on autonomous programming, control systems, and competition strategy.",
          "Helped develop a React Native-based interface for simulator access, telemetry visualization, and team collaboration."
        ]
      },
      {
        title: "Project Team Lead",
        period: "Jun 2025 - Present",
        details: [
          "Contributed to development of a VEX-focused robotics simulation platform expanding the original FTC-based VRS system.",
          "Helped develop full-stack simulation and tooling features for virtual robot testing, debugging, and competitive robotics workflows.",
          "Worked on modular CAD libraries and simulation infrastructure to support efficient robot prototyping and design.",
          "Collaborated with software, UX, and firmware teams to improve platform usability and performance.",
          "Supported platform growth and community adoption through feature development, documentation, and user feedback integration.",
          "Contributed to a platform used by 50,000+ monthly users within the competitive robotics community."
        ]
      }
    ],
    expanded: [
      {
        label: "Technical scope",
        items: [
          "VEX integration for a cross-platform robotics simulation system.",
          "In-house FTC control SDK work, including motor control abstractions and simulation integration.",
          "Java-to-JavaScript transpilation improvements for FTC SDK code running in Unity-based robot simulation."
        ]
      },
      {
        label: "Mentorship",
        items: [
          "Mentored FTC teams in autonomous systems and computer vision.",
          "Focused on Java control systems, AprilTag localization, sensor calibration, and debugging habits."
        ]
      }
    ]
  },
  {
    slug: "hallhop",
    company: "HallHop",
    website: "https://hallhop.com/",
    role: "Founder and Lead Developer",
    period: "Nov 2024 - Present",
    location: "Self-employed",
    metric: "4,000+ students, 7x faster API",
    summary: "Built a digital hall pass platform replacing paper workflows with real-time school operations.",
    lens:
      "HallHop is founder work: I owned the product, backend, school constraints, adoption path, and the uncomfortable parts of building software around real student data and administrator expectations.",
    bullets: [
      "Shipped a Chrome Extension, web app, and Flask REST API for hall pass management and student workflow tracking.",
      "Replaced Selenium-heavy HAC scraping with Requests and BeautifulSoup pipelines, producing about a 7x performance improvement.",
      "Integrated Supabase, JWT authentication, RLS, automated logging, session recovery, and multi-user workflows."
    ],
    tags: ["Flask", "Supabase", "Postgres", "JWT", "Chrome Extension", "FERPA-conscious"],
    expanded: [
      {
        label: "Platform responsibilities",
        items: [
          "Built and deployed a full-stack Chrome extension and Flask-based REST API to digitize hall pass management.",
          "Designed backend systems with scalability and FERPA-conscious data handling for large-scale student usage.",
          "Collaborated with school administrators and IT staff to improve operational efficiency, compliance, and user experience."
        ]
      },
      {
        label: "Infrastructure",
        items: [
          "Optimized Home Access Center scraping infrastructure for schedules, grades, and assignment retrieval.",
          "Integrated Supabase for automated check-in/check-out logging, session recovery, and multi-user management.",
          "Planned infrastructure for expansion to 10,000+ users across campuses."
        ]
      }
    ]
  },
  {
    slug: "round-rock-co-op",
    company: "Round Rock High School Co-Op",
    website: "https://rrhscoop.roundrockisd.org/",
    role: "Chief Executive Officer / LightSpeed IT Director",
    period: "Mar 2025 - Present",
    location: "Round Rock, Texas",
    metric: "250+ members, 15,000+ monthly views",
    summary: "Leading a student-run enterprise across business, engineering, e-commerce, and inclusive operations.",
    lens:
      "Co-Op is the clearest example of my operating style: technical systems only matter if they improve the way people coordinate, fulfill orders, mentor students, and run the organization every day.",
    bullets: [
      "Directed student teams, set operating goals, and worked toward CTE-aligned expansion with school leadership.",
      "Modernized e-commerce workflows, rebuilt 400+ product listings, supported Stripe checkout, and improved catalog quality.",
      "Designed an iOS inventory counter app with barcode scanning and real-time database sync."
    ],
    tags: ["Leadership", "E-commerce", "Inventory", "React Native", "Stripe", "Operations"],
    progression: [
      {
        title: "LightSpeed IT Member",
        period: "Nov 2024 - Mar 2025",
        details: [
          "Contributed to redevelopment of the school store's e-commerce platform by reformatting, re-photographing, and updating 400+ product listings.",
          "Assisted with Stripe integration to support Apple Pay and Google Pay.",
          "Developed frontend UI enhancements and CSS animations to improve responsiveness.",
          "Collaborated with administrators, CTE coordinators, and special education staff to support a delivery-based ordering system."
        ]
      },
      {
        title: "LightSpeed IT Director",
        period: "Mar 2025 - Present",
        details: [
          "Led a team of students in improving school e-commerce and digital store operations.",
          "Designed and deployed a custom iOS inventory management app with barcode scanning and real-time database synchronization.",
          "Mentored new members on inventory systems, product management workflows, and operational best practices.",
          "Coordinated with delivery teams and special education staff to improve workflow efficiency."
        ]
      },
      {
        title: "Chief Executive Officer",
        period: "May 2026 - Present",
        details: [
          "Lead a 250+ member student-run organization focused on business, technology, and hands-on engineering initiatives.",
          "Oversee operations, branding, project management, and cross-functional student collaboration across multiple technical projects.",
          "Spearhead autonomous delivery initiatives integrating robotics, software, and real-world operational workflows.",
          "Work with school leadership and administration to expand the organization into an accredited CTE-aligned program."
        ]
      }
    ],
    expanded: [
      {
        label: "Operational outcomes",
        items: [
          "Scaled e-commerce operations to 15,000+ monthly views.",
          "Established procedures expanding roles for FAC and disabled students.",
          "Modernized scheduling, demand forecasting, performance analytics, and computer vision-based inventory tracking concepts."
        ]
      }
    ]
  },
  {
    slug: "transforze",
    company: "Transforze",
    website: "https://transforze.com/",
    role: "Software Engineer / Co-Founder",
    period: "Aug 2025 - Present",
    location: "Remote",
    metric: "AI-native CRM",
    summary: "Developing a multi-tenant CRM for agent-driven business operations and workflow automation.",
    lens:
      "Transforze is where I think about AI as infrastructure, not decoration: secure tenancy, auditable execution, streaming interfaces, and workflows that stay deterministic enough for real operations.",
    bullets: [
      "Built secure data isolation with Supabase, PostgreSQL, RLS, and Edge Functions.",
      "Developed streaming AI pipelines for structured business plan generation and operational task management.",
      "Designed React Admin and TypeScript interfaces for workspaces, onboarding, and enterprise workflows."
    ],
    tags: ["TypeScript", "React Admin", "Supabase", "RLS", "SSE", "AI infrastructure"],
    expanded: [
      {
        label: "Architecture",
        items: [
          "Designing and developing an AI-native, multi-tenant CRM platform focused on agent-driven business operations and workflow automation.",
          "Building backend infrastructure with Supabase, PostgreSQL, Row Level Security, and Edge Functions for secure multi-company isolation.",
          "Architecting frontend systems with React Admin and TypeScript for multi-workspace management and onboarding."
        ]
      },
      {
        label: "AI systems",
        items: [
          "Developing streaming AI pipelines for structured business plan generation, iterative refinement, and automated operational task management.",
          "Integrating productivity tool workflows across Gmail, Calendar, and Drive concepts.",
          "Exploring agent safety, real-time AI UX, deterministic AI execution, relevance, accuracy, and latency evaluation."
        ]
      }
    ]
  },
  {
    slug: "lone-star-ridgebacks",
    company: "Lone Star Ridgebacks",
    website: "https://www.lonestarridgebacks.com/",
    role: "Website Manager",
    period: "Jun 2025 - Dec 2025",
    location: "Remote",
    summary: "Redesigned a client website for user experience, mobile responsiveness, SEO, and maintainability.",
    lens:
      "This was client-facing execution: understand the audience, clean up the browsing path, improve trust signals, and make the site easier to maintain after handoff.",
    bullets: [
      "Implemented custom animations, image galleries, structured data markup, and secure Wix-hosted document preview systems.",
      "Aligned branding and navigation with the client's adoption and breeder audience."
    ],
    tags: ["Wix", "SEO", "Frontend", "Structured data", "Accessibility"],
    expanded: [
      {
        label: "Client work",
        items: [
          "Redesigned and modernized the Lone Star Ridgebacks website to improve user experience, mobile responsiveness, and SEO performance.",
          "Implemented custom animations, interactive image galleries, and structured data markup.",
          "Developed secure Wix-hosted document preview systems to replace external file viewers.",
          "Optimized site structure and frontend performance for accessibility, responsiveness, and long-term maintainability."
        ]
      }
    ]
  },
  {
    slug: "lpl-financial",
    company: "LPL Financial",
    website: "https://www.lpl.com/",
    role: "Machine Learning Intern",
    period: "Jun 2024 - Sep 2024",
    location: "Remote, Austin",
    summary: "Contributed to conversational AI systems for financial services workflows.",
    lens:
      "This internship gave me a practical view of enterprise AI: response quality, evaluation, prompt refinement, and workflow constraints matter as much as the model itself.",
    bullets: [
      "Assisted with model design, testing, prompt refinement, data handling, and response quality evaluation.",
      "Gained hands-on exposure to applied machine learning and enterprise AI integration."
    ],
    tags: ["Machine Learning", "Python", "Conversational AI", "Evaluation"],
    expanded: [
      {
        label: "Internship work",
        items: [
          "Contributed to development of an AI-powered chatbot designed to streamline client interactions.",
          "Assisted with training, testing, and evaluation of conversational AI models to improve response quality.",
          "Worked on prompt refinement, data handling, and conversational workflow optimization for real-world business applications."
        ]
      }
    ]
  },
  {
    slug: "best-brains",
    company: "Best Brains",
    website: "https://bestbrains.com/",
    role: "Academic Tutor",
    period: "Oct 2022 - Jan 2023",
    location: "Austin, Texas",
    summary: "Tutored elementary and middle school students across math, reading, and writing.",
    lens:
      "Tutoring shaped how I explain technical ideas: watch where someone gets stuck, adapt the explanation, and make progress visible without making the learner feel small.",
    bullets: [
      "Adapted instruction for different learning styles, including neurodiverse learners and students with disabilities.",
      "Worked with staff to track progress and support a focused learning environment."
    ],
    tags: ["Mentoring", "Instruction", "Communication"],
    expanded: [
      {
        label: "Tutoring work",
        items: [
          "Volunteered as a tutor supporting elementary and middle school students in mathematics, reading, and writing.",
          "Adapted teaching strategies to accommodate diverse learning styles, including neurodiverse students and students with disabilities.",
          "Collaborated with instructional staff to monitor student progress and maintain an inclusive learning environment."
        ]
      }
    ]
  }
];
