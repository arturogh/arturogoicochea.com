import React from 'react';
import styled from 'styled-components';
import {ModScale, Colors, maxWidth, typeScale} from '../utils';

export const TextStyle = ({children}) => {
  return <StyledContent>{children}</StyledContent>;
};

const StyledContent = styled.div`
  /* font-size: ${typeScale.contentSize}; */
  color: ${Colors.Black.darkGray};
  /* margin-bottom: ${ModScale.Xxl}; */

  @media (max-width: ${maxWidth}) {
    /* font-size: 0.85rem; */
  }

  h2 {
    /* font-weight: 600; */
    /* font-size: ${typeScale.contentSize}; */
    /* margin: ${ModScale.MPlus} 0 ${ModScale.S}; */
    padding: 0;
    color: ${Colors.Black.darkGray};

    @media (max-width: ${maxWidth}) {
      /* font-weight: 600; */
    }
  }

  h3 {
    /* font-weight: 500;
    font-size: ${typeScale.contentSize}; */
    /* margin: ${ModScale.S} 0 ${ModScale.Xs}; */
    padding: 0;
    color: ${Colors.Black.midGray};

    @media (max-width: ${maxWidth}) {
      /* font-size: ${ModScale.S};
      font-weight: 500; */
    }
  }

  p {
    /* padding: 0 0 ${ModScale.S}; */
    margin: 0;
    /* font-weight: 300; */
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
    /* font-size: ${ModScale.Xs}; */
    /* padding: ${ModScale.Xs} 0; */
    font-family: 'Inter UI';
  }

  blockquote {
    /* font-size: ${typeScale.contentSize};
    line-height: 1.6; */

    @media (max-width: ${maxWidth}) {
      /* font-size: 0.85rem; */
    }

    /* margin: ${ModScale.Xs} 0 calc(${ModScale.Xs} + ${ModScale.Xs}); */

    border-left: 8px solid ${Colors.Black.moonGray};
    /* padding-left: ${ModScale.Xs};
    margin-left: ${ModScale.Xs}; */
  }
`;
