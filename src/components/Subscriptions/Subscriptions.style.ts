import styled from 'styled-components'

export const SubStyle = styled.nav`
  .List {
    box-shadow: 0 0 10px var(--light-gray);
    background-color: var(--elems-bgc);
    border-radius: 20px;
    padding: calc(1vw + 11px);

    &__title {
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .UserElem {
    cursor: pointer;
    position: relative;
    list-style: none;

    display: flex;
    align-items: center;
    gap: 15px;

    padding: 15px;
    border-radius: 15px;

    transition: 200ms;

    &:hover {
      background-color: var(--light-gray);
    }

    &:active {
      transition: 100ms;
      background-color: var(--prime-color);
      p {
        color: white;
      }

      .Badge {
        background-color: white;
        color: var(--text-color);
      }
    }

    &:not(:last-child) {
      margin-bottom: 15px;

      &::after {
        content: '';
        height: 1px;
        width: 80%;
        background-color: var(--light-gray);

        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    img {
      flex: 0 0 60px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      object-fit: cover;
      // height: calc(1.9vw + 23px); //? 30 - 375 | 60 - 1920
    }

    .user__description {
      flex: 1 1 auto;

      .main__text {
        margin-bottom: 5px;
        display: inline-block;
      }
    }

    .secondary__text {
      font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
      font-weight: 300;

      &._online {
        color: var(--green);
      }
    }
  }
`
