import { ReactNode } from "react"
import styled from "styled-components";

type StyledWrapperProps = {

    children: ReactNode;
}

const StyledBox = styled.div`

    padding: 2rem;
    // box-shadow: 0px 0px 50px -10px green;
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background};
    li {list-style: none};
    
`

export const StyledWrapper = ({ children }: StyledWrapperProps) => {

    return (
        <StyledBox>
            {children}
        </StyledBox>
    )
}

type SyledButtonProps = {

    children: ReactNode;
    onClick?: () => void;
    type?: 'submit';
    disabled?: boolean;
}

const StyledButton2 = styled.button`

  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
  }`

export const StyledButton = ({children, onClick, type, disabled}: SyledButtonProps) => {

    return <StyledButton2 onClick={onClick} type={ type} disabled={disabled}>{ children}</StyledButton2>
};