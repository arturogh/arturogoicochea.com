import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "normalize.css"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <SiteWrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentWrapper>{children}</ContentWrapper>
    </SiteWrapper>
  )
}

const SiteWrapper = styled.div`
  @import url("https://rsms.me/inter/inter.css");
  html {
    font-family: "Inter", sans-serif;
  }
  @supports (font-variation-settings: normal) {
    html {
      font-family: "Inter var", sans-serif;
    }
  }

  & > div,
  & header,
  & footer {
    margin: 0 auto;
    max-width: 700px;
  }
`

const ContentWrapper = styled.div`
  max-width: 700px;
`
export default Layout
