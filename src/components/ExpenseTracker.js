import { useState } from "react";
import Overview from "./Overview";
import Transactions from "./Transactions";

const ExpenseTracker = () => {
	const [expense, setExpense] = useState(0);
	const [income, setIncome] = useState(0);
	const [transactions, setTransactions] = useState([]);
	const addTransaction = (data) => {
		setTransactions([...transaction, { ...data, id: Date.now() }]);
	};
	return (
		<div className="container">
			<Overview
				addTransaction={addTransaction}
				income={income}
				expense={expense}
			/>
			<Transactions transaction={transaction} />
		</div>
	);
};

export default ExpenseTracker;
