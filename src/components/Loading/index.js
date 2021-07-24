import { Container } from "./styles";
import imgLogo from "../../assets/loading.png";

function Loading() {
  return (
    <Container>
      <img src={imgLogo} alt="Loading da Pagina" />
      Carregando...
    </Container>
  );
}

export default Loading;
