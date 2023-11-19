import { useState } from 'react';
import { AddCategory } from './AddCategory';

useState;

export const GiftExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

	const onAddCategory = () => {
		setCategories(cat => ['Valorant', ...categories]);
	};

	return (
		<>
			{/* titulo */}
			<h1 className='git'>GiftExpertAapp</h1>

			<AddCategory setCategories={setCategories}></AddCategory>

			<ol>
				{categories.map(category => {
					return <li key={category}>{category}</li>;
				})}
			</ol>
		</>
	);
};
