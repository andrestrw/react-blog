import { createContext, useContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	transactions: [],
};

export const Context = createContext();

// custom hook
export const useGlobalState = () => {
	const context = useContext(Context);
	return context;
};
// Retorno de context:

// La función useGlobalState simplemente retorna el valor del contexto obtenido. En otras palabras, retorna el objeto que has definido en el value de tu proveedor de contexto.

export const GlobalProvider = ({ children }) => {
	// !  5

	// Actualización del Estado Global:

	const [state, dispatch] = useReducer(AppReducer, initialState, () => {
		const localData = localStorage.getItem('transactions');
		return localData ? JSON.parse(localData) : initialState;
	});

	useEffect(() => {
		localStorage.setItem('transactions', JSON.stringify(state));
	}, [state]);

	// !  3
	// addTransaction es una función en GlobalProvider que se utiliza para agregar una nueva transacción al estado global.
	const addTransaction = transaction => {
		// !  4

		// Se llama a dispatch con un objeto de acción que tiene un tipo 'ADD_TRANSACTION' y un payload que es la transacción que se va a agregar.
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction,
		});
		// id: 1,
		// description, //hola
		// amount, //123
	};
	const deleteTransaction = id => {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id,
		});
	};

	return (
		<Context.Provider
			value={{
				// La desestructuración significa que ahora transactions contendrá el valor de state.transactions, que es el array de transacciones del estado global. Por lo tanto, transactions en este caso es una variable que contiene la información asociada al estado y sus transacciones. Puedes utilizar transactions para acceder a la información del estado global relacionada con las transacciones en tu componente React.
				transactions: state.transactions,
				// Dentro de la prop value de <Context.Provider>, se proporciona un objeto que contiene pares clave-valor. Cada clave representa una propiedad del contexto, y su valor asociado es lo que estará disponible para los componentes hijos que consuman ese contexto.
				addTransaction: addTransaction,
				// Así, el addTransaction que está a la izquierda dentro del Context.Provider guarda la función addTransaction que has definido en el ámbito de GlobalProvider, y cualquier componente que consuma el contexto tendrá acceso a esta función para realizar acciones específicas en el estado global.
				deleteTransaction,

				// Este componente es un proveedor de contexto (Context.Provider) que utiliza el contexto de React para proporcionar un estado global (state.transactions, addTransaction, y deleteTransaction) a todos sus componentes hijos.
			}}
		>
			{' '}
			{children}
		</Context.Provider>
	);
};

// children en este contexto permite que todos los componentes hijos de <GlobalProvider> tengan acceso al contexto global proporcionado por el Context.Provider, lo que facilita la gestión del estado global en la aplicación React.
