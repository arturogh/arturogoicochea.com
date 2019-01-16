import React from 'react';
import styled from 'styled-components';
import {ModScale, Colors, maxWidth} from '../utils';

export const TextStyle = ({children}) => {
  return <StyledContent>{children}</StyledContent>;
};

const StyledContent = styled.div`
  font-size: ${ModScale.S};
  color: ${Colors.Black.darkGray};
  margin-bottom: ${ModScale.Xxl};

  @media (max-width: ${maxWidth}) {
    font-size: 0.85rem;
  }

  h2 {
    margin: ${ModScale.MPlus} 0;
    padding: 0;
    @media (max-width: ${maxWidth}) {
      margin: ${ModScale.MPlus} 0 ${ModScale.M};
      font-size: ${ModScale.S};
      font-weight: 800;
    }
  }

  h3 {
    margin: ${ModScale.S} 0;
    padding: 0;

    @media (max-width: ${maxWidth}) {
      margin: ${ModScale.M} 0 ${ModScale.S};
      font-size: ${ModScale.S};
      font-weight: 500;
    }
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

    @media (max-width: ${maxWidth}) {
      font-size: 0.85rem;
    }

    margin: ${ModScale.Xs} 0 calc(${ModScale.Xs} + ${ModScale.Xs});

    border-left: 8px solid ${Colors.Black.moonGray};
    padding-left: ${ModScale.Xs};
    margin-left: ${ModScale.Xs};
  }
`;
