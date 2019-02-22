import React from 'react';
import styled from 'styled-components';
import {graphql, Link} from 'gatsby';
import {
  Wrapper,
  LinkCollection,
  LoadInWrapper,
  CollectionItemTitle,
  CollectionExcerpt
} from './../../components';
import {ModScale, maxWidth} from '../../utils';
import Img from 'gatsby-image';

const Posts = ({data}) => {
  const {edges} = data.allMarkdownRemark;
  return (
    <Wrapper>
      <LinkCollection>
        {edges.map(edge => {
          const {frontmatter} = edge.node;
          return (
            <Post key={frontmatter.path}>
              <LoadInWrapper>
                <PostWrapper>
                  <Img fluid={frontmatter.hero.childImageSharp.fluid} />
                  <TextWrapper>
                    <Link key={frontmatter.path} to={frontmatter.path}>
                      <CollectionItemTitle key={frontmatter.path}>
                        {frontmatter.title}
                      </CollectionItemTitle>
                    </Link>
                    <CollectionExcerpt>{frontmatter.excerpt}</CollectionExcerpt>
                  </TextWrapper>
                </PostWrapper>
              </LoadInWrapper>
            </Post>
          );
        })}
      </LinkCollection>
    </Wrapper>
  );
};

const Post = styled.div`
  margin-bottom: ${ModScale.S};

  @media (max-width: ${maxWidth}) {
    margin-bottom: ${ModScale.M};
  }
`;

const PostWrapper = styled.div`
  display: flex;

  @media (max-width: ${maxWidth}) {
    display: block;
  }

  &&& .gatsby-image-wrapper {
    width: 175px;
    height: 175px;
    margin-bottom: ${ModScale.S};

    @media (max-width: ${maxWidth}) {
      height: auto;
      width: 100%;
    }
  }
`;

const TextWrapper = styled.div`
  width: 75%;
  padding-left: ${ModScale.Xs};
  @media (max-width: ${maxWidth}) {
    width: 100%;
    padding-left: 0;
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
