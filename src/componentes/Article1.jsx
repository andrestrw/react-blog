export const Article = ({ img, number, title, text }) => {
	return (
		<article className='flex h-[162px] md:w-[343px] md:flex-grow '>
			<div className=' img-fondo   bg-VeryDarkBlueoverflow-hidden w-[100px] flex justify-center	justify-items-center flex-none items-center		'>
				<img className=' max-w-none	 w-auto max-h-[8.5rem]' src={img} alt='' />
			</div>
			<div className='pl-6'>
				<p className='text-GrayishBlue text-3xl mb-[18px] font-bold'>
					{number}
				</p>
				<h2 className='font-bold mb-[18px] hover:text-SoftOrange cursor-pointer'>
					{title}
				</h2>
				<p className='text-DarkGrayishBlue '>{text}</p>
			</div>
		</article>
	);
};
