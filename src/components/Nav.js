import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {Colors, ModScale, maxWidth} from './../utils';

export const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <SiteTitle>Arturo Goicochea</SiteTitle>
      </Link>
      {/* <StyledLinks>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.url} activeStyle={{color: Colors.Blue.blue}}>
              {link.text}
            </Link>
          </li>
        ))}
      </StyledLinks> */}
    </StyledNav>
  );
};

const titleColor = Colors.Black.midGray;
const titleHoverColor = Colors.Black.nearBlack;
const titleMobileColor = Colors.Black.darkGray;

const menuColor = Colors.Black.gray;
const menuHoverColor = Colors.Black.darkGray;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${ModScale.L} 0 ${ModScale.MPlus};

  @media (max-width: ${maxWidth}) {
    align-items: flex-start;
    margin: ${ModScale.M} 0 ${ModScale.MPlus};
  }

  /* a {
    color: ${Colors.Blue.Blue};
  } */

  /* h2,
  li {
    transition: color 100ms ease-in;
  }

  h2 {
    color: ${titleColor};

    @media (max-width: ${maxWidth}) {
      color: ${titleMobileColor};
    }
  }

  &:hover h2 {
    color: ${titleHoverColor};
  }

  li {
    color: ${menuColor};

    @media (max-width: ${maxWidth}) {
      color: ${titleMobileColor};
    }
  }

  &:hover li {
    color: ${menuHoverColor};
  } */

  a {
    color: ${Colors.Blue.blue};
    color: ${Colors.Black.midGray};
    text-decoration: none;
  }
`;

const SiteTitle = styled.h2`
  margin-bottom: 0;
  font-size: ${ModScale.S};
  font-weight: 400;
  color: inherit;

  &:hover {
    color: ${Colors.Black.nearBlack};
  }

  @media (max-width: ${maxWidth}) {
    font-size: ${ModScale.S};
  }
`;

export const StyledLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Inter UI';
  list-style: none;
  margin: 0;
  font-weight: 500;
  color: ${Colors.Black.midGray};
  font-size: ${ModScale.S};
  font-weight: 300;

  li {
    padding-left: ${ModScale.M};
    margin-bottom: 0;

    &:first-of-type {
      padding-left: 0;
    }

    @media (max-width: ${maxWidth}) {
      font-size: ${ModScale.Xxs};
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

export const navLinks = [
  // {url: '/', text: 'Hello'},
  {url: '/', text: 'Posts'},
  {url: '/about', text: 'About'}
];
