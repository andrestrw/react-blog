import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Crud from '../projectFourComponents/Crud';

const Dashboard = () => {
	const navigate = useNavigate();
	axios.defaults.withCredentials = true;

	useEffect(() => {
		axios.get('http://localhost:3000/auth/verify').then(res => {
			if (res.data.status) {
			} else {
				navigate('/');
			}
			console.log(res);
		});
	}, []);

	return <Crud>Contenido solo para perosnas que se han registrado </Crud>;
};

export default Dashboard;
