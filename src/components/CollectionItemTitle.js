import styled from 'styled-components';
import {ModScale, Colors, maxWidth} from './../utils';

export const CollectionItemTitle = styled.h3`
  font-size: ${ModScale.M};
  font-weight: 800;
  padding-bottom: ${ModScale.Xs};
  margin-bottom: 0;
  color: ${Colors.Black.darkGray};
  line-height: 1;

  @media (max-width: ${maxWidth}) {
    font-size: ${ModScale.M};
  }

  &:hover {
    color: ${Colors.Blue.blue};
  }
`;
