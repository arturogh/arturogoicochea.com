import React from 'react';
import styled from 'styled-components';
import {ModScale, Colors, maxWidth, typeScale} from '../utils';

export const Title = ({title, type, tags}) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  /* margin-bottom: ${ModScale.M}; */

  @media (max-width: ${maxWidth}) {
    /* margin-bottom: ${ModScale.S}; */
  }
`;

const StyledTitle = styled.h1`
  /* font-size: ${typeScale.titleSize}; */
  /* font-weight: 800; */
  color: ${Colors.Black.nearBlack};
  /* margin-bottom: ${ModScale.M}; */
  /* line-height: 1.25; */

  @media (max-width: ${maxWidth}) {
    /* font-size: ${typeScale.titleSize}; */
  }
`;
