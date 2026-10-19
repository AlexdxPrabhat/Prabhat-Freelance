import quizly from "./assets/work_logo/quizly.webp";
import ukExamPrep from "./assets/work_logo/ukExamPrep.webp";
import rps3d from "./assets/work_logo/rps3d.webp";
import househelp from "./assets/work_logo/househelp.webp";
import ukdYouth from "./assets/work_logo/ukdYouth.webp";
import chitChat from "./assets/work_logo/Chit-Chat.webp";
import leetcodeMetric from "./assets/work_logo/LeeetCodeMetric.webp";
import razorPay from "./assets/work_logo/razorPay.webp";
import promptDeploy from "./assets/work_logo/promptDeploy.webp";
import accenture from "./assets/logos/accenture.png";
import servicenowCsa from "./assets/logos/servicenow_csa.png";

export const profile = {
  name: "Prabhat Bisht",
  role: "Freelance developer",
  email: "prabhishtalexdx@gmail.com",
  location: "Bengaluru, India",
  timeZone: "Asia/Kolkata",
  resume: "https://drive.google.com/file/d/1qpWerVZF2ep_hqiGtikyDYR_BaZvMsXn/view?usp=sharing",
  mainPortfolio: "https://prabhat-portfolio-umber.vercel.app/",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/AlexdxPrabhat" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prabhat-bisht-4668971a6" },
  { label: "Credly", href: "https://www.credly.com/badges/d8e32229-9b66-485c-97b7-45dd7a8a81f2" },
];

// Short proof points shown under the hero.
export const proof = [
  { value: "2 yrs", label: "ServiceNow developer at Accenture" },
  { value: "CSA", label: "ServiceNow Certified System Administrator" },
  { value: "Live", label: "Android app shipped on Google Play" },
  { value: "20k+", label: "Questions in an exam app I built end to end" },
];

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

// Case studies: brief, what was built, result. Keep claims to what is true.
export const caseStudies = [
  {
    id: "quizly",
    title: "Quizly",
    kind: "Android app · AI",
    year: "2026",
    image: quizly,
    status: "Live on Google Play",
    brief: "An AI quiz app that has to work offline, call AI models without shipping any API keys, and keep users coming back daily.",
    built: [
      "Kotlin + Jetpack Compose app with MVVM and clean architecture, fully usable offline",
      "AI tutor, \"Explain with AI\" and quiz generation from a topic, notes or a URL",
      "Cloudflare Worker proxy with Firebase-token auth and D1-backed quotas",
      "Nightly Daily Challenge pipeline, XP, streaks and Firestore leaderboards",
    ],
    result: "Released on Google Play. An iOS version is in progress with Expo.",
    stack: ["Kotlin", "Compose", "Firebase", "Cloudflare Workers", "D1", "AI"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.anintellectualcompany.quizly" },
      { label: "Code", href: "https://github.com/AlexdxPrabhat/quizly" },
    ],
  },
  {
    id: "ukd",
    title: "UKD Youth Dehradun",
    kind: "Website + admin panel",
    year: "2026",
    image: ukdYouth,
    imagePosition: "left center",
    status: "In staging",
    brief: "An organisation needed a public website and a safe way for its team to manage a member directory without leaking personal details.",
    built: [
      "Server-rendered Astro site on Cloudflare Workers with D1 and R2",
      "Admin panel with three server-enforced roles and draft/publish controls",
      "Consent-gated contact details and a full audit history",
      "Turnstile-protected forms with an email outbox, GSAP homepage with a reduced-motion fallback",
    ],
    result: "Running on a staging URL for review.",
    stack: ["Astro", "TypeScript", "Tailwind", "Workers", "D1", "R2"],
    links: [{ label: "Staging site", href: "https://ukd-youth-dehradun-staging.shadowgamedeveloper.workers.dev" }],
  },
  {
    id: "househelp",
    title: "HouseHelp",
    kind: "Two-sided booking platform",
    year: "2026",
    image: househelp,
    status: "In development",
    brief: "Book background-verified house help in about 10 minutes: a customer app, a partner app for workers, and a backend that keeps both in sync.",
    built: [
      "Customer and Partner Android apps in Kotlin and Compose",
      "Worker backend owning pricing, slot capacity, bookings, refunds and wallets",
      "Once-a-minute dispatch cron with FCM push updates",
      "Firestore rules for data ownership; MapLibre + OpenStreetMap maps",
    ],
    result: "Whole stack runs on free tiers, so running costs stay near zero until it scales.",
    stack: ["Kotlin", "Compose", "Firestore", "Workers", "FCM", "MapLibre"],
    links: [],
  },
  {
    id: "ukexam",
    title: "Uttarakhand Exam Prep",
    kind: "Android app · data pipeline",
    year: "2026",
    image: ukExamPrep,
    status: "Coming to Google Play",
    brief: "A Hindi-first prep app for state government exams, which meant first building a question bank that didn't exist in a usable form.",
    built: [
      "Python pipeline that crawls, parses and classifies previous-year papers",
      "20,000+ tagged questions across nearly two decades of exams",
      "Mock tests with negative marking and official time limits",
      "Bilingual AI study tutor, daily quests and leaderboards",
    ],
    result: "Question bank complete; app is being prepared for Play release.",
    stack: ["Kotlin", "Compose", "Python", "Firebase", "Workers", "AI"],
    links: [{ label: "Code", href: "https://github.com/AlexdxPrabhat/uttarakhand-exam-prep" }],
  },
  {
    id: "rps",
    title: "Rock Paper Scissors 3D",
    kind: "Multiplayer game",
    year: "2026",
    image: rps3d,
    status: "Coming to Google Play",
    brief: "A full 3D take on a simple game, with real-time online duels and enough progression to keep players around.",
    built: [
      "Unity 6 game with five animated 3D contenders",
      "Quick Match and private rooms on Cloudflare Durable Objects",
      "Offline AI rival and a 9-rival championship league",
      "Headless build and QA scripts for Windows and Android",
    ],
    result: "Online play and Android builds working end to end.",
    stack: ["Unity 6", "C#", "Durable Objects", "Android"],
    links: [],
  },
];

export const smallerWork = [
  { title: "Chit Chat", note: "Real-time MERN chat with Socket.io", image: chitChat, href: "https://chitchat-mo73.onrender.com/" },
  { title: "PromptDeploy", note: "Prompt-to-website generator, auto-deploys to Firebase", image: promptDeploy, href: "https://github.com/AlexdxPrabhat/PromptDeploy" },
  { title: "Razorpay landing clone", note: "Pixel-accurate responsive marketing page", image: razorPay, href: "https://razorpayclone-49d17.web.app/" },
  { title: "LeetCodeMetric", note: "Animated stats dashboard from a live API", image: leetcodeMetric, href: "https://leetcode-metric.web.app/" },
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

// Accenture is past employment: `date` must show an end date.
export const experience = {
  company: "Accenture",
  logo: accenture,
  role: "Packaged App Development Associate · ServiceNow Developer",
  place: "Accenture Solutions Pvt. Ltd. · Bengaluru",
  date: "Oct 2024 – Sep 2026",
  summary: "Built ITSM and CMDB solutions on ServiceNow for a large enterprise client, in Agile sprints from development to production.",
  highlights: [
    "Created and configured nearly 3,000 Configuration Items and their relationships in the CMDB using Import Sets, for impact analysis in Incident and Change.",
    "Built Service Catalog items and Record Producers with client scripts and custom fulfilment, including group membership requests with manager approval.",
    "Designed Flow Designer flows for approvals, task orchestration, notifications and automated fulfilment.",
    "Replaced a weekly manual cleanup with a scheduled flow, saving about 90 hours a year.",
    "Integrated ServiceNow with enterprise apps through Scripted REST APIs, REST Messages and IntegrationHub.",
    "Enforced access with ACLs, roles and user criteria; delivered reports, dashboards and Performance Analytics.",
  ],
};

export const credentials = [
  { title: "ServiceNow Certified System Administrator", meta: "ServiceNow · May 2026", logo: servicenowCsa, href: "https://www.credly.com/badges/d8e32229-9b66-485c-97b7-45dd7a8a81f2" },
  { title: "Micro-Certification: Now Assist Executive", meta: "ServiceNow · Apr 2026" },
  { title: "Micro-Certification: Agentic AI Executive", meta: "ServiceNow · Mar 2026" },
  { title: "MCA, Graphic Era Deemed to be University", meta: "2025 – 2027 · 9.08 CGPA" },
  { title: "BCA, Graphic Era Hill University", meta: "2021 – 2024" },
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
