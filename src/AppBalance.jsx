import { GlobalProvider } from './context_p2/GlobalState';
import './styles.css';
import { Balance } from './componentes_proyecto_2/Balance';
import { Header2 } from './componentes_proyecto_2/Header2';

import { TransactionForm } from './componentes_proyecto_2/TransactionForm';

export const AppBalance = () => {
	return (
		<GlobalProvider>
			<div className='generales'>
				Hellooo
				<Header2></Header2>
				<Balance></Balance>
				<TransactionForm></TransactionForm>
			</div>
		</GlobalProvider>
	);
};
