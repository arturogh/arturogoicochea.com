import styled from 'styled-components';
import {Colors, maxWidth, typeScale} from './../utils';

export const ListingExcerpt = styled.p`
  /* font-size: ${typeScale.excerptSize}; */
  font-family: 'Inter UI', sans-serif;
  /* line-height: 1.6; */
  color: ${Colors.Black.darkGray};

  @media (max-width: ${maxWidth}) {
    /* font-size: ${typeScale.excerptSize}; */
  }
`;
