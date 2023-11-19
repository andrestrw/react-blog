// import { Context } from '../context_p2/GlobalState';
// import { useContext } from 'react';
import { useGlobalState } from '../context_p2/GlobalState';

export const Balance = () => {
	const data = useGlobalState();

	return (
		<div>
			<h1>Balance</h1>
			{/* función en JavaScript que toma un valor y lo convierte en una cadena de texto en formato JSON. */}
			<div>{JSON.stringify(data)}</div>
		</div>
	);
};
