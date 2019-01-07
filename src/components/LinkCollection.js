import React from 'react';
import styled from 'styled-components';
import {ModScale, Colors} from '../utils';

export const LinkCollection = ({children}) => {
  return <StyledLinks>{children}</StyledLinks>;
};

const StyledLinks = styled.div`
  a {
    font-size: ${ModScale.S};
    color: ${Colors.Blue.blue};
    text-decoration: none;
    font-family: 'Inter UI', sans-serif;

    &:hover {
      color: ${Colors.Blue.darkBlue};
    }
  }
`;
