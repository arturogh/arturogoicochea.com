import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import {Spacing, Colors} from '../utils';
import {navLinks, StyledLinks} from './Nav';

export const Footer = () => {
  return (
    <StyledFooter>
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
      <StyledLinks>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.url} activeStyle={{color: Colors.Blue.blue}}>
              {link.text}
            </Link>
          </li>
        ))}
      </StyledLinks>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Spacing.S} 0 ${Spacing.L};
`;

const CodedWith = styled.span`
  font-family: 'Inter UI', sans-serif;

  a {
    color: ${Colors.Blue.blue};
    text-decoration: none;

    &:hover {
      color: ${Colors.Blue.darkBlue};
    }
  }
`;
