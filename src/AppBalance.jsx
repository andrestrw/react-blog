import { GlobalProvider } from './context_p2/GlobalState';

import { Balance } from './componentes_proyecto_2/Balance';
import { TransactionForm } from './transactions/TransactionForm';
import { TransactionList } from './transactions/TransactionList';
import { IncomeExpenses } from './transactions/IncomeExpenses';

import { ExpenseChart } from './transactions/ExpenseChart';

export const AppBalance = () => {
	return (
		<GlobalProvider>
			<div className=' bg-zinc-900 text-white h-screen flex justify-center items-center'>
				<div className='container mx-auto w-[800px] '>
					<div className='bg-zinc-800 p-10 rounded-lg flex gap-x-2 '>
						<div>
							<h1 className='text-4xl font-bold '>Expense Tracker</h1>
							<IncomeExpenses></IncomeExpenses>
							<Balance></Balance>
							<TransactionForm></TransactionForm>
						</div>
						<div className=' w-full flex flex-col '>
							<ExpenseChart></ExpenseChart>
							<TransactionList></TransactionList>
						</div>
					</div>
				</div>
			</div>
		</GlobalProvider>
	);
};
