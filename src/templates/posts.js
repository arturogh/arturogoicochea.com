import React from 'react';
import {Wrapper, Title, LoadInWrapper} from './../components';
import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image';
import {TextStyle} from '../components/TextStyle';

const Template = ({data, pageContext}) => {
  const {markdownRemark} = data;
  const {next, prev} = pageContext;
  const title = markdownRemark.frontmatter.title;
  const tags = markdownRemark.frontmatter.tags;
  const html = markdownRemark.html;
  return (
    <Wrapper>
      <LoadInWrapper>
        <Title title={title} type="Post" tags={tags} />
        <Img fluid={markdownRemark.frontmatter.hero.childImageSharp.fluid} />

        <TextStyle>
          <div dangerouslySetInnerHTML={{__html: html}} />
        </TextStyle>

        {prev && <Link to={prev.frontmatter.path}>Previous post</Link>}
        {next && <Link to={next.frontmatter.path}>Next post</Link>}
      </LoadInWrapper>
    </Wrapper>
  );
};

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
