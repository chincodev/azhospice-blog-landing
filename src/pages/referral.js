import React, { useState, useRef } from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import emailjs from 'emailjs-com';

const Referral = () =>  {

	const initialFormState = { 
		fname: '', 
		lname: '',
		email: '',
		phone: '',
		pfname: '',
		plname: '',
		pphone: '',
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
		emailjs.send('sendgrid','template_1', form, 'user_LNNwIc0RrMZ2YA4uT8uac')
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
            <SEO title="Referral" description="Send us a patient referral" />
            <Container>
	        	<div className="referalls" />
	            <div className="contact-w3l py-5" id="contact">
	        	    <div className="container py-xl-5 py-lg-3">
	        	        <div style={{display: "flex", alignItems: "center",justifyContent: "space-between"}} className="title-section mb-sm-5 mb-4">
	        		        <h3 className="w3ls-title text-uppercase text-bl font-weight-bold">Patient Referral</h3>
                            <a target="_blank" rel="noreferrer nofollow" href={"../../documents/A-Z-Hospice-Hospice-Referral-Sheet.pdf"}  className="btn button-w3ls">DOWNLOAD REFFERAL FAX</a>
	        	        </div>
	        	        <div className="row pt-md-0">
	        		        <div className="col-lg-12 regstr-r-w3-agileits mt-lg-0 mt-5">
	        			        <div className="form-bg-w3ls">
	        				        <form id="contact-form" onSubmit={handleSubmit} >
	        				            <div className="row">
	        					            <div className="col-md-6">
	        						            <div className="form-group">
													<label htmlFor="fname">Your first name</label>
	        						            	<input type="text" value={form.fname} onChange={handleInputChange} name="fname" id="fname" className="form-control" placeholder="Type your first name" required=""/>
	        						            </div>
	        					            </div>
	        					            <div className="col-md-6">
	        					            	<div className="form-group">
													<label htmlFor="lname">Your last name</label>
	        					            		<input type="text" value={form.lname} onChange={handleInputChange} name="lname" id="lname" className="form-control" placeholder="Type your last name" required="" />
	        					            	</div>
	        					            </div>
	        				            </div>
	        				            <div className="row">
	        				            	<div className="col-md-6">
	        				            		<div className="form-group">
													<label htmlFor="email">Your email</label>
	        				            			<input type="email" value={form.email} onChange={handleInputChange} name="email" id="email" className="form-control" placeholder="Type your email" required="" />
	        				            		</div>
	        				            	</div>
	        				            	<div className="col-md-6">
	        				            		<div className="form-group">
													<label htmlFor="phone">Your phone number</label>
	        				            			<input type="text" value={form.phone} onChange={handleInputChange} name="phone" id="phone" className="form-control" placeholder="Type your phone number" required="" />
	        				            		</div>
	        				            	</div>
	        				            </div>
	        				            <div className="row">
	        				            	<div className="col-md-6">
	        				            		<div className="form-group">
													<label htmlFor="pfname">Patient first name</label>
	        				            			<input type="text" value={form.pfname} onChange={handleInputChange} name="pfname" id="pfname" className="form-control" placeholder="Type patients first name" required="" />
	        				            		</div>
	        				            	</div>
	        				            	<div className="col-md-6">
	        				            		<div className="form-group">
													<label htmlFor="plname" >Patient last name</label>
	        				            			<input type="text" value={form.plname} onChange={handleInputChange} name="plname" id="plname" className="form-control" placeholder="Type patients last name" required="" />
	        				            		</div>
	        				            	</div>
	        				            </div>
	        				            <div className="row">
	        				            	<div className="col-md-6">
	        				            		<div className="form-group">
													<label htmlFor="pemail">Patient email</label>
	        				            			<input type="email" value={form.pemail} onChange={handleInputChange} name="pemail" id="pemail" className="form-control" placeholder="Type patients email" required="" />
	        				            		</div>
	        				            	</div>
	        				            	<div className="col-md-6">
	        				            		<div className="form-group">
													<label htmlFor="pphone">Patient phone number</label>
	        				            			<input type="text" value={form.pphone} onChange={handleInputChange} name="pphone" id="pphone" className="form-control" placeholder="Type patients phone number" required="" />
	        				            		</div>
	        				            	</div>
	        				            </div>
	        				            <button ref={submitButton} type="submit" id="sendEmailButton" className="button-w3layouts btn text-uppercase">Submit</button>						
								    </form>
	        			        </div>
	        		        </div>
	        	        </div>
	        	    </div>
	            </div>
            </Container>
        </Layout>
)}
export default Referral
