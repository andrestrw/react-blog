import { useState } from 'react';
import { useGlobalState } from '../context_p2/GlobalState';

export const TransactionForm = () => {
	const { addTransaction } = useGlobalState();
	const [description, setDescription] = useState();
	const [amount, setAmount] = useState(0);

	// !  2
	const onSubmit = e => {
		e.preventDefault();
		addTransaction({
			id: 1,
			description, //hola
			amount, //123
		});
	};

	return (
		<div>
			// ! 1
			<form onSubmit={onSubmit} action=''>
				<input
					type='text'
					placeholder='Enter a Descripción'
					onChange={e => setDescription(e.target.value)}
				/>
				<input
					type='number'
					step='0.01'
					placeholder='00.00'
					onChange={e => setAmount(e.target.value)}
				/>

				<button>Add transaction</button>

				{/* si pulsamos el button salta automáticamente el evento onSubmit */}
			</form>
		</div>
	);
};
