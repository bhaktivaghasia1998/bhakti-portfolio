// ALL the words on the website live here.
// To update your website, you usually only need to edit this file.

// ---- Types: they describe the SHAPE of each piece of data. ----
// If you make a typo (like "titel" instead of "title") or forget a field,
// TypeScript underlines it in red before you even open the browser.

export interface Badge {
  text: string;
  highlight?: boolean; // the "?" means this field is optional
}

export interface Profile {
  firstName: string;
  lastName: string;
  roles: string[]; // string[] = a list of text
  bio: string;
  about: string; // a short, personal "About me"
  lookingFor: string; // the kind of job she wants, shown near the top
  linkedin?: string; // her LinkedIn address, once added
  badges: Badge[];
  email: string;
  location: string;
  resume: string;
}

export interface Stat {
  value: number;
  unit: string;
  label: string;
}

export interface Job {
  note?: boolean; // true = a life update (like relocating), shown lighter than a job
  title: string;
  company: string;
  dates: string;
  place: string;
  points: string[];
}

export interface Tool {
  name: string;
  level: 'advanced' | 'proficient' | 'familiar'; // only these three words are allowed
  percent: number;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface School {
  years: string;
  title: string;
  school: string;
}

export const profile: Profile = {
  firstName: "Bhakti",
  lastName: "Vaghasia",
  roles: ["Administrative Assistant", "Data Entry Specialist", "Office Coordinator"],
  bio: "Administrative and data entry professional with a Computer Engineering degree and 3+ years of experience keeping offices, records and projects running smoothly. I build reports and trackers in Excel (including macros that automate repetitive work), manage records and correspondence, and keep documents moving between teams.",
  about: "I love bringing order to busy offices and messy spreadsheets. Whether it's a filing system, a tracker or a stack of invoices, I like making things easy to find, accurate and on time.",
  lookingFor: "Looking for a full-time administrative, data entry or office coordinator role in Central New Jersey.",
  badges: [
    { text: "Open to work", highlight: true },
    { text: "Available immediately" },
    { text: "East Windsor, NJ" },
  ],
  email: "bhaktihvaghasia98@gmail.com",
  location: "East Windsor, New Jersey",
  resume: "Bhakti-Vaghasia-Resume.pdf", // the file in the public folder
};

export const stats: Stat[] = [
  { value: 120, unit: "WPM", label: "Typing" },
  { value: 15000, unit: "KPH", label: "10-key data entry" },
  { value: 9000, unit: "KPH", label: "Alpha-numeric" },
  { value: 3.5, unit: "yrs", label: "Professional experience" },
];

export const jobs: Job[] = [
  {
    note: true,
    title: "Relocated to New Jersey",
    company: "US work authorization (EAD) approved, July 2026",
    dates: "2026",
    place: "East Windsor, NJ",
    points: ["Moved to New Jersey and completed US work authorization. Available to start a full-time role immediately."],
  },
  {
    title: "Data Entry Clerk",
    company: "Winners",
    dates: "Jun 2024 – Dec 2025",
    place: "Etobicoke, ON",
    points: [
      "Entered customer and account records quickly and accurately using fast 10-key and alpha-numeric data entry.",
      "Built Excel macros that automated repetitive tasks, saving time on routine reports and data updates.",
      "Handled confidential customer data carefully, following company privacy and security rules.",
      "Kept workplace records organized by compiling, categorizing and filing daily documentation.",
      "Answered and directed calls and relayed messages so the right person got the right information.",
    ],
  },
  {
    title: "Administrative Assistant",
    company: "Prahant Construction",
    dates: "Jul 2023 – May 2024",
    place: "Mississauga, ON",
    points: [
      "Ran day-to-day office operations: scheduling meetings, handling calls and keeping records up to date.",
      "Prepared reports, invoices and official correspondence for construction projects.",
      "Tracked project documents and deadlines between site engineers, vendors and management, helping keep work on schedule.",
      "Reorganized digital and paper filing systems so documents were faster to find.",
      "Supported HR with attendance tracking and onboarding of new site workers.",
    ],
  },
  {
    title: "Sales Person",
    company: "Royal Agency",
    dates: "Jun 2022 – May 2023",
    place: "Kitchener, ON",
    points: [
      "Resolved client questions from start to finish, keeping customers satisfied.",
      "Routed specialist questions to the right teams for faster answers.",
      "Managed a high volume of calls and emails professionally.",
      "Logged every customer interaction accurately for follow-up.",
    ],
  },
];

export const tools: Tool[] = [
  { name: "Excel (incl. macros)", level: "advanced", percent: 90 },
  { name: "Word", level: "advanced", percent: 90 },
  { name: "Outlook", level: "advanced", percent: 85 },
  { name: "PowerPoint", level: "proficient", percent: 75 },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Core work",
    items: [
      "Data entry",
      "Record management",
      "Document filing",
      "Report preparation",
      "Invoicing",
      "Scheduling",
      "Project coordination",
      "Vendor communication",
      "HR support",
      "Information security",
      "Microsoft Office Suite",
      "Customer service",
      "Confidential records",
      "Business correspondence",
    ],
  },
  {
    title: "Strengths",
    items: [
      "Communication",
      "Problem solving",
      "Active listening",
      "Empathy",
      "Adaptability",
      "Patience",
      "Positive attitude",
      "Attention to detail",
      "Organization",
    ],
  },
  {
    title: "Technical background",
    items: [
      "Computer Engineering",
      "Web development",
      "Internet applications",
      "Process automation",
    ],
  },
];

export const education: School[] = [
  {
    years: "2022",
    title: "Certificate, Web Development & Internet Applications",
    school: "Conestoga College · Kitchener, ON",
  },
  {
    years: "2017 – 2020",
    title: "Bachelor's, Computer Engineering",
    school: "Gujarat Technological University · Ahmedabad, India",
  },
  {
    years: "2014 – 2017",
    title: "Diploma, Computer Engineering",
    school: "Government Polytechnic · Surat, India",
  },
];

export const tickerItems: string[] = [
  "Administrative Support",
  "Microsoft Excel",
  "Excel Macros",
  "Data Entry",
  "Record Management",
  "Word",
  "Outlook",
  "PowerPoint",
  "Scheduling",
  "Invoicing",
  "Project Coordination",
  "Vendor Communication",
  "HR Support",
  "Information Security",
  "Customer Service",
  "120 WPM",
  "Computer Engineering",
  "Web Development",
];
