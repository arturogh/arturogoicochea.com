import styled from 'styled-components';
import {Colors, maxWidth, font} from './../utils';

export const ListingExcerpt = styled.p`
  font-family: 'Inter UI', sans-serif;
  color: ${Colors.Black.darkGray};
  font-size: ${font.getFontData('listingExcerpt').size};
  font-weight: ${font.getFontData('listingExcerpt').weight};
  margin: 0;

  @media (max-width: ${maxWidth}) {
  }
`;
