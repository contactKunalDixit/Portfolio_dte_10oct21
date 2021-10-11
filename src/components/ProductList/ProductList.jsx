import React from 'react';
import './productList.scss';
import Products from '../Products/Products';
import { productsData } from '../../data';

const ProductList = () => {
	return (
		<div className='pl'>
			<div className='pl-text'>
				<h1 className='pl-title'>Create & Inspire.</h1>
				<p className='pl-desc'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
					doloremque rem dolores velit veniam, eum facere corporis nostrum nisi
					perferendis?
				</p>
			</div>
			<div className='pl-List'>
				{productsData.map((item) => (
					<Products key={item.id} img={item.img} link={item.link}></Products>
				))}
			</div>
		</div>
	);
};

export default ProductList;
