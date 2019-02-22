import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {Colors, ModScale, maxWidth, typeScale} from './../utils';

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
const titleMobileColor = Colors.Black.darkGray;

const menuColor = Colors.Black.gray;
const menuHoverColor = Colors.Black.darkGray;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${ModScale.L} 0 ${ModScale.Xl};

  @media (max-width: ${maxWidth}) {
    align-items: center;
    margin: ${ModScale.M} 0 ${ModScale.L};
  }

  a {
    color: ${Colors.Blue.blue};
    color: ${Colors.Black.midGray};
    text-decoration: none;
  }
`;

const SiteTitle = styled.h2`
  margin-bottom: 0;
  font-size: ${typeScale.navSize};
  font-weight: 600;
  color: inherit;

  &:hover {
    color: ${Colors.Black.nearBlack};
  }

  @media (max-width: ${maxWidth}) {
    font-size: ${ModScale.S};
    font-size: ${typeScale.navSize};
  }
`;

export const StyledLinks = styled.ul`
  display: flex;
  justify-content: flex-end
  flex-wrap: wrap;
  font-family: 'Inter UI';
  list-style: none;
  margin: 0;
  font-weight: 500;
  color: ${Colors.Black.midGray};
  font-size: ${typeScale.navSize};
  font-weight: 300;

  li {
    padding-left: ${ModScale.S};
    margin-bottom: 0;
    
    @media (max-width: ${maxWidth}) {
    padding-left: ${ModScale.Xs};
  }

    &:first-of-type {
      padding-left: 0;
    }

    @media (max-width: ${maxWidth}) {
      font-size: ${typeScale.navSize};
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
  {url: '/posts', text: 'Posts'},
  {url: '/projects', text: 'Projects'},
  {url: '/about', text: 'About'}
];
