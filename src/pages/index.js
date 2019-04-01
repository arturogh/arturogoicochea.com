import React from 'react';
import {Wrapper, Post} from '../components';
import styled from 'styled-components';
import {Sizes, Colors, Weights, Spacing} from './../utils';

export default ({data}) => {
  const {edges} = data.allMarkdownRemark;
  console.log(edges);
  return (
    <Wrapper>
      <About>
        {/* About */}
        <AboutTitle>Arturo Goicochea</AboutTitle>
        <AboutSubText>
          <span>Designer</span> at Microsoft +{' '}
          <span role="img" aria-label="heart emoji">
            ❤️{' '}
          </span>
          code
        </AboutSubText>
      </About>

      {/* Posts */}
      <Posts>
        {edges.map(edge => (
          <Post
            link={edge.node.frontmatter.path}
            title={edge.node.frontmatter.title}
            excerpt={edge.node.frontmatter.excerpt}
          />
        ))}
      </Posts>
    </Wrapper>
  );
};

const About = styled.div`
  margin: ${Spacing.xLarge} 0;
`;

const Posts = styled.div`
  margin: ${Spacing.large} 0;
`;

const AboutTitle = styled.h1`
  margin: 0;
  padding: 0 0 ${Spacing.small};
  font-size: ${Sizes.large};
  color: ${Colors.nearBlack};
  font-weight: ${Weights.bold};
`;

const AboutSubText = styled.p`
  font-family: 'Inter var';
  margin: 0;
  padding: 0;
  font-size: ${Sizes.medium};
  color: ${Colors.gray};
  font-weight: ${Weights.subText};

  span {
    color: ${Colors.nearBlack};
  }
`;

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`;
