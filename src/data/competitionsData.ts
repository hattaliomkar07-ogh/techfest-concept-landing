export interface CompetitionItem {
  id: string;
  title: string;
  category: 'Robotics' | 'Artificial Intelligence' | 'Coding' | 'Engineering' | 'Innovation' | 'Science & Tech';
  tagline: string;
  description: string;
  details: string;
  eligibility: string;
  teamSize: string;
  format: string;
  keySkills: string[];
  imageUrl: string;
  officialRefUrl: string;
}

export const competitionsData: CompetitionItem[] = [
  {
    id: 'robowars',
    title: 'Robowars Championship',
    category: 'Robotics',
    tagline: 'The Ultimate Combat Robotics Arena',
    description: 'Custom-engineered combat robots battle inside a heavily reinforced safety arena in weight categories ranging from featherweight to heavyweight.',
    details: 'Robowars stands as Techfest’s most iconic battleground. Teams design, manufacture, and pilot high-torque kinetic weapon systems, hardened steel armor chassis, and fail-safe radio control electronics under extreme mechanical stress.',
    eligibility: 'Open to college undergraduate and postgraduate teams globally',
    teamSize: '2 to 8 Members',
    format: 'Multi-stage knockout matches inside reinforced polycarbonate cage',
    keySkills: ['Mechanical Design', 'Kinetic Weapons', 'Pneumatics & Hydraulics', 'Telemetry Control'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
    officialRefUrl: 'https://techfest.org/competitions'
  },
  {
    id: 'meshmerize',
    title: 'Meshmerize (Autonomous Maze)',
    category: 'Robotics',
    tagline: 'Autonomous Line & Dynamic Maze Navigation',
    description: 'Autonomous micro-robots race through intricate path networks and changing maze grids using onboard sensor arrays and real-time pathfinding algorithms.',
    details: 'Participants build fully autonomous mobile robots without external wireless control. The challenge tests sensor fusion, PID motor calibration, and graph search heuristics (Dijkstra, Flood Fill, A*) at high velocities.',
    eligibility: 'University and engineering college students',
    teamSize: '1 to 4 Members',
    format: 'Timed autonomous runs across preliminary and complex final grids',
    keySkills: ['Microcontroller Firmware', 'IR/ToF Sensor Fusion', 'PID Controllers', 'Graph Traversal'],
    imageUrl: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=900&q=80',
    officialRefUrl: 'https://techfest.org/competitions'
  },
  {
    id: 'ai-agent-challenge',
    title: 'Autonomous AI Agent Challenge',
    category: 'Artificial Intelligence',
    tagline: 'Multi-Modal Reasoning & Intelligent Decision Systems',
    description: 'Design autonomous AI agents capable of perceiving complex dynamic environments, reasoning through multi-step goals, and executing optimized strategies.',
    details: 'Focused on next-generation artificial intelligence, this track challenges participants to deploy reinforcement learning, retrieval-augmented neural models, and fine-tuned open-source LLMs to solve strategic simulation tasks.',
    eligibility: 'Open to all enrolled students and developers',
    teamSize: '1 to 4 Members',
    format: 'Virtual evaluation sandbox followed by on-campus benchmark finals',
    keySkills: ['Reinforcement Learning', 'PyTorch / TensorFlow', 'Agentic Workflows', 'API Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=900&q=80',
    officialRefUrl: 'https://techfest.org/competitions'
  },
  {
    id: 'international-coding',
    title: 'International Algorithmic Challenge',
    category: 'Coding',
    tagline: 'High-Concurrency & Algorithmic Problem Solving',
    description: 'A global competitive programming sprint testing data structure efficiency, asymptotic optimization, and fault-tolerant algorithmic logic under tight time constraints.',
    details: 'Bringing together top collegiate competitive programmers, the problem sets span graph theory, dynamic programming, computational geometry, and distributed hashing.',
    eligibility: 'Individual participation, open globally to students',
    teamSize: 'Individual (1 Member)',
    format: 'Online preliminary round followed by live on-campus proctored final',
    keySkills: ['Algorithms & Data Structures', 'C++ / Rust / Python', 'Time Complexity Optimization'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    officialRefUrl: 'https://techfest.org/competitions'
  },
  {
    id: 'innovatex',
    title: 'InnovateX Sustainability Challenge',
    category: 'Innovation',
    tagline: 'Real-World Solutions for Urban & Ecological Resilience',
    description: 'Transform scientific ideas into functional prototypes addressing renewable energy, zero-emission mobility, water purification, and circular economy challenges.',
    details: 'InnovateX bridges academic engineering and societal application. Student teams present working hardware prototypes and validated data to a panel of IIT Bombay faculty and industry venture mentors.',
    eligibility: 'Interdisciplinary student teams',
    teamSize: '2 to 5 Members',
    format: 'Executive abstract review, prototype demonstration, and jury defense',
    keySkills: ['Hardware Prototyping', 'Life-Cycle Analysis', 'CleanTech', 'Systems Engineering'],
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80',
    officialRefUrl: 'https://techfest.org/competitions'
  },
  {
    id: 'aero-drone-prix',
    title: 'Aero & Drone Grand Prix',
    category: 'Engineering',
    tagline: 'Aerodynamic Precision & FPV Drone Navigation',
    description: 'Custom RC unmanned aerial vehicles navigate challenging 3D obstacle courses, payload drops, and aerodynamic endurance trials.',
    details: 'Engineers design and tune multirotors and fixed-wing hybrid drones. Testing thrust-to-weight ratios, carbon fiber frame resilience, telemetry range, and piloting agility under wind resistance.',
    eligibility: 'Open to student teams from recognized academic institutions',
    teamSize: '2 to 5 Members',
    format: 'Technical inspection followed by timed qualifying laps and finals',
    keySkills: ['Aerodynamics', 'Brushless Motor Escs', 'RF Telemetry', 'FPV Avionics'],
    imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=80',
    officialRefUrl: 'https://techfest.org/competitions'
  },
  {
    id: 'cozmo-clench',
    title: 'Cozmo Clench (Gripper Robotics)',
    category: 'Robotics',
    tagline: 'Precision Gripping & Terrain Manipulation',
    description: 'Robotic rovers equipped with motorized multi-axis arms maneuver across rugged uneven platforms to pick, transport, and place payload modules.',
    details: 'Emphasizes mechanical linkage geometry, gripper gripping torque, dual-track drivetrain traction, and low-latency analog or digital control links.',
    eligibility: 'Engineering and science students',
    teamSize: '2 to 4 Members',
    format: 'Two arena rounds with scoring based on accuracy and clock duration',
    keySkills: ['Robotic Arm Kinematics', 'DC Gearmotors', 'Chassis Balancing', 'Radio Tele-ops'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    officialRefUrl: 'https://techfest.org/competitions'
  },
  {
    id: 'techfest-olympiad',
    title: 'Techfest Science & Tech Olympiad',
    category: 'Science & Tech',
    tagline: 'Foundational Scientific Inquiry & Problem Solving',
    description: 'A nationwide assessment designed to stimulate curiosity and rigorous scientific reasoning in physics, computational thinking, and applied mathematics.',
    details: 'Structured across regional and national chapters, the Olympiad offers students a platform to test conceptual clarity and analytical speed through original multi-disciplinary problems.',
    eligibility: 'High school and undergraduate junior students',
    teamSize: 'Individual (1 Member)',
    format: 'National proctored examination followed by top-ranker masterclass at IIT Bombay',
    keySkills: ['Theoretical Physics', 'Calculus', 'Logical Reasoning', 'Scientific Method'],
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=900&q=80',
    officialRefUrl: 'https://techfest.org/competitions'
  }
];

