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
			id: window.crypto.randomUUID(),
			description, //hola
			amount: +amount,
		});
	};

	return (
		<div className='mt-4'>
			<form onSubmit={onSubmit} action=''>
				<input
					type='text'
					placeholder='Enter a Descripción'
					onChange={e => {
						// console.log(e); // Agrega console.log dentro de las llaves
						setDescription(e.target.value);
					}}
					className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
				/>
				<input
					type='number'
					step='0.01'
					placeholder='00.00'
					onChange={e => setAmount(e.target.value)}
					className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
				/>

				<button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'>
					Add transaction
				</button>

				{/* si pulsamos el button salta automáticamente el evento onSubmit */}
			</form>
		</div>
	);
};
