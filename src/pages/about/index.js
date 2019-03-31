import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import {Wrapper, TextStyle} from '../../components';
import Img from 'gatsby-image';
import {ModScale, font, maxWidth} from '../../utils';

const About = ({data}) => {
  return (
    <Wrapper>
      <StyledProfile>
        <Img fluid={data.file.childImageSharp.fluid} />
      </StyledProfile>
      <StyledAboutTitle>Hey, I'm Arturo</StyledAboutTitle>
      <TextStyle>
        <p>
          Peruvian{' '}
          <span role="img" aria-label="Peru flag emoji">
            🇵🇪
          </span>{' '}
          designer living in Seattle, currently at Microsoft in the Office prototyping team, working
          on the future (
          <span role="img" aria-label="shhh emoji">
            🤫
          </span>
          ).
        </p>
        <p>
          My favorite projects are complex, messy and challenging. What most motivates me is doing
          impactful, collaborative work that brings people forward or empowers them to achieve their
          goals and do good.
        </p>
        <p>
          My workflow centers on simultaneously thinking end to end through the interactions and
          system I'm working on. My tool of choice is code, specifically JS, HTML and CSS.
        </p>
      </TextStyle>
    </Wrapper>
  );
};

const StyledProfile = styled.div`
  width: 24%;
  margin: ${ModScale.large} 0 ${ModScale.xSmall};

  @media (max-width: ${maxWidth}) {
    width: 100%;
    margin: ${ModScale.large} 0 ${ModScale.standard};
  }

  img {
    border-radius: 4px;
  }
`;

const StyledAboutTitle = styled.h1`
  margin: ${ModScale.small} 0 ${ModScale.standard};
  font-size: ${font.getFontData('h1').size};
  font-weight: ${font.getFontData('h1').weight};
  color: ${font.getFontData('h1').color};

  @media (max-width: ${maxWidth}) {
    font-size: ${font.getFontData('h1Mobile').size};
    font-weight: ${font.getFontData('h1Mobile').weight};
  }
`;

export default About;

export const query = graphql`
  query {
    file(relativePath: {eq: "about.jpg"}) {
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
`;
