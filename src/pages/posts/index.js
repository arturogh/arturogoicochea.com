import React from 'react';
import styled from 'styled-components';
import {graphql, Link} from 'gatsby';
import {Wrapper, ListingTitle, ListingExcerpt} from './../../components';
import {ModScale, maxWidth, Colors} from '../../utils';
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
              <PostWrapper>
                {/* <Img fluid={frontmatter.hero.childImageSharp.fluid} /> */}
                {/* <TextWrapper> */}
                <Link key={frontmatter.path} to={frontmatter.path}>
                  <ListingTitle key={frontmatter.path}>{frontmatter.title}</ListingTitle>
                </Link>
                <ListingExcerpt>{frontmatter.excerpt}</ListingExcerpt>
                {/* </TextWrapper> */}
              </PostWrapper>
            </Post>
          );
        })}
      </LinkCollection>
    </Wrapper>
  );
};

const LinkCollection = styled.div`
  a {
    /* font-size: ${ModScale.S}; */
    color: ${Colors.Blue.blue};
    text-decoration: none;
    font-family: 'Inter UI', sans-serif;

    &:hover {
      color: ${Colors.Blue.darkBlue};
    }
  }
`;

const Post = styled.div`
  margin-bottom: 0;

  p {
    margin-bottom: 0;
  }

  @media (max-width: ${maxWidth}) {
    /* margin-bottom: ${ModScale.M}; */
  }
`;

const PostWrapper = styled.div``;

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
