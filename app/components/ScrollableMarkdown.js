'use client'
import styled from 'styled-components';

export const ScrollableMarkdown = styled.div`
  color: white;
  background-color: rgba(30, 30, 30, 0.85); // Dark gray with opacity
  border: 1px solid #F77067;
  box-shadow: inset 0 0 0 1px black;
  padding: 2em;
  text-align: left;
  overflow-y: auto;
  max-height: ${(props) => props.maxHeight || '80vh'}; // Use prop or default to 80vh
  margin: 1em 0; // Optional: Adds margin to the top and bottom

  // Styling for common HTML tags
  h1 {
    color: #F77067; // Example: Orange color for headers
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: 1.5em; // Larger font size for headers
  }

  h2 {
    color: #F77067; // Example: Orange color for headers
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: 1.2em; // Larger font size for headers
  }

  strong, em {
    color: #F77067; // Example: Orange color for headers
  }

  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    line-height: 1.4; // Improved line spacing
  }

  ul {
    list-style: none; // Remove default list styling
    padding-left: 1.5em; // Adjust padding as needed
  }

  li {
    margin-bottom: 0.3em;
  }

  a {
    color: #FD4401;
    text-decoration: underline;
  }
`;
