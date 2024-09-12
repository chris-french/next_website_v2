'use client'
import styled from 'styled-components';

export const ScrollableMarkdown = styled.div`
  color: white;
  background-color: rgba(30, 30, 30, 0.9);
  border: 1px solid #F77067;
  box-shadow: inset 0 0 0 1px black;
  padding: 2em;
  text-align: left;
  overflow-y: auto;
  max-height: ${(props) => props.maxHeight || '80vh'};
  margin: 1em 0;

  // Styling for common HTML tags
  h1 {
    color: #F77067;
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: 1.5em;
  }

  h2 {
    color: #F77067;
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: 1.2em;
  }

  strong, em {
    color: #F77067;
  }

  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    line-height: 1.4;
  }

  h3 {
    color: #DC4DC5;
    font-weight: 700;
  }

  ul {
    list-style: none;
    padding-left: 1.5em;
  }

  li {
    margin-bottom: 0.3em;
  }

  a {
    color: #FD4401;
    text-decoration: underline;
  }
`;
