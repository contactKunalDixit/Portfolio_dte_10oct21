import React from 'react';
import './products.scss';
import Pic from '../../img/screencapture-SPA.png';

const Products = (props) => {
	return (
		<div className='Product'>
			<div className='p-browser'>
				<div className='p-circle'></div>
				<div className='p-circle'></div>
				<div className='p-circle'></div>
			</div>
			<a href={props.link} target='_blank' className='p-aTag' rel='noreferrer'>
				<img src={Pic} alt='' className='p-Img' />
			</a>
		</div>
	);
};

export default Products;
