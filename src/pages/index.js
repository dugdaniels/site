import React from "react"
import styled from "@emotion/styled"
import colors from "../styles/colors"
import { projects, work, elsewhere } from "../content"

import Layout from "../components/layout"
import LinkList from "../components/linkList"
import SEO from "../components/seo"

const Highlight = styled.span`
  background: ${colors.yellow};
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <>
      <h1>Hello,</h1>
      <p>
        My name is <Highlight>Corey Daniels</Highlight>.
      </p>
      <p>
        I'm a hybrid <Highlight>Designer/Developer</Highlight> with an itch for
        creating products. I started my career in Industrial Design, where I
        gained a deep appreciation for{" "}
        <Highlight>human-centered design</Highlight> and{" "}
        <Highlight>rapid-prototyping</Highlight>. From there, I transitioned
        into software, where I've spent the majority of my carrer creating{" "}
        <Highlight>digital interfaces</Highlight> and{" "}
        <Highlight>products</Highlight>.
      </p>
      <p>
        In my spare time I enjoy tinkering with emergent tech, reading/watching
        science fiction, and doing a little PC gaming.
      </p>
      <LinkList title="Ongoing projects" links={projects} />
      <LinkList title="Some past work" links={work} />
      <LinkList title="Elsewhere" links={elsewhere} />
    </>
  </Layout>
)

export default IndexPage
