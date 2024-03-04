import imageMobile from '../assets/images/image-web-3-mobile.jpg';
import imageDesktop from '../assets/images/React--1-.jpg';

export const MainArticle = () => {
	return (
		<section className='mb-1'>
			<picture className=''>
				<div className='imgFondo'></div>
				{/* <source media='(max-width: 640px)' srcSet={imageMobile} />
				<source media='(min-width: 641px)' srcSet={imageDesktop} />
				<img
					className='min-w-full w-full		'
					src={imageMobile}
					alt='Articulo principal imagen'
				/> */}
			</picture>
			<div className='sm:flex pb-9'>
				<div className='flex-1 pt-6 md:pe-5	'>
					<h2 className='text-[40px] font-bold sm:text-[58px] leading-tight	'>
						¡Bienvenido a mi blog de proyectos con React! 🤘🏼​
					</h2>
				</div>
				<div className='flex-1 pt-4 '>
					<p className='text-[13px]  sm:text-[18px] font-bold pb-4	leading-8	'>
						El siguiente blog esta dividido en 3 proyectos creados con
						tecnologías como React JS, JavaScript, CSS, Tailwind junto con
						herramientas como npm, vite y bibliotecas como Victory o
						highlightjs.
					</p>
					<button
						className='bg-Softred w-[185px] h-[48px]
					uppercase text-Offwhite hover:bg-VeryDarkBlue '
					>
						Leer Más
					</button>
				</div>
			</div>
		</section>
	);
};
