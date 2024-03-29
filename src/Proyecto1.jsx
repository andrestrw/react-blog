import { useReducer, useRef } from 'react';
import { Header1 } from './componentes-blog/Header1';
import Columna from './global_components/columna1.jsx';
import PageContainer from './global_components/pageContainer';
import Row from './global_components/estilosFila';
import HeaderGlobal from './global_components/header';
import { Explanation } from './comp-listaTareas/code';

const ProyectoOne = () => {
	const inputRef = useRef();
	// El estado resultante de las acciones realizadas en el reductor se almacena en la variable tasks a través del hook useReducer.
	const [tasks, dispatch] = useReducer((state = [], action) => {
		switch (action.type) {
			case 'add_task': {
				return [...state, { uniqueKey: action.uniqueKey, title: action.title }];
				// spreed operator  -> realiza una copia de el array y lo concatena con 2 pares clave valor  que le indicamos aquí, la primera propiedad la llave única y la segunda la el título que lleva la información introducida en el input.
			}
			case 'remove_task': {
				return state.filter(task => task.uniqueKey !== action.uniqueKey);
				// Cuando la expresión task.uniqueKey !== action.uniqueKey es false, significa que la uniqueKey de la tarea es igual a la uniqueKey proporcionada en la acción (action.uniqueKey). En este caso, filter excluye esa tarea del array resultante.
			}
			default: {
				return state;
			}
		}
	});

	const handleSubmit = event => {
		event.preventDefault();
		const uniqueKey = generateUniqueKey();
		dispatch({
			type: 'add_task',
			title: inputRef.current.value,
			uniqueKey: uniqueKey,
		});
	};
	// Aunque la función generateUniqueKey es una expresión de función asignada a una variable const, el código funciona porque la declaración de la variable y la asignación de la función se encuentran antes de la primera vez que intentas llamar a la función.
	const generateUniqueKey = () => {
		return Math.random().toString(36).substring(2, 9);
	};
	return (
		<>
			<PageContainer>
				<Header1></Header1>
				<main className='min-h-screen'>
					<Row>
						<Columna>
							<Explanation></Explanation>
						</Columna>
						<Columna>
							<HeaderGlobal title='Lista de tareas'></HeaderGlobal>
							{/* desde aqui */}
							<div className='columna1'>
								<div className='columna1__elementos'>
									<h1 className='columna1__titulo'>Introduce una tarea</h1>
									<form onSubmit={handleSubmit} className='columna1__form'>
										<label className=''></label>
										<input
											className='columna1__input'
											type='text'
											name='title'
											ref={inputRef}
										/>
										<input
											className='columna1__enviar'
											type='submit'
											value='Enviar'
										/>
									</form>
									<div className='columna1__tasks'>
										{tasks &&
											tasks.map(task => (
												// usamos key para ayudar a React a identificar que elementos han cambiado, han sido añadidos o han sido eliminados de una lista

												//Si renderizamos un lista de elementos en React usando un método como map, es necesario proporcioanr una prop 'key' única para cada elemntos de la lista

												<div className='columna1__task' key={task.uniqueKey}>
													<li className='columna1__li'>{task.title}</li>
													<div className='columna1__button'>
														<button
															className='columna1__borrar'
															onClick={() =>
																dispatch({
																	type: 'remove_task',
																	uniqueKey: task.uniqueKey,
																})
															}
														>
															Borrar
														</button>
													</div>
												</div>
											))}
									</div>
								</div>
							</div>
						</Columna>

						{/* <Component></Component>  */}
					</Row>
				</main>
			</PageContainer>
		</>
	);
};

export default ProyectoOne;
