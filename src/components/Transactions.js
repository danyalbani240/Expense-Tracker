const Transactions = ({ transactions }) => {
	return (
		<div>
			{transactions.map((transaction) => {
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
