import React from 'react';
import './contact.scss';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';

const Contact = () => {
	return (
		<div className='Contact'>
			<div className='contact-bg'></div>
			<div className='contact-Wrapper'>
				<div className='c-Left'>
					<h1 className='c-title'>Let's discuss your Project</h1>
					<div className='c-info'>
						<div className='c-info-item'>
							<img src={Phone} alt='' className='c-icon' /> +65 90301206
						</div>
						<div className='c-info-item'>
							<img src={Email} alt='' className='c-icon' />
							contactkunaldixit@gmail.com
						</div>
					</div>
				</div>
				<div className='c-Right'>
					<p className='c-desc'>
						<b>What's your story?</b> Get in touch. Always available for
						freelancing if the right project comes along
					</p>
					<form>
						<input type='text' placeholder='Name' name='user_name' />
						<input type='text' placeholder='Subject' name='user_subject' />{' '}
						<input type='text' placeholder='Email' name='user_email' />
						<textarea
							placeholder='Message'
							name='message'
							id=''
							rows='5'
						></textarea>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
