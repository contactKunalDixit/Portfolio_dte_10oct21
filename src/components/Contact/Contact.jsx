import React, { useState, useRef } from 'react';
import './contact.scss';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';

import emailjs from 'emailjs-com';

const Contact = () => {
	const [values, setvalues] = useState({});
	const [done, setDone] = useState(false);

	const formRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_er1vjte',
				'template_6d3ok29',
				formRef.current,
				'user_5UhBgwKxfFIc5mp67CFyC'
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const handleResetValues = (e) => {
		console.log(e);
	};

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
							contactdixitkunal@gmail.com
						</div>
					</div>
				</div>
				<div className='c-Right'>
					<p className='c-desc'>
						<b>What's your story?</b> Get in touch. Always available for
						freelancing if the right project comes along
					</p>
					<form ref={formRef} onSubmit={handleSubmit}>
						<input type='text' placeholder='Name' name='user_name' />
						<input type='text' placeholder='Subject' name='user_subject' />
						<input type='text' placeholder='Email' name='user_email' />
						<textarea placeholder='Message' name='message' rows='5'></textarea>
						<button onClick={handleResetValues}>Submit</button>
						{done && (
							<p>
								Thank you! Please ensure to check your "Promotion" and "Social"
								mail folders for an acknowledgement from our end. We'll be in
								touch soon
							</p>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
