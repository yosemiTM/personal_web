// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'National Optoelectronic Design Competition--provincial-level second prize(team leader)',
    description: 'Designed a portable alcohol detection device using dual-wavelength differential algorithms',
    date: '2023',
    location: 'Beijing',
  },
    {
    name: 'Asia-Oceanic Mathematical Contest in Modeling (AOMCM)--goal at 92 points',
    description: ' Proposed a compressed sensing model for image reconstruction under noisy conditions.',
    date: '2022',
    location: 'Beijing',
  },
  {
    name: 'Second-Class University Scholarship (twice)',
    description: '',
    date: '2024',
    location: 'Beijing',
  },
  {
    name: 'Therd-Class University Scholarship ',
    description: '',
    date: '2023',
    location: 'Beijing',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'portable alcohol detection device using dual-wavelength differential algorithms',
    description: 'A project on National Optoelectronic Design Competition',
    link: { href: '', label: '' },
    tags: ['optic-electric Monitor']
  },
  {
    name: 'Intelligent UAV-Based Autonomous Border Patrol and Inspection System' ,
    description: 'AI-Enhanced Swarm UAV Network: Resource-Efficient Border Patrol with Multi-Mission Coordination (Reconnaissance, Tracking, Alerting) and Air-Ground Integration',
    link: { href: '', label: 'nosorce' },
    tags: ['MOT', 'CV','UAV']
  },
  {
    name: 'Research on Indoor Localization and Imaging System Based on CSI Signals',
    description: 'Beijing Institute of Technology Challenge Cup Campus Competition Project',
    link: { href: 'https://bit.tiaozhanbei.net/', label: 'Challenge Cup' },
    tags: ['Signal Processing','Machine Learning','Object Detection and Localization']
  },
  {
    name: 'Asia-Oceanic Mathematical Contest in Modeling (AOMCM)--goal at 92 points',
    description: 'Proposed a compressed sensing model for image reconstruction under noisy conditions--goal at 92 points',
    link: { href: 'https://apmcm.org/', label: 'ACMCM' },
    tags: ['Mathematic', 'AI']
  },
  {
    name: ' Indoor PM2.5 Mass Concentration Monitoring Device ',
    description: 'Low-Cost Laser PM2.5 Monitor with Adaptive Environmental Interference Cancellation – Indoor Air Quality Management Solution',
    link: { href: '', label: '' },
    tags: ['Laser', 'optic-electric Monitor']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Python Workshop',
    description:
      'Teaching basic Python programming concepts to beginners. Covering variables, control flow, and functions.',
    date: '2024-02-24',
    location: 'Shanghai',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'AI Ethics Discussion',
    description:
      'A group discussion about the ethical implications of AI development and its impact on society.',
    date: '2024-03-01',
    location: 'Shanghai',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Code Review Session',
    description:
      'Helping students improve their coding skills through peer code review and best practices sharing.',
    date: '2024-03-15',
    location: 'Shanghai',
  },
]
