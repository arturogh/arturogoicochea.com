import styled from 'styled-components';
import {ModScale, Colors, maxWidth, typeScale} from './../utils';

export const CollectionItemTitle = styled.h3`
  font-size: ${typeScale.contentSize};
  font-weight: 800;
  padding-bottom: ${ModScale.Xxs};
  margin-bottom: 0;
  color: ${Colors.Blue.blue};
  line-height: 1.25;

  @media (max-width: ${maxWidth}) {
    padding-bottom: ${ModScale.Xs};
    font-size: ${typeScale.contentSize};
    font-weight: 700;
  }

  &:hover {
    color: ${Colors.Blue.blue};
  }
`;
