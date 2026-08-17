import {
 Award,
 BarChart3,
 BookOpen,
 Briefcase,
 CheckCircle,
 Compass,
 Crown,
 Eye,
 Flame,
 Handshake,
 Layers,
 MessageSquare,
 Radar,
 ShieldAlert,
 Sparkles,
 Target,
 TrendingUp,
 UserCheck,
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
 segment: "corporate" | "sme" | "university";
}

export const servicesData: ServiceData[] = [
 {
  slug: "business-growth-strategy",
  icon: TrendingUp,
  title: "Business Growth Strategy",
  tagline: "A Clear Roadmap to Scale Your Business — No More Guessing",
  accent: "gold",
  segment: "sme",
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
  segment: "sme",
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
  slug: "family-business",
  icon: Crown,
  title: "NexGen Business Leadership",
  tagline: "From Family Successor to Business Leader",
  accent: "gold",
  segment: "sme",
  overview:
   "Successful leadership is not inherited, it is developed. Our NexGen Business Leadership programme prepares the next generation of family business successors to confidently lead — not just inherit a title — through practical exposure, financial intelligence, strategic thinking and customer-centric decision-making. We work with successors and the senior generation together, so the transition is planned, not accidental.",
  whoItsFor: [
   "Next-generation successors preparing to take on greater responsibility in the family business",
   "Founders and promoters planning a structured leadership transition",
   "Family businesses concerned about promoter dependency and readiness of the next generation",
   "Successors who have the ownership but not yet the operating experience or authority",
   "Families wanting to separate ownership conversations from management conversations before conflict sets in",
  ],
  problemsSolved: [
   {
    heading: "Business Acumen Beyond the Family Dining Table",
    description: "Build the commercial judgement, financial literacy and strategic thinking that successors need to run the business — not just inherit it.",
   },
   {
    heading: "Earning Authority, Not Just Assuming It",
    description: "Help successors build credibility with long-serving employees and customers through demonstrated capability, not just family name.",
   },
   {
    heading: "A Structured Succession Plan, Not a Sudden Handover",
    description: "Create a phased transition roadmap covering roles, decision rights and timelines — agreed by both generations in advance.",
   },
   {
    heading: "Governance and Ethics That Protect the Business",
    description: "Establish family governance norms, ownership-management boundaries and decision protocols that prevent future disputes.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Readiness Assessment",
    description: "We assess the successor's current business acumen, the promoter's transition timeline and the gaps between them — creating an honest starting point for both generations.",
   },
   {
    phase: "Phase 2",
    title: "Business Acumen and Financial Intelligence",
    description: "We build the successor's understanding of P&L, cash flow, pricing and operations — the fluency needed to make and defend real business decisions.",
   },
   {
    phase: "Phase 3",
    title: "Strategic Thinking and Negotiation",
    description: "We develop the successor's ability to think beyond day-to-day operations — setting direction, negotiating with stakeholders and making trade-offs with confidence.",
   },
   {
    phase: "Phase 4",
    title: "Governance, Ethics and Ownership Mindset",
    description: "We help the family define clear governance norms and an ownership mindset that separates personal interest from business interest — protecting the business long term.",
   },
   {
    phase: "Phase 5",
    title: "Transition Roadmap and Handover",
    description: "We finalise a phased, time-bound transition plan — roles, decision rights and milestones — agreed and documented by both generations.",
   },
  ],
  expectedResults: [
   "A next-generation leader with real business acumen, not just inherited authority",
   "A documented, phased succession plan that reduces uncertainty and family friction",
   "Stronger credibility for the successor with employees, customers and stakeholders",
   "Clear governance norms that separate ownership from management decisions",
   "Reduced promoter dependency and a more resilient, future-ready business",
  ],
 },
 {
  slug: "leadership-development",
  icon: Users,
  title: "Leadership Development",
  tagline: "Become the Leader Your Business Needs to Reach the Next Level",
  accent: "gold",
  segment: "sme",
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
  segment: "sme",
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
  segment: "sme",
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
  segment: "sme",
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
 {
  slug: "leading-in-a-vuca-bani-world",
  icon: Compass,
  title: "Leading in a VUCA & BANI World",
  tagline: "Build Leaders Who Can Decide, Adapt and Lead Through Uncertainty",
  accent: "gold",
  segment: "corporate",
  overview:
   "Volatility, uncertainty, complexity and ambiguity aren't exceptions anymore — they're the operating environment. This flagship leadership programme prepares CXOs, business heads and functional leaders to make sound decisions under pressure, lead change with confidence and build the strategic resilience their organisations need to stay ahead when conditions shift without warning.",
  whoItsFor: [
   "CXOs and business heads navigating strategic ambiguity and constant market change",
   "Senior managers and functional heads responsible for decisions with incomplete information",
   "Organisations preparing their leadership bench for volatility, disruption and rapid change",
   "Leaders who need a shared vocabulary and framework for decision-making under uncertainty",
  ],
  problemsSolved: [
   {
    heading: "Decision-Making Under Uncertainty",
    description: "Equip leaders with structured frameworks — VUCA and BANI — to make sound calls when information is incomplete and conditions are shifting.",
   },
   {
    heading: "Strategic Ambiguity Turned Into Direction",
    description: "Help leaders translate ambiguous market signals into clear strategic priorities their teams can execute against.",
   },
   {
    heading: "Adaptive Leadership Under Pressure",
    description: "Build the mindset and behaviours that let leaders adjust course quickly without losing organisational confidence.",
   },
   {
    heading: "Strategy Execution, Not Just Strategy Design",
    description: "Bridge the gap between having a strategy and actually executing it consistently through disruption.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Understanding VUCA & BANI",
    description: "We ground leaders in the VUCA and BANI frameworks — helping them recognise which type of disruption they're facing and why it demands a different response.",
   },
   {
    phase: "Phase 2",
    title: "Adaptive Leadership Mindset",
    description: "We build the psychological flexibility and confidence leaders need to make calls without complete information.",
   },
   {
    phase: "Phase 3",
    title: "Strategic Decision-Making Frameworks",
    description: "We equip leaders with practical tools for prioritising, scenario planning and course-correcting under pressure.",
   },
   {
    phase: "Phase 4",
    title: "Strategy Execution in Disruption",
    description: "We work on translating decisions into aligned team action — so strategy doesn't stall when conditions change.",
   },
  ],
  expectedResults: [
   "Faster, more confident decisions in ambiguous or high-pressure situations",
   "Greater organisational agility and resilience through market disruption",
   "A leadership bench equipped with a shared framework for uncertainty",
   "Improved strategy execution, measured through pre/post assessment, leadership action plans and a 90-day review",
  ],
 },
 {
  slug: "perform-or-perish-high-performance-team-leaders",
  icon: Target,
  title: "Perform or Perish: Building High-Performance Team Leaders",
  tagline: "Turn Managers Into Business Coaches Who Build Accountable Teams",
  accent: "blue",
  segment: "corporate",
  overview:
   "Most managers were promoted for individual performance, not for coaching others. This programme develops managers and first-line leaders into genuine business coaches — using the GROW model, the Leadership Pyramid and the Five Responsibilities of a Modern Business Coach — so accountability stops depending on any one individual and starts living in the team.",
  whoItsFor: [
   "Managers and team leaders responsible for driving team performance",
   "First-line leaders transitioning from individual contributor to people manager",
   "Organisations facing weak delegation, low accountability or over-dependency on a few key individuals",
   "Leadership teams looking to build a stronger, more self-sufficient management pipeline",
  ],
  problemsSolved: [
   {
    heading: "From Manager to Business Coach",
    description: "Shift managers from directing tasks to coaching outcomes — using the Business Coach model and GROW framework in real team conversations.",
   },
   {
    heading: "Delegation That Actually Works",
    description: "Fix weak delegation by pairing clear SOPs, job descriptions and KPIs — so handing off work doesn't mean losing control of quality.",
   },
   {
    heading: "Accountability Without Micromanagement",
    description: "Build the Leadership Pyramid habits that create genuine ownership at every level, reducing dependency on any one individual.",
   },
   {
    heading: "A Repeatable Leadership Pipeline",
    description: "Give the organisation a consistent model for developing future team leaders, not just managing current ones.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "The Business Coach Model",
    description: "We introduce the shift from manager to coach — and the Five Responsibilities of a Modern Business Coach that underpin it.",
   },
   {
    phase: "Phase 2",
    title: "GROW Coaching Conversations",
    description: "We build practical skill in using the GROW model for real performance and development conversations.",
   },
   {
    phase: "Phase 3",
    title: "SOP–JD–KPI Alignment",
    description: "We help leaders build the operational clarity — SOPs, job descriptions and KPIs — that makes delegation and accountability possible.",
   },
   {
    phase: "Phase 4",
    title: "The Leadership Pyramid in Practice",
    description: "We embed the habits that build an accountable, self-sufficient team — reducing dependency on the leader for every decision.",
   },
  ],
  expectedResults: [
   "Higher team productivity and stronger individual ownership of results",
   "A visible leadership pipeline, not just a set of task managers",
   "Reduced dependency on any single individual for team performance",
   "Progress tracked through manager feedback, engagement data, team KPIs and coaching reviews",
  ],
 },
 {
  slug: "breaking-organizational-complacency",
  icon: Flame,
  title: "Breaking Organizational Complacency",
  tagline: "Replace Comfort Zones With a Culture of Execution and Innovation",
  accent: "gold",
  segment: "corporate",
  overview:
   "Organisations rarely fail because of one bad decision — they stall because comfort zones, silos and quiet resistance to change go unaddressed for too long. This programme is built for leadership teams and change champions who need to break organisational complacency and build a genuine culture of growth mindset, innovation and execution discipline.",
  whoItsFor: [
   "Leadership teams responsible for driving organisational change and innovation",
   "Change champions tasked with rolling out new initiatives across teams",
   "Organisations facing resistance, silos or a culture stuck in its comfort zone",
   "Businesses that need faster, more consistent execution on strategic priorities",
  ],
  problemsSolved: [
   {
    heading: "Naming the Comfort Zone",
    description: "Help leaders and teams recognise the specific behaviours and habits that signal complacency before they calcify into culture.",
   },
   {
    heading: "Breaking Down Silos",
    description: "Build cross-functional habits and shared ownership that reduce the resistance and territorial thinking that slow change down.",
   },
   {
    heading: "Building a Growth Mindset",
    description: "Shift the default response to new ideas and challenges from resistance to curiosity and ownership.",
   },
   {
    heading: "Execution Discipline That Sticks",
    description: "Install the habits and cadence that turn innovation ideas into consistently executed initiatives, not one-off bursts of energy.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Diagnosing Complacency",
    description: "We identify where resistance, silos and comfort-zone thinking are actually showing up in the organisation's day-to-day behaviour.",
   },
   {
    phase: "Phase 2",
    title: "Growth Mindset Foundations",
    description: "We build the mindset shift that turns challenges into opportunities rather than threats to be avoided.",
   },
   {
    phase: "Phase 3",
    title: "Cross-Functional Ownership",
    description: "We work on breaking silos through shared goals, structured collaboration and change champion networks.",
   },
   {
    phase: "Phase 4",
    title: "Execution Discipline",
    description: "We embed a cadence of review, ownership and follow-through that keeps innovation and improvement continuous, not sporadic.",
   },
  ],
  expectedResults: [
   "A visible shift from resistance to ownership around change initiatives",
   "Faster execution on strategic and innovation priorities",
   "Stronger cross-functional collaboration and reduced silo thinking",
   "Progress tracked through improvement initiatives and execution scorecards",
  ],
 },
 {
  slug: "customer-centricity-to-customer-intelligence",
  icon: Eye,
  title: "Customer Centricity to Customer Intelligence",
  tagline: "Turn Every Customer Interaction Into Strategic Intelligence",
  accent: "blue",
  segment: "corporate",
  overview:
   "Most organisations collect customer feedback — very few convert it into intelligence that shapes decisions. This programme takes sales, service and operations teams from simply being customer-centric to being customer-intelligent, using structured customer journey mapping to turn everyday interactions into insight that drives retention, loyalty and better decisions.",
  whoItsFor: [
   "Sales, service and operations teams who interact directly with customers",
   "Organisations with limited visibility into what's actually driving customer decisions",
   "Leaders who want customer insight to inform strategy, not just sit in a feedback folder",
   "Teams responsible for improving retention, loyalty and customer lifetime value",
  ],
  problemsSolved: [
   {
    heading: "Mapping the Real Customer Journey",
    description: "Build a clear, honest map of every touchpoint a customer experiences — surfacing the moments that actually shape loyalty.",
   },
   {
    heading: "From Feedback to Intelligence",
    description: "Give teams a structured way to convert scattered customer feedback into insight that leadership can act on.",
   },
   {
    heading: "Insight-Driven Decision-Making",
    description: "Build the habit of using customer intelligence — not assumptions — to guide product, service and process decisions.",
   },
   {
    heading: "Retention Through Understanding",
    description: "Help teams recognise the early signals of a customer at risk of leaving, and respond before it's too late.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Customer Journey Mapping",
    description: "We map the end-to-end customer journey across every function — identifying moments of truth that shape the relationship.",
   },
   {
    phase: "Phase 2",
    title: "From Data to Customer Intelligence",
    description: "We build the skills to convert everyday interactions and feedback into structured, usable intelligence.",
   },
   {
    phase: "Phase 3",
    title: "Customer-Centric Decision-Making",
    description: "We work on embedding customer intelligence into everyday decisions across sales, service and operations.",
   },
   {
    phase: "Phase 4",
    title: "Retention and Loyalty Systems",
    description: "We build practical playbooks for spotting at-risk customers early and strengthening loyalty proactively.",
   },
  ],
  expectedResults: [
   "Improved customer retention and loyalty through earlier, better-informed action",
   "Better strategic decisions grounded in real customer intelligence",
   "Stronger alignment between sales, service and operations around the customer",
   "Progress measured through CSAT, NPS and retention metrics",
  ],
 },
 {
  slug: "complaint-intelligence-framework",
  icon: ShieldAlert,
  title: "Complaint Intelligence Framework",
  tagline: "Transform Complaints Into a Business Intelligence Engine",
  accent: "gold",
  segment: "corporate",
  overview:
   "Recurring complaints aren't just a service problem — they're a signal your organisation is failing to learn from itself. This programme gives customer service, operations and quality teams a structured complaint taxonomy, root-cause analysis methodology and governance model that converts complaints from a cost centre into a source of real business intelligence.",
  whoItsFor: [
   "Customer service, operations and quality teams managing recurring complaints",
   "Organisations that resolve individual complaints but keep seeing the same issues repeat",
   "Leaders who want complaint data to drive process improvement, not just closure metrics",
   "Teams needing a governance structure for escalation, root-cause analysis and resolution",
  ],
  problemsSolved: [
   {
    heading: "A Shared Complaint Taxonomy",
    description: "Give every team a consistent way to categorise and classify complaints — the foundation for spotting real patterns.",
   },
   {
    heading: "Root-Cause Analysis, Not Just Resolution",
    description: "Build the discipline to ask why a complaint happened, not just how to close it — using structured RCA methods.",
   },
   {
    heading: "Governance That Prevents Recurrence",
    description: "Establish clear ownership and escalation paths so root causes actually get fixed, not just documented.",
   },
   {
    heading: "Complaints as Business Intelligence",
    description: "Turn complaint trends into a regular input for process and product decisions — closing the loop from feedback to fix.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Building the Complaint Taxonomy",
    description: "We help teams build a shared, structured way to categorise complaints — the first step to seeing real patterns instead of noise.",
   },
   {
    phase: "Phase 2",
    title: "Root-Cause Analysis Methodology",
    description: "We build practical RCA skills so teams address the underlying cause, not just the symptom in front of them.",
   },
   {
    phase: "Phase 3",
    title: "Governance and Escalation Design",
    description: "We help design clear ownership, escalation triggers and closure standards that prevent repeat issues from slipping through.",
   },
   {
    phase: "Phase 4",
    title: "Complaint Intelligence Reporting",
    description: "We build a simple reporting rhythm that turns complaint trends into decisions leadership can act on.",
   },
  ],
  expectedResults: [
   "Fewer repeat complaints as root causes are actually addressed",
   "Faster turnaround time (TAT) on complaint resolution",
   "A functioning root-cause-to-closure loop, not just a complaint log",
   "Progress tracked through complaint trends, TAT and root-cause closure rates",
  ],
 },
 {
  slug: "reading-minds-and-leading-people",
  icon: Users,
  title: "Reading Minds & Leading People",
  tagline: "Improve People Leadership Through Behaviour, EI and Influence",
  accent: "blue",
  segment: "corporate",
  overview:
   "Technical competence gets people promoted into leadership — but what keeps teams engaged is how well a leader reads people and manages relationships. This programme builds the behavioural insight, emotional intelligence and influence skills managers and HR leaders need to reduce conflict, lift engagement and lead people, not just processes.",
  whoItsFor: [
   "Managers, team leaders and HR professionals responsible for people leadership",
   "Organisations facing low engagement, unresolved conflict or high attrition",
   "Leaders who want to build influence through understanding, not just authority",
   "Teams needing stronger interpersonal skills to work across functions",
  ],
  problemsSolved: [
   {
    heading: "Reading Behavioural Signals",
    description: "Build the ability to read what people aren't saying directly — spotting disengagement or friction before it becomes a bigger issue.",
   },
   {
    heading: "Emotional Intelligence Under Pressure",
    description: "Develop the self-awareness and empathy leaders need to manage their own reactions and respond to others constructively.",
   },
   {
    heading: "Influence Without Authority",
    description: "Build the interpersonal skills to gain buy-in and cooperation, particularly across functions where formal authority doesn't apply.",
   },
   {
    heading: "Resolving Conflict Before It Escalates",
    description: "Give leaders practical tools for addressing tension directly and constructively, rather than letting it fester.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Understanding Behaviour and Motivation",
    description: "We build a practical framework for understanding what drives different behaviour styles on a team.",
   },
   {
    phase: "Phase 2",
    title: "Emotional Intelligence in Leadership",
    description: "We develop self-awareness, self-regulation and empathy — the core of emotionally intelligent leadership.",
   },
   {
    phase: "Phase 3",
    title: "Influence and Relationship Building",
    description: "We build practical influencing skills for gaining cooperation and trust, including across teams without direct authority.",
   },
   {
    phase: "Phase 4",
    title: "Managing Conflict Constructively",
    description: "We work through real conflict scenarios, building the confidence to address tension early and fairly.",
   },
  ],
  expectedResults: [
   "Better collaboration and engagement across teams",
   "Fewer unresolved conflicts and faster, more constructive resolution when they arise",
   "Stronger influence and trust-building skills at every management level",
   "Progress tracked through 360 feedback and manager review",
  ],
 },
 {
  slug: "the-art-of-verbal-communication",
  icon: MessageSquare,
  title: "The Art of Verbal Communication",
  tagline: "Strengthen Executive Communication, Listening and Negotiation",
  accent: "gold",
  segment: "corporate",
  overview:
   "Poor conversations and negotiation gaps cost more than most organisations realise — in stalled deals, misread stakeholders and decisions made on incomplete information. This intensive programme builds executive communication, active listening and negotiation skills for managers, sales teams and anyone in a customer-facing or stakeholder-facing role.",
  whoItsFor: [
   "Managers, sales professionals and customer-facing teams",
   "Leaders who need stronger executive presence in high-stakes conversations",
   "Organisations facing poor conversations, negotiation gaps or stakeholder misalignment",
   "Teams that need to influence outcomes through better listening, not just better talking",
  ],
  problemsSolved: [
   {
    heading: "Executive Communication That Commands the Room",
    description: "Build the clarity, structure and presence needed to communicate with authority in meetings and negotiations.",
   },
   {
    heading: "Active Listening as a Leadership Skill",
    description: "Develop the discipline of genuinely listening — surfacing what stakeholders actually need, not just what they say first.",
   },
   {
    heading: "Negotiation That Protects Value",
    description: "Build practical negotiation skills that hold ground on what matters while still building the relationship.",
   },
   {
    heading: "Closing the Stakeholder Gap",
    description: "Address the specific conversation patterns that create misalignment with stakeholders, customers and colleagues.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Executive Communication Foundations",
    description: "We build the structure and clarity behind confident, high-stakes business communication.",
   },
   {
    phase: "Phase 2",
    title: "Active Listening Practice",
    description: "We build the habit of listening to understand, not just to respond — a skill most conversations are missing.",
   },
   {
    phase: "Phase 3",
    title: "Negotiation Skills and Roleplays",
    description: "We work through realistic negotiation scenarios, building practical skill through roleplay and feedback.",
   },
   {
    phase: "Phase 4",
    title: "Stakeholder Conversations in Practice",
    description: "We apply the full toolkit to real stakeholder scenarios participants bring from their own work.",
   },
  ],
  expectedResults: [
   "Stronger stakeholder influence in meetings, negotiations and difficult conversations",
   "More confident, higher-conversion negotiation outcomes",
   "Better alignment with customers and internal stakeholders",
   "Progress measured through roleplays and stakeholder feedback",
  ],
 },
 {
  slug: "turning-crisis-into-competitive-advantage",
  icon: ShieldAlert,
  title: "Turning Crisis into Competitive Advantage",
  tagline: "Build Organisational Resilience Before You Need It",
  accent: "blue",
  segment: "corporate",
  overview:
   "Every organisation faces a crisis eventually — the ones that come out ahead are the ones that prepared before it happened. This programme builds crisis preparedness, communication protocols and recovery playbooks for CXOs and crisis teams, so a disruption becomes a test the organisation passes rather than a threat to its continuity and reputation.",
  whoItsFor: [
   "CXOs, risk leaders and designated crisis response teams",
   "Organisations with limited or untested crisis readiness",
   "Leaders responsible for protecting business continuity and reputation under pressure",
   "Teams that need clear communication protocols for high-pressure, high-visibility situations",
  ],
  problemsSolved: [
   {
    heading: "Crisis Preparedness Before the Crisis",
    description: "Build the plans, protocols and decision rights that need to exist before a crisis hits — not improvised during one.",
   },
   {
    heading: "Communication Under Pressure",
    description: "Develop clear, calm, credible communication protocols for internal teams, customers and external stakeholders during a crisis.",
   },
   {
    heading: "Recovery That Rebuilds Trust",
    description: "Build structured recovery playbooks that restore operations and stakeholder confidence quickly and credibly.",
   },
   {
    heading: "Turning Response Into Reputation",
    description: "Help organisations use a well-handled crisis as proof of their resilience and leadership — a competitive advantage, not just damage control.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Crisis Readiness Audit",
    description: "We assess current crisis plans, decision rights and communication protocols — identifying real gaps before they're tested live.",
   },
   {
    phase: "Phase 2",
    title: "Crisis Communication Protocols",
    description: "We build clear, pre-agreed communication frameworks for internal teams, customers and external stakeholders.",
   },
   {
    phase: "Phase 3",
    title: "Simulation and Response Training",
    description: "We run realistic crisis simulations so leaders practise decision-making and communication under genuine time pressure.",
   },
   {
    phase: "Phase 4",
    title: "Recovery and Reputation Rebuilding",
    description: "We build the recovery playbook that restores operations and stakeholder trust once the immediate crisis has passed.",
   },
  ],
  expectedResults: [
   "Stronger business continuity when disruption hits",
   "Calmer, more credible communication during high-pressure situations",
   "Faster recovery and reputation protection after a crisis",
   "Readiness validated through simulation exercises and a crisis audit",
  ],
 },
 {
  slug: "insight-to-impact-frontline-intelligence",
  icon: Radar,
  title: "Insight to Impact: Converting Frontline Insight to Business Impact",
  tagline: "Build an Intelligence-Led Frontline That Sees the Market Before Others Do",
  accent: "gold",
  segment: "corporate",
  overview:
   "Relationship Managers and Territory Managers sit closer to the market than almost anyone else in the organisation — yet their field observations rarely make it into strategic decisions. This programme develops RMs and Territory Managers into an intelligence-led frontline, using the ACER model and VUCA-aware customer intelligence to convert everyday field observations into insight the business can act on.",
  whoItsFor: [
   "Relationship Managers and Territory Managers operating close to customers and the market",
   "Organisations with weak field or market intelligence feeding into strategic decisions",
   "Sales and service leadership who want frontline observations converted into usable insight",
   "Businesses looking to sense market shifts earlier through their own field teams",
  ],
  problemsSolved: [
   {
    heading: "From Field Observation to Structured Intelligence",
    description: "Build the discipline of capturing what RMs and Territory Managers see in the field in a structured, usable way.",
   },
   {
    heading: "Opportunity Identification in Real Time",
    description: "Train frontline teams to spot emerging opportunities and risks before they show up in lagging reports and dashboards.",
   },
   {
    heading: "Applying the ACER Model in the Field",
    description: "Give frontline teams a practical model — ACER — for turning customer and market signals into action.",
   },
   {
    heading: "Closing the Loop Between Field and Strategy",
    description: "Build the reporting rhythm that gets frontline intelligence in front of the people who set strategy.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "The ACER Intelligence Model",
    description: "We introduce the ACER framework and VUCA-aware thinking as the foundation for reading market and customer signals.",
   },
   {
    phase: "Phase 2",
    title: "Structured Field Observation",
    description: "We build the habit of capturing field intelligence in a consistent, structured way rather than informal, easily lost impressions.",
   },
   {
    phase: "Phase 3",
    title: "Opportunity Identification",
    description: "We train frontline teams to actively spot and flag emerging opportunities and risks as part of their regular routine.",
   },
   {
    phase: "Phase 4",
    title: "Reporting Intelligence Upward",
    description: "We build a simple, consistent reporting rhythm that gets field intelligence into the hands of decision-makers.",
   },
  ],
  expectedResults: [
   "Better, earlier market sensing through the organisation's own frontline",
   "Opportunities and risks identified before they show up in lagging data",
   "A frontline team that sees itself as a source of business intelligence, not just execution",
   "Progress tracked through pre- and post-programme assessment",
  ],
 },
 {
  slug: "corporate-ready-classroom-to-corporate",
  icon: Briefcase,
  title: "Corporate Ready — From Classroom to Corporate",
  tagline: "Bridge the Gap Between Academic Learning and Day-One Workplace Reality",
  accent: "gold",
  segment: "university",
  overview:
   "Academic competence doesn't automatically translate into workplace readiness. This masterclass prepares final-year students to make a confident transition from classroom to corporate — building the executive communication, professional grooming, workplace behaviour and career planning skills that placement interviews and first jobs actually demand.",
  whoItsFor: [
   "Final-year MBA, BBA and engineering students preparing for placements",
   "Placement and career cells wanting to strengthen students' first-job readiness",
   "Students who are academically strong but unsure how workplace expectations differ from campus life",
   "Institutions looking for a practical, industry-led complement to campus placement training",
  ],
  problemsSolved: [
   {
    heading: "Executive Communication From Day One",
    description: "Build the professional communication habits — written and verbal — that make a strong first impression in any workplace.",
   },
   {
    heading: "Professional Grooming and Workplace Presence",
    description: "Cover the unwritten rules of professional presence that campus life rarely teaches directly.",
   },
   {
    heading: "Reading Workplace Behaviour",
    description: "Help students understand office dynamics, hierarchy and unwritten norms before they encounter them the hard way.",
   },
   {
    heading: "A Real Career Plan, Not Just a Resume",
    description: "Move students beyond generic resume tips toward an actual career direction and the steps to get there.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Workplace Readiness Diagnostic",
    description: "We assess where students currently stand on communication, presence and professional awareness.",
   },
   {
    phase: "Phase 2",
    title: "Executive Communication Essentials",
    description: "We build core professional communication skills for email, meetings and everyday workplace interaction.",
   },
   {
    phase: "Phase 3",
    title: "Workplace Behaviour and Professional Presence",
    description: "We work through real workplace scenarios — hierarchy, feedback, deadlines — through case studies and roleplay.",
   },
   {
    phase: "Phase 4",
    title: "Career Planning Capstone",
    description: "Students leave with a concrete, individualised career plan and the confidence to execute the first steps of it.",
   },
  ],
  expectedResults: [
   "Stronger, more confident first impressions in interviews and early workplace interactions",
   "Better understanding of workplace norms and professional expectations",
   "A concrete personal career plan, not just placement paperwork",
   "Higher placement readiness and reduced early-career friction for students",
  ],
 },
 {
  slug: "business-conversations-executive-communication-mastery",
  icon: MessageSquare,
  title: "Business Conversations — Executive Communication Mastery",
  tagline: "Speak, Write and Present With the Confidence of a Working Professional",
  accent: "blue",
  segment: "university",
  overview:
   "The gap between academic writing and business communication is bigger than most students realise until their first performance review. This programme builds verbal communication, presentation skills, business writing, negotiation and executive presence — the practical communication toolkit every professional role demands, regardless of function.",
  whoItsFor: [
   "MBA, BBA and engineering students preparing for client-facing or leadership-track roles",
   "Students who want to build genuine executive presence, not just presentation slides",
   "Institutions wanting a communication-focused masterclass distinct from generic soft-skills training",
   "Faculty seeking industry-relevant communication content for professional development electives",
  ],
  problemsSolved: [
   {
    heading: "Verbal Communication That Lands",
    description: "Build the clarity and structure needed to communicate ideas persuasively in meetings, interviews and presentations.",
   },
   {
    heading: "Business Writing That Gets Read",
    description: "Move students away from academic writing habits toward the concise, action-oriented writing business actually rewards.",
   },
   {
    heading: "Presentation Skills Under Real Pressure",
    description: "Build the composure and structure needed to present confidently to senior stakeholders, not just classmates.",
   },
   {
    heading: "Early Negotiation Skills",
    description: "Introduce practical negotiation fundamentals students will need from their very first salary conversation onward.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Verbal Communication Foundations",
    description: "We build clarity, structure and confidence in everyday spoken business communication.",
   },
   {
    phase: "Phase 2",
    title: "Business Writing Workshop",
    description: "We work on converting academic writing habits into concise, professional business writing.",
   },
   {
    phase: "Phase 3",
    title: "Presentation Skills and Executive Presence",
    description: "We build presentation composure and structure through practice presentations with direct feedback.",
   },
   {
    phase: "Phase 4",
    title: "Negotiation Fundamentals",
    description: "We introduce practical negotiation skills through realistic roleplay scenarios students will actually face.",
   },
  ],
  expectedResults: [
   "Noticeably stronger verbal and written communication in interviews and coursework",
   "Presentation skills that hold up under real stakeholder pressure",
   "Early negotiation confidence for offers, roles and workplace conversations",
   "A communication toolkit that transfers directly into any professional role",
  ],
 },
 {
  slug: "from-mba-to-executive-leader",
  icon: Compass,
  title: "From MBA to Executive Leader — Thriving in a VUCA & BANI World",
  tagline: "Build the Leadership Mindset Before the Leadership Title",
  accent: "gold",
  segment: "university",
  overview:
   "Leadership isn't something students should start learning only after their first promotion. This masterclass introduces MBA and management students to the leadership mindset, strategic thinking, critical thinking, adaptability and emotional intelligence they'll need to navigate a genuinely volatile, uncertain, complex and ambiguous professional world from day one.",
  whoItsFor: [
   "MBA students preparing for leadership-track roles and general management positions",
   "Students who want a practical leadership foundation beyond classroom case studies",
   "Institutions building leadership development into their core or elective curriculum",
   "High-potential students identified for accelerated leadership tracks",
  ],
  problemsSolved: [
   {
    heading: "A Leadership Mindset, Not Just Leadership Theory",
    description: "Move beyond case-study leadership concepts toward the practical mindset shifts real leadership requires.",
   },
   {
    heading: "Strategic and Critical Thinking Under Ambiguity",
    description: "Build the ability to think several steps ahead and question assumptions — not just execute instructions well.",
   },
   {
    heading: "Adaptability as a Core Skill",
    description: "Prepare students for a career where the only constant is change, and adaptability is the real competitive advantage.",
   },
   {
    heading: "Emotional Intelligence Before It's Tested",
    description: "Build self-awareness and empathy early, so students lead people well from their very first team responsibility.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Understanding VUCA & BANI",
    description: "We introduce the realities of the modern professional environment and why traditional leadership models fall short.",
   },
   {
    phase: "Phase 2",
    title: "Strategic and Critical Thinking",
    description: "We build practical frameworks for thinking strategically and questioning assumptions under ambiguity.",
   },
   {
    phase: "Phase 3",
    title: "Adaptability in Practice",
    description: "We work through simulated scenarios that require students to adjust their approach as conditions change.",
   },
   {
    phase: "Phase 4",
    title: "Emotional Intelligence and Early Leadership",
    description: "We build the self-awareness and interpersonal skills that make early leadership responsibility successful.",
   },
  ],
  expectedResults: [
   "A practical leadership mindset students can apply from their first role onward",
   "Stronger strategic and critical thinking in ambiguous, real-world situations",
   "Greater comfort with change and uncertainty in early career decisions",
   "A foundation in emotional intelligence that supports early people-leadership success",
  ],
 },
 {
  slug: "win-every-customer-every-time",
  icon: Sparkles,
  title: "Win Every Customer, Every Time — Customer Excellence",
  tagline: "Learn the Customer Intelligence Skills That Retail, Sales and Service Careers Demand",
  accent: "blue",
  segment: "university",
  overview:
   "Every business function eventually touches the customer — yet most students graduate without ever formally studying customer centricity. This programme builds practical customer journey mapping, service excellence and retention thinking for students heading into sales, service, marketing and operations roles.",
  whoItsFor: [
   "Students pursuing careers in sales, marketing, service or operations",
   "MBA students specialising in marketing or customer experience",
   "Institutions wanting practical, industry-grounded customer excellence content",
   "Students who want to differentiate themselves with genuine customer-centric thinking",
  ],
  problemsSolved: [
   {
    heading: "Customer Centricity as a Working Skill",
    description: "Move customer centricity from a buzzword in a marketing textbook to a practical, applied skill.",
   },
   {
    heading: "Mapping the Customer Journey",
    description: "Build the ability to map and analyse a real customer journey — a skill directly transferable to any customer-facing role.",
   },
   {
    heading: "Service Excellence Under Pressure",
    description: "Prepare students for the reality of service recovery — handling a dissatisfied customer with composure and skill.",
   },
   {
    heading: "Thinking in Terms of Retention",
    description: "Shift students from a transactional view of customers toward thinking about lifetime value and loyalty.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Customer Centricity Foundations",
    description: "We introduce what genuine customer centricity looks like in practice, beyond the textbook definition.",
   },
   {
    phase: "Phase 2",
    title: "Customer Journey Mapping Exercise",
    description: "Students map a real customer journey for a live business case, identifying moments that shape loyalty.",
   },
   {
    phase: "Phase 3",
    title: "Service Excellence and Recovery",
    description: "We build practical skills for handling service failures and turning them into trust-building moments.",
   },
   {
    phase: "Phase 4",
    title: "Customer Retention Thinking",
    description: "We work on building a retention-first mindset that students can apply across sales, service and marketing roles.",
   },
  ],
  expectedResults: [
   "A practical, portfolio-ready customer journey mapping skill",
   "Stronger service recovery and customer-handling confidence",
   "A retention-oriented mindset that stands out in interviews for customer-facing roles",
   "Direct applicability across sales, marketing, service and operations careers",
  ],
 },
 {
  slug: "from-insight-to-impact-relationship-management",
  icon: Handshake,
  title: "From Insight to Impact — Relationship Management for Future Leaders",
  tagline: "Build the Trust, Stakeholder and Networking Skills Careers Are Actually Built On",
  accent: "gold",
  segment: "university",
  overview:
   "Technical skill gets a career started — relationship management is what actually accelerates it. This programme builds trust building, stakeholder management, consultative selling, networking and influencing skills for students preparing to work across cross-functional teams, clients and senior stakeholders from their very first role.",
  whoItsFor: [
   "MBA and management students preparing for client-facing or cross-functional roles",
   "Students who want to build genuine relationship-management skills, not just networking tips",
   "Institutions wanting to prepare students for stakeholder-heavy corporate environments",
   "Placement cells looking to differentiate their students in relationship-intensive roles",
  ],
  problemsSolved: [
   {
    heading: "Building Trust Quickly and Genuinely",
    description: "Teach the practical behaviours that build trust with new colleagues, clients and stakeholders early in a career.",
   },
   {
    heading: "Managing Stakeholders With Competing Interests",
    description: "Build the skill of navigating stakeholders who want different things — a reality of almost every corporate role.",
   },
   {
    heading: "Consultative Selling as a Life Skill",
    description: "Introduce consultative selling principles that apply well beyond sales roles — to internal pitches, client conversations and negotiations.",
   },
   {
    heading: "Networking With Purpose",
    description: "Move students beyond transactional networking toward building relationships that create real long-term value.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Trust Building Fundamentals",
    description: "We build the practical behaviours and communication habits that establish trust quickly and credibly.",
   },
   {
    phase: "Phase 2",
    title: "Stakeholder Mapping and Management",
    description: "We introduce a practical framework for identifying and managing stakeholders with competing priorities.",
   },
   {
    phase: "Phase 3",
    title: "Consultative Selling and Influencing",
    description: "We build consultative conversation skills through roleplay — applicable to sales, internal pitches and negotiations alike.",
   },
   {
    phase: "Phase 4",
    title: "Purposeful Networking",
    description: "We work on building an authentic, purposeful approach to professional networking that lasts beyond campus.",
   },
  ],
  expectedResults: [
   "Practical trust-building and stakeholder management skills, applicable from day one",
   "Stronger influencing ability in cross-functional and client-facing situations",
   "A genuine, purposeful approach to professional networking",
   "A relationship-management foundation that supports long-term career growth",
  ],
 },
 {
  slug: "sales-mastery-science-and-art",
  icon: Target,
  title: "Sales Mastery — The Science & Art of Professional Selling",
  tagline: "Learn Prospecting, SPIN Selling and Closing the Way Top Performers Do",
  accent: "blue",
  segment: "university",
  overview:
   "Selling is a discipline, not an accident of personality — and it underpins far more careers than students expect. This programme builds prospecting, SPIN selling, value-based selling, objection handling, negotiation and closing skills for students heading into sales, business development or client-facing roles.",
  whoItsFor: [
   "Students pursuing sales, business development or client-facing career tracks",
   "MBA students specialising in sales and marketing",
   "Institutions wanting a rigorous, structured sales curriculum beyond generic soft skills",
   "Students who want to demonstrate real sales capability, not just interest, to recruiters",
  ],
  problemsSolved: [
   {
    heading: "Prospecting With a System",
    description: "Move students beyond cold, unstructured outreach toward a repeatable, effective prospecting approach.",
   },
   {
    heading: "SPIN and Value-Based Selling",
    description: "Build a structured questioning and value-articulation methodology that works across products and industries.",
   },
   {
    heading: "Objection Handling Without Losing the Deal",
    description: "Give students practical frameworks for handling objections confidently rather than getting derailed by them.",
   },
   {
    heading: "Closing With Confidence",
    description: "Build the skill and composure to ask for the close — a moment many first-time sales professionals avoid.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Prospecting Fundamentals",
    description: "We build a structured, repeatable approach to identifying and reaching the right prospects.",
   },
   {
    phase: "Phase 2",
    title: "SPIN and Value-Based Selling",
    description: "We teach the SPIN questioning methodology and how to articulate value rather than just features.",
   },
   {
    phase: "Phase 3",
    title: "Objection Handling Roleplay",
    description: "Students practise handling realistic objections through structured roleplay and direct feedback.",
   },
   {
    phase: "Phase 4",
    title: "Negotiation and Closing",
    description: "We build closing confidence and negotiation skill through simulated sales scenarios.",
   },
  ],
  expectedResults: [
   "A structured, repeatable approach to prospecting and selling",
   "Practical confidence in handling objections and negotiating terms",
   "Real closing skill, not just theoretical sales knowledge",
   "A strong differentiator for interviews in sales and business development roles",
  ],
 },
 {
  slug: "5s-sales-excellence",
  icon: BarChart3,
  title: "5S Sales Excellence — Building High-Performance Sales Professionals",
  tagline: "Learn the Planning, Pipeline and CRM Discipline That Separates Top Performers",
  accent: "gold",
  segment: "university",
  overview:
   "The difference between an average salesperson and a top performer is rarely talent — it's discipline. This programme builds sales planning, pipeline management, CRM discipline, SOPs and execution excellence, giving students the operational rigour that turns selling from an art into a repeatable, high-performance system.",
  whoItsFor: [
   "Students preparing for sales execution or sales operations roles",
   "MBA students who want to understand the operational discipline behind sales performance",
   "Institutions wanting a process-driven complement to relationship-focused sales training",
   "Students aiming for fast-track roles in high-performance sales organisations",
  ],
  problemsSolved: [
   {
    heading: "Sales Planning as a Discipline",
    description: "Build the habit of planning sales activity deliberately, rather than reacting to whatever comes up each day.",
   },
   {
    heading: "Pipeline Management That Predicts Results",
    description: "Teach students to manage a sales pipeline as a forecasting tool, not just a to-do list of leads.",
   },
   {
    heading: "CRM Discipline From Day One",
    description: "Build the habit of disciplined CRM usage early, before bad habits form in a first sales role.",
   },
   {
    heading: "Execution Excellence Under a Target",
    description: "Prepare students for the operational rigour of hitting targets consistently, not just occasionally.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Sales Planning Fundamentals",
    description: "We build the discipline of structured, forward-looking sales planning rather than reactive daily activity.",
   },
   {
    phase: "Phase 2",
    title: "Pipeline Management",
    description: "We teach students to build and manage a sales pipeline as a genuine forecasting and prioritisation tool.",
   },
   {
    phase: "Phase 3",
    title: "CRM and SOP Discipline",
    description: "We build the operational habits of disciplined CRM usage and process adherence that sustain performance.",
   },
   {
    phase: "Phase 4",
    title: "Execution Excellence Simulation",
    description: "Students run through a simulated sales cycle, applying planning, pipeline and CRM discipline under time pressure.",
   },
  ],
  expectedResults: [
   "Practical sales planning and pipeline management skills",
   "Early CRM and process discipline that sustains long-term sales performance",
   "A demonstrable, portfolio-ready understanding of high-performance sales operations",
   "Stronger readiness for fast-track sales execution roles",
  ],
 },
 {
  slug: "heir-to-leader-next-generation-business-leaders",
  icon: Crown,
  title: "Heir to Leader — Building the Next Generation of Business Leaders",
  tagline: "For Students From Family Business Backgrounds Preparing to Lead",
  accent: "blue",
  segment: "university",
  overview:
   "Many management students will one day step into family businesses — yet very little of the standard curriculum prepares them for that specific transition. This programme builds family business governance, succession planning, leadership transition and strategic thinking for students who will eventually lead a family enterprise, not just manage a generic organisation.",
  whoItsFor: [
   "MBA and management students from family business backgrounds",
   "Students preparing for an eventual leadership transition into a family enterprise",
   "Institutions with a significant family-business student population wanting targeted content",
   "Students who want to understand governance and succession before they're actually navigating it",
  ],
  problemsSolved: [
   {
    heading: "Understanding Family Business Governance",
    description: "Introduce the governance structures that separate ownership from management — critical knowledge most students never encounter academically.",
   },
   {
    heading: "Succession Planning From the Successor's Side",
    description: "Help students understand what a well-run succession process looks like, so they can advocate for one in their own family business.",
   },
   {
    heading: "Leading a Transition, Not Just Inheriting a Title",
    description: "Build the strategic thinking and business acumen students will need to earn authority, not just assume it.",
   },
   {
    heading: "Balancing Family and Business Interests",
    description: "Prepare students for the real tension between family dynamics and sound business decision-making.",
   },
  ],
  programStructure: [
   {
    phase: "Phase 1",
    title: "Family Business Governance Foundations",
    description: "We introduce the governance models that separate family, ownership and management decisions in well-run family enterprises.",
   },
   {
    phase: "Phase 2",
    title: "Succession Planning Principles",
    description: "We work through what a structured, well-managed succession process looks like, using real case studies.",
   },
   {
    phase: "Phase 3",
    title: "Strategic Thinking for Successors",
    description: "We build the strategic and financial thinking skills students will need to lead, not just inherit, a family business.",
   },
   {
    phase: "Phase 4",
    title: "Navigating Family and Business Dynamics",
    description: "We work through realistic scenarios of tension between family expectations and sound business decisions.",
   },
  ],
  expectedResults: [
   "A practical understanding of family business governance and succession planning",
   "Stronger strategic thinking preparation for an eventual leadership transition",
   "Greater confidence navigating family and business dynamics together",
   "A meaningful head start for students who will one day lead a family enterprise",
  ],
 },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
 return servicesData.find((s) => s.slug === slug);
}
