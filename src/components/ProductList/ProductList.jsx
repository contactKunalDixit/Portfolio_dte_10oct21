import React from 'react';
import './productList.scss';
import Products from '../Products/Products';
import { productsData } from '../../data';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const ProductList = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className='pl'>
			<div
				className='pl-bground'
				style={{ backgroundColor: darkMode ? '#023d8a9d' : '#fdffb6' }}
			></div>
			<div className='pl-wrapper'>
				<div className='pl-text'>
					<h1 className='pl-title'>Create & Inspire</h1>
					<p className='pl-desc'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						doloremque rem dolores velit veniam, eum facere corporis nostrum
						nisi perferendis?
					</p>
				</div>
				<div className='pl-List'>
					{productsData.map((item) => (
						<Products key={item.id} img={item.img} link={item.link}></Products>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductList;
