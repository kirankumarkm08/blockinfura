import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useAppSelector } from "../app/hooks";
import { selectChainTypeByName } from "../features/deploySlice";

interface DeployModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: DeploymentData) => void;
  selectedChain: string;
  availableNodeTypes: string[];
}

export interface DeploymentData {
  node_name: string;
  node_type: string;
  chain_id: string;
  user_id: string | null;
}

export const DeployModal: React.FC<DeployModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  selectedChain,
  availableNodeTypes,
}) => {
  const [nodeName, setNodeName] = useState("");
  const [nodeType, setNodeType] = useState("");
  const [chainType, setChainType] = useState("");
  const [errors, setErrors] = useState({
    nodeName: "",
    nodeType: "",
    chainType: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const user_id = localStorage.getItem("loginID");
  const chain_type = useAppSelector(selectChainTypeByName(selectedChain));

  if (!isOpen) return null;

  const resetForm = () => {
    setNodeName("");
    setNodeType("");
    setChainType("");
    setErrors({ nodeName: "", nodeType: "", chainType: "" });
    setSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = {
      nodeName: nodeName.trim() === "" ? "Node name is required" : "",
      nodeType: nodeType === "" ? "Please select a node type" : "",
      chainType: chainType === "" ? "Please select a chain type" : "",
    };

    setErrors(validationErrors);
    setSubmitted(true);

    if (
      validationErrors.nodeName ||
      validationErrors.nodeType ||
      validationErrors.chainType
    ) {
      return;
    } else {
      onSubmit({
        chain_id: chainType,
        node_name: nodeName,
        node_type: nodeType,
        user_id: user_id,
      });
    }

    handleClose();
  };

  const handleFieldChange = (field: string, value: string) => {
    if (field === "nodeName") {
      setNodeName(value);
      if (value.trim() !== "") setErrors((prev) => ({ ...prev, nodeName: "" }));
    } else if (field === "nodeType") {
      setNodeType(value);
      if (value !== "") setErrors((prev) => ({ ...prev, nodeType: "" }));
    } else if (field === "chainType") {
      setChainType(value);
      if (value !== "") setErrors((prev) => ({ ...prev, chainType: "" }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl w-full max-w-md mx-auto relative min-h-[200px] my-8">
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-4 sm:p-6">
          {/* Header */}
          <h2 className="text-xl sm:text-2xl font-bold mb-4 pr-8">
            Deploy {selectedChain} Node
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {/* Node Name Input */}
            <div>
              <label
                htmlFor="nodeName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Node Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nodeName"
                value={nodeName}
                onChange={(e) => handleFieldChange("nodeName", e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base ${
                  errors.nodeName && submitted
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter node name"
              />
              {submitted && errors.nodeName && (
                <p className="mt-1 text-sm text-red-500">{errors.nodeName}</p>
              )}
            </div>

            {/* Node Type Radio Buttons */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Node Type <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {availableNodeTypes.map((type) => (
                  <label
                    key={type}
                    className={`flex items-center w-full p-2 sm:p-3 border rounded-lg cursor-pointer transition-colors ${
                      nodeType === type
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="nodeType"
                      value={type}
                      checked={nodeType === type}
                      onChange={(e) =>
                        handleFieldChange("nodeType", e.target.value)
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm sm:text-base">
                      {type?.charAt(0).toUpperCase() + type?.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
              {submitted && errors.nodeType && (
                <p className="mt-1 text-sm text-red-500">{errors.nodeType}</p>
              )}
            </div>

            {/* Chain Type Radio Buttons */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chain Type <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {chain_type.map((typeObj) => (
                  <label
                    key={typeObj.id} 
                    className={`flex items-center w-full p-2 sm:p-3 border rounded-lg cursor-pointer transition-colors ${
                      chainType === typeObj.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="chainType"
                      value={typeObj.id}
                      checked={chainType === typeObj.id}
                      onChange={(e) =>
                        handleFieldChange("chainType", e.target.value)
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm sm:text-base">
                      {typeObj?.type.charAt(0).toUpperCase() +
                        typeObj?.type.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
              {submitted && errors.chainType && (
                <p className="mt-1 text-sm text-red-500">{errors.chainType}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 mt-6">
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm sm:text-base"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full sm:w-auto px-4 py-2 text-white bg-[#E99710] rounded-lg hover:bg-[#d88a0e] text-sm sm:text-base"
              >
                Deploy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
