import React from 'react';
import styled from 'styled-components';
import {Colors, maxWidth, font, ModScale} from '../utils';

export const TextStyle = ({children}) => {
  return <StyledContent>{children}</StyledContent>;
};

const StyledContent = styled.div`
  color: ${Colors.Black.darkGray};

  @media (max-width: ${maxWidth}) {
  }

  h2 {
    padding: 0;
    font-size: ${font.getFontData('h2').size};
    font-weight: ${font.getFontData('h2').weight};
    margin: ${ModScale.medium} 0 ${ModScale.standardPlus};
    color: ${Colors.Black.darkGray};

    @media (max-width: ${maxWidth}) {
    }
  }

  h3 {
    font-size: ${font.getFontData('h3').size};
    font-weight: ${font.getFontData('h3').weight};
    padding: 0;
    margin: ${ModScale.standardPlus} 0 ${ModScale.standard};
    color: ${Colors.Black.midGray};

    @media (max-width: ${maxWidth}) {
    }
  }

  p {
    font-size: ${font.getFontData('p').size};
    font-weight: ${font.getFontData('p').weight};
    color: ${font.getFontData('p').color};
    margin-bottom: ${ModScale.standard};
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
    font-family: 'Inter UI';
  }

  blockquote {
    @media (max-width: ${maxWidth}) {
    }

    border-left: 8px solid ${Colors.Black.moonGray};
  }
`;
