// Central content model for the portfolio. Chinese first, English second.
// All display strings flow through here so the whole site can switch languages.

export const site = {
  name: { zh: "Kael Odin", en: "Kael Odin" },
  location: { zh: "中国 · 远程", en: "China · Remote" },
  credit: { zh: "用心构建", en: "Crafted with care" },
};

export const nav = {
  brand: { zh: "Kael Odin", en: "Kael Odin" },
  links: [
    { to: "/", zh: "首页", en: "Home" },
    { to: "/projects", zh: "项目", en: "Projects" },
    { to: "/aboutme", zh: "关于我", en: "About" },
    { to: "/contactme", zh: "联系", en: "Contact" },
  ],
};

export const splash = {
  // Opening-screen greetings. Chinese / Japanese / Korean first, then a world tour.
  // Each entry: { text, lang (label shown small), locale (html lang for font shaping) }
  greetings: [
    { text: "你好", label: "中文", locale: "zh-CN" },
    { text: "こんにちは", label: "日本語", locale: "ja" },
    { text: "안녕하세요", label: "한국어", locale: "ko" },
    { text: "Hello", label: "English", locale: "en" },
    { text: "Bonjour", label: "Français", locale: "fr" },
    { text: "Hola", label: "Español", locale: "es" },
    { text: "Ciao", label: "Italiano", locale: "it" },
    { text: "Olá", label: "Português", locale: "pt" },
    { text: "Hallo", label: "Deutsch", locale: "de" },
    { text: "नमस्ते", label: "हिन्दी", locale: "hi" },
    { text: "สวัสดี", label: "ภาษาไทย", locale: "th" },
    { text: "Xin chào", label: "Tiếng Việt", locale: "vi" },
    { text: "Apa kabar", label: "Bahasa Indonesia", locale: "id" },
    { text: "Kamusta", label: "Filipino", locale: "fil" },
    { text: "مرحبا", label: "العربية", locale: "ar" },
    { text: "Привет", label: "Русский", locale: "ru" },
    { text: "Hej", label: "Svenska", locale: "sv" },
    { text: "Hallå", label: "Norsk", locale: "nb" },
    { text: "Guten tag", label: "Deutsch · CH", locale: "de" },
  ],
};

export const hero = {
  hello: { zh: "你好，我是 Kael Odin", en: "Hello, I'm Kael Odin" },
  based: { zh: "坐标", en: "Based in" },
  city: { zh: "中国", en: "China" },
  line1: { zh: "全栈", en: "FULLSTACK" },
  line2: { zh: "开发者", en: "DEVELOPER" },
  line3: { zh: "AI 工程师", en: "AI ENGINEER" },
  line4: { zh: "与设计师", en: "& DESIGNER" },
  roleSide: { zh: "全栈开发\nAI 工程师\n设计师", en: "Full-Stack Developer\nAI Engineer\nDesigner" },
  tagline: {
    zh: "我打造近乎完美的数字应用，兼顾效率、美学与功能。",
    en: "I create digital apps that border on Efficiency, Aesthetics and Functionality.",
  },
  tagWords: {
    efficiency: { zh: "效率", en: "Efficiency" },
    aesthetics: { zh: "美学", en: "Aesthetics" },
    functionality: { zh: "功能", en: "Functionality" },
  },
  connect: { zh: "联系我", en: "Let's Connect" },
};

export const intro = {
  blend: {
    pre: { zh: "我融合", en: "My blend of" },
    design: { zh: "设计、", en: "design, " },
    code: { zh: "代码、", en: "coding, " },
    func: { zh: "功能", en: "functionality " },
    and: { zh: "与", en: "and " },
    interaction: { zh: "交互", en: "interaction " },
    post: { zh: "的专长，在技术领域独树一帜。", en: "expertise distinguishes me within the tech industry." },
  },
  side: {
    zh: "以卓越为念，在数字世界中成就非凡。让我们携手，把远见变成现实，持续创新。",
    en: "Empowering success in the digital landscape. Together, we shape a visionary future, delivering on promises and continuously pioneering innovation.",
  },
  big1: { zh: "以代码构筑未来", en: "Coding the Future" },
  big2: { zh: "以架构驱动创新", en: "Architecting Innovation" },
  para: {
    zh: "我专注于打造量身定制的解决方案，在每个项目中不断突破极限，对卓越始终如一。",
    en: "I specialize in engineering bespoke solutions, consistently pushing the limits in each project, with an unwavering dedication to prioritizing excellence.",
  },
  aboutCta: { zh: "关于我", en: "About Me" },
  whatido: { zh: "我的能力", en: "WHAT I DO" },
  cards: [
    {
      title: { zh: "机器学习", en: "Machine Learning" },
      color: "text-blue-500",
      description: { zh: "用人工智能把你的想法变成智能解决方案。", en: "Harnessing artificial intelligence to transform your ideas into intelligent solutions." },
    },
    {
      title: { zh: "全栈开发", en: "Full Stack Development" },
      color: "text-purple-500",
      description: { zh: "用最新技术与设计趋势，把愿景变为现实。", en: "Bringing your vision to life with the latest technology and design trends." },
    },
    {
      title: { zh: "设计师", en: "Designer" },
      color: "text-cyan-400",
      description: { zh: "设计直观、高效、愉悦的界面。", en: "Designing interfaces that are intuitive, efficient, and enjoyable to use." },
    },
    {
      title: { zh: "全能交付", en: "Full Package" },
      color: "text-yellow-300",
      description: { zh: "设计、代码与交互兼修，在软件工程领域脱颖而出。", en: "My proficiency in design, coding, and interaction sets me apart within the domain of software engineering." },
    },
  ],
};

export const projects = {
  title: { zh: "我的项目", en: "My Projects" },
  loadMore: { zh: "查看更多", en: "Load More" },
  items: [
    {
      title: "DeepTutor",
      color: "purple-500",
      role: { zh: "开发", en: "Development" },
      tech: "React, Python, RAG",
      description: { zh: "面向学习的 AI 伴读：沉浸式阅读与知识库问答。", en: "An AI study companion: immersive reading plus knowledge-base Q&A." },
      link: "https://github.com/HKUDS/DeepTutor",
    },
    {
      title: "OpenMAIC",
      color: "gray-200",
      role: { zh: "开发", en: "Development" },
      tech: "Python, 多智能体, 工具调用",
      description: { zh: "本地多智能体协作框架：把代码库变成可执行的问答现场。", en: "A local multi-agent framework turning codebases into answerable workspaces." },
      link: "https://github.com/",
    },
    {
      title: "个人作品集",
      color: "blue-500",
      role: { zh: "开发", en: "Development" },
      tech: "React.js, Tailwind CSS, GSAP",
      description: { zh: "展示项目与技能的个人作品集。", en: "Personal portfolio showcasing projects and skills." },
      link: "/",
    },
  ],
};

export const tech = {
  heading: {
    pre: { zh: "我以", en: "I Build " },
    amazing: { zh: "惊艳", en: "amazing" },
    mid: { zh: "的速度构建 Web 应用", en: " Webapps at " },
    cover: { zh: "极速", en: "Warping speed" },
  },
  items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "Node.js", "MongoDB", "Firebase", "Git"],
};

export const experience = {
  dot: { zh: "技术与产品", en: "Technical Product" },
  para: {
    zh: "与工程协作，善用现代技术，把产品从想法送到上线。",
    en: "Collaborating with engineering, leveraging modern technologies, and shipping products from idea to launch.",
  },
  title: { zh: "经验与技能", en: "Experience & skills" },
  groups: [
    {
      id: "01",
      title: { zh: "产品", en: "Product" },
      description: {
        zh: "从零到一的产品管理：发现、战略、路线图与执行，用真实指标说话。",
        en: "Zero-to-one product management — discovery, strategy, roadmapping and execution that moves real metrics.",
      },
      skills: ["Product Discovery", "Product Strategy", "Roadmapping", "User Research", "Analytics & Metrics", "Go-to-Market"],
      color: "text-accentv",
    },
    {
      id: "02",
      title: { zh: "设计", en: "Design" },
      description: { zh: "从白板到高保真原型：设计系统与微交互，让产品活起来。", en: "From whiteboard to high-fidelity prototypes — design systems and micro-interactions that make products feel alive." },
      skills: ["Figma", "Figma Make", "UX Research", "UX Design", "Wireframing", "Prototyping", "Design Systems", "Interaction Design"],
      color: "text-accentc",
    },
    {
      id: "03",
      title: { zh: "工程", en: "Engineering" },
      description: { zh: "生产级全栈开发：靠谱的排期，能跑的原型就是真正的软件。", en: "Production-grade full-stack development — realistic scoping and prototypes that are real working software." },
      skills: ["Next.js", "React", "Node.js", "Flutter", "MongoDB", "SQL", "Python", "Tailwind CSS", "GSAP / Framer Motion"],
      color: "text-accenty",
    },
    {
      id: "04",
      title: { zh: "智能", en: "AI" },
      description: { zh: "AI 原生工作流：用 Claude Code 与 Figma Make 把数周迭代压缩到几天。", en: "AI-native workflows with Claude Code and Figma Make — compressing weeks of iteration into days so teams move forward faster." },
      skills: ["Claude Code", "RAG", "AI Workflow Automation", "AI-Assisted Development", "AI Prototyping", "Prompt Engineering", "AI Product Workflows", "Rapid Iteration"],
      color: "text-accentp",
    },
  ],
};

export const caseStudies = {
  title: { zh: "案例研究", en: "Case Studies" },
  all: { zh: "全部案例", en: "All Case Studies" },
  items: [
    {
      title: "Karnival BI · 可扩展洞察平台",
      enTitle: "Karnival BI — Scalable Insights Platform",
      role: { zh: "产品设计师 · 6+ 个月 · 2026", en: "Product Designer · 6+ Months · 2026" },
      metric: "85%",
      metricLabel: { zh: "用户采用率", en: "User Adoption Rate" },
      link: "https://www.thegr8binil.me/CaseStudies/karnival-bi",
    },
    {
      title: "问卷构建器重设计",
      enTitle: "Survey Builder Redesign",
      role: { zh: "产品设计负责人 & PM · 14 周 · 2025 Q3", en: "Lead Product Designer & PM · 14 Weeks · Q3 2025" },
      metric: "45%",
      metricLabel: { zh: "错误率下降", en: "Fewer Errors" },
      link: "https://www.thegr8binil.me/CaseStudies/survey-builder-redesign",
    },
    {
      title: "可扩展游戏化平台",
      enTitle: "Scalable Gamification Platform",
      role: { zh: "产品设计负责人 · 1.5 个月 · 2026 Q1", en: "Product Design Lead · 1.5 Months · Q1 2026" },
      metric: "4×",
      metricLabel: { zh: "活动触达更广", en: "Broader Campaign Reach" },
      link: "https://www.thegr8binil.me/CaseStudies/gamification-platform",
    },
  ],
};

export const aboutPage = {
  hello: { zh: "你好！我是 Kael Odin", en: "Hello! I'm Kael Odin" },
  big: { zh: "以数字匠心，造卓越体验", en: "Crafting Digital Excellence" },
  para1: { zh: "作为软件工程师，我擅长构建可扩展应用、提升用户体验、优化研发流程。", en: "As a Software Engineer, I excel in building scalable applications, enhancing user experiences, and streamlining development processes." },
  para2: { zh: "设计、代码与交互的综合能力，让我在软件工程领域与众不同。", en: "My proficiency in design, coding, and interaction sets me apart within the domain of software engineering." },
  help: { zh: "我能帮你", en: "I can help you with" },
  services: [
    { title: { zh: "设计", en: "Design" }, description: { zh: "交付稳健好用的数字设计，与开发无缝衔接，每个项目既好看又好用。", en: "With a proven track record in designing websites, I deliver robust and user-friendly digital designs that are seamlessly integrated with development." } },
    { title: { zh: "开发", en: "Development" }, description: { zh: "从零构建可扩展网站，专注微动画、转场与交互，用 Next.js / React.js，配 GSAP 与 Framer Motion。", en: "I build scalable websites from scratch that fit seamlessly with design, focused on micro animations, transitions, and interaction with Next.js, React.js, GSAP and Framer Motion." } },
    { title: { zh: "全栈交付", en: "The full package" }, description: { zh: "从概念到实现的全栈应用：设计眼光加前后端与数据库功底，成就出色项目。", en: "What sets me apart is my ability to deliver complete full-stack applications from concept to implementation, with design taste plus frontend, backend and database expertise." } },
  ],
  contactCta: { zh: "联系我", en: "Contact Me" },
};

export const contactPage = {
  title: { zh: "我们连线吧！", en: "Let's Connect!" },
  para: {
    zh: "无论是合作项目、攻克难题，还是聊聊技术，都欢迎联系。一起把想法变成现实。",
    en: "Whether you're looking to collaborate on a project, need a solution to a challenging problem, or just want to talk tech, feel free to reach out. Together, we can turn ideas into reality.",
  },
  fields: [
    { key: "name", num: "01", label: { zh: "你怎么称呼？", en: "What's your name?" }, placeholder: { zh: "李明*", en: "Ada Lovelace*" } },
    { key: "email", num: "02", label: { zh: "你的邮箱？", en: "What's your email?" }, placeholder: { zh: "you@example.com*", en: "you@example.com*" }, type: "email" },
    { key: "organization", num: "03", label: { zh: "你的组织是？", en: "What's the name of your organization?" }, placeholder: { zh: "某某公司", en: "Analytical Society" } },
    { key: "taskArea", num: "04", label: { zh: "需要哪方面的帮助？", en: "What specific area or task do you need help with?" }, placeholder: { zh: "比如：优化 Next.js 应用性能", en: "To improve the performance of a Next.js application" } },
    { key: "message", num: "05", label: { zh: "留言", en: "Your message" }, placeholder: { zh: "你好，能帮我看看……*", en: "Hello, can you help me with...*" } },
  ],
  send: { zh: "发送留言", en: "Send Message" },
  sending: { zh: "发送中…", en: "Sending..." },
  success: { zh: "发送成功！我会尽快回复。", en: "Message sent successfully! I will get back to you as soon as possible." },
  fail: { zh: "发送失败，请稍后再试。", en: "Failed to send message. Please try again later." },
  contactDetails: { zh: "联系方式", en: "CONTACT DETAILS" },
  socials: { zh: "社交媒体", en: "SOCIALS" },
  email: "hello@kaelodin.me",
};

export const projectsPage = {
  title: { zh: "我的项目", en: "My Projects" },
};

export const footer = {
  brand: {
    pre: { zh: "让", en: "Where " },
    aesthetics: { zh: "美学", en: "aesthetics" },
    mid: { zh: "与", en: " &" },
    func: { zh: "功能", en: "functionality" },
    post: { zh: "相遇", en: " meet" },
  },
  explore: { zh: "探索", en: "Explore" },
  exploreLinks: [
    { to: "/", zh: "首页", en: "Home" },
    { to: "/aboutme", zh: "关于我", en: "About Me" },
    { to: "/contactme", zh: "联系", en: "Contact" },
  ],
  follow: { zh: "关注我", en: "Follow Me" },
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "GitHub", url: "https://github.com/" },
    { label: "X", url: "https://x.com/" },
    { label: "Instagram", url: "https://www.instagram.com/" },
  ],
  contactCard: { zh: "联系我", en: "Contact Me" },
  contactHint: { zh: "打个招呼吧！", en: "Say Hello!" },
  projectsCard: { zh: "我的项目", en: "My Projects" },
  projectsHint: { zh: "看看项目", en: "Explore Projects" },
  madeWith: { zh: "用心构建", en: "Made with" },
  watermark: { zh: "你好 世界", en: "hello world" },
};

export const social = {
  tagline: { zh: "// 设计，代码，\n连接", en: "// Design, Code,\nEngage" },
  email: "hello@kaelodin.me",
};

export const notFound = {
  title: "404",
  para: { zh: "页面不存在", en: "Page not found" },
  cta: { zh: "回首页", en: "Go to Home Page" },
};
