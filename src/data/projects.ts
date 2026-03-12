import projectAiAnalytics from "@/assets/project-ai-analytics.png";
import projectSmartCrm from "@/assets/project-smart-crm.png";
import projectAutoflow from "@/assets/project-autoflow.png";
import projectNlpChat from "@/assets/project-nlp-chat.png";
import projectSupplyChain from "@/assets/project-supply-chain.png";
import projectSecureauth from "@/assets/project-secureauth.png";

export interface Project {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  category: string;
  client: string;
  duration: string;
  year: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const projects: Project[] = [
  {
    slug: "ai-analytics-platform",
    title: "AI Analytics Platform",
    desc: "Real-time data analytics powered by machine learning. Transforms raw business data into actionable insights with predictive modeling and automated reporting.",
    tags: ["Python", "React", "TensorFlow"],
    image: projectAiAnalytics,
    category: "AI / Machine Learning",
    client: "FinTech Corp",
    duration: "6 months",
    year: "2025",
    challenge: "The client was drowning in raw data from multiple sources with no unified way to extract meaningful business insights. Manual reporting took days and decisions were often based on outdated information.",
    solution: "We built a real-time analytics platform powered by TensorFlow models that automatically ingests data from 12+ sources, runs predictive models, and generates actionable dashboards. The React frontend provides intuitive drill-down capabilities with sub-second response times.",
    results: [
      "85% reduction in reporting time",
      "32% increase in revenue through predictive insights",
      "Real-time monitoring of 50+ KPIs",
      "99.9% platform uptime",
    ],
  },
  {
    slug: "smart-crm-system",
    title: "Smart CRM System",
    desc: "Intelligent CRM with predictive customer insights. Uses AI to forecast customer behavior, automate outreach, and optimize sales pipelines.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    image: projectSmartCrm,
    category: "Web Application",
    client: "SalesForward Inc.",
    duration: "4 months",
    year: "2025",
    challenge: "The sales team was using disconnected tools leading to lost leads and missed follow-ups. Customer data was siloed and there was no visibility into the sales pipeline.",
    solution: "We developed a unified CRM platform with AI-powered lead scoring, automated email sequences, and a visual pipeline builder. The system integrates with existing tools and provides real-time notifications for high-priority actions.",
    results: [
      "45% improvement in lead conversion rate",
      "60% reduction in manual data entry",
      "Automated follow-ups for 10,000+ leads/month",
      "360° customer view across all touchpoints",
    ],
  },
  {
    slug: "autoflow-engine",
    title: "AutoFlow Engine",
    desc: "Workflow automation engine for enterprise operations. Streamlines complex business processes with intelligent task routing and real-time monitoring.",
    tags: ["Go", "Kubernetes", "Redis"],
    image: projectAutoflow,
    category: "Automation",
    client: "LogiPrime Ltd.",
    duration: "5 months",
    year: "2024",
    challenge: "Manual business processes were causing bottlenecks, with tasks being lost between departments and no visibility into process status or performance metrics.",
    solution: "We engineered a high-performance workflow engine in Go that handles intelligent task routing, parallel execution, and real-time monitoring. Deployed on Kubernetes for auto-scaling with Redis-backed queues for reliability.",
    results: [
      "70% faster process completion times",
      "Handles 100,000+ tasks per day",
      "Zero task loss with guaranteed delivery",
      "Real-time dashboards for all stakeholders",
    ],
  },
  {
    slug: "nlp-chat-assistant",
    title: "NLP Chat Assistant",
    desc: "AI-powered conversational assistant for customer support. Handles multi-turn conversations with context awareness and seamless human handoff.",
    tags: ["Python", "FastAPI", "GPT-4"],
    image: projectNlpChat,
    category: "AI / NLP",
    client: "ServiceHub Global",
    duration: "3 months",
    year: "2025",
    challenge: "The support team was overwhelmed with repetitive queries, leading to long wait times and customer frustration. They needed a solution that could handle common questions while preserving the human touch for complex issues.",
    solution: "We built a GPT-4 powered chat assistant with custom fine-tuning on the client's knowledge base. It features multi-turn context tracking, sentiment analysis for escalation, and seamless handoff to human agents when needed.",
    results: [
      "75% of queries resolved without human intervention",
      "Average response time reduced from 4 hours to 8 seconds",
      "Customer satisfaction score improved by 40%",
      "Support team can focus on complex, high-value cases",
    ],
  },
  {
    slug: "supply-chain-optimizer",
    title: "Supply Chain Optimizer",
    desc: "ML-driven supply chain forecasting and optimization. Reduces costs and improves delivery times through intelligent demand prediction.",
    tags: ["Python", "AWS", "Spark"],
    image: projectSupplyChain,
    category: "Data Science",
    client: "GlobalRetail Co.",
    duration: "7 months",
    year: "2024",
    challenge: "Inaccurate demand forecasting was leading to either excess inventory costs or stockouts. The client needed a system that could predict demand across 500+ SKUs with seasonal variations.",
    solution: "We implemented an ML pipeline using Apache Spark for processing historical sales data and external signals (weather, events, trends). The models run on AWS with automated retraining and alerting for anomalies.",
    results: [
      "28% reduction in inventory holding costs",
      "Stockout incidents reduced by 65%",
      "Demand forecast accuracy improved to 94%",
      "ROI achieved within first 4 months",
    ],
  },
  {
    slug: "secureauth-gateway",
    title: "SecureAuth Gateway",
    desc: "Zero-trust authentication and authorization platform. Enterprise-grade security with biometric verification and adaptive access controls.",
    tags: ["Rust", "Docker", "OAuth2"],
    image: projectSecureauth,
    category: "Cybersecurity",
    client: "BankSecure Financial",
    duration: "5 months",
    year: "2025",
    challenge: "The client's legacy authentication system was vulnerable to modern attack vectors. They needed a zero-trust architecture that could handle millions of auth requests while meeting strict compliance requirements.",
    solution: "We built a high-performance auth gateway in Rust with support for OAuth2, SAML, biometric verification, and adaptive MFA. The system uses behavioral analytics to detect anomalies and automatically adjusts security levels.",
    results: [
      "Zero security breaches since deployment",
      "Handles 5M+ auth requests per day",
      "Sub-50ms authentication latency",
      "Full SOC2 and PCI-DSS compliance",
    ],
  },
];
