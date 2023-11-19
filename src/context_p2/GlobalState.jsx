import { createContext, useContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	transactions: [],
};

export const Context = createContext();

export const useGlobalState = () => {
	const context = useContext(Context);
	return context;
};

export const GlobalProvider = ({ children }) => {
	// !  5

	// Actualización del Estado Global:

	const [state, dispatch] = useReducer(AppReducer, initialState);

	// !  3
	// addTransaction es una función en GlobalProvider que se utiliza para agregar una nueva transacción al estado global.
	const addTransaction = transaction => {
		// !  4

		// Se llama a dispatch con un objeto de acción que tiene un tipo 'ADD_TRANSACTION' y un payload que es la transacción que se va a agregar.
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction,
		});
	};

	return (
		<Context.Provider
			value={{
				transactions: state.transactions,
				addTransaction: addTransaction,
			}}
		>
			{' '}
			{children}
		</Context.Provider>
	);
};
