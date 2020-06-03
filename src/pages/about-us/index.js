import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import SEO from '../../components/SEO'

const About = () => {
    return (
        <Layout>
            <SEO title="About us" description="We invite you to find out more about our Hospice, our staff, and the various services that we provide." />
            <Container>
                <div className="about_banner">
                </div>
                <section className="about py-5">
                    <div className="container py-xl-5 py-lg-3">
                        <div className="title-section mb-md-5 mb-4">
                            <h3 className="w3ls-title text-uppercase text-bl font-weight-bold">About Us</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 agileits_works-grid">
                                <div className="wthree-bottom">    
                                    <p>A-Z Hospice Inc. has been serving Los Angeles and Ventura county since 2017. We offer our patients quality health care in a family-friendly environment. At A-Z Hospice Inc., your health is our number one priority. We invite you to find out more about our Hospice, our staff, and the various services that we provide.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 agileits_works-grid1 mt-lg-0 mt-sm-5 mt-4 hospice">
                                <img src="../../images/AZlogoBG_edited1.png" alt="" className="img-fluid" />
                            </div>												
                            <div className="col-lg-6 agileits_works-grid1 mt-lg-0 mt-sm-5 mt-4 hospice">					
                                <img src={"../../images/ACHC_20Gold.png"} alt="" className="img-fluid" />				
                            </div>						
                            <div className="col-lg-6 agileits_works-grid">					
                                <div className="wthree-bottom" style={{float: "right"}}>						
                                    <h6 className="subheading-w3ls text-uppercase text-bl mb-4">Why should you choose A-Z Hospice?</h6>						
                                    <p>Since 2017, A-Z Hospice Inc. has earned a reputation for being one of the leading health care providers in the Ventura and Los Angeles County. Committed to many more years of excellence, our highly trained, board-certified staff are here to pave the way for quality treatment and care as soon as you walk through our doors.</p>					
                                </div>				
                            </div>				
                        </div>
                    </div>
                </section>
            </Container>
        </Layout>
  )
}
export default About



		