import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"

const Header = () => (
  <Styledheader>
    <SiteTitle>
      <Link to="/">Arturo</Link>
    </SiteTitle>
    <Nav>
      <Link to="/">Posts</Link>
      <Link to="/">Projects</Link>
      <Link to="/">About</Link>
    </Nav>
  </Styledheader>
)

const Styledheader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const SiteTitle = styled.h2`
  font-family: "Inter";

  a {
    text-decoration: none;
  }
`

const Nav = styled.nav``

export default Header
