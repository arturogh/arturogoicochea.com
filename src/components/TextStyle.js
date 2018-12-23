import React from 'react';
import styled from 'styled-components';
import {FontSize, Colors, Spacing} from '../utils';

export const TextStyle = ({children}) => {
  return <StyledContent>{children}</StyledContent>;
};

const StyledContent = styled.div`
  font-size: ${FontSize.S};
  color: ${Colors.Black.darkGray};
  margin-bottom: ${Spacing.Xxl};

  h2 {
    margin: ${Spacing.Xl} 0 ${Spacing.L};
    padding: 0;
  }

  h3 {
    margin: ${Spacing.L} 0 ${Spacing.S};
    padding: 0;
  }

  p {
    margin: 0 0 ${Spacing.L};
    padding: 0 0 ${Spacing.S};
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
    font-size: ${FontSize.Xxs};
    padding: ${Spacing.Xs} 0;
    font-family: 'Inter UI';
  }

  blockquote {
    color: ${Colors.Black.midGray};
    font-size: ${FontSize.Xs};
    line-height: 1.6;

    margin: ${Spacing.L} 0;

    border-left: ${Spacing.S} solid ${Colors.Black.moonGray};
    padding-left: ${Spacing.M};
    margin-left: ${Spacing.M};
  }
`;
