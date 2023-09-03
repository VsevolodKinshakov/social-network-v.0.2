import styled from "styled-components";

export const BioDataStyle = styled.div `
    padding-bottom: 30px;
    border-bottom: 1px solid var(--light-gray);
    margin-bottom: 30px;

    .icon {
      width: 24px;
      height: 24px;
    }

    .data__item {
      display: flex;
      align-items: center;
      gap: 8px;

      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  `