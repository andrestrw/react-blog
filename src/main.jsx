import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './styles.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// importación segundo proyecto
import { AppBalance } from './AppBalance.jsx';
import ProyectoOne from './Proyecto1.jsx';
import MainPokemon from './componentes_proyecto_3/MainPokemon.jsx';
import SignUp from './authenticationComponents/SignUp.jsx';
import Login from './authenticationComponents/Login.jsx';
import ForgotPassword from './authenticationComponents/ForgotPassword.jsx';

// importación lista de tareas

// import project themes

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
		element: <ProyectoOne />,
		errorElement: <h1>Error</h1>,
	},
	{
		path: '/appPokemon',
		element: <MainPokemon />,
		errorElement: <h1>Error</h1>,
	},
	{
		path: '/signUp',
		element: <SignUp />,
		errorElement: <h1>Error</h1>,
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <h1>Error</h1>,
	},
	{
		path: '/forgotPassword',
		element: <ForgotPassword />,
		errorElement: <h1>Error</h1>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<RouterProvider router={router} />
	</>
);
