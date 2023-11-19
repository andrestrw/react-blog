import { useState } from 'react';

export const TextH2 = () => {
	const [text, setText] = useState('');

	const handleText = e => {
		setText(e.target.value);
	};

	console.log('Hola Mundo');

	return (
		<div>
			<input type='text' onChange={handleText} />
			<h2>{text}</h2>
		</div>
	);
	sda;
};
