import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
	const { id } = useParams();

	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [age, setAge] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://apinode-crud-production-cde3.up.railway.app/get/' + id
				);
				console.log(response);
				setName(response.data.name);
				setEmail(response.data.email);
				setAge(response.data.age);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	const navigate = useNavigate();

	const handleUpdate = e => {
		e.preventDefault();
		axios
			.put('https://apinode-crud-production-cde3.up.railway.app/update/' + id, {
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
				<form onSubmit={handleUpdate}>
					<h2 className='font-semibold text-lg '>Update User</h2>
					<div className='mb-2'>
						<label htmlFor='name ' className='block pb-2'>
							Name
						</label>
						<input
							type='text'
							placeholder='Enter Name'
							className='border-2 p-2 w-full'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor='email' className='block pb-2'>
							Email
						</label>
						<input
							type='email'
							placeholder='Enter Email'
							className='border-2 p-2 w-full'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor='age' className='block pb-2'>
							Age
						</label>
						<input
							type='text'
							placeholder='Enter Age'
							className='border-2 p-2 w-full'
							value={age}
							onChange={e => setAge(e.target.value)}
						/>
					</div>
					<button className='bg-green-500 p-2  text-white'>Update</button>
				</form>
			</div>
		</div>
	);
}

export default UpdateUser;
