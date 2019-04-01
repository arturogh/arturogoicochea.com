import React from 'react';
import {Wrapper, Post} from '../components';
import styled from 'styled-components';
import {Sizes, Colors, Weights, Spacing, useInter, mobileWidth} from './../utils';
import Img from 'gatsby-image';

export default ({data}) => {
  const {edges} = data.allMarkdownRemark;
  console.log(edges);
  return (
    <Wrapper>
      <About>
        {/* About */}
        <Img fluid={data.file.childImageSharp.fluid} />
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
  margin: ${Spacing.xLarge} 0 ${Spacing.large};

  @media (max-width: ${mobileWidth}) {
    margin: ${Spacing.small} 0 ${Spacing.medium};
    padding-bottom: ${Spacing.small};
    border-bottom: 1px solid ${Colors.gray};
  }

  .gatsby-image-wrapper {
    width: 16%;
    border-radius: 8%;
    margin-bottom: ${Spacing.small};

    @media (max-width: ${mobileWidth}) {
      margin-bottom: ${Spacing.xSmall};
    }
  }
`;

const AboutTitle = styled.h1`
  margin: 0;
  padding: 0 0 ${Spacing.xSmall};
  font-size: ${Sizes.large};
  color: ${Colors.nearBlack};
  font-weight: ${Weights.bold};

  @media (max-width: ${mobileWidth}) {
    font-size: ${Sizes.medium};
  }
`;

const AboutSubText = styled.p`
  font-family: ${useInter};
  margin: 0;
  padding: 0;
  font-size: ${Sizes.medium};
  color: ${Colors.gray};
  font-weight: ${Weights.subText};

  @media (max-width: ${mobileWidth}) {
    font-size: ${Sizes.standard};
  }

  span {
    color: ${Colors.nearBlack};
  }
`;

const Posts = styled.div`
  margin: 0 0 ${Spacing.medium};
`;

export const query = graphql`
  query {
    file(relativePath: {eq: "me.jpg"}) {
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
