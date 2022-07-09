import { useState } from "react";
import Overview from "./Overview";
import Transactions from "./Transactions";

const ExpenseTracker = () => {
	const calculateExpense = () => {
		const transactions = JSON.parse(localStorage.getItem("transactions"));
		let expenses = 0;
		for (const transaction of transactions) {
			if (transaction.type === "expense") {
				expenses += +transaction.amount;
			}
		}
		return expenses;
	};
	const calculateIncome = () => {
		const transactions = JSON.parse(localStorage.getItem("transactions"));
		let incomes = 0;
		for (const transaction of transactions) {
			if (transaction.type === "income") {
				incomes += +transaction.amount;
			}
		}
		return incomes;
	};
	const [expense, setExpense] = useState(
		localStorage.transactions === undefined ? 0 : calculateExpense()
	);
	const [income, setIncome] = useState(
		localStorage.transactions === undefined ? 0 : calculateIncome()
	);
	const [transactions, setTransactions] = useState(
		localStorage.transactions === undefined
			? []
			: JSON.parse(localStorage.getItem("transactions"))
	);

	const addTransaction = (data) => {
		const newTransaction = { ...data, id: Date.now() };
		setTransactions([...transactions, newTransaction]);

		localStorage.setItem(
			"transactions",
			JSON.stringify([...transactions, newTransaction])
		);
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
