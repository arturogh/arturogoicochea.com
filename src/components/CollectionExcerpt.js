import styled from 'styled-components';
import {Colors, maxWidth, typeScale} from './../utils';

export const CollectionExcerpt = styled.p`
  font-size: ${typeScale.contentSize};
  font-family: 'Inter UI', sans-serif;
  line-height: 1.6;
  color: ${Colors.Black.darkGray};

  @media (max-width: ${maxWidth}) {
    font-size: ${typeScale.contentSize};
  }
`;
