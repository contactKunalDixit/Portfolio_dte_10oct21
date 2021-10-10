import React from 'react';
import './Intro.scss';

const Intro = () => {
	return (
		<div className='Intro'>
			<div className='intro-left'>
				<div className='intro-Left-Wrapper'>
					<h2 className='i-intro'>Hello, My name is</h2>
					<h1 className='i-name'>Kunal Dixit</h1>
					<div className='i-title'>
						<div className='i-title-Wrapper'>
							<div className='i-title-Item'>Web Developer</div>
							<div className='i-title-Item'>UI/UX Designer</div>
							<div className='i-title-Item'>Content Creator</div>
							<div className='i-title-Item'>Facilitator</div>
						</div>
					</div>
				</div>
			</div>
			<div className='intro-right'>Right</div>
		</div>
	);
};

export default Intro;
