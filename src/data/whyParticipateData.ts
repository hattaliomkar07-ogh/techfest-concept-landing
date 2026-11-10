export interface WhyParticipateItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tag: string;
  iconName: string;
  accent: string;
}

export const whyParticipateData: WhyParticipateItem[] = [
  {
    id: 'test-abilities',
    number: '01',
    title: 'Test Your Abilities',
    shortDesc: 'Benchmark your engineering and strategic skills against premier collegiate minds across national and international stages.',
    fullDesc: 'Techfest challenges push beyond theoretical classroom exams. You apply core physics, coding algorithms, and hardware design under realistic competition pressures and strict execution benchmarks.',
    tag: 'Benchmarking',
    iconName: 'Trophy',
    accent: '#315EFF'
  },
  {
    id: 'explore-technologies',
    number: '02',
    title: 'Explore New Technologies',
    shortDesc: 'Gain direct hands-on exposure to frontier robotics, modern AI architectures, space avionics, and clean energy systems.',
    fullDesc: 'Interact directly with emerging platforms before they reach mainstream adoption. From custom ROS2 robotics firmware to edge AI inference and sustainable microgrids, experience the cutting edge firsthand.',
    tag: 'Discovery',
    iconName: 'Sparkles',
    accent: '#8064FF'
  },
  {
    id: 'meet-curious-minds',
    number: '03',
    title: 'Meet Curious Minds',
    shortDesc: 'Connect with an exceptional community of fellow builders, academic researchers, faculty mentors, and industry visionaries.',
    fullDesc: 'Form lifelong multidisciplinary collaborations. Techfest creates a vibrant gathering point where hardware builders, software developers, and research scholars exchange ideas and initiate breakthrough joint ventures.',
    tag: 'Community',
    iconName: 'Users',
    accent: '#45C6E8'
  },
  {
    id: 'practical-experiences',
    number: '04',
    title: 'Learn Through Practical Experiences',
    shortDesc: 'Transition from textbook formulations into physical prototypes, hardware debugging, and real-time deployments.',
    fullDesc: 'True technical mastery is forged when components fail and code hits edge cases. Build tangible mechanisms, calibrate precision sensors, and troubleshoot systems live on stage.',
    tag: 'Mastery',
    iconName: 'Wrench',
    accent: '#FF816E'
  },
  {
    id: 'creative-thinking',
    number: '05',
    title: 'Develop Creative Thinking',
    shortDesc: 'Tackle open-ended, multi-disciplinary engineering challenges where unconventional approaches produce revolutionary results.',
    fullDesc: 'Innovation thrives at the intersection of disciplines. Learn to combine mechanical linkages, algorithmic computer vision, and user-centric industrial design into elegant holistic solutions.',
    tag: 'Creativity',
    iconName: 'Lightbulb',
    accent: '#FFB45C'
  },
  {
    id: 'competitive-challenges',
    number: '06',
    title: 'Experience Competitive Challenges',
    shortDesc: 'Thrive inside electric arenas—from high-energy Robowars arenas to high-stakes hackathons and design jury defenses.',
    fullDesc: 'Feel the electrifying energy of Asia’s largest science festival. Competing under the spotlight sharpens focus, accelerates teamwork under pressure, and leaves lasting memories of accomplishment.',
    tag: 'Excellence',
    iconName: 'Zap',
    accent: '#142A4C'
  }
];

