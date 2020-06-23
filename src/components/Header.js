import React from "react"

export default function Header (){
    return (
        <header>
            <div className="top-bar py-3">
                <div className="container">
                    <div style={{display:"flex", padding: "5px"}}>
                        <div className="col-xl-5 col-lg-6 col-md-8 top-social-agile text-lg-left text-center">
                            <div className="row">
                                <div className="col-6 header-top_w3layouts">
                                    <p className="text-bl">
                                        <span className="fa fa-envelope mr-2"></span>
                                        <a href="mailto:info@a-zhospice.com">info@a-zhospice.com</a>
                                    </p>
                                </div>
                                <div className="col-6 header-top_w3layouts">
                                    <p className="text-bl">
                                        <span className="fa fa-phone mr-2"></span><a href="tel:805-380-2550">805-380-2550</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-4 top-social-agile text-md-right text-center mt-md-0 mt-2">
                            <div className="row">
                                <div className="offset-xl-4 offset-lg-4 offset-4">
                                </div>
                                <div className="col-xl-8 col-lg-8 col-8 top-w3layouts p-md-0 text-right">
                                    <ul className="top-right-info">
                                        <li className="mx-3">
                                            <a aria-label="linkedin" rel="noreferrer" rel="noreferrer" href="https://www.linkedin.com/company/53872160" target="_self">
                                                <span className="fa fa-linkedin"></span>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a aria-label="facebook" rel="noreferrer" rel="noreferrer" href="https://www.facebook.com/AZHOSPICEINC/" target="_self">
                                                <span className="fa fa-facebook"></span> 
                                            </a>
                                        </li>
                                        <li className="mx-3">
                                            <a aria-label="instagram" rel="noreferrer" href="https://www.instagram.com/a_zhospiceinc/" target="_self">
                                                <span className="fa fa-instagram"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a aria-label="twitter" rel="noreferrer" href="https://twitter.com/hospice_z" target="_self">
                                                <span className="fa fa-twitter"></span>
                                            </a>
                                        </li>
                                        
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}   