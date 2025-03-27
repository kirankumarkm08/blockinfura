import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";
import {
  deleteNodeUrl,
  deployNodeUrl,
  fetchActiveNodes,
  getChains,
} from "../constants";

interface ChainType {
  type: string;
  id: string;
}

interface Chain {
  name: string;
  symbol: string;
  logo_url: string;
  chain_type: ChainType[];
  node_types: string[];
}

interface DeployedNode {
  collection_id: string;
  node_name: string;
  is_active: boolean;
  public_id: string;
  instance_id: string;
  dns_record: string;
  rpc: string;
  wss: string;
}

interface DeploymentData {
  nodeName: string;
  nodeType: string;
  chainType: string;
}

interface DeployResponse {
  message: string;
}

interface ChainState {
  chains: Chain[];
  loadingChains: boolean;
  deployedNodes: DeployedNode[];
  loadingDeployedNodes: boolean;
  loadingDeployment: boolean;
  error: string | null;
  viewNodeData: NodeData;
  loadingDeleteNode: boolean;
}

interface NodeData {
  wss: string;
  rpc: string;
  chainName: string;
}

const initialState: ChainState = {
  chains: [],
  loadingChains: false,
  deployedNodes: [],
  loadingDeployedNodes: false,
  loadingDeployment: false,
  error: null,
  viewNodeData: {
    wss: "",
    rpc: "",
    chainName: "",
  },
  loadingDeleteNode: false,
};

const user_id = localStorage.getItem("loginID");
export const fetchChains = createAsyncThunk<
  Chain[],
  void,
  { rejectValue: string }
>("deploy/fetchChains", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(getChains);
    return response.data.data.chains;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Failed to fetch chains"
    );
  }
});

export const fetchDeployedNodes = createAsyncThunk<
  DeployedNode[],
  string,
  { rejectValue: string }
>("deploy/fetchDeployedNodes", async (user_id, { rejectWithValue }) => {
  try {
    const response = await axios.post(fetchActiveNodes, { user_id });
    return response.data.data.active_nodes || [];
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Failed to fetch deployed nodes"
    );
  }
});

export const deployNode = createAsyncThunk<
  DeployResponse,
  DeploymentData,
  { rejectValue: string }
>("deploy/deployNode", async (data, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post(deployNodeUrl, data);
    user_id && dispatch(fetchDeployedNodes(user_id));
    return response.data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || "Deployment failed");
  }
});

export const deleteNode = createAsyncThunk<
  void,
  {
    collection_id: string;
    dns_record_id: string;
    node_name: string;
    user_id: string;
  },
  { rejectValue: string }
>(
  "deploy/deleteNode",
  async (
    { collection_id, dns_record_id, node_name, user_id },
    { rejectWithValue, dispatch }
  ) => {
    try {
      await axios.delete(deleteNodeUrl, {
        data: { collection_id, dns_record_id, node_name },
      });

      dispatch(fetchDeployedNodes(user_id));
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to delete node"
      );
    }
  }
);

// Create the Redux slice
const deploySlice = createSlice({
  name: "deploy",
  initialState,
  reducers: {
    setViewNodeData: (state, action: PayloadAction<NodeData>) => {
      state.viewNodeData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetching chains
      .addCase(fetchChains.pending, (state) => {
        state.loadingChains = true;
        state.error = null;
      })
      .addCase(fetchChains.fulfilled, (state, action) => {
        state.loadingChains = false;
        state.chains = action.payload;
      })
      .addCase(fetchChains.rejected, (state, action) => {
        state.loadingChains = false;
        state.error = action.payload as string;
      })
      // Handle fetching deployed nodes
      .addCase(fetchDeployedNodes.pending, (state) => {
        state.loadingDeployedNodes = true;
        state.error = null;
      })
      .addCase(fetchDeployedNodes.fulfilled, (state, action) => {
        state.loadingDeployedNodes = false;
        state.deployedNodes = action.payload;
      })
      .addCase(fetchDeployedNodes.rejected, (state, action) => {
        state.loadingDeployedNodes = false;
        state.error = action.payload as string;
      })
      .addCase(deployNode.pending, (state) => {
        state.loadingDeployment = true;
        state.error = null;
      })
      .addCase(deployNode.fulfilled, (state, action) => {
        state.loadingDeployment = false;
      })
      .addCase(deployNode.rejected, (state, action) => {
        state.loadingDeployment = false;
        state.error = action.payload || "Deployment failed";
        console.error("Deployment failed:", action.payload);
      })
      .addCase(deleteNode.pending, (state) => {
        state.loadingDeleteNode = true;
        state.error = null;
      })
      .addCase(deleteNode.fulfilled, (state, action) => {
        state.loadingDeleteNode = false;
      })
      .addCase(deleteNode.rejected, (state, action) => {
        state.loadingDeleteNode = false;
        state.error = action.payload || "Deployment failed";
        console.error("Deployment failed:", action.payload);
      });
  },
});

// Export actions
export const { setViewNodeData } = deploySlice.actions;

// Export selectors
export const selectLoading = (state: RootState) => state.deploy.loadingChains;
export const selectLoadingDeployedNodes = (state: RootState) =>
  state.deploy.loadingDeployedNodes;
export const selectLoadingDeployNode = (state: RootState) =>
  state.deploy.loadingDeployment;
export const selectChains = (state: RootState) => state.deploy.chains;
export const selectDeployedNodes = (state: RootState) =>
  state.deploy.deployedNodes;
export const selectLoadingDeleteNode = (state: RootState) =>
  state.deploy.loadingDeleteNode;
export const selectChainTypeByName = (chainName: string) =>
  createSelector(selectChains, (chains) => {
    const chain = chains.find((c) => c.name === chainName);
    return chain ? chain.chain_type : [];
  });
export const selectViewNodeData = (state: RootState) =>
  state.deploy.viewNodeData;

export default deploySlice.reducer;
