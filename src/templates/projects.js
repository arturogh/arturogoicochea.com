import React from 'react';
import {Header} from './../components/Header';
import {graphql, Link} from 'gatsby';

const Template = ({data, pageContext}) => {
  const {markdownRemark} = data;
  const {next, prev} = pageContext;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <>
      <Header />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}} />

      {prev && <Link to={prev.frontmatter.path}>Previous project</Link>}
      {next && <Link to={next.frontmatter.path}>Next project</Link>}
    </>
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
