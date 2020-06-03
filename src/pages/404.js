import React from 'react'
import { Link } from 'gatsby'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" description="Page Not Found" />
    <Container>
      <PageTitle>Page Not Found</PageTitle>
      <p>
        Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.
      </p>
    </Container>
  </Layout>
)

export default NotFoundPage
