import { SelectedCustomer } from "./SelectedCustomer";
import { useContext } from "react";
import { CustomerContext } from "@/contexts/customerContext";
import { ModalContext } from "@/contexts/modalContext";
import { Loader } from "./Loader";
import { FiDownload, FiPlus } from "react-icons/fi";

export const Customer = () => {
	const { retrieveLoading, customerRetrieve } = useContext(CustomerContext);
	const { setAddCustomer } = useContext(ModalContext);

	return (
		<div className="h-full w-full md:w-3/5 flex flex-col gap-4">
			<div className="w-full rounded-xl h-24 flex items-center p-2 md:p-4 justify-between border border-gray-100 shadow-md bg-gray-100 bg-clip-padding backdrop-filter bg-opacity-50 dark:bg-gray-900 dark:bg-clip-padding dark:backdrop-filter dark:bg-opacity-50 dark:border-gray-400">
				<button className="flex items-center  gap-1 md:gap-2 py-1 px-2 md:py-2 md:px-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-400 bg-clip-padding backdrop-filter bg-opacity-50 hover:shadow-xl transition duration-200">
					<FiDownload /> Download report
				</button>
				<button
					onClick={() => setAddCustomer(true)}
					className=" md:gap-2 py-1 px-2 md:py-2 md:px-4 flex items-center gap-1 rounded-lg bg-gray-100 dark:bg-zinc-800 dark:text-gray-100 dark:border-gray-400 text-gray-700 shadow-md hover:shadow-xl border border-gray-100 transition duration-200"
				>
					<span className="text-xl">
						<FiPlus />
					</span>
					New Customer
				</button>
			</div>
			<div className="h-full w-full p-2 md:p-4 flex flex-col gap-4 rounded-xl overflow-y-auto border border-gray-100 shadow-md bg-gray-100 bg-clip-padding backdrop-filter bg-opacity-50 dark:bg-gray-900 dark:bg-clip-padding dark:backdrop-filter dark:bg-opacity-50 dark:border-gray-400">
				{retrieveLoading ? (
					<Loader />
				) : customerRetrieve ? (
					<SelectedCustomer
						id={customerRetrieve.id}
						avatarUrl={customerRetrieve.avatarUrl}
						createdAt={customerRetrieve.createdAt}
						email={customerRetrieve.email}
						name={customerRetrieve.name}
						phone={customerRetrieve.phone}
						contacts={customerRetrieve.contacts}
					/>
				) : (
					<h1 className="text-xl font-semibold">
						Welcome to Contact Plus! We're thrilled to have you on board. Let's get
						started on managing your contacts with ease.
					</h1>
				)}
			</div>
		</div>
	);
};