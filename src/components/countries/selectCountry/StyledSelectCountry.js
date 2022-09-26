import styled from 'styled-components';

export const StyledSelectCountry = styled.article`
  font-size: 1.8rem;
  padding: 2rem 0;

  .selectCountry__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    align-items: center;

    @media screen and (max-width: 37.5em) {
      grid-template-columns: 1fr;
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

    @media screen and (max-width: 37.5em) {
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

  .border {
    display: flex;
    align-items: center;

    @media screen and (max-width: 37.5em) {
      flex-direction: column;
      align-items: stretch;
    }

    &-box {
      display: block;
      padding: 1rem;
      background-color: var(--element);
    }
  }
`;
