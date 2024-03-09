import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Crud = () => {
	const { id } = useParams();
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	// ! pRUEBA A INTRODUCIR EL CÓDIGO DE CHAT GPT

	useEffect(() => {
		axios
			.get('https://apinode-crud-production-cde3.up.railway.app/')
			.then(res => {
				console.log(res);
				setData(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	// ! eL USE EFFECT CON UN CON ARREGLO DE DPENDENCIAS VACÍO  ->  EL USE EFFECT SE VA

	// ! A EJECUTAR POR CADA PRIMER RENDER Y NO SE EJECUTARA ANTES LOS

	// ! CAMBIOS DE ESTADO -> SE LA PELAN LOS CAMBIOS DE ESTADO

	const handleDelete = id => {
		console.log('Eliminando id:', id);
		axios
			.delete(
				'https://apinode-crud-production-cde3.up.railway.app/deleteuser/' + id
			)
			.then(res => {
				console.log(res);
				navigate('/dashboard');
			})
			.catch(err => console.log(err));
	};

	return (
		<div className='flex h-screen bg-slate-900 justify-center items-center'>
			<div className='w-2/4 bg-white rounded p-3'>
				<Link to='/create' className='btn btn-success btn-sm'>
					Add +
				</Link>
				<table className='w-full'>
					<thead className='w-full '>
						<tr className='flex  w-full '>
							<th>Name</th>
							<th>Email</th>
							<th>Age</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{data.map((user, index) => {
							return (
								<tr key={index}>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.age}</td>
									<td className='flex gap-4'>
										<Link to={`/edit/${user._id}`} className='bg-green-500'>
											Update
										</Link>
										<button
											onClick={() => handleDelete(user._id)}
											className='bg-red-500'
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Crud;
