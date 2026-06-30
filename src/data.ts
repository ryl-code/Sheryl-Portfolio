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
    shortDescription: "A cryptography-enhanced Layer-7 WAF that fuses regex threat screening with HMAC-SHA256 signatures and cache-based nonces to prevent injection, request tampering, and replay attacks with zero overhead.",
    description: "Designed and implemented CryptoWAF, a cryptography-enhanced Layer-7 Web Application Firewall written in PHP (Laravel). It specializes in fusing traditional pattern-based threat screening with cryptographic request validation. Implements api-key authentication, constant-time HMAC-SHA256 signature checks, and cache-based nonces to prevent injection, request tampering, and replay attack vectors while maintaining low-latency server performance.",
    technologies: ["Laravel", "MySQL", "OpenSSL", "HMAC-SHA256", "AES-256-GCM", "Regex"],
    features: [
      "Cryptographic request-signing filters using constant-time HMAC-SHA256 to guarantee transaction integrity.",
      "Cache-based nonce verification pipeline with a 10-minute TTL to effectively prevent replay attacks.",
      "Regex-mapped threat engine for real-time filtration of common SQL Injection and Cross-Site Scripting (XSS) vectors.",
      "Automated adaptive IP blacklisting with exponential backoff triggers for high-severity violations and brute-force behaviors.",
      "Comprehensive attack telemetry audit logs stored via structured JSON data for deep forensic analysis."
    ],
    architecture: "Modular server middleware pipeline integrating filtering mechanisms, packet profiling layers, and hashing-based authentication guards.",
    role: "Lead Security Researcher & Back-End Engineer",
    impact: "Provides robust, multi-layered API protection capable of detecting and blocking SQLi and XSS payloads in real time. Successfully mitigates replay attacks using optimized in-memory cache tracking with minimal throughput overhead.",
    imagePlaceholderColor: "from-blue-600/25 to-slate-900",
    image: "/images/crypto.png",
    githubUrl: "https://github.com/ryl-code/CryptoWAF"
  },
  {
    id: "campus-sport-booking",
    title: "Campus Sport Booking",
    category: "IT Development",
    shortDescription: "A responsive Android court reservation platform built with structured SQL coding to eliminate facility scheduling conflicts. It leverages a dual-role client architecture and atomic database constraints to deliver seamless real-time booking tracking and automated administrative controls with minimal overhead.",
    description: "SportCampus is a responsive Android court reservation platform built with structured SQL coding to eliminate scheduling conflicts. Utilizing a dual-role (User/Admin) architecture and ConstraintLayout, it provides atomic slot validation to ensure seamless, real-time facility booking and automated administrative controls across campus sports facilities.",
    technologies: ["Java", "Android Studio", "SQLite", "Android SDK", "XML", "CRUD Operations"],
    features: [
      "Role-Based Access Control: Secure registration gate that automatically splits user dashboards from high-privilege admin panels.",
      "Conflict-Free Booking: Interactive form with spinner filters and atomic SQL checks to strictly prevent court double-bookings.",
      "Dynamic History Tracker: Custom RecyclerView cards enabling users to view active schedules and trigger instant booking cancellations.",
      "Admin Analytics Dashboard: Centralized panel offering real-time insights on facility usage trends, total bookings, and user metrics.",
      "User Account Moderation: Dedicated interface for administrators to monitor profiles and execute account data drops."
    ],
    architecture: "Model-View-Presenter (MVP) architecture utilizing SQLiteOpenHelper structures and isolated activity life-cycle handlers.",
    role: "Mobile Developer & UI/UX Designer",
    impact: "Delivered a high-performance booking ecosystem that guarantees zero schedule collisions through atomic SQL validation. By replacing heavy processing loops with optimized data binding, the app maintains maximum throughput and smooth rendering with minimal hardware overhead.",
    imagePlaceholderColor: "from-indigo-600/25 to-slate-900",
    image: "/images/campusbook.png",
    githubUrl: "https://github.com/ryl-code/Campus-Sport-Booking"
  },
  {
    id: "lens-of-life",
    title: "Social Project - Lens of Life",
    category: "Campus Social",
    shortDescription: "A group-led community initiative that delivered multimedia and digital privacy training to empower children at Taman Baca Saung with creative skills and responsible online habits.",
    description: "A collaborative community development program organized as a group social project for children at Taman Baca Saung, Cikarang Timur. The initiative focused on bridging the digital skills gap by designing and executing interactive training in creative media alongside vital awareness campaigns regarding digital privacy and online safety.",
    technologies: ["Documentary", "Solidaritas", "Public Speaking", "Photography", "Event Organizing"],
    features: [
      "Coordinated campus art gallery displaying student photographic studies",
      "Conducted mental-health panels with professional speakers and advocacy leads",
      "Reached hundreds of students through combined digital and print publications",
      "Established peer-group support circles within student residential halls"
    ],
    architecture: "Community leadership framework based on peer mental-health model, cross-cultural inclusion audits, and structured public communication.",
    role: "Event Organizer",
    impact: "The group successfully empowered local children with essential multimedia skills and digital citizenship insights. The project measurably increased the participants' creative confidence while establishing a protective understanding of personal privacy in digital spaces.",
    imagePlaceholderColor: "from-emerald-600/25 to-slate-900",
    image: "/images/tamanbaca.jpeg"
  },
  {
    id: "mapalus-peduli-kawanua",
    title: "Mapalus Peduli Kawanua",
    category: "Campus Social",
    shortDescription: "A Kawanua student community charity project that mobilized 6 specialized divisions to execute a meaningful social engagement and donation distribution program at Panti Asuhan Yohanes Jababeka.",
    description: "A community charity and social engagement initiative spearheaded by the Kawanua student community of President University in collaboration with Panti Asuhan Yohanes Jababeka. Based on the traditional cultural value of Mapalus (mutual cooperation), the project focused on fostering deep communal bonding with the orphanage while managing structured donation logistics and cross-functional event operations.",
    technologies: ["Community Care", "Logistics Co.", "Social Activism", "Philanthropy", "Leadership"],
    features: [
      "Cross-Functional Leadership: Spearheaded and synchronized 6 specialized internal divisions: EO, PR, Multimedia (MTDD), Logistics, FNB, and Fundraising (FR).",
      "Timeline & Resource Management: Managed end-to-end event schedules, milestone tracking, and operational asset allocations.",
      "Donation Logistics Coordination: Directed regional fundraising campaigns and oversaw the structured distribution of accumulated donations to the orphanage.",
      "Community Engagement Execution: Facilitated interactive social bonding activities designed specifically to engage the orphanage children and administrators."
    ],
    architecture: "Traditional mutual-aid structure modernized using instant messaging coordination and real-time ledger accounting.",
    role: "Project Manager",
    impact: "Achieved seamless event execution and transparent donation tracking through synchronized multi-division coordination under the Kawanua community. The initiative successfully delivered essential provisions to Panti Asuhan Yohanes Jababeka while fostering a meaningful cultural bond of solidarity.",
    imagePlaceholderColor: "from-amber-600/25 to-slate-900",
    image: "/images/image copy.png"
  },
  {
    id: "ctf-1st-place-2024",
    title: "1st Place Team of CTF Digital Forensic 2026, President University",
    category: "Achievement",
    shortDescription: "A student cybersecurity team formed for the Digital Forensics course. We solved a series of Capture The Flag (CTF) challenges focusing on network packet analysis, image steganography, log analysis, and Linux disk forensics.",
    description: "Documentation of our team's step-by-step solutions for 10 Digital Forensics CTF challenges. We utilized core forensic tools including Autopsy and FTK Imager for disk analysis, NetworkMiner for packet carving, Aperi’Solve and HxD for steganography/hex recovery, and Python to crack embedded ciphers.",
    technologies: ["Digital Forensics", "Steganography", "Autopsy", "Aperi’Solve ", "Duplicheker"],
    features: [
      "Steganography & Ciphers: Utilized Aperi’Solve for LSB analysis, HxD to fix corrupted image headers, and Python to decrypt multi-layered ciphers (RGA?, TripleThreat2, goTTa-fix, latte).",
      "Disk & Signal Investigation: Explored Linux .img systems via Autopsy to uncover hidden PHP web shells, and analyzed audio waveforms in Audacity to decode Morse signals (EzTraverse, scout-code2).",
      "Log & Timeline Analysis: Filtered Windows XML logs for application crashes (lsass.exe) and parsed .ad1 file system journals into CSV using FTK Imager and MFTECmd (Nightmare, lost-d4).",
      "Network & Email Phishing: Carved raw .pcap and .eml files using NetworkMiner to trace spoofed sender domains and connection ports (Mailer, MailMailSnailMail)."
    ],
    architecture: "Cybersecurity Competition",
    role: "Team Member / Forensics & Steganography Analyst",
    teamName: "Titisan Ma'am Farah",
    impact: "Demonstrated advanced problem-solving skills and deep understanding of cybersecurity concepts under pressure.",
    imagePlaceholderColor: "from-yellow-600/25 to-slate-900",
    image: "/images/ctf2.png",
    link: "/CTF%20Digital%20Forensic.pdf"
  },
  {
    id: "ctf-top-8-2026",
    title: "Top 8 Team of CTF Ethical Hacking 2026, President University",
    category: "Achievement",
    shortDescription: "A student cybersecurity team that successfully solved 22 Ethical Hacking CTF challenges by executing advanced web exploit chains, breaking weak encryption with custom Python scripts, and conducting multi-timeline OSINT digital investigations utilizing Burp Suite, Kali Linux, and geolocation frameworks.",
    description: "Documentation of our team's step-by-step solutions for 22 Ethical Hacking CTF challenges. We utilized core security tools including Burp Suite for web vulnerability interception, Kali Linux for system testing, Python 3 for mathematical cryptanalysis, and OSINT frameworks to trace digital footprints.",
    technologies: ["Web Pentesting", "Cryptography", "OSINT & Geolocation", "Miscellaneous", "Kali Linux"],
    features: [
      "Web Exploitation & Chaining: Built critical exploit chains by leveraging IDOR vulnerabilities for administrative account takeover, chained with Server-Side Template Injection (SSTI) to achieve full Remote Code Execution (RCE).",
      "Perimeter Bypass & Injections: Bypassed server protections via XML External Entity (XXE) for internal file disclosure, manipulated .htaccess files for upload bypass, and intercepted HTTP requests to bypass client-side time constraints.",
      "Cryptanalysis & Automation: Broke weak encryption mechanisms using custom Python scripts, including Small Message Attacks on low-exponent RSA ($e=3$) and partial brute-force attacks on XOR streams based on prime-square mathematical properties.",
      "OSINT & Digital Investigation: Conducted cross-platform digital footprint tracking and multi-timeline transit route reconstruction utilizing satellite coordinates (Plus Codes), flight manifests, and geographical landscape analysis."
    ],
    architecture: "Cybersecurity Competition",
    role: "Team Member",
    teamName: "Trickers",
    impact: "Showcased continuous growth and consistent performance in solving complex security problems.",
    imagePlaceholderColor: "from-slate-600/25 to-slate-900",
    image: "/images/ctf1.png",
    link: "/CTF%20Ethical%20Hacking.pdf"
  }
];
