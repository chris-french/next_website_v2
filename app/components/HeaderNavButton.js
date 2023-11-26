'use client'
import {styled} from 'styled-components';
import Link from 'next/link'

const StyledHeaderButton = styled.button`
  color: white;
  font-size: 1em;
  padding: 0.5em 1em;
  border: 1px solid #F77067;
  border-radius: .25em;
  line-height: 1.5em;
  background-image: linear-gradient(0deg, #F77067 0%, black 8%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // Added shadow for depth
  transition: all 0.3s ease; // Smooth transition for interaction

  &:hover, &:focus {
    background-image: linear-gradient(0deg, #DC4DC5 0%, black 20%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); // Slightly larger shadow on hover/focus
  }

  &:active {
    background-image: linear-gradient(0deg, #CC0000 0%, black 35%);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); // Smaller shadow to mimic pressing
  }

  @media (max-width: 724px) {
    font-size: .8em;
    padding: 1em 2em;
    line-height: 1em;
  }
`;


export const HeaderNavButton = ({label, link}) => {


    return (
        <Link href={link}>
            <StyledHeaderButton>
                {label}
            </StyledHeaderButton>
        </Link>
    )
}
