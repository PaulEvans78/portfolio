import styled, { keyframes } from "styled-components";
import Video from "../assets/vikings.mp4";
import { RxCross1 } from "react-icons/rx";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  animation: ${fadeIn} 0.5s ease-out;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #171717;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 3rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 100;
`;

const VideoContainer = styled.div`
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledVideo = styled.video`
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
`;

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContent>
      
        <CloseButton onClick={onClose}><RxCross1 /></CloseButton>
        <VideoContainer>
          <StyledVideo controls autoPlay >
            <source src={Video} type="video/mp4" />
          </StyledVideo>
        </VideoContainer>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
