import { useEffect, useState } from "react";

const Transactions = ({ transactions }) => {
	const [searchedTransation, setSearchedTransation] = useState("");
	const [filteredTransactions, setFilteredTransactions] =
		useState(transactions);
	const changeHandler = (e) => {
		setSearchedTransation(e.target.value);
		filterTransactions(e.target.value);
	};
	const filterTransactions = (searched) => {
		if (searched === "" || searched === " ") {
			setFilteredTransactions(transactions);
			return;
		}
		const filtered = [...transactions].filter((item) =>
			item.description.toLowerCase().includes(searched.toLowerCase())
		);
		setFilteredTransactions(filtered);
	};
	// updating filteredTransactions when some new transactions added
	useEffect(() => {
		filterTransactions(searchedTransation);
	}, [transactions]);
	return (
		<div>
			<input
				type={"search"}
				onChange={changeHandler}
				value={searchedTransation}
				placeholder={"search for transaction"}
				className="search"
			/>
			{filteredTransactions.map((transaction) => {
				return (
					<div
						key={transaction.id}
						className="transaction"
						style={{
							borderRight:
								transaction.type === "expense"
									? "4px solid red"
									: "4px solid green",
						}}
					>
						<span>{transaction.description} </span>
						<span>{transaction.amount}$</span>
					</div>
				);
			})}
		</div>
	);
};

export default Transactions;
