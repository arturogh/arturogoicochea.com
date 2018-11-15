import React from 'react';
import {Link} from 'gatsby';

export const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Hello</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
};
