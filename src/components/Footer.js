import React from 'react'


const Footer = () => (
    <footer className="py-5">
	    <div className="container py-xl-5 py-lg-3">
			<div className="row">
				<div className="col-lg-7 w3l-footer">
					<ul id="footer-li" className="list-unstyled list-styles mt-lg-5 mt-4">
						<li>
							<p className="text-li"><span className="fa fa-location-arrow mr-2"></span>1445 E Los Angeles Ave Suite 301-D, Simi Valley, CA 93065
                            </p>
						</li>
						<li className="my-3">
							<p className="text-li"><span className="fa fa-phone mr-2"></span>(805) 380-2550</p>
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
							<a href="index.html">
							    <img src="../../images/ACHC_20Gold.png" alt="" className="img-fluid" />
                            </a>
						</h2>
					</div>
					<h3 className="mb-sm-4 mb-3 text-wh">Social Networks</h3>
					<ul id="social-li" className="list-unstyled list-part text-wh pt-lg-3">
						<a href="https://www.linkedin.com/company/53872160 "><li><span className="fa fa-linkedin" aria-hidden="true"></span></li></a>
						<a href="https://www.facebook.com/AZHOSPICEINC/ "><li className="mx-4"><span className="fa fa-facebook" aria-hidden="true"></span></li></a>
						<a href="https://www.instagram.com/a_zhospiceinc/ "><li><span className="fa fa-instagram" aria-hidden="true"></span></li></a>
						<a href="https://twitter.com/hospice_z"><li className="mx-4"><span className="fa fa-twitter" aria-hidden="true"></span></li></a>
					</ul>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
