import React from 'react';
import styled from 'styled-components';
import {ModScale, maxWidth} from './../utils';

export const CollectionHeading = ({heading}) => {
  return <PostHeading>{heading}</PostHeading>;
};

const PostHeading = styled.h2`
  font-size: ${ModScale.L};
  margin: ${ModScale.L} 0 ${ModScale.Xl};

  @media (max-width: ${maxWidth}) {
    font-size: ${ModScale.M};
  }
`;
