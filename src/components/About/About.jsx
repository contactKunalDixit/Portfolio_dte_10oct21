import './about.scss';
import React from 'react';
import aboutImg from '../../img/KunalCartoonPotrait.jpg';
import Award from '../../img/award.png';
const About = () => {
	return (
		<div className='About'>
			<div className='about-left'>
				<div className='about-card shadowBg'>
					<img src={aboutImg} alt='shadow' className='a-img' />
				</div>
				<div className='about-card'>
					<img src={aboutImg} alt='' className='a-img' />
				</div>
			</div>
			<div className='about-right'>
				<h1 className='a-title'>About Me</h1>
				<p className='a-sub'>
					It is a long established fact that a reader will be distracted by the
					readable content.
				</p>
				<p className='a-desc LgScreen'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
				</p>
				<p className='a-desc smScreen'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore
				</p>
				<div className='a-award'>
					<img src={Award} alt='' className='a-award-img' />
					<div className='a-award-texts'>
						<h4 className='a-award-title'>International Design Awards 2021</h4>
						<p className='a-award-desc'>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
							and fugit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
