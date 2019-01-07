import React from 'react';
import styled from 'styled-components';
import {ModScale, Colors} from '../utils';

export const TextStyle = ({children}) => {
  return <StyledContent>{children}</StyledContent>;
};

const StyledContent = styled.div`
  font-size: ${ModScale.S};
  color: ${Colors.Black.darkGray};
  margin-bottom: ${ModScale.Xxl};

  h2 {
    margin: ${ModScale.S} 0 ${ModScale.S};
    padding: 0;
  }

  h3 {
    margin: ${ModScale.L} 0 ${ModScale.M};
    padding: 0;
  }

  p {
    padding: 0 0 ${ModScale.S};
    margin: 0;
  }

  a {
    color: ${Colors.Blue.blue};
    text-decoration: none;

    &:hover {
      color: ${Colors.Blue.darkBlue};
    }
  }

  figcaption {
    color: ${Colors.Black.midGray};
    font-size: ${ModScale.Xs};
    padding: ${ModScale.Xs} 0;
    font-family: 'Inter UI';
  }

  blockquote {
    color: ${Colors.Black.midGray};
    font-size: ${ModScale.S};
    line-height: 1.6;

    margin: ${ModScale.Xs} 0 calc(${ModScale.Xs} + ${ModScale.Xs});

    border-left: 8px solid ${Colors.Black.moonGray};
    padding-left: ${ModScale.Xs};
    margin-left: ${ModScale.Xs};
  }
`;
