import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
}

export const ModalContainer = styled.div<ModalProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.elemsBgc};
  margin: 15% auto;
  width: 40%;
  max-width: 500px;
  padding: 40px;
  position: relative;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  margin: 5px 0;
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.primeColor};
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: inherit;
  border-radius: 10px;
  transition: background-color 200ms;

  &:hover {
    background-color: ${(props) => props.theme.colors.primeColor};
  }
`;
