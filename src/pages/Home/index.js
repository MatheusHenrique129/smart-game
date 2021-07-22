import {
  CardContainer,
  Container,
  Content,
  Footer,
  GameCard,
  Header,
  Logo,
} from "./styles";

import logo from "../../assets/smart_logo.png";
import { useEffect, useRef, useState } from "react";
import Alert from "../../components/Alert";
import Modal from "../../components/Modal";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";

function Game() {
  const [games, setGames] = useState([]);

  useEffect(() => {
   
  });

  return (
    <GameCard>
      <div>
        <img src={ logo} alt="Imagem do jogo" />
      </div>
      <section>
        <strong>God of war III</strong>
        <p>R$ 200,00</p>
        <button>Mais Detalhes</button>
      </section>
    </GameCard>
  );
}

function Home() {
  const [message, setMessage] = useState(undefined);

  const [reload, setReload] = useState(null);

  const [games, setGames] = useState([]);

  const [showGame, setShowGame] = useState(false);

  const cardRef = useRef();

  const loadGames = async (reload) => {
    const response = await api.get("/games");

    setGames(response.data);
  };

  const cardScrollObserver = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    if (scrollTop + clientHeight > scrollHeight - 100) loadGames();
  };

  return (
    <>
      <Alert
        message={{
          title: "Sucesso!",
          description: "Compra efetuada!!",
        }}
        handleClose={setMessage}
      />

      {showGame && (
        <Modal
          title={games.name}
          handleClose={() => setShowGame(false)}
        ></Modal>
      )}

      <Container>
        <Header>
          <Logo src={logo} />
        </Header>
        <Content>
          <CardContainer ref={cardRef} onScroll={cardScrollObserver}>
           
              <Game />

              <Game />

              <Game />

              <Game />

              <Game />

              <Game />

              <Game />

              <Game />
          
          </CardContainer>
        </Content>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default Home;
