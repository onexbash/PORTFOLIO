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
      'As an IAM Solution Engineer at KOGIT, the first challenge was the change of focus from Omada Identity to SailPoint, which worked out very quickly and well thanks to my expertise in the IAM area. In addition to numerous training courses, I developed the internal IdentityIQ sandbox environment, which again greatly advanced my knowledge.',
    icon: React.createElement(CgWorkAlt),
    date: '10/2023 - TODAY',
    logo: '/logos/logo-kogit.jpg',
    tasks: [
      'Passing through all relevant IT departments',
      'Greatest interest in the Identity & Access Management, Cyber Defense Center and Web Applications teams',
      'Last 6 months exclusively in the IAM team',
      'Final project: Integration test for the KION Notiﬁcation Service (full-stack web app)',
    ],
  },
  {
    title: 'Associate IAM Consultant',
    company: 'IC Consult',
    href: 'https://ic-consult.com/en/',
    description:
      "Since I already gained a lot of IAM experience, especially with Omada Identity, I decided to challenge myself even further and moved on into the Consulting business after 4 years of working for the KION Group IT. I was very impressed by the company's fast and uncomplicated way of working, which motivated me personally and meant that I was quickly entrusted with very important projects.",
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
      'After graduating my final exams I was hired as a full-time employee in the IAM team. I was reponsible for maintaining and developing the IAM infrastructure of the KION Group. I was also involved in several projects and migrations.',
    icon: React.createElement(CgWorkAlt),
    date: '06/2022 - 03/2023',
    logo: '/logos/logo-kion.jpg',
    tasks: [
      'Implementation of Omada Identity',
      'Introduction of Workday as a single point of truth',
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
    imgSrc: '/svg/kion.svg',
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
    imgSrc: '/svg/allinaz.svg',
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
    imgSrc: '/svg/mercedes-benz-bank.svg',
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
    imgSrc: '/svg/bmw-group.svg',
  },
] as const;

export const developmentSkills = [
  'Next.js',
  'React',
  'TypeScript',
  'Rust',
  'HTML/CSS',
  'Tailwind',
  'Python',
  'Java',
  'ZSH & BASH',
  'SQL',
  'Supabase',
] as const;

export const technologicalSkills = [
  'Omada Identity',
  'SailPoint IdentityIQ',
  'SailPoint IdentityNow',
  'CyberArk PAM',
  'MS Azure',
  'MS Entra',
  'LDAP',
  'REST',
  'SCIM',
  'SAML',
  'OAuth',
  'OIDC',
  'Docker & Podman',
  'Node.js',
  'Linux & OSX',
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
  'English & German',
] as const;
