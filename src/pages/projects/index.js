import React from 'react';
import styled from 'styled-components';
import {Wrapper} from './../../components/Wrapper';
import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image';
import {
  CollectionHeading,
  LinkCollection,
  CollectionItemTitle,
  CollectionExcerpt
} from '../../components';
import {Spacing} from '../../utils';

const Projects = ({data}) => {
  const {edges} = data.allMarkdownRemark;
  return (
    <Wrapper>
      <CollectionHeading heading="Projects" />
      <LinkCollection>
        {edges.map(edge => {
          const {frontmatter} = edge.node;
          return (
            <Project>
              <Link key={frontmatter.path} to={frontmatter.path}>
                <CollectionItemTitle key={frontmatter.path}>
                  {frontmatter.title}
                </CollectionItemTitle>
                <Img fluid={frontmatter.hero.childImageSharp.fluid} />
              </Link>
              <CollectionExcerpt>{frontmatter.excerpt}</CollectionExcerpt>
            </Project>
          );
        })}
      </LinkCollection>
    </Wrapper>
  );
};

const Project = styled.div`
  margin-bottom: ${Spacing.Xl};

  .gatsby-image-wrapper {
    padding-top: 66.67%;
    height: 0;
    margin-bottom: ${Spacing.S};
  }

  /* Overriding padding bottom in CollectionItemTitle */
  a h3 {
    padding-bottom: ${Spacing.M};
  }
`;

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
