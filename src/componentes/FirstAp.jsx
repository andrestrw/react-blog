import PropTypes from 'prop-types';

export const FirstAp = ({ title, subTitle }) => {
	// console.log(props);

	return (
		<div>
			<>
				<h1>{title}</h1>
			</>
			<p>{subTitle}</p>
		</div>
	);
};

// FirstAp.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	subTitle: PropTypes.number,
// };
