import React from 'react';
import {Wrapper, Title} from './../components';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import {TextStyle} from '../components/TextStyle';

const Template = ({data, pageContext}) => {
  const {markdownRemark} = data;
  // const {next, prev} = pageContext;
  const title = markdownRemark.frontmatter.title;
  const tags = markdownRemark.frontmatter.tags;
  const html = markdownRemark.html;
  return (
    <Wrapper>
      <Img fluid={markdownRemark.frontmatter.hero.childImageSharp.fluid} />
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
