import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby';

const TitleAndDescription = ({data}) => {
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;

  return (
    <div>
      <Link to="/">
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>
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
