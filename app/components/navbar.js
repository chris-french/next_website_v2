'use client'
import { useResponsive } from "../providers/ResponsiveProvider";
import styled from "styled-components";
import { HeaderNavButton } from "./HeaderNavButton";
import { HeaderTitle } from "./HeaderTitle";
import Divider from "./Divider";


const NavBarContainer = styled.div`
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: ${(props) => props.isLargeScreen ? '1em 8em' : '1rem 1rem'};
border-bottom: 1px solid #181818;
background: linear-gradient(to bottom, rgba(31, 31, 31, 0.8), rgba(24, 24, 24, 0.8));
backdrop-filter: blur(10px);

@media (min-width: 1024px) {
  position: static;
  width: auto;
  border-radius: 0.5rem;
  border: 1px solid #181818;
  background-color: rgba(24, 24, 24, 0.8);
}
`;

const NavBar = () => {
  const { width } = useResponsive();
  const isLargeScreen = width >= 1024;

  return (
    <NavBarContainer isLargeScreen={isLargeScreen}>
      <HeaderNavButton label={'About'} link={'/about'} />
      <Divider />
      <HeaderNavButton label={'Resume'} link={'/resume'} />
      <Divider />
      <HeaderTitle>{isLargeScreen ? 'Christopher French, PhD' : 'Chris French'}</HeaderTitle>
      <Divider />
      <HeaderNavButton label={'C.V.'} link={'/cv'} />
      <Divider />
      <HeaderNavButton label={'Education'} link={'/education'} />
    </NavBarContainer>
  );
};

export default NavBar;
