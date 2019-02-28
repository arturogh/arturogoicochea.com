import React from 'react';
import styled from 'styled-components';
import {font, maxWidth, ModScale} from '../utils';

export const Title = ({children, title, type, tags}) => {
  return (
    <StyledContainer>
      <StyledTitle>{children}</StyledTitle>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-bottom: ${ModScale.standardPlus};
  @media (max-width: ${maxWidth}) {
  }
`;

const StyledTitle = styled.h1`
  font-size: ${font.getFontData('h1').size};
  font-weight: ${font.getFontData('h1').weight};
  color: ${font.getFontData('h1').color};

  @media (max-width: ${maxWidth}) {
  }
`;
