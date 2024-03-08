import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Crud = () => {
	const { id } = useParams();
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('https://apinode-crud-production-cde3.up.railway.app/')
			.then(res => {
				console.log(res);
				setData(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className='flex h-screen bg-slate-900 justify-center items-center'>
			<div className='w-2/4 bg-white rounded p-3'>
				<Link to='/create' className='btn btn-success btn-sm'>
					Add +
				</Link>
				<table className='w-full'>
					<thead>
						<tr className='flex justify-between '>
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
									<td>
										<Link
											to={`/edit/${user._id}`}
											className='btn btn-sm btn-success me-2'
										>
											Update
										</Link>
										<button
											onClick={() => handleDelete(user._id)}
											className='btn btn-sm btn-danger'
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
