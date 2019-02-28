import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {Colors, ModScale, maxWidth, font} from './../utils';

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
  margin: ${ModScale.standard} 0;

  a {
    color: ${Colors.Blue.blue};
    color: ${Colors.Black.midGray};
    text-decoration: none;
  }
`;

const SiteTitle = styled.h2`
  margin-bottom: 0;
  font-size: ${font.getFontData('siteTitle').size};
  font-weight: ${font.getFontData('siteTitle').weight};
  color: ${font.getFontData('siteTitle').color};

  &:hover {
    color: ${Colors.Black.nearBlack};
  }

  @media (max-width: ${maxWidth}) {
  }
`;

export const StyledLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  font-family: 'Inter UI';
  font-size: ${font.getFontData('nav').size};
  font-weight: ${font.getFontData('nav').weight};

  list-style: none;
  margin: 0;

  li {
    padding-left: ${ModScale.standard};
    margin-bottom: 0;

    @media (max-width: ${maxWidth}) {
      padding-left: ${ModScale.Xs};
    }

    &:first-of-type {
      padding-left: 0;
    }

    @media (max-width: ${maxWidth}) {
    }

    &:hover {
      color: ${Colors.Blue.blue};
    }
  }

  a {
    color: ${font.getFontData('nav').color};
    text-decoration: none;
  }
`;

export const navLinks = [
  {url: '/posts', text: 'Posts'},
  {url: '/projects', text: 'Projects'},
  {url: '/about', text: 'About'}
];
