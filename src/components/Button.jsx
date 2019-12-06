import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: Capitalize;
font-size: 1.1rem;
background: transparent;
border: 0.1rem solid var(--lightBlue);
padding: 0.2rem;
color: var(--mainYellow);
transition: all 0.5s ease-in-out;
&:hover{
    background: var(--lightBlue);
    color: var(--mainBlue);
}
`