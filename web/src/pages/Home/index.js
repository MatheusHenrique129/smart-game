import {
  CardContent,
  Container,
  Content,
  ContentModal,
  Description,
  Footer,
  FooterContent,
  FooterCopyright,
  FooterInfo,
  PoweredBy,
  GameInfo,
  Header,
  Logo,
  PlatformModal,
  PriceModal,
  StoreMap,
  StoresModal,
} from "./styles";

import logo from "../../assets/smart_logo.png";
import { useEffect, useRef, useState } from "react";
import Alert from "../../components/Alert";
import Modal from "../../components/Modal";
import { api } from "../../services/api";
import InputSearch from "../../components/InputSearch";
import GameCard from "../../components/GameCard";
import Loading from "../../components/Loading";
import QRCode from "qrcode";

function Home() {
  const [games, setGames] = useState([]);

  const [qrCode, setQrCode] = useState("");

  const [stores, setStores] = useState([]);

  const [gameModal, setGameModal] = useState([]);

  const [reload, setReload] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [openModalGame, setOpenModalGame] = useState(false);

  const [mapInModal, setMapInModal] = useState([]);

  const [modalMap, setModalMap] = useState(false);

  const [message, setMessage] = useState(false);

  const [search, setSearch] = useState("");

  const cardRef = useRef();

  const qrCodeGenerate = async (gameId) => {
    try {
      const response = await QRCode.toDataURL(`/games/${gameId}`);

      setQrCode(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuy = async () => {
    setOpenModalGame(false);

    setIsLoading(true);

    try {
      setIsLoading(false);
      setMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  const loadGames = async () => {
    const response = await api.get("/games");

    setGames(response.data);
  };

  const loadStores = async () => {
    const response = await api.get("/stores");

    setStores(response.data);
  };

  useEffect(() => {
    setIsLoading(true);

    loadGames();
    loadStores();

    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }, [reload]);

  const handleReload = () => {
    setIsLoading(false);
    setGames([]);
    setSearch("");
    setReload(Math.random());
  };

  const handleModalGame = async (id) => {
    setIsLoading(true);

    setTimeout(() => {
      setOpenModalGame(true);

      setIsLoading(false);
    }, 1000);

    const response = await api.get(`/games/${id}`);

    setGameModal(response.data);
  };

  const cardScrollObserver = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    if (scrollTop + clientHeight > scrollHeight - 100 && search.length < 2)
      loadGames();
  };

  const handleSearch = async (e) => {
    setSearch(e.target.value);

    if (e.target.value.length === 0) handleReload();

    if (e.target.value.length < 3) return;

    try {
      const response = await api.get("/search", {
        params: { search: e.target.value },
      });

      console.log(response);

      setGames(response.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const handleMaps = async (id) => {
    setOpenModalGame(false);

    setModalMap(true);

    try {
      const response = await api.get(`/stores/${id}`);

      setMapInModal(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      {message && (
        <Alert
          message={{
            title: "Sucesso!!",
            description: "Parabéns sua compra foi efetuada!!",
          }}
          handleClose={() => setMessage(false)}
        />
      )}
      {modalMap && (
        <Modal
          title={mapInModal.name}
          handleClose={() => {
            setModalMap(false);
            setOpenModalGame(true);
          }}
        >
          <StoreMap src={mapInModal.map_location} />
        </Modal>
      )}
      {openModalGame && (
        <Modal
          title={gameModal.name}
          handleClose={() => {
            setOpenModalGame(false);
          }}
        >
          <ContentModal>
            <img src={gameModal.image} alt="Imagem do Jogo" />
            <Description>
              <GameInfo>
                <h2>Descrição:</h2>
              </GameInfo>
              <p>{gameModal.description}</p>
            </Description>
            <StoresModal>
              {gameModal.Stores && (
                <>
                  <h4>Lojas Disponíveis:</h4>
                  {gameModal.Stores.map((s) => (
                    <GameInfo
                      onClick={() => {
                        handleMaps(s.id);
                      }}
                    >
                      - {s.name}
                    </GameInfo>
                  ))}
                </>
              )}
            </StoresModal>
            <PlatformModal>
              {gameModal.Platforms && (
                <>
                  <h4>Plataformas</h4>
                  {gameModal.Platforms.map((p) => (
                    <h3> {p.name}</h3>
                  ))}
                </>
              )}
            </PlatformModal>
            <PriceModal>
              <img src={qrCode} alt="QRCode do Desconto" />
              <button
                onClick={() => {
                  handleModalGame(gameModal.id);
                  qrCodeGenerate(gameModal.id);
                  handleBuy(gameModal.price, gameModal.id);
                }}
              >
                COMPRAR
              </button>
              <GameInfo>R$ {gameModal.price},00</GameInfo>
            </PriceModal>
          </ContentModal>
        </Modal>
      )}

      <Header>
        <Logo src={logo} onClick={() => handleReload} />
        <InputSearch handler={handleSearch} value={search} />
      </Header>

      <Container>
        <Content>
          <CardContent ref={cardRef} onScroll={cardScrollObserver}>
            {games.length === 0 && search.length >= 1 && (
              <b>Nenhum resultado encontrado :(</b>
            )}
            {games.map((g) => (
              <GameCard
                key={g.id}
                game={g}
                handleModalGame={handleModalGame}
                qrCodeGenerate={qrCodeGenerate}
              />
            ))}
          </CardContent>
        </Content>
      </Container>

      <Footer>
        <FooterContent>
          <FooterInfo>
            <PoweredBy>
              <p>Powered by</p>
              <h3>Smart Games</h3>
            </PoweredBy>
          </FooterInfo>
          <FooterInfo>
            <GameInfo>
              <h2>Nossas Lojas</h2>
            </GameInfo>
            {stores.map((s) => (
              <GameInfo>
                <h3>{s.name}</h3>
              </GameInfo>
            ))}
          </FooterInfo>
          <FooterInfo>
            <GameInfo>
              <h2>Telefones Para Contato</h2>
            </GameInfo>
            <GameInfo>
              <h3>(11) 94834-8483</h3>
            </GameInfo>
            <GameInfo>
              <h3>(11) 4002-8922</h3>
            </GameInfo>
          </FooterInfo>
        </FooterContent>

        <FooterCopyright>
          <p className="text-gray-400 text-xs font-bold opacity-75">
            &copy; 2024 Copyright Matheus Henrique Santos da Silva
          </p>
        </FooterCopyright>
      </Footer>
    </>
  );
}

export default Home;
