import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {ListingExcerpt} from './ListingExcerpt';
import {ListingTitle} from './ListingTitle';
import {Colors, ModScale, maxWidth} from '../utils';
import Img from 'gatsby-image';

export const PostItem = ({title, excerpt, link, img}) => {
  return (
    <StyledPost>
      <Img fluid={img} />
      <TextWrapper>
        <Link to={link}>
          <ListingTitle>{title}</ListingTitle>
        </Link>
        <ListingExcerpt>{excerpt}</ListingExcerpt>
      </TextWrapper>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  display: flex;
  margin: ${ModScale.standard} 0;

  @media (max-width: ${maxWidth}) {
    display: block;
  }

  img {
    border-radius: 4px;
  }

  &&& .gatsby-image-wrapper {
    flex: 0 0 120px;
    margin-right: 12px;

    @media (max-width: ${maxWidth}) {
      margin-bottom: ${ModScale.small};
    }
  }
  a h3,
  a {
    text-decoration: none;

    &:hover {
      color: ${Colors.Blue.darkBlue};
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
