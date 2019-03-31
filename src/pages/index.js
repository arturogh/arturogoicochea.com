import React from 'react';
import styled from 'styled-components';
import {graphql, Link} from 'gatsby';
import {Wrapper, PostItem, PageTitle, PageSubText} from './../components';
import {ModScale, font, Colors} from '../utils';

const HomePage = ({data}) => {
  const {edges} = data.allMarkdownRemark;

  return (
    <Wrapper>
      <StyledHome>
        {/* About */}
        <AboutText>
          <Name>Arturo Goicochea</Name>
          <AboutSubText>
            <strong>Designer</strong> (
            <span role="img" aria-label="heart emoji">
              ❤️{' '}
            </span>
            code) at Microsoft Office prototyping team.
          </AboutSubText>
        </AboutText>
        {/* Posts */}
        <PageTitle>Posts:</PageTitle>

        <PageSubText>Thoughts on tech, teamwork, society and more</PageSubText>

        {edges.map(edge => (
          <PostItem
            link={edge.node.frontmatter.path}
            title={edge.node.frontmatter.title}
            excerpt={edge.node.frontmatter.excerpt}
            img={edge.node.frontmatter.hero.childImageSharp.fluid}
          />
        ))}
      </StyledHome>
    </Wrapper>
  );
};

const StyledHome = styled.div`
  font-family: 'inter ui', sans-serif;
  padding-top: 1px;
`;

const AboutText = styled.div`
  min-height: 12vh;
  line-height: 12vh;
  margin: ${ModScale.xLarge} 0;
  font-size: ${font.getFontData('homeText').size};
  font-weight: ${font.getFontData('homeText').weight};

  @media (max-width: 700px) {
    text-align: left;
    min-height: 0;
    max-width: 680px;
    margin: ${ModScale.large} 0;
    line-height: calc(${font.getFontData('homeText').size} * 2);
  }
`;

const Name = styled.h2`
  font-size: ${font.getFontData('siteTitle').size};
  font-weight: ${font.getFontData('siteTitle').weight};
  color: ${font.getFontData('siteTitle').color};
  margin: 0;
  padding: 0;
`;

const AboutSubText = styled.div`
  font-size: ${font.getFontData('siteSubText').size};
  font-weight: ${font.getFontData('siteSubText').weight};
  color: ${font.getFontData('siteSubText').color};
`;

const HomeLink = styled.div`
  margin-top: ${ModScale.standardPlus};
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
