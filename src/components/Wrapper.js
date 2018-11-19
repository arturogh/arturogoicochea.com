import React from 'react';
import styled from 'styled-components';
import {Nav} from './Nav';
import {Spacing} from './../utils';

export const Wrapper = props => {
  return (
    <StyledWrapper>
      <Nav />
      {props.children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: ${Spacing.S};
`;
