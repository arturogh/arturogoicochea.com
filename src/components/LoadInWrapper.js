import {Spacing} from '../utils';
import styled, {keyframes} from 'styled-components';

const loadIn = keyframes`
  0% {
    opacity: 0;
    margin-top: -${Spacing.S};
  }
  100% {
    opacity: 1
    margin-top: 0;
  }
`;

export const LoadInWrapper = styled.div`
  animation: ${loadIn} 0.3s ease-in;
`;
