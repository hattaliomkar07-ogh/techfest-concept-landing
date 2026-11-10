export interface InitiativeItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'National Outreach' | 'Sustainability' | 'Student Leadership' | 'Social Impact';
  description: string;
  keyPoints: string[];
  impactFocus: string;
  badge: string;
  imageUrl: string;
}

export const initiativesData: InitiativeItem[] = [
  {
    id: 'ignite',
    title: 'Ignite: Technical Club Accreditation & Ecosystem',
    subtitle: 'Uniting and empowering student-led engineering bodies across India',
    category: 'National Outreach',
    description: 'An official nationwide platform initiated by Techfest, IIT Bombay to accredit, mentor, and resource collegiate technical societies across India, providing standardized operational blueprints, expert mentorship, and inter-institutional collaboration.',
    keyPoints: [
      'Standardized structural accreditation for college technical clubs',
      'Direct mentorship tracks from IIT Bombay technical leaders',
      'Collaborative joint innovation challenges and resource sharing'
    ],
    impactFocus: 'Strengthening grassroots technical culture in hundreds of higher education institutions nationwide.',
    badge: 'Flagship Initiative',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'campus-ambassador',
    title: 'Campus Ambassador Network',
    subtitle: 'Fostering regional student leadership and STEM advocacy',
    category: 'Student Leadership',
    description: 'A pan-India student leadership bridge empowering representatives across academic institutions to foster scientific inquiry, coordinate workshops, and represent their campuses in Asia’s largest science festival.',
    keyPoints: [
      'Representing colleges and driving technical outreach regionally',
      'Leadership development and event organization experience',
      'Direct connectivity with the Techfest central organizing body'
    ],
    impactFocus: 'Connecting passionate undergraduate leaders across thousands of pin codes into one unified network.',
    badge: 'Youth Leadership',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'green-sustainability',
    title: 'Sustainability & Clean Technology Advocacy',
    subtitle: 'Championing environmental responsibility and circular innovation',
    category: 'Sustainability',
    description: 'Promoting responsible innovation through zero-waste festival initiatives, e-waste recycling collection drives, and competitions specifically tailored toward renewable micro-energy and ecological preservation.',
    keyPoints: [
      'E-waste collection awareness drives across academic campuses',
      'Highlighting student-built clean energy & circular economy prototypes',
      'Promoting environmental ethics within engineering education'
    ],
    impactFocus: 'Ensuring technological advancements actively serve ecological regeneration and social good.',
    badge: 'Eco Responsibility',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'technology-for-society',
    title: 'Assistive Tech & Social Solutions',
    subtitle: 'Engineering accessible technologies for diverse human needs',
    category: 'Social Impact',
    description: 'Bridging engineering expertise with community challenges by incentivizing student developers to engineer low-cost assistive devices, digital literacy tools, and disaster-resilient systems.',
    keyPoints: [
      'Affordable hardware prototypes for visual and mobility assistance',
      'Open-source STEM learning modules for underserved schools',
      'Mentorship from humanitarian technology experts'
    ],
    impactFocus: 'Demonstrating that the truest measure of technological progress is inclusive human empowerment.',
    badge: 'Civic Innovation',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80'
  }
];

