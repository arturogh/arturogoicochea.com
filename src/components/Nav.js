import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {Colors, Spacing, FontSize} from './../utils';

export const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <SiteTitle>Arturo</SiteTitle>
      </Link>
      <StyledLinks>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.url} activeStyle={{color: Colors.Blue.blue}}>
              {link.text}
            </Link>
          </li>
        ))}
      </StyledLinks>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Spacing.L} 0;
  margin-bottom: ${Spacing.M};

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const SiteTitle = styled.h2`
  color: ${Colors.Black.nearBlack};
  margin-bottom: 0;
  font-size: ${FontSize.S};
  font-weight: 800;
`;

const StyledLinks = styled.ul`
  display: flex;
  font-family: 'Inter UI';
  list-style: none;
  margin: 0;
  font-weight: 500;
  color: ${Colors.Black.midGray};
  font-size: ${FontSize.Xs};

  li {
    padding-left: ${Spacing.M};
    margin-bottom: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const navLinks = [
  {url: '/', text: 'Hello'},
  {url: '/projects', text: 'Projects'},
  {url: '/posts', text: 'Posts'},
  {url: '/about', text: 'About'}
];
