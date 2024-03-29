import Axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	Axios.defaults.withCredentials = true;
	const handleSubmit = e => {
		e.preventDefault();
		Axios.post('http://localhost:3000/auth/login', {
			email,
			password,
		})
			.then(response => {
				if (response.data.status) {
					navigate('/');
				}
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
				<h2>Login</h2>
				<label className='block mb-2' htmlFor='email'>
					Email:
				</label>
				<input
					className=' border-VeryDarkBlue border w-full p-3 mb-4  box-border'
					type='email'
					autoComplete='off'
					placeholder='Email'
					onChange={e => setEmail(e.target.value)}
				/>
				<label className='block mb-2' htmlFor='password'>
					Password
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
					Login
				</button>
				<Link to='/forgotPassword'>Forgot Password</Link>
				<p>
					Don't Have an Account? <Link to='/signUp'>Sign Up</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
