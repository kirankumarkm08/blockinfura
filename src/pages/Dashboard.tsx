import React, { useState, useEffect } from "react";
import { Server, Shield, Activity, Database, AlertCircle } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  deleteNode,
  deployNode,
  fetchChains,
  fetchDeployedNodes,
  selectChains,
  selectDeployedNodes,
  selectLoading,
  selectLoadingDeleteNode,
  selectLoadingDeployNode,
} from "../features/deploySlice";
import { DeployModal } from "../components/DeployModal";
import { useNavigate } from "react-router-dom";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import DeleteSkeleton from "../components/DeleteSkeleton";
import NodeStatusIndicator from "../components/NodeStatusIndicator";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const chainsList = useAppSelector(selectChains);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deploymentChain, setDeploymentChain] = useState<string | null>(null);
  const [availableNodeTypes, setAvailableNodeTypes] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const deployedNodes = useAppSelector(selectDeployedNodes);
  const loader = useAppSelector(selectLoading);
  const loadingDeployNode = useAppSelector(selectLoadingDeployNode);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [nodeToDelete, setNodeToDelete] = useState<any>(null);
  const [nodeStatus, setNodeStatus] = useState<string>('')
  const [nodeDeployStatusModal, setNodeDeployStatusModal] = useState<boolean>(false)
  const [nodeDeleteStatusModal, setNodeDeleteStatusModal] = useState<boolean>(false)
  const deleteLoadingState = useAppSelector(selectLoadingDeleteNode);
  const user_id = localStorage.getItem("loginID");
  const navigate = useNavigate();

  const handleDeploy = (chainId: string, nodeTypes: string[]) => {
    setDeploymentChain(chainId);
    setAvailableNodeTypes(nodeTypes);
    setIsModalOpen(true);
  };

  const handleDeployment = async (data: any) => {
    // Start API call immediately
    const nodeDeployPromise = dispatch(deployNode(data));
    
    setNodeDeployStatusModal(true);

    // Show status updates while API is processing
    setNodeStatus("Setting up Deployment");
  
    setTimeout(() => {
      setNodeStatus("Creating Instance");
    }, 10000);
  
    setTimeout(() => {
      setNodeStatus("Creating DNS Record");
    }, 20000);
  
    setTimeout(() => {
      setNodeStatus("Deploying Node");
    }, 30000);
  
    // Wait for API response after timeouts have started
    const nodeDeployResponse = await nodeDeployPromise;
  
    // Handle response after API call completes
    if (nodeDeployResponse?.payload?.status_code == 200) {
      setNodeStatus("Node Created & Deployed successfully");
      setTimeout(() => {
        setNodeDeployStatusModal(false)
        setNodeStatus("");
        setActiveTab(1);
      }, 3000);
    }

    if (nodeDeployResponse?.error?.message == "Rejected") {
      setNodeStatus("Node Deployment Failed");
      setTimeout(() => {
        setNodeDeployStatusModal(false)
        setNodeStatus("");
      }, 3000);
    }
  };
  

  const handleView = (
    id: string,
    chainName: string,
    rpc: string,
    wss: string
  ) => {
    localStorage.setItem("viewNode", JSON.stringify({ chainName, rpc, wss }));
    navigate(`/node/${id}`);
  };

  const handleDeleteNode = (node: any) => {
    setNodeToDelete(node);
    setShowConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    let nodeDeletePromise;
    setNodeDeleteStatusModal(true)
    if (nodeToDelete) {
      nodeDeletePromise = dispatch(
        deleteNode({
          node_name: nodeToDelete.node_name,
          dns_record_id: nodeToDelete.dns_record_id,
          collection_id: nodeToDelete.collection_id,
          user_id: user_id ?? "",
        })
      );
      setShowConfirmDelete(false);
    }
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
      }, 3000)
    }
  };

  const handleCloseModal = () => {
    setShowConfirmDelete(false);
  };

  const SkeletonCard = () => (
    <div className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        <div>
          <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
          <div className="h-3 w-20 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="h-20 bg-gray-200 rounded"></div>
      <div className="mt-4 h-8 bg-gray-300 rounded"></div>
    </div>
  );

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

  useEffect(() => {
    dispatch(fetchChains());
    dispatch(fetchDeployedNodes(user_id ?? ""));
  }, [dispatch, user_id]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
      <>
        {/* Dashboard Header */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Infrastructure Dashboard
              </h1>
              <p className="text-gray-600 mt-2">
                Manage your blockchain infrastructure
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2 shadow-md cursor-pointer">
                <Activity className="h-5 w-5 text-green-400" />
                <span>
                  Active Nodes:{" "}
                  {deployedNodes?.length === 0 ? 0 : deployedNodes?.length}
                </span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2 shadow-md cursor-pointer">
                <Database className="h-5 w-5 text-blue-400" />
                <span>Total Storage: 0</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2 shadow-md cursor-pointer">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
                <span>Alerts: 0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex border-b border-gray-200">
            <button
              className={`py-2 px-4 text-md font-medium transition-all ${activeTab === 0
                ? "border-b-4 border-[#E99710] text-[#E99710]"
                : "text-gray-500 hover:text-gray-800"
                }`}
              onClick={() => setActiveTab(0)}
            >
              Available Nodes
            </button>
            <button
              className={`py-2 px-4 text-md font-medium transition-all ${activeTab === 1
                ? "border-b-4 border-[#E99710] text-[#E99710]"
                : "text-gray-500 hover:text-gray-800"
                }`}
              onClick={() => setActiveTab(1)}
            >
              Deployed Nodes
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 0 && (
          <div>
            {loader || loadingDeployNode ? (
              <div className="grid md:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  {chainsList.map((chain: any) => (
                    <div
                      key={chain?.name}
                      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group`}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">
                            {chain.logo_url ? (
                              <img
                                src={chain.logo_url}
                                alt={chain.name}
                                className="h-8 w-8 rounded-full"
                              />
                            ) : (
                              <Shield className="h-8 w-8" />
                            )}
                          </span>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#E99710]">
                              {chain.name}
                            </h3>
                            <span className="text-sm text-gray-600">
                              Network Load: 50%
                            </span>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${"Healthy" === "Healthy"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                            }`}
                        >
                          Healthy
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-gray-600 mb-3">
                            Available Node Types
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {chain.node_types.map((type: string) => (
                              <div
                                key={type}
                                className="btn-secondary inline-flex items-center group bg-white rounded-lg shadow-md px-2 py-1"
                              >
                                <Server className="h-4 w-4 mr-2" />
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <button
                            onClick={() =>
                              handleDeploy(chain.name, chain.node_types)
                            }
                            className="bg-[#E99710] text-white px-6 py-2 rounded-lg hover:bg-[#d88a0e] transition-colors"
                          >
                            Deploy
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === 1 && (
          <div>
            {deployedNodes.length === 0 ? (
              <div className="flex flex-col items-center justify-center my-24">
                <h3 className="text-lg text-gray-500">No nodes yet</h3>
                <p className="text-sm text-gray-400">
                  Deploy your dedicated node today to connect to the network.
                </p>
                <button
                  onClick={() => setActiveTab(0)}
                  className="mt-4 bg-[#E99710] text-white px-6 py-2 rounded-lg hover:bg-[#d88a0e] transition-colors"
                >
                  Deploy a Node
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {deleteLoadingState ? (
                  <>
                    {Array.from({ length: 4 }).map(
                      (_: any, index: React.Key | null | undefined) => (
                        <DeleteSkeleton key={index} />
                      )
                    )}
                  </>
                ) : (
                  <>
                    {" "}
                    {searchDeployedNodes.map((node, index) => {
                      const chain = chainsList.find((chain) =>
                        chain.chain_type.some(
                          (type) => type.id === node.chainTypeId
                        )
                      );

                      return (
                        <div
                          key={index}
                          className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
                        >
                          {/* Header Section */}
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-semibold text-gray-800 truncate max-w-[70%]">
                              {node.node_name.charAt(0).toUpperCase() +
                                node.node_name.slice(1)}
                            </h4>
                            {node.is_active && (
                              <div className="flex items-center space-x-2 bg-green-50 px-2 py-1 rounded-full">
                                <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-xs font-medium text-green-600">
                                  Active
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="mb-3">
                            <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 mb-2">
                              <p className="text-xs text-gray-500 font-medium mb-1">
                                Chain Name
                              </p>
                              <p className="text-sm font-semibold text-gray-700 truncate">
                                {chain?.name || "Unknown"}
                              </p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 mb-2">
                              <p className="text-xs text-gray-500 font-medium mb-1">
                                Chain Type
                              </p>
                              <p className="text-sm font-semibold text-gray-700 truncate">
                                {(node?.chainType ?? "")
                                  .charAt(0)
                                  .toUpperCase() +
                                  (node?.chainType ?? "").slice(1)}
                              </p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 mb-2">
                              <p className="text-xs text-gray-500 font-medium mb-1">
                                Node Type
                              </p>
                              <p className="text-sm font-semibold text-gray-700 truncate">
                                {node.nodeType.charAt(0).toUpperCase() +
                                  node.nodeType.slice(1)}
                              </p>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => {
                                if (node?.chainTypeId) {
                                  handleView(
                                    node.chainTypeId,
                                    node?.chainName,
                                    node?.rpc,
                                    node?.wss
                                  );
                                }
                              }}
                              className="flex-1 bg-[#E99710] hover:bg-[#d88a0e] text-white px-1 py-2.5 rounded-lg transition-colors duration-200 font-medium text-sm"
                            >
                              View Details
                            </button>
                            <button
                              onClick={() => handleDeleteNode(node)}
                              className="flex-1 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-1 py-2.5 rounded-lg transition-colors duration-200 font-medium text-sm"
                            >
                              Delete Node
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {deploymentChain && (
          <DeployModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleDeployment}
            selectedChain={deploymentChain}
            availableNodeTypes={availableNodeTypes}
          />
        )}
        <ConfirmDeleteModal
          show={showConfirmDelete}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
          nodeName={nodeToDelete?.node_name || ""}
        />
        {
          nodeDeployStatusModal && <NodeStatusIndicator status={nodeStatus} />
        }
        {
          nodeDeleteStatusModal && <NodeStatusIndicator status={nodeStatus} />
        }
      </>
    </div>
  );
};

export default Dashboard;
