const BASE_URL = import.meta.env.VITE_BASE_URL;
import { Server, Shield, Zap } from "lucide-react";
import { FeaturesType } from "@/types";
import animation1 from "../components/animationsjson/Availability.json";
import animation2 from "../components/animationsjson/Security.json";
import animation3 from "../components/animationsjson/Fast.json";

export const getChains = `https://api.blockinfura.com/v1/chains`;

export const fetchActiveNodes =
  "https://api.blockinfura.com/v1/node/userActiveNodes";

export const deployNodeUrl = "https://api.blockinfura.com/v1/node/deploy";

export const deleteNodeUrl =
  "https://api.blockinfura.com/v1/node/deleteStackResource";

export const FeaturesGrid: FeaturesType[] = [
  {
    icon: Server,
    title: "High Availability",
    description: "99.9% uptime guarantee with global infrastructure",
    animation: animation2,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with advanced DDoS protection",
    animation: animation1,
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Ultra-low latency responses with global edge network",
    animation: animation3,
  },
];
