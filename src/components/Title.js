import React from 'react';
import styled from 'styled-components';
// import {Tags} from './../components';
import {ModScale, Colors, maxWidth} from '../utils';

export const Title = ({title, type, tags}) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      {/* No tags for now */}
      {/* <Tags type={type} tags={tags} /> */}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-bottom: ${ModScale.M};

  @media (max-width: ${maxWidth}) {
    margin-bottom: ${ModScale.S};
  }
`;

const StyledTitle = styled.h1`
  font-size: ${ModScale.MPlus};
  font-weight: 800;
  color: ${Colors.Black.nearBlack};
  margin-bottom: ${ModScale.M};

  @media (max-width: ${maxWidth}) {
    font-size: calc(${ModScale.S} + ${ModScale.Xs});
  }
`;
