export const personalInfo = {
  name:      "Yaacob Martinez",
  firstName: "Yaacob",
  lastName:  "Martinez",
  role:      "Full Stack Web Developer",
  headline:  "I design and build modern web applications.",
  bio:       "Senior Software Engineer at Cambridge University Press & Assessment with 8+ years of experience turning complex requirements into clean, maintainable applications. Based in Malolos, Bulacan, PH — available for remote opportunities worldwide.",
  location:  "Malolos, Bulacan — PH",
  email:     "martinezyaacob@gmail.com",
  github:    "https://github.com/yaacobmartinez-personal",
  linkedin:  "",   // Add your LinkedIn URL here (optional)
  available: true,
};

export type Project = {
  title:       string;
  description: string;
  language:    string;
  tags:        string[];
  repo_url:    string;
  live_url:    string | null;
  /** Path to project image — local SVG in /public/projects/ or a custom screenshot URL */
  imageUrl:    string;
};

/** Static fallback — used when /api/works is unreachable. Replace imageUrl with your own screenshots when ready. */
export const projects: Project[] = [
  {
    title:       "Andy's Barber Shop",
    description: "Marketing website for Andy's Barbershop — Next.js 14, Tailwind CSS, Mapbox, and Resend for contact and booking emails.",
    language:    "TypeScript",
    tags:        ["Next.js", "Tailwind", "Mapbox", "Resend"],
    repo_url:    "https://github.com/yaacobmartinez-personal/andys-barber-shop",
    live_url:    "https://andys-barber-shop-one.vercel.app",
    imageUrl:    "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
  {
    title:       "Audy",
    description: "Audio stem separation tool with chord detection. Upload files or paste YouTube links to split tracks into drums, bass, vocals, guitar, piano.",
    language:    "JavaScript",
    tags:        ["Node.js", "Audio API", "YouTube DL"],
    repo_url:    "https://github.com/yaacobmartinez-personal/audy",
    live_url:    null,
    imageUrl:    "https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
  {
    title:       "EHFC Tracking",
    description: "Interactive map application for tracking locations in Malolos, Bulacan — pin management, live updates, and Supabase integration.",
    language:    "TypeScript",
    tags:        ["Next.js", "Mapbox", "Supabase"],
    repo_url:    "https://github.com/yaacobmartinez-personal/ehfc-tracking",
    live_url:    "https://ehfc-tracking.vercel.app",
    imageUrl:    "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
  {
    title:       "Chapter Real Estate",
    description: "Full multi-page Next.js 16 website for Chapter Real Estate & Property Management — App Router, Tailwind CSS v4, lucide-react.",
    language:    "TypeScript",
    tags:        ["Next.js 16", "Tailwind v4", "App Router"],
    repo_url:    "https://github.com/yaacobmartinez-personal/chapter-realestate",
    live_url:    "https://chapter-realestate.vercel.app",
    imageUrl:    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
  {
    title:       "Barso Homes",
    description: "Modern multi-audience real estate platform serving prospective home buyers, trades/subcontractors, and investors from a single Next.js site.",
    language:    "TypeScript",
    tags:        ["Next.js", "Multi-audience", "Tailwind"],
    repo_url:    "https://github.com/yaacobmartinez-personal/barso",
    live_url:    "https://barso-henna.vercel.app",
    imageUrl:    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
  {
    title:       "Email Sender",
    description: "Next.js application for sending bulk emails via Sender.net API — custom template variables, file attachments, and client-side validation.",
    language:    "TypeScript",
    tags:        ["Next.js", "Sender.net", "Email API"],
    repo_url:    "https://github.com/yaacobmartinez-personal/email-sender",
    live_url:    "https://email-sender-two-livid.vercel.app",
    imageUrl:    "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
];

export type ServiceItem = {
  icon:   string;
  title:  string;
  items:  string[];
};

export const services: ServiceItem[] = [
  {
    icon:  "◻",
    title: "Frontend Engineering",
    items: ["React & Next.js apps", "Vue 3 / Nuxt projects", "Responsive UI/UX", "Performance optimisation"],
  },
  {
    icon:  "⬡",
    title: "Backend & APIs",
    items: ["Node.js / Express", "RESTful & serverless APIs", "Laravel (PHP)", "Auth & security"],
  },
  {
    icon:  "☁",
    title: "Cloud & Infrastructure",
    items: ["AWS (EC2, Lambda, S3, RDS)", "Supabase & Firebase", "CI/CD pipelines", "Database design"],
  },
  {
    icon:  "✦",
    title: "AI-Integrated Apps",
    items: ["Claude & OpenAI APIs", "AI-assisted development", "Prompt engineering", "LLM feature integration"],
  },
];

export type Experience = {
  role:    string;
  company: string;
  period:  string;
  current: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role:    "Senior Software Engineer",
    company: "Cambridge University Press and Assessment",
    period:  "Feb 2023 – Present",
    current: true,
    bullets: ["Develop and maintain complex, feature-rich web services and applications in accordance with agreed coding standards and software development best practices."],
  },
  {
    role:    "Independent Contractor — Front End Developer",
    company: "DevPartners Co.",
    period:  "Jul 2022 – Jan 2023",
    current: false,
    bullets: ["In charge of development of features of system applications.", "Involved in planning and development of feature improvements for existing website/applications."],
  },
  {
    role:    "Software Engineer",
    company: "360Logix Solutions Inc.",
    period:  "Sep 2021 – Jul 2022",
    current: false,
    bullets: ["In charge of development of applications including web, mobile and custom applications."],
  },
  {
    role:    "Software Engineer",
    company: "Coinpass Ltd",
    period:  "Dec 2020 – Aug 2021",
    current: false,
    bullets: ["Work with development teams and product managers to provide sound software solutions."],
  },
  {
    role:    "Front-End Web Developer",
    company: "Dear Wolves",
    period:  "Mar 2020 – Oct 2020",
    current: false,
    bullets: ["Participate in planning, creation and development of web apps needed by clients."],
  },
  {
    role:    "Senior Process Executive",
    company: "Cognizant Technology Solutions",
    period:  "Oct 2019 – Feb 2020",
    current: false,
    bullets: ["Design, develop, test, deploy, operate and support management solutions across private-cloud Salesforce environments."],
  },
  {
    role:    "IT Lecturer / Program Head for IT",
    company: "Informatics College",
    period:  "Oct 2018 – Oct 2019",
    current: false,
    bullets: ["Plan, evaluate and revise curricula, course content and materials.", "Perform administrative duties as Program Head for Computer Studies."],
  },
  {
    role:    "Programmer",
    company: "Bestank Manufacturing Corp.",
    period:  "May 2017 – Oct 2019",
    current: false,
    bullets: ["Write, update and maintain computer programs or software packages to handle specific jobs such as tracking inventory, storing, or retrieving data."],
  },
];

export type SkillCategory = { category: string; items: string[] };

export const skills: SkillCategory[] = [
  { category: "Core Languages",   items: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP"] },
  { category: "Frontend",         items: ["ReactJS", "React Native", "Next.js", "Vue 3", "Nuxt 2/3", "Svelte", "Expo", "Bootstrap", "Material UI"] },
  { category: "Backend",          items: ["Node.js", "Express.js", "Laravel", "Vite", "Serverless"] },
  { category: "Databases",        items: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "MariaDB", "Redis", "DynamoDB"] },
  { category: "Cloud & AWS",      items: ["EC2", "S3", "Lambda", "RDS", "IAM", "CloudFront", "API Gateway", "Amplify", "Cognito", "SNS", "Rekognition", "Route53"] },
  { category: "BaaS",             items: ["Supabase", "Firebase"] },
  { category: "AI & Dev Tools",   items: ["Claude (Anthropic)", "GitHub Copilot", "Cursor", "OpenAI API", "Prompt Engineering", "AI-assisted Development"] },
];

export type Stat = { number: string; label: string };

export const stats: Stat[] = [
  { number: "8+", label: "Years of experience"     },
  { number: "8",  label: "Companies worked at"      },
  { number: "6",  label: "Open source projects"     },
  { number: "7",  label: "Tech categories mastered" },
];
