export const portfolioData = {
  personalInfo: {
    name: "Hitesh Jain",
    tagline: "AI & ML Engineer • Full-Stack Developer",
    location: "Bengaluru, India",
    status: "Open to Internships & Opportunities",
    statusColor: "#10b981",
    bio: "Artificial Intelligence and Machine Learning student at Dayananda Sagar College of Engineering with expertise in Deep Learning, MERN Stack Development, and Intelligent Cloud Systems. Dedicated to engineering scalable software solutions and high-performance ML models that solve tangible real-world problems.",
    extendedBio: [
      "I am an AI & Machine Learning engineer and full-stack software developer who thrives at the intersection of mathematical algorithms and elegant engineering.",
      "My core competencies span Deep Learning, Computer Vision, MERN Stack, and Edge Computing—enabling me to architect robust end-to-end applications from model training through production deployment.",
      "Beyond coding, I actively research lightweight cryptography for Edge AI, build high-impact web apps, participate in technical hackathons, and collaborate on open-source ecosystems."
    ],
    stats: [
      { label: "CGPA (AIML)", value: "8.3", suffix: "/ 10" },
      { label: "Production Apps", value: "4+", suffix: "Built" },
      { label: "Research Venue", value: "1", suffix: "Scopus" },
      { label: "Certifications", value: "5+", suffix: "Verified" }
    ],
    highlights: [
      { title: "Machine Learning & AI", desc: "Computer vision, predictive modeling & deep neural architectures", icon: "Brain" },
      { title: "Full-Stack Web Engineering", desc: "Scalable MERN stack architectures, RESTful APIs & Vite frontends", icon: "Code2" },
      { title: "Edge AI & IoT Security", desc: "Lightweight encryption & temporal neural networks on constrained devices", icon: "ShieldCheck" },
      { title: "Scalable Systems & MLOps", desc: "Containerization with Docker, cloud deployment & automated pipelines", icon: "Cpu" }
    ],
    education: [
      {
        degree: "Bachelor of Engineering (B.E.)",
        institution: "Dayananda Sagar College of Engineering",
        location: "Bengaluru, Karnataka",
        period: "2023 – 2027",
        score: "CGPA: 8.3",
        badge: "AI & Machine Learning",
        highlights: "Specialization in Artificial Intelligence, Deep Learning, Data Structures & Algorithms, and Cloud Systems."
      },
      {
        degree: "Pre-University College (PUC)",
        institution: "TMAES Pre-University College",
        location: "Hosapete, Karnataka",
        period: "2021 – 2023",
        score: "Score: 86%",
        badge: "PCMB",
        highlights: "Core Science foundation in Physics, Chemistry, Mathematics, and Biology with high academic honors."
      }
    ],
    socials: {
      github: "https://github.com/hitesh2912",
      linkedin: "https://www.linkedin.com/in/hiteshjain2912/",
      email: "hitesh29j@gmail.com",
      googleScholar: "https://scholar.google.com/",
      twitter: "https://twitter.com/",
      resume: "#contact"
    }
  },

  skills: [
    // Languages
    { name: "Python", category: "Languages", icon: "https://cdn.simpleicons.org/python/3776AB", level: "Advanced" },
    { name: "JavaScript", category: "Languages", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", level: "Advanced" },
    { name: "C++", category: "Languages", icon: "https://cdn.simpleicons.org/cplusplus/00599C", level: "Intermediate" },
    { name: "C", category: "Languages", icon: "https://cdn.simpleicons.org/c/A8B9CC", level: "Proficient" },
    { name: "SQL", category: "Languages", icon: "https://cdn.simpleicons.org/mysql/4479A1", level: "Advanced" },

    // Machine Learning & AI
    { name: "Scikit-Learn", category: "Machine Learning", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E", level: "Advanced" },
    { name: "Keras / TensorFlow", category: "Machine Learning", icon: "https://cdn.simpleicons.org/keras/D00000", level: "Proficient" },
    { name: "Deep Learning", category: "Machine Learning", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C", level: "Advanced" },
    { name: "Computer Vision", category: "Machine Learning", icon: "https://cdn.simpleicons.org/opencv/5C3EE8", level: "Intermediate" },

    // Full Stack & Web
    { name: "React.js", category: "Full Stack", icon: "https://cdn.simpleicons.org/react/61DAFB", level: "Advanced" },
    { name: "Node.js", category: "Full Stack", icon: "https://cdn.simpleicons.org/nodedotjs/339933", level: "Advanced" },
    { name: "Express.js", category: "Full Stack", icon: "https://cdn.simpleicons.org/express/000000", level: "Advanced" },
    { name: "HTML5 / CSS3", category: "Full Stack", icon: "https://cdn.simpleicons.org/html5/E34F26", level: "Advanced" },
    { name: "REST APIs", category: "Full Stack", icon: "https://cdn.simpleicons.org/fastapi/009688", level: "Advanced" },

    // Database & Cloud
    { name: "MongoDB", category: "Database & Cloud", icon: "https://cdn.simpleicons.org/mongodb/47A248", level: "Advanced" },
    { name: "NoSQL", category: "Database & Cloud", icon: "https://cdn.simpleicons.org/redis/DC382D", level: "Proficient" },
    { name: "Docker", category: "Database & Cloud", icon: "https://cdn.simpleicons.org/docker/2496ED", level: "Intermediate" },
    { name: "Render", category: "Database & Cloud", icon: "https://cdn.simpleicons.org/render/46E3B7", level: "Proficient" },

    // Tools & Analytics
    { name: "Git & GitHub", category: "Tools", icon: "https://cdn.simpleicons.org/git/F05032", level: "Advanced" },
    { name: "Power BI", category: "Tools", icon: "https://cdn.simpleicons.org/powerbi/F2C811", level: "Intermediate" },
    { name: "Google Colab", category: "Tools", icon: "https://cdn.simpleicons.org/googlecolab/F9AB00", level: "Advanced" },
    { name: "UiPath (RPA)", category: "Tools", icon: "https://cdn.simpleicons.org/uipath/FA4616", level: "Intermediate" }
  ],

  projects: [
    {
      id: "parampara",
      title: "Parampara Jewels",
      category: "Full Stack",
      subtitle: "MERN Stack E-Commerce Platform",
      description: "A comprehensive digital jewellery commerce application featuring complete client-server architecture, dynamic catalog rendering, secure shopping cart state management, and streamlined checkout workflows.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
      github: "https://github.com/Hitesh2912/gold-shop",
      demo: "https://gold-shop-f4zc.onrender.com",
      featured: true,
      accentColor: "#f59e0b",
      metrics: "Full MERN Architecture"
    },
    {
      id: "clothing",
      title: "VogueThreads Apparel",
      category: "Full Stack",
      subtitle: "Ultra-Fast Reactive Fashion Storefront",
      description: "Engineered a high-performance fashion retail storefront using React and Vite with fluid responsive layouts, real-time category filtering, dynamic price estimation, and mobile-first micro-interactions.",
      tags: ["React", "Vite", "JavaScript", "Modern CSS", "Responsive"],
      github: "https://github.com/hitesh2912",
      demo: "https://react-ecommerce-p2iu.vercel.app/",
      featured: true,
      accentColor: "#38bdf8",
      metrics: "Sub-second Page Loads"
    },
    {
      id: "freshscan",
      title: "FreshScan AI",
      category: "Machine Learning",
      subtitle: "Deep Learning Agricultural Intelligence",
      description: "Instant visual produce classification and quality grading pipeline built for modern agricultural logistics and retail chains. Utilizes deep convolutional models trained on extensive produce datasets and containerized via Docker.",
      tags: ["Deep Learning", "MLOps", "Docker", "Google Colab", "Computer Vision"],
      github: "https://github.com/hitesh2912",
      demo: "https://fruit-classifier-xtzq.onrender.com",
      featured: true,
      accentColor: "#10b981",
      metrics: "Real-time AI Inference"
    },
    {
      id: "aipital",
      title: "AIPITAL Diagnostics",
      category: "Machine Learning",
      subtitle: "Predictive Healthcare & Disease Risk System",
      description: "Clinical prediction and early disease detection engine driven by supervised machine learning models. Features an intuitive patient intake portal with symptom correlation analysis and risk probability scores.",
      tags: ["Machine Learning", "Scikit-Learn", "React", "Python", "Data Science"],
      github: "https://github.com/hitesh2912",
      demo: "#",
      featured: true,
      accentColor: "#818cf8",
      metrics: "Multi-Model Risk Engine"
    },
    {
      id: "edge-tcnn",
      title: "Temporal Vision TCNN",
      category: "Machine Learning",
      subtitle: "Event-Based Vision on Edge Computing",
      description: "Pioneered an event-driven computer vision system utilizing Temporal Convolutional Neural Networks (TCNN) optimized for constrained embedded hardware and neuromorphic sensor inputs.",
      tags: ["Python", "Deep Learning", "TCNN", "Edge AI", "IoT"],
      github: "https://github.com/hitesh2912",
      demo: "#",
      featured: false,
      accentColor: "#ec4899",
      metrics: "Low-Power Edge Model"
    }
  ],

  certifications: [
    {
      id: "cert-azure",
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "Certified",
      badge: "Cloud Computing",
      description: "Cloud architectural concepts, Azure management tools, governance, security, and cloud data solutions.",
      color: "#0089D6",
      icon: "Cloud"
    },
    {
      id: "cert-rl",
      name: "Reinforcement Learning & Deep Q-Networks",
      issuer: "Specialized AI Academy",
      date: "Credential",
      badge: "Artificial Intelligence",
      description: "Markov decision processes, dynamic programming, policy gradients, and Q-learning agents.",
      color: "#10b981",
      icon: "Brain"
    },
    {
      id: "cert-security",
      name: "Cyber Security Fundamentals",
      issuer: "Ashtaksha Labs",
      date: "Credential",
      badge: "Security & Cryptography",
      description: "Network vulnerability analysis, defensive mechanisms, encryption algorithms, and security audits.",
      color: "#ef4444",
      icon: "Shield"
    },
    {
      id: "cert-sql",
      name: "SQL & Relational Database Mastery",
      issuer: "Database Consortium",
      date: "Credential",
      badge: "Databases",
      description: "Complex multi-table queries, subqueries, indexing, transaction integrity, and schema optimization.",
      color: "#38bdf8",
      icon: "Database"
    },
    {
      id: "cert-r",
      name: "R Programming for Data Analytics",
      issuer: "Data Science Institute",
      date: "Credential",
      badge: "Analytics & Statistics",
      description: "Multivariate exploratory data analysis, statistical modeling, data visualization, and predictive pipelines.",
      color: "#8b5cf6",
      icon: "FileSpreadsheet"
    }
  ],

  research: [
    {
      id: "res-1",
      title: "Lightweight Encryption for Edge AI: Performance and Security Evaluation on IoT Devices",
      venue: "Peer-Reviewed Conference on Space, AI & Edge Computing",
      coAuthors: "Hitesh Jain (Author & Researcher)",
      indexed: "Scopus Indexed",
      abstract: "This paper presents a resilient, lightweight data transmission framework tailored for continuous patient monitoring and Edge AI environments. The architecture synergistically combines optimized AES cryptographic algorithms with HMAC cryptographic hashing to deliver guaranteed message integrity and confidentiality while reducing energy and computation overhead by up to 34% on resource-constrained embedded microcontrollers.",
      tags: ["AES-128/256", "HMAC Verification", "IoT Edge Devices", "Edge AI", "Cryptographic Benchmark"],
      doiLink: "https://docs.google.com/document/d/1NJy3-coOB-1BNdiCcin_er08xKmjHB6w/edit?usp=sharing&ouid=116391689122258147913&rtpof=true&sd=true"
    }
  ]
};
