export const courses = [
  {
    id: "python-development",
    title: "Python Development Masterclass",
    category: "Python Development",
    level: "Beginner to Advanced",
    price: 8000,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    duration: "12 weeks",
    format: "Live + Recorded",
    projects: "4+ Projects",
    description: "Learn Python fundamentals, APIs, backend concepts, and hands-on problem solving with mentor support. Build scalable applications and become an industry-ready developer.",
    longDescription: "This comprehensive Python Development Masterclass is designed to take you from beginner to advanced level. You'll learn Python fundamentals, explore backend concepts, and master hands-on problem solving with dedicated mentor support. Build scalable applications and become an industry-ready developer.",
    instructor: {
      name: "Vikram Singh",
      title: "Senior Backend Engineer",
      bio: "Former ISA at top tech firms with 8+ years of experience in Python, distributed systems, and architecture. Passionate about simplifying complex coding concepts for beginners.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    highlights: [
      { icon: "📅", text: "12 Weeks" },
      { icon: "🔴", text: "Live + Recorded" },
      { icon: "🛠️", text: "4+ Projects" }
    ],
    features: [
      "Lifetime access to course materials",
      "1-on-1 mentor doubt clearing",
      "Industry recognized certification",
      "Placement and mock interview support"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Python Fundamentals",
        description: "Start from the absolute basics. Variables, data types, loops, and functions. Perfect for complete beginners.",
        topics: [
          "Setting up the Python environment",
          "Variables, Operators, and Expressions",
          "Control flow: If/else, Loops",
          "Functions and Scope Management"
        ]
      },
      {
        module: "Module 2",
        title: "Data Structures & OOP",
        description: "Master the core concepts of Object-Oriented Programming and essential data structures.",
        topics: [
          "Lists, Sets, Dictionaries, Tuples",
          "Classes and Objects",
          "Inheritance, Polymorphism, Encapsulation",
          "File Handling, Logging"
        ]
      },
      {
        module: "Module 3",
        title: "Web Development Backend with Django",
        description: "Build powerful web applications using Django framework.",
        topics: [
          "Django Setup and Configuration",
          "Models, Views, Templates, URLs",
          "Database Queries and ORM",
          "Authentication and Authorization"
        ]
      },
      {
        module: "Module 4",
        title: "Building Secure RESTful APIs",
        description: "Create production-ready APIs with security best practices.",
        topics: [
          "REST Principles and Best Practices",
          "API Authentication (JWT, OAuth)",
          "Error Handling and Validation",
          "API Testing and Documentation"
        ]
      },
      {
        module: "Module 5",
        title: "Deployment & Best Practices",
        description: "Deploy applications and follow industry standards.",
        topics: [
          "Version Control with Git",
          "Containerization with Docker",
          "Cloud Deployment (AWS, Heroku)",
          "Performance Optimization and Monitoring"
        ]
      }
    ],
    projects: [
      {
        title: "E-Commerce Backend API",
        description: "Build a complete REST API for an online store including product management, authentication, and order processing."
      },
      {
        title: "Automated Web Scraper",
        description: "Create an intelligent Python script using BeautifulSoup and Selenium that extracts data from websites and stores it in a database."
      }
    ],
    faq: [
      {
        question: "Do I need prior coding experience?",
        answer: "No, this course is designed from the ground up. We start with the absolute basics of Python and gradually progress towards advanced backend concepts. It's perfect for complete beginners."
      },
      {
        question: "Will I get placement assistance?",
        answer: "Yes! 100% students successfully completed their career switch with us and have transitioned their careers through our program."
      },
      {
        question: "What if I miss a live class?",
        answer: "No worries! All sessions are recorded, and you can watch them anytime. Our mentors are also available for doubt sessions at flexible timings."
      }
    ]
  },
  {
    id: "web-development",
    title: "Full Stack Web Development",
    category: "Web Development",
    level: "Intermediate",
    price: 9500,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    duration: "14 weeks",
    format: "Live + Recorded",
    projects: "5+ Projects",
    description: "Master frontend and backend development with React, Node.js, and databases.",
    longDescription: "This comprehensive Full Stack Web Development course teaches you to build modern web applications. You'll master React for frontend development, Node.js and Express for backend, and work with databases to create complete applications. Learn industry best practices and deploy your projects to production.",
    instructor: {
      name: "Arjun Kapoor",
      title: "Full Stack Developer & Tech Lead",
      bio: "Tech Lead at major tech companies with 10+ years of experience in web development. Expert in React, Node.js, and cloud technologies. Passionate about teaching practical web development skills.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    highlights: [
      { icon: "📅", text: "14 Weeks" },
      { icon: "🔴", text: "Live + Recorded" },
      { icon: "🛠️", text: "5+ Projects" }
    ],
    features: [
      "Lifetime access to course materials",
      "1-on-1 mentor doubt clearing",
      "Industry recognized certification",
      "Placement and mock interview support"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "HTML, CSS & JavaScript Basics",
        description: "Foundation of web development.",
        topics: [
          "HTML5 Structure and Semantics",
          "CSS3 Layouts, Flexbox, Grid",
          "JavaScript Fundamentals and DOM",
          "ES6+ Features"
        ]
      },
      {
        module: "Module 2",
        title: "React Fundamentals",
        description: "Build interactive UIs with React.",
        topics: [
          "Components, JSX, and Props",
          "State Management with Hooks",
          "React Router and Navigation",
          "API Integration with React"
        ]
      },
      {
        module: "Module 3",
        title: "Backend Development with Node.js",
        description: "Create scalable backend services.",
        topics: [
          "Express.js Framework",
          "RESTful API Development",
          "Middleware and Authentication",
          "Error Handling and Logging"
        ]
      },
      {
        module: "Module 4",
        title: "Database Design & Management",
        description: "Work with SQL and NoSQL databases.",
        topics: [
          "SQL and Relational Databases",
          "MongoDB and NoSQL Concepts",
          "Database Optimization",
          "ORM and Query Builders"
        ]
      },
      {
        module: "Module 5",
        title: "Deployment & DevOps",
        description: "Deploy applications to production.",
        topics: [
          "Git and Version Control",
          "Docker Containerization",
          "Cloud Deployment (AWS, Heroku)",
          "CI/CD Pipelines"
        ]
      }
    ],
    projects: [
      {
        title: "E-Commerce Website",
        description: "Build a complete e-commerce platform with product catalog, shopping cart, and checkout functionality using React and Node.js."
      },
      {
        title: "Social Media Application",
        description: "Create a social networking app with user authentication, posts, comments, and real-time notifications."
      }
    ],
    faq: [
      {
        question: "Do I need frontend experience?",
        answer: "We start from basics, so no prior experience required. However, basic programming knowledge is helpful."
      },
      {
        question: "Will I get a job after this course?",
        answer: "We provide comprehensive placement support, mock interviews, and portfolio building. Our success rate is 85%+ with placement."
      },
      {
        question: "How much time should I dedicate?",
        answer: "Plan for 20-30 hours per week including live classes, assignments, and projects."
      },
      {
        question: "Is the certificate recognized?",
        answer: "Yes, our certificate is industry-recognized and valued by major tech companies."
      }
    ]
  },
  {
    id: "data-science",
    title: "Data Science & Machine Learning",
    category: "Data Science",
    level: "Advanced",
    price: 12000,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    duration: "16 weeks",
    format: "Live + Recorded",
    projects: "6+ Projects",
    description: "Learn machine learning, deep learning, and data analysis from industry experts.",
    longDescription: "Master Data Science and Machine Learning with this comprehensive course. Learn statistical analysis, data visualization, and build predictive models using Python. Work with real-world datasets and deploy machine learning models to production.",
    instructor: {
      name: "Dr. Priya Sharma",
      title: "Data Scientist & ML Engineer",
      bio: "PhD in Machine Learning with 12+ years in data science. Worked on ML projects at leading tech companies. Specializes in deep learning and neural networks.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    highlights: [
      { icon: "📅", text: "16 Weeks" },
      { icon: "🔴", text: "Live + Recorded" },
      { icon: "🛠️", text: "6+ Projects" }
    ],
    features: [
      "Lifetime access to course materials",
      "1-on-1 mentor doubt clearing",
      "Industry recognized certification",
      "Placement and mock interview support"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Python for Data Science",
        description: "Python fundamentals for data science.",
        topics: [
          "NumPy and Pandas Basics",
          "Data Cleaning and Preprocessing",
          "Exploratory Data Analysis",
          "Data Visualization with Matplotlib"
        ]
      },
      {
        module: "Module 2",
        title: "Statistical Analysis",
        description: "Statistical foundations for ML.",
        topics: [
          "Probability and Statistics",
          "Hypothesis Testing",
          "Correlation and Regression",
          "Distribution Analysis"
        ]
      },
      {
        module: "Module 3",
        title: "Machine Learning Algorithms",
        description: "Build ML models.",
        topics: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Model Evaluation Metrics",
          "Feature Engineering"
        ]
      },
      {
        module: "Module 4",
        title: "Deep Learning & Neural Networks",
        description: "Advanced deep learning techniques.",
        topics: [
          "Neural Network Basics",
          "Convolutional Neural Networks",
          "Recurrent Neural Networks",
          "Transfer Learning"
        ]
      },
      {
        module: "Module 5",
        title: "Model Deployment",
        description: "Deploy ML models to production.",
        topics: [
          "Model Serialization and Versioning",
          "REST API Development",
          "Cloud ML Services",
          "Monitoring and Optimization"
        ]
      }
    ],
    projects: [
      {
        title: "Predictive Analytics Dashboard",
        description: "Build a machine learning model to predict housing prices and create an interactive dashboard for visualization."
      },
      {
        title: "Image Classification System",
        description: "Develop a CNN-based image classifier that can categorize images with high accuracy."
      }
    ],
    faq: [
      {
        question: "Do I need a math background?",
        answer: "We cover all necessary mathematical concepts. Basic algebra is helpful but not required."
      },
      {
        question: "What projects will I build?",
        answer: "You'll build 6+ real-world projects including predictive models, classifiers, and recommendation systems."
      },
      {
        question: "Can I learn this without a strong programming background?",
        answer: "Yes, we start with Python basics and gradually build up to advanced ML concepts."
      },
      {
        question: "What's the placement rate?",
        answer: "Our placement rate is 80%+ with median salary of ₹8-12 LPA for data science roles."
      }
    ]
  },
  {
    id: "android-development",
    title: "Android Development",
    category: "Mobile Development",
    level: "Intermediate",
    price: 7500,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    duration: "10 weeks",
    format: "Live + Recorded",
    projects: "4+ Projects",
    description: "Build native Android applications using Kotlin and modern development practices.",
    longDescription: "Learn Android development with Kotlin and build production-ready mobile applications. Master Android Studio, UI/UX design, and integrate APIs. Deploy your apps to Google Play Store and launch your mobile development career.",
    instructor: {
      name: "Rohan Patel",
      title: "Android Developer & App Architect",
      bio: "Senior Android Developer with 8+ years of experience. Published 20+ apps on Google Play Store with millions of downloads. Expert in Kotlin, Jetpack, and mobile architecture.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    highlights: [
      { icon: "📅", text: "10 Weeks" },
      { icon: "🔴", text: "Live + Recorded" },
      { icon: "🛠️", text: "4+ Projects" }
    ],
    features: [
      "Lifetime access to course materials",
      "1-on-1 mentor doubt clearing",
      "Industry recognized certification",
      "Placement and mock interview support"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Android Basics & Kotlin Fundamentals",
        description: "Learn Kotlin and Android setup.",
        topics: [
          "Kotlin Language Fundamentals",
          "Android Project Structure",
          "Activities and Intents",
          "Lifecycle Management"
        ]
      },
      {
        module: "Module 2",
        title: "UI/UX Design with Android",
        description: "Create beautiful interfaces.",
        topics: [
          "Layout Types and Responsive Design",
          "Material Design Principles",
          "Custom Views and Animations",
          "Fragments and Navigation"
        ]
      },
      {
        module: "Module 3",
        title: "Data Management & Databases",
        description: "Store and manage data.",
        topics: [
          "SQLite Database",
          "Room Persistence Library",
          "SharedPreferences",
          "Content Providers"
        ]
      },
      {
        module: "Module 4",
        title: "Networking & API Integration",
        description: "Connect to backend services.",
        topics: [
          "HTTP Requests with Retrofit",
          "JSON Parsing",
          "Error Handling",
          "Caching Strategies"
        ]
      },
      {
        module: "Module 5",
        title: "Advanced Topics & Publishing",
        description: "Deploy to Google Play Store.",
        topics: [
          "Background Services",
          "Notifications and Push Messaging",
          "App Performance Optimization",
          "Publishing to Google Play Store"
        ]
      }
    ],
    projects: [
      {
        title: "Weather Application",
        description: "Build a weather app that fetches data from a weather API and displays beautiful weather information with forecasts."
      },
      {
        title: "Todo List Application",
        description: "Create a feature-rich todo app with local database, user authentication, and cloud synchronization."
      }
    ],
    faq: [
      {
        question: "Do I need Java experience?",
        answer: "No, we teach Kotlin from scratch. Basic programming knowledge is helpful."
      },
      {
        question: "Can I publish apps after completing this course?",
        answer: "Yes! You'll learn everything needed to publish apps to Google Play Store."
      },
      {
        question: "What's the market demand for Android developers?",
        answer: "Very high! Android developers are in great demand with average salaries of ₹6-10 LPA."
      },
      {
        question: "Will I get mentorship during the course?",
        answer: "Yes, 1-on-1 mentorship with experienced Android developers is included."
      }
    ]
  }
];

export const pricingPlans = [
  {
    name: "₹5000",
    period: "/course",
    description: "Basic access",
    features: ["Course materials", "Recorded sessions", "Community support"],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "₹8000",
    period: "/course",
    description: "Premium with mentorship",
    features: ["All Basic features", "1-on-1 mentor sessions", "Industry certification", "Placement support"],
    cta: "Enroll Now",
    highlighted: true
  },
  {
    name: "₹15000",
    period: "/course",
    description: "Complete bootcamp",
    features: ["All Premium features", "Mock interviews", "Guaranteed job interviews", "Career counseling"],
    cta: "Start Bootcamp",
    highlighted: false
  }
];

export const stats = [
  { number: "5,000+", label: "Students Trained" },
  { number: "300+", label: "Placements" },
  { number: "8k+", label: "Success Rate" },
  { number: "50+", label: "Industry Partners" }
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Software Engineer at Google",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    text: "The Python Development Masterclass completely transformed my career. The mentors were incredibly supportive, and I landed my dream job within 2 months of completing the course."
  },
  {
    name: "Priya Sharma",
    role: "Full Stack Developer at Amazon",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    text: "Best decision I made for my career! The curriculum is industry-relevant, and the hands-on projects gave me real portfolio pieces that impressed my interviewers."
  },
  {
    name: "Arjun Patel",
    role: "Data Scientist at Microsoft",
    image: "https://images.unsplash.com/photo-1535713566543-bbb601aaf333?w=150&h=150&fit=crop",
    text: "The course structure is perfect - starting from basics and gradually building up to advanced concepts. The community and mentor support made all the difference in my learning journey."
  }
];

export const trainingCategories = [
  { name: "Web Development", courses: 8 },
  { name: "Python Development", courses: 6 },
  { name: "Data Science", courses: 5 },
  { name: "Mobile Development", courses: 4 },
  { name: "Digital Marketing", courses: 3 },
  { name: "UI/UX Design", courses: 4 }
];
