import React from 'react';
import styled from 'styled-components';
import {Spacing, mobileWidth} from './../utils';

export const Wrapper = props => {
  return (
    <StyledWrapper>
      {/* <Nav /> */}
      {props.children}
      {/* <Footer /> */}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 ${Spacing.small};

  @media (max-width: ${mobileWidth}) {
    padding: 0 ${Spacing.xSmall};
  }

  /* Font imports */
  @import url('https://rsms.me/inter/inter.css');
  html {
    font-family: 'Inter', sans-serif;
  }
  @supports (font-variation-settings: normal) {
    html {
      font-family: 'Inter var', sans-serif;
    }
  }
`;
