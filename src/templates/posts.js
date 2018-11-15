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
      <div className="blogpost" dangerouslySetInnerHTML={{__html: html}} />

      {prev && <Link to={`posts${prev.frontmatter.path}`}>Previous post</Link>}
      {next && <Link to={`posts${next.frontmatter.path}`}>Next post</Link>}
    </>
  );
};

export const query = graphql`
  query($cleanPath: String!) {
    markdownRemark(frontmatter: {path: {eq: $cleanPath}}) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
