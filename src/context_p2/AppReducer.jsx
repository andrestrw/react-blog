export default (state, action) => {
	switch (action.type) {
		case 'ADD_TRANSACTION':
			return {
				...state,
				transactions: [...state.transactions, action.payload],
				// transactions: [...state.transactions, action.payload] actualiza la propiedad transactions con un nuevo array. Este nuevo array incluye todas las transacciones existentes (...state.transactions) más la nueva transacción que proviene de action.payload.
			};
		case 'DELETE_TRANSACTION':
			return {
				// { ...state }: Esto utiliza el operador de propagación (...) para crear una copia superficial del objeto state. Esto es para asegurarse de no modificar directamente el estado existente.
				...state,
				transactions: state.transactions.filter(
					transaction => transaction.id !== action.payload
				),
			};
		default:
			return state;
	}
};

// si tienes múltiples funciones o elementos que deseas exportar, pero solo uno de ellos debe ser la exportación predeterminada, puedes exportar los demás como exportaciones con nombre (sin default).

// payload

// id: 1,
// description, //hola
// amount, //123
