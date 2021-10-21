import React from 'react';
import Ticker from 'react-ticker';
import './tickerTech.scss';
import { TechData } from '../../data';

const TickerTech = () => {
	return (
		<div>
			<Ticker speed={15} move={true} style={{ textAlign: 'center' }}>
				{({ index }) => (
					<>
						<div className='box'>
							{TechData.map((item) => (
								<>
									<span className='box' id={item.id}>
										<div className='unit'>
											<img src={item.img} alt='' className='images'></img>
											{/* <span className='boxText'>{item.text}</span> */}
										</div>
									</span>
								</>
							))}
						</div>
					</>
				)}
			</Ticker>
		</div>
	);
};

export default TickerTech;
