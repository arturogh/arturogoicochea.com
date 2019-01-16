import React from 'react';
import styled from 'styled-components';
import {graphql, Link} from 'gatsby';
import {
  Wrapper,
  LinkCollection,
  LoadInWrapper,
  CollectionItemTitle,
  CollectionExcerpt
} from './../components';
import {ModScale, maxWidth} from '../utils';
// import Img from 'gatsby-image';

const Posts = ({data}) => {
  const {edges} = data.allMarkdownRemark;
  return (
    <Wrapper>
      <LinkCollection>
        {edges.map(edge => {
          const {frontmatter} = edge.node;
          return (
            <Post>
              <LoadInWrapper>
                <Link key={frontmatter.path} to={frontmatter.path}>
                  {/* <Img fluid={frontmatter.hero.childImageSharp.fluid} /> */}
                  <CollectionItemTitle key={frontmatter.path}>
                    {frontmatter.title}
                  </CollectionItemTitle>
                </Link>
                <CollectionExcerpt>{frontmatter.excerpt}</CollectionExcerpt>
              </LoadInWrapper>
            </Post>
          );
        })}
      </LinkCollection>
    </Wrapper>
  );
};

const Post = styled.div`
  margin-bottom: ${ModScale.MPlus};

  @media (max-width: ${maxWidth}) {
  margin-bottom: ${ModScale.L};
    }

  .gatsby-image-wrapper {
    width: 40%;
    margin-bottom: ${ModScale.S};
/* 
    @media (max-width: ${maxWidth}) {
      width: 100%;
    } */
  }
`;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {type: {eq: "post"}}}
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

export default Posts;
