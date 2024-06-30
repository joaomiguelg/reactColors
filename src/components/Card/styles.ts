import styled from "styled-components";

export type Props = {
    backgroundColor: string,
    colorName?: string
}

export const Card = styled.div<Props>`

padding: 32px;
border: 1px solid ;
border-radius: 8px;

&:hover {
    background-color: ${props => props.backgroundColor};
}



;

`

