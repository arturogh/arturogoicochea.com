import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import {Wrapper, LoadInWrapper} from '../../components';
import Img from 'gatsby-image';
import {TextStyle} from '../../components/TextStyle';
import {ModScale} from './../../utils';

const About = ({data}) => {
  return (
    <Wrapper>
      <StyledProfile>
        <Img fluid={data.file.childImageSharp.fluid} />
      </StyledProfile>
      <StyledAboutTitle>Hey, I'm Arturo</StyledAboutTitle>
      <LoadInWrapper>
        <TextStyle>
          <p>
            Peruvian designer currently at Microsoft, prototyping the future of Office. In previous
            design roles I worked on file creation, saving and collaboration, as well as an
            unreleased mobile app.
          </p>
          <p>
            Design is how I put together my love for learning with impacting the world positively.
            In fact, I'm a self taught designer and coder, focused right now on leveling up
            JavaScript and React. Am a strong advocate for prototyping from the start of a project,
            even designing primarily with prototyping tools.
          </p>
          <h3>Even more about me:</h3>
          <ul>
            <li>Grew up in Lima, Peru, where I lived until 2015 when I moved to Seattle.</li>
            <li>
              Went to school for industrial engineering, interned in marketing, sales, buying and
              HR, worked full Time as an HR analyst and a project manager.
            </li>
            <li>
              Switched to a full time role as a designer, researcher and project manager at{' '}
              <a href="https://laboratoria.la" target="_blank" rel="noopener noreferrer">
                Laboratoria
              </a>{' '}
              in January 2015, when it still operated a web shop.
            </li>
          </ul>
        </TextStyle>
      </LoadInWrapper>
    </Wrapper>
  );
};

const StyledProfile = styled.div`
  width: 40%;
`;

const StyledAboutTitle = styled.h2`
  font-size: ${ModScale.Xl};
  margin: ${ModScale.Xl} 0 ${ModScale.L};
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
