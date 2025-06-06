"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ChevronDown, ChevronUp, Download, Info, ExternalLink } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { resources } from "@/lib/resources-data"

// Update the learning plan type to include resources
type LearningPlanItem = {
  skill: string
  category: string
  section: string
  level: number
  priority: string
  roles: string
  resources: Array<{
    title: string
    provider: string
    url: string
    free: boolean
  }>
}

export default function TechnicalSkillsInventory() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [selectedTab, setSelectedTab] = useState("core-technical")
  const componentRef = useRef<HTMLDivElement>(null)

  const toggleCategory = (category: string) => {
    if (openCategory === category) {
      setOpenCategory(null)
    } else {
      setOpenCategory(category)
    }
  }

  const skillCategories = {
    "core-technical": [
      {
        category: "Frontend Development",
        skills: [
          {
            name: "React.js",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "JavaScript library for building user interfaces with component-based architecture. Example: Creating reusable UI components like navigation bars, forms, and interactive elements.",
          },
          {
            name: "JavaScript/TypeScript",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Programming languages for web development. JavaScript is the core language, while TypeScript adds static typing. Example: Writing functions to handle user interactions or data processing.",
          },
          {
            name: "HTML/CSS",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Markup and styling languages for web pages. Example: Creating page layouts and styling elements with responsive design principles.",
          },
          {
            name: "Responsive Design",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Creating websites that work well on all devices and screen sizes. Example: Using media queries to adapt layouts from desktop to mobile.",
          },
          {
            name: "Accessibility (WCAG)",
            level: 0,
            required: [1, 2, 3, 5],
            description:
              "Ensuring digital content is usable by people with disabilities. Example: Adding proper ARIA labels, ensuring keyboard navigation, and maintaining sufficient color contrast.",
          },
          {
            name: "State Management (Redux, Context)",
            level: 0,
            required: [1, 3, 4, 5],
            description:
              "Managing application state across components. Example: Using Redux to manage user authentication state across an entire application.",
          },
          {
            name: "Frontend Testing",
            level: 0,
            required: [1, 2, 3, 4],
            description:
              "Testing UI components and user interactions. Example: Writing Jest tests to verify that a form validation works correctly.",
          },
        ],
      },
      {
        category: "Backend Development",
        skills: [
          {
            name: "Node.js",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "JavaScript runtime for server-side applications. Example: Building RESTful APIs or server-rendered web applications.",
          },
          {
            name: "API Development (REST, GraphQL)",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Creating interfaces for applications to communicate. Example: Designing endpoints for user authentication or data retrieval.",
          },
          {
            name: "Database Design",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Structuring databases for efficient data storage and retrieval. Example: Creating schemas for user profiles with appropriate relationships.",
          },
          {
            name: "SQL",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Language for managing relational databases. Example: Writing queries to join multiple tables for complex data reporting.",
          },
          {
            name: "NoSQL",
            level: 0,
            required: [1, 3, 4, 5],
            description:
              "Non-relational database systems like MongoDB or Firebase. Example: Storing hierarchical data for a content management system.",
          },
          {
            name: "Authentication/Authorization",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Verifying user identity and permissions. Example: Implementing JWT-based authentication with role-based access control.",
          },
          {
            name: "Backend Testing",
            level: 0,
            required: [1, 2, 3, 4],
            description:
              "Testing server-side code and APIs. Example: Writing integration tests for database operations or API endpoints.",
          },
          {
            name: "Microservices Architecture",
            level: 0,
            required: [1, 4, 5],
            description:
              "Building applications as a collection of small, independent services. Example: Separating user authentication, content management, and payment processing into distinct services.",
          },
        ],
      },
      {
        category: "DevOps & Infrastructure",
        skills: [
          {
            name: "CI/CD Pipelines",
            level: 0,
            required: [1, 2],
            description:
              "Automating build, test, and deployment processes. Example: Setting up GitHub Actions to automatically test and deploy code when changes are pushed.",
          },
          {
            name: "Cloud Services (AWS, Azure, GCP)",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Using cloud platforms for hosting and services. Example: Deploying applications on AWS EC2 or using managed services like S3 for storage.",
          },
          {
            name: "Containerization (Docker)",
            level: 0,
            required: [1, 2],
            description:
              "Packaging applications with dependencies in containers. Example: Creating Docker images for consistent deployment across environments.",
          },
          {
            name: "Infrastructure as Code",
            level: 0,
            required: [1],
            description:
              "Managing infrastructure through code (e.g., Terraform, CloudFormation). Example: Defining AWS resources in Terraform to create reproducible environments.",
          },
          {
            name: "Monitoring & Logging",
            level: 0,
            required: [1, 2, 4],
            description:
              "Tracking application performance and errors. Example: Setting up Prometheus for metrics collection and Grafana for visualization.",
          },
          {
            name: "Security Best Practices",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Implementing security measures in applications and infrastructure. Example: Conducting security audits, implementing HTTPS, and managing secrets securely.",
          },
        ],
      },
      {
        category: "Mobile Development",
        skills: [
          {
            name: "React Native",
            level: 0,
            required: [3, 5],
            description:
              "Framework for building native mobile apps with React. Example: Creating a cross-platform mobile app that works on both iOS and Android.",
          },
          {
            name: "Progressive Web Apps",
            level: 0,
            required: [2, 3, 5],
            description:
              "Web apps that provide native-like experiences. Example: Building a web app that works offline and can be installed on home screens.",
          },
          {
            name: "Mobile UI/UX",
            level: 0,
            required: [3, 5],
            description:
              "Designing interfaces for mobile devices. Example: Creating touch-friendly interfaces with appropriate tap targets and gestures.",
          },
          {
            name: "Offline Functionality",
            level: 0,
            required: [2, 3],
            description:
              "Enabling apps to work without internet connection. Example: Implementing local storage and synchronization for offline data access.",
          },
        ],
      },
      {
        category: "DevOps",
        skills: [
          {
            name: "DevOps Practices",
            level: 0,
            required: [1, 2],
            description:
              "Combining development and operations for faster delivery. Example: Implementing continuous integration, automated testing, and infrastructure as code.",
          },
          {
            name: "CI/CD with GitHub",
            level: 0,
            required: [1, 2],
            description:
              "Using GitHub Actions for continuous integration and deployment. Example: Setting up workflows to automatically test and deploy code on push.",
          },
          {
            name: "Jenkins",
            level: 0,
            required: [1, 2],
            description:
              "Open-source automation server for CI/CD. Example: Creating pipelines for building, testing, and deploying applications.",
          },
        ],
      },
      {
        category: "Kubernetes",
        skills: [
          {
            name: "Kubernetes Basics",
            level: 0,
            required: [1, 2],
            description:
              "Container orchestration platform fundamentals. Example: Deploying applications in pods and managing them with deployments.",
          },
          {
            name: "Kubernetes Administration",
            level: 0,
            required: [1],
            description:
              "Managing Kubernetes clusters. Example: Setting up and maintaining clusters, managing namespaces, and implementing security policies.",
          },
          {
            name: "Kubernetes Deployment Strategies",
            level: 0,
            required: [1, 2],
            description:
              "Techniques for deploying applications to Kubernetes. Example: Implementing blue-green deployments or canary releases.",
          },
        ],
      },
      {
        category: "Docker",
        skills: [
          {
            name: "Docker Fundamentals",
            level: 0,
            required: [1, 2],
            description:
              "Basics of containerization with Docker. Example: Creating Dockerfiles and building images for applications.",
          },
          {
            name: "Docker Compose",
            level: 0,
            required: [1, 2],
            description:
              "Tool for defining multi-container Docker applications. Example: Setting up a development environment with multiple services.",
          },
          {
            name: "Docker Security",
            level: 0,
            required: [1, 2, 4],
            description:
              "Securing Docker containers and images. Example: Implementing least privilege principles and scanning images for vulnerabilities.",
          },
        ],
      },
      {
        category: "Infrastructure as Code",
        skills: [
          {
            name: "Terraform",
            level: 0,
            required: [1, 2],
            description:
              "Tool for building and managing infrastructure as code. Example: Defining AWS resources like EC2 instances, S3 buckets, and networking components.",
          },
          {
            name: "CloudFormation",
            level: 0,
            required: [1],
            description:
              "AWS service for infrastructure as code. Example: Creating templates to provision and manage AWS resources.",
          },
          {
            name: "Ansible",
            level: 0,
            required: [1, 2],
            description:
              "Automation tool for configuration management. Example: Automating server configuration and application deployment.",
          },
        ],
      },
    ],
    "domain-specific": [
      {
        category: "EdTech Specific",
        skills: [
          {
            name: "Learning Management Systems",
            level: 0,
            required: [3],
            description:
              "Platforms for delivering educational content and tracking progress. Example: Implementing features like course enrollment, content delivery, and progress tracking.",
          },
          {
            name: "Educational Content Standards",
            level: 0,
            required: [3],
            description:
              "Guidelines for educational content (e.g., SCORM, xAPI). Example: Creating content that can be tracked across different learning platforms.",
          },
          {
            name: "Adaptive Learning Algorithms",
            level: 0,
            required: [3],
            description:
              "Systems that adjust content based on learner performance. Example: Developing algorithms that present easier or harder questions based on previous answers.",
          },
          {
            name: "Student Data Privacy",
            level: 0,
            required: [3],
            description:
              "Protecting student information (FERPA, COPPA). Example: Implementing data protection measures for student records and activity data.",
          },
          {
            name: "Accessibility for Learning",
            level: 0,
            required: [3],
            description:
              "Making educational content accessible to all learners. Example: Ensuring content works with screen readers and providing alternative formats.",
          },
        ],
      },
      {
        category: "Fintech Specific",
        skills: [
          {
            name: "Payment Processing",
            level: 0,
            required: [4],
            description:
              "Handling financial transactions securely. Example: Integrating with payment gateways like Stripe or PayPal for processing payments.",
          },
          {
            name: "Financial Data Security",
            level: 0,
            required: [4],
            description:
              "Protecting sensitive financial information. Example: Implementing encryption and compliance with standards like PCI DSS.",
          },
          {
            name: "Banking APIs",
            level: 0,
            required: [4],
            description:
              "Interfaces for banking services. Example: Integrating with Plaid or similar services to access account information.",
          },
          {
            name: "Regulatory Compliance",
            level: 0,
            required: [4],
            description:
              "Following financial regulations (KYC, AML). Example: Implementing identity verification processes for new users.",
          },
          {
            name: "Blockchain/Distributed Ledger",
            level: 0,
            required: [4],
            description:
              "Decentralized record-keeping technology. Example: Building applications on Ethereum or other blockchain platforms.",
          },
        ],
      },
      {
        category: "Civic Tech Specific",
        skills: [
          {
            name: "Open Data Standards",
            level: 0,
            required: [2],
            description:
              "Formats and practices for sharing public data. Example: Publishing data in standardized formats like CSV or JSON with clear documentation.",
          },
          {
            name: "Government Digital Services",
            level: 0,
            required: [2],
            description:
              "Online services provided by government entities. Example: Building user-friendly interfaces for accessing public services.",
          },
          {
            name: "Public Sector Compliance",
            level: 0,
            required: [2],
            description:
              "Following government regulations and standards. Example: Ensuring accessibility compliance with Section 508 requirements.",
          },
          {
            name: "Civic Engagement Platforms",
            level: 0,
            required: [2],
            description:
              "Tools for public participation in governance. Example: Creating platforms for community feedback or participatory budgeting.",
          },
        ],
      },
      {
        category: "Social Impact Measurement",
        skills: [
          {
            name: "Impact Metrics & KPIs",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Measuring social outcomes of programs or products. Example: Developing frameworks to track how technology interventions improve community outcomes.",
          },
          {
            name: "Data Visualization",
            level: 0,
            required: [1, 2, 3, 5],
            description:
              "Presenting data in visual formats. Example: Creating dashboards to show program impact across different demographics.",
          },
          {
            name: "Survey & Feedback Systems",
            level: 0,
            required: [1, 3, 5],
            description:
              "Collecting user input systematically. Example: Designing and implementing feedback collection tools with analysis capabilities.",
          },
          {
            name: "Qualitative Data Analysis",
            level: 0,
            required: [1, 5],
            description:
              "Analyzing non-numerical data for insights. Example: Processing interview transcripts or open-ended survey responses to identify themes.",
          },
        ],
      },
      {
        category: "Cloud Services",
        skills: [
          {
            name: "AWS Services",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Amazon Web Services cloud platform. Example: Using services like EC2 for computing, S3 for storage, and Lambda for serverless functions.",
          },
          {
            name: "Azure Services",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Microsoft's cloud platform. Example: Deploying applications to App Service or using Azure Functions for serverless computing.",
          },
          {
            name: "Google Cloud Platform",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Google's cloud services. Example: Using GCP for machine learning with TensorFlow or hosting applications on Google Kubernetes Engine.",
          },
        ],
      },
      {
        category: "Cybersecurity",
        skills: [
          {
            name: "Security Fundamentals",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Basic principles of information security. Example: Implementing authentication, authorization, and secure data handling practices.",
          },
          {
            name: "Vulnerability Assessment",
            level: 0,
            required: [1, 2, 4],
            description:
              "Identifying security weaknesses in systems. Example: Conducting security audits and penetration testing.",
          },
          {
            name: "Security Compliance",
            level: 0,
            required: [1, 2, 3, 4],
            description:
              "Following security standards and regulations. Example: Ensuring systems meet requirements like GDPR, HIPAA, or SOC 2.",
          },
        ],
      },
      {
        category: "FinOps",
        skills: [
          {
            name: "Cloud Cost Management",
            level: 0,
            required: [1, 2, 4],
            description:
              "Optimizing cloud spending. Example: Analyzing usage patterns to identify cost-saving opportunities and implementing resource tagging.",
          },
          {
            name: "Financial Governance",
            level: 0,
            required: [1, 4],
            description:
              "Establishing policies for technology spending. Example: Creating approval processes for new cloud resources and setting budget alerts.",
          },
          {
            name: "Cost Optimization",
            level: 0,
            required: [1, 2, 4],
            description:
              "Reducing unnecessary technology expenses. Example: Implementing auto-scaling to match resource allocation with actual demand.",
          },
        ],
      },
    ],
    "leadership-management": [
      {
        category: "Technical Leadership",
        skills: [
          {
            name: "Technical Architecture Design",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Designing overall system structure. Example: Creating architecture diagrams showing how different components interact.",
          },
          {
            name: "System Design & Scalability",
            level: 0,
            required: [1, 3, 4, 5],
            description:
              "Building systems that can grow with demand. Example: Designing database sharding strategies or implementing caching layers.",
          },
          {
            name: "Technical Documentation",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Creating clear records of technical decisions and systems. Example: Writing architecture decision records (ADRs) or system documentation.",
          },
          {
            name: "Code Review Processes",
            level: 0,
            required: [1, 2, 3, 4],
            description:
              "Establishing practices for reviewing code. Example: Setting up pull request templates and review guidelines for teams.",
          },
          {
            name: "Technical Debt Management",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Handling accumulated code and design issues. Example: Prioritizing refactoring efforts and tracking technical debt.",
          },
        ],
      },
      {
        category: "Team Management",
        skills: [
          {
            name: "Agile Methodologies",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Iterative development approaches (Scrum, Kanban). Example: Facilitating sprint planning, daily standups, and retrospectives.",
          },
          {
            name: "Technical Mentorship",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Guiding less experienced team members. Example: Conducting code reviews with educational feedback or pair programming sessions.",
          },
          {
            name: "Hiring & Team Building",
            level: 0,
            required: [1, 2, 4, 5],
            description:
              "Growing effective technical teams. Example: Creating interview processes that assess both technical skills and team fit.",
          },
          {
            name: "Performance Management",
            level: 0,
            required: [1, 2, 4, 5],
            description:
              "Evaluating and improving team member performance. Example: Conducting regular 1:1s and providing constructive feedback.",
          },
          {
            name: "Remote Team Management",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Leading distributed teams effectively. Example: Establishing communication protocols and fostering remote collaboration.",
          },
        ],
      },
      {
        category: "Product & Strategy",
        skills: [
          {
            name: "Product Roadmapping",
            level: 0,
            required: [1, 5],
            description:
              "Planning product evolution over time. Example: Creating prioritized feature roadmaps aligned with business goals.",
          },
          {
            name: "User Research",
            level: 0,
            required: [1, 2, 3, 5],
            description:
              "Understanding user needs and behaviors. Example: Conducting user interviews or usability testing sessions.",
          },
          {
            name: "Stakeholder Management",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Working with various interested parties. Example: Communicating technical constraints to non-technical stakeholders.",
          },
          {
            name: "Budget Management",
            level: 0,
            required: [1, 2, 5],
            description:
              "Handling financial resources for projects. Example: Estimating costs for new features or infrastructure changes.",
          },
          {
            name: "Technical Strategy",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Long-term planning for technology direction. Example: Creating a multi-year plan for platform evolution or technology adoption.",
          },
        ],
      },
      {
        category: "Program & Project Management",
        skills: [
          {
            name: "Project Planning",
            level: 0,
            required: [1, 2, 5],
            description:
              "Organizing work into manageable projects. Example: Breaking down initiatives into tasks, estimating effort, and creating timelines.",
          },
          {
            name: "Agile Project Management",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Managing projects using agile methodologies. Example: Facilitating sprint planning, managing backlogs, and tracking velocity.",
          },
          {
            name: "Program Management",
            level: 0,
            required: [1, 5],
            description:
              "Coordinating multiple related projects. Example: Managing dependencies between projects and aligning them with strategic goals.",
          },
          {
            name: "Risk Management",
            level: 0,
            required: [1, 2, 4, 5],
            description:
              "Identifying and mitigating potential issues. Example: Creating risk registers and developing contingency plans.",
          },
        ],
      },
      {
        category: "Learning & Development",
        skills: [
          {
            name: "Training Program Design",
            level: 0,
            required: [1, 3],
            description:
              "Creating effective learning experiences. Example: Developing technical onboarding programs or skill development workshops.",
          },
          {
            name: "Instructional Design",
            level: 0,
            required: [3],
            description:
              "Structuring learning materials for maximum effectiveness. Example: Creating learning objectives and designing activities that reinforce concepts.",
          },
          {
            name: "Learning Assessment",
            level: 0,
            required: [3],
            description:
              "Evaluating learning outcomes. Example: Designing knowledge checks or practical assessments to measure skill acquisition.",
          },
          {
            name: "Adult Learning Principles",
            level: 0,
            required: [1, 3],
            description:
              "Understanding how adults learn effectively. Example: Applying concepts like experiential learning and immediate application in training.",
          },
        ],
      },
    ],
    "emerging-tech": [
      {
        category: "AI & Machine Learning",
        skills: [
          {
            name: "ML Fundamentals",
            level: 0,
            required: [1, 3, 5],
            description:
              "Basic concepts of machine learning. Example: Understanding supervised vs. unsupervised learning and common algorithms.",
          },
          {
            name: "NLP Applications",
            level: 0,
            required: [3, 5],
            description:
              "Natural language processing for text analysis. Example: Building chatbots or sentiment analysis systems.",
          },
          {
            name: "Responsible AI",
            level: 0,
            required: [1, 3, 5],
            description:
              "Ethical considerations in AI development. Example: Addressing bias in training data or ensuring transparent decision-making.",
          },
          {
            name: "AI Integration",
            level: 0,
            required: [1, 3, 5],
            description:
              "Incorporating AI into applications. Example: Using pre-trained models via APIs or integrating custom models.",
          },
          {
            name: "Deep Learning",
            level: 0,
            required: [3, 5],
            description:
              "Neural network-based machine learning. Example: Using frameworks like TensorFlow or PyTorch for image recognition or text generation.",
          },
        ],
      },
      {
        category: "Data Science",
        skills: [
          {
            name: "Data Analysis",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Extracting insights from data. Example: Using Python with pandas to clean, analyze, and interpret datasets.",
          },
          {
            name: "Data Visualization",
            level: 0,
            required: [1, 2, 3, 4, 5],
            description:
              "Creating visual representations of data. Example: Building interactive dashboards with tools like D3.js or Tableau.",
          },
          {
            name: "Big Data Technologies",
            level: 0,
            required: [1, 4],
            description:
              "Tools for processing large datasets. Example: Using Hadoop, Spark, or other distributed computing frameworks.",
          },
          {
            name: "Predictive Analytics",
            level: 0,
            required: [3, 4, 5],
            description:
              "Using data to forecast future outcomes. Example: Building models to predict customer churn or demand forecasting.",
          },
        ],
      },
      {
        category: "Other Emerging Technologies",
        skills: [
          {
            name: "IoT Applications",
            level: 0,
            required: [2, 3],
            description:
              "Internet of Things development. Example: Creating systems that collect and process data from connected devices.",
          },
          {
            name: "AR/VR Development",
            level: 0,
            required: [3],
            description:
              "Augmented and virtual reality applications. Example: Building immersive educational experiences or training simulations.",
          },
          {
            name: "Voice Interfaces",
            level: 0,
            required: [2, 3, 5],
            description:
              "Voice-controlled application interfaces. Example: Developing skills for Alexa or Google Assistant.",
          },
          {
            name: "Blockchain Applications",
            level: 0,
            required: [4],
            description:
              "Decentralized applications using blockchain. Example: Creating smart contracts or decentralized finance applications.",
          },
        ],
      },
    ],
  }

  // First, add useState for the skillCategories
  const [skillCategoriesState, setSkillCategoriesState] = useState(skillCategories)

  // Replace the updateSkillLevel function with this working version
  const updateSkillLevel = (categoryIndex: number, skillIndex: number, level: number, tab: string) => {
    const updatedCategories = JSON.parse(JSON.stringify(skillCategoriesState))
    updatedCategories[tab][categoryIndex].skills[skillIndex].level = level
    setSkillCategoriesState(updatedCategories)
  }

  const getSkillLevelLabel = (level: number) => {
    switch (level) {
      case 0:
        return "Not familiar"
      case 1:
        return "Basic knowledge"
      case 2:
        return "Practical experience"
      case 3:
        return "Advanced proficiency"
      case 4:
        return "Expert level"
      default:
        return "Not rated"
    }
  }

  const getRequiredRoleNames = (roleNumbers: number[]) => {
    const roleMap: { [key: number]: string } = {
      1: "Social Impact Tech Director",
      2: "Civic Tech Eng. Manager",
      3: "EdTech Platform Architect",
      4: "Fintech Inclusion Leader",
      5: "Tech for Good Product Director",
    }

    return roleNumbers.map((num) => roleMap[num]).join(", ")
  }

  // Update the renderSkillLevel function to use the state version
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex items-center gap-2">
        <Progress value={level * 25} className="h-2 w-[100px]" />
        <span className="text-xs text-muted-foreground w-[120px]">{getSkillLevelLabel(level)}</span>
      </div>
    )
  }

  // Update the renderSkillLevelSelector function to use the state version
  const renderSkillLevelSelector = (category: number, index: number, currentLevel: number, tab: string) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((level) => (
          <Button
            key={level}
            variant={currentLevel === level ? "default" : "outline"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => updateSkillLevel(category, index, level, tab)}
          >
            {level}
          </Button>
        ))}
      </div>
    )
  }

  // Add a learning plan generator function and state
  const [learningPlan, setLearningPlan] = useState<any[]>([])
  const [showLearningPlan, setShowLearningPlan] = useState(false)

  // Add a function to find matching resources for a skill
  const findResourcesForSkill = (skillName: string, category: string) => {
    const matchingResources: Array<{
      title: string
      provider: string
      url: string
      free: boolean
    }> = []

    // Map of skill names to related resource categories
    const skillToResourceMap: Record<string, string[]> = {
      // Frontend
      "React.js": ["Frontend Development"],
      "JavaScript/TypeScript": ["Frontend Development"],
      "HTML/CSS": ["Frontend Development"],
      "Responsive Design": ["Frontend Development"],
      "Accessibility (WCAG)": ["Frontend Development", "Accessibility in Educational Technology"],
      "State Management (Redux, Context)": ["Frontend Development"],
      "Frontend Testing": ["Frontend Development"],

      // Backend
      "Node.js": ["Backend Development"],
      "API Development (REST, GraphQL)": ["Backend Development"],
      "Database Design": ["Backend Development"],
      SQL: ["Backend Development"],
      NoSQL: ["Backend Development"],
      "Authentication/Authorization": ["Backend Development"],
      "Backend Testing": ["Backend Development"],
      "Microservices Architecture": ["Backend Development"],

      // DevOps
      "CI/CD Pipelines": ["DevOps", "CI/CD with GitHub"],
      "Cloud Services (AWS, Azure, GCP)": ["Cloud Services"],
      "Containerization (Docker)": ["Docker"],
      "Infrastructure as Code": ["Infrastructure as Code"],
      "Monitoring & Logging": ["DevOps"],
      "Security Best Practices": ["Cybersecurity"],

      // Mobile
      "React Native": ["Frontend Development"],
      "Progressive Web Apps": ["Frontend Development"],
      "Mobile UI/UX": ["Frontend Development"],
      "Offline Functionality": ["Frontend Development"],

      // EdTech
      "Learning Management Systems": ["EdTech Specific"],
      "Educational Content Standards": ["EdTech Specific"],
      "Adaptive Learning Algorithms": ["EdTech Specific", "AI & Machine Learning"],
      "Student Data Privacy": ["EdTech Specific"],
      "Accessibility for Learning": ["EdTech Specific", "Accessibility in Educational Technology"],

      // Fintech
      "Payment Processing": ["Fintech Specific"],
      "Financial Data Security": ["Fintech Specific", "Cybersecurity"],
      "Banking APIs": ["Fintech Specific"],
      "Regulatory Compliance": ["Fintech Specific"],
      "Blockchain/Distributed Ledger": ["Fintech Specific", "Other Emerging Technologies"],

      // Civic Tech
      "Open Data Standards": ["Civic Tech Specific"],
      "Government Digital Services": ["Civic Tech Specific"],
      "Public Sector Compliance": ["Civic Tech Specific"],
      "Civic Engagement Platforms": ["Civic Tech Specific"],

      // Social Impact
      "Impact Metrics & KPIs": ["Social Impact Measurement"],
      "Data Visualization": ["Data Science", "Data Visualization"],
      "Survey & Feedback Systems": ["Social Impact Measurement"],
      "Qualitative Data Analysis": ["Social Impact Measurement", "Data Science"],

      // Technical Leadership
      "Technical Architecture Design": ["Technical Leadership", "Software Architecture & Design"],
      "System Design & Scalability": ["Technical Leadership"],
      "Technical Documentation": ["Technical Leadership"],
      "Code Review Processes": ["Technical Leadership"],
      "Technical Debt Management": ["Technical Leadership"],

      // Team Management
      "Agile Methodologies": ["Team Management", "Agile Development"],
      "Technical Mentorship": ["Team Management"],
      "Hiring & Team Building": ["Team Management"],
      "Performance Management": ["Team Management"],
      "Remote Team Management": ["Team Management"],

      // Product & Strategy
      "Product Roadmapping": ["Product & Strategy"],
      "User Research": ["Product & Strategy"],
      "Stakeholder Management": ["Product & Strategy"],
      "Budget Management": ["Product & Strategy"],
      "Technical Strategy": ["Product & Strategy"],

      // AI & ML
      "ML Fundamentals": ["AI & Machine Learning"],
      "NLP Applications": ["AI & Machine Learning"],
      "Responsible AI": ["AI & Machine Learning"],
      "AI Integration": ["AI & Machine Learning"],
      "Deep Learning": ["AI & Machine Learning"],

      // Data Science
      "Data Analysis": ["Data Science"],
      "Data Visualization": ["Data Science", "Data Visualization"],
      "Big Data Technologies": ["Data Science"],
      "Predictive Analytics": ["Data Science", "AI & Machine Learning"],

      // Other Emerging Tech
      "IoT Applications": ["Other Emerging Technologies"],
      "AR/VR Development": ["Other Emerging Technologies"],
      "Voice Interfaces": ["Other Emerging Technologies"],
      "Blockchain Applications": ["Other Emerging Technologies"],

      // Cloud
      "AWS Services": ["Cloud Services"],
      "Azure Services": ["Cloud Services"],
      "Google Cloud Platform": ["Cloud Services"],

      // Kubernetes
      "Kubernetes Basics": ["Kubernetes"],
      "Kubernetes Administration": ["Kubernetes"],
      "Kubernetes Deployment Strategies": ["Kubernetes"],

      // Docker
      "Docker Fundamentals": ["Docker"],
      "Docker Compose": ["Docker"],
      "Docker Security": ["Docker", "Cybersecurity"],

      // Program & Project Management
      "Project Planning": ["Program & Project Management"],
      "Agile Project Management": ["Program & Project Management", "Agile Development"],
      "Program Management": ["Program & Project Management"],
      "Risk Management": ["Program & Project Management"],

      // Learning & Development
      "Training Program Design": ["Learning & Development"],
      "Instructional Design": ["Learning & Development"],
      "Learning Assessment": ["Learning & Development"],
      "Adult Learning Principles": ["Learning & Development"],
    }

    // Get resource categories that match this skill
    const resourceCategories = skillToResourceMap[skillName] || [category]

    // Search through all resources for matching categories
    Object.keys(resources).forEach((sectionKey) => {
      const section = resources[sectionKey as keyof typeof resources]
      section.forEach((categoryGroup) => {
        if (resourceCategories.includes(categoryGroup.category)) {
          // Add free resources first
          categoryGroup.courses.forEach((course) => {
            if (course.free) {
              matchingResources.push({
                title: course.title,
                provider: course.provider,
                url: course.url,
                free: true,
              })
            } else if (course.alternatives) {
              // Add free alternatives
              course.alternatives.forEach((alt) => {
                if (alt.free) {
                  matchingResources.push({
                    title: alt.title,
                    provider: alt.provider,
                    url: alt.url,
                    free: true,
                  })
                }
              })
            }
          })
        }
      })
    })

    // Limit to 3 resources per skill to avoid overwhelming
    return matchingResources.slice(0, 3)
  }

  // Update the generateLearningPlan function to include resources
  const generateLearningPlan = () => {
    const plan: LearningPlanItem[] = []

    // Find skills with low ratings (0-1) that are required for roles
    Object.keys(skillCategoriesState).forEach((tabKey) => {
      skillCategoriesState[tabKey as keyof typeof skillCategoriesState].forEach((category) => {
        category.skills.forEach((skill) => {
          if (skill.level <= 1 && skill.required.length > 0) {
            // Find matching resources for this skill
            const matchingResources = findResourcesForSkill(skill.name, category.category)

            plan.push({
              skill: skill.name,
              category: category.category,
              section: tabKey,
              level: skill.level,
              priority: skill.required.length >= 3 ? "High" : "Medium",
              roles: getRequiredRoleNames(skill.required),
              resources: matchingResources,
            })
          }
        })
      })
    })

    // Sort by priority (number of roles requiring it)
    plan.sort((a, b) => (b.priority === "High" ? 1 : -1))

    setLearningPlan(plan)
    setShowLearningPlan(true)
  }

  // Update the LearningPlanModal component to display resources
  // Replace the existing LearningPlanModal with this updated version
  const LearningPlanModal = () => {
    if (!showLearningPlan) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-5xl w-full max-h-[80vh] overflow-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Your Personalized Learning Plan</h2>
              <Button variant="ghost" onClick={() => setShowLearningPlan(false)}>
                ✕
              </Button>
            </div>

            {learningPlan.length === 0 ? (
              <p>Great job! You already have strong skills in all areas.</p>
            ) : (
              <>
                <p className="mb-4">Based on your skill assessment, here are the areas to focus on:</p>

                <div className="space-y-6">
                  <div className="border rounded-md overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 text-left">Skill</th>
                          <th className="px-4 py-2 text-left">Category</th>
                          <th className="px-4 py-2 text-left">Priority</th>
                          <th className="px-4 py-2 text-left">Needed For</th>
                          <th className="px-4 py-2 text-left">Recommended Resources</th>
                        </tr>
                      </thead>
                      <tbody>
                        {learningPlan.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-4 py-3 font-medium">{item.skill}</td>
                            <td className="px-4 py-3">{item.category}</td>
                            <td className="px-4 py-3">
                              <Badge variant={item.priority === "High" ? "default" : "outline"}>{item.priority}</Badge>
                            </td>
                            <td className="px-4 py-3 text-sm">{item.roles}</td>
                            <td className="px-4 py-3">
                              {item.resources.length > 0 ? (
                                <ul className="space-y-2 text-sm">
                                  {item.resources.map((resource, i) => (
                                    <li key={i}>
                                      <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline flex items-center"
                                      >
                                        {resource.title}
                                        <ExternalLink className="ml-1 h-3 w-3" />
                                      </a>
                                      <span className="text-xs text-muted-foreground block">
                                        {resource.provider} {resource.free && "(Free)"}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <span className="text-sm text-muted-foreground">No specific resources found</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Next Steps</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Start with high-priority skills needed across multiple roles</li>
                      <li>Use the recommended resources to begin learning each skill</li>
                      <li>Set aside 5-10 hours per week for focused learning</li>
                      <li>Reassess your skills every 4-6 weeks</li>
                    </ol>
                  </div>
                </div>
              </>
            )}

            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={exportLearningPlan}>
                <Download className="mr-2 h-4 w-4" />
                Export Plan
              </Button>
              <Button onClick={() => setShowLearningPlan(false)}>Close</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Add a function to export just the learning plan
  const exportLearningPlan = () => {
    // Create a new window for the PDF
    const printWindow = window.open("", "_blank")
    if (!printWindow) {
      alert("Please allow popups to export the learning plan")
      return
    }

    // Generate HTML content for the PDF
    let content = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Personalized Learning Plan</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #333; }
        h2 { color: #555; margin-top: 20px; }
        h3 { color: #666; }
        .skill-item { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
        .skill-name { font-weight: bold; font-size: 1.1em; }
        .skill-category { color: #666; }
        .skill-priority { display: inline-block; padding: 3px 8px; border-radius: 3px; font-size: 0.8em; }
        .high-priority { background-color: #4f46e5; color: white; }
        .medium-priority { border: 1px solid #4f46e5; color: #4f46e5; }
        .skill-roles { font-size: 0.9em; color: #555; margin: 5px 0; }
        .resources { margin-top: 10px; }
        .resource-item { margin-bottom: 8px; }
        .resource-link { color: #4f46e5; }
        .resource-provider { font-size: 0.8em; color: #777; }
        .header { display: flex; justify-content: space-between; align-items: center; }
        .date { color: #888; font-size: 0.9em; }
        .next-steps { margin-top: 30px; }
        .next-steps li { margin-bottom: 10px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Your Personalized Learning Plan</h1>
        <div class="date">${new Date().toLocaleDateString()}</div>
      </div>
      <p>Based on your technical skills assessment, this plan identifies the key areas to focus on for your career transition to social impact tech roles.</p>
  `

    // Add high priority skills
    content += `<h2>High Priority Skills</h2>`
    const highPrioritySkills = learningPlan.filter((item) => item.priority === "High")

    if (highPrioritySkills.length > 0) {
      highPrioritySkills.forEach((item) => {
        content += `
        <div class="skill-item">
          <div class="skill-name">${item.skill}</div>
          <div class="skill-category">Category: ${item.category}</div>
          <div class="skill-priority high-priority">High Priority</div>
          <div class="skill-roles">Needed for: ${item.roles}</div>
          
          <div class="resources">
            <strong>Recommended Resources:</strong>
            ${
              item.resources.length > 0
                ? `<ul>${item.resources
                    .map(
                      (resource) =>
                        `<li class="resource-item">
                    <a href="${resource.url}" class="resource-link">${resource.title}</a>
                    <div class="resource-provider">${resource.provider} ${resource.free ? "(Free)" : ""}</div>
                  </li>`,
                    )
                    .join("")}
                </ul>`
                : "<p>No specific resources found for this skill.</p>"
            }
          </div>
        </div>
      `
      })
    } else {
      content += `<p>No high priority skills identified.</p>`
    }

    // Add medium priority skills
    content += `<h2>Medium Priority Skills</h2>`
    const mediumPrioritySkills = learningPlan.filter((item) => item.priority === "Medium")

    if (mediumPrioritySkills.length > 0) {
      mediumPrioritySkills.forEach((item) => {
        content += `
        <div class="skill-item">
          <div class="skill-name">${item.skill}</div>
          <div class="skill-category">Category: ${item.category}</div>
          <div class="skill-priority medium-priority">Medium Priority</div>
          <div class="skill-roles">Needed for: ${item.roles}</div>
          
          <div class="resources">
            <strong>Recommended Resources:</strong>
            ${
              item.resources.length > 0
                ? `<ul>${item.resources
                    .map(
                      (resource) =>
                        `<li class="resource-item">
                    <a href="${resource.url}" class="resource-link">${resource.title}</a>
                    <div class="resource-provider">${resource.provider} ${resource.free ? "(Free)" : ""}</div>
                  </li>`,
                    )
                    .join("")}
                </ul>`
                : "<p>No specific resources found for this skill.</p>"
            }
          </div>
        </div>
      `
      })
    } else {
      content += `<p>No medium priority skills identified.</p>`
    }

    // Add next steps
    content += `
    <div class="next-steps">
      <h2>Next Steps</h2>
      <ol>
        <li>Start with high-priority skills needed across multiple roles</li>
        <li>Use the recommended resources to begin learning each skill</li>
        <li>Set aside 5-10 hours per week for focused learning</li>
        <li>Reassess your skills every 4-6 weeks</li>
        <li>Create small projects to practice and demonstrate each new skill</li>
      </ol>
    </div>
  `

    content += `
    </body>
    </html>
  `

    // Write the content to the new window
    printWindow.document.open()
    printWindow.document.write(content)
    printWindow.document.close()

    // Trigger print dialog
    setTimeout(() => {
      printWindow.print()
    }, 500)
  }

  // Update the exportAssessment function to include resources in the learning plan section
  const exportAssessment = () => {
    // Create a new window for the PDF
    const printWindow = window.open("", "_blank")
    if (!printWindow) {
      alert("Please allow popups to export the assessment")
      return
    }

    // Generate HTML content for the PDF
    let content = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Technical Skills Assessment</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #333; }
        h2 { color: #555; margin-top: 20px; }
        h3 { color: #666; }
        .skill-category { margin-bottom: 30px; }
        .skill-item { margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #eee; }
        .skill-name { font-weight: bold; }
        .skill-level { margin: 5px 0; }
        .skill-description { color: #666; font-style: italic; margin-top: 5px; }
        .skill-required { font-size: 0.9em; color: #888; }
        .progress-container { height: 10px; width: 200px; background-color: #f0f0f0; border-radius: 5px; margin: 5px 0; }
        .progress-bar { height: 100%; border-radius: 5px; background-color: #4f46e5; }
        .header { display: flex; justify-content: space-between; align-items: center; }
        .date { color: #888; font-size: 0.9em; }
        .page-break { page-break-after: always; }
        .resource-item { margin-bottom: 8px; }
        .resource-link { color: #4f46e5; }
        .resource-provider { font-size: 0.8em; color: #777; }
        .skill-priority { display: inline-block; padding: 3px 8px; border-radius: 3px; font-size: 0.8em; margin-right: 10px; }
        .high-priority { background-color: #4f46e5; color: white; }
        .medium-priority { border: 1px solid #4f46e5; color: #4f46e5; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Technical Skills Assessment</h1>
        <div class="date">${new Date().toLocaleDateString()}</div>
      </div>
      <p>This assessment provides an overview of your technical skills relevant to social impact tech roles.</p>
  `

    // Add skills by category
    Object.keys(skillCategoriesState).forEach((tabKey, tabIndex) => {
      content += `<h2>${tabKey.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</h2>`

      skillCategoriesState[tabKey as keyof typeof skillCategoriesState].forEach((category) => {
        content += `<div class="skill-category"><h3>${category.category}</h3>`

        category.skills.forEach((skill) => {
          const levelLabel = getSkillLevelLabel(skill.level)
          const progressWidth = skill.level * 25

          content += `
          <div class="skill-item">
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">Level: ${skill.level > 0 ? skill.level : "Not rated"} - ${levelLabel}</div>
            <div class="progress-container">
              <div class="progress-bar" style="width: ${progressWidth}%;"></div>
            </div>
            <div class="skill-description">${skill.description}</div>
            <div class="skill-required">Required for: ${getRequiredRoleNames(skill.required)}</div>
          </div>
        `
        })

        content += `</div>`
      })

      // Add page break between major sections
      if (tabIndex < Object.keys(skillCategoriesState).length - 1) {
        content += `<div class="page-break"></div>`
      }
    })

    // Add learning plan if available
    if (learningPlan.length > 0) {
      content += `
      <div class="page-break"></div>
      <h2>Recommended Learning Plan</h2>
      <p>Based on your assessment, here are the skills you should focus on developing:</p>
    `

      // Group by priority
      content += `<h3>High Priority Skills</h3>`
      const highPrioritySkills = learningPlan.filter((item) => item.priority === "High")
      if (highPrioritySkills.length > 0) {
        highPrioritySkills.forEach((item) => {
          content += `
          <div class="skill-item">
            <div class="skill-name">${item.skill}</div>
            <div style="display: flex; align-items: center; margin: 5px 0;">
              <div class="skill-priority high-priority">High Priority</div>
              <div class="skill-required">Category: ${item.category}</div>
            </div>
            <div class="skill-required">Needed for: ${item.roles}</div>
            
            <div style="margin-top: 10px;">
              <strong>Recommended Resources:</strong>
              ${
                item.resources.length > 0
                  ? `<ul>${item.resources
                      .map(
                        (resource) =>
                          `<li class="resource-item">
                      <a href="${resource.url}" class="resource-link">${resource.title}</a>
                      <div class="resource-provider">${resource.provider} ${resource.free ? "(Free)" : ""}</div>
                    </li>`,
                      )
                      .join("")}
                  </ul>`
                  : "<p>No specific resources found for this skill.</p>"
              }
            </div>
          </div>
        `
        })
      } else {
        content += `<p>No high priority skills identified.</p>`
      }

      content += `<h3>Medium Priority Skills</h3>`
      const mediumPrioritySkills = learningPlan.filter((item) => item.priority === "Medium")
      if (mediumPrioritySkills.length > 0) {
        mediumPrioritySkills.forEach((item) => {
          content += `
          <div class="skill-item">
            <div class="skill-name">${item.skill}</div>
            <div style="display: flex; align-items: center; margin: 5px 0;">
              <div class="skill-priority medium-priority">Medium Priority</div>
              <div class="skill-required">Category: ${item.category}</div>
            </div>
            <div class="skill-required">Needed for: ${item.roles}</div>
            
            <div style="margin-top: 10px;">
              <strong>Recommended Resources:</strong>
              ${
                item.resources.length > 0
                  ? `<ul>${item.resources
                      .map(
                        (resource) =>
                          `<li class="resource-item">
                      <a href="${resource.url}" class="resource-link">${resource.title}</a>
                      <div class="resource-provider">${resource.provider} ${resource.free ? "(Free)" : ""}</div>
                    </li>`,
                      )
                      .join("")}
                  </ul>`
                  : "<p>No specific resources found for this skill.</p>"
              }
            </div>
          </div>
        `
        })
      } else {
        content += `<p>No medium priority skills identified.</p>`
      }
    }

    content += `
    </body>
    </html>
  `

    // Write the content to the new window
    printWindow.document.open()
    printWindow.document.write(content)
    printWindow.document.close()

    // Trigger print dialog
    setTimeout(() => {
      printWindow.print()
    }, 500)
  }

  return (
    <div className="container mx-auto py-6" ref={componentRef}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl">Technical Skills Inventory</CardTitle>
          <CardDescription>
            Assess your current technical skills against requirements for social impact tech roles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="core-technical" onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="core-technical">Core Technical</TabsTrigger>
              <TabsTrigger value="domain-specific">Domain Specific</TabsTrigger>
              <TabsTrigger value="leadership-management">Leadership</TabsTrigger>
              <TabsTrigger value="emerging-tech">Emerging Tech</TabsTrigger>
            </TabsList>

            {Object.keys(skillCategories).map((tabKey) => (
              <TabsContent key={tabKey} value={tabKey} className="space-y-4">
                {skillCategoriesState[tabKey as keyof typeof skillCategoriesState].map((category, categoryIndex) => (
                  <Collapsible
                    key={category.category}
                    open={openCategory === `${tabKey}-${category.category}`}
                    onOpenChange={() => {}}
                    className="border rounded-md"
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between p-4 rounded-md"
                        onClick={() => toggleCategory(`${tabKey}-${category.category}`)}
                      >
                        <span className="font-medium">{category.category}</span>
                        {openCategory === `${tabKey}-${category.category}` ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4">
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skill.name}
                            className="grid grid-cols-12 items-center gap-2 py-2 border-b border-gray-100"
                          >
                            <div className="col-span-3">
                              <div className="flex flex-col">
                                <div className="flex items-center">
                                  <span className="font-medium">{skill.name}</span>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0 ml-1">
                                          <Info className="h-4 w-4 text-muted-foreground" />
                                        </Button>
                                      </TooltipTrigger>
                                      <TooltipContent className="max-w-sm">
                                        <p>{skill.description}</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Required for: {getRequiredRoleNames(skill.required)}
                                </span>
                              </div>
                            </div>
                            <div className="col-span-4">{renderSkillLevel(skill.level)}</div>
                            <div className="col-span-5">
                              {renderSkillLevelSelector(categoryIndex, skillIndex, skill.level, tabKey)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={exportAssessment}>
            <Download className="mr-2 h-4 w-4" />
            Export Assessment
          </Button>
          <Button onClick={generateLearningPlan}>Generate Learning Plan</Button>
        </CardFooter>
      </Card>
      <LearningPlanModal />
    </div>
  )
}
