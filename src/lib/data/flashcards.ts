import type { LearningObjective } from "./objectives";

export type Flashcard = {
  id: string;
  objectiveId: LearningObjective["id"];
  prompt: string;
  answer: string;
  tags: string[];
};

export const flashcards: Flashcard[] = [
  {
    id: "FC-001",
    objectiveId: "OBJ-01",
    prompt: "What core cloud services does Microsoft 365 add on top of the Office 365 bundle?",
    answer: "Microsoft 365 includes Office 365 productivity services plus Windows licenses, Enterprise Mobility + Security, Intune device management, and advanced compliance capabilities.",
    tags: ["m365", "office365", "comparison"]
  },
  {
    id: "FC-002",
    objectiveId: "OBJ-01",
    prompt: "Why do many enterprises pick Microsoft 365 E3 or E5 instead of Office 365 E3 or E5?",
    answer: "They gain integrated security, identity, and endpoint management features like Defender, Conditional Access, and Autopilot in a single license rather than stitching separate add-ons to Office 365.",
    tags: ["m365", "licensing", "security"]
  },
  {
    id: "FC-003",
    objectiveId: "OBJ-01",
    prompt: "How does Microsoft 365 simplify licensing for hybrid work hardware and apps?",
    answer: "One subscription covers Windows, Office apps, and EMS so users get both their desktop OS and cloud services under the same per user license.",
    tags: ["m365", "hybrid-work", "licensing"]
  },
  {
    id: "FC-004",
    objectiveId: "OBJ-01",
    prompt: "When would an organization still choose Office 365 over Microsoft 365?",
    answer: "Organizations that only need hosted productivity apps without OS or device management capabilities might stay on Office 365 to reduce cost and complexity.",
    tags: ["m365", "office365", "cost"]
  },
  {
    id: "FC-005",
    objectiveId: "OBJ-02",
    prompt: "Which Microsoft 365 features make hybrid work secure for remote staff?",
    answer: "Endpoint management with Intune, Conditional Access, and Defender protects remote devices while Teams and SharePoint provide secure collaboration from anywhere.",
    tags: ["hybrid-work", "security", "m365"]
  },
  {
    id: "FC-006",
    objectiveId: "OBJ-02",
    prompt: "How does Microsoft 365 support frontline workers specifically?",
    answer: "It offers tailored licensing, Walkie Talkie in Teams, shared device sign-in, and task management apps that fit shift-based and mobile roles.",
    tags: ["frontline-workers", "teams", "m365"]
  },
  {
    id: "FC-007",
    objectiveId: "OBJ-02",
    prompt: "What Microsoft 365 capabilities enable flexible scheduling?",
    answer: "Cloud apps accessible on any device, Viva Insights focus time nudges, and Teams asynchronous collaboration let people work when it fits their schedule.",
    tags: ["flex-work", "productivity", "m365"]
  },
  {
    id: "FC-008",
    objectiveId: "OBJ-02",
    prompt: "Why is identity central to Microsoft 365 hybrid work scenarios?",
    answer: "Entra ID provides single sign-on and conditional policies so users get appropriate access regardless of location or device.",
    tags: ["hybrid-work", "entra", "identity"]
  },
  {
    id: "FC-009",
    objectiveId: "OBJ-03",
    prompt: "How is Microsoft 365 Copilot different from Copilot Chat?",
    answer: "Copilot surfaces inside apps like Word or PowerPoint to assist in context, while Copilot Chat is a centralized conversational canvas that can orchestrate tasks across multiple apps.",
    tags: ["copilot", "ai", "productivity"]
  },
  {
    id: "FC-010",
    objectiveId: "OBJ-03",
    prompt: "Where does Copilot draw context when embedded in Microsoft 365 Apps?",
    answer: "It mixes the user prompt with tenant data from Graph, the current document, and web knowledge while respecting Microsoft 365 security boundaries.",
    tags: ["copilot", "graph", "data-protection"]
  },
  {
    id: "FC-011",
    objectiveId: "OBJ-03",
    prompt: "What types of requests work best in Copilot Chat versus in-app Copilot?",
    answer: "Copilot Chat excels at multi-step or cross-app workflows like summarizing emails then drafting tasks, while in-app Copilot is optimized for deep edits to the current file.",
    tags: ["copilot", "workflow", "productivity"]
  },
  {
    id: "FC-012",
    objectiveId: "OBJ-03",
    prompt: "Why do administrators need to prepare data governance before enabling Copilot?",
    answer: "Copilot respects existing permissions, so cleaning up group membership, labeling sensitive data, and enabling audit trails ensures AI outputs stay compliant.",
    tags: ["copilot", "compliance", "governance"]
  },
  {
    id: "FC-013",
    objectiveId: "OBJ-04",
    prompt: "How does Microsoft 365 keep people connected across devices?",
    answer: "Cloud mail, Teams chat, and OneDrive sync keep conversations and files available on desktop, web, and mobile with real-time updates.",
    tags: ["m365", "connectivity", "mobility"]
  },
  {
    id: "FC-014",
    objectiveId: "OBJ-04",
    prompt: "What tools inside Microsoft 365 help individuals stay organized?",
    answer: "Outlook calendaring, Microsoft To Do task lists, and Loop components provide a unified place to track commitments.",
    tags: ["productivity", "organization", "m365"]
  },
  {
    id: "FC-015",
    objectiveId: "OBJ-04",
    prompt: "Which Microsoft 365 features help accelerate content creation?",
    answer: "Co-authoring in Word and PowerPoint, shared templates, and version history reduce rework and speed up deliverables.",
    tags: ["collaboration", "content", "m365"]
  },
  {
    id: "FC-016",
    objectiveId: "OBJ-04",
    prompt: "How does Microsoft 365 support working offline when needed?",
    answer: "Files synced via OneDrive or the Office apps can be edited offline and changes sync automatically once connectivity returns.",
    tags: ["mobility", "onedrive", "productivity"]
  },
  {
    id: "FC-017",
    objectiveId: "OBJ-05",
    prompt: "What can Copilot do inside Microsoft Word?",
    answer: "It can draft outlines, rewrite sections in different tones, and suggest citations based on organizational knowledge while keeping formatting intact.",
    tags: ["copilot", "word", "content"]
  },
  {
    id: "FC-018",
    objectiveId: "OBJ-05",
    prompt: "How does Copilot assist Excel analysts?",
    answer: "Copilot interprets natural language prompts to build formulas, analyze trends, generate pivot tables, and explain insights from the data.",
    tags: ["copilot", "excel", "analytics"]
  },
  {
    id: "FC-019",
    objectiveId: "OBJ-05",
    prompt: "Which presentation tasks can Copilot streamline in PowerPoint?",
    answer: "It turns existing documents into slide decks, drafts speaker notes, and recommends imagery or layouts aligned to brand guidelines.",
    tags: ["copilot", "powerpoint", "presentations"]
  },
  {
    id: "FC-020",
    objectiveId: "OBJ-05",
    prompt: "How does Copilot improve productivity in Outlook?",
    answer: "It summarizes long threads, drafts responses with specified tone, and highlights commitments such as action items or deadlines.",
    tags: ["copilot", "outlook", "communication"]
  },
  {
    id: "FC-021",
    objectiveId: "OBJ-06",
    prompt: "When should a team choose Microsoft Planner over Project?",
    answer: "Planner suits lightweight task boards with buckets and checklists, while Project handles complex schedules, dependencies, and resource management.",
    tags: ["work-management", "planner", "project"]
  },
  {
    id: "FC-022",
    objectiveId: "OBJ-06",
    prompt: "How does Loop complement other work management tools?",
    answer: "Loop components keep shared status lists or check-ins live across Teams, Outlook, and the Loop workspace so updates propagate instantly.",
    tags: ["loop", "collaboration", "work-management"]
  },
  {
    id: "FC-023",
    objectiveId: "OBJ-06",
    prompt: "What role does Power Automate play in operational efficiency?",
    answer: "It automates repeatable workflows such as approvals or notifications triggered by Planner or SharePoint updates.",
    tags: ["automation", "power-automate", "operations"]
  },
  {
    id: "FC-024",
    objectiveId: "OBJ-06",
    prompt: "How can Microsoft Lists improve process tracking?",
    answer: "Lists offers customizable columns, views, and rules to manage structured data like onboarding tasks or asset inventories.",
    tags: ["lists", "process", "productivity"]
  },
  {
    id: "FC-025",
    objectiveId: "OBJ-07",
    prompt: "What scenarios are ideal for Microsoft Forms?",
    answer: "Quick surveys, quizzes, and polls with built-in analytics that feed results into Excel or Power BI dashboards.",
    tags: ["forms", "surveys", "productivity"]
  },
  {
    id: "FC-026",
    objectiveId: "OBJ-07",
    prompt: "How does Microsoft Bookings support customer engagement?",
    answer: "It provides self-service scheduling pages, calendar integration, and reminders so customers can book appointments without manual coordination.",
    tags: ["bookings", "customer-service", "scheduling"]
  },
  {
    id: "FC-027",
    objectiveId: "OBJ-07",
    prompt: "Why would creators choose Clipchamp within Microsoft 365?",
    answer: "Clipchamp delivers browser-based video editing with templates, stock media, and direct publishing to Teams or OneDrive.",
    tags: ["clipchamp", "media", "productivity"]
  },
  {
    id: "FC-028",
    objectiveId: "OBJ-07",
    prompt: "What advantage does Microsoft Whiteboard bring to distributed teams?",
    answer: "Whiteboard offers an infinite canvas with sticky notes, ink, and Loop components for real-time brainstorming across devices.",
    tags: ["whiteboard", "collaboration", "creativity"]
  },
  {
    id: "FC-029",
    objectiveId: "OBJ-08",
    prompt: "How do SharePoint and Teams work together to drive collaboration?",
    answer: "Every Teams channel gets a SharePoint site that stores files, enabling co-authoring, sharing, and permissions controlled in one space.",
    tags: ["sharepoint", "teams", "collaboration"]
  },
  {
    id: "FC-030",
    objectiveId: "OBJ-08",
    prompt: "What collaboration benefit comes from Office web co-authoring?",
    answer: "Multiple authors can edit the same document simultaneously while seeing presence, comments, and version history.",
    tags: ["coauthoring", "office-online", "productivity"]
  },
  {
    id: "FC-031",
    objectiveId: "OBJ-08",
    prompt: "How does Microsoft 365 enable knowledge discovery across teams?",
    answer: "Microsoft Search and Viva Topics surface relevant documents, experts, and answers directly in the apps people already use.",
    tags: ["knowledge", "viva-topics", "search"]
  },
  {
    id: "FC-032",
    objectiveId: "OBJ-08",
    prompt: "Why is security integrated into Microsoft 365 collaboration experiences?",
    answer: "Sensitivity labels, DLP policies, and secure sharing links protect data without blocking access for authorized collaborators.",
    tags: ["security", "compliance", "collaboration"]
  },
  {
    id: "FC-033",
    objectiveId: "OBJ-09",
    prompt: "What are core elements of a Microsoft Teams channel?",
    answer: "Channels group conversations, files, and tabs around a topic with support for standard, private, and shared access levels.",
    tags: ["teams", "channels", "collaboration"]
  },
  {
    id: "FC-034",
    objectiveId: "OBJ-09",
    prompt: "How do Teams meetings enhance teamwork beyond basic video calls?",
    answer: "Meetings include live reactions, collaborative notes, breakout rooms, and whiteboard, creating engaging working sessions.",
    tags: ["teams", "meetings", "collaboration"]
  },
  {
    id: "FC-035",
    objectiveId: "OBJ-09",
    prompt: "What make Teams Phone compelling for organizations?",
    answer: "It delivers cloud-based calling, voicemail transcription, call queues, and integration with Teams clients across devices.",
    tags: ["teams-phone", "telephony", "communication"]
  },
  {
    id: "FC-036",
    objectiveId: "OBJ-09",
    prompt: "How can Teams apps extend teamwork scenarios?",
    answer: "Third-party or custom apps add workflows, dashboards, and approvals inside Teams so work stays in the collaborative hub.",
    tags: ["teams", "apps", "extensibility"]
  },
  {
    id: "FC-037",
    objectiveId: "OBJ-10",
    prompt: "Which Viva module focuses on employee engagement?",
    answer: "Viva Engage drives conversations, storylines, and communities that amplify culture and recognition.",
    tags: ["viva", "engagement", "culture"]
  },
  {
    id: "FC-038",
    objectiveId: "OBJ-10",
    prompt: "How does Viva Learning help organizations?",
    answer: "It aggregates learning content from Microsoft, third parties, and internal sources with assignment and tracking features in Teams.",
    tags: ["viva-learning", "skills", "enablement"]
  },
  {
    id: "FC-039",
    objectiveId: "OBJ-10",
    prompt: "What problem does Viva Connections solve?",
    answer: "Connections curates company news, resources, and tasks into a personalized home experience accessible from Teams or mobile.",
    tags: ["viva-connections", "employee-experience", "communication"]
  },
  {
    id: "FC-040",
    objectiveId: "OBJ-10",
    prompt: "How does Viva Goals encourage alignment?",
    answer: "It provides OKR templates, progress dashboards, and integrations with work tools so teams see how daily work maps to strategic goals.",
    tags: ["viva-goals", "okr", "alignment"]
  },
  {
    id: "FC-041",
    objectiveId: "OBJ-11",
    prompt: "How do Yammer communities build organizational connection?",
    answer: "They allow open discussions, knowledge sharing, and recognition across departments without the constraints of hierarchical teams.",
    tags: ["viva-engage", "communities", "culture"]
  },
  {
    id: "FC-042",
    objectiveId: "OBJ-11",
    prompt: "Which Viva Engage features encourage inclusive dialogue?",
    answer: "Storylines, community announcements, and Q&A events let leaders and employees exchange ideas at scale.",
    tags: ["viva-engage", "communication", "inclusion"]
  },
  {
    id: "FC-043",
    objectiveId: "OBJ-11",
    prompt: "Why is Yammer data governance important?",
    answer: "Communities inherit Microsoft 365 retention labels, eDiscovery, and compliance policies to keep conversations discoverable and secure.",
    tags: ["compliance", "viva-engage", "governance"]
  },
  {
    id: "FC-044",
    objectiveId: "OBJ-12",
    prompt: "What role does Microsoft Intune play in modern endpoint management?",
    answer: "Intune centrally manages Windows, macOS, iOS, and Android devices with configuration profiles, compliance policies, and app deployment.",
    tags: ["intune", "endpoint-management", "zero-trust"]
  },
  {
    id: "FC-045",
    objectiveId: "OBJ-12",
    prompt: "How does co-management benefit Configuration Manager customers?",
    answer: "It lets ConfigMgr-managed PCs gradually shift workloads like compliance or software updates to Intune without a big bang migration.",
    tags: ["configuration-manager", "comanagement", "m365"]
  },
  {
    id: "FC-046",
    objectiveId: "OBJ-12",
    prompt: "Why is Windows Autopilot valuable for provisioning?",
    answer: "Autopilot zero-touch enrollment allows devices to be shipped directly to users and configured from the cloud with minimal IT effort.",
    tags: ["autopilot", "deployment", "endpoint"]
  },
  {
    id: "FC-047",
    objectiveId: "OBJ-12",
    prompt: "How do analytics improve endpoint posture in Microsoft 365?",
    answer: "Endpoint analytics and advanced insights surface startup performance, app reliability, and policy health to guide remediation.",
    tags: ["analytics", "endpoint", "insights"]
  },
  {
    id: "FC-048",
    objectiveId: "OBJ-13",
    prompt: "What is the core service model difference between Windows 365 and Azure Virtual Desktop?",
    answer: "Windows 365 provides dedicated Cloud PCs per user, while Azure Virtual Desktop offers pooled or personal session hosts you manage on Azure.",
    tags: ["windows365", "avd", "comparison"]
  },
  {
    id: "FC-049",
    objectiveId: "OBJ-13",
    prompt: "How does management responsibility differ between Windows 365 and AVD?",
    answer: "Windows 365 abstracts infrastructure as a Microsoft-managed SaaS, whereas AVD requires you to manage virtual machines, scaling, and costs in Azure.",
    tags: ["windows365", "avd", "operations"]
  },
  {
    id: "FC-050",
    objectiveId: "OBJ-13",
    prompt: "Which scenarios favor Windows 365 over AVD?",
    answer: "Predictable per-user licensing, rapid provisioning, and hybrid-join integration make Windows 365 ideal for set workforce sizes and contractors.",
    tags: ["windows365", "use-cases", "hybrid-work"]
  },
  {
    id: "FC-051",
    objectiveId: "OBJ-13",
    prompt: "When is Azure Virtual Desktop the better choice?",
    answer: "Organizations needing granular control, multi-session Windows 10/11, or integrating with existing Azure Virtual Desktop environments benefit from AVD.",
    tags: ["avd", "virtualization", "scalability"]
  },
  {
    id: "FC-052",
    objectiveId: "OBJ-14",
    prompt: "What release channels exist for Windows as a Service?",
    answer: "Windows offers General Availability, Insider, and Long-Term Servicing Channel options to balance new features and stability.",
    tags: ["windows", "updates", "channels"]
  },
  {
    id: "FC-053",
    objectiveId: "OBJ-14",
    prompt: "How do deployment rings mitigate update risk?",
    answer: "Rings stage updates to early adopters, pilots, and broad deployment groups so issues are caught before wide rollout.",
    tags: ["windows", "deployment", "rings"]
  },
  {
    id: "FC-054",
    objectiveId: "OBJ-14",
    prompt: "Why are servicing tools like Windows Update for Business important?",
    answer: "They automate policy-based delivery of quality and feature updates without on-premises WSUS infrastructure.",
    tags: ["windows", "update-management", "cloud"]
  },
  {
    id: "FC-055",
    objectiveId: "OBJ-15",
    prompt: "What deployment methods are available for Microsoft 365 Apps?",
    answer: "Admins can use Click-to-Run via Office Deployment Tool, Intune app packages, Configuration Manager, or self-service portal installs.",
    tags: ["m365-apps", "deployment", "intune"]
  },
  {
    id: "FC-056",
    objectiveId: "OBJ-15",
    prompt: "How do update channels differ for Microsoft 365 Apps?",
    answer: "Current Channel delivers latest features monthly, Monthly Enterprise Channel balances stability with updates, and Semi-Annual Enterprise is longest tested.",
    tags: ["m365-apps", "channels", "servicing"]
  },
  {
    id: "FC-057",
    objectiveId: "OBJ-15",
    prompt: "Why is pilot testing important before changing an update channel?",
    answer: "Pilots validate compatibility, add-ins, and performance impact before new builds reach the entire organization.",
    tags: ["m365-apps", "testing", "change-management"]
  },
  {
    id: "FC-058",
    objectiveId: "OBJ-16",
    prompt: "What does Viva Insights provide to individual employees?",
    answer: "Personal insights encourage focus time, breaks, and well-being habits with privacy-protected data.",
    tags: ["viva-insights", "wellbeing", "productivity"]
  },
  {
    id: "FC-059",
    objectiveId: "OBJ-16",
    prompt: "How do manager insights help teams?",
    answer: "Managers see aggregated work patterns like after-hours activity or meeting overload to coach healthier practices.",
    tags: ["viva-insights", "managers", "analytics"]
  },
  {
    id: "FC-060",
    objectiveId: "OBJ-16",
    prompt: "What organizational insights can leaders unlock?",
    answer: "Leaders receive trends about collaboration silos, employee engagement, and adoption of new tools to plan interventions.",
    tags: ["viva-insights", "leadership", "analytics"]
  },
  {
    id: "FC-061",
    objectiveId: "OBJ-16",
    prompt: "How does Viva Insights integrate with daily workflows?",
    answer: "Insights surface in Outlook, Teams, and the Viva app with actionable suggestions or guided plans.",
    tags: ["viva-insights", "integration", "workflow"]
  },
  {
    id: "FC-062",
    objectiveId: "OBJ-17",
    prompt: "What metrics appear in the Microsoft Copilot dashboard?",
    answer: "It shows adoption rates, usage by department, prompt volume, and productivity indicators like time saved.",
    tags: ["copilot", "analytics", "dashboard"]
  },
  {
    id: "FC-063",
    objectiveId: "OBJ-17",
    prompt: "How does the Copilot dashboard promote responsible AI use?",
    answer: "It highlights DLP policy hits, sensitive content usage, and provides guidance for training or governance adjustments.",
    tags: ["copilot", "responsible-ai", "governance"]
  },
  {
    id: "FC-064",
    objectiveId: "OBJ-17",
    prompt: "Who typically accesses the Copilot dashboard?",
    answer: "Microsoft 365 administrators, adoption leads, and champions use the dashboard to monitor rollout progress and communicate value.",
    tags: ["copilot", "adoption", "administration"]
  },
  {
    id: "FC-065",
    objectiveId: "OBJ-18",
    prompt: "What administrative tasks can be performed in the Microsoft 365 admin center?",
    answer: "Admins manage users, groups, licenses, domains, and service settings from a unified portal.",
    tags: ["admin-center", "management", "m365"]
  },
  {
    id: "FC-066",
    objectiveId: "OBJ-18",
    prompt: "How does the admin center support delegated administration?",
    answer: "Role-based admin permissions and partner delegation let organizations assign granular rights without full tenant access.",
    tags: ["admin-center", "delegation", "rbac"]
  },
  {
    id: "FC-067",
    objectiveId: "OBJ-18",
    prompt: "What self-service options exist in the user portal?",
    answer: "End users can install Office apps, manage security info, and access subscriptions assigned to them.",
    tags: ["user-portal", "self-service", "productivity"]
  },
  {
    id: "FC-068",
    objectiveId: "OBJ-18",
    prompt: "Why is the admin center health dashboard useful?",
    answer: "It surfaces service alerts, message center communications, and recommended actions in one location.",
    tags: ["admin-center", "service-health", "operations"]
  },
  {
    id: "FC-069",
    objectiveId: "OBJ-19",
    prompt: "Which usage reports help track collaboration adoption?",
    answer: "Reports cover Teams activity, SharePoint file usage, and Yammer engagement to gauge collaboration trends.",
    tags: ["reports", "usage", "collaboration"]
  },
  {
    id: "FC-070",
    objectiveId: "OBJ-19",
    prompt: "How can admins monitor security posture using Microsoft 365 reports?",
    answer: "Security and compliance center reports show DLP events, risky users, and threat protection outcomes.",
    tags: ["reports", "security", "compliance"]
  },
  {
    id: "FC-071",
    objectiveId: "OBJ-19",
    prompt: "What value does the Productivity Score deliver?",
    answer: "Productivity Score blends user behavior insights with technical health data to guide adoption improvements.",
    tags: ["reports", "productivity-score", "analytics"]
  },
  {
    id: "FC-072",
    objectiveId: "OBJ-20",
    prompt: "What core role does Microsoft Entra ID play in Microsoft 365?",
    answer: "It authenticates users and services, issues tokens, and enforces authorization for Microsoft and third-party apps.",
    tags: ["entra", "identity", "authentication"]
  },
  {
    id: "FC-073",
    objectiveId: "OBJ-20",
    prompt: "How does Entra ID integrate with on-premises directories?",
    answer: "Azure AD Connect synchronizes identities and optionally passwords, enabling hybrid authentication scenarios.",
    tags: ["entra", "hybrid", "sync"]
  },
  {
    id: "FC-074",
    objectiveId: "OBJ-20",
    prompt: "Which protocols does Entra ID support for modern auth?",
    answer: "It supports OAuth 2.0, OpenID Connect, SAML, and WS-Fed for single sign-on across services.",
    tags: ["entra", "protocols", "sso"]
  },
  {
    id: "FC-075",
    objectiveId: "OBJ-20",
    prompt: "Why is Entra ID essential for Zero Trust?",
    answer: "It evaluates user, device, and session risk, issuing conditional access decisions central to Zero Trust access strategies.",
    tags: ["entra", "zero-trust", "security"]
  },
  {
    id: "FC-076",
    objectiveId: "OBJ-21",
    prompt: "What is a member user in Entra ID?",
    answer: "Member users are internal identities representing employees synced from on-premises directories or created directly in the cloud.",
    tags: ["entra", "identity-types", "users"]
  },
  {
    id: "FC-077",
    objectiveId: "OBJ-21",
    prompt: "How are guest users handled?",
    answer: "Guest users leverage Azure AD B2B to access resources using their home credentials while still governed by tenant policies.",
    tags: ["entra", "b2b", "guest-access"]
  },
  {
    id: "FC-078",
    objectiveId: "OBJ-21",
    prompt: "What are service principals used for?",
    answer: "Service principals represent applications or automation that need tokens to call APIs without user interaction.",
    tags: ["entra", "service-principal", "applications"]
  },
  {
    id: "FC-079",
    objectiveId: "OBJ-21",
    prompt: "Which identities represent devices?",
    answer: "Device objects track registered or joined endpoints so policies like Conditional Access can evaluate device compliance.",
    tags: ["entra", "devices", "management"]
  },
  {
    id: "FC-080",
    objectiveId: "OBJ-22",
    prompt: "What inputs can Conditional Access evaluate?",
    answer: "Policies consider user risk, sign-in risk, device compliance, location, application sensitivity, and workload.",
    tags: ["conditional-access", "signals", "security"]
  },
  {
    id: "FC-081",
    objectiveId: "OBJ-22",
    prompt: "Which grant controls can be enforced?",
    answer: "Controls include requiring multi-factor authentication, compliant devices, password change, or blocking access.",
    tags: ["conditional-access", "controls", "zero-trust"]
  },
  {
    id: "FC-082",
    objectiveId: "OBJ-22",
    prompt: "How do session controls extend protections?",
    answer: "Session controls apply continuous access evaluation, monitor downloads, or enforce app-enforced restrictions via Defender for Cloud Apps.",
    tags: ["conditional-access", "session", "defender"]
  },
  {
    id: "FC-083",
    objectiveId: "OBJ-22",
    prompt: "Why should organizations use Conditional Access templates?",
    answer: "Templates accelerate deployment for common scenarios and align policies with best-practice baselines.",
    tags: ["conditional-access", "governance", "best-practice"]
  },
  {
    id: "FC-084",
    objectiveId: "OBJ-23",
    prompt: "What principle should guide Entra role assignments?",
    answer: "Grant least privilege by assigning the smallest role and scope necessary for the administrative task.",
    tags: ["rbac", "least-privilege", "entra"]
  },
  {
    id: "FC-085",
    objectiveId: "OBJ-23",
    prompt: "How do scope options refine permissions?",
    answer: "Roles can be scoped to the entire tenant, management units, or specific resources to limit impact.",
    tags: ["rbac", "scope", "administration"]
  },
  {
    id: "FC-086",
    objectiveId: "OBJ-23",
    prompt: "What is the difference between Global Administrator and Privileged Role Administrator?",
    answer: "Global Administrator has full control over directory resources, while Privileged Role Administrator manages role assignments and access reviews.",
    tags: ["rbac", "roles", "comparison"]
  },
  {
    id: "FC-087",
    objectiveId: "OBJ-23",
    prompt: "How does Entra Privileged Identity Management help?",
    answer: "PIM enables just-in-time role activation, approval workflows, and access reviews to reduce standing privileges.",
    tags: ["pim", "rbac", "security"]
  },
  {
    id: "FC-088",
    objectiveId: "OBJ-24",
    prompt: "What services make up Microsoft Entra Global Secure Access?",
    answer: "It includes Entra Internet Access and Entra Private Access delivering Secure Service Edge capabilities.",
    tags: ["global-secure-access", "sse", "entra"]
  },
  {
    id: "FC-089",
    objectiveId: "OBJ-24",
    prompt: "How does Global Secure Access extend Conditional Access?",
    answer: "Traffic is routed through Microsoft edges so Conditional Access evaluates software-as-a-service, private app, and internet access consistently.",
    tags: ["global-secure-access", "conditional-access", "zero-trust"]
  },
  {
    id: "FC-090",
    objectiveId: "OBJ-24",
    prompt: "Which scenarios benefit from Global Secure Access?",
    answer: "Organizations wanting unified policy enforcement, remote browsing protection, and VPN modernization gain resilience.",
    tags: ["global-secure-access", "remote-access", "modernization"]
  },
  {
    id: "FC-091",
    objectiveId: "OBJ-25",
    prompt: "What workloads feed signals into Microsoft Defender XDR?",
    answer: "It correlates data from Defender for Endpoint, Defender for Office 365, Defender for Identity, Defender for Cloud Apps, and more.",
    tags: ["defender-xdr", "signals", "security"]
  },
  {
    id: "FC-092",
    objectiveId: "OBJ-25",
    prompt: "How is Defender XDR delivered to customers?",
    answer: "It is a unified portal and threat protection service built into Microsoft 365 E5 or separate Defender plans.",
    tags: ["defender-xdr", "licensing", "security"]
  },
  {
    id: "FC-093",
    objectiveId: "OBJ-25",
    prompt: "Why is Defender XDR considered extended detection and response?",
    answer: "It links detections across endpoints, identities, email, and cloud SaaS to create end-to-end incident visibility.",
    tags: ["defender-xdr", "xdr", "incidents"]
  },
  {
    id: "FC-094",
    objectiveId: "OBJ-25",
    prompt: "What automation options exist within Defender XDR?",
    answer: "Automated investigation and response can isolate devices, remediate email, or disable accounts when playbooks trigger.",
    tags: ["defender-xdr", "automation", "response"]
  },
  {
    id: "FC-095",
    objectiveId: "OBJ-26",
    prompt: "How does Defender XDR correlate signals across workloads?",
    answer: "It uses a shared incident queue that stitches alerts from multiple products into a single attack story.",
    tags: ["defender-xdr", "correlation", "incidents"]
  },
  {
    id: "FC-096",
    objectiveId: "OBJ-26",
    prompt: "What is attack disruption in Defender XDR?",
    answer: "Attack disruption automatically interrupts active attacks by taking containment actions such as disabling compromised accounts in near real time.",
    tags: ["defender-xdr", "attack-disruption", "automation"]
  },
  {
    id: "FC-097",
    objectiveId: "OBJ-26",
    prompt: "How do automated investigations save analyst time?",
    answer: "Playbooks collect evidence, run antivirus scans, and suggest remediation steps so analysts focus on decision making.",
    tags: ["defender-xdr", "automation", "investigation"]
  },
  {
    id: "FC-098",
    objectiveId: "OBJ-26",
    prompt: "Why is integration with Sentinel valuable?",
    answer: "Connecting Defender XDR to Microsoft Sentinel extends analytics, hunting queries, and cross-platform visibility.",
    tags: ["defender-xdr", "sentinel", "siem"]
  },
  {
    id: "FC-099",
    objectiveId: "OBJ-27",
    prompt: "What workspaces exist inside the Microsoft Defender portal?",
    answer: "Dedicated workspaces cover incidents, hunting, action center, vulnerability management, and email security.",
    tags: ["defender-portal", "workspaces", "operations"]
  },
  {
    id: "FC-100",
    objectiveId: "OBJ-27",
    prompt: "How can analysts hunt within the Defender portal?",
    answer: "Advanced hunting uses KQL queries against telemetry from endpoints, identities, and email to uncover threats.",
    tags: ["defender-portal", "advanced-hunting", "analytics"]
  },
  {
    id: "FC-101",
    objectiveId: "OBJ-27",
    prompt: "What integration options are available from the portal?",
    answer: "Connectors integrate third-party data sources, incident APIs, and Microsoft Sentinel for extended workflows.",
    tags: ["defender-portal", "integration", "api"]
  },
  {
    id: "FC-102",
    objectiveId: "OBJ-28",
    prompt: "What is the difference between eDiscovery (Standard) and eDiscovery (Premium)?",
    answer: "Premium adds advanced review, analytics, and custodian management beyond the search and export features in Standard.",
    tags: ["purview", "ediscovery", "compliance"]
  },
  {
    id: "FC-103",
    objectiveId: "OBJ-28",
    prompt: "How do legal holds function in Purview eDiscovery?",
    answer: "Legal holds preserve content in place across Exchange, SharePoint, OneDrive, and Teams to prevent deletion during investigations.",
    tags: ["purview", "legal-hold", "governance"]
  },
  {
    id: "FC-104",
    objectiveId: "OBJ-28",
    prompt: "Which data sources can be searched in Purview eDiscovery?",
    answer: "Content from Exchange Online, SharePoint Online, OneDrive, Teams chats, Yammer, and third-party data connectors can be queried.",
    tags: ["purview", "ediscovery", "data-sources"]
  },
  {
    id: "FC-105",
    objectiveId: "OBJ-28",
    prompt: "What value does the unified audit log deliver?",
    answer: "It captures user and admin activity across Microsoft 365 workloads, enabling investigators to trace actions and build timelines.",
    tags: ["audit", "purview", "logging"]
  },
  {
    id: "FC-106",
    objectiveId: "OBJ-29",
    prompt: "What is a Compliance Manager assessment?",
    answer: "Assessments map regulatory or Microsoft controls to improvement actions with scores reflecting progress.",
    tags: ["compliance-manager", "assessments", "compliance"]
  },
  {
    id: "FC-107",
    objectiveId: "OBJ-29",
    prompt: "How do improvement actions help teams?",
    answer: "Actions provide step-by-step guidance, evidence requirements, and workflow assignments to close compliance gaps.",
    tags: ["compliance-manager", "actions", "governance"]
  },
  {
    id: "FC-108",
    objectiveId: "OBJ-29",
    prompt: "Why is the compliance score meaningful?",
    answer: "The score quantifies risk reduction based on implemented controls across all assessments, helping prioritize work.",
    tags: ["compliance-manager", "scoring", "risk"]
  },
  {
    id: "FC-109",
    objectiveId: "OBJ-29",
    prompt: "Can external auditors access Compliance Manager data?",
    answer: "Yes, access can be delegated securely so auditors or partners review evidence without full admin rights.",
    tags: ["compliance-manager", "delegation", "audits"]
  },
  {
    id: "FC-110",
    objectiveId: "OBJ-30",
    prompt: "What communications can Purview Communication Compliance monitor?",
    answer: "It reviews messages across Exchange, Teams, Viva Engage, and third-party connectors for policy violations.",
    tags: ["communication-compliance", "monitoring", "policies"]
  },
  {
    id: "FC-111",
    objectiveId: "OBJ-30",
    prompt: "How are alerts and investigations handled?",
    answer: "Machine learning classifiers trigger alerts that reviewers triage within case workflows, capturing notes and resolutions.",
    tags: ["communication-compliance", "alerts", "investigations"]
  },
  {
    id: "FC-112",
    objectiveId: "OBJ-30",
    prompt: "Why is employee training part of communication compliance?",
    answer: "Policies can automatically send coaching messages to educate users on acceptable use when violations occur.",
    tags: ["communication-compliance", "training", "culture"]
  },
  {
    id: "FC-113",
    objectiveId: "OBJ-31",
    prompt: "What do retention labels accomplish?",
    answer: "They define how long content is kept, whether it is deleted, and if disposition review is required.",
    tags: ["data-lifecycle", "retention", "labels"]
  },
  {
    id: "FC-114",
    objectiveId: "OBJ-31",
    prompt: "How can labels be automatically applied?",
    answer: "Conditions based on metadata, keywords, or trainable classifiers auto-apply labels without manual tagging.",
    tags: ["data-lifecycle", "automation", "classification"]
  },
  {
    id: "FC-115",
    objectiveId: "OBJ-31",
    prompt: "What is adaptive policy scope?",
    answer: "Adaptive scopes target labels to dynamic groups of users, sites, or locations based on attributes rather than static lists.",
    tags: ["data-lifecycle", "adaptive-scope", "governance"]
  },
  {
    id: "FC-116",
    objectiveId: "OBJ-31",
    prompt: "Why is proof of disposition important?",
    answer: "Evidence from disposition reviews demonstrates defensible deletion for regulatory or legal inquiries.",
    tags: ["data-lifecycle", "disposition", "compliance"]
  },
  {
    id: "FC-117",
    objectiveId: "OBJ-32",
    prompt: "How does a file plan help records management?",
    answer: "File plans map record categories, retention schedules, and responsibilities in a structured catalog.",
    tags: ["records-management", "file-plan", "compliance"]
  },
  {
    id: "FC-118",
    objectiveId: "OBJ-32",
    prompt: "What are event-based retention triggers?",
    answer: "Events like contract expiration or employee departure start retention periods for associated records.",
    tags: ["records-management", "event-based", "governance"]
  },
  {
    id: "FC-119",
    objectiveId: "OBJ-32",
    prompt: "How are record declarations enforced?",
    answer: "When content is marked as a record, edits and deletions are restricted while audit trails capture any changes.",
    tags: ["records-management", "records", "protection"]
  },
  {
    id: "FC-120",
    objectiveId: "OBJ-33",
    prompt: "What documentation is available in the Service Trust Portal?",
    answer: "Customers can download audit reports, SOC attestations, and compliance guides for Microsoft cloud services.",
    tags: ["service-trust", "compliance", "documentation"]
  },
  {
    id: "FC-121",
    objectiveId: "OBJ-33",
    prompt: "How does the portal support implementation?",
    answer: "Implementation guides, whitepapers, and regional data residency details help teams design compliant solutions.",
    tags: ["service-trust", "implementation", "resources"]
  },
  {
    id: "FC-122",
    objectiveId: "OBJ-33",
    prompt: "Why should admins subscribe to Service Trust updates?",
    answer: "Subscriptions notify stakeholders when new reports or regulatory resources are published.",
    tags: ["service-trust", "updates", "notifications"]
  },
  {
    id: "FC-123",
    objectiveId: "OBJ-34",
    prompt: "What are Microsoft’s core privacy commitments?",
    answer: "They include transparency, security, data minimization, and giving customers control over their information.",
    tags: ["privacy", "principles", "trust"]
  },
  {
    id: "FC-124",
    objectiveId: "OBJ-34",
    prompt: "How does Microsoft uphold transparency?",
    answer: "Detailed documentation, audit reports, and privacy dashboards show how data is handled and where it resides.",
    tags: ["privacy", "transparency", "compliance"]
  },
  {
    id: "FC-125",
    objectiveId: "OBJ-34",
    prompt: "Why is customer control central to Microsoft privacy?",
    answer: "Customers decide how data is used, can access or delete it, and configure policies such as retention or encryption.",
    tags: ["privacy", "data-control", "compliance"]
  },
  {
    id: "FC-126",
    objectiveId: "OBJ-35",
    prompt: "What does Microsoft Priva help organizations achieve?",
    answer: "It identifies privacy risks like oversharing and guides remediation before issues escalate.",
    tags: ["priva", "privacy-risk", "compliance"]
  },
  {
    id: "FC-127",
    objectiveId: "OBJ-35",
    prompt: "How does Priva support subject rights requests?",
    answer: "Built-in workflows track requests, gather data from Microsoft 365, and deliver secure responses within deadlines.",
    tags: ["priva", "subject-requests", "workflow"]
  },
  {
    id: "FC-128",
    objectiveId: "OBJ-35",
    prompt: "What insights does Priva provide to privacy teams?",
    answer: "Dashboards highlight data exposure trends, high-risk users, and policy effectiveness.",
    tags: ["priva", "insights", "analytics"]
  },
  {
    id: "FC-129",
    objectiveId: "OBJ-36",
    prompt: "What purchasing motions exist for Microsoft cloud services?",
    answer: "Customers can buy through Enterprise Agreements, Cloud Solution Provider partners, direct web subscriptions, or pay-as-you-go Azure plans.",
    tags: ["pricing", "licensing", "models"]
  },
  {
    id: "FC-130",
    objectiveId: "OBJ-36",
    prompt: "When is the Enterprise Agreement a good fit?",
    answer: "EA suits large organizations needing volume discounts, centralized billing, and true-up flexibility.",
    tags: ["pricing", "enterprise-agreement", "strategy"]
  },
  {
    id: "FC-131",
    objectiveId: "OBJ-36",
    prompt: "Why might a customer choose Cloud Solution Provider?",
    answer: "CSP partners offer managed services, flexible monthly billing, and local support for smaller or midmarket customers.",
    tags: ["pricing", "csp", "partners"]
  },
  {
    id: "FC-132",
    objectiveId: "OBJ-37",
    prompt: "What billing frequencies are available in Microsoft 365?",
    answer: "Organizations can select annual or monthly terms, with some offers supporting pay-as-you-go consumption.",
    tags: ["billing", "frequency", "licensing"]
  },
  {
    id: "FC-133",
    objectiveId: "OBJ-37",
    prompt: "How can admins manage payment methods?",
    answer: "Admins store credit cards, direct debit details, or purchase order information and assign roles for billing admins.",
    tags: ["billing", "payment", "administration"]
  },
  {
    id: "FC-134",
    objectiveId: "OBJ-37",
    prompt: "Which tools help control spending?",
    answer: "Budget alerts, cost analysis in the admin center, and usage reports flag unexpected consumption.",
    tags: ["billing", "cost-management", "governance"]
  },
  {
    id: "FC-135",
    objectiveId: "OBJ-38",
    prompt: "What defines a base license in Microsoft 365?",
    answer: "Base licenses such as Business Premium or E3 provide foundational services like Office apps, Exchange, and Teams.",
    tags: ["licensing", "base-license", "m365"]
  },
  {
    id: "FC-136",
    objectiveId: "OBJ-38",
    prompt: "How do add-on licenses extend capabilities?",
    answer: "Add-ons like Defender for Office 365 Plan 2 or Audio Conferencing layer specialized features onto existing base licenses.",
    tags: ["licensing", "add-on", "expansion"]
  },
  {
    id: "FC-137",
    objectiveId: "OBJ-38",
    prompt: "Why must admins review license compatibility before purchase?",
    answer: "Add-ons require specific base plans, so checking prerequisites avoids activation failures or wasted spend.",
    tags: ["licensing", "compliance", "planning"]
  },
  {
    id: "FC-138",
    objectiveId: "OBJ-39",
    prompt: "What support plans are available for Microsoft 365 tenants?",
    answer: "Options include self-service, Microsoft 365 Business Premium support, Unified Support, and Premier legacy contracts.",
    tags: ["support", "plans", "operations"]
  },
  {
    id: "FC-139",
    objectiveId: "OBJ-39",
    prompt: "How do admins open a support request?",
    answer: "From the admin center they choose Need help, describe the issue, and submit a ticket with severity for Microsoft engineers.",
    tags: ["support", "process", "admin-center"]
  },
  {
    id: "FC-140",
    objectiveId: "OBJ-39",
    prompt: "What role does FastTrack play in Microsoft 365 onboarding?",
    answer: "FastTrack provides remote guidance, best practices, and deployment resources for eligible subscriptions.",
    tags: ["support", "fasttrack", "adoption"]
  },
  {
    id: "FC-141",
    objectiveId: "OBJ-39",
    prompt: "How can organizations leverage partner support?",
    answer: "Certified partners can escalate issues, provide managed services, and offer localized assistance alongside Microsoft.",
    tags: ["support", "partners", "services"]
  },
  {
    id: "FC-142",
    objectiveId: "OBJ-40",
    prompt: "What uptime commitments does Microsoft 365 publish?",
    answer: "Most core services pledge 99.9 percent or higher availability measured monthly.",
    tags: ["sla", "uptime", "assurance"]
  },
  {
    id: "FC-143",
    objectiveId: "OBJ-40",
    prompt: "How are service credits issued when SLAs are not met?",
    answer: "Customers submit claims with incident details, and Microsoft credits future invoices based on downtime impact.",
    tags: ["sla", "service-credits", "compensation"]
  },
  {
    id: "FC-144",
    objectiveId: "OBJ-40",
    prompt: "Why is shared responsibility part of SLA discussions?",
    answer: "Customers must configure redundancy, security, and client connectivity to achieve the promised resilience.",
    tags: ["sla", "shared-responsibility", "governance"]
  },
  {
    id: "FC-145",
    objectiveId: "OBJ-41",
    prompt: "Where can admins review live service incidents?",
    answer: "The Microsoft 365 admin center Service health dashboard lists current incidents, advisories, and their status.",
    tags: ["service-health", "dashboard", "operations"]
  },
  {
    id: "FC-146",
    objectiveId: "OBJ-41",
    prompt: "How do message center posts support service awareness?",
    answer: "Message center delivers planned change notices and recommended actions so admins can prepare users.",
    tags: ["service-health", "message-center", "communication"]
  },
  {
    id: "FC-147",
    objectiveId: "OBJ-41",
    prompt: "What alerting options exist for service health?",
    answer: "Admins can subscribe to email, Teams, or ServiceNow connectors for incident notifications.",
    tags: ["service-health", "alerts", "monitoring"]
  },
  {
    id: "FC-148",
    objectiveId: "OBJ-42",
    prompt: "How can users submit feedback on Microsoft 365 features?",
    answer: "They can use the Feedback portal, in-app feedback tools, or Microsoft 365 UserVoice equivalents to share ideas.",
    tags: ["feedback", "portal", "adoption"]
  },
  {
    id: "FC-149",
    objectiveId: "OBJ-42",
    prompt: "Why should admins monitor product roadmaps when giving feedback?",
    answer: "Roadmap visibility ensures feedback references planned features or identifies gaps that need advocacy.",
    tags: ["feedback", "roadmap", "planning"]
  },
  {
    id: "FC-150",
    objectiveId: "OBJ-42",
    prompt: "What programs let organizations test features early?",
    answer: "Targeted Release, Insider programs, and preview rings give customers a chance to provide feedback before general availability.",
    tags: ["feedback", "preview", "early-adoption"]
  }
];
