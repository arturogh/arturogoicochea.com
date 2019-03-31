import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {ListingExcerpt} from './ListingExcerpt';
import {ListingTitle} from './ListingTitle';
import {Colors, ModScale, maxWidth} from '../utils';
import Img from 'gatsby-image';

export const ProjectItem = ({title, excerpt, link, img}) => {
  return (
    <StyledProject>
      <ImgWrapper>
        <Link to={link}>
          <Img fluid={img} />
        </Link>
      </ImgWrapper>
      <Link to={link}>
        <ListingTitle>{title}</ListingTitle>
        <ListingExcerpt>{excerpt}</ListingExcerpt>
      </Link>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: flex;
  margin-bottom: ${ModScale.standard};

  a h3,
  a {
    text-decoration: none;

    &:hover {
      color: ${Colors.Blue.darkBlue};
    }
  }

  @media (max-width: ${maxWidth}) {
    display: block;
    margin-bottom: ${ModScale.standardPlus};
  }
`;

const ImgWrapper = styled.div`
  width: 50%;
  margin-right: ${ModScale.small};

  @media (max-width: ${maxWidth}) {
    width: 100%;
    margin-right: 0;
    margin-bottom: ${ModScale.small};
  }
`;
