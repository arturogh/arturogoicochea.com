import React from 'react';
import styled from 'styled-components';
import {Colors, ModScale, maxWidth, font} from '../utils';
import {StyledLinks} from './Nav';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLinks>
        <li>
          <span>Find me on:</span>
        </li>
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
        Built with{' '}
        <a href="https://gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
          Gatsby
        </a>{' '}
        &{' '}
        <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">
          Styled Components.
        </a>{' '}
        Fonts:{' '}
        <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">
          Inter UI
        </a>
        ,{' '}
        <a href="https://github.com/skosch/Crimson" target="_blank" rel="noopener noreferrer">
          Crimson Text
        </a>
        .
      </CodedWith>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  margin: ${ModScale.xLarge} 0;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  /* padding: ${ModScale.S} 0 ${ModScale.Xl}; */

  @media (max-width: ${maxWidth}) {
    flex-direction: column;
    
  }
`;

const StyledFooterLinks = styled(StyledLinks)`
  display: flex;
  align-items: center;
  padding-bottom: ${ModScale.medium};

  @media (max-width: ${maxWidth}) {
    justify-content: center;
  }

  span {
    color: ${Colors.Black.gray};
    font-size: ${font.getFontData('footerLinks').size};
    font-weight: ${font.getFontData('footerLinks').weight};
  }

  li a {
    font-size: ${font.getFontData('footerLinks').size};
    font-weight: ${font.getFontData('footerLinks').weight};

    &:hover {
      color: ${Colors.Blue.darkBlue};
    }
  }
`;

const CodedWith = styled.span`
  display: block;
  text-align: center;
  font-family: 'Inter UI', sans-serif;
  font-size: ${font.getFontData('footerMadeWith').size};
  font-weight: ${font.getFontData('footerMadeWith').weight};
  color: ${Colors.Black.gray};

  a {
    color: ${Colors.Black.gray};
    text-decoration: none;

    &:hover {
      color: ${Colors.Blue.darkBlue};
    }
  }
`;
