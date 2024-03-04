import { Header1 } from './componentes-blog/Header1';
import { MainArticle } from './componentes-blog/MainArticle';
import { NewContainer } from './componentes-blog/NewContainer';
import { ArticlesContainer } from './componentes-blog/ArticlesContainer';
import './index.css';

// Proyecto 2

function App() {
	return (
		<main className='px-4  max-w-[1920px] my-0 mx-auto'>
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
