import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound: React.FC = () => (
  <Layout>
    <Head title="404: Not found" />
    <h1 className="page-title">Not Found</h1>
    <p>Sorry, Page not found.</p>
    <p className="error-status">404</p>
  </Layout>
)

export default NotFound
