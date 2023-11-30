import { useGlobalState } from '../context_p2/GlobalState';

export const TransactionItem = ({ transaction }) => {
	const { deleteTransaction } = useGlobalState();

	return (
		<li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center '>
			<p className='text-sm w-3/6  '>{transaction.description}</p>
			<div className=' w-3/6 flex justify-around	'>
				<span>${transaction.amount}</span>
				<button
					onClick={() => {
						deleteTransaction(transaction.id);
					}}
				>
					x
				</button>
			</div>
		</li>
	);
};
