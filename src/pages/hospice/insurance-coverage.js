import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import SEO from '../../components/SEO'

const WhatToExpect = () => {
    return (
        <Layout>
            <SEO title="Insurance coverage" description="What hapens if a patient has medicare part" />
            <Container>
				<div class="no-wh-bg">
					<div className="insurance-cover"></div>
				</div>
                <section className="about py-5">
		            <div className="container py-xl-5 py-lg-3">
			            <div className="title-section mb-md-5 mb-4">
				            <h3 className="w3ls-title text-uppercase text-bl font-weight-bold">Does Insurance Cover Hospice?</h3>
			            </div>
			            <div className="row">
				            <div className="col-lg-12 agileits_works-grid" id="list-ul">
						        <p>If the patient has Medicare Part A and meets hospice eligibility requirements, then the government will pay as much as 100% of the cost of hospice care. In such a case, there is no deductible and no co-payment for the patient. Even if a hospice patient is enrolled in a Medicare Advantage plan, hospice benefits are covered by original Medicare.</p>
						        <p>About 90 percent of hospice patients rely on Medicare and Medicaid to cover their care, and the rest turn to other financing sources, which for most people means private insurance. Most private health plans align with Medicare in their requirements for hospice: A patient must be diagnosed with a terminal illness (indicating a life expectancy of six months or less) and must choose not to receive curative treatment.</p>
						        <p>Most people enroll in health insurance plans through an employer or retirement program, while others purchase plans through a private or public exchange. Individuals who do not have Medicare but have coverage from private insurance should contact their health plan directly for specific details on hospice care, including what the patient’s plan will cover and which out-of-pocket costs the patient and their family may be responsible for.</p>
						        <p>Medicaid provides coverage, but it varies by state.</p>
						        <p>Hospice Services Covered by Private Insurance</p>
						        <p>Once you’ve met the qualifications outlined by your insurance provider, you should confirm what services will be covered by the plan, and which—if any—expenses you are responsible for.</p>
						        <p>Here are some hospice services commonly covered by private health insurance plans modeled after the Medicare Hospice Benefit:</p>
						        <ul >
						            <li><i className="fa fa-check"></i>An interdisciplinary team of hospice professionals</li>
						            <li><i className="fa fa-check"></i>Home medical equipment and supplies</li>
						            <li><i className="fa fa-check"></i>Medications related to the terminal diagnosis</li>
						            <li><i className="fa fa-check"></i>Respite care</li>
						            <li><i className="fa fa-check"></i>Continuous care</li>
						            <li><i className="fa fa-check"></i>Inpatient care</li>
						            <li><i className="fa fa-check"></i>Routine home care</li>
						            <li><i className="fa fa-check"></i>Bereavement support</li>
						        </ul>
				            </div>	
				            <div className="col-lg-12 agileits_works-grid1 mt-lg-0 mt-sm-5 py-5 mt-4">
					            <div className="title-section mb-4">
				                    <h3 className="w3ls-title text-uppercase text-bl font-weight-bold">Insurances Accepted</h3>
			                    </div>
			                </div>
			                <div className="col-lg-6 contact-agileits-w3layouts">
			                    <ul className="insurances">
			                        <li><i className="fa fa-check"></i>Aetna Health Management</li>
			                        <li><i className="fa fa-check"></i>Blue Cross of Califonia</li>
			                        <li><i className="fa fa-check"></i>Blue Shield of Califonia</li>
			                        <li><i className="fa fa-check"></i>Cigna</li>
			                        <li><i className="fa fa-check"></i>Coventry Health Care</li>
			                        <li><i className="fa fa-check"></i>Health Net</li>
			                        <li><i className="fa fa-check"></i>Humana Health Plan </li>
			                        <li><i className="fa fa-check"></i>LA Care Health Plan</li>
			                    </ul>
			                </div>
			                <div className="col-lg-6 contact-agileits-w3layouts">
			                    <ul className="insurances">
			                        <li><i className="fa fa-check"></i>Medi-Cal</li>
			                        <li><i className="fa fa-check"></i>Medicare</li>
			                        <li><i className="fa fa-check"></i>Molina Healthcare of California</li>
			                        <li><i className="fa fa-check"></i>Multiplan</li>
			                        <li><i className="fa fa-check"></i>Regal Medical Group</li>
			                        <li><i className="fa fa-check"></i>TriCare</li>
			                        <li><i className="fa fa-check"></i>UnitedHealthCare</li>
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
