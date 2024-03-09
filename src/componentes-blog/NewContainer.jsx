import { Link, useNavigate } from 'react-router-dom';
import { NewArticle } from './NewArticle';
import axios from 'axios';

export const NewContainer = () => {
	const navigate = useNavigate();
	axios.defaults.withCredentials = true;

	// const handleLogout = () => {
	// 	axios
	// 		.get('http://localhost:3000/auth/logout')
	// 		.then(res => {
	// 			if (res.data.status) {
	// 				navigate('/login');
	// 			}
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// };
	return (
		<aside className='bg-VeryDarkBlue text-Offwhite py-[28px] px-[20px]'>
			<button className='bg-white text-blue-800'>
				<Link to='/dashboard'>Dashboard</Link>
			</button>
			<br />
			{/* <button onClick={handleLogout} className='bg-white text-blue-800'>
				LogOut
			</button> */}
			<h1 className='text-SoftOrange text-4xl font-bold'>New</h1>
			<NewArticle
				title='Hydrogen VS Electric Cars'
				text='  Will hydrogen-fueled cars ever catch up to EVs?
            '
			></NewArticle>
			<NewArticle
				title='The Downsides of AI Artistry'
				text=' What are the possible adverse effects of on-demand AI image generation??
            '
			></NewArticle>
			<NewArticle
				title='Is VC Funding Drying Up?'
				text=' Private funding by VC firms is down 50% YOY. We take a look at what that means.
            '
			></NewArticle>
		</aside>
	);
};
