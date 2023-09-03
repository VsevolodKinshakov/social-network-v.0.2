import styled from "styled-components";

export const ParameterStyle = styled.div `
  .user__info {
    display: inline-flex;
    align-items: center;

    gap: calc(3.8vw - 34px); //? 40 - 1920 | 20 - 1400
    border-top: 1px solid var(--light-gray);
    padding-top: 20px;

    .parameter {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      border-radius: 12px;
      padding: 10px;
      transition: 200ms;

      &:hover {
        background-color: var(--light-gray);
      }

      .value {
        color: var(--gray);
      }
    }
  }

  .user__name {
    margin-bottom: 15px;
  }

`