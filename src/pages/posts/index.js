import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import {Wrapper, PostItem, PageSubText, PageTitle} from './../../components';
import {ModScale, Colors} from '../../utils';

const Posts = ({data}) => {
  const {edges} = data.allMarkdownRemark;
  return (
    <Wrapper>
      <LinkCollection>
        <PageTitle>Posts:</PageTitle>
        <PageSubText>Thoughts on tech, teamwork, society and more</PageSubText>
        {edges.map(edge => {
          const {frontmatter} = edge.node;
          return (
            <PostItem
              key={frontmatter.path}
              link={frontmatter.path}
              title={frontmatter.title}
              excerpt={frontmatter.excerpt}
              img={frontmatter.hero.childImageSharp.fluid}
            />
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
