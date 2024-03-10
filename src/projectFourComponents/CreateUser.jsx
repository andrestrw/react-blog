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
			<div className='w-2/4 bg-white  p-5'>
				<form onSubmit={handleSubmit}>
					<h2 className='font-semibold text-lg '> Add User</h2>
					<div className='mb-2'>
						<label htmlFor='name' className='block pb-2'>
							Name
						</label>
						<input
							type='text'
							placeholder='Enter Name'
							className='border-2 p-2 w-full'
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className='mb-2  '>
						<label htmlFor='email' className='block pb-2 '>
							Email
						</label>
						<input
							type='email'
							placeholder='Enter Email'
							className='border-2 p-2 w-full'
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor='age' className='  block pb-2 '>
							Age
						</label>
						<input
							type='text'
							placeholder='Enter Age'
							className='border-2 p-2 w-full'
							onChange={e => setAge(e.target.value)}
						/>
					</div>
					<button className='bg-green-500 p-2  text-white'>Submit</button>
				</form>
			</div>
		</div>
	);
}

export default CreateUser;
