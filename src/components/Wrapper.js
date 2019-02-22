import React from 'react';
import styled from 'styled-components';
import {Nav} from './Nav';
import {ModScale, maxWidth} from './../utils';
import {Footer} from './Footer';

export const Wrapper = props => {
  return (
    <StyledWrapper>
      <Nav />
      {props.children}
      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  max-width: calc(700px + 2rem);
  margin: 0 auto;
  padding: ${ModScale.S} ${ModScale.Xs};

  @media (max-width: ${maxWidth}) {
    padding: ${ModScale.S};
  }

  > div img {
    display: block;
    border-radius: ${ModScale.Xs};
    margin-bottom: ${ModScale.S};
  }

  > .gatsby-image-wrapper,
  div > .gatsby-image-wrapper {
    margin-bottom: ${ModScale.M};

    @media (max-width: ${maxWidth}) {
      margin-bottom: ${ModScale.M};
    }
  }
`;
