import { useResponsive } from "../providers/ResponsiveProvider";
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  background: black;
  backdrop-filter: blur(10px);
  padding-bottom: 0.5rem;

  @media (min-width: 1024px) {
    position: static;
    height: auto;
    width: auto;
  }
`;

const FooterText = styled.span`
  font-size: ${props => props.isMobile ? '0.6rem' : props.isLargeScreen ? '1rem' : '0.8rem'};
  color: ${props => props.isMobile ? '#FD4401' : 'white'};
`;

const StyledLink = styled.a`
  color: #FD4401;
  margin-left: 0.5em; // Adjust the margin as needed
  text-decoration: underline;
`;

export const Footer = () => {
    const { width } = useResponsive();
    const isLargeScreen = width >= 1024;
    const isMobile = width <= 724;

    return (
        <FooterContainer>
            <FooterText isLargeScreen={isLargeScreen} isMobile={isMobile}>
                <p>
                Sometimes simple is better -- Website created with Next.js & styled-components --
                <StyledLink href="https://github.com/chris-french/next_website_v2">Website GitHub Repo</StyledLink>
                </p>
                 
            </FooterText>
        </FooterContainer>
    );
};
