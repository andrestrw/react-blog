import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [age, setAge] = useState();

	const navigate = useNavigate();

	const handleSubmit = e => {
		// PRUEBA USANDO CÓDIFGO DEL BACK DEL BLOG -> 09/03-> 8:37
		e.preventDefault();
		axios
			.post('https://apinode-crud-production-cde3.up.railway.app/create/', {
				name,
				email,
				age,
			})
			.then(res => {
				console.log(res);
				navigate('/dashboard');
			})
			.catch(err => console.log(err));
	};

	return (
		<div className='flex h-screen bg-slate-900 justify-center items-center'>
			<div className='w-2/4 bg-white rounded p-3'>
				<form onSubmit={handleSubmit}>
					<h2>Add User</h2>
					<div className='mb-2'>
						<label htmlFor=''>Name</label>
						<input
							type='text'
							placeholder='Enter Name'
							className='form-control'
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor=''>Email</label>
						<input
							type='email'
							placeholder='Enter Email'
							className='form-control'
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor=''>Age</label>
						<input
							type='text'
							placeholder='Enter Age'
							className='form-control'
							onChange={e => setAge(e.target.value)}
						/>
					</div>
					<button className='btn btn-success'>Submit</button>
				</form>
			</div>
		</div>
	);
}

export default CreateUser;
