import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Crud = () => {
	const { id } = useParams();
	const [data, setData] = useState([]);
	// const navigate = useNavigate();

	// ! pRUEBA A INTRODUCIR EL CÓDIGO DE CHAT GPT

	useEffect(() => {
		fetchData();
	}, []);

	// ! eL USE EFFECT CON UN CON ARREGLO DE DPENDENCIAS VACÍO  ->  EL USE EFFECT SE VA

	// ! A EJECUTAR POR CADA PRIMER RENDER Y NO SE EJECUTARA ANTES LOS

	// ! CAMBIOS DE ESTADO -> SE LA PELAN LOS CAMBIOS DE ESTADO

	const fetchData = () => {
		axios
			.get('/api')
			.then(res => {
				console.log(res);
				setData(res.data);
			})
			.catch(err => console.log(err));
	};

	const handleDelete = id => {
		console.log('Eliminando id:', id);
		axios
			.delete(
				'https://apinode-crud-production-cde3.up.railway.app/deleteuser/' + id
			)
			.then(res => {
				console.log(res);
				// navigate('/dashboard');
				fetchData();
			})
			.catch(err => console.log(err));
	};

	return (
		<div className='flex h-screen bg-slate-900 justify-center items-center'>
			<div className='w-6/12 bg-white p-5'>
				<Link to='/create' className='bg-green-400 p-2 '>
					Add +
				</Link>
				<table className='table-fixed w-full mt-3 '>
					<thead>
						<tr className='border-b-violet-50   '>
							<th className='py-3 '>Name</th>
							<th className='py-3 '>Email</th>
							<th className='py-3 '>Age</th>
							<th className='py-3 '>Action</th>
						</tr>
					</thead>
					<tbody>
						{data.map((user, index) => {
							return (
								<tr key={index} className='py-3'>
									<td className='text-center py-3 '>{user.name}</td>
									<td className='text-center py-3  '>{user.email}</td>
									<td className='text-center  py-3 '>{user.age}</td>
									<td className='text-center  flex gap-2 justify-center'>
										<Link
											to={`/edit/${user._id}`}
											className='bg-green-500 p-2  '
										>
											Update
										</Link>
										<button
											onClick={() => handleDelete(user._id)}
											className='bg-red-500 p-2'
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
