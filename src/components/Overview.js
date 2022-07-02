import { useState } from "react";
import TransactionForm from "./TransactionForm";

const Overview = ({ income, expense, addTransaction }) => {
	const [isShow, setIsShow] = useState(false);
	return (
		<>
			<div className="expense-app">
				<p>Balance : {income - expense}</p>
				<button
					className={`btn ${isShow ? "cancel" : ""}`}
					onClick={() => setIsShow(!isShow)}
				>
					{isShow ? "Cancel" : "Add"}
				</button>
			</div>
			{isShow && <TransactionForm addTransaction={addTransaction} />}
			<div className="result-section">
				<div className="expense-box">
					Expense <span style={{ color: "red" }}>{expense}</span>
				</div>
				<div className="expense-box">
					Income <span>{income}</span>{" "}
				</div>
			</div>
		</>
	);
};

export default Overview;
