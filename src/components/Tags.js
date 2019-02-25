import React from 'react';
import styled from 'styled-components';
import {Colors, ModScale} from '../utils';

export const Tags = ({tags, type}) => {
  return (
    <StyledTags>
      <Tag tag={type} key={0} />
      {tags.map((tag, index) => (
        <Tag tag={tag} key={index + 1} />
      ))}
    </StyledTags>
  );
};

const StyledTags = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  li:first-of-type {
    /* font-weight: 600; */
    color: ${Colors.Black.midGray};
  }

  li:first-of-type:after {
    content: ' / ';
  }

  li:nth-of-type(1n + 2) {
    color: ${Colors.Blue.blue};
    text-transform: capitalize;
  }
`;

const Tag = ({tag}) => {
  return <StyledTag>{tag}</StyledTag>;
};

const StyledTag = styled.li`
  padding-right: ${ModScale.Xs};
  /* font-size: ${ModScale.Xxs}; */
  font-family: 'Inter UI', sans-serif;
`;
