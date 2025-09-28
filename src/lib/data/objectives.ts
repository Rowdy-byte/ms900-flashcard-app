export type LearningObjective = {
  id: string;
  module: string;
  title: string;
  summary: string;
  reference: string;
};

export const objectives: LearningObjective[] = [
  {
    id: 'OBJ-01',
    module: 'What is Microsoft 365?',
    title: 'Describe Microsoft 365 and Office 365, and the differences between them.',
    summary:
      'Contrast the product bundles, cloud services, and subscription value that separate Microsoft 365 from Office 365.',
    reference: 'https://learn.microsoft.com/training/modules/what-is-m365/'
  },
  {
    id: 'OBJ-02',
    module: 'What is Microsoft 365?',
    title: 'Describe how Microsoft 365 empowers both hybrid and flexible work, including support for frontline workers.',
    summary:
      'Show how Microsoft 365 tools enable secure productivity from any location and role, including frontline staff scenarios.',
    reference: 'https://learn.microsoft.com/training/modules/what-is-m365/'
  },
  {
    id: 'OBJ-03',
    module: 'What is Microsoft 365?',
    title: 'Describe Microsoft 365 Copilot and Microsoft 365 Copilot Chat, and the differences between them.',
    summary:
      'Differentiate the embedded Copilot experiences inside apps from Copilot Chat and outline how each assistant adds value.',
    reference: 'https://learn.microsoft.com/training/modules/what-is-m365/'
  },
  {
    id: 'OBJ-04',
    module: 'Describe productivity solutions of Microsoft 365',
    title: 'Describe how the productivity benefits of Microsoft 365 help you stay connected, organized, and productive.',
    summary:
      'Connect core Microsoft 365 apps to everyday scenarios for communication, organization, content creation, and mobility.',
    reference: 'https://learn.microsoft.com/training/modules/describe-productivity-solutions-microsoft-365/'
  },
  {
    id: 'OBJ-05',
    module: 'Describe productivity solutions of Microsoft 365',
    title: 'Describe how Microsoft 365 Copilot boosts productivity across Microsoft 365 Apps.',
    summary:
      'Explain how Copilot accelerates document drafting, analysis, presentations, and communication within Microsoft 365 Apps.',
    reference: 'https://learn.microsoft.com/training/modules/describe-productivity-solutions-microsoft-365/'
  },
  {
    id: 'OBJ-06',
    module: 'Describe productivity solutions of Microsoft 365',
    title: 'Describe how the capabilities of the work management tools optimize operations.',
    summary:
      'Outline how Planner, Project, Loop, Lists, and Power Platform tools streamline coordination and automate work.',
    reference: 'https://learn.microsoft.com/training/modules/describe-productivity-solutions-microsoft-365/'
  },
  {
    id: 'OBJ-07',
    module: 'Describe productivity solutions of Microsoft 365',
    title: 'Describe additional Microsoft 365 productivity apps.',
    summary:
      'Highlight supplementary apps such as Forms, Bookings, Sway, Whiteboard, and Visio that address niche productivity needs.',
    reference: 'https://learn.microsoft.com/training/modules/describe-productivity-solutions-microsoft-365/'
  },
  {
    id: 'OBJ-08',
    module: 'Describe collaboration solutions of Microsoft 365',
    title: 'Describe how the collaboration tools of Microsoft 365 promote synergy in the workplace.',
    summary:
      'Show how shared workspaces, real-time co-authoring, and integrated communications connect teams and information.',
    reference: 'https://learn.microsoft.com/training/modules/describe-collaboration-solutions-microsoft-365/'
  },
  {
    id: 'OBJ-09',
    module: 'Describe collaboration solutions of Microsoft 365',
    title: 'Describe how Microsoft Teams helps boost teamwork.',
    summary:
      'Map Teams channels, meetings, calling, and extensibility features to scenarios that improve collaboration outcomes.',
    reference: 'https://learn.microsoft.com/training/modules/describe-collaboration-solutions-microsoft-365/'
  },
  {
    id: 'OBJ-10',
    module: 'Describe collaboration solutions of Microsoft 365',
    title: 'Describe how Microsoft Viva helps organizations create thriving work cultures.',
    summary:
      'Summarize Viva modules that strengthen engagement, learning, knowledge sharing, and well-being.',
    reference: 'https://learn.microsoft.com/training/modules/describe-collaboration-solutions-microsoft-365/'
  },
  {
    id: 'OBJ-11',
    module: 'Describe collaboration solutions of Microsoft 365',
    title: 'Describe how Yammer communities can help foster connections within your organization.',
    summary:
      'Explain how Viva Engage (Yammer) drives inclusive dialogue, community knowledge, and employee networks.',
    reference: 'https://learn.microsoft.com/training/modules/describe-collaboration-solutions-microsoft-365/'
  },
  {
    id: 'OBJ-12',
    module: 'Describe the device and cloud endpoint management concepts in Microsoft 365',
    title: 'Describe the endpoint modern management capabilities of Microsoft 365.',
    summary:
      'Detail how Intune, Configuration Manager, Autopilot, analytics, and Zero Trust controls unify device management.',
    reference: 'https://learn.microsoft.com/training/modules/describe-endpoint-modernization-management-concepts-deployment-options/'
  },
  {
    id: 'OBJ-13',
    module: 'Describe the device and cloud endpoint management concepts in Microsoft 365',
    title: 'Describe the differences between Windows 365 and Azure Virtual Desktop.',
    summary:
      'Compare the cloud PC service model of Windows 365 with the virtual desktop infrastructure flexibility of Azure Virtual Desktop.',
    reference: 'https://learn.microsoft.com/training/modules/describe-endpoint-modernization-management-concepts-deployment-options/'
  },
  {
    id: 'OBJ-14',
    module: 'Describe the device and cloud endpoint management concepts in Microsoft 365',
    title: 'Describe the deployment and release models for Windows-as-a-Service.',
    summary:
      'Summarize release channels, update rings, and deployment strategies for servicing Windows 10 and Windows 11.',
    reference: 'https://learn.microsoft.com/training/modules/describe-endpoint-modernization-management-concepts-deployment-options/'
  },
  {
    id: 'OBJ-15',
    module: 'Describe the device and cloud endpoint management concepts in Microsoft 365',
    title: 'Describe the deployment methods and update channels for Microsoft 365 Apps.',
    summary:
      'Clarify installation options and servicing channels such as Current Channel, Monthly Enterprise Channel, and Semi-Annual Enterprise.',
    reference: 'https://learn.microsoft.com/training/modules/describe-endpoint-modernization-management-concepts-deployment-options/'
  },
  {
    id: 'OBJ-16',
    module: 'Describe the analytics and administrative capabilities available in Microsoft 365',
    title: 'Describe how Viva Insights help people and organizations work smarter and achieve balance.',
    summary:
      'Explain individual, manager, and organizational insights that encourage focus time, well-being, and smarter collaboration.',
    reference: 'https://learn.microsoft.com/training/modules/describe-analytics-capabilities-microsoft-365/'
  },
  {
    id: 'OBJ-17',
    module: 'Describe the analytics and administrative capabilities available in Microsoft 365',
    title: 'Describe how the Microsoft Copilot dashboard tracks Copilot usage at work.',
    summary:
      'Outline dashboard analytics that measure adoption, productivity impact, and responsible usage of Copilot experiences.',
    reference: 'https://learn.microsoft.com/training/modules/describe-analytics-capabilities-microsoft-365/'
  },
  {
    id: 'OBJ-18',
    module: 'Describe the analytics and administrative capabilities available in Microsoft 365',
    title: 'Describe the capabilities of the Microsoft 365 admin center and user portal.',
    summary:
      'List administrative tasks, tenant configuration, user self-service, and delegated management features in the portals.',
    reference: 'https://learn.microsoft.com/training/modules/describe-analytics-capabilities-microsoft-365/'
  },
  {
    id: 'OBJ-19',
    module: 'Describe the analytics and administrative capabilities available in Microsoft 365',
    title: 'Describe the reports available in the Microsoft 365 admin center and other admin centers.',
    summary:
      'Point out reporting surfaces across Microsoft 365, Teams, SharePoint, Viva, and usage analytics that inform decisions.',
    reference: 'https://learn.microsoft.com/training/modules/describe-analytics-capabilities-microsoft-365/'
  },
  {
    id: 'OBJ-20',
    module: 'Describe the function and identity types of Microsoft Entra ID',
    title: 'Describe the function of Microsoft Entra ID.',
    summary:
      'Position Entra ID as the cloud identity service that handles authentication, authorization, and directory sync.',
    reference: 'https://learn.microsoft.com/training/modules/explore-basic-services-identity-types/'
  },
  {
    id: 'OBJ-21',
    module: 'Describe the function and identity types of Microsoft Entra ID',
    title: 'Describe the types of identities Microsoft Entra ID supports.',
    summary:
      'Explain user, device, service principal, guest, and hybrid identities and how they join the directory.',
    reference: 'https://learn.microsoft.com/training/modules/explore-basic-services-identity-types/'
  },
  {
    id: 'OBJ-22',
    module: 'Describe access management capabilities of Microsoft Entra',
    title: 'Describe Conditional Access in Microsoft Entra ID.',
    summary:
      'Summarize policy conditions, grant controls, and session controls used to enforce Zero Trust access decisions.',
    reference: 'https://learn.microsoft.com/training/modules/explore-access-management-capabilities/'
  },
  {
    id: 'OBJ-23',
    module: 'Describe access management capabilities of Microsoft Entra',
    title: 'Describe Microsoft Entra roles and role-based access control.',
    summary:
      'Highlight role assignments, scopes, and least-privilege delegation through built-in and custom roles.',
    reference: 'https://learn.microsoft.com/training/modules/explore-access-management-capabilities/'
  },
  {
    id: 'OBJ-24',
    module: 'Describe access management capabilities of Microsoft Entra',
    title: 'Describe Global Secure Access in Microsoft Entra.',
    summary:
      'Capture Secure Service Edge capabilities that extend Conditional Access and traffic inspection to SaaS and private apps.',
    reference: 'https://learn.microsoft.com/training/modules/explore-access-management-capabilities/'
  },
  {
    id: 'OBJ-25',
    module: 'Describe threat protection with Microsoft Defender XDR',
    title: 'Describe the Microsoft Defender XDR service.',
    summary:
      'Present Defender XDR as an integrated threat protection suite for endpoints, identities, email, and cloud apps.',
    reference: 'https://learn.microsoft.com/training/modules/describe-threat-protection-with-microsoft-365-defender/'
  },
  {
    id: 'OBJ-26',
    module: 'Describe threat protection with Microsoft Defender XDR',
    title: 'Describe how Microsoft Defender XDR provides integrated protection against sophisticated attacks.',
    summary:
      'Explain signal correlation, automated investigation, and coordinated response across security workloads.',
    reference: 'https://learn.microsoft.com/training/modules/describe-threat-protection-with-microsoft-365-defender/'
  },
  {
    id: 'OBJ-27',
    module: 'Describe threat protection with Microsoft Defender XDR',
    title: 'Describe and explore Microsoft Defender portal.',
    summary:
      'Guide learners through Defender portal workspaces, incident queues, advanced hunting, and reporting views.',
    reference: 'https://learn.microsoft.com/training/modules/describe-threat-protection-with-microsoft-365-defender/'
  },
  {
    id: 'OBJ-28',
    module: 'Describe the data compliance solutions of Microsoft Purview',
    title: 'Describe Microsoft Purview eDiscovery and Audit.',
    summary:
      'Outline audit log collection, legal hold, review sets, and export workflows that support investigations.',
    reference: 'https://learn.microsoft.com/training/modules/describe-purview-risk-compliance-governance/'
  },
  {
    id: 'OBJ-29',
    module: 'Describe the data compliance solutions of Microsoft Purview',
    title: 'Describe Microsoft Purview Compliance Manager.',
    summary:
      'Explain assessment templates, improvement actions, and compliance scoring dashboards.',
    reference: 'https://learn.microsoft.com/training/modules/describe-purview-risk-compliance-governance/'
  },
  {
    id: 'OBJ-30',
    module: 'Describe the data compliance solutions of Microsoft Purview',
    title: 'Describe Microsoft Purview Communication Compliance.',
    summary:
      'Summarize policy-driven monitoring that detects risky communication patterns and helps enforce standards.',
    reference: 'https://learn.microsoft.com/training/modules/describe-purview-risk-compliance-governance/'
  },
  {
    id: 'OBJ-31',
    module: 'Describe the data compliance solutions of Microsoft Purview',
    title: 'Describe Microsoft Purview Data Lifecycle Management.',
    summary:
      'Detail retention labels, auto-apply rules, and adaptive policies that govern information from creation to deletion.',
    reference: 'https://learn.microsoft.com/training/modules/describe-purview-risk-compliance-governance/'
  },
  {
    id: 'OBJ-32',
    module: 'Describe the data compliance solutions of Microsoft Purview',
    title: 'Describe Microsoft Purview Records Management.',
    summary:
      'Highlight file plans, classifications, and disposition reviews that enable defensible records keeping.',
    reference: 'https://learn.microsoft.com/training/modules/describe-purview-risk-compliance-governance/'
  },
  {
    id: 'OBJ-33',
    module: 'Describe Microsoft’s Service Trust portal and privacy capabilities',
    title: 'Describe the offerings of the Service Trust Portal.',
    summary:
      'List compliance documents, audit reports, and implementation resources available to customers.',
    reference: 'https://learn.microsoft.com/training/modules/describe-compliance-management-capabilities-microsoft/'
  },
  {
    id: 'OBJ-34',
    module: 'Describe Microsoft’s Service Trust portal and privacy capabilities',
    title: "Describe Microsoft's Privacy principles.",
    summary:
      'Capture commitments to transparency, security, compliance, and user control over data.',
    reference: 'https://learn.microsoft.com/training/modules/describe-compliance-management-capabilities-microsoft/'
  },
  {
    id: 'OBJ-35',
    module: 'Describe Microsoft’s Service Trust portal and privacy capabilities',
    title: 'Describe Microsoft Priva.',
    summary:
      'Outline Priva capabilities for privacy risk management, subject rights requests, and actionable insights.',
    reference: 'https://learn.microsoft.com/training/modules/describe-compliance-management-capabilities-microsoft/'
  },
  {
    id: 'OBJ-36',
    module: 'Describe Microsoft 365 pricing, licensing, and billing options',
    title: 'Describe the pricing models available for Microsoft cloud services.',
    summary:
      'Compare Enterprise Agreement, Cloud Solution Provider, direct web purchase, and other buying channels.',
    reference: 'https://learn.microsoft.com/training/modules/identify-licensing-options-available-microsoft-365/'
  },
  {
    id: 'OBJ-37',
    module: 'Describe Microsoft 365 pricing, licensing, and billing options',
    title: 'Describe billing management features such as billing frequency and methods of payment.',
    summary:
      'Note how administrators configure billing intervals, invoices, payment methods, and spending alerts.',
    reference: 'https://learn.microsoft.com/training/modules/identify-licensing-options-available-microsoft-365/'
  },
  {
    id: 'OBJ-38',
    module: 'Describe Microsoft 365 pricing, licensing, and billing options',
    title: 'Describe the differences between base licensing and add-on licensing.',
    summary:
      'Clarify how core licenses provide baseline services and how add-ons extend capabilities per user.',
    reference: 'https://learn.microsoft.com/training/modules/identify-licensing-options-available-microsoft-365/'
  },
  {
    id: 'OBJ-39',
    module: 'Describe support offerings for Microsoft 365 services',
    title: 'Describe the support offerings available for Microsoft 365 and how to create a support request.',
    summary:
      'Explain support plan tiers, admin center ticket submission, and escalation workflows.',
    reference: 'https://learn.microsoft.com/training/modules/describe-support-offerings-for-microsoft-365-services/'
  },
  {
    id: 'OBJ-40',
    module: 'Describe support offerings for Microsoft 365 services',
    title: 'Describe service level agreement (SLAs) concepts.',
    summary:
      'Summarize uptime commitments, service credits, and shared responsibilities found in Microsoft SLAs.',
    reference: 'https://learn.microsoft.com/training/modules/describe-support-offerings-for-microsoft-365-services/'
  },
  {
    id: 'OBJ-41',
    module: 'Describe support offerings for Microsoft 365 services',
    title: 'Identify how to track service health through the Microsoft 365 admin center.',
    summary:
      'Describe service health dashboards, message center notifications, and alerting options.',
    reference: 'https://learn.microsoft.com/training/modules/describe-support-offerings-for-microsoft-365-services/'
  },
  {
    id: 'OBJ-42',
    module: 'Describe support offerings for Microsoft 365 services',
    title: 'Describe how organizations can provide feedback on Microsoft 365 products and services.',
    summary:
      'Highlight feedback portal submissions, user voice channels, and preview programs that shape the roadmap.',
    reference: 'https://learn.microsoft.com/training/modules/describe-support-offerings-for-microsoft-365-services/'
  }
];
