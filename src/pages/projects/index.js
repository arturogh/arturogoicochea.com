import React from 'react';
import {Wrapper} from './../../components/Wrapper';
import {graphql} from 'gatsby';
import {PageTitle, PageSubText, ProjectItem} from '../../components';

const Projects = ({data}) => {
  const {edges} = data.allMarkdownRemark;
  return (
    <Wrapper>
      <PageTitle>Projects:</PageTitle>
      <PageSubText>Freebound explorations, for fun or to learn something new</PageSubText>
      {edges.map(edge => {
        const {frontmatter} = edge.node;
        return (
          <ProjectItem
            title={frontmatter.title}
            excerpt={frontmatter.excerpt}
            link={frontmatter.path}
            img={frontmatter.hero.childImageSharp.fluid}
          />
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
            excerpt
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
    }
  }
`;

export default Projects;
