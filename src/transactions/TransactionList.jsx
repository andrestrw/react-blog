import { useGlobalState } from '../context_p2/GlobalState';
import { TransactionItem } from './TransactionItem';

export const TransactionList = () => {
	const { transactions } = useGlobalState();

	return (
		<>
			<h3 className='text-slate-300 text-xl font-bold '>History</h3>
			<ul>
				{transactions.map(transaction => (
					<TransactionItem
						transaction={transaction}
						key={transaction.id}
					></TransactionItem>
				))}
			</ul>
		</>
	);
};
