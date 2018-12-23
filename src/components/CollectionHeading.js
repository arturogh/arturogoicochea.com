import React from 'react';
import styled from 'styled-components';
import {Spacing, FontSize} from './../utils';

export const CollectionHeading = ({heading}) => {
  return <PostHeading>{heading}</PostHeading>;
};

const PostHeading = styled.h2`
  font-size: ${FontSize.Xxl};
  margin: ${Spacing.L} 0 ${Spacing.Xl};
`;
