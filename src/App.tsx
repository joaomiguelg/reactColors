import { Card } from "./components/Card"
import { Container, GlobalStyle, MainContainer } from "./styles"




   
function App() {

  return (
    <>
    <GlobalStyle />

    <MainContainer>

    <Container>
        <Card colorName='verde' backgroundColor='green'/>
        <Card colorName='vermelho' backgroundColor='red'/>
        <Card colorName='azul' backgroundColor='blue'/>
        <Card colorName='amarelo' backgroundColor='yellow'/>
    </Container>

    </MainContainer>
    
    
    </>
  )

}

 


export default App
