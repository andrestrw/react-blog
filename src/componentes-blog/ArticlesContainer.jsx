import img1 from '../assets/images/proyecto_2.png';
import img3 from '../assets/images/topic2.png';
import img4 from '../assets/images/proyecto-lista-b.jpg';
import { Link } from 'react-router-dom';

import { Article } from './Article1';

export const ArticlesContainer = () => {
	return (
		<section className='mt-6 md:flex md:flex-wrap md:gap-10'>
			<Link to='/listaTareas'>
				<Article
					img={img4}
					number='01'
					title='  To do list App
                '
					text='ReactJs, JS, HTML, CSS '
				></Article>
			</Link>
			<Link to='/appbalance'>
				<Article
					img={img1}
					number='02'
					title=' App Balance'
					text='ReactJs, JS, HTML, Tailwind'
				></Article>
			</Link>
			<Link to='https://main--dazzling-churros-e7cef0.netlify.app/'>
				<Article
					img={img3}
					number='03'
					title=' App Topic'
					text='NextJS, TypesScript, MongoDB, Tailwind '
				></Article>
			</Link>
			<Link to='/listaTareas'>
				<Article
					img={img4}
					number='04'
					title='  To do list App
                '
					text='ReactJs, JS, HTML, CSS '
				></Article>
			</Link>
			<Link to='/appbalance'>
				<Article
					img={img1}
					number='05'
					title=' App Balance'
					text='ReactJs, JS, HTML, Tailwind'
				></Article>
			</Link>
			<Link to='https://main--dazzling-churros-e7cef0.netlify.app/'>
				<Article
					img={img3}
					number='06'
					title=' App Topic'
					text='NextJS, TypesScript, MongoDB, Tailwind '
				></Article>
			</Link>
		</section>
	);
};
