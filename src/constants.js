import { MdSupportAgent } from "react-icons/md";
import {
  FaSitemap,
  FaProjectDiagram,
  FaClipboardList,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";
import { TbApi, TbPlugConnected } from "react-icons/tb";

// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import astroLogo from "./assets/tech_logo/astro.svg";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cloudflareLogo from "./assets/tech_logo/cloudflare.svg";

import androidLogo from "./assets/tech_logo/android.svg";
import kotlinLogo from "./assets/tech_logo/kotlin.svg";
import composeLogo from "./assets/tech_logo/jetpackcompose.svg";
import expoLogo from "./assets/tech_logo/expo.svg";
import unityLogo from "./assets/tech_logo/unity.svg";

import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import accenture from "./assets/company_logo/accenture.png";

// Certification Logo's
import servicenowCsa from "./assets/cert_logo/servicenow_csa.png";

// Education Section Logo's
import graphicEraDeemed from "./assets/education_logo/graphic_era_official_logo.jpg";
import graphicEraHill from "./assets/education_logo/graphicerahilluniversity_logo.jpg";

// Project Section Logo's
import quizly from "./assets/work_logo/quizly.webp";
import ukExamPrep from "./assets/work_logo/ukExamPrep.webp";
import rps3d from "./assets/work_logo/rps3d.webp";
import househelp from "./assets/work_logo/househelp.webp";
import ukdYouth from "./assets/work_logo/ukdYouth.webp";
import chitChat from "./assets/work_logo/Chit-Chat.webp";
import pasteApp from "./assets/work_logo/pasteApp.webp";
import razorPay from "./assets/work_logo/razorPay.webp";
import LeetCodeMetric from "./assets/work_logo/LeeetCodeMetric.webp";
import weatherApp from "./assets/work_logo/weatherApp.webp";
import studySync from "./assets/work_logo/studySync.webp";
import promptDeploy from "./assets/work_logo/promptDeploy.webp";

// A skill shows either an image `logo` or a react-icons `icon`.
export const SkillsInfo = [
  {
    title: "ServiceNow",
    skills: [
      { name: "ServiceNow CSA", logo: servicenowCsa },
      { name: "ITSM", icon: MdSupportAgent },
      { name: "CMDB", icon: FaSitemap },
      { name: "Flow Designer", icon: FaProjectDiagram },
      { name: "Service Catalog", icon: FaClipboardList },
      { name: "Integration Hub", icon: TbPlugConnected },
      { name: "Scripted REST", icon: TbApi },
      { name: "Glide Scripting", icon: FaCode },
      { name: "ACLs & RBAC", icon: FaShieldAlt },
    ],
  },
  {
    title: "Mobile & Game Dev",
    skills: [
      { name: "Android", logo: androidLogo },
      { name: "Kotlin", logo: kotlinLogo },
      { name: "Jetpack Compose", logo: composeLogo },
      { name: "React Native (Expo)", logo: expoLogo },
      { name: "Unity", logo: unityLogo },
      { name: "C#", logo: csharpLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Astro", logo: astroLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Redux", logo: reduxLogo },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "Cloudflare Workers", logo: cloudflareLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Kotlin", logo: kotlinLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C#", logo: csharpLogo },
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: accenture,
    role: "Packaged App Development Associate (ServiceNow Developer)",
    company: "Accenture Solutions Private Limited · Bengaluru",
    date: "Oct 2024 - Sep 2026",
    desc: "Built ITSM and CMDB solutions on ServiceNow for a large-scale enterprise, delivered Service Catalog items, Flow Designer automation, scripting and REST integrations in Agile sprints from development to production.",
    highlights: [
      "Created and configured nearly 3,000 Configuration Items (CIs) and their relationships in the CMDB using Import Sets, mapping service dependencies for impact analysis in Incident and Change Management.",
      "Built 3+ Service Catalog items and Record Producers with Catalog Client Scripts and custom fulfillment logic, including a group membership request with manager approval.",
      "Designed 3+ Flow Designer flows for approvals, task orchestration, notifications and automated request fulfillment.",
      "Automated a weekly manual cleanup with a scheduled flow that removes inactive users from watch lists across all Service Offerings, saving ~90 hours a year.",
      "Integrated ServiceNow with enterprise applications through Scripted REST APIs, REST Messages and IntegrationHub.",
      "Enforced role-based access with ACLs, roles and user criteria, and delivered reports, dashboards and Performance Analytics for business users.",
    ],
    skills: [
      "ServiceNow ITSM",
      "CMDB",
      "Service Catalog",
      "Flow Designer",
      "IntegrationHub",
      "Scripted REST APIs",
      "Business Rules",
      "Client Scripts",
      "GlideRecord & GlideAjax",
      "ACLs & RBAC",
      "Performance Analytics",
      "Update Sets",
      "Agile / Scrum",
    ],
  },
];

export const certifications = [
  {
    id: 0,
    img: servicenowCsa,
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    date: "May 2026",
    link: "https://www.credly.com/badges/d8e32229-9b66-485c-97b7-45dd7a8a81f2",
  },
  {
    id: 1,
    title: "Micro-Certification – Now Assist Executive",
    issuer: "ServiceNow",
    date: "Apr 2026",
  },
  {
    id: 2,
    title: "Micro-Certification – Agentic AI Executive",
    issuer: "ServiceNow",
    date: "Mar 2026",
  },
];

export const education = [

  {
    id: 0,
    img: graphicEraDeemed,
    school: "Graphic Era Deemed to be University, Dehradun (Online)",
    date: "April 2025 - March 2027",
    grade: "9.08 CGPA",
    desc: "I am currently pursuing my Master's degree (MCA) in Computer Applications from Graphic Era Deemed to be University, Dehradun. My coursework covers Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively engage in workshops and technical events to enhance my technical skills and industry knowledge. This program is strengthening my foundation in programming, software development, and computer science concepts.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: graphicEraHill,
    school: "Graphic Era Hill University, Dehradun",
    date: "Sept 2021 - Aug 2024",
    grade: "7.56 CGPA",
    desc: "I completed my Bachelor's degree (BCA) in Computer Applications from Graphic Era Hill University, Dehradun. During this program, I built a solid foundation in programming, data structures, algorithms, database systems, web development, and software engineering. I actively participated in coding competitions, technical events, and hands-on projects that helped me apply theoretical knowledge to practical challenges.",
    degree: "Bachelor of Computer Applications - BCA",
  },
];

// `status` is shown on the card. `github`/`webapp` may be empty for private
// work; the modal then shows the status instead of a dead link.
export const projects = [
  {
    id: 0,
    title: "Quizly",
    kind: "Android app · AI",
    brief: "An AI quiz app that has to work offline, call AI models without shipping any API keys, and keep users coming back daily.",
    built: [
      "Kotlin + Jetpack Compose app with MVVM and clean architecture, fully usable offline",
      "AI tutor, \"Explain with AI\" and quiz generation from a topic, notes or a URL",
      "Cloudflare Worker proxy with Firebase-token auth and D1-backed quotas",
      "Nightly Daily Challenge pipeline, XP, streaks and Firestore leaderboards",
    ],
    result: "Released on Google Play. An iOS version is in progress with Expo.",
    year: "2026",
    featured: true,
    summary: "AI-powered quiz platform for Android, live on Google Play.",
    status: "Live on Google Play",
    description:
      "An AI-powered quiz platform for Android, live on Google Play. Built with Kotlin and Jetpack Compose (MVVM + Clean Architecture) and fully usable offline. It adds an AI tutor, \"Explain with AI\" for wrong answers, and AI quiz generation from a topic, pasted notes or a web URL. AI requests go through a Cloudflare Worker proxy with Firebase-token auth and D1-backed quotas, so no provider keys ship in the app. A nightly server-side pipeline generates a shared Daily Challenge, alongside XP, streaks, achievements, a Daily Quest Circuit and Firestore leaderboards. An iOS version built with Expo / React Native is in development.",
    image: quizly,
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Cloudflare Workers", "D1", "GitHub Actions", "AI"],
    github: "https://github.com/AlexdxPrabhat/quizly",
    githubLabel: "View Repo",
    webapp: "https://play.google.com/store/apps/details?id=com.anintellectualcompany.quizly",
    webappLabel: "Google Play",
  },
  {
    id: 1,
    title: "Uttarakhand Exam Prep",
    kind: "Android app · data pipeline",
    brief: "A Hindi-first prep app for state government exams, which meant first building a question bank that didn't exist in a usable form.",
    built: [
      "Python pipeline that crawls, parses and classifies previous-year papers",
      "20,000+ tagged questions across nearly two decades of exams",
      "Mock tests with negative marking and official time limits",
      "Bilingual AI study tutor, daily quests and leaderboards",
    ],
    result: "Question bank complete; app is being prepared for Play release.",
    year: "2026",
    featured: true,
    summary: "Hindi-first exam prep with 20,000+ previous-year questions and an AI tutor.",
    status: "Coming soon to Google Play",
    description:
      "A Hindi-first preparation app for Uttarakhand state government exams: UKPSC, UKSSSC, Police/SI, Patwari, UTET and Forest Guard. It has 20,000+ tagged previous-year questions spanning nearly two decades, mock exams with negative marking and pacing feedback against each paper's official time limit, subject-wise practice, an AI study tutor in Hindi and English, daily quests and leaderboards. Built with Kotlin and Jetpack Compose on Firebase and Cloudflare Workers, with a Python pipeline that crawls, parses and classifies the question bank.",
    image: ukExamPrep,
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Cloudflare Workers", "Python", "AI"],
    github: "https://github.com/AlexdxPrabhat/uttarakhand-exam-prep",
    githubLabel: "View Repo",
    webapp: "",
  },
  {
    id: 2,
    title: "Rock Paper Scissors 3D",
    kind: "Multiplayer game",
    brief: "A full 3D take on a simple game, with real-time online duels and enough progression to keep players around.",
    built: [
      "Unity 6 game with five animated 3D contenders",
      "Quick Match and private rooms on Cloudflare Durable Objects",
      "Offline AI rival and a 9-rival championship league",
      "Headless build and QA scripts for Windows and Android",
    ],
    result: "Online play and Android builds working end to end.",
    year: "2026",
    featured: true,
    summary: "Real-time online duels in a fully 3D arena, built in Unity 6.",
    status: "Coming soon to Google Play",
    description:
      "A fully 3D Rock Paper Scissors game built in Unity 6 with C#. Players duel live online through Quick Match or private room codes, served by a Cloudflare Worker with Durable Objects, or practice offline against an AI rival. It includes a championship league against 9 rivals, five animated 3D contenders and XP ranks from Bronze to Master. The whole UI is built in code on a custom design system, and headless build and QA scripts automate the Windows and Android builds.",
    image: rps3d,
    tags: ["Unity 6", "C#", "Cloudflare Workers", "Durable Objects", "Multiplayer", "Android"],
    github: "",
    webapp: "",
  },
  {
    id: 3,
    title: "HouseHelp",
    kind: "Two-sided booking platform",
    brief: "Book background-verified house help in about 10 minutes: a customer app, a partner app for workers, and a backend that keeps both in sync.",
    built: [
      "Customer and Partner Android apps in Kotlin and Compose",
      "Worker backend owning pricing, slot capacity, bookings, refunds and wallets",
      "Once-a-minute dispatch cron with FCM push updates",
      "Firestore rules for data ownership; MapLibre + OpenStreetMap maps",
    ],
    result: "Whole stack runs on free tiers, so running costs stay near zero until it scales.",
    year: "2026",
    featured: true,
    summary: "Customer and partner apps for booking house help in about 10 minutes.",
    status: "In development",
    description:
      "An on-demand house-help booking platform made of two Android apps: a customer app to book background-verified experts instantly (about 10 minutes) or in 15-minute slots, and a Partner app where workers accept and complete jobs. A Cloudflare Worker owns pricing, slot capacity, bookings, refunds and wallet logic, and a once-a-minute cron dispatches experts and sends FCM push updates. Firestore security rules enforce data ownership, maps use free MapLibre and OpenStreetMap tiles, and the whole stack runs on free tiers.",
    image: househelp,
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore", "Cloudflare Workers", "FCM", "MapLibre"],
    github: "",
    webapp: "",
  },
  {
    id: 4,
    title: "UKD Youth Dehradun",
    kind: "Website + admin panel",
    brief: "An organisation needed a public website and a safe way for its team to manage a member directory without leaking personal details.",
    built: [
      "Server-rendered Astro site on Cloudflare Workers with D1 and R2",
      "Admin panel with three server-enforced roles and draft/publish controls",
      "Consent-gated contact details and a full audit history",
      "Turnstile-protected forms with an email outbox, GSAP homepage with a reduced-motion fallback",
    ],
    result: "Running on a staging URL for review.",
    year: "2026",
    featured: true,
    summary: "Server-rendered site and admin panel on Cloudflare Workers.",
    status: "Private repo · in staging",
    description:
      "A server-rendered website and admin panel for the Dehradun youth wing of Uttarakhand Kranti Dal, built with Astro on Cloudflare Workers with D1 and R2. It has a member directory with draft/publish controls and consent-gated contact details, Better Auth sessions with three server-enforced roles, Turnstile-protected contact forms with an email outbox, audit history, and a cinematic GSAP ScrollTrigger homepage with a full static fallback for reduced-motion visitors.",
    image: ukdYouth,
    imagePosition: "left center",
    tags: ["Astro", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "D1", "R2", "GSAP"],
    github: "",
    webapp: "https://ukd-youth-dehradun-staging.shadowgamedeveloper.workers.dev",
  },
  {
    id: 5,
    title: "Chit Chat",
    year: "2025",
    featured: false,
    summary: "Real-time MERN chat with Socket.io.",
    description:
      "A real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It enables users to send and receive instant messages in one-on-one and group chats. Features include user authentication, real-time messaging powered by Socket.io, online/offline status indicators, and a clean, responsive UI with dark mode support. Designed for seamless communication and modern performance.",
    image: chitChat,
    tags: ["MERN Stack", "React JS", "Node JS", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/AlexdxPrabhat/ChitChat",
    webapp: "https://chitchat-mo73.onrender.com/",
  },
  {
    id: 6,
    title: "PromptDeploy",
    year: "2025",
    featured: false,
    summary: "Prompt-to-website generator that auto-deploys to Firebase.",
    status: "Command-line tool",
    description:
      "A Python-powered automation tool that generates and deploys complete websites from natural language prompts. Users provide a prompt in the command line, and the app leverages the Gemini Flash API to generate HTML, CSS, and JS code, which is then auto-deployed to Firebase for instant hosting. Streamlines web creation for rapid prototyping and deployment.",
    image: promptDeploy,
    tags: ["Automation", "Python", "Gemini Flash API"],
    github: "https://github.com/AlexdxPrabhat/PromptDeploy",
    webapp: "",
  },
  {
    id: 7,
    title: "PasteApp",
    year: "2025",
    featured: false,
    summary: "Paste manager built with React and Redux.",
    description:
      "A modern paste management web app built with React.js and Tailwind CSS. Allows users to create, edit, view, delete, and search pastes with an intuitive interface. Features include real-time paste creation, timestamping, and easy copy/share functionality. Designed for speed, usability, and clean dark-mode aesthetics",
    image: pasteApp,
    tags: ["React JS", "React Router", "Redux", "Vercel", "TailwindCss"],
    github: "https://github.com/AlexdxPrabhat/Paste-App",
    webapp: "https://paste-app-woad-seven.vercel.app/",
  },
  {
    id: 8,
    title: "RazorPay Clone",
    year: "2025",
    featured: false,
    summary: "Pixel-perfect Razorpay landing page clone.",
    description:
      "A responsive Razorpay landing page clone built with React, TailwindCss showcasing modern UI design inspired by the original Razorpay site. Features include glassmorphism effects, smooth scroll, interactive elements, and a pixel-perfect layout. Fully optimized for mobile and desktop screens.",
    image: razorPay,
    tags: ["React JS", "TailwindCSS", "Firebase"],
    github: "https://github.com/AlexdxPrabhat/RazorpayClone",
    webapp: "https://razorpayclone-49d17.web.app/",
  },
  {
    id: 9,
    title: "LeetCodeMetric",
    year: "2025",
    featured: false,
    summary: "Animated dashboard for LeetCode stats.",
    description:
      "A high-performance web app that fetches and visualizes LeetCode stats in an ultra-clean, animated, and interactive dashboard. Features dynamic conic gradient charts, instant data fetch on username input, and a fully responsive design for all devices.",
    image: LeetCodeMetric,
    tags: ["Html", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/AlexdxPrabhat/leetCodeMetric",
    webapp: "https://leetcode-metric.web.app/",
  },
  {
    id: 10,
    title: "WeatherApp",
    year: "2025",
    featured: false,
    summary: "Real-time weather for any city.",
    description:
      "A sleek and responsive weather prediction app that provides real-time weather details for any city worldwide. Features dynamic icons, fast data fetching, and a lightweight UI for a smooth user experience across all devices.",
    image: weatherApp,
    tags: ["JavaScript", "HTML", "CSS", "Firebase"],
    github: "https://github.com/AlexdxPrabhat/WeatherApp",
    webapp: "https://weatherapp-e890e.web.app/",
  },
  {
    id: 11,
    title: "StudySync",
    year: "2025",
    featured: false,
    summary: "Concept site for an education platform.",
    description:
      "An original and modern website concept for my future educational platform, StudySync. Built using HTML, CSS, and JavaScript, it features smooth animations, a clean and professional layout, and sections to showcase services, testimonials, and features. Designed as a foundation for scaling into a full-featured learning portal.",
    image: studySync,
    tags: ["HTML", "CSS", "Firebase"],
    github: "https://github.com/AlexdxPrabhat/StudySync",
    webapp: "https://alexdxprabhat.github.io/StudySync/",
  },
];

export const stats = [
  { value: 2, label: "Years delivering ServiceNow at Accenture" },
    { value: 90, prefix: "~", suffix: " hrs", label: "Saved every year by one scheduled flow" },
  { value: 5, label: "Products shipped or in flight: apps, sites and a game" },
  { value: 20000, suffix: "+", label: "Exam questions in an app I built end to end" },
];

export const marqueeWords = [
  "ServiceNow",
  "Flow Designer",
  "CMDB",
  "IntegrationHub",
  "Kotlin",
  "Jetpack Compose",
  "React",
  "TypeScript",
  "Cloudflare Workers",
  "Firebase",
  "Unity 6",
  "Astro",
  "Node.js",
  "AI",
];

export const socials = [
  { label: "GitHub", href: "https://github.com/AlexdxPrabhat" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prabhat-bisht-4668971a6" },
  { label: "YouTube", href: "https://www.youtube.com/@ShadowGDevloper" },
  { label: "Credly", href: "https://www.credly.com/badges/d8e32229-9b66-485c-97b7-45dd7a8a81f2" },
];

export const profile = {
  name: "Prabhat Bisht",
  email: "prabhishtalexdx@gmail.com",
  location: "Bengaluru, India",
  mainPortfolio: "https://prabhat-portfolio-umber.vercel.app/",
  timeZone: "Asia/Kolkata",
  resume: "https://drive.google.com/file/d/1qpWerVZF2ep_hqiGtikyDYR_BaZvMsXn/view?usp=sharing",
};

// `work` points at project ids below that prove the service.
export const services = [
  {
    id: "android",
    title: "Android & mobile apps",
    pitch: "Native Android apps in Kotlin and Jetpack Compose, or cross-platform with React Native (Expo). Built offline-first and taken through to a Google Play release.",
    deliverables: ["App design to Play Store release", "Login, payments-ready flows, push notifications", "Firebase or custom backend", "Store listing and release builds"],
    stack: ["Kotlin", "Jetpack Compose", "React Native", "Firebase"],
    work: ["quizly", "househelp"],
  },
  {
    id: "web",
    title: "Websites & web apps",
    pitch: "Fast, responsive websites and dashboards that are easy to update: marketing sites, admin panels and full-stack web apps.",
    deliverables: ["Landing pages and business sites", "Admin panels with roles and logins", "CMS-style content editing", "Hosting, domain and SEO setup"],
    stack: ["React", "Astro", "TypeScript", "Tailwind CSS"],
    work: ["ukd", "chitchat"],
  },
  {
    id: "servicenow",
    title: "ServiceNow development",
    pitch: "Two years of enterprise ServiceNow at Accenture. Catalog items, Flow Designer automation, CMDB work and integrations, built the way a large client expects.",
    deliverables: ["Service Catalog items and Record Producers", "Flow Designer approvals and automation", "CMDB imports and relationships", "Scripted REST and IntegrationHub"],
    stack: ["ITSM", "CMDB", "Flow Designer", "Glide scripting"],
    work: ["accenture"],
  },
  {
    id: "backend",
    title: "Backends, APIs & automation",
    pitch: "Serverless APIs that are secure and cheap to run. Auth, databases, scheduled jobs and third-party integrations.",
    deliverables: ["REST APIs on Cloudflare Workers or Node", "Firebase / Firestore with security rules", "Cron jobs, queues and webhooks", "Scripts that remove repetitive work"],
    stack: ["Cloudflare Workers", "Node.js", "Firestore", "D1 / MongoDB"],
    work: ["househelp", "quizly"],
  },
  {
    id: "ai",
    title: "AI features",
    pitch: "Add AI to an existing product without leaking API keys or running up a surprise bill. Tutors, generators and assistants with per-user quotas.",
    deliverables: ["Chat assistants and AI tutors", "Content and quiz generation", "Secure key proxy with rate limits", "Gemini / OpenAI / Claude integration"],
    stack: ["Cloudflare Workers", "Gemini", "Python", "Prompt design"],
    work: ["quizly", "ukexam"],
  },
  {
    id: "games",
    title: "Games & interactive",
    pitch: "Casual and multiplayer games in Unity, from a prototype to a full Android build with online play.",
    deliverables: ["Unity gameplay and UI", "Online multiplayer and matchmaking", "Offline AI opponents", "Android builds"],
    stack: ["Unity 6", "C#", "Durable Objects"],
    work: ["rps"],
  },
];

export const process = [
  { step: "01", title: "Discovery call", text: "We talk through what you need, who it's for and what done looks like. Free, about 30 minutes." },
  { step: "02", title: "Proposal", text: "A written scope with milestones, timeline and a fixed quote, so you know the cost before anything starts." },
  { step: "03", title: "Build in milestones", text: "You get a working build at every milestone to try out and give feedback on, not one big reveal at the end." },
  { step: "04", title: "Launch & handover", text: "I deploy it, publish it to the store if needed, and hand over the code, accounts and a short guide." },
];

export const promises = [
  "You own the code and all accounts",
  "Fixed quote per milestone",
  "Regular progress updates",
  "Clean, documented handover",
];

export const faqs = [
  { q: "What kind of projects do you take on?", a: "Android apps, websites and web apps, backends and APIs, AI features, ServiceNow work and small games. Whole products from scratch, or a feature added to something you already have." },
  { q: "How do you price a project?", a: "Usually a fixed quote split into milestones, agreed in the written proposal before work starts. Smaller ongoing work can be hourly." },
  { q: "Do I own the code?", a: "Yes. The code, the store listing, the hosting and any accounts are yours. I set them up under your name or hand them over at the end." },
  { q: "What time zone do you work in?", a: "India (IST, UTC+5:30). That gives a comfortable overlap with the UK, Europe and the Middle East, and mornings or evenings with the US." },
  { q: "Can you work on ServiceNow instances?", a: "Yes. Catalog items, flows, business rules, ACLs, CMDB imports and integrations, following update-set and code-review practices from enterprise delivery." },
  { q: "Will you sign an NDA?", a: "Yes, happy to sign one before we discuss the details." },
];

export const projectTypes = ["Android / mobile app", "Website or web app", "ServiceNow", "Backend / API", "AI feature", "Game", "Something else"];

export const budgets = ["Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+", "Not sure yet"];

export const timelines = ["ASAP", "Within a month", "1 – 3 months", "Flexible"];
