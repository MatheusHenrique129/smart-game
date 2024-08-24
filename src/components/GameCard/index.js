import { Container } from "./styles";

function GameCard({ game, handleModalGame, qrCodeGenerate }) {
  return (
    <Container>
      {game && (
        <>
          <div>
            <img src={game.image} alt={game.name} />
          </div>
          <section>
            <strong>{game.name}</strong>
            <p>A partir de</p>
            <span>R$: {game.price}</span>

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
