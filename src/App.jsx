import { Header1 } from './componentes/Header1';
import { MainArticle } from './componentes/MainArticle';
import { NewContainer } from './componentes/NewContainer';
import { ArticlesContainer } from './componentes/ArticlesContainer';

// Proyecto 2

function App() {
	return (
		<main className='px-4 pt-6 max-w-[1920px] my-0 mx-auto'>
			<Header1></Header1>
			<div className='lg:flex lg:gap-8'>
				<MainArticle></MainArticle>
				<NewContainer></NewContainer>
			</div>
			<ArticlesContainer></ArticlesContainer>
		</main>
	);
}

export default App;
