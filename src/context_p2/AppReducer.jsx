export default (state, action) => {
	switch (action.type) {
		case 'ADD_TRANSACTION':
			return {
				...state,
				transactions: [...state.transactions, action.payload],
			};
		default:
			return state;
	}
};

// si tienes múltiples funciones o elementos que deseas exportar, pero solo uno de ellos debe ser la exportación predeterminada, puedes exportar los demás como exportaciones con nombre (sin default).
