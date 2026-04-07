import {
 BarChart3,
 CheckCircle,
 Layers,
 TrendingUp,
 Users,
 Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceData {
 slug: string;
 icon: LucideIcon;
 title: string;
 tagline: string;
 overview: string;
 whoItsFor: string[];
 problemsSolved: Array<{ heading: string; description: string }>;
 programStructure: Array<{
  phase: string;
  title: string;
  description: string;
 }>;
 expectedResults: string[];
 accent: "gold" | "blue";
}

export const servicesData: ServiceData[] = [
 {
  slug: "business-growth-strategy",
  icon: TrendingUp,
  title: "Business Growth Strategy",
  tagline: "A Clear Roadmap to Scale Your Business — No More Guessing",
  accent: "gold",
  overview:
   "Alpha Radar's Business Growth Strategy Program is a 360° business assessment and execution roadmap designed for entrepreneurs committed to moving from daily firefighting to structured, system-driven growth. We go beyond surface-level advice — rigorously evaluating every critical dimension of your business including market positioning, revenue architecture, operational capability, team productivity and leadership effectiveness. The outcome is not just insight but a clear execution-ready growth blueprint that enables you to build a high-performance, scalable business.",
  whoItsFor: [
   "Entrepreneurs who are doing well but feel stuck in daily operations",
   "Business owners ready to move from firefighting to system-driven growth",
   "Leaders who want to build scalable systems and reduce owner dependency",
   "Businesses aiming to improve revenue, profitability and predictability",
   "Entrepreneurs committed to building strong teams and long-term sustainable growth",
  ],
  problemsSolved: [
   {
    heading: "Strategic Clarity",
    description: "Define your business direction, set meaningful goals and build a growth roadmap that gives your entire team a clear path forward.",
   },
   {
    heading: "Revenue Engine Optimisation",
    description: "Strengthen your pricing, improve your conversion architecture and build systems that increase what every customer is worth to your business.",
   },
   {
    heading: "Systems and Process Building",
    description: "Move from owner-dependent operations to structured, repeatable systems that allow your business to run and grow without you in the middle of everything.",
   },
   {
    heading: "Team Productivity and Accountability",
    description: "Build a team that is focused, motivated and accountable — where people take ownership of their roles and deliver desired results consistently.",
   },
   {
    heading: "Time and Leadership Effectiveness",
    description: "Shift from being the operator who does everything to the leader who steers the business — enabling you to concentrate on what truly matters for sustainable growth.",
   },
   {
    heading: "Customer Growth Framework",
    description: "A structured, execution-focused approach to building a strong and scalable customer base that grows sustainably over time.",
   },
   {
    heading: "Professional Presence and Liaising",
    description: "Commanding executive presence that builds trust, influences decisions and drives business outcomes.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Business Assessment",
    description: "We start by getting a complete, honest picture of where your business stands today — what is working, what is not and where the real opportunities for growth are hiding.",
   },
   {
    phase: "Phase 2",
    title: "Market and Revenue Analysis",
    description: "We study your market, your customers and your competition — so we understand exactly where your business can win and what it will take to get there.",
   },
   {
    phase: "Phase 3",
    title: "Growth Blueprint Design",
    description: "Developing a high-impact roadmap that transforms your growth ambitions into a clear, structured and achievable reality.",
   },
   {
    phase: "Phase 4",
    title: "Implementation and Execution Support",
    description: "Our approach ensures seamless implementation and strong execution to achieve tangible business outcomes.",
   },
   {
    phase: "Phase 5",
    title: "Review, Refine and Scale",
    description: "Periodically reviewing and refining the approach to ensure consistent progress and sustainable business growth.",
   },
  ],
  expectedResults: [
   "Clear business direction and a structured growth roadmap your team can align with and execute",
   "Improved revenue and profitability through sharper strategy and smarter resource allocation",
   "System-driven operations that reduce chaos and create consistency across the business",
   "Reduced owner dependency through structured processes and scalable frameworks",
   "Higher team productivity and accountability — people who own their roles and deliver results",
   "A stronger customer growth engine built on retention, referrals and repeat business",
  ],
 },
 {
  slug: "revenue-optimization",
  icon: BarChart3,
  title: "Revenue Optimization",
  tagline: "More Revenue From What You Already Have",
  accent: "blue",
  overview:
   "Most businesses are leaving significant revenue on the table — not because they lack customers, but because they lack the systems to maximise what each customer is worth. Our Revenue Optimization program takes a structured look at your pricing, sales process, customer retention and upsell and cross-sell frameworks. We find exactly where money is being lost and build the engine that makes revenue grow predictably — with improvements that become visible as the changes take hold.",
  whoItsFor: [
   "Business owners who feel their revenue does not reflect the effort they are putting in",
   "Fix what's holding you back — we uncover where you're leaking revenue and what needs to change",
   "Businesses with good customer flow but unpredictable or inconsistent cash flow",
   "Leaders who are losing customers and want to understand why",
   "Businesses that want to earn more from existing operations before adding more cost",
  ],
  problemsSolved: [
   {
    heading: "Pricing That Reflects Your True Value",
    description: "Fix what's holding you back — we uncover where you are leaking revenue and what needs to change.",
   },
   {
    heading: "Maximising Revenue From Every Customer",
    description: "Build the upsell, cross-sell and retention systems that make existing customers your most reliable and valuable source of revenue.",
   },
   {
    heading: "A Sales Process That Converts More Consistently",
    description: "Improve how you present, follow up and close — so more of your conversations become paying customers without more time or spend.",
   },
   {
    heading: "Predictable Cash Flow You Can Plan Around",
    description: "Create the revenue rhythm and recurring income streams that give your business the financial stability to make confident decisions.",
   },
   {
    heading: "Complete Visibility Into Your Revenue Picture",
    description: "Put in place the dashboards and tracking that tell you exactly what is driving revenue, what is not and what to focus on next.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Revenue Diagnostic",
    description: "We examine your full revenue picture — pricing, sales funnel, conversion rates, customer retention and lifetime value — to find exactly where money is being lost or left behind.",
   },
   {
    phase: "Phase 2",
    title: "Pricing and Value Alignment",
    description: "We help you reprice your products or services in a way that reflects real value — so you earn more per customer without constantly justifying your rates.",
   },
   {
    phase: "Phase 3",
    title: "Upsell and Cross-Sell Framework",
    description: "We design structured upsell and cross-sell systems — identifying the right combinations, the right timing and the right approach that increases revenue per transaction without pressuring customers.",
   },
   {
    phase: "Phase 4",
    title: "Customer Retention and Repeat Sales System",
    description: "We build the follow-up systems, loyalty frameworks and engagement calendars that turn one-time customers into long-term, high-value relationships.",
   },
   {
    phase: "Phase 5",
    title: "Revenue Tracking and Consistency",
    description: "We set up simple, clear tracking so you always know where your revenue stands — and what actions to take when numbers shift.",
   },
  ],
  expectedResults: [
   "Higher revenue from existing customers — without the cost of acquiring new ones",
   "Improved profit margins through structured upselling and smarter pricing",
   "Stronger customer relationships built on value, trust and consistent follow-through",
   "A repeat sales engine that drives predictable and sustainable revenue growth",
   "Increased customer lifetime value as retention and loyalty systems take hold",
  ],
 },
 {
  slug: "leadership-development",
  icon: Users,
  title: "Leadership Development",
  tagline: "Become the Leader Your Business Needs to Reach the Next Level",
  accent: "gold",
  overview:
   "As your business grows, the way you lead must grow with it. The habits and instincts that got you here are often the very things that will hold you back from what is next. Our Leadership Development program helps business owners and leaders make that shift — developing the vision, strategic thinking, communication and emotional intelligence that separate leaders who survive from those who build something lasting.",
  whoItsFor: [
   "Business owners doing well but feeling stretched while leading a growing team",
   "Entrepreneurs ready to shift from operator to strategic leader",
   "Leaders who want stronger teams and less dependency on themselves",
   "Professionals looking to build executive presence, communicate with authority and handle high-stakes situations",
   "Individuals focused on improving negotiation skills and emotional intelligence to lead, influence and decide more effectively",
  ],
  problemsSolved: [
   {
    heading: "A Leadership Style That Scales With Your Business",
    description: "Develop the skills and approach that let you lead a larger, more complex business without losing effectiveness or burning out.",
   },
   {
    heading: "Vision and Strategic Thinking",
    description: "Build the ability to see beyond daily operations — developing a clear long-term direction and the strategic mindset to make decisions that move the business forward.",
   },
   {
    heading: "Executive Presence and Communication",
    description: "Develop the confidence, clarity and communication skills that command respect — in meetings, negotiations and with high-profile clients and stakeholders.",
   },
   {
    heading: "Emotional Intelligence in Leadership",
    description: "Build the self-awareness and empathy that makes you a more effective leader — one who motivates teams, manages pressure and handles difficult situations with composure.",
   },
   {
    heading: "A Culture Built on Ownership and Performance",
    description: "Create the environment, standards and management habits that make high performance the norm — not something you have to chase or enforce.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Leadership Self-Assessment",
    description: "We start with an honest look at how you currently lead — your strengths, your blind spots, how your team experiences you and what needs to change for the next stage of growth.",
   },
   {
    phase: "Phase 2",
    title: "Vision, Strategy and Decision-Making",
    description: "We build the frameworks for long-term thinking, strategic clarity and confident decision-making — even in ambiguous or high-pressure situations.",
   },
   {
    phase: "Phase 3",
    title: "Executive Presence and Communication",
    description: "We work on how you show up — in meetings, negotiations and difficult conversations — so people listen, follow and perform at their best under your leadership.",
   },
   {
    phase: "Phase 4",
    title: "Emotional Intelligence and Team Leadership",
    description: "We develop your empathy, self-regulation and interpersonal skills — the foundation of trust, team performance and a culture people want to be part of.",
   },
   {
    phase: "Phase 5",
    title: "Developing Leaders Around You",
    description: "We help you identify and develop the next layer of leadership in your business — so you are not the only one carrying the weight of the organisation.",
   },
  ],
  expectedResults: [
   "A clear vision and strategic direction that your team understands, believes in and works toward",
   "Better decision-making — faster, more confident and grounded in long-term thinking",
   "Stronger executive presence and communication that commands respect in any room",
   "The emotional intelligence to lead through pressure, conflict and change without losing composure",
   "A high-performing team culture where people are inspired, aligned and accountable",
  ],
 },
 {
  slug: "performance-coaching",
  icon: Zap,
  title: "People Management & Team Development",
  tagline: "Build a Team That Delivers Results",
  accent: "blue",
  overview:
   "Scaling a business is not just about expanding products, markets, or revenue — it is about scaling people. Most business owners are unknowingly the biggest bottleneck in their own team. This program is built for entrepreneurs and business leaders who want to move from managing people reactively to leading teams proactively — building the structure, culture and accountability systems that allow your people to perform at their best, grow in their roles and drive results independently.",
  whoItsFor: [
   "Business owners who are doing well but spend too much time managing instead of leading",
   "Entrepreneurs ready to move from informal people management to a structured, professional approach",
   "Leaders who want to build a team that is accountable, motivated and capable of growing with the business",
   "Businesses experiencing high attrition, low morale, or inconsistent team performance",
   "Founders committed to creating a strong, people-first culture that supports long-term sustainable growth",
  ],
  problemsSolved: [
   {
    heading: "Build a Team That Takes Ownership and Delivers",
    description: "Create the role clarity and accountability culture that moves people from task-followers to genuine owners of their work and results.",
   },
   {
    heading: "Clear Roles So Everyone Knows What Is Expected",
    description: "Define responsibilities, KRAs and reporting lines so there is no confusion about who does what — and how success is measured.",
   },
   {
    heading: "A Performance Framework That Motivates and Develops",
    description: "Build a recognition, reward and review system that motivates high performers, develops those who have potential and gives every person a clear standard to work toward.",
   },
   {
    heading: "Retaining the People Who Make a Difference",
    description: "Create the growth paths, recognition and culture that make talented people want to stay.",
   },
   {
    heading: "A Workplace Culture Built on Pride and Ownership",
    description: "Shift from a culture of dependency to one where people take initiative, solve problems and genuinely care about the work they do.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Team Assessment and Culture Review",
    description: "We assess your current team structure, roles, performance patterns and culture — getting a clear picture of what is working, what is not and where to focus first.",
   },
   {
    phase: "Phase 2",
    title: "Role Clarity and Accountability Design",
    description: "We help in defining clear job descriptions, KRAs and success metrics for every key role — so there is no ambiguity about expectations and how performance will be measured.",
   },
   {
    phase: "Phase 3",
    title: "Performance Management and Recognition System",
    description: "We help in building a practical review, feedback and recognition process that keeps standards high, addresses issues early and motivates people to own their results.",
   },
   {
    phase: "Phase 4",
    title: "Leadership Communication and Team Motivation",
    description: "We work on how you manage conversations, set expectations, handle conflict, motivate individuals and build genuine authority — so you lead with confidence and earn real respect.",
   },
   {
    phase: "Phase 5",
    title: "People Development and Retention Plan",
    description: "We help in creating a structured plan for growing your people — with training, career paths and a retention strategy that makes your organisation a place people choose to stay and grow.",
   },
  ],
  expectedResults: [
   "A motivated, accountable team that takes ownership of their roles and delivers results consistently",
   "Reduced owner dependency — your team functions and delivers even when you step back",
   "Stronger retention as people have clear growth paths, recognition and a culture worth staying in",
   "A structured performance framework where high standards are set, measured and maintained",
   "The confidence to hire, develop and lead people at scale without losing quality or control",
  ],
 },
 {
  slug: "systems-scaling",
  icon: Layers,
  title: "Systems & Scaling Framework",
  tagline: "Build the Foundation Your Business Needs to Grow Without Breaking",
  accent: "gold",
  overview:
   "When a business grows without structure, everything falls back on the owner — repeated problems, constant involvement and no real ability to step away. Our Systems & Scaling Framework changes that by building the operational foundation your business needs — clear processes, defined SOPs, structured teams and decision systems that allow it to grow without relying on you.",
  whoItsFor: [
   "Business owners who are doing well but know their current way of working cannot support the next stage of growth",
   "Entrepreneurs ready to reduce owner dependency and build a business that runs without them in the middle of everything",
   "Leaders who want to standardise operations, improve consistency and create scalable systems",
   "Businesses aiming to grow in revenue, team size, or geography — without losing quality or control",
   "Founders committed to building a professionally managed, long-term sustainable business",
  ],
  problemsSolved: [
   {
    heading: "A Business That Runs Smoothly Without You",
    description: "Build the documented systems and processes that allow your team to operate, decide and deliver — without needing you involved in every step.",
   },
   {
    heading: "Consistent Quality Regardless of Who Is Doing the Work",
    description: "Standardise how things get done so your customers get the same experience every time — regardless of team size or growth pace.",
   },
   {
    heading: "The Confidence to Delegate and Let Go",
    description: "Put the right processes and accountability structures in place so delegation becomes effective — and you can step back knowing things will still be done properly.",
   },
   {
    heading: "Operations That Handle Growth Without Breaking Down",
    description: "Design an operational model built to scale — one that can absorb more clients, more team members and more complexity without unravelling.",
   },
   {
    heading: "A Professionally Run Business That Reflects Your Ambition",
    description: "Create the structure, documentation and independence that gives your business real credibility — with customers, partners and potential investors alike.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Operational Review and Mapping",
    description: "We map out how your business currently operates — identifying every bottleneck, manual dependency and gap that is limiting your ability to grow or step back.",
   },
   {
    phase: "Phase 2",
    title: "Process Documentation and SOP Design",
    description: "We help in building clear, practical SOPs and process frameworks for every critical function — so work gets done the right way consistently, without you having to explain it each time.",
   },
   {
    phase: "Phase 3",
    title: "Tools, Technology and Automation",
    description: "We help you identify and implement the right CRM, inventory and management tools — removing repetitive manual work and freeing your team to focus on higher-value activity.",
   },
  ],
  expectedResults: [
   "Scalable systems and documented processes that allow the business to grow without depending on the owner",
   "Consistent quality and delivery — regardless of who is handling the work or how fast you are growing",
   "Reduced operational chaos as clear SOPs, workflows and accountability structures replace ad-hoc methods",
   "A team that can onboard, execute and perform without constant direction from the top",
   "A professionally structured, investor-ready business built for sustainable long-term scale",
  ],
 },
 {
  slug: "execution-accountability",
  icon: CheckCircle,
  title: "Execution & Accountability Planning",
  tagline: "Build the Discipline to Get Things Done",
  accent: "blue",
  overview:
   "Most business owners already know what needs to be done. The real challenge is executing it consistently — at the right level — without being pulled into daily fires and low-value work. Execution is the bridge between strategy and results. Without it, even the strongest plans fail. Our Execution & Accountability Planning program creates the structure, cadence and external accountability required to turn your highest priorities into consistent, measurable outcomes — month after month.",
  whoItsFor: [
   "Business owners who are doing well but struggle to stay focused on what will actually move the business forward",
   "Entrepreneurs who set goals regularly but find execution inconsistent or incomplete",
   "Leaders who spend most of their time in the business instead of working on it strategically",
   "Founders who know that external structure and accountability would significantly change their output",
   "Anyone who wants to build the personal discipline and execution habits that drive long-term sustainable growth",
  ],
  problemsSolved: [
   {
    heading: "Consistent Follow-Through on What Matters Most",
    description: "Build the systems and accountability structures that move you from good intentions to completed outcomes — week after week.",
   },
   {
    heading: "Focus on High-Impact Work, Not Just Urgent Tasks",
    description: "Implement a prioritisation framework that protects time for the work that actually moves your business forward — not just the loudest demand of the day.",
   },
   {
    heading: "Full Visibility Into Progress on Every Goal",
    description: "Put in place simple milestone tracking so you always know where each priority stands — and what needs attention before it becomes a problem.",
   },
   {
    heading: "Execution Habits That Become Your Default Way of Working",
    description: "Build the personal discipline and systems mindset that make consistent follow-through your natural mode of operating — not something that requires constant effort.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Goal Setting and Prioritisation",
    description: "We help you define clear, meaningful goals for the next 90 days — identifying the specific priorities that will make the biggest difference and setting them up in a way that is trackable and actionable.",
   },
   {
    phase: "Phase 2",
    title: "Weekly Planning and Execution System",
    description: "We help in building a practical weekly planning rhythm — including daily review protocols and priority frameworks — that keep you focused on your most important work even when day-to-day demands compete for your attention.",
   },
   {
    phase: "Phase 3",
    title: "Performance Reviews and Course Correction",
    description: "We review what is working, what is not and what needs to change — making sure your plan stays relevant and your momentum stays high throughout the program.",
   },
   {
    phase: "Phase 4",
    title: "Building Lasting Execution Habits",
    description: "We focus on embedding the execution habits and mindset shifts that outlast the program itself — so high performance becomes your consistent baseline going forward.",
   },
  ],
  expectedResults: [
   "Goals that get completed — not just planned, discussed and deferred",
   "A disciplined weekly rhythm that protects time for strategic work, not just daily firefighting",
   "Stakeholders, teams and partners who trust you because you consistently deliver on your commitments",
   "A faster-moving business as execution sharpens and the gap between decisions and results narrows",
   "Lasting execution habits that compound over time — making high performance your default, not your target",
  ],
 },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
 return servicesData.find((s) => s.slug === slug);
}
