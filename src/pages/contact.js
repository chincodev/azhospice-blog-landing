import React, { useState, useRef } from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import emailjs from 'emailjs-com';

const Contact = () => {

	const initialFormState = { 
		Name: '', 
		Email: '',
		Subject: '',
		Message: '',
	}

	const submitButton = useRef()

	const [form, setForm] = useState(initialFormState)

	const handleInputChange = (event) => {
		const { name, value } = event.target
  		setForm({ ...form, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		submitButton.current.setAttribute("disabled", "disabled")
		submitButton.current.innerHTML = 'Sending...'
		emailjs.send('sendgrid','template_nCluIqet', form, 'user_LNNwIc0RrMZ2YA4uT8uac')
		.then((response) => {
			submitButton.current.style.background = "green"
			submitButton.current.innerHTML = 'Sent'
		}, (err) => {
			submitButton.current.style.background = "red"
			submitButton.current.innerHTML = 'Can not send'
		});
	}

	
    return (
        <Layout>
            <SEO title="Contact" description="Contact description goes here" />
            <Container>
                <div className="contact" />
                <div className="contact-w3l py-5" id="contact">
	                <div className="container py-xl-5 py-lg-3">
	            	    <div className="title-section mb-sm-5 mb-4">
	            		    <h3 className="w3ls-title text-uppercase text-bl font-weight-bold">Contact Us</h3>
	            		</div>
	            		<div className="row pt-md-0">
	            		    <div className="col-lg-6 contact-agileits-w3layouts">
	            			    <div className="midd-contact my-xl-5 my-4 pl-4 border-left">
	            					<h5 className="text-bl mb-2">Address & Direction:</h5>
	            				</div>
	            				<div className="midd-contact my-xl-5 my-4 pl-4 border-left">						
                                    <h6 className="text-bl mb-2">Office hours:</h6>						
                                    <p>10AM-5PM </p>	
	            				    <p>ON CALL 24/7 </p>
	            				</div>
	            				<p className="para-agileits-w3layouts">
	            					<i className="fa fa-map-marker pr-3"></i>
                                    1445 E Los Angeles Ave Suite 301-D, Simi Valley, CA 93065
                                </p>
	            				<p className="para-agileits-w3layouts my-sm-3 my-2">
	            					<i className="fa fa-phone pr-3"></i>
                                    (805) 380-2550
                                </p>											
                                <p className="para-agileits-w3layouts my-sm-3 my-2">						
                                    <i className="fa fa-fax pr-3"></i>
                                    (805) 392-5200 
                                </p>
	            				<p className="para-agileits-w3layouts">
	            					<i className="fa fa-envelope-open pr-2"></i>
	            					<a href="mailto:info@a-zhospice.com">
                                    info@a-zhospice.com</a>
	            				</p>
	            			</div>
	            			<div className="col-lg-6 regstr-r-w3-agileits mt-lg-0 mt-5">
	            				<h4 className="contact-title text-uppercase text-bl mb-sm-4 mb-3">Get in Touch</h4>
	            				<div className="form-bg-w3ls">
	            					<form onSubmit={handleSubmit} id="myform">
	            						<div className="form-group">
											<label htmlFor="Name" style={{display:"none"}}>Name</label>
	            							<input type="text" value={form.Name} onChange={handleInputChange} name="Name" id="name" className="form-control" placeholder="Name" required="" />
	            						</div>
	            						<div className="form-group">
											<label htmlFor="Email" style={{display:"none"}}>Email</label>
	            							<input type="email" value={form.Email} onChange={handleInputChange} name="Email" id="email" className="form-control" placeholder="Email" required="" />
	            						</div>
	            						<div className="form-group">
											<label htmlFor="Subject" style={{display:"none"}}>Subject</label>
	            							<input type="text" value={form.Subject} onChange={handleInputChange} name="Subject" id="subject" className="form-control" placeholder="Subject" required="" />
	            						</div>
	            						<div className="form-group">
											<label htmlFor="Message" style={{display:"none"}}>Message</label>
	            							<textarea name="Message" value={form.Message} onChange={handleInputChange} className="form-control" id="message" placeholder="Type your message here..." required=""></textarea>
	            						</div>
	            						<button  ref={submitButton} type="submit" className="button-w3layouts btn text-uppercase">Submit</button>													
                                        <div className="output"></div>
	            					</form>
	            				</div>
	            			</div>
	            		</div>
	            	</div>
	            </div>
	            <div className="map">
	            	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.0710792801688!2d-118.77378968543792!3d34.272239613553225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82ecdfa30f175%3A0xc8a1099fd4168c47!2s1445%20E%20Los%20Angeles%20Ave%20Suite%20301-D%2C%20Simi%20Valley%2C%20CA%2093065%2C%20USA!5e0!3m2!1sen!2sin!4v1584876755626!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
	            </div>
            </Container>
        </Layout>
    )
}

export default Contact
