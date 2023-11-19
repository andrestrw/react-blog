import img1 from '../assets/images/image-retro-pcs.jpg';
import img2 from '../assets/images/image-top-laptops.jpg';
import img3 from '../assets/images/image-gaming-growth.jpg';
import img4 from '../assets/images/proyecto-lista-b.jpg';
import { Link } from 'react-router-dom';

import { Article } from './Article1';

export const ArticlesContainer = () => {
	return (
		<section className='mt-6 md:flex md:flex-wrap md:gap-10'>
			<Link to='/appbalance'>
				<Article
					img={img1}
					number='01'
					title='Reviving Retro PCs'
					text='What happens when old PCs are given modern upgrades?'
				></Article>
			</Link>
			<Link to='/listaTareas'>
				<Article
					img={img4}
					number='02'
					title='  Proyecto lista de tareas
                '
					text='ReactJs, JS, HTML, CSS '
				></Article>
			</Link>
			<Article
				img={img3}
				number='03'
				title='  The Growth of Gaming'
				text='How the pandemic has sparked fresh opportunities.'
			></Article>
		</section>
	);
};
