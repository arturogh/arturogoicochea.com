import React from 'react';
import styled from 'styled-components';
import {Wrapper, Title, TextStyle} from './../components';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import {ModScale} from '../utils';

const Template = ({data, pageContext}) => {
  const {markdownRemark} = data;
  // const {next, prev} = pageContext;
  const title = markdownRemark.frontmatter.title;
  const tags = markdownRemark.frontmatter.tags;
  const html = markdownRemark.html;
  return (
    <Wrapper>
      <ImgContainer>
        <Img fluid={markdownRemark.frontmatter.hero.childImageSharp.fluid} />
      </ImgContainer>
      <Title type="Post" tags={tags}>
        {title}
      </Title>

      <TextStyle>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </TextStyle>

      {/* {prev && <Link to={prev.frontmatter.path}>Previous post</Link>}
        {next && <Link to={next.frontmatter.path}>Next post</Link>} */}
    </Wrapper>
  );
};

const ImgContainer = styled.div`
  margin: ${ModScale.large} 0 ${ModScale.standard};
`;

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        title
        tags
        hero {
          childImageSharp {
            fluid {
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
`;

export default Template;
