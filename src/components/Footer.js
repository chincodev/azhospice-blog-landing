import React from 'react'


const Footer = () => (
    <footer className="py-5" style={{margin: "0 auto",maxWidth: "1920px"}}>
	    <div className="container py-xl-5 py-lg-3">
			<div className="row">
				<div className="col-lg-7 w3l-footer">
					<ul id="footer-li" className="list-unstyled list-styles mt-lg-5 mt-4">
						<li>
							<p className="text-li"><span className="fa fa-location-arrow mr-2"></span>1445 E Los Angeles Ave Suite 301-D, Simi Valley, CA 93065
                            </p>
						</li>
						<li className="my-3">
							<p className="text-li"><span className="fa fa-phone mr-2"></span><a href="tel:805-380-2550">805-380-2550</a></p>
						</li>
						<li className="my-3">
							<a href="mailto:info@a-zhospice.com" className="text-wh"><span className="fa fa-envelope-open mr-2"></span>info@a-zhospice.com</a>
						</li>
						<li className="my-3">
						    <p className="text-li"><span className="fa fa-fax mr-2"></span>Fax # 805-392-5200</p>
						</li>
						<li className="my-3">
						    <p className="text-li"><span className="fa fa-clock-o mr-2"></span>Hours 10 AM to 5 PM </p>
						</li>
						<li className="my-3">
						    <p className="text-li"><span className="fa fa-phone mr-2"></span> On call 24/7</p>
						</li>
					</ul>
				</div>
				<div className="col-lg-5 w3l-footer mt-lg-0 mt-5">
			        <div className="logo2">
						<h2>
							
							    <img src="../../images/ACHC_20Gold.png" alt="ACHC image" aria-label="ACHC image" className="img-fluid" />
                           
						</h2>
					</div>
					<h3 className="mb-sm-4 mb-3 text-wh">Social Networks</h3>
					<ul id="social-li" className="list-unstyled list-part text-wh pt-lg-3">
						<li><a aria-label="Linkedin" href="https://www.linkedin.com/company/53872160 " target="_self"><span className="fa fa-linkedin" aria-hidden="true"></span></a></li>
						<li className="mx-4"><a aria-label="Facebook" href="https://www.facebook.com/AZHOSPICEINC/ " target="_self"><span className="fa fa-facebook" aria-hidden="true"></span></a></li>
						<li><a href="https://www.instagram.com/a_zhospiceinc/ " aria-label="Instagram" target="_self"><span className="fa fa-instagram" aria-hidden="true"></span></a></li>
						<li className="mx-4"><a href="https://twitter.com/hospice_z" aria-label="Twitter" target="_self"><span className="fa fa-twitter" aria-hidden="true"></span></a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
