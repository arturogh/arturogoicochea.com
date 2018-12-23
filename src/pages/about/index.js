import React from 'react';
import {graphql} from 'gatsby';
import {Wrapper, LoadInWrapper} from './../../components';
import Img from 'gatsby-image';
import {TextStyle} from '../../components/TextStyle';
import {CollectionHeading} from './../../components';

const About = ({data}) => {
  return (
    <Wrapper>
      <CollectionHeading heading="About" />
      <LoadInWrapper>
        <TextStyle>
          <h1>Nice to meet you!</h1>
          <p>Peruvian designer working at Microsoft, living in Seattle, WA.</p>
          <p>
            <span role="img" aria-label="Love">
              ❤
            </span>
            ️ designing and then buliding it myself with code. I always strive to design from a deep
            understanding.
          </p>
          <p>Self-taught. Father of 2. Photographer. Introvert, thinker, ponderer.</p>
          <Img fluid={data.file.childImageSharp.fluid} />
          <p>
            My personal mission is to positively impact the world. I haven’t focused on an area yet
            (finance, education, etc), and am currently gaining and refining my skills. My role
            right now is pushing my coding skills (React + TypeScript). Previously, I was designing
            through prototyping with Framer. Enjoy big, complex problems. My future is open, and the
            present is an ongoing exploration.
          </p>
          <h3>Even more about me</h3>
          <ul>
            <li>Grew up in Lima, Peru.</li>
            <li>
              Went to school for industrial engineering, interned for marketing, sales, buying and
              HR. Also worked full Time as an HR analyst and a project manager.
            </li>
            <li>
              Switched to a full time role as a designer, researcher and project manager at
              Laboratoria when it still operated a web shop.
            </li>
            <li>Moved to Seattle, in 2015, where I worked at a startup and now at Microsoft.</li>
          </ul>
        </TextStyle>
      </LoadInWrapper>
    </Wrapper>
  );
};

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
