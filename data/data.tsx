import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import interiorLensImg from '@/public/interiorLens.jpeg';
import bondfireImg from '@/public/bondfire.png';
import wordanalyticsImg from '@/public/wooly.png';

export const links = [
  {
    name: 'Home',
    hash: '/',
  },
  {
    name: 'About me',
    hash: '#about-me',
  },

  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'IAM Solution Engineer',
    company: 'KOGIT GmbH',
    href: 'https://www.kogit.de/en/',
    description:
      'In my role as an IAM Solution Engineer at KOGIT, I initially faced the challenge of shifting my focus from Omada Identity to SailPoint. Thanks to my IAM expertise, this transition was swift and successful. Alongside various training courses, I was tasked with developing a new containerized IdentityIQ sandbox environment. This greatly expanded my knowledge, as IdentityIQ is entirely self-hosted and intersects with numerous IT areas. For instance, I worked on the MySQL configuration as the Identity database, addressed by the Hibernate SQL overlay, set up the Apache Tomcat server as the IdentityIQ application server, connected SAP HCM as the Authoritative Identity System, and developed the connector for Microsoft Entra where email domains were received and accounts provisioned. As stated earlier, the environment was designed to be fully containerized without any manual intervention. Given the paramount importance of security in all IAM projects, I opted for Podman over Docker due to its daemonless approach, which runs containers as a rootless user, and its capability to operate containers in a rootless environment.',
    icon: React.createElement(CgWorkAlt),
    date: '10/2023 - 04/2024',
    logo: '/logos/logo-kogit.jpg',
    tasks: [
      'SailPoint IdentityIQ & IdentityNow trainings',
      'Development of a Containerized IdentityIQ sandbox environment',
      'Application Server setup with Apache Tomcat',
      'Configuration of MySQL as Identity database addressed by Hibernate',
      'Connector development for Microsoft Entra (Azure Active Directory) & SAP HCM (HR Identity Source)',
    ],
  },
  {
    title: 'Associate IAM Consultant',
    company: 'IC Consult',
    href: 'https://ic-consult.com/en/',
    description:
      'Having amassed considerable IAM expertise, particularly with Omada Identity, I sought to push my boundaries and transitioned into the Consulting sector after a 4-year tenure at KION Group IT. The company’s swift and straightforward progress approach resonated with me, leading to my involvement in significant projects and even assuming the role of technical project lead for the API Development sub-project at Allianz Global Investors. Upon completing this project well ahead of schedule, I was tasked with a project at Mercedes Benz Bank, where we enhanced the Omada-centric IAM Infrastructure and concurrently participated in a second project for BMW, conceptualizing the OneIdentity Migration. Given BMW’s enduring partnership with IC Consult, we were entrusted with decision-making processes, enabling us to achieve milestones efficiently. While my primary focus at IC Consult remained on Omada Identity, I also acquired valuable experience with CyberArk and OneIdentity.',
    icon: React.createElement(CgWorkAlt),
    date: '03/2023 - 10/2023',
    logo: '/logos/logo-icc.jpg',
    tasks: [
      'Allianz Global Investors: Development of the CyberArk SCIM Connector as an API for OneIdentity',
      'Mercedes-Benz Bank: Omada Migration (development)',
      'BMW: OneIdentity Migration (conception)',
      'Omada Identity trainings',
    ],
  },
  {
    title: 'Junior IAM Engineer',
    company: 'KION Group IT',
    href: 'https://www.kiongroup.com/en/',

    description:
      'Upon the successful completion of my final examinations, I was privileged to secure a full-time position within the Identity and Access Management (IAM) team at the KION Group. My primary responsibilities encompassed the maintenance and enhancement of the IAM infrastructure. During my tenure, the organization was in the process of transitioning from the legacy IAM systems, ISIM & ISAM from IBM, to Omada Identity. This transition was a global initiative, and I played a pivotal role in its implementation. In addition to these responsibilities, I was also actively involved in several internal projects, further contributing to the development and maintenance of the IAM infrastructure. This experience has provided me with a comprehensive understanding of the complexities and nuances of IAM systems and their critical role within an organization.',
    icon: React.createElement(CgWorkAlt),
    date: '06/2022 - 03/2023',
    logo: '/logos/logo-kion.jpg',
    tasks: [
      'Implementation of Omada Identity',
      'Maintenance: Identity Mappings, HR Imports, Provisionings, Data Quality Ensurance',
      'Enhancement: Additional Attributes, Custom Reports, Request-Access, Delegation, Emergency Lockout',
      'Introduction of Workday as primary Identity Source (single point of truth)',
      'SCS project: Integration of Dematic into the IAM infrastructure of the KION Group',
      'BT project: Migration of SAP infrastructure from on-premise to S4/Hana',
      'Move-To-Azure project: Azure Write-Back for synchronization from AD to AAD',
    ],
  },
  {
    title: 'IT Specialist for System Integration',
    company: 'KION Group IT',
    href: 'https://www.kiongroup.com/en/',
    description: 'Apprenticeship (IHK Aschaffenburg, Germany)',
    icon: React.createElement(CgWorkAlt),
    date: '09/2019 - 06/2022',
    logo: '/logos/logo-kion.jpg',
    tasks: [
      'Passing through all relevant IT departments',
      'Greatest interest in the Identity & Access Management, Cyber Defense Center and Web Applications teams',
      'Last 6 months exclusively in the IAM team',
      'Final project: Integration test for the KION Notiﬁcation Service (full-stack web app)',
    ],
  },
] as const;

export const projectsData = [
  {
    name: 'Project KION',
    title: 'Dematic Merge',
    company: 'KION Group IT',
    description:
      'Post KION’s acquisition of Dematic, our IAM team had significant tasks. We began with Active Directory, realizing it wasn’t cost-effective to merge Dematic users into KION ADs due to application dependencies. Instead, we automated user management via Omada, using Workday’s HR system as the single source of truth. Azure AD was straightforward as we were already syncing AD & AAD with Omada’s Azure AD Connector, which we implemented for Dematic as well.',
    tasks: [
      'Target system migration AD, AAD, SAP',
      'Consolidation of HR systems (Workday as single point of truth)',
      'Quality assurance of the source system',
      'Maintenance + Hypercare Phase',
    ],
    url: 'https://www.kiongroup.com/en/About-us/KION-at-a-glance/',
    imgSrc: '/icons/kion.svg',
  },
  {
    name: 'PROJECT ALLIANZ',
    title: 'SCIM API for PAM Implementation',
    company: 'Allianz Global Investors',
    description:
      'During my inaugural project at IC Consult, I had the privilege of joining the project at Allianz Global Investors. I even assumed the role of technical project lead, expediting the integration of OneIdentity and CyberArk by two months ahead of schedule. The project aimed to enable employees to request new PAM Users or Safes in ServiceNow. These requests were then routed to OneIdentity and subsequently forwarded to CyberArk.',
    tasks: [
      'Project lead of the interface subproject',
      'Acquiring knowledge about PAM & CyberArk',
      'Development of CyberArk SCIM Connector for processing OneIdentity API requests',
      'API documentation and testing',
    ],
    url: 'https://www.allianzgi.com/',
    imgSrc: '/icons/allianz.svg',
  },
  {
    name: 'PROJECT MERCEDES',
    title: 'Omada Implementation',
    company: 'Mercedes-Benz-Bank',
    description:
      'Following the highly successful project completion at Allianz Global Investors, I rapidly gained significant trust within iC Consult, leading to my involvement in the two largest projects at Mercedes-Benz Bank and the BMW Group. At Mercedes-Benz Bank, we were responsible for the technical implementation of Omada Identity. The existing manual processes at Mercedes-Benz Bank had to be transferred to OneIdentity and optimized',
    tasks: [
      'Implementation of Omada Identity',
      'Omada standard process Implementation',
      'Identity & Account Lifecycle Implementation',
      'Development of Custom Feature Requests',
    ],
    url: 'https://www.mercedes-benz-bank.de/',
    imgSrc: '/icons/mercedes-benz-bank.svg',
  },
  {
    name: 'PROJECT BMW',
    title: 'Omada to OneIdentity Migration',
    company: 'BMW Group',
    description:
      'During my tenure at the BMW Group, I spearheaded the transition from Omada to OneIdentity, overseeing the migration and optimization of existing IAM processes. Leveraging the longstanding partnership between iC Consult and the BMW Group, we were granted decision-making authority, a key factor in swiftly achieving project milestones.',
    tasks: [
      'Conception & User Story Definition',
      'Merge existing Omada processes to OneIdentity',
      'Process optimization and automation',
      'Decision Making',
    ],
    url: 'https://www.bmwgroup.com/en.html',
    imgSrc: '/icons/bmw-group.svg',
  },
] as const;

export const developmentSkills = [
  'HTML',
  'CSS',
  'Tailwind',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Python',
  'Java',
  'PostgreSQL',
  'MySQL',
  'Shell Scripting',
  'API Development',
  'Bash',
  'ZSH',
  'Cloudflare',
  'Supabase',
  'VIM',
  'VSCode',
] as const;

export const technologicalSkills = [
  'Omada Identity',
  'SailPoint IdentityIQ',
  'SailPoint IdentityNow',
  'CyberArk',
  'OneIdentity',
  'MS Azure',
  'MS Entra',
  'OAuth',
  'OIDC',
  'Docker',
  'Podman',
  'Node.js',
  'LDAP',
  'REST',
  'SCIM',
  'SAML',
  'Linux',
  'MacOS',
  'Confluence',
  'Jira',
  'Workday',
  'ServiceNow',
  'Proxmox',
  'Citrix',
] as const;

export const softSkills = [
  'Consulting',
  'Problem Solving',
  'Collaboration',
  'Communication',
  'Critical Thinking',
  'Decision Making',
  'Time Management',
  'Requirements Engineering',
  'Conception',
  'Process Optimization',
  'Meeting Moderation',
  'English - fluent',
  'German - native',
] as const;
