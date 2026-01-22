// data/projects.data.ts
import { Project } from "../app/[locale]/project-detail/[id]/project.types";

export const projectsEnglishData: Project[] = [
  {
    id: "payment-conciliator",
    image: "/images/fintech4.png",
    title: "Real-Time Payment Reconciliation System",
    company: "Confidential",
    industry: "Financial Services (Banking)",
    scale: "6M+ users, 20M monthly requests",
    metrics: [
      { number: "600K", label: "Reconciled Transactions" },
      { number: "20 million", label: "Monthly Requests" },
      { number: "99.9%", label: "Service Operational Availability" },
      { number: "99%", label: "Manual Reconciliation Time Reduction" },
    ],
    overview:
      "High-performance serverless payment reconciliation system developed for a major Argentine bank with over 6 million active users. The system processes transactions in real-time, ensuring accurate reconciliation of millions of monthly operations.",
    technologies: ["AWS", "Node.js", "OpenSearch"],
    architectureDescription:
      "A fully serverless architecture was implemented using AWS native services, which enabled:",
    architecturePoints: [
      "Automatic scaling based on demand",
      "Optimized costs (pay-per-use)",
      "High availability without server management",
      "Rapid deployment through Infrastructure as Code",
    ],
    components: [
      {
        title: "AWS OpenSearch",
        description:
          "Real-time search and reconciliation engine. Enabled complex searches across millions of transactions in milliseconds.",
      },
      {
        title: "AWS Lambda",
        description:
          "Serverless functions for event processing. Handling business logic, validations, and data transformations.",
      },
      {
        title: "AWS StepFunctions",
        description:
          "Complex workflow orchestration. Coordination of multiple Lambdas for multi-step reconciliation processes.",
      },
      {
        title: "SQS/SNS",
        description:
          "Messaging system for asynchronous processing. Service decoupling and load spike handling.",
      },
    ],
    techStack: `Backend:
├── Node.js + TypeScript
├── AWS SDK

Infrastructure:
├── AWS CloudFormation
├── AWS Lambda
├── AWS OpenSearch
├── AWS DynamoDB
├── AWS StepFunctions
├── AWS SQS/SNS
└── AWS CloudWatch

Security:
├── AWS IAM Roles & Policies
└── VPC & Security Groups`,
    businessImpact: [
      "Satisfied users: Instant payment reconciliation enabled faster money disbursement to affiliated merchants",
      "Operational cost reduction: 99% automation of manual reconciliation tasks",
      "Guaranteed scalability: System prepared to grow with the business without architecture redesign",
      "Reliability: 99.9% availability for critical business operations",
      "Visibility: Real-time metrics and dashboards for data-driven decision making",
    ],
  },
  {
    id: "payment-gateway",
    image: "/images/fintech3.webp",
    company: "Confidential",
    title: "Payment Gateway Provider",
    industry: "Fintech / Payment Processing",
    scale: "5,500 active merchants",
    metrics: [
      { number: "5,500", label: "Active Merchants" },
      { number: "99.9%", label: "Service Operational Availability" },
      { number: "100%", label: "Online Payment Enablement" },
    ],
    overview:
      "Distributed transaction management system for POS devices and payment links developed for a Peruvian payment gateway. The system securely manages and processes payments, guaranteeing operations for 5,500 affiliated merchants.",
    technologies: ["Node.js", "MySQL", "MongoDB", "Docker"],
    architectureDescription:
      "An event-driven and HTTP-based Node.js microservices architecture was implemented, which enabled:",
    architecturePoints: [
      "Service decoupling for greater resilience",
      "Independent scalability for each service based on demand",
      "Resilience and fault isolation",
    ],
    components: [
      {
        title: "Apache Kafka",
        description:
          "Event bus for asynchronous communication between microservices and system synchronization.",
      },
      {
        title: "PostgreSQL",
        description:
          "Relational database with optimized stored procedures for reports and transactions.",
      },
      {
        title: "Node.js Microservices",
        description:
          "Independent services with isolated business logic and idempotent operations.",
      },
    ],
    techStack: `Backend:
├── Microservices (Node.js)
├── Apache Kafka Message Broker
└── PostgreSQL Database`,
    businessImpact: [
      "Satisfied users: Reliable payment processing for thousands of merchants",
      "Business diversification: Online payment enablement for new sales channels",
    ],
  },
  {
    id: "loan-payment-consultant",
    image: "/images/fintech2.jpg",
    title: "High-Performance Banking Microservices Platform",
    company: "Confidential",
    industry: "Digital Banking / Financial Services",
    scale: "1,000,000 banking users",
    metrics: [
      { number: "1M", label: "Banking Users" },
      { number: "99.9%", label: "Service Operational Availability" },
      { number: "100%", label: "Online Payment Inquiry" },
    ],
    overview:
      "Loan payment inquiry system developed for a Peruvian financial institution. The software enables banking users to check their payment status quickly and securely.",
    technologies: ["Node.js", "Azure", "SQL Server"],
    architectureDescription:
      "Microservices with hexagonal architecture and Domain-Driven Design (DDD) were implemented:",
    architecturePoints: [
      "Business logic isolation from external dependencies",
      "Independent scalability for each service based on demand",
      "Resilience and fault isolation",
    ],
    components: [
      {
        title: "SQL Server",
        description:
          "Relational database with optimized queries and strategic indexes for high concurrency.",
      },
      {
        title: "Node.js Microservices",
        description:
          "Independent services with isolated business logic and idempotent operations.",
      },
      {
        title: "Docker",
        description:
          "Containers for microservices deployment and orchestration, facilitating scalability and maintenance.",
      },
    ],
    techStack: `Backend:
├── Node.js
├── SQL Server
└── Docker`,
    businessImpact: [
      "Scalability and Maintainability: Robust, scalable, and easy-to-maintain banking application",
      "Guaranteed scalability: Capacity to support continuous user growth without redesign",
    ],
  },
];
