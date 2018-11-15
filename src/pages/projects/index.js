import React from 'react';
import {Header} from '../../components/Header';
import {graphql, Link} from 'gatsby';

const Projects = ({data}) => {
  const {edges} = data.allMarkdownRemark;
  return (
    <div>
      <Header />
      {edges.map(edge => {
        const {frontmatter} = edge.node;
        return (
          <Link key={frontmatter.path} to={frontmatter.path}>
            <div key={frontmatter.path}>{frontmatter.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {type: {eq: "project"}}}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default Projects;
