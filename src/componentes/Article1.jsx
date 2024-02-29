export const Article = ({ img, number, title, text }) => {
	return (
		<article className='flex h-[162px] md:w-[500px] md:flex-grow '>
			<div className=' img-fondo   bg-VeryDarkBlueoverflow-hidden w-[100px] flex justify-center	justify-items-center flex-none items-center		'>
				<img className=' max-w-full		 w-auto max-h-[8.5rem]' src={img} alt='' />
			</div>
			<div className='pl-6'>
				<p className='text-slate-900 text-3xl mb-[18px] font-bold'>{number}</p>
				<h2 className='font-bold text-lg mb-[18px] hover:text-SoftOrange cursor-pointer'>
					{title}
				</h2>
				<p className='text-DarkGrayishBlue text-lg font-bold '>{text}</p>
			</div>
		</article>
	);
};
