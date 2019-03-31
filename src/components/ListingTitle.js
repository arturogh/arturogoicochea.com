import styled from 'styled-components';
import {ModScale, Colors, maxWidth, font} from '../utils';

export const ListingTitle = styled.h3`
  display: block;
  margin-bottom: ${ModScale.xSmall};
  color: ${Colors.Blue.blue};
  font-size: ${font.getFontData('listingTitle').size};
  font-weight: ${font.getFontData('listingTitle').weight};

  @media (max-width: ${maxWidth}) {
  }

  &:hover {
    color: ${Colors.Blue.darkBlue};
  }
`;
