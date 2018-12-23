import styled from 'styled-components';
import {FontSize, Spacing, Colors} from './../utils';

export const CollectionItemTitle = styled.h3`
  font-size: ${FontSize.M};
  padding-bottom: ${Spacing.Xs};
  margin-bottom: 0;
  color: ${Colors.Black.darkGray};
  line-height: 1.4;

  &:hover {
    color: ${Colors.Blue.blue};
  }
`;
