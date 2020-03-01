import React from "react"
import styled from "@emotion/styled"

const List = styled.ul`
  list-style-type: none;
`

const LinkList = props => (
  <>
    <h2>{props.title}</h2>
    <List>
      {props.links.map((link, index) => (
        <li key={index}>
          {link.url ? <a href={link.url}>{link.title}</a> : link.title} &mdash;{" "}
          {link.description}
        </li>
      ))}
    </List>
  </>
)

export default LinkList
