import React from 'react';
import {Wrapper} from './../../components/Wrapper';
import {graphql, Link} from 'gatsby';

const Projects = ({data}) => {
  const {edges} = data.allMarkdownRemark;
  return (
    <Wrapper>
      {edges.map(edge => {
        const {frontmatter} = edge.node;
        return (
          <Link key={frontmatter.path} to={frontmatter.path}>
            <div key={frontmatter.path}>{frontmatter.title}</div>
          </Link>
        );
      })}
    </Wrapper>
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
