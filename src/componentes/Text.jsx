// import { useState } from 'react';

// export const Text = () => {
// 	const [show, setShow] = useState(true);

// 	function handleShow() {
// 		setShow(!show);
// 	}

// 	return (
// 		<div>
// 			<button onClick={handleShow}>Mostrar / Ocultar</button>
// 			<h2>Hola Mundo</h2>
// 		</div>
// 	);
// };

import { useState } from 'react';

import { TextH2 } from './TextH2';

export const Text = () => {
	const [show, setShow] = useState(false);

	function handleShow() {
		setShow(!show);
	}

	return (
		<div>
			<button onClick={handleShow}>
				{show === true ? 'Ocultar' : 'Mostrar'}
				{show ? 'Ocultar' : 'Mostrar'}
			</button>

			{show === true && <TextH2></TextH2>}
		</div>
	);
};
