export const portfolioData = {
  personalInfo: {
    name: "Hitesh Jain",
    tagline: "AI and ML graduate",
    location: "Bengaluru, India",
status: "Open to Internships & Opportunities",
    statusColor: "#22c55e",
    bio: "Artificial Intelligence and Machine Learning student at Dayananda Sagar College of Engineering with experience in Machine Learning, MERN Stack Development. Passionate about building intelligent, real-world applications.",
    extendedBio: [
      "I am a dedicated Software Developer and Data Science enthusiast with a passion for building Machine Learning, Deep Learning, and full-stack applications that solve real-world problems.",
      "My expertise spansn  Computer Science, Artificial Intelligence, and Software Engineering, enabling me to design efficient, scalable, and reliable software solutions.",
      "Beyond coding, I enjoy exploring emerging technologies, participating in hackathons, and continuously expanding my skills through hands-on projects and collaboration."
    ],
    highlights: [
      { label: "Data & ML Engineer", icon: "💻" },
      { label: "Problem Solver", icon: "🎯" },
      { label: "Lifelong Learner", icon: "📖" },
      { label: "Team Collaborator", icon: "🤝" }
    ],
    education: [
      {
        degree: "Bachelor of Engineering",
    institution: "Dayananda Sagar College of Engineering",
    location: "Bengaluru, India",
    period: "2023 – 2027",
    score: "CGPA: 8.3",
    badge: "AIML"
      },
      {
        degree: "Pre-University",
    institution: "TMAES Pre-University College",
    location: "Hosapete, India",
    period: "2021 – 2023",
    score: "86%",
    badge: "PUC"
      }
    ],
    socials: {
      github: "https://github.com/hitesh2912",
      linkedin: "https://www.linkedin.com/in/hiteshjain2912/",
      email: "hitesh29j@gmail.com",
      googleScholar: "https://scholar.google.com/",
      twitter: "https://twitter.com/"
    }
  },


 skills: [
  { name: "Python", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "SQL", category: "Database" },
  { name: "NoSQL", category: "Database" },

  { name: "ReactJS", category: "Frontend" },
  { name: "NodeJS", category: "Backend" },
  { name: "ExpressJS", category: "Backend" },
  { name: "MongoDB", category: "Database" },

  { name: "Scikit-learn", category: "Machine Learning" },
  { name: "Keras", category: "Machine Learning" },

  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Power BI", category: "Tools" },
  { name: "Render", category: "Tools" },
  { name: "Google Colab", category: "Tools" },
  { name: "UiPath", category: "Tools" }
],
  // experiences: [
  //   {
  //     company: "Enterprise AI & Data Solutions",
  //     role: "AI & Data Engineering Lead / Specialist",
  //     period: "2024 - Present",
  //     location: "Full-Time",
  //     logo: "🏢",
  //     highlights: [
  //       "Architected production RAG pipelines and autonomous agentic workflows using FastAPI backend and cloud vector databases.",
  //       "Built automated data ETL pipelines reducing manual reporting latency by over 60%.",
  //       "Collaborated with cross-functional stakeholders to deliver scalable enterprise machine learning solutions."
  //     ],
  //     techStack: ["Python", "FastAPI", "RAG", "LLMs", "Vector DB", "Docker", "AWS"]
  //   },
  //   {
  //     company: "Space & AI Research Center",
  //     role: "Machine Learning Engineer",
  //     period: "2023 - 2024",
  //     location: "Research Lab",
  //     logo: "🚀",
  //     highlights: [
  //       "Developed deep learning time-series predictive models using LSTM networks to detect equipment degradation and forecast failures.",
  //       "Conducted multivariate telemetry data analytics and co-authored technical research publications."
  //     ],
  //     techStack: ["Python", "LSTM", "TensorFlow", "Pandas", "Scikit-Learn"]
  //   },
  //   {
  //     company: "HealthTech & Diagnostics Lab",
  //     role: "Data Science & Computer Vision Intern",
  //     period: "2023",
  //     location: "Bengaluru, India",
  //     logo: "🧪",
  //     highlights: [
  //       "Engineered computer vision segmentation and augmentation models for diagnostic card analysis achieving 97%+ accuracy.",
  //       "Automated lab data extraction into centralized Information Systems."
  //     ],
  //     techStack: ["Python", "OpenCV", "TensorFlow", "Image Processing"]
  //   }
  // ],

  projects: [
    
    {
      id:"parampara",
 title:"Parampara Jewels",
 subtitle:"MERN Stack Ecommerce Website",
 description:"Developed a complete online jewellery shopping platform using MongoDB, Express, React, and Node.js.",
 tags:["MongoDB","Express","React","Node"],
      github: "https://github.com/Hitesh2912/gold-shop",
      demo: "https://gold-shop-f4zc.onrender.com",
      featured: true,
      icon: "ShoppingCart"
    },
    {
      id:"clothing",
 title:"Clothing Website",
 subtitle:"Responsive React Website",
 description:"Designed and developed a responsive clothing e-commerce frontend using React Vite, HTML, and CSS.",
 tags:["React","Vite","HTML","CSS"],
      github: "https://github.com/",
      demo: "https://react-ecommerce-p2iu.vercel.app/",
      featured: true,
      icon: "Tshirt"
    },
        {
      id:"freshscan",
 title:"FreshScan",
 subtitle:"Produce Intelligence",
 description:"Instant visual classification for modern agriculture and retail supply chains.",
 tags:["DL","Mlops","Docker","Colab"],
      github: "https://github.com/",
      demo: "https://fruit-classifier-xtzq.onrender.com",
      featured: true,
      icon: "Activity"
    },
    {
      id:"aipital",
 title:"AIPITAL",
 subtitle:"Disease Prediction System",
 description:"Machine learning application for early disease prediction with a React-based frontend.",
 tags:["Machine Learning","React","JavaScript"],
 featured:true,
      icon: "Activity",
    },
    
//       {
//  id:"event-based-image-detection",
//  title:"Event-Based Image Detection using TCNN",
//  subtitle:"Deep Learning | Edge Computing",
//  description:"Developed an event-based vision system using Temporal Convolutional Networks (TCNN) for image detection on edge devices.",
//  tags:["Python","Deep Learning","TCNN","Edge Computing"],
//  featured:true,
//  icon: "Camera",
// }
  ],

  // hackathons: [
  //   {
  //     title: "National AI/ML Hackathon",
  //     award: "1st Place Winner",
  //     organizer: "National Tech Summit",
  //     description: "Secured top rank among 250+ participant teams building high-accuracy AI predictive modeling workflows under tight deadline.",
  //     badge: "🏆 1st Place",
  //     date: "2024"
  //   },
  //   {
  //     title: "Generative AI Innovation Challenge",
  //     award: "Runner-Up",
  //     organizer: "AI Startup Accelerator",
  //     description: "Developed an autonomous agentic document analysis engine using open-source LLMs.",
  //     badge: "🥈 Runner-Up",
  //     date: "2023"
  //   },
  //   {
  //     title: "Intel Developer Challenge",
  //     award: "Champion",
  //     organizer: "Intel Corporation",
  //     description: "Optimized parallel AI inferencing workloads for edge devices.",
  //     badge: "🏆 Winner",
  //     date: "2023"
  //   }
  // ],

  // volunteering: [
  //   {
  //     role: "Student Tech Ambassador",
  //     organization: "Intel / Tech Community",
  //     description: "Organized technical workshops and mentored developer groups in machine learning and software engineering.",
  //     icon: "Cpu"
  //   },
  //   {
  //     role: "Vice Chair",
  //     organization: "Undergraduate Research Group",
  //     description: "Led research paper discussions and guided students in writing conference submissions.",
  //     icon: "Users"
  //   },
  //   {
  //     role: "Code Mentor",
  //     organization: "Code4Thought Community",
  //     description: "Conducted coding bootcamps on C++, Python, and Git/GitHub.",
  //     icon: "Code"
  //   }
  // ],

  research: [
    {
      id: "res-1",
      title: "Lightweight Encryption for Edge AI: Performance and Security Evaluation on IoT Devices",
      // publication: "IEEE Space, Aerospace and Defence Conference (Scopus Indexed)",
      coAuthors: "Hitesh Jain.",
      abstract: "This paper presents a secure data transmission framework for continuous patient monitoring. The system integrates AES encryption and HMAC authentication to ensure data confidentiality and integrity.",
      tags: ["AES", "HMAC", "IOT", "Data Security"],
      doiLink: "https://docs.google.com/document/d/1NJy3-coOB-1BNdiCcin_er08xKmjHB6w/edit?usp=sharing&ouid=116391689122258147913&rtpof=true&sd=true"
    }
  ]
};


certifications:[
"Microsoft Azure",
"Reinforcement Learning",
"R Training",
"Cyber Security - Ashtaksha Labs",
"SQL"
]

