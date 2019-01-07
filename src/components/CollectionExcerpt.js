import styled from 'styled-components';
import {ModScale, Colors, maxWidth} from './../utils';

export const CollectionExcerpt = styled.p`
  font-size: ${ModScale.M};
  font-family: 'Inter UI', sans-serif;
  line-height: 1.6;
  color: ${Colors.Black.nearBlack};

  @media (max-width: ${maxWidth}) {
    font-size: ${ModScale.S};
  }
`;
