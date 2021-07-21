import "./styles";
import { Overlay, ModalContainer } from "./styles";

function Modal({ title, children, handleClose }) {
  return (
    <Overlay>
      <ModalContainer>
        <span onClick={handleClose}>&times;</span>
        <header>{title}</header>
        <img src={children}/>
        {children}
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;