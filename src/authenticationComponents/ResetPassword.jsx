import Axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
	const [password, setPassword] = useState('');
	const { token } = useParams();

	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();
		Axios.post('http://localhost:3000/auth/reset-password/' + token, {
			password,
		})
			.then(response => {
				if (response.data.status) {
					navigate('/login');
				}
				console.log(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className='flex justify-center items-center h-screen'>
			<form
				className='w-80 p-5 rounded-lg border border-gray-300'
				onSubmit={handleSubmit}
			>
				<h2>Reset Password</h2>
				<label className='block mb-2' htmlFor='password'>
					New Password
				</label>
				<input
					className=' border-VeryDarkBlue border w-full p-3 mb-4  box-border'
					type='password'
					placeholder='******'
					onChange={e => setPassword(e.target.value)}
				/>
				<button
					className='w-full p-2.5  bg-VeryDarkBlue hover:bg-white hover:text-black  hover:border-VeryDarkBlue hover:border-4 text-white rounded cursor-pointer   '
					type='submit'
				>
					Reset
				</button>
			</form>
		</div>
	);
};

export default ResetPassword;
