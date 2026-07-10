// Static demo data for the HR Dashboard mock. No backend — everything here is
// hardcoded so the UI renders identically on Vercel with zero config.

export const overview = {
  totalCandidates: 200,
  activeCandidates: 64,
  totalJobs: 14,
  publishedJobs: 12,
  avgTimeToHire: "24 days",
  conversionRate: "5.5%",
  upcomingInterviews: 6,
  pendingActivities: 3,
  totalHired: 11,
};

export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  status: "Published" | "Draft" | "Closed";
  candidates: number;
  openings: number;
  posted: string;
};

export const jobs: Job[] = [
  { id: "j1", title: "Machine Learning Engineer", department: "AI/ML", location: "Bangalore", type: "Full-time", status: "Published", candidates: 20, openings: 2, posted: "Jun 26, 2026" },
  { id: "j2", title: "Mobile Developer", department: "Engineering", location: "Delhi NCR", type: "Full-time", status: "Published", candidates: 17, openings: 1, posted: "Jun 24, 2026" },
  { id: "j3", title: "Senior Backend Engineer", department: "Engineering", location: "Remote", type: "Full-time", status: "Published", candidates: 34, openings: 3, posted: "Jun 20, 2026" },
  { id: "j4", title: "Product Designer", department: "Design", location: "Mumbai", type: "Full-time", status: "Published", candidates: 12, openings: 1, posted: "Jun 18, 2026" },
  { id: "j5", title: "DevOps Engineer", department: "Platform", location: "Hybrid", type: "Contract", status: "Draft", candidates: 0, openings: 2, posted: "Jul 01, 2026" },
  { id: "j6", title: "Data Analyst", department: "Analytics", location: "Bangalore", type: "Full-time", status: "Published", candidates: 26, openings: 1, posted: "Jun 15, 2026" },
  { id: "j7", title: "HR Business Partner", department: "People", location: "Remote", type: "Full-time", status: "Closed", candidates: 45, openings: 1, posted: "May 30, 2026" },
];

export type Candidate = {
  id: string;
  name: string;
  email: string;
  role: string;
  stage: "Applied" | "Shortlisted" | "Interview" | "Offer" | "Hired" | "Rejected";
  match: number;
  experience: string;
  source: string;
  applied: string;
};

export const candidates: Candidate[] = [
  { id: "c1", name: "Komal Patel", email: "komal.patel@example.com", role: "Machine Learning Engineer", stage: "Interview", match: 92, experience: "5 yrs", source: "AngelList", applied: "Jun 27, 2026" },
  { id: "c2", name: "Prisha Gupta", email: "prisha.gupta@example.com", role: "Product Designer", stage: "Shortlisted", match: 88, experience: "4 yrs", source: "LinkedIn", applied: "Jun 25, 2026" },
  { id: "c3", name: "Tanvi Mehta", email: "tanvi.mehta@example.com", role: "Senior Backend Engineer", stage: "Offer", match: 95, experience: "7 yrs", source: "Referral", applied: "Jun 22, 2026" },
  { id: "c4", name: "Arjun Nair", email: "arjun.nair@example.com", role: "Mobile Developer", stage: "Applied", match: 74, experience: "3 yrs", source: "Company Site", applied: "Jun 28, 2026" },
  { id: "c5", name: "Rohan Verma", email: "rohan.verma@example.com", role: "Data Analyst", stage: "Interview", match: 81, experience: "4 yrs", source: "Naukri", applied: "Jun 24, 2026" },
  { id: "c6", name: "Ananya Iyer", email: "ananya.iyer@example.com", role: "Senior Backend Engineer", stage: "Hired", match: 97, experience: "8 yrs", source: "Referral", applied: "Jun 10, 2026" },
  { id: "c7", name: "Vikram Singh", email: "vikram.singh@example.com", role: "DevOps Engineer", stage: "Rejected", match: 58, experience: "2 yrs", source: "LinkedIn", applied: "Jun 12, 2026" },
  { id: "c8", name: "Sneha Reddy", email: "sneha.reddy@example.com", role: "Machine Learning Engineer", stage: "Shortlisted", match: 85, experience: "5 yrs", source: "AngelList", applied: "Jun 26, 2026" },
];

export type Interview = {
  id: string;
  candidate: string;
  role: string;
  round: string;
  interviewer: string;
  when: string;
  status: "Scheduled" | "Completed" | "Pending" | "Cancelled";
};

export const interviews: Interview[] = [
  { id: "i1", candidate: "Komal Patel", role: "Machine Learning Engineer", round: "Technical Round 1", interviewer: "Demo Interviewer", when: "Jul 12, 2026 · 10:00 AM", status: "Scheduled" },
  { id: "i2", candidate: "Rohan Verma", role: "Data Analyst", round: "HR Round", interviewer: "Demo Manager", when: "Jul 12, 2026 · 02:30 PM", status: "Scheduled" },
  { id: "i3", candidate: "Tanvi Mehta", role: "Senior Backend Engineer", round: "System Design", interviewer: "Demo Interviewer", when: "Jul 11, 2026 · 11:00 AM", status: "Completed" },
  { id: "i4", candidate: "Sneha Reddy", role: "Machine Learning Engineer", round: "Technical Round 2", interviewer: "Demo Manager", when: "Jul 14, 2026 · 04:00 PM", status: "Pending" },
  { id: "i5", candidate: "Arjun Nair", role: "Mobile Developer", round: "Phone Screen", interviewer: "Demo Recruiter", when: "Jul 09, 2026 · 09:30 AM", status: "Cancelled" },
];

export const pipeline = [
  { stage: "Applied", count: 200 },
  { stage: "Shortlisted", count: 86 },
  { stage: "Interview", count: 41 },
  { stage: "Offer", count: 18 },
  { stage: "Hired", count: 11 },
];
