import { useState } from "react";
import Overview from "./Overview";
import Transactions from "./Transactions";

const ExpenseTracker = () => {
	const [expense, setExpense] = useState(0);
	const [income, setIncome] = useState(0);
	const [transactions, setTransactions] = useState([]);
	const addTransaction = (data) => {
		setTransactions([...transactions, { ...data, id: Date.now() }]);
		if (data.type === "income") {
			setIncome((oldValue) => oldValue + +data.amount);
		} else {
			setExpense((oldValue) => oldValue + +data.amount);
		}
	};
	return (
		<div className="container">
			<Overview
				addTransaction={addTransaction}
				income={income}
				expense={expense}
			/>
			<Transactions transactions={transactions} />
		</div>
	);
};

export default ExpenseTracker;
