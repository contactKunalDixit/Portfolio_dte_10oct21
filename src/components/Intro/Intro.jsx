import React from 'react';
import './Intro.scss';
import Me from '../../img/guylaptop.png';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
const Intro = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className='Intro'>
			<div
				className='intro-bground'
				style={{ backgroundColor: darkMode ? '#18a0ac6f' : '#9bf6ff' }}
			></div>
			<div className='intro-left'>
				<div className='intro-Left-Wrapper'>
					<h2 className='i-intro'>Hello, My name is</h2>
					<h1 className='i-name'>Kunal Dixit</h1>
					<div className='i-title'>
						<div className='i-title-Wrapper'>
							<div
								className='i-title-Item'
								style={{ color: darkMode ? '#edeb80' : '#313191' }}
							>
								Web Developer
							</div>
							<div
								className='i-title-Item'
								style={{ color: darkMode ? '#edeb80' : '#313191' }}
							>
								UI/UX Designer
							</div>
							<div
								className='i-title-Item'
								style={{ color: darkMode ? '#edeb80' : '#313191' }}
							>
								Content Creator
							</div>
							<div
								className='i-title-Item'
								style={{ color: darkMode ? '#edeb80' : '#313191' }}
							>
								Trainer
							</div>
							<div
								className='i-title-Item'
								style={{ color: darkMode ? '#edeb80' : '#313191' }}
							>
								Facilitator
							</div>
						</div>
					</div>
					<p className='intro-desc'>
						I design and develop services for customers of all sizes,
						specializing in creating stylish, modern websites, web services and
						online stores
					</p>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='24px'
					viewBox='0 0 24 24'
					width='24px'
					fill={darkMode ? 'white' : '#313191'}
					style={{
						position: 'absolute',
						width: '50px',
						height: '50px',
						bottom: '0',
						color: darkMode ? 'white' : '#313191',
					}}
				>
					<path d='M0 0h24v24H0V0z' fill='none' />
					<path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
				</svg>
				{/* <svg
					width='75'
					height='75'
					viewBox='0 0 75 75'
					fill='none'
					stroke='black'
					className='i-scroll'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='scroll'>
						<path
							id='Vector'
							d='M40.5 15L34.5 9L28.5 15'
							strokeWidth='3'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							id='Vector_2'
							d='M28.5 24L34.5 30L40.5 24'
							strokeWidth='3'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<g id='Group'>
							<path
								id='Vector_3'
								d='M9 37.5H60'
								strokeWidth='3'
								strokeMiterlimit='10'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</g>
						<path
							id='Vector_4'
							d='M34.5 27V9'
							strokeWidth='2.9895'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<g id='Group_2'>
							<path
								id='Vector_5'
								d='M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z'
								strokeWidth='3'
								strokeMiterlimit='10'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</g>
					</g>
				</svg> */}
			</div>
			<div className='intro-right'>
				<img src={Me} alt='A Mans Pic' className='intro-img' />
			</div>
		</div>
	);
};

export default Intro;
