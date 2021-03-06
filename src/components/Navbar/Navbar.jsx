import React from 'react';
import Toggle from '../Toggle/Toggle';
import './navbar.scss';
import { MdImportantDevices } from 'react-icons/md';
const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar-wrapper'>
				<div className='navbar-left'>
					<div className='nav-logo'>
						<a href='#intro'>
							<MdImportantDevices
								style={{ fontSize: '24px', margin: '0px 10px' }}
							></MdImportantDevices>
							<div className='nav-logoTitle'>Kunal D.</div>
						</a>
					</div>
				</div>
				<div className='navbar-center'>
					<ul className='navbar-ul'>
						<li className='navbar-li'>
							<a className='navbar-li-a' href='#intro'>
								Home
							</a>
						</li>
						<li className='navbar-li'>
							<a className='navbar-li-a' href='#about'>
								About Me
							</a>
						</li>
						<li className='navbar-li'>
							<a className='navbar-li-a' href='#work'>
								Products
							</a>
						</li>
						<li className='navbar-li'>
							<a className='navbar-li-a' href='#testimonials'>
								Testimonials
							</a>
						</li>
						<li className='navbar-li'>
							<a className='navbar-li-a' href='#contact'>
								Contact Me
							</a>
						</li>
					</ul>
				</div>
				<div className='navbar-right'>
					<Toggle></Toggle>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
