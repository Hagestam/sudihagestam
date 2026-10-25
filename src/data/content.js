// Edit this file to update the whole site.

export const profile = {
  name: "Sudi Hagestam",
  heroTitle: ["Hi, my name is Sudi Hagestam.", "I am an aspiring ML engineer."],
  intro:
    "I build end-to-end ML pipelines, agentic AI systems and data tools, from model training to deployed APIs.",
  about: [
    "I am a computer science student at African Leadership University in Mauritius, focused on AI, machine learning and data science.",
    "I like turning operational problems into data-driven systems: models that are fast enough to deploy, explainable enough to trust, and wrapped in clean APIs.",
  ],
  contactLine: "Open to internships in machine learning, data and AI engineering.",
  email: "s.hagestam@alustudent.com",
  github: "https://github.com/hagestam",
  linkedin: "https://www.linkedin.com/in/sudihagestam", // TODO: paste your LinkedIn URL
  // Files live in the "public" folder. Paths start with "/" and do NOT include "public".
  photo: "/profile.jpg",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "Crop Disease Detection & Advisory",
    metric: "97.3%",
    metricLabel: "top-1 accuracy, 38 classes",
    description:
      "Fine-tuned EfficientNet-B0 on 54,000 PlantVillage images, then cut the model size by 75% with INT8 quantization for mobile. Retrieval-augmented advice sits behind a FastAPI backend.",
    stack: "PyTorch, EfficientNet, TensorFlow Lite, FastAPI, LangChain",
    image: "/projects/crop-disease.png",
    link: "https://github.com/Hagestam/crop-disease-advisor", // TODO: this project repo
  },
  {
    title: "Real-Time Financial Anomaly Detection",
    metric: "94.2%",
    metricLabel: "F1 on the fraud class",
    description:
      "Hybrid Isolation Forest and XGBoost detector trained on 590K transactions, with SHAP attribution for every prediction and sub-50ms inference in Docker with Redis.",
    stack: "XGBoost, Isolation Forest, SHAP, MLflow, Redis, FastAPI",
    image: "/projects/Fraud-detection.png",
    link: "https://github.com/Hagestam/fraud-detection-model",
  },
  {
    title: "Autonomous Maintenance Agent",
    metric: "P0",
    metricLabel: "interrupts reassign technicians live",
    description:
      "Headless backend that schedules preventive maintenance and re-assigns technicians for emergencies over WhatsApp, using a dual-loop scheduler and async webhooks.",
    stack: "Python, FastAPI, SQLAlchemy, Claude API",
    image: "/projects/agent.png",
    link: "https://github.com/Hagestam/maintainance-agent",
  },
  {
    title: "Intelligent IT Helpdesk",
    metric: "P1",
    metricLabel: "escalations alert seniors instantly",
    description:
      "Ticket ingestion, AI triage, priority scoring and escalation routing, with generated fixes for common Windows, M365 and network incidents and a full audit trail.",
    stack: "Python, FastAPI, Claude API, PostgreSQL, Twilio",
    image: "/projects/it-helpdesk.jpg",
    link: "https://github.com/Hagestam/helpdesk-triage",
  },
];

export const experience = [
  {
    role: "Associate GDG Technical Lead",
    org: "Google Developer Groups on Campus, The Co-operative University of Kenya",
    dates: "Jan 2025 – Oct 2025",
    summary:
      "Supported workshops in web, cloud and AI/ML for a 996-member developer community, mentored students through debugging and hackathons, and helped coordinate events.",
  },
  {
    role: "Game Engineering Intern",
    org: "AuraVision, Nairobi",
    dates: "May 2025 – Aug 2025",
    summary:
      "Taught Unity (C#) and Unreal Engine (C++), reviewed student code for quality and OOP, and helped build AI-driven NPC behavior and pathfinding into the curriculum.",
  },
  {
    role: "Alumni IT Instructor, Databases",
    org: "Kakamega School",
    dates: "Jun 2023 – Aug 2023",
    summary:
      "Mentored 63 students on relational database projects and reviewed and debugged more than 70 of them.",
  },
];

export const skills = [
  { group: "Languages", items: "Python, C++, C, SQL" },
  { group: "Data", items: "Pandas, NumPy, ETL, Statistical Analysis, EDA" },
  { group: "Machine learning", items: "Scikit-Learn, PyTorch, TensorFlow Lite, EfficientNet, XGBoost" },
  { group: "MLOps", items: "MLflow, Redis, FastAPI, SQLAlchemy, REST APIs" },
  { group: "Tools", items: "Git, Jupyter, PostgreSQL, MongoDB, Twilio, Power BI, Excel" },
];

export const education = [
  {
    name: "African Leadership University",
    location: "Pamplemousses, Mauritius",
    detail: "B.Sc. in Computer Science, Minor in Entrepreneurial Leadership",
    dates: "Feb 2026 – Feb 2030",
  },
  {
    name: "WorldQuant University",
    location: "Virtual",
    detail: "Applied Data Science",
    dates: "Mar 2026 – Present",
  },
  
  {
    name: "The Co-operative University of Kenya",
    location: "Nairobi, Kenya",
    detail: "B.Sc. in Computer Science (Deferred)",
    dates: "Jun 2024 – Nov 2025",
  },
];
