import React from "react" // eslint-disable-line no-unused-vars
import styled from "@emotion/styled"
import { Global } from "@emotion/core"
import globalStyles from "../styles/global"

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto 180px;
  padding: 0 32px;
`

export default ({ children }) => (
  <Container>
    <Global styles={globalStyles} />
    <main>{children}</main>
  </Container>
)
