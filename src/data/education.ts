export const education = {
  school: "Round Rock High School",
  period: "Aug 2023 - May 2027",
  academy: "STEM and Business Industry Academy",
  gpa: "4.0 GPA",
  coursework: [
    "AP Calculus BC",
    "AP Computer Science A",
    "AP Physics I",
    "AP Research",
    "Digital Electronics",
    "AP Seminar",
    "Advanced Computer Science I",
    "Principles of Engineering",
    "Introduction to Engineering Design"
  ],
  certifications: [
    {
      title: "NOCTI Business Management and Administration",
      issuer: "NOCTI",
      issued: "Apr 2025"
    },
    {
      title: "OSHA 10-Hour General Industry",
      issuer: "OSHA",
      issued: "Nov 2025"
    },
    {
      title: "Autodesk Certified User: Inventor",
      issuer: "Certiport - A Pearson VUE Business",
      issued: "Apr 2024",
      credentialId: "vuob-DTSK",
      studentId: "S151579",
      skills: ["Autodesk Inventor"],
      credentialUrl: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=151&cvid=JWbgENEUAOiX/A/eUvz1iQ==",
      certificatePdf: "/certificates/autodesk-certified-user-inventor.pdf"
    },
    {
      title: "Microsoft Office Specialist: Word Associate",
      issuer: "Certiport - A Pearson VUE Business",
      issued: "May 2023",
      credentialId: "HN4Y-XM8x",
      studentId: "S151579",
      skills: ["Microsoft Word"],
      credentialUrl: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=418&cvid=+tso8nQa7RfUBVijtpUkrw==",
      certificatePdf: "/certificates/microsoft-word-associate.pdf"
    },
    {
      title: "Microsoft Office Specialist: PowerPoint Associate",
      issuer: "Certiport - A Pearson VUE Business",
      issued: "May 2023",
      credentialId: "WVC55-FasK",
      studentId: "S151579",
      skills: ["Microsoft PowerPoint"],
      credentialUrl: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=421&cvid=pCX3v2FpX6XUFenYlAmaGw==",
      certificatePdf: "/certificates/microsoft-powerpoint-associate.pdf"
    },
    {
      title: "Microsoft Office Specialist: Excel Associate",
      issuer: "Certiport - A Pearson VUE Business",
      issued: "May 2023",
      credentialId: "6Fw3-uTLm",
      studentId: "S151579",
      skills: ["Microsoft Excel"],
      credentialUrl: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=420&cvid=XpQw1QUpd7QUAmrI11UgSA==",
      certificatePdf: "/certificates/microsoft-excel-associate.pdf"
    },
    {
      title: "Microsoft Office Specialist Certification",
      issuer: "Certiport - A Pearson VUE Business",
      issued: "May 2023",
      credentialId: "9kmQ-sFpP",
      studentId: "S151579",
      skills: ["Microsoft Office"],
      credentialUrl: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=424&cvid=sgJY0QXh6ng7/p3r5E+E4Q==",
      certificatePdf: "/certificates/microsoft-office-specialist-associate.pdf"
    }
  ],
  research: [
    {
      title: "Quantum Contextuality and Error Mitigation",
      institution: "AP Research / IBM Quantum",
      summary:
        "Evaluating contextuality as an error mitigation resource in the Mermin-Peres Magic Square game using Qiskit and IBM Quantum hardware.",
      paper: {
        label: "Read AP Research paper",
        href: "/research/quantum-error-mitigation-paper.pdf"
      },
      keywords: [
        "Quantum contextuality",
        "Mermin-Peres Magic Square",
        "Error mitigation",
        "Zero-noise extrapolation",
        "Gate folding",
        "Richardson extrapolation",
        "IBM Quantum",
        "Qiskit",
        "Fidelity"
      ],
      abstract: [
        "Tests whether contextuality can function as a practical error-mitigation resource on noisy quantum hardware.",
        "Builds Mermin-Peres Magic Square circuit configurations and runs 8,192-shot IBM Quantum experiments.",
        "Applies zero-noise extrapolation through gate folding and Richardson extrapolation to compare measured outcomes.",
        "Reports fidelity movement from 0.753 to 0.805 while keeping the result tied to reproducible circuit comparisons."
      ],
      methods: ["Qiskit", "IBM Quantum", "Zero-noise extrapolation", "Gate folding", "Richardson extrapolation"],
      metrics: ["8,192 shots", "9 configurations", "0.753 to 0.805 fidelity"]
    },
    {
      title: "Sustainability Behavior Research",
      institution: "Texas State University / Texas Tech collaboration",
      summary:
        "Built analysis workflows for a 600+ student composting behavior study using the Theory of Planned Behavior.",
      paper: {
        label: "Read SEM paper",
        href: "/research/sustainability-behavior-research-paper.pdf"
      },
      keywords: [
        "Composting behavior",
        "Theory of Planned Behavior",
        "Structural equation modeling",
        "Attitudes",
        "Subjective norms",
        "Perceived behavioral control",
        "Multiple imputation",
        "Survey data",
        "Sustainability education"
      ],
      abstract: [
        "Studies student composting behavior using Theory of Planned Behavior constructs across a 600+ response survey dataset.",
        "Supports data cleaning, preprocessing, missing-data handling, and model preparation for SEM analysis.",
        "Examines how attitudes, norms, perceived control, and barriers relate to sustainability-related behavior.",
        "Frames the results as evidence that can inform campus sustainability programs and communication strategy."
      ],
      methods: ["R", "Structural Equation Modeling", "Multiple imputation", "Dataset cleaning", "Survey analysis"],
      metrics: ["600+ students", "SEM pipeline", "Co-authored manuscript"]
    }
  ]
};
