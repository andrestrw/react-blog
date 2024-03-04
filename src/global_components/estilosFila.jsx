const Row = ({ children }) => {
	// /* container-principal */

	// .filaProyecto {
	// 	min-height: 100vh;
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: center;
	// 	flex-direction: row;
	// 	min-width: 100%;
	// 	gap: 90px;
	// }

	// /* responsive container-principal */

	// @media (max-width: 980px) {
	// 	.filaProyecto {
	// 		flex-direction: column;
	// 		width: 70%;
	// 	}
	// }
	// @media (max-width: 1500px) {
	// 	.filaProyecto {
	// 		gap: 40px;
	// 	}
	// }

	return (
		<div
			className=' min-h-screen  flex  justify-center items-center flex-col  gap-x-14 lg:gap-24 xl:gap-32  lg:flex-row  lg:mx-0  sm:px-12
		 '
		>
			{children}
		</div>
	);
};

export default Row;
