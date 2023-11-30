// import { Context } from '../context_p2/GlobalState';
// import { useContext } from 'react';

// const data = useContext(Context); 3 Poder accederlo
import { useEffect } from 'react';
import { useGlobalState } from '../context_p2/GlobalState';

export const Balance = () => {
	const { transactions } = useGlobalState();
	// Aquí, useGlobalState() devuelve el objeto que se proporcionó como value en el contexto, que tiene la siguiente estructura:

	// transactions = {
	// 	transactions: state.transactions,
	// 	addTransaction: addTransaction,
	// 	deleteTransaction,
	//   }
	const amounts = transactions.map(transaction => transaction.amount);

	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

	// transactions -> arreglo de objetos en el cual cada uno tiene un id, un description y un amount

	return (
		<div className='flex justify-between'>
			<h3>Your Balance</h3>
			<h1 className='text-2xl font-bold'>${total}</h1>
		</div>
	);
};

useEffect;
