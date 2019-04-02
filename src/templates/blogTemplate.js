import React from 'react';
import styled from 'styled-components';
import {graphql, Link} from 'gatsby';
import {Wrapper} from '../components/';
import {ChevronLeft} from 'react-feather';
import {Colors, Spacing, mobileWidth, useInter, Sizes, Weights} from '../utils';

export default function Template({data}) {
  const {markdownRemark} = data;
  const {frontmatter, html} = markdownRemark;
  return (
    <Wrapper>
      <Post>
        <Header>
          <Back to="/">
            <ChevronLeft />
            All posts
          </Back>
          <Title>{frontmatter.title}</Title>
          <Meta>
            <span> by </span>
            <Date>{frontmatter.date}</Date>
            <Author to="/">Arturo Goicochea</Author>
          </Meta>
        </Header>
        <div className="blog-post-content" dangerouslySetInnerHTML={{__html: html}} />
      </Post>
    </Wrapper>
  );
}

const Post = styled.div`
  margin: ${Spacing.medium} 0 ${Spacing.large};

  @media (max-width: ${mobileWidth}) {
    margin: ${Spacing.small} 0 ${Spacing.medium};
  }
`;

const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${Colors.gray};
  transition: color 100ms, background-color 100ms;
  padding: ${Spacing.xSmall};
  border-radius: ${Spacing.xSmall};
  font-family: ${useInter};
  font-size: ${Sizes.small};
  background-color: ${Colors.lightGray};
  margin: ${Spacing.small} 0 ${Spacing.medium};

  @media (max-width: ${mobileWidth}) {
    margin: ${Spacing.xSmall} 0 ${Spacing.small};
  }

  &:hover {
    color: ${Colors.blue};
    background-color: ${Colors.lightBlue};
  }
`;

const Header = styled.div`
  margin: ${Spacing.small} 0 ${Spacing.medium};

  @media (max-width: ${mobileWidth}) {
    margin: ${Spacing.small} 0 ${Spacing.medium};
  }
`;

const Title = styled.h1`
  font-size: ${Sizes.large};
  font-weight: ${Weights.bold};
  margin: 0 0 ${Spacing.small};
  padding: 0;

  @media (max-width: ${mobileWidth}) {
    font-size: ${Sizes.medium};
    font-weight: ${Weights.semiBold};
  }
`;

const Date = styled.span`
  padding-right: ${Spacing.xSmall};
  color: ${Colors.gray};
`;

const Author = styled(Link)`
  display: inline;
  text-decoration: none;
  color: ${Colors.blue};
`;
const Meta = styled.div`
  font-family: ${useInter};
  font-size: ${Sizes.small};
`;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {path: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
