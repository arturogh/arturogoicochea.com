import React from 'react';
import styled from 'styled-components';
import {Tags} from './../components';
import {FontSize, Colors, maxWidth, Spacing} from '../utils';

export const Title = ({title, type, tags}) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <Tags type={type} tags={tags} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-bottom: ${Spacing.L};

  @media (max-width: ${maxWidth}) {
    margin-bottom: ${Spacing.S};
  }
`;

const StyledTitle = styled.h1`
  font-size: ${FontSize.Xl};
  color: ${Colors.Black.nearBlack};
  margin-bottom: ${Spacing.S};

  @media (max-width: ${maxWidth}) {
    font-size: ${FontSize.M};
  }
`;
