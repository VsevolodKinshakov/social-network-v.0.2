import React, { useState } from "react";
import { ModalContainer, ModalContent, CloseButton, Form, Label, Input, SubmitButton } from "./LinkButtonWithModal.style"

const LinkButtonWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Отправить e-mail:", email);
    closeModal();
  };

  return (
    <div>
      <a href="#" onClick={openModal}>
        Забыли пароль? 
      </a>

      <ModalContainer isOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <Form onSubmit={handleSubmit}>
            <Label>
              E-mail:
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Label>
            <SubmitButton type="submit">Отправить</SubmitButton>
          </Form>
        </ModalContent>
      </ModalContainer>
    </div>
  );
};

export default LinkButtonWithModal;
