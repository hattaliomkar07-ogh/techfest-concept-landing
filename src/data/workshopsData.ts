export interface WorkshopItem {
  id: string;
  title: string;
  domain: string;
  badge: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  curriculum: string[];
  takeaways: string[];
  prerequisites: string;
  iconName: string;
  accentColor: string;
}

export const workshopsData: WorkshopItem[] = [
  {
    id: 'generative-ai-agents',
    title: 'Generative AI & Autonomous Agent Architectures',
    domain: 'Artificial Intelligence',
    badge: 'Trending Domain',
    duration: '2 Days Hands-On Intensive',
    level: 'Intermediate',
    description: 'Master large language model orchestration, retrieval-augmented generation (RAG) pipelines, and autonomous agent loops using industry-standard open frameworks.',
    curriculum: [
      'Foundations of LLMs, Tokenization & Attention Mechanisms',
      'Vector Databases, Semantic Embeddings & Dense Retrieval',
      'Constructing Production RAG Pipelines with LangChain & LlamaIndex',
      'Autonomous Multi-Agent Systems & Tool-Calling Execution'
    ],
    takeaways: [
      'Build and deploy a functional custom RAG agent application',
      'Certificate of Workshop Completion affiliated with Techfest, IIT Bombay',
      'Access to curated code repositories, datasets, and API sandbox credits'
    ],
    prerequisites: 'Basic familiarity with Python programming and REST APIs',
    iconName: 'Cpu',
    accentColor: '#315EFF'
  },
  {
    id: 'data-science-analytics',
    title: 'Data Science & High-Throughput Analytics',
    domain: 'Data Science',
    badge: 'Industry Essential',
    duration: '2 Days Masterclass',
    level: 'Beginner',
    description: 'Extract actionable intelligence from large-scale multi-variate datasets through exploratory statistics, feature engineering, and predictive machine learning models.',
    curriculum: [
      'Exploratory Data Analysis using Pandas, NumPy & Seaborn',
      'Feature Engineering, Imputation & Outlier Detection',
      'Supervised & Unsupervised Machine Learning Models (Scikit-Learn)',
      'Model Evaluation Metrics, Cross-Validation & Production Pipelines'
    ],
    takeaways: [
      'End-to-end data processing workflow for real-world business cases',
      'Verified Techfest workshop credential',
      'Complete portfolio-ready predictive modeling project'
    ],
    prerequisites: 'Foundational mathematics and basic scripting experience',
    iconName: 'BarChart3',
    accentColor: '#8064FF'
  },
  {
    id: 'robotics-ros2-iot',
    title: 'Autonomous Robotics with ROS2 & Embedded IoT',
    domain: 'Robotics',
    badge: 'Hardware & Systems',
    duration: '2 Days Lab Bootcamp',
    level: 'Intermediate',
    description: 'Bridge hardware microcontrollers with high-level autonomy. Learn ROS2 node communication, sensor telemetry over serial/I2C, and motor drive controllers.',
    curriculum: [
      'Microcontroller Architectures (ESP32 / ARM Cortex)',
      'ROS2 Nodes, Topics, Services, and Publisher/Subscriber Models',
      'Sensor Integration: Ultrasonic, IMU, LiDAR & Encoder Feedback',
      'Building Closed-Loop Differential Drive Odometry and Navigation'
    ],
    takeaways: [
      'Hands-on firmware flashed onto real hardware development boards',
      'Practical foundation for competitive robotics (Robowars / Maze solving)',
      'IIT Bombay Techfest workshop certification'
    ],
    prerequisites: 'Basic knowledge of C/C++ or Python and electronics fundamentals',
    iconName: 'Bot',
    accentColor: '#45C6E8'
  },
  {
    id: 'cloud-devops-cybersecurity',
    title: 'Cloud Architecture & Cyber Defense Engineering',
    domain: 'Emerging Technologies',
    badge: 'High Demand',
    duration: '2 Days Technical Track',
    level: 'Intermediate',
    description: 'Explore modern cloud infrastructure, containerized deployments with Docker and Kubernetes, and proactive defensive security protocols for distributed web services.',
    curriculum: [
      'Containerization Architecture & Multi-Stage Docker Builds',
      'Kubernetes Cluster Orchestration & Ingress Traffic Management',
      'Web Application Vulnerability Analysis (OWASP Top 10)',
      'Zero-Trust Network Configurations & Secure Secret Storage'
    ],
    takeaways: [
      'Hands-on containerized multi-tier application deployment',
      'Security audit and penetration testing methodology',
      'Official Techfest workshop certificate'
    ],
    prerequisites: 'Familiarity with terminal commands and client-server concepts',
    iconName: 'ShieldCheck',
    accentColor: '#142A4C'
  },
  {
    id: 'fullstack-modern-web',
    title: 'High-Performance Full-Stack & Microservices',
    domain: 'Programming',
    badge: 'Engineering Core',
    duration: '2 Days Immersive Sprint',
    level: 'Intermediate',
    description: 'Design and deploy type-safe, ultra-responsive web applications using TypeScript, Next.js, distributed databases, and WebSocket event streams.',
    curriculum: [
      'End-to-End Type Safety with TypeScript and Modern React',
      'Server-Side Rendering, Static Generation & Edge Computing',
      'Relational Schema Design & Query Optimization (PostgreSQL)',
      'Real-Time WebSockets & Message Queue Foundations'
    ],
    takeaways: [
      'Live deployment of a full-stack real-time collaboration application',
      'Production-grade best practices for modern web development',
      'Techfest, IIT Bombay workshop certificate'
    ],
    prerequisites: 'Basic knowledge of HTML, CSS, and modern JavaScript syntax',
    iconName: 'Code2',
    accentColor: '#FF816E'
  },
  {
    id: 'product-innovation-uiux',
    title: 'Digital Product Design, UI/UX & Design Systems',
    domain: 'Innovation & Design',
    badge: 'Creative Tech',
    duration: '2 Days Creative Studio',
    level: 'Beginner',
    description: 'Synthesize user research, visual hierarchy, interaction principles, and scalable design tokens to craft cohesive digital product experiences.',
    curriculum: [
      'Human-Centered Design Thinking & Rapid Problem Framing',
      'Information Architecture, User Journeys & Wireframing',
      'Typography, Color Science & Scalable Component Design Systems',
      'High-Fidelity Interactive Prototyping & Usability Evaluation'
    ],
    takeaways: [
      'Complete interactive product prototype case study',
      'Design systems toolkit ready for production implementation',
      'Techfest workshop credential'
    ],
    prerequisites: 'No prior design tool experience required; open to all domains',
    iconName: 'Compass',
    accentColor: '#FFB45C'
  }
];

