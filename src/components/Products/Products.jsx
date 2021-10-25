import React from 'react';
import './products.scss';

const Products = (props) => {
	return (
		<div className='Product'>
			<div className='p-browser'>
				<div className='p-circle'></div>
				<div className='p-circle'></div>
				<div className='p-circle'></div>
			</div>
			<a href={props.link} target='_blank' className='p-Tag' rel='noreferrer'>
				<img src={props.img} alt='' className='p-Img' />
			</a>
		</div>
	);
};

export default Products;
