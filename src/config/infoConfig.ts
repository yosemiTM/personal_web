export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Yomito MQ'
export const headline = 'a student learn in BeiJing institute of technology.'
export const introduction =
    "你好！Coucou Les Amis! My name is Ma Yiqi,a senior undergraduate student from the school of Optics and Photonics at Beijing Institute of Technology（BIT）,majoring in Optoelectronic Information Science and Engineering(Imaging Direction)."
export const email = 'yomitotm@yeah.net'
export const githubUsername = 'yosemiteTM'


// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "I’m Ma Yiqi, a senior at Beijing Institute of Technology, deeply committed to advancing optical imaging technologies. Over the past three years, I’ve honed my expertise in optical system design and AI-driven image processing, driven by a passion to bridge theoretical innovation with real-world applications.",
  'I’m not just another applicant. I’m a builder, a problem-solver, and someone who will actively advance all the goals while pushing the boundaries of what exactaly can I achieve.',
  "I started this blog to share the insights I learn every day. Most blogs will focus on what I might get in Optics,Artificial Intelligence and general computer science, while others share the life lessons I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about my search, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'wechat',
    icon: 'wechat',
    href: '',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/54783060',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
