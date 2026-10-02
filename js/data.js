/**
 * data.js — Centralized portfolio data
 * All content lives here.
 *
 * FIX #2: Removed "Java" as a standalone typed role — it's a skill, not a role title.
 * Hero stats auto-counted from arrays below.
 */

const PORTFOLIO = {

  /* ── PROFILE ─────────────────────────────────────────── */
  profile: {
    name: "Bhuvaneshwari G",
    shortName: "bhuvana",
    tagline: "B.Sc. Computer Science Student",

    // ✅ FIX #2: "Java" removed — skills belong in Skills section, not typed roles
    typedRoles: [
      "Aspiring Full Stack Developer",
      "Frontend Developer",
      "Exploring Software Development",
      "Building Real World Projects",
      "Problem Solver",
      "Curious Learner"
    ],

    intro: "A motivated Computer Science student focused on frontend development, problem solving, and building real-world web projects while strengthening core software development fundamentals.",
    location: "Madurai, Tamil Nadu",
    status: "Open to Internship Opportunities",
    profileImage: "assets/images/profile/profile.jpg"
  },

  /* ── CONTACT ─────────────────────────────────────────── */
  contact: {
    email: "bhuvana632007@gmail.com",
    linkedin: "bhuvaneshwari-g06",
    linkedinUrl: "https://www.linkedin.com/in/bhuvaneshwari-g06",
    github: "bhuvana-g-dev",
    githubUrl: "https://github.com/bhuvana-g-dev",
    phone: "7604910224",
    // STEP 1: Go to https://web3forms.com
    // STEP 2: Enter your email → get a free Access Key
    // STEP 3: Paste that key here
    web3formsKey: "YOUR_WEB3FORMS_KEY"
  },

  /* ── EDUCATION ───────────────────────────────────────── */
  education: {
    college: "Thiagarajar College",
    degree: "B.Sc. Computer Science",
    duration: "2024 – 2027",
    status: "Active · Pursuing"
  },

  /* ── SKILLS ──────────────────────────────────────────── */
  skills: [
    {
      category: "Frontend",
      icon: "⬡",
      color: "#c9a84c",
      items: [
        { name: "HTML5",      note: "Semantic markup"           },
        { name: "CSS3",       note: "Flexbox, Grid, Animations" },
        { name: "JavaScript", note: "ES6+, DOM, Async"          }
      ]
    },
    {
      category: "CS Fundamentals",
      icon: "◈",
      color: "#f59e0b",
      items: [
        { name: "Java",                        note: "OOP & problem solving"  },
        { name: "Data Structures & Algorithms", note: "Problem solving"        },
        { name: "DBMS",                        note: "Relational databases"    },
        { name: "Computer Networks",           note: "Networking basics"       }
      ]
    },
    {
      category: "Dev Tools",
      icon: "◉",
      color: "#8b5cf6",
      items: [
        { name: "Git",    note: "Version control"            },
        { name: "GitHub", note: "Code hosting & collaboration" },
        { name: "VS Code", note: "Development environment"   }
      ]
    },
    {
      category: "Currently Learning",
      icon: "◌",
      color: "#0ea5e9",
      items: [
        { name: "React",   note: "Component-based UI"    },
        { name: "Node.js", note: "Backend fundamentals"  }
      ]
    }
  ],

  /* ── PROJECTS ─────────────────────────────────────────── */
  projects: [
    {
      id: 1,
      title: "StayQR Emergency Platform",
      description: "AI-powered hospitality emergency response platform using QR technology and Firebase integration.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      image: "assets/images/projects/stayqr.png",
      status: "LIVE PROJECT",
      liveUrl: "https://stayqr-cc92e.web.app",
      githubUrl: "https://github.com/bhuvana-g-dev/SecureStayQR"
    },
    {
      id: 2,
      title: "Friendship Card Website",
      description: "Designed and developed a creative friendship greeting webpage with responsive layout and an attractive UI using HTML and CSS. Focused on clean visual design and cross-device compatibility.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "assets/images/projects/friendshipcard.png",
      gradientFallback: "linear-gradient(135deg, #c9a84c 0%, #8b5cf6 100%)",
      liveUrl: "https://friendship-card-ry3y.vercel.app/",
      githubUrl: "https://github.com/bhuvana-g-dev/friendship-card"
    },
    {
      id: 3,
      title: "Royal Spice Garden",
      description: "Built a responsive hotel and restaurant website with navigation, structured sections, and modern frontend design. Demonstrates multi-section layout skills and UI consistency.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "assets/images/projects/royalspice.png",
      gradientFallback: "linear-gradient(135deg, #0ea5e9 0%, #c9a84c 100%)",
      liveUrl: "https://royal-spice-garden-frontend.vercel.app/",
      githubUrl: "https://github.com/bhuvana-g-dev/royal-spice-garden-frontend"
    }
  ],

  /* ── CERTIFICATES ─────────────────────────────────────── */
  certificates: [
    {
      id: 1,
      title: "Java Programming",
      issuer: "NPTEL",
      category: "Programming",
      year: "2024",
      color: "#f59e0b",
      image: "assets/images/certificates/programminginjava.png",
      verifyLink: "https://drive.google.com/file/d/1ncqerNoky02GwJNqE1pqyx182z8QEXFA/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Body Language – Key to Professional Success",
      issuer: "NPTEL",
      category: "Soft Skills",
      year: "2024",
      color: "#10b981",
      image: "assets/images/certificates/bodylanguage.png",
      verifyLink: "https://drive.google.com/file/d/1ufPyCegAbqEGrOLACCwU_sDxGPmNODDx/view?usp=drive_link"
    },
    {
      id: 3,
      title: "Python for Data Science",
      issuer: "NPTEL",
      category: "Data Science",
      year: "2024",
      color: "#3b82f6",
      image: "assets/images/certificates/pythonfordatascience.png",
      verifyLink: "https://drive.google.com/file/d/18MlDhm-9Fd_aLODhbyRDBOiPMBs9BTpK/view?usp=drive_link"
    },
    {
      id: 4,
      title: "IBM Data Analyst",
      issuer: "Coursera",
      category: "Data Analytics",
      year: "2024",
      color: "#6366f1",
      image: "assets/images/certificates/ibmdataanalyst.png",
      verifyLink: "https://drive.google.com/file/d/1-MDWJsr-XpazxNtXeZnUa7fapsGuz17J/view?usp=drive_link"
    },
    {
      id: 5,
      title: "Microsoft Azure Data Fundamentals DP-900",
      issuer: "Coursera",
      category: "Cloud",
      year: "2024",
      color: "#0ea5e9",
      image: "assets/images/certificates/microsoftazure.png",
      verifyLink: "https://drive.google.com/file/d/1bHzkm65_vExtFraSFYxwTKaDlp1GiExq/view?usp=drive_link"
    },
    {
      id: 6,
      title: "Google AI Essentials",
      issuer: "Coursera",
      category: "AI & ML",
      year: "2024",
      color: "#8b5cf6",
      image: "assets/images/certificates/googleaiessentials.png",
      verifyLink: "https://drive.google.com/file/d/1R-H_eI3U7lGUuk8Y_yqvkiA4h7uj8Io7/view?usp=drive_link"
    }
  ],

  /* ── ACHIEVEMENTS ─────────────────────────────────────── */
  achievements: [
    {
      type: "Hackathon",
      icon: "🐍",
      title: "PYHACZ 2026",
      description: "Participated in a Python-focused hackathon, collaborating on technical problem-solving under time constraints.",
      year: "2026",
      color: "#f59e0b",
      tags: ["Python", "Team Work", "Problem Solving"]
    },
    {
      type: "Hackathon",
      icon: "🚀",
      title: "Innovate To Elevate",
      description: "Contributed to an innovation-driven hackathon challenge, developing creative technical solutions.",
      year: "2026",
      color: "#8b5cf6",
      tags: ["Innovation", "Web Dev", "Ideation"]
    },
    {
      type: "Hackathon",
      icon: "🤖",
      title: "Build with AI",
      description: "Explored AI-driven application development in a collaborative hackathon environment.",
      year: "2026",
      color: "#0ea5e9",
      tags: ["AI", "Collaboration", "Build"]
    }
  ],

  /* ── EXPERIENCE ───────────────────────────────────────── */
  experience: [
    {
      role: "Internship",
      organization: "Open for Opportunities",
      duration: "2025 – Present",
      status: "seeking",
      description: "Actively seeking frontend development internship opportunities to apply academic knowledge in a professional setting.",
      contributions: [
        "Available for frontend development roles",
        "Comfortable with HTML, CSS, and JavaScript",
        "Quick learner, eager to contribute to real projects"
      ],
      tech: ["HTML", "CSS", "JavaScript", "Git"]
    }
  ]
};