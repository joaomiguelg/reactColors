import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

box-sizing: border-box;
margin: 0;


`

export const Container = styled.div`

margin: 0 auto;
display: flex;
gap: 32px;

`

export const MainContainer = styled.main`

width: 100vw;
height: 100vh;

display: flex;
align-items: center;

`