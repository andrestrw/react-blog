import { NavBar } from './/NavBar';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

export const Header1 = () => {
	return (
		<header className=' flex place-content-between items-center my-6'>
			<Link to='/'>
				<img src={logo} alt='Logo' />
			</Link>
			<NavBar />
		</header>
	);
};
