import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import Nav from './Nav'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Copyright from '../components/Copyright'
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
