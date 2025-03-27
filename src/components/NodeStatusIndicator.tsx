import { LuCircleCheckBig, LuCircleX } from "react-icons/lu";
import Spinner from "./Spinner";

type NodeStatusIndicatorProps = {
	status: string
}

const NodeStatusIndicator = ({ status }: NodeStatusIndicatorProps) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<div className="mt-10">
					<div className="flex items-center justify-center">
						{
							(status == "Node Created & Deployed successfully" || status == "Successfully deleted Node")
								? <LuCircleCheckBig className="w-10 h-10" style={{ color: 'green' }} />
								: (status == "Node Deployment Failed")
								? <LuCircleX className="w-10 h-10" style={{ color: 'red' }} />
								: <Spinner className="border-yellow-500" />
						}
					</div>
				</div>
				<p className="mt-4 text-black text-lg text-center">{status}</p>
				<div className="mt-4 flex justify-end">
				</div>
			</div>
		</div>
	)
}

export default NodeStatusIndicator;