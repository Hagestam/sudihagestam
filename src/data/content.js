// Edit this file to update the whole site.

export const profile = {
  name: "Sudi Hagestam",
  heroTitle: ["Hi, I'm Sudi Hagestam.", "An aspiring ML and AI Engineer."],
  intro:
    "I'm studying Computer Science at the African Leadership University in Mauritius. I love exploring how computing can be applied to practical problems. Much of my recent work has involved machine learning and AI, alongside backend development and data systems.",
  about: [
    "I'm studying Computer Science at the African Leadership University in Mauritius. Most of my recent work has involved machine learning and AI applications, although I'm also interested in backend development and the systems that support them.",
    "I enjoy working through technical problems, experimenting with different approaches and seeing an idea develop into something that actually works.",
  ],
  contactLine: "I'm currently looking for internship opportunities in software development, AI and data-related fields.",
  email: "s.hagestam@alustudent.com",
  github: "https://github.com/hagestam",
  linkedin: "https://www.linkedin.com/in/sudihagestam", // TODO: paste your LinkedIn URL
  // Files live in the "public" folder. Paths start with "/" and do NOT include "public".
  photo: `${import.meta.env.BASE_URL}profile.jpg`,
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
      "Trained EfficientNet-B0 on 54,000 PlantVillage images to classify 38 crop disease categories, achieving 97.3% top-1 accuracy. Reduced the model size by 75% through INT8 quantisation and built a RAG component that provides additional information about the predicted diseases. The application uses FastAPI for its backend.",
    stack: "PyTorch, EfficientNet, TensorFlow Lite, FastAPI, LangChain",
    image: `${import.meta.env.BASE_URL}projects/crop-disease.png`,
    link: "https://github.com/Hagestam/crop-disease-advisor", // TODO: this project repo
  },
  {
    title: "Real-Time Financial Anomaly Detection",
    metric: "94.2%",
    metricLabel: "F1 on the fraud class",
    description:
      "Developed a fraud detection system combining Isolation Forest and XGBoost using a dataset of 590,000 transactions. Achieved a 94.2% F1-score on the fraud class and integrated SHAP to explain individual predictions. Containerised the application with Docker and used Redis to support inference, achieving sub-50ms prediction latency in testing.",
    stack: "XGBoost, Isolation Forest, SHAP, MLflow, Redis, FastAPI",
    image: `${import.meta.env.BASE_URL}projects/Fraud-detection.png`,
    link: "https://github.com/Hagestam/fraud-detection-model",
  },
  {
    title: "Autonomous Maintenance Agent",
    metric: "P0",
    metricLabel: "emergency priority level",
    description:
      "Developed a backend application for managing maintenance requests and technician assignments. The system schedules preventive maintenance and can reassign technicians when emergencies occur. Integrated WhatsApp notifications and asynchronous webhooks to support communication and updates.",
    stack: "Python, FastAPI, SQLAlchemy, Claude API",
    image: `${import.meta.env.BASE_URL}projects/agent.png`,
    link: "https://github.com/Hagestam/maintainance-agent",
  },
  {
    title: "Intelligent IT Helpdesk",
    metric: "P1",
    metricLabel: "urgent ticket priority",
    description:
      "Built an AI-assisted helpdesk system that processes incoming support tickets, classifies incidents and assigns priority levels. It can escalate urgent issues to senior technicians and generate suggested solutions for common Windows, Microsoft 365 and network problems. Includes an audit trail for tracking ticket activity.",
    stack: "Python, FastAPI, Claude API, PostgreSQL, Twilio",
    image: `${import.meta.env.BASE_URL}projects/it-helpdesk.jpg`,
    link: "https://github.com/Hagestam/helpdesk-triage",
  },
];

export const experience = [
  {
    role: "Associate GDG Technical Lead",
    org: "Google Developer Groups on Campus, The Co-operative University of Kenya",
    dates: "Jan 2025 – Oct 2025",
    summary:
      "Helped organise technical workshops covering web development, cloud technologies and AI/ML for a campus developer community of 996 members. Mentored students during project development and debugging sessions and supported hackathon preparation.",
  },
  {
    role: "Game Engineering Intern",
    org: "AuraVision, Nairobi",
    dates: "May 2025 – Aug 2025",
    summary:
      "Worked with Unity (C#) and Unreal Engine (C++ and Blueprints), teaching students game development concepts and reviewing their code. Covered object-oriented programming, game physics and AI behaviour trees. Also contributed to learning materials on NPC behaviour and pathfinding.",
  },
  {
    role: "Alumni IT Instructor, Databases",
    org: "Kakamega School",
    dates: "Jun 2023 – Aug 2023",
    summary:
      "Mentored 63 students working on their KCSE Computer Studies database projects. Helped students with relational database design, Microsoft Access and SQL. Reviewed and debugged more than 70 projects.",
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
