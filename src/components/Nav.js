import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {Colors, Spacing, FontSize, maxWidth} from './../utils';

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

const titleColor = Colors.Black.midGray;
const titleHoverColor = Colors.Black.nearBlack;

const menuColor = Colors.Black.gray;
const menuHoverColor = Colors.Black.darkGray;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Spacing.Xl} 0;

  @media (max-width: ${maxWidth}) {
    flex-direction: column;
    align-items: flex-start;
    padding: ${Spacing.M} 0 ${Spacing.L};
  }

  h2,
  li {
    transition: color 100ms ease-in;
  }

  h2 {
    color: ${titleColor};

    @media (max-width: ${maxWidth}) {
      color: ${titleHoverColor};
    }
  }

  &:hover h2 {
    color: ${titleHoverColor};
  }

  &:hover h2 + ul li:first-of-type {
    color: red;
  }

  li {
    color: ${menuColor};

    @media (max-width: ${maxWidth}) {
      color: ${menuHoverColor};
    }
  }

  &:hover li {
    color: ${menuHoverColor};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const SiteTitle = styled.h2`
  margin-bottom: 0;
  font-size: ${FontSize.S};
  font-weight: 800;

  @media (max-width: ${maxWidth}) {
    padding-bottom: ${Spacing.S};
  }
`;

const StyledLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Inter UI';
  list-style: none;
  margin: 0;
  font-weight: 500;
  color: ${Colors.Black.midGray};
  font-size: ${FontSize.Xs};

  li {
    padding-left: ${Spacing.M};
    margin-bottom: 0;

    @media (max-width: ${maxWidth}) {
      flex-basis: 50%;
      padding-left: 0;
      font-size: ${FontSize.Xxs};
    }

    &:hover {
      color: ${Colors.Blue.blue};
    }
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
