import React from 'react';
import styled from 'styled-components';
import {Nav} from './Nav';
import {Spacing, FontSize, maxWidth} from './../utils';
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
  max-width: 680px;
  margin: 0 auto;
  padding: ${Spacing.S};

  > div img {
    display: block;
    border-radius: ${FontSize.Xxxs};
    margin-bottom: ${Spacing.S};
  }

  > .gatsby-image-wrapper,
  div > .gatsby-image-wrapper {
    margin-bottom: ${Spacing.L};

    @media (max-width: ${maxWidth}) {
      margin-bottom: ${Spacing.M};
    }
  }
`;
