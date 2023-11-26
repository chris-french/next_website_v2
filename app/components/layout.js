'use client'
import NavBar from "./navbar";
import { Footer } from "./footer";
import { Container } from "./Container";
import styled from "styled-components";

const ResponsiveDiv = styled.div`
  background-image: url(/bg_4.png);
  width: 100%;
  height: 85vh;
  padding: 2em 2em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1024px) { 
    padding-top: 4em; // Increase padding-top by 1em
  }

  @media (max-width: 724px) { 
    padding-top: 6em; // Increase padding-top by 1em
  }

  @media (max-width: 480px) {
    padding-top: 8em; // Increase padding-top by 2em
  }
`;

const mainStyle = {
    height: '100vh',
    width: '100vw'
}

const childenStyle = {
    height: '80vh',
    width: '80vw',
}

const Layout = ({children}) => (
    <main style={mainStyle} className="flex-col items-center justify-between items-center justify-between font-mono text-sm">
        <NavBar />
        <ResponsiveDiv>
            <Container>
                    {children}
            </Container>
        </ResponsiveDiv>
        <Footer />
    </main>
)

export default Layout;