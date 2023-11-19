import React, { useState } from 'react';

export const Counter = () => {
	const [valorNumerico, setvalorNumerico] = useState(0);

	function aumentoValor() {
		setvalorNumerico(valorNumerico + 1);
	}

	function decrementoValor() {
		setvalorNumerico(valorNumerico - 1);
	}

	return (
		<div>
			<button onClick={aumentoValor}>aumento</button>

			{/* Contado */}
			<div>Contador con valor: {valorNumerico}</div>

			<button onClick={decrementoValor}>resta</button>
		</div>
	);
};

// import { useState } from 'react';

// export const Counter = () => {
// 	const [number, setNumber] = useState(0);

// 	const sumar = () => {
// 		setNumber(number + 1);
// 	};

// 	const restar = () => {
// 		setNumber(number - 1);
// 	};

// 	return (
// 		<div>
// 			<button onClick={sumar}>Sumar</button>
// 			<h2>{number}</h2>
// 			<button onClick={restar}>restar</button>
// 			<hr />
// 		</div>
// 	);
// };
