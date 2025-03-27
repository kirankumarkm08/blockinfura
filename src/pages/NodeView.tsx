import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Server,
  Activity,
  Link as LinkIcon,
  Zap,
  Clock,
  Database,
  Globe,
  Copy,
  MoveLeft,
  Trash2,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { deleteNode, selectChains, selectDeployedNodes } from "../features/deploySlice";
import NodeStatusIndicator from "../components/NodeStatusIndicator";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";

const mockData = Array.from({ length: 24 }, (_, i) => ({
  time: `${String(i).padStart(2, "0")}:00`,
  requests: Math.floor(Math.random() * 1000) + 500,
  latency: Math.floor(Math.random() * 100) + 20,
}));

const NodeView = () => {
  const { id } = useParams();
  const [copied, setCopied] = useState<string | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const nodeData = JSON.parse(localStorage.getItem("viewNode") || "{}");
  const navigate = useNavigate();
  const deployedNodes = useAppSelector(selectDeployedNodes);
  const user_id = localStorage.getItem("loginID");
  const chainsList = useAppSelector(selectChains);

  const searchDeployedNodes = deployedNodes.map((node) => {
    const chain = chainsList.find((chain) =>
      chain.chain_type.some((type) => node.rpc.includes(type.id))
    );

    return {
      ...node,
      chainType: chain
        ? chain.chain_type.find((type) => node.rpc.includes(type.id))?.type
        : "Unknown",
      chainTypeId: chain
        ? chain.chain_type.find((type) => node.rpc.includes(type.id))?.id
        : "Unknown",
      nodeType: chain ? chain.node_types[0] : "Unknown",
      chainName: chain ? chain.name : "",
      rpc: node.rpc,
      wss: node.wss,
      collection_id: node.collection_id,
      dns_record_id: node.dns_record,
    };
  });

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
      })
      .catch(() => {
        setCopied(null);
      });
  };

  const [nodeDeleteStatusModal, setNodeDeleteStatusModal] = useState<boolean>(false)
  const [nodeStatus, setNodeStatus] = useState<string>('')
  const dispatch = useAppDispatch();


  const handleCloseModal = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };

  const handleConfirmDelete = async () => {
    const nodeToDelete = searchDeployedNodes?.filter((nodes) => {
      return nodes?.chainName === nodeData?.chainName
    })

    let nodeDeletePromise;
    setNodeDeleteStatusModal(true)
    if (nodeToDelete[0]) {
      nodeDeletePromise = dispatch(
        deleteNode({
          node_name: nodeToDelete[0]?.node_name,
          dns_record_id: nodeToDelete[0]?.dns_record_id,
          collection_id: nodeToDelete[0].collection_id,
          user_id: user_id ?? "",
        })
      );
    }
    setShowConfirmDelete(false);
    setNodeStatus("Deleting Instace");
    setTimeout(() => {
      setNodeStatus("Deleting Stack and Resource")
    }, 10000)
    setTimeout(() => {
      setNodeStatus("Deleting DNS Records")
    }, 15000)
    setTimeout(() => {
      setNodeStatus("Cleaning up ")
    }, 20000)
    const nodeDeleteResponse = await nodeDeletePromise;

    if (nodeDeleteResponse?.meta?.requestStatus == "fulfilled") {
      setNodeStatus("Successfully deleted Node")
      setTimeout(() => {
        setNodeDeleteStatusModal(false)
        setNodeStatus("")
        navigate("/dashboard")
      }, 3000)
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
      <div className="flex justify-between items-center">
        <button className="flex items-center px-3 py-2 font-semibold rounded cursor-pointer text-white w-fit" style={{ background: '#e99710' }} onClick={() => navigate("/dashboard")}>
          <MoveLeft className="mr-4" style={{ color: 'white' }} /> Back
        </button>
        <button className="flex items-center px-3 py-2 font-semibold rounded cursor-pointer text-white w-fit" style={{ background: '#e99710' }}
          onClick={() => handleCloseModal()}>
          <Trash2 className="mr-4" style={{ color: 'white' }} /> Delete
        </button>
      </div>

      {/* Node Overview */}
      <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Server className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">
                {nodeData?.chainName}
              </h1>
              <p className="text-gray-600">ID: {id}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
              <Activity className="h-4 w-4" />
              Healthy
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: Clock,
              label: "Uptime",
              value: "99.9%",
              color: "text-green-400",
              bg: "bg-green-500/10",
            },
            {
              icon: Zap,
              label: "Response Time",
              value: "45ms",
              color: "text-yellow-400",
              bg: "bg-yellow-500/10",
            },
            {
              icon: Database,
              label: "Storage Used",
              value: "234 GB",
              color: "text-purple-400",
              bg: "bg-purple-500/10",
            },
            {
              icon: Globe,
              label: "Region",
              value: "US East",
              color: "text-blue-400",
              bg: "bg-blue-500/10",
            },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">{stat.label}</span>
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Endpoints */}
        <div className="space-y-4">
          {[
            {
              title: "RPC Endpoint",
              value: `${nodeData?.rpc}`,
              icon: Globe,
            },
            {
              title: "WebSocket Endpoint",
              value: `${nodeData?.wss}`,
              icon: LinkIcon,
            },
          ].map((endpoint, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <endpoint.icon className="h-5 w-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {endpoint.title}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 overflow-x-auto">
                  <code className="block bg-gray-100 p-3 rounded-lg font-mono text-sm whitespace-nowrap">
                    {endpoint.value}
                  </code>
                </div>

                <button
                  onClick={() => handleCopy(endpoint.value)}
                  className="relative p-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition group"
                >
                  <Copy className="h-6 w-6" />
                </button>

                {/* Show confirmation message when copied */}
                {copied === endpoint.value && (
                  <span className="ml-2 text-green-500">Copied!</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-800">
            Performance Metrics
          </h2>
          <select className="btn-secondary">
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Requests Chart */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Requests per Hour
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="time" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#FFFFFF",
                      border: "none",
                      borderRadius: "0.5rem",
                      color: "#000",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="requests"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Latency Chart */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Average Latency (ms)
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="time" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#FFFFFF",
                      border: "none",
                      borderRadius: "0.5rem",
                      color: "#000",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="latency"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      {
        nodeDeleteStatusModal && <NodeStatusIndicator status={nodeStatus} />
      }
      <ConfirmDeleteModal
        show={showConfirmDelete}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        nodeName={nodeData?.chainName}
      />
    </div>
  );
};

export default NodeView;
