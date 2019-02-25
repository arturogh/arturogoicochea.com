import React from 'react';
import styled from 'styled-components';
import {Wrapper} from './../../components/Wrapper';
import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image';
import {ListingTitle, ListingExcerpt} from '../../components';
import {ModScale} from '../../utils';

const Projects = ({data}) => {
  const {edges} = data.allMarkdownRemark;
  return (
    <Wrapper>
      {edges.map(edge => {
        const {frontmatter} = edge.node;
        return (
          <Project>
            <Link key={frontmatter.path} to={frontmatter.path}>
              <Img fluid={frontmatter.hero.childImageSharp.fluid} />
              <ListingTitle key={frontmatter.path}>{frontmatter.title}</ListingTitle>
            </Link>
          </Project>
        );
      })}
    </Wrapper>
  );
};

const Project = styled.div`
  /* margin-bottom: ${ModScale.Xl}; */
  transition: .6s scale;
        

  &:hover {
    scale: 1.0125;

  a h3 {
        
    border-color: black;
        background-color: lightgrey;
    }

    .gatsby-image-wrapper {
      transform: translateY(10px);
      border-color: black;
    }

  }
  

  .gatsby-image-wrapper {
    padding-top: 66.67%;
    border-top: 1px solid transparent;
      
    border-left: 1px solid transparent;
      border-right: 1px solid transparent;
    height: 0;
    transform: translateY(0);
        transition: .6s transform;
    /* margin-bottom: ${ModScale.S}; */
    
    img {
      border-radius: 0;
    }
  }

  /* Overriding padding bottom in CollectionItemTitle */
  a h3 {
    /* padding-bottom: ${ModScale.M}; */
    scale: 1;
        transition: .6s background-color;
          border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
      border-right: 1px solid transparent;
    
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
