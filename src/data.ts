import { Skill, Project } from './types';

export const PERSONAL_INFO = {
  name: "Sheryl Sharon",
  fullName: "Sheryl Sharon",
  title: "Information Technology Student",
  specialization: "Cyber Security",
  location: "Cikarang, Indonesia",
  university: "President University",
  email: "sherylkaparang5@gmail.com",
  github: "https://github.com/ryl-code",
  linkedin: "https://www.linkedin.com/in/sheryl-sharon-071b85314",
  instagram: "https://www.instagram.com/xierylka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  bio: "Information Technology student at President University, focusing on Cyber Security with strong capabilities in Software Development. I adapt quickly to new tech stacks and maintain a high standard of attention to detail when building IT projects from interactive full-stack web applications to security tools. Looking for an internship opportunity where I can apply my development skills and security awareness to build and protect resilient systems.",
  education: {
    degree: "Bachelor of Science in Information Technology",
    institution: "President University",
    concentration: "Cyber Security",
    gpa: "3.69 / 4.00",
    period: "2024 - Expected 2027",
    relevantCourses: [
      "Ethical Hacking",
      "Cryptography and Data Security",
      "Security Risk Management",
      "Digital Forensic",
      "Software Engineering"
    ]
  },
  certifications: [
    {
      title: "Junior Network Administrator - BNSP Certification",
      issuer: "LSP BPPTIK - Badan Nasional Sertifikasi Profesi (BNSP)",
      field: "Network and Infrastructure",
      status: "Competent",
      description: "Credential validating foundational expertise in network administration. Covers router and switch configuration, network topology design, device maintenance, and basic network security protocols required to support enterprise systems.",
      logo: "/images/image.png"
    }
  ],
  interests: [
    {
      title: "Cyber Security",
      description: "Identifying system vulnerabilities and implementing layered security controls. Focused on web application security, practical vulnerability analysis using the CVSS framework, cryptographic cipher auditing, and designing defensive logic to protect systems against modern threat vectors."
    },
    {
      title: "Digital Forensics",
      description: "Investigating security incidents and tracking threat vectors through advanced log and artifact analysis. Experienced in digital forensics and steganography challenges, including metadata inspection, file carving, and custom Python-based LSB decryption techniques to retrieve hidden evidence."
    },
    {
      title: "Software Development",
      description: "Building clean, maintainable, and secure full-stack web applications. I handle both responsive frontend interfaces and robust backend architectures, focusing on strict input validation, secure API integrations, and safe cryptographic workflows for data protection."
    }
  ]
};

export const SKILLS: Skill[] = [
  // Technical Skills - Software Development (Full-Stack)
  { name: "Node.js", category: "Technical Skills", subCategory: "Software Development (Full-Stack)", proficiency: 75, description: "Scalable back-end services, building REST APIs, and middle-tier cryptographic validation." },
  { name: "Laravel", category: "Technical Skills", subCategory: "Software Development (Full-Stack)", proficiency: 80, description: "PHP web application framework with elegant syntax, MVC architecture, and powerful ORM." },
  { name: "PHP", category: "Technical Skills", subCategory: "Software Development (Full-Stack)", proficiency: 80, description: "Server-side web development, secure session handling, dynamic content rendering, and API creation." },
  { name: "JavaScript", category: "Technical Skills", subCategory: "Software Development (Full-Stack)", proficiency: 85, description: "Interactive client-side experiences, front-end state management, and modern ES6 application patterns." },
  { name: "Python", category: "Technical Skills", subCategory: "Software Development (Full-Stack)", proficiency: 85, description: "Data analysis, automation scripting, rapid prototyping, and back-end integration." },
  { name: "C++", category: "Technical Skills", subCategory: "Software Development (Full-Stack)", proficiency: 83, description: "System-level development, efficient memory management, object-oriented architecture, and algorithmic design." },
  { name: "Java", category: "Technical Skills", subCategory: "Software Development (Full-Stack)", proficiency: 85, description: "Advanced object-oriented programming, secure coding practices, and multi-threaded application design." },
  { name: "SQL", category: "Technical Skills", subCategory: "Software Development (Full-Stack)", proficiency: 88, description: "Structured query formulation, query optimization, view administration, and schema planning." },
  { name: "Supabase", category: "Technical Skills", subCategory: "Software Development (Full-Stack)", proficiency: 75, description: "Open source Firebase alternative, PostgreSQL database management, and authentication services." },
  { name: "Firebase", category: "Technical Skills", subCategory: "Software Development (Full-Stack)", proficiency: 80, description: "NoSQL database, real-time sync, cloud functions, and secure user authentication flows." },

  // Technical Skills - Cyber Security & Forensics
  { name: "Kali Linux", category: "Technical Skills", subCategory: "Cyber Security & Forensics", proficiency: 82, description: "Advanced penetration testing, security auditing, and utilizing pre-installed security toolkits." },
  { name: "Wireshark", category: "Technical Skills", subCategory: "Cyber Security & Forensics", proficiency: 78, description: "Network protocol analysis, deep packet inspection, and troubleshooting network security issues." },
  { name: "Autopsy", category: "Technical Skills", subCategory: "Cyber Security & Forensics", proficiency: 80, description: "Hard drive investigation, digital artifact retrieval, forensic media parsing, and chronological timeline recovery." },

  // Technical Skills - Development Tools & Environment
  { name: "Git", category: "Technical Skills", subCategory: "Development Tools & Environment", proficiency: 88, description: "Distributed version control, branching strategies, secure commit signing, and local repository synchronization." },
  { name: "GitHub", category: "Technical Skills", subCategory: "Development Tools & Environment", proficiency: 85, description: "Collaborative development workflows, pull request audits, GitHub Actions automation, and code hosting." },
  { name: "Docker", category: "Technical Skills", subCategory: "Development Tools & Environment", proficiency: 82, description: "Container virtualization, service isolation, deployment configurations, and runtime environment control." },
  { name: "Laragon", category: "Technical Skills", subCategory: "Development Tools & Environment", proficiency: 80, description: "Fast, isolated, and portable local development environment for building web applications." },
  { name: "Visual Studio Code", category: "Technical Skills", subCategory: "Development Tools & Environment", proficiency: 90, description: "Primary IDE configuration, customizable linters, static code analysis tools, and workspace optimization." },
  { name: "Android Studio", category: "Technical Skills", subCategory: "Development Tools & Environment", proficiency: 85, description: "Native Android app engineering, SDK profile configurations, and secure mobile system deployment." },
  { name: "NetBeans", category: "Technical Skills", subCategory: "Development Tools & Environment", proficiency: 80, description: "Comprehensive Java development, robust project organization, and GUI builder integration." },
  { name: "Ubuntu", category: "Technical Skills", subCategory: "Development Tools & Environment", proficiency: 85, description: "Linux system administration, server deployment, shell scripting, and environment configuration." },

  // Soft Skills
  { name: "Learnability", category: "Soft Skills", proficiency: 93, description: "Highly capable of absorbing new concepts independently, continuous self-improvement, and rapidly mastering new frameworks or security protocols." },
  { name: "Detail Oriented", category: "Soft Skills", proficiency: 95, description: "Meticulous attention to code quality, security vulnerabilities, and ensuring robust system functionality." },
  { name: "Adaptability", category: "Soft Skills", proficiency: 90, description: "Quickly learning new technology stacks, adjusting to shifting requirements, and thriving in dynamic environments." },
  { name: "Problem Solving", category: "Soft Skills", proficiency: 90, description: "Analytical mindset dedicated to diagnosing system constraints, finding vulnerability roots, and formulating highly efficient remedies." },
  { name: "Teamwork", category: "Soft Skills", proficiency: 92, description: "Active collaboration across engineering groups, peer review alignment, and active support for campus social development programs." },
  { name: "Leadership", category: "Soft Skills", proficiency: 88, description: "Coordinating peer groups, managing tech tasks, guiding student community initiatives, and steering shared objectives." },
  { name: "Critical Thinking", category: "Soft Skills", proficiency: 91, description: "Rigorous objective system logic validation, threat modeling analysis, and formulation of balanced, high-integrity judgments." }
];

export const PROJECTS: Project[] = [
  {
    id: "cryptowaf",
    title: "CryptoWAF",
    category: "IT Development",
    shortDescription: "A lightweight Web Application Firewall implementation configured with pattern-matching threat detection blocks and secure cryptography.",
    description: "Designed and implemented CryptoWAF, a fast, lightweight Web Application Firewall written in PHP. It specializes in real-time string screening and malicious pattern filtration using specialized regex maps. Employs security mechanisms to guard against SQLi, XSS, and session hijacking vectors, keeping local web servers optimized and secure.",
    technologies: ["PHP", "Security", "Regex", "Cryptography", "Apache"],
    features: [
      "Dynamic header parsing with automated injection detection heuristics",
      "Parameter validation blocking common OWASP Top 10 vulnerabilities",
      "Cryptographic request-signing filters to prevent replay attacks",
      "Minimized latency footprint designed for standard server environments",
      "Comprehensive attack telemetry audit logs for security analysis"
    ],
    architecture: "Modular server middleware pipeline integrating filtering mechanisms, packet profiling layers, and hashing-based authentication guards.",
    role: "Lead Security Researcher & Back-End Engineer",
    impact: "Provides lightweight protection handling thousands of request screenings per second with zero overhead.",
    imagePlaceholderColor: "from-blue-600/25 to-slate-900",
    image: "/images/crypto.png"
  },
  {
    id: "campus-sport-booking",
    title: "Campus Sport Booking",
    category: "IT Development",
    shortDescription: "A fully functional mobile court reservation system built in Android Studio supporting student athletic scheduling.",
    description: "Developed an intuitive Android smartphone application to streamline court and sports hall reservations at President University. Built using native Java APIs in Android Studio, utilizing local storage synchronization and Pessimistic Concurrency protocols to prevent overlapping slot selections during high-usage peak hours.",
    technologies: ["Java", "Android Studio", "SQLite", "Material Design", "XML"],
    features: [
      "Intuitive booking matrices mapping multi-court reservation slots securely",
      "Local relational persistence using optimized SQLite storage pipelines",
      "Real-time overlapping conflict checks using structural boundary comparison",
      "Clean Material UI visuals matching modern touch-target size guides",
      "Instant 예약 ticket verification screen featuring offline confirmation"
    ],
    architecture: "Model-View-Presenter (MVP) architecture utilizing SQLiteOpenHelper structures and isolated activity life-cycle handlers.",
    role: "Lead Mobile Developer & UI/UX Designer",
    impact: "Established a robust, zero-overlap reservation app with standalone offline database consistency.",
    imagePlaceholderColor: "from-indigo-600/25 to-slate-900",
    image: "/images/campusbook.png"
  },
  {
    id: "lens-of-life",
    title: "Social Project - Lens of Life",
    category: "Campus Social",
    shortDescription: "A campus-wide documentary and creative photojournalism campaign promoting inclusion and mental-health awareness.",
    description: "Pioneered a collaborative campus photojournalism movement intended to capture student life experiences and humanitarian dialogue. Directed creative content, media showcases, and community campaigns to foster a compassionate campus climate, destigmatize mental health challenges, and support diversity.",
    technologies: ["Documentary", "Solidaritas", "Public Speaking", "Photography", "Event Organizing"],
    features: [
      "Coordinated campus art gallery displaying student photographic studies",
      "Conducted mental-health panels with professional speakers and advocacy leads",
      "Reached hundreds of students through combined digital and print publications",
      "Established peer-group support circles within student residential halls"
    ],
    architecture: "Community leadership framework based on peer mental-health model, cross-cultural inclusion audits, and structured public communication.",
    role: "Social Project Director & Co-Curator",
    impact: "Mobilized volunteer resources and generated extensive positive feedback, fostering inclusive social dialogue on campus grounds.",
    imagePlaceholderColor: "from-emerald-600/25 to-slate-900",
    image: "/images/tamanbaca.jpeg"
  },
  {
    id: "mapalus-peduli-kawanua",
    title: "Mapalus Peduli Kawanua",
    category: "Campus Social",
    shortDescription: "A student-led mutual aid and solidarity network honoring the traditional Minahasa reciprocal assistance concept.",
    description: "Organized and sustained a campus charity auxiliary modeled of the native communal mutual aid concept ('Mapalus'). Led volunteer coordination, logistics flow systems, and community donation strategies to deliver emergency supplies, financial packages, and emotional support networks for boarding students.",
    technologies: ["Community Care", "Logistics Co.", "Social Activism", "Philanthropy", "Leadership"],
    features: [
      "Created structured logistics pipelines delivering aid materials to students in need",
      "Mobilized community donation systems and student-run charity challenges",
      "Organized traditional reciprocal care roundtables to strengthen solidarity",
      "Fostered long-term regional cooperation agreements between student associations"
    ],
    architecture: "Traditional mutual-aid structure modernized using instant messaging coordination and real-time ledger accounting.",
    role: "Co-Founder & Chief Humanitarian Coordinator",
    impact: "Successfully channeled vital resources to affected peer groups, reinforcing resilient communal ties inside the regional student body.",
    imagePlaceholderColor: "from-amber-600/25 to-slate-900",
    image: "/images/image copy.png"
  },
  {
    id: "ctf-1st-place-2024",
    title: "1st Place Team — President University CTF 2024",
    category: "Achievement",
    shortDescription: "Secured first place in the annual President University Capture The Flag (CTF) cybersecurity competition.",
    description: "Competed and won first place in the President University Capture The Flag (CTF) 2024. Successfully solved a series of complex cybersecurity challenges covering web exploitation, cryptography, reverse engineering, digital forensics, and binary exploitation.",
    technologies: ["Web Exploitation", "Cryptography", "Reverse Engineering", "Digital Forensics", "Binary Exploitation"],
    features: [
      "Analyzed and exploited vulnerabilities in custom web applications",
      "Decrypted complex cryptographic algorithms and ciphers",
      "Reverse engineered binary files to uncover hidden flags",
      "Conducted digital forensic analysis on provided disk images"
    ],
    architecture: "Cybersecurity Competition",
    role: "Team Lead & Cybersecurity Specialist",
    teamName: "President University Team",
    impact: "Demonstrated advanced problem-solving skills and deep understanding of cybersecurity concepts under pressure.",
    imagePlaceholderColor: "from-yellow-600/25 to-slate-900",
    image: "/images/ctf2.png"
  },
  {
    id: "ctf-top-8-2026",
    title: "Top 8 Team — President University CTF 2026",
    category: "Achievement",
    shortDescription: "Achieved Top 8 ranking in the highly competitive President University Capture The Flag (CTF) 2026.",
    description: "Participated and ranked in the Top 8 among numerous teams in the President University Capture The Flag (CTF) 2026. Tackled advanced cybersecurity challenges that tested skills in penetration testing, network analysis, and secure coding.",
    technologies: ["Penetration Testing", "Network Analysis", "Secure Coding", "OSINT"],
    features: [
      "Performed advanced penetration testing on simulated vulnerable networks",
      "Analyzed network traffic to identify malicious activities and extract flags",
      "Utilized Open Source Intelligence (OSINT) to gather critical information",
      "Identified and patched vulnerabilities in provided source code"
    ],
    architecture: "Cybersecurity Competition",
    role: "Cybersecurity Analyst",
    teamName: "President University Team",
    impact: "Showcased continuous growth and consistent performance in solving complex security problems.",
    imagePlaceholderColor: "from-slate-600/25 to-slate-900",
    image: "/images/ctf1.png"
  }
];
