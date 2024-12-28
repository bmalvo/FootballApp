import { ReactNode } from "react"
import styled from "styled-components";

type LightTogglerWrapperProps = {

    children: ReactNode;
}

const StyledLight = styled.div`

// background-color: red;
position: fixed;
left: 0px;
top: 0px;
cursor: pointer;
`

export const LightTogglerWrapper = ({ children }: LightTogglerWrapperProps) => {

    return (
        <StyledLight>
            {children}
        </StyledLight>
    )
};