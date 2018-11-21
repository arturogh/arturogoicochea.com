import React from 'react';
import styled from 'styled-components';
import {Wrapper, Title, Tags} from './../components';
import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image';
import {Spacing, maxWidth} from '../utils';
import {TextStyle} from '../components/TextStyle';

const Template = ({data, pageContext}) => {
  const {markdownRemark} = data;
  const {next, prev} = pageContext;
  const title = markdownRemark.frontmatter.title;
  const tags = markdownRemark.frontmatter.tags;
  const html = markdownRemark.html;
  return (
    <Wrapper>
      <StyledProjectImage>
        <Img fluid={data.file.childImageSharp.fluid} />
      </StyledProjectImage>
      <Title title={title} type="Project" tags={tags} />

      <TextStyle>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </TextStyle>

      {prev && <Link to={prev.frontmatter.path}>Previous project</Link>}
      {next && <Link to={next.frontmatter.path}>Next project</Link>}
    </Wrapper>
  );
};

const StyledProjectImage = styled.div`
  padding-left: ${Spacing.Xl};
  padding-right: ${Spacing.Xl};
  @media (max-width: ${maxWidth}) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        title
        tags
      }
    }

    file(relativePath: {eq: "square.jpg"}) {
      childImageSharp {
        fluid {
          base64
          tracedSVG
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
`;

export default Template;
