import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby';
import {Nav} from './Nav';

const TitleAndDescription = ({data}) => {
  const title = data.site.siteMetadata.title;

  return (
    <div>
      <Link to="/">
        <h2>{title}</h2>
      </Link>
      <Nav />
    </div>
  );
};

export const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  );
};
