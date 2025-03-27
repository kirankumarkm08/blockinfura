import { Server, Database, Shield, Blocks, Droplet, Activity } from 'lucide-react';

export const servicesList = [
  {
    id: "node-as-a-service",
    title: "Node-as-a-Service",
    description: "Dedicated and shared nodes with instant access to multiple blockchain networks.",
    features: [
      "Automated failover",
      "Load balancing",
      "24/7 monitoring",
      "Custom configuration",
      "Multi-region deployment",
      "Automatic updates"
    ],
    icon: Server,
    supportedNetworks: ["ethereum", "polygon", "base", "avail", "arbitrum", "abstract"] // Randomized
  },
  {
    id: "rpc-urls",
    title: "RPC URLs",
    description: "High-performance RPC endpoints with enterprise-grade reliability and speed.",
    features: [
      "Low latency",
      "High throughput",
      "Archive nodes",
      "WebSocket support",
      "Rate limiting",
      "Analytics dashboard"
    ],
    icon: Database,
    supportedNetworks: ["ethereum", "polygon", "base", "avail", "arbitrum", "abstract"] // Randomized
  },
  {
    id: "monitoring",
    title: "Monitoring",
    description: "Real-time monitoring and analytics for your blockchain infrastructure.",
    features: [
      "Performance metrics",
      "Alert system",
      "Custom dashboards",
      "Historical data",
      "API integration",
      "Automated reporting"
    ],
    icon: Activity,
    supportedNetworks: ["ethereum", "polygon", "base", "avail", "arbitrum", "abstract"] // All networks
  },
  {
    id: "validator-services",
    title: "Validator Services",
    description: "Secure and reliable validator infrastructure for proof-of-stake networks.",
    features: [
      "Slashing protection",
      "MEV optimization",
      "Redundant setup",
      "Key management",
      "Performance monitoring",
      "Rewards tracking"
    ],
    icon: Shield,
    supportedNetworks: ["ethereum", "polygon", "base", "avail", "arbitrum", "abstract"] // Randomized - Only PoS networks
  },

  {
    id: "rollup-as-a-service",
    title: "RollUp-as-a-Service",
    description: "Deploy and manage your own Layer 2 rollup solutions with ease.",
    features: [
      "Custom rollup chains",
      "Optimistic & ZK rollups",
      "Scalability solutions",
      "Security monitoring",
      "Custom configuration",
      "Technical support"
    ],
    icon: Blocks,
    supportedNetworks: ["ethereum", "polygon", "base", "avail", "arbitrum", "abstract"] // Randomized - L2 focused
  },
  {
    id: "faucet",
    title: "Faucet",
    description: "Automated testnet token distribution system for developers.",
    features: [
      "Multiple networks",
      "Rate limiting",
      "Anti-spam protection",
      "Custom token support",
      "API access",
      "Usage analytics"
    ],
    icon: Droplet,
    supportedNetworks: ["ethereum", "polygon", "base", "avail", "arbitrum", "abstract"] // Randomized
  },
  
];