import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Do from "../components/Do"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Do />
  </Layout>
)

export default IndexPage
