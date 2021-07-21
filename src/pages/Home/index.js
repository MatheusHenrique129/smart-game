import { CardContainer, Container, Content, GameCard, Header, Logo } from "./styles";

import logo from "../../assets/smart_logo.png";
import { useRef, useState } from "react";
import Alert from "../../components/Alert";
import Modal from "../../components/Modal";

function Game({ game }) {
    return (
        <GameCard>
            <div>
                <img src={game.Game.image || logo} 
                alt="Imagem do jogo"/>
            </div>
            <section>
                <strong>{game.name}</strong>
                <p>{game.price}</p>
                <button>Ver Mais</button>
            </section>

        </GameCard>
    )
}


function Home() {
    const [message, setMessage] = useState(undefined);

const [games, setGames] = useState([]);

const [showGame, setShowGame] = useState(false);

const cardRef = useRef()

    return (
        <>
        <Alert message={message} type="error" handleClose={setMessage} />
        { (
            <Modal
            title={games.name}
            handleClose={() => setShowGame(false)}>
            
            </Modal>
        )}
        
        <Container>
            <Header>
                <Logo src={logo} />
            </Header>
            <Content>
                <CardContainer ref={cardRef}>
                    {games.map((game) => (
                        <Game key={game.id}
                        game={game} />
                    ))}
                </CardContainer>

            </Content>
        </Container>
        </>
    )
}

export default Home;