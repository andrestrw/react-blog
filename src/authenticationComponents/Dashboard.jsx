import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Crud from '../projectFourComponents/Crud';

const Dashboard = () => {
	// const { id } = useParams();
	// const [data, setData] = useState([]);

	//----------------
	const navigate = useNavigate();
	axios.defaults.withCredentials = true;

	// useEffect(() => {
	// 	axios.get('http://localhost:3000/auth/verify').then(res => {
	// 		if (res.data.status) {
	// 		} else {
	// 			navigate('/');
	// 		}
	// 		console.log(res);
	// 	});
	// 	axios
	// 		.get('https://apinode-crud-dev-xedh.4.us-1.fl0.io')
	// 		.then(res => {
	// 			console.log(res);
	// 		})
	// 		.catch(err => console.log(err));
	// }, []);

	useEffect(() => {
		axios
			.get('http://localhost:3001')
			.then(res => {
				console.log(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			<Crud></Crud>
		</>
	);
};

export default Dashboard;
