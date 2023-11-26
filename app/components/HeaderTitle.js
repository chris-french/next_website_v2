'use client'
import {styled} from 'styled-components';
import { useRouter } from 'next/navigation'

const HeaderTitleStyle = styled.h3`
  color: white;
  font-size: 1.2em;
  padding: 0.25em 1em;
  line-height: 1.8em;
  background-image: linear-gradient(0deg, #F77067 0%, black 8%);
  border-radius: .5em;
  cursor: pointer; // Change cursor on hover
  transition: all 0.3s ease; // Smooth transition
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover, &:focus {
    background-image: linear-gradient(0deg, #DC4DC5 0%, black 18%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-image: linear-gradient(0deg, #CC0000 0%, black 35%);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 724px) {
    font-size: 0.8em;
    padding: 1em 2em;
    line-height: 1em;
  }
`;


export const HeaderTitle = ({children}) => {
    const router = useRouter()
    const onClick = (e) => {
        e.preventDefault()
        router.push('/')
    }
    return (
        <a href={'/'} onClick={onClick}>
            <HeaderTitleStyle>
                {children}
            </HeaderTitleStyle>
        </a>
    )

}
