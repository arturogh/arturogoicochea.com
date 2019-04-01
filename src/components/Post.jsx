import React from 'react';
import styled from 'styled-components';
import {Sizes, Colors, Spacing, mobileWidth} from '../utils';
import {Link} from 'gatsby';

export const Post = props => {
  return (
    <StyledPost>
      <Title>
        <Link to={props.link}>{props.title}</Link>
      </Title>
      <Excerpt>{props.excerpt}</Excerpt>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  margin: 0 0 ${Spacing.medium};

  @media (max-width: ${mobileWidth}) {
    margin: 0 0 ${Spacing.small};
  }
`;

const Title = styled.h3`
  font-size: ${Sizes.standard};
  color: ${Colors.blue};
  padding: 0;
  margin: 0 0 ${Spacing.xSmall};

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Excerpt = styled.p`
  font-family: 'Inter var';
  font-size: ${Sizes.small};
  color: ${Colors.gray};
`;
