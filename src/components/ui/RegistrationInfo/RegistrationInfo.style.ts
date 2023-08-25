import React from "react";
import styled from "styled-components";

const RegistrationContainer = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid var(--light-gray);
`;

const RegistrationText = styled.span`
  display: inline-block;
  font-size: 16px;
  margin-bottom: 40px;

  a {
    display: inline;
    color: var(--prime-color);
  }
`;

const RegistrationParagraph = styled.p`
  margin-bottom: 30px;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const RegistrationIcon = styled.a`
  flex: 0 0 58px;
  transition: 200ms;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
    transition: 100ms;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;



export { RegistrationContainer, RegistrationText, RegistrationParagraph, IconsWrapper, RegistrationIcon};