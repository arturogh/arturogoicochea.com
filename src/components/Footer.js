import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../img/logo.svg"
import facebook from "../img/social/facebook.svg"
import instagram from "../img/social/instagram.svg"
import twitter from "../img/social/twitter.svg"
import vimeo from "../img/social/vimeo.svg"

const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>
        <span>👋</span>
        <ul>
          <li>
            <a>Twitter</a>
            <a>Github</a>
            <a>LinkedIn</a>
          </li>
        </ul>
      </StyledFooter>
    )
  }
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`

export default Footer
