import { Container } from "./styles";
import NoImage from "../../assets/NoImageAvailable.jpg";

function GameCard({ game, handleModalGame, qrCodeGenerate }) {
  return (
    <Container>
      {game && (
        <>
          <div>
            <img src={game.image ? game.image : NoImage} alt={game.name} />
          </div>
          <section>
            <strong>{game.name}</strong>
            <p>A partir de</p>
            <span>R$ {game.price},00</span>

            <button
              onClick={() => {
                handleModalGame(game.id);
                qrCodeGenerate(game.id);
              }}
            >
              Comprar
            </button>
          </section>
        </>
      )}
    </Container>
  );
}

export default GameCard;
