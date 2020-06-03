import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import SEO from '../../components/SEO'

const WhatToExpect = () => {
    return (
        <Layout>
            <SEO title="What to expect" description="What to expect when starting hospice at home" />
            <Container>
                <div className="main-banner-21"></div>
                <section className="about py-5">
		            <div className="container py-xl-5 py-lg-3">
			            <div className="title-section mb-md-5 mb-4">
			                <h3 className="w3ls-title text-uppercase text-bl font-weight-bold">What to Expect When Starting Hospice At Home</h3>
			            </div>
			            <div className="row">
			                <div className="col-lg-6 agileits_works-grid">
					            <p>Some families are leery of strangers taking care of their loved one in their homes. A conscientious caregiver may feel they’ve been doing a difficult job well, and now the hospice team has taken over that job over. Or they imagine the hospice team invading their privacy, like firefighters entering a burning house!</p>
					            <br></br>
                                <h5>With Hospice, You Are in Control</h5>
                                <br></br>
					            <p>For the most part, your hospice team—generally speaking, a physician, nurse, hospice aide, social worker, chaplain, volunteer and bereavement manager—arrive one at a time and on a schedule you have agreed to. They are there to help take care of your loved one, not to take over. They will look to you for guidance and at the same time have the answers you need. They will be gentle and confident with the patient. With every visit, things will get easier. You will find yourselves looking forward to each team member’s arrival.</p>
			                </div>
			                <div className="col-lg-6 agileits_works-grid1 mt-lg-0 mt-sm-5 mt-4 img-cnt hospice_care">
				                <img src="../images/3a.jpg" alt="" className="img-fluid" />
			                </div>												
			                <div className="col-lg-6 agileits_works-grid1 mt-lg-0 mt-sm-5 mt-4 img-cnt hospice_care2">					
				                <img src="../images/Dw1kv0FQE7.jpg" alt="" className="img-fluid" />				
			                </div>								
			                <div className="col-lg-6 agileits_works-grid" id="list-ul">																
			                    <h5>Hospice Home Care: What to Expect</h5>
                                <br></br>
			                    <p>Once the appropriate papers are signed and admissions orders received, the patient is officially admitted to hospice care. The hospice team communicates with the patient’s physician and the hospice physician to discuss medical history, current physical symptoms and life expectancy.</p>
			                    <ul>
			                        <li><i className="fa fa-check"></i>The team’s chaplain and social worker visit to add emotional, psycho social and spiritual assessments to the plan of care</li>
			                        <li><i className="fa fa-check"></i>Regular visits by individual members of the team are scheduled</li>
			                        <li><i className="fa fa-check"></i>Any necessary home medical equipment is delivered</li>
			                        <li><i className="fa fa-check"></i>Any necessary medications are delivered</li>
			                        <li><i className="fa fa-check"></i>You receive information to help you manage the patient’s symptoms, even as they change, and to contact the hospice team if you have a question or need to schedule a visit.</li>
			                    </ul>
			                </div>						
			            </div>
		            </div>
	            </section>
            </Container>
        </Layout>
    )
}

export default WhatToExpect
