import styled from "styled-components";

export const FriendsListStyle = styled.div `
  background-color: var(--elems-bgc);
  padding: calc(1vw + 11px);
  border-radius: 20px;
  margin-bottom: 20px;

  .Friends__title {
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: var(--prime-color);
      font-weight: 400;
    }
  }
`


export const FriendsWrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-auto-rows: auto;
    gap: 20px;
`