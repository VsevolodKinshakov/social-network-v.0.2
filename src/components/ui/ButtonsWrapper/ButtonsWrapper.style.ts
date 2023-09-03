import styled from "styled-components";

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .buttons-wrapper {
    width: 100%;
    flex-direction: row;

    button {
      flex: 1 1 50%;
    }
  }
`;
