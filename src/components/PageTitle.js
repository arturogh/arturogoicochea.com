import styled from 'styled-components';
import {ModScale, font, maxWidth} from '../utils';

export const PageTitle = styled.h2`
  font-size: ${font.getFontData('homeTitle').size};
  font-weight: ${font.getFontData('homeTitle').weight};
  color: ${font.getFontData('homeTitle').color};
  margin: ${ModScale.large} 0 ${ModScale.xSmall};
`;
