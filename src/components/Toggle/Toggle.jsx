import React, { useContext } from 'react';
import './toggle.scss';
import sun from '../../img/sun.png';
import moon from '../../img/moon.png';
import { ThemeContext } from '../../context';

const Toggle = () => {
	const Theme = useContext(ThemeContext);

	const handleClick = () => {
		Theme.dispatch({ type: 'TOGGLE' });
	};

	return (
		<div className='toggle'>
			<img src={sun} alt='Sun' className='toggle-icon' />
			<img
				src={moon}
				alt='moon'
				className='
				toggle-icon
			'
			/>
			<div
				className='toggle-button'
				onClick={handleClick}
				style={{ left: Theme.state.darkMode ? 0 : 25 }}
			></div>
		</div>
	);
};

export default Toggle;
