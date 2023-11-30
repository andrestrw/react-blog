import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './styles.css';
// import { GiftExpertApp } from './componentes/GiftExpertApp.jsx';
// import { Counter } from './componentes/Counter.jsx';
// import { Text } from './componentes/Text.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// importación segundo proyecto
import { AppBalance } from './AppBalance.jsx';
// importación lista de tareas
import { ListaTareas } from './ListaTareas.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <h1>Error</h1>,
	},
	{
		path: '/appbalance',
		element: <AppBalance />,
		errorElement: <h1>Error</h1>,
	},
	{
		path: '/listaTareas',
		element: <ListaTareas />,
		errorElement: <h1>Error</h1>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		{/* OTROS CURSOS */}
		{/* <GiftExpertApp></GiftExpertApp>
		
		<Counter></Counter>
		<Text></Text> */}
		{/* OTROS CURSOS */}

		<RouterProvider router={router} />
	</>
);
