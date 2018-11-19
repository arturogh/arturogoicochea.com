import React from 'react';
import {Wrapper} from './../components/Wrapper';
import {graphql, Link} from 'gatsby';

const Template = ({data, pageContext}) => {
  const {markdownRemark} = data;
  const {next, prev} = pageContext;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}} />

      {prev && <Link to={prev.frontmatter.path}>Previous post</Link>}
      {next && <Link to={next.frontmatter.path}>Next post</Link>}
    </Wrapper>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
