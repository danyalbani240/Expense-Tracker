import { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
	const [formValues, setFormValues] = useState({
		type: "expense",
		amount: 0,
		description: "",
	});
	const changeHandler = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		addTransaction(formValues);
	};
	return (
		<form onSubmit={submitHandler}>
			<input
				type={"text"}
				name={"description"}
				onChange={changeHandler}
			/>
			<input type={"number"} name={"amount"} onChange={changeHandler} />
			<div>
				<input
					type="radio"
					value={"expense"}
					onChange={changeHandler}
					name={"type"}
					checked={formValues.type === "expense"}
					id="expenseCheck"
				/>
				<label htmlFor="expenseCheck">Expense</label>
				<input
					type="radio"
					value={"income"}
					onChange={changeHandler}
					name={"type"}
					checked={formValues.type === "income"}
					id="incomeCheck"
				/>
				<label htmlFor="incomeCheck">Income</label>
			</div>
			<button>Add Transaction</button>
		</form>
	);
};

export default TransactionForm;
