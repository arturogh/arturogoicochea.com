import React from 'react';
import styled from 'styled-components';
import {FontSize, Colors} from '../utils';

export const TextStyle = ({children}) => {
  return <StyledContent>{children}</StyledContent>;
};

const StyledContent = styled.div`
  font-size: ${FontSize.S};
  color: ${Colors.Black.darkGray};
`;
