import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="your health is our number one priority. We invite you to find out more about our Hospice, our staff, and the various services that we provide."
      />
      <Container>
        <div className="banner_w3lspvt" style={{margin: "0 auto",maxWidth: "1920px"}}>
          <div className="csslider infinity" id="slider1">
            <input type="radio" name="slides" defaultChecked={true} id="slides_1" />
            <input type="radio" name="slides" id="slides_2" />
            <input type="radio" name="slides" id="slides_3" />
            <ul className="banner_slide_bg">
              <li className="banner-index">
                <div className="container">
                  <div className="banner-info_agile_w3ls text-center mx-auto">
                    <h3 className="text-wh font-weight-bold">
                      WELCOME TO A-Z HOSPICE INC.
                    </h3>
                    <h4 className="text-wh font-weight-bold">
                      Your Health Matters
                    </h4>
                    <p className="text-wh font-weight-normal">
                      A-Z Hospice Inc. has been serving Los Angeles and Ventura
                      county since 2017. We offer our patients quality health
                      care in a family-friendly environment. At A-Z Hospice
                      Inc., your health is our number one priority. We invite
                      you to find out more about our Hospice, our staff, and the
                      various services that we provide.
                    </p>
                    <Link to="/contact" className="btn button-w3ls mt-5">
                      Contact Us Now
                    </Link>
                  </div>
                </div>
              </li>
              <li className="banner-top2">
                <div className="container">
                  <div className="banner-info_agile_w3ls text-center mx-auto">
                    <h3 className="text-wh font-weight-bold">
                      WELCOME TO A-Z HOSPICE INC.
                    </h3>
                    <h4 className="text-wh font-weight-bold">
                      Your Health Matters
                    </h4>
                    <p className="text-wh font-weight-normal">
                      A-Z Hospice Inc. has been serving Los Angeles and Ventura
                      county since 2017. We offer our patients quality health
                      care in a family-friendly environment. At A-Z Hospice
                      Inc., your health is our number one priority. We invite
                      you to find out more about our Hospice, our staff, and the
                      various services that we provide.
                    </p>
                    <Link to="/contact" className="btn button-w3ls mt-5">
                      Contact Us Now
                    </Link>
                  </div>
                </div>
              </li>
              <li className="banner-top3">
                <div className="container">
                  <div className="banner-info_agile_w3ls text-center mx-auto">
                    <h3 className="text-wh font-weight-bold">
                      WELCOME TO A-Z HOSPICE INC.
                    </h3>
                    <h4 className="text-wh font-weight-bold">
                      Your Health Matters
                    </h4>
                    <p className="text-wh font-weight-normal">
                      A-Z Hospice Inc. has been serving Los Angeles and Ventura
                      county since 2017. We offer our patients quality health
                      care in a family-friendly environment. At A-Z Hospice
                      Inc., your health is our number one priority. We invite
                      you to find out more about our Hospice, our staff, and the
                      various services that we provide.
                    </p>
                    <Link to="/contact" className="btn button-w3ls mt-5">
                      Contact Us Now
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
            <div className="navigation">
              <div>
                <label htmlFor="slides_1"></label>
                <label htmlFor="slides_2"></label>
                <label htmlFor="slides_3"></label>
              </div>
            </div>
          </div>
        </div>

        <div className="section-2">
          <div className="container">
            <div className="row slide">
              <div className="col-xl-4 triple-sec p-5 text-center">
                <h5 className="text-wh font-weight-bold">Free Consultation</h5>
                <p>
                  Contact us for a free consultation so you can rest assured
                  that A-Z Hospice is the best fit for your loved one.
                </p>
              </div>

              <div className="col-xl-4 triple-sec p-5 text-center">
                <h5 className="text-wh font-weight-bold">24/7 Support</h5>
                <p>
                  At A-Z Hospice we provide around the clock care. Your loved
                  one will have a staff member by their side whenever needed.
                </p>
              </div>

              <div className="col-xl-4 triple-sec p-5 text-center">
                <h5 className="text-wh font-weight-bold">Comfort Caring</h5>
                <p>
                  At A-Z Hospice we provide around the clock care. Your loved
                  one will have a staff member by their side whenever needed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="blog_w3ls" id="why">
          <div className="container py-xl-5 py-lg-3">
            <div className="title-section mb-md-5 mb-4">
              <h3 className="w3ls-title text-uppercase text-bl font-weight-bold">
                Our Team
              </h3>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 med-blog">
                  <div className="card-header p-0">
                    <img
                      className="card-img-bottom"
                      src="images/GiQtK1X7gz.jpg"
                      alt="image"
                    />
                  </div>

                  <div className="card-body border border-top-0">
                    <div className="mb-3">
                      <h4 className="blog-title card-title m-0">
                        The Hospice Team
                      </h4>
                    </div>

                    <p>
                      Hospice care is provided by means of an interdisciplinary
                      and medically directed team. The Hospice team consists of
                      different disciplines, including a physician, a nurse, a
                      home health aide, a social worker, a spiritual counselor,
                      and a volunteer... Read more about 
                    </p>

                    <Link to="/about-us/our-team" aria-label="Our team" className="btn blog-btn mt-4">
                      Our Team
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div className="card border-0 med-blog">
                  <div className="card-header p-0">
                    <img
                      className="card-img-bottom"
                      src="images/2.jpg"
                      alt="image"
                    />
                  </div>

                  <div className="card-body border border-top-0">
                    <div className="mb-3">
                      <h4 className="blog-title card-title m-0">
                        Spiritual Counselors
                      </h4>
                    </div>

                    <p>
                      Spiritual counselors provide spiritual and emotional
                      support to patients and families members. They ensure that
                      patients have the spiritual support that they need and
                      provide a bridge between the patient and the religious
                      community... Read more about 
                    </p>

                    <Link to="/about-us/our-team" aria-label="Our team" className="btn blog-btn mt-4">
                      Our Team
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                <div className="card border-0 med-blog">
                  <div className="card-header p-0">
                    <img
                      className="card-img-bottom"
                      src="images/ybRmRFe5ux.jpg"
                      alt="image"
                    />
                  </div>

                  <div className="card-body border border-top-0">
                    <div className="mb-3">
                      <h4 className="blog-title card-title m-0">
                        Home health
                      </h4>
                    </div>

                    <p>
                      Home health aides provide support in the personal care of
                      patients, more specifically focusing on overall hygiene
                      and assistance with activities such as bathing, feeding,
                      shaving, walking, and so on.Our home health aides are very
                      sensitive to the... Read more about 
                    </p>

                    <Link to="/about-us/our-team" aria-label="Our team" className="btn blog-btn mt-4">
                      Our Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services py-5">
          <div className="container py-xl-5 py-lg-3">
            <div className="title-section mb-md-5 mb-4">
              <h3 className="w3ls-title text-uppercase text-bl font-weight-bold">
                Service We Provide
              </h3>
            </div>
            <div className="row px-lg-5">
              <div className="col-lg-6">
                <div className="d-flex services-box">
                  <span className="fa fa-medkit" aria-hidden="true"></span>

                  <div className="service-content ml-4">
                    <h3>Pain Management</h3>

                    <p className="my-3">
                      Pain management is one of the primary goals of hospice
                      service...{' '} Read more about 
                      <Link to="/about-us/services-we-provide">Our Team</Link>
                    </p>
                  </div>
                </div>

                <div className="d-flex services-box mt-5">
                  <span className="fa fa-user-md" aria-hidden="true"></span>

                  <div className="service-content ml-4">
                    <h3>Professional Nurses and Aides</h3>

                    <p className="my-3">
                      At A-Z Hospice our professional Staff are board approved
                      Nurses ...{' '} Read more about 
                      <Link to="/about-us/services-we-provide">Our Team</Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-lg-0 mt-5">
                <div className="d-flex services-box">
                  <span className="fa fa-hospital-o" aria-hidden="true"></span>

                  <div className="service-content ml-4">
                    <h3>Continuous Home Care</h3>

                    <p className="my-3">
                      Continuous Home Care is typically used during times of
                      crisis. Read more about  <Link to="/about-us/services-we-provide">Our Team</Link>
                    </p>
                  </div>
                </div>

                <div className="d-flex services-box mt-5">
                  <span className="fa fa-ambulance" aria-hidden="true"></span>

                  <div className="service-content ml-4">
                    <h3>24 Hour Hospice Care</h3>

                    <p className="my-3">
                      At A-Z Hospice, Our On-Call Skilled nurses available 24
                      hours a day.{' '} Read more about ,  
                      <Link to="/about-us/services-we-provide">Our Team</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default IndexPage
