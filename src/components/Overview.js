import { useState } from "react";
import TransactionForm from "./TransactionForm";

const Overview = ({ income, expense, addTransaction }) => {
	const [isShow, setIsShow] = useState(false);
	return (
		<>
			<div className="expense-app">
				<p>Balance : {income - expense}</p>
				<button onClick={() => setIsShow(!isShow)}>
					{isShow ? "Cancel" : "Add"}
				</button>
			</div>
			{isShow && <TransactionForm addTransaction={addTransaction} />}
			<div className="result-section">
				<div>Expense : {expense}</div>
				<div>Income : {income}</div>
			</div>
		</>
	);
};

export default Overview;
