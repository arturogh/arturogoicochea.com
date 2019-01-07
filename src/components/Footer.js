import React from 'react';
import styled from 'styled-components';
import {Colors, ModScale, maxWidth} from '../utils';
import {StyledLinks} from './Nav';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLinks>
        <li>
          <a href="https://twitter.com/arturogoicochea" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/arturogoicochea/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="http://github.com/arturogh/" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
      </StyledFooterLinks>

      <CodedWith>
        Coded with{' '}
        <a href="https://gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
          Gatsby
        </a>{' '}
        +{' '}
        <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">
          Styled Components
        </a>
      </CodedWith>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${ModScale.S} 0 ${ModScale.Xl};

  @media (max-width: ${maxWidth}) {
    flex-direction: column;
  }
`;

const StyledFooterLinks = styled(StyledLinks)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${maxWidth}) {
    padding-bottom: ${ModScale.M};
  }

  li a {
    font-size: ${ModScale.S};
    font-weight: 400;

    &:hover {
      color: ${Colors.Blue.darkBlue};
    }
  }
`;

const CodedWith = styled.span`
  text-align: center;
  font-family: 'Inter UI', sans-serif;

  a {
    color: ${Colors.Blue.blue};
    text-decoration: none;

    &:hover {
      color: ${Colors.Blue.darkBlue};
    }
  }
`;
