import styled from 'styled-components';

export const StyledSelectCountry = styled.article`
  font-size: 1.8rem;
  border: 1px solid black;
  padding: 2rem 0;

  .selectCountry__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    align-items: center;

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h2 {
      margin-bottom: 2rem;
    }
  }

  .data {
    display: flex;
    justify-content: space-between;
    gap: 3rem;

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }

    &__row {
      margin: 5px 0;
    }

    &__name {
      font-weight: bold;
      margin-right: 5px;
    }

    &__item {
      color: var(--neutralText);
    }

    span {
      display: block;
    }
  }

  .borders {
    display: flex;
    align-items: center;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: stretch;
    }

    .border {
      &-box {
      }
    }

    span {
      display: block;
      margin: 1rem;
    }
  }
`;
