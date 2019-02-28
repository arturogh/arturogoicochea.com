import styled from 'styled-components';
import {ModScale, font} from '../utils';

export const PageSubText = styled.div`
  font-family: 'Inter UI', sans-serif;
  font-size: ${font.getFontData('homeTitleText').size};
  font-weight: ${font.getFontData('homeTitleText').weight};
  color: ${font.getFontData('homeTitleText').color};
  margin-bottom: ${ModScale.standardPlus};
`;
