// Resources data moved to a separate file to avoid import issues
export const resources = {
  "core-technical": [
    {
      category: "Frontend Development",
      courses: [
        {
          title: "Modern React with Redux",
          provider: "Udemy",
          url: "https://www.udemy.com/course/react-redux/",
          free: false,
          alternatives: [
            {
              title: "Full Modern React Tutorial",
              provider: "Net Ninja (YouTube)",
              url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
              free: true,
            },
          ],
        },
        {
          title: "Accessibility in JavaScript Applications",
          provider: "Frontend Masters",
          url: "https://frontendmasters.com/courses/javascript-accessibility/",
          free: false,
          alternatives: [
            {
              title: "Web Accessibility",
              provider: "Udacity",
              url: "https://www.udacity.com/course/web-accessibility--ud891",
              free: true,
            },
          ],
        },
        {
          title: "TypeScript Course",
          provider: "freeCodeCamp",
          url: "https://www.freecodecamp.org/news/learn-typescript-beginners-guide/",
          free: true,
        },
      ],
    },
    {
      category: "Backend Development",
      courses: [
        {
          title: "Node.js API Masterclass",
          provider: "Traversy Media (YouTube)",
          url: "https://www.youtube.com/watch?v=fgTGADljAeg",
          free: true,
        },
        {
          title: "SQL and PostgreSQL: The Complete Developer's Guide",
          provider: "Udemy",
          free: false,
          url: "https://www.udemy.com/course/sql-and-postgresql/",
          alternatives: [
            {
              title: "Introduction to SQL",
              provider: "Khan Academy",
              url: "https://www.khanacademy.org/computing/computer-programming/sql",
              free: true,
            },
          ],
        },
        {
          title: "Authentication & Security",
          provider: "The Odin Project",
          url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/authentication",
          free: true,
        },
      ],
    },
    {
      category: "DevOps & Infrastructure",
      courses: [
        {
          title: "DevOps with Docker",
          provider: "University of Helsinki",
          url: "https://devopswithdocker.com/",
          free: true,
        },
        {
          title: "AWS Cloud Practitioner Essentials",
          provider: "AWS Training",
          url: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/",
          free: true,
        },
        {
          title: "GitHub Actions: The Complete Guide",
          provider: "freeCodeCamp (YouTube)",
          url: "https://www.youtube.com/watch?v=R8_veQiYBjI",
          free: true,
        },
      ],
    },
    {
      category: "AI & Machine Learning",
      courses: [
        {
          title: "Google's Machine Learning Crash Course",
          provider: "Google",
          url: "https://developers.google.com/machine-learning/crash-course",
          free: true,
        },
        {
          title: "Fast.ai Practical Deep Learning for Coders",
          provider: "Fast.ai",
          url: "https://course.fast.ai/",
          free: true,
        },
        {
          title: "MIT OpenCourseWare: Introduction to Deep Learning",
          provider: "MIT",
          url: "https://openlearninglibrary.mit.edu/courses/course-v1:MITx+6.S191+1T2020/about",
          free: true,
        },
        {
          title: "Kaggle Learn: Intro to Machine Learning",
          provider: "Kaggle",
          url: "https://www.kaggle.com/learn/intro-to-machine-learning",
          free: true,
        },
        {
          title: "Microsoft AI School",
          provider: "Microsoft",
          url: "https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/",
          free: true,
        },
      ],
    },
  ],
  "domain-specific": [
    {
      category: "EdTech Specific",
      courses: [
        {
          title: "Learning How to Learn",
          provider: "Coursera",
          url: "https://www.coursera.org/learn/learning-how-to-learn",
          free: true,
        },
        {
          title: "Accessibility in Educational Technology",
          provider: "edX",
          url: "https://www.edx.org/learn/educational-technology/galileo-university-accessibility-in-educational-technology",
          free: true,
        },
      ],
    },
    {
      category: "Fintech Specific",
      courses: [
        {
          title: "FinTech: Foundations & Applications of Financial Technology",
          provider: "Coursera",
          url: "https://www.coursera.org/specializations/wharton-fintech",
          free: false,
          alternatives: [
            {
              title: "Introduction to FinTech",
              provider: "edX",
              url: "https://www.edx.org/learn/finance/the-university-of-hong-kong-introduction-to-fintech",
              free: true,
            },
          ],
        },
        {
          title: "Financial Inclusion",
          provider: "edX",
          url: "https://www.edx.org/learn/finance/ifc-financial-inclusion",
          free: true,
        },
      ],
    },
    {
      category: "Civic Tech Specific",
      courses: [
        {
          title: "Digital Government and Civic Tech",
          provider: "edX",
          url: "https://www.edx.org/learn/government/new-york-university-digital-government-and-civic-tech-building-more-effective-and",
          free: true,
        },
        {
          title: "Open Data in the Public Sector",
          provider: "Open Data Institute",
          url: "https://theodi.org/service/courses/",
          free: false,
          alternatives: [
            {
              title: "Open Data Basics",
              provider: "School of Data",
              url: "https://schoolofdata.org/courses/",
              free: true,
            },
          ],
        },
      ],
    },
    {
      category: "Social Impact Measurement",
      courses: [
        {
          title: "Social Impact Strategy",
          provider: "Coursera",
          url: "https://www.coursera.org/learn/social-impact",
          free: true,
        },
        {
          title: "Data Visualization with D3.js",
          provider: "freeCodeCamp",
          url: "https://www.freecodecamp.org/learn/data-visualization/",
          free: true,
        },
      ],
    },
    {
      category: "Cloud Services",
      courses: [
        {
          title: "Google Cloud Skills Boost",
          provider: "Google Cloud",
          url: "https://www.cloudskillsboost.google/",
          free: true,
        },
        {
          title: "GCP Essentials",
          provider: "Google Cloud",
          url: "https://www.cloudskillsboost.google/course_templates/60",
          free: true,
        },
        {
          title: "Microsoft Learn: Azure Fundamentals",
          provider: "Microsoft",
          url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/",
          free: true,
        },
        {
          title: "AWS Skill Builder",
          provider: "Amazon Web Services",
          url: "https://explore.skillbuilder.aws/learn",
          free: true,
        },
      ],
    },
    {
      category: "Cybersecurity",
      courses: [
        {
          title: "Cybersecurity Fundamentals",
          provider: "IBM",
          url: "https://www.coursera.org/learn/ibm-cybersecurity-basics",
          free: true,
        },
        {
          title: "SANS Cyber Aces Online",
          provider: "SANS Institute",
          url: "https://www.cyberaces.org/",
          free: true,
        },
        {
          title: "Cybersecurity Training & Exercises",
          provider: "CISA (US Government)",
          url: "https://www.cisa.gov/cybersecurity-training-exercises",
          free: true,
        },
      ],
    },
  ],
  "leadership-management": [
    {
      category: "Technical Leadership",
      courses: [
        {
          title: "Software Architecture & Design",
          provider: "Udacity",
          url: "https://www.udacity.com/course/software-architecture-design--ud821",
          free: true,
        },
        {
          title: "Documenting Software Architecture",
          provider: "Pluralsight",
          url: "https://www.pluralsight.com/courses/documenting-software-architecture",
          free: false,
          alternatives: [
            {
              title: "Software Architecture",
              provider: "MIT OpenCourseWare",
              url: "https://ocw.mit.edu/courses/6-005-software-construction-spring-2016/",
              free: true,
            },
          ],
        },
      ],
    },
    {
      category: "Team Management",
      courses: [
        {
          title: "Agile Development",
          provider: "Coursera",
          url: "https://www.coursera.org/learn/agile-development",
          free: true,
        },
        {
          title: "Engineering Management",
          provider: "Coursera",
          url: "https://www.coursera.org/specializations/engineering-management-leadership",
          free: false,
          alternatives: [
            {
              title: "Engineering Leadership",
              provider: "edX",
              url: "https://www.edx.org/learn/engineering/dartmouth-engineering-leadership",
              free: true,
            },
          ],
        },
      ],
    },
    {
      category: "Product & Strategy",
      courses: [
        {
          title: "Product Management",
          provider: "edX",
          url: "https://www.edx.org/learn/product-management/boston-university-digital-product-management",
          free: true,
        },
        {
          title: "User Experience Research and Design",
          provider: "Coursera",
          url: "https://www.coursera.org/specializations/michiganux",
          free: true,
        },
      ],
    },
    {
      category: "Program & Project Management",
      courses: [
        {
          title: "Google Project Management Certificate",
          provider: "Google (via Coursera)",
          url: "https://www.coursera.org/professional-certificates/google-project-management",
          free: true,
        },
        {
          title: "Project Management Basics",
          provider: "OpenLearn (Open University)",
          url: "https://www.open.edu/openlearn/money-business/project-management-the-basics/content-section-0",
          free: true,
        },
        {
          title: "Agile Project Management",
          provider: "Atlassian",
          url: "https://www.atlassian.com/agile",
          free: true,
        },
      ],
    },
    {
      category: "Learning & Development",
      courses: [
        {
          title: "Learning How to Learn",
          provider: "UC San Diego (via Coursera)",
          url: "https://www.coursera.org/learn/learning-how-to-learn",
          free: true,
        },
        {
          title: "Adult Learning Theory",
          provider: "OpenLearn",
          url: "https://www.open.edu/openlearn/education-development/education/enhancing-teacher-education-through-oer/content-section-0",
          free: true,
        },
        {
          title: "E-Learning Instructional Design",
          provider: "Commonwealth of Learning",
          url: "https://www.col.org/resources/",
          free: true,
        },
      ],
    },
  ],
  "emerging-tech": [
    {
      category: "AI & Machine Learning",
      courses: [
        {
          title: "Machine Learning",
          provider: "Coursera",
          url: "https://www.coursera.org/learn/machine-learning",
          free: true,
        },
        {
          title: "AI for Everyone",
          provider: "Coursera",
          url: "https://www.coursera.org/learn/ai-for-everyone",
          free: true,
        },
        {
          title: "Practical Deep Learning for Coders",
          provider: "fast.ai",
          url: "https://course.fast.ai/",
          free: true,
        },
      ],
    },
    {
      category: "Data Science",
      courses: [
        {
          title: "Data Science",
          provider: "Harvard edX",
          url: "https://www.edx.org/learn/data-science/harvard-university-data-science-r-basics",
          free: true,
        },
        {
          title: "Data Visualization",
          provider: "Coursera",
          url: "https://www.coursera.org/learn/datavisualization",
          free: true,
        },
      ],
    },
    {
      category: "Other Emerging Technologies",
      courses: [
        {
          title: "Blockchain Basics",
          provider: "Coursera",
          url: "https://www.coursera.org/learn/blockchain-basics",
          free: true,
        },
        {
          title: "Introduction to AR/VR Development",
          provider: "Unity Learn",
          url: "https://learn.unity.com/course/create-with-vr",
          free: true,
        },
      ],
    },
  ],
  infrastructure: [
    {
      category: "Docker",
      courses: [
        {
          title: "Docker for Beginners",
          provider: "Docker",
          url: "https://docs.docker.com/get-started/",
          free: true,
        },
        {
          title: "Docker Mastery",
          provider: "freeCodeCamp",
          url: "https://www.youtube.com/watch?v=9zUHg7xjIqQ",
          free: true,
        },
        {
          title: "Docker and Kubernetes: The Complete Guide",
          provider: "Traversy Media",
          url: "https://www.youtube.com/watch?v=Kyx2PsuwomE",
          free: true,
        },
      ],
    },
    {
      category: "Kubernetes",
      courses: [
        {
          title: "Introduction to Kubernetes",
          provider: "Linux Foundation",
          url: "https://training.linuxfoundation.org/training/introduction-to-kubernetes/",
          free: true,
        },
        {
          title: "Kubernetes Basics",
          provider: "Kubernetes.io",
          url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
          free: true,
        },
        {
          title: "Certified Kubernetes Administrator Course",
          provider: "freeCodeCamp",
          url: "https://www.youtube.com/watch?v=j5Zsa_eOXeY",
          free: true,
        },
      ],
    },
    {
      category: "Infrastructure as Code",
      courses: [
        {
          title: "HashiCorp Learn: Terraform",
          provider: "HashiCorp",
          url: "https://developer.hashicorp.com/terraform/tutorials",
          free: true,
        },
        {
          title: "Terraform on AWS",
          provider: "freeCodeCamp",
          url: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
          free: true,
        },
        {
          title: "Terraform Best Practices",
          provider: "Terraform-best-practices.com",
          url: "https://www.terraform-best-practices.com/",
          free: true,
        },
      ],
    },
  ],
}
