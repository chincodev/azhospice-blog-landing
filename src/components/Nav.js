import React, {useState} from "react"
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export default function Nav (){
	const { menuLinks } = useSiteMetadata()

	const menuActiveInitialState = false;
	const [menuActive, setMenuActive] = useState(menuActiveInitialState)

	const handleMenuActive = () => {
		setMenuActive(!menuActive)
	}

	const openSubMenu = (e) => {
		const el = e.target;
		const next = el.nextElementSibling
		next.classList.toggle("active")
	}


    return (
		<>
		<div className="separator"></div>
        <div className="main-top">
            <div className="container">
        	    <div className="header d-md-flex justify-content-between align-items-center py-3">
                    <div id="logo">
                        <a className="logoLink" aria-label="Home section" href="/">
                            <img src={'../../images/AZlogoBG_edited.webp'} alt="" className="img-fluid" />
                        </a>
						<div onClick={handleMenuActive} className="menu-trigger-container"><span className="fa fa-bars menu-trigger"></span></div>
        			</div>
        			<div className="nav_w3ls">
        			    <nav>
        					<ul className={`menu ${(menuActive)?"active":""}`}>
								{menuLinks && menuLinks.map((link, i) => (
           						  <li key={i} className="mx-lg-4 mx-md-3 my-md-0 my-2" key={link.name}>
           						    <Link to={link.slug} activeStyle={{color:"#912826"}}>
           						      {link.name}
           						    </Link>
									{
										(link.childs)?(
											<>
											<span onClick={openSubMenu} className="fa fa-angle-down" aria-hidden="true"></span>
											<ul className="submenu">
												{
													link.childs && link.childs.map((childLink,i) => 
														<li key={i}>
															<Link to={childLink.slug} activeStyle={{color:"#912826"}}>
																{childLink.name}
															</Link>
														</li>
													)
												}
											</ul>
											</>
										):(false)
									}
           						  </li>
           						))}
        					</ul>
        				</nav>
        			</div>
        	    </div>
        	</div>
        </div>
		</>
    )}