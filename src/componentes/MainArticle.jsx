import imageMobile from '../assets/images/image-web-3-mobile.jpg';
import imageDesktop from '../assets/images/image-web-3-desktop.jpg';

export const MainArticle = () => {
	return (
		<section className='mb-1'>
			<picture>
				<source media='(max-width: 640px)' srcSet={imageMobile} />
				<source media='(min-width: 641px)' srcSet={imageDesktop} />
				<img src={imageMobile} alt='Articulo principal imagen' />
			</picture>
			<div className='sm:flex pb-9'>
				<div className='flex-1 pt-6 md:pe-5	'>
					<h2 className='text-[40px] font-bold sm:text-[58px] leading-none'>
						The Bright Future of Web 3.0?
					</h2>
				</div>
				<div className='flex-1 pt-4 '>
					<p className='text-[13px]  sm:text-[15px] font-medium pb-4	leading-8	'>
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>
					<button
						className='bg-Softred w-[185px] h-[48px]
					uppercase text-Offwhite hover:bg-VeryDarkBlue '
					>
						Read more
					</button>
				</div>
			</div>
		</section>
	);
};
