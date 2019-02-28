import React from 'react';
import styled from 'styled-components';
import {graphql, Link} from 'gatsby';
import {Wrapper, PostItem, PageTitle, PageSubText} from './../components';
import {ModScale, maxWidth, font, Colors} from '../utils';

const HomePage = ({data}) => {
  const {edges} = data.allMarkdownRemark;

  return (
    <Wrapper>
      <StyledHome>
        {/* About */}
        <AboutText>
          <strong>Designer</strong> @ Microsoft Office prototyping team. Code is my friend{' '}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>
          ️.
        </AboutText>
        {/* Posts */}
        <PageTitle>Posts:</PageTitle>

        <PageSubText>Thoughts on tech, teamwork, society and more</PageSubText>

        {edges.map(edge => (
          <PostItem
            link={edge.node.frontmatter.Link}
            title={edge.node.frontmatter.title}
            excerpt={edge.node.frontmatter.excerpt}
            img={edge.node.frontmatter.hero.childImageSharp.fluid}
          />
        ))}
        <HomeLink>
          <Link to="/posts">See all posts</Link>
        </HomeLink>

        {/* Projects */}
        <PageTitle>Projects:</PageTitle>
        <PageSubText>Freebound explorations, for fun or to learn something new</PageSubText>
        <HomeLink>
          <Link to="/projects">See all projects</Link>
        </HomeLink>
      </StyledHome>
    </Wrapper>
  );
};

const StyledHome = styled.div`
  font-family: 'inter ui', sans-serif;
  padding-top: 1px;
`;

const AboutText = styled.div`
  min-height: 20vh;
  line-height: 20vh;
  margin: ${ModScale.xLarge} 0;
  font-size: ${font.getFontData('homeText').size};
  font-weight: ${font.getFontData('homeText').weight};

  @media (max-width: ${maxWidth}) {
    min-height: 0;
    margin: ${ModScale.large} 0;
    line-height: calc(${font.getFontData('homeText').size} * 2);
  }
`;

const HomeLink = styled.div`
  margin-top: ${ModScale.medium};
  a {
    text-decoration: none;
    font-family: 'Inter UI', sans-serif;
    font-size: ${font.getFontData('homeLink').size};
    font-weight: ${font.getFontData('homeLink').weight};
    color: ${Colors.Blue.blue};

    &:hover {
      color: ${Colors.Blue.darkBlue};
    }
  }
`;

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 2
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

export default HomePage;
