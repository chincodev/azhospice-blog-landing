import React, { useEffect, lazy, Suspense } from 'react'
import styled from '@emotion/styled'
import Nav from './Nav'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Copyright from '../components/Copyright' 

// const Footer = React.lazy(() => import('./Footer'));
// const Header = React.lazy(() => import('./Header'));
// const Copyright = React.lazy(() => import('./Copyright'));
// const Nav = React.lazy(() => import('./Nav'));
// import BounceLoaderFullSize from './BounceLoaderFullSize';


import "../../static/styles/bootstrap.css"
import "../../static/styles/css_slider.css"
import "../../static/styles/font-awesome.min.css"
import "../../static/styles/single.css"
import "../../static/styles/style.css"




const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])

  return (
    <div className="siteRoot">
     
            <div className="siteContent">
                <Header />
                <Nav />
                <div id="main">{props.children}</div>
            </div>
            <Footer />
            <Copyright />
      
    </div>
  )
}

export default Layout
