import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import SEO from '../../components/SEO'

const Hospice = () => {
    return (
        <Layout>
            <SEO title="Hospice" description="All about the hospice services that we provide at A-Z Hospice Inc." />
            <Container>
				<div class="no-wh-bg">
                	<div className="hospice_banner" />
				</div>
                <section className="about py-5">
	            	<div className="container py-xl-5 py-lg-3">
	            		<div className="title-section mb-md-5 mb-4">
	            			<h3 className="w3ls-title text-uppercase text-bl font-weight-bold">What is Hospice?</h3>
	            		</div>
	            		<div className="row">
	            			<div className="col-lg-12 agileits_works-grid">
	            				<p>Medical care to help someone with a terminal illness live as well as possible for as long as possible, increasing quality of life.</p>
	            				<p>An interdisciplinary team of professionals who address physical, psycho-social, and spiritual distress focused on both the dying person and their entire family.</p>
	            			</div>
	            			<div className="col-lg-6 agileits_works-grid1 mt-lg-0 mt-sm-5 mt-4" style={{textAlign: "center",  margin: "30px 0 30px 0 !important"}}>
	            			    <img src="../../images/hospice insurance.jpg" alt="" className="img-fluid" />
	            			</div>	
	            			<div className="col-lg-6 agileits_works-grid1 mt-lg-0 mt-sm-5 mt-4"  style={{textAlign: "center",  margin: "30px 0 30px 0 !important"}}>					
	            				<img src="../../images/A-ZxSTAFF.jpg" alt="" className="img-fluid" />
	            			</div>								
	            			<div className="col-lg-12 agileits_works-grid">															
	            			    <p>Care that addresses symptom management, coordination of care, communication and decision making, clarification of goals of care, and quality of life. During an illness that is terminal, you or your loved ones may talk with your doctor and decide the treatments meant to cure or slow a disease are no longer working, or you’re ready to stop them. Your doctor can make a referral for hospice care, also known as end-of-life care.You want relief from pain, shortness of breath, and other symptoms so that you can focus on the people and things you care about the most. That's when hospice, or end-of-life care, may help.Some people might think using hospice means they're giving up. Others may worry that they won’t get the medical care they need. But the service simply focuses on the quality of your life instead of trying to cure a disease.Your team may include a doctor, nurse, social worker, counselor, chaplain (if you’re religious), home health aide, and trained volunteers. They work together to meet your physical, emotional, and spiritual needs.</p>									
	            			</div>				
	            		</div>
	            	</div>
	            </section>
            </Container>
        </Layout>
  )
}
export default Hospice