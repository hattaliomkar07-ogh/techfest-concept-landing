export interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technicalSpecs: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
}

export const showcaseData: ShowcaseItem[] = [
  {
    id: 'bipedal-humanoid',
    title: 'Autonomous Bipedal Robotics & Dexterous Manipulation',
    category: 'Robotics',
    description: 'Advanced dynamic locomotion platform combining real-time model predictive control (MPC) with tactile sensor feedback for navigating complex uneven terrains.',
    technicalSpecs: '24 Degrees of Freedom • High-torque brushless actuators • 1000Hz feedback loop',
    tags: ['Robotics', 'Kinematics', 'Actuators', 'Real-Time Control'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'deep-space-rover',
    title: 'Extraterrestrial Surface Exploration Rover',
    category: 'Space Exploration',
    description: 'Modular planetary exploration rover chassis with rocker-bogie suspension system, autonomous optical terrain hazard avoidance, and sample containment bay.',
    technicalSpecs: 'Rocker-Bogie 6-Wheel Drive • Multispectral Camera Mast • Solar-Hybrid Power',
    tags: ['Space', 'Aerospace', 'Autonomous Navigation', 'Suspension'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'silicon-photonics',
    title: 'Ultra-Dense Silicon Photonics & Neuromorphic Compute',
    category: 'Engineering & Computing',
    description: 'High-bandwidth, low-latency optical interconnect architectures designed to accelerate matrix calculations for artificial neural networks while drastically reducing thermal load.',
    technicalSpecs: 'Sub-nanometer waveguide precision • 100 Gbps optical channel bandwidth • CMOS compatible',
    tags: ['Hardware', 'Semiconductors', 'Optics', 'Deep Tech'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'neural-interface-ai',
    title: 'Multi-Modal Neural Decoding & Edge AI Inference',
    category: 'Artificial Intelligence',
    description: 'Compact ultra-low-power edge accelerators running quantized transformer models for real-time biosignal interpretation, anomaly detection, and assistive synthesis.',
    technicalSpecs: 'INT8 quantized engine • 4.2 TOPS/Watt efficiency • On-device secure enclave',
    tags: ['AI Accelerators', 'Edge Computing', 'Neural Networks', 'Embedded'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'sustainable-cleantech',
    title: 'Closed-Loop Atmospheric Water & Renewable Microgrids',
    category: 'Scientific Discovery',
    description: 'Decentralized clean utility system utilizing metal-organic frameworks (MOFs) powered entirely by distributed solar thermal collectors for arid environments.',
    technicalSpecs: 'Zero grid dependency • Autonomous IoT power management • Food-grade purity',
    tags: ['CleanTech', 'Sustainability', 'Renewables', 'IoT'],
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'technoholix-visuals',
    title: 'Technoholix: Science, Light & Visual Art Synthesis',
    category: 'Future Technologies & Art',
    description: 'Techfest’s hallmark night spectacle combining synchronized aerial drone swarms, high-speed kinetic projection mapping, and algorithmic laser audio design.',
    technicalSpecs: 'Sub-millisecond DMX/Art-Net sync • Multi-spectrum high-output coherent lasers',
    tags: ['Technoholix', 'Laser Engineering', 'Drone Swarm', 'Audio-Visual'],
    imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
    featured: true
  }
];

