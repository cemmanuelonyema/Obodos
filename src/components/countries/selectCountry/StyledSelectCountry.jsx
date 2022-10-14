import styled from 'styled-components';

export const StyledSelectCountry = styled.article`
  font-size: 1.8rem;
  padding: 2rem 0;

  .selectCountry__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    @media screen and (max-width: 37.5em) {
      grid-template-columns: 1fr;
    }
  }

  .details {
    /* flex: ; */
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h2 {
      margin-bottom: 2rem;
    }
    h4 {
      margin-bottom: 1rem;
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
      display: flex;
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
    width: 65%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    /* grid-template-rows:  */

    @media screen and (max-width: 37.5em) {
      flex-direction: column;
      align-items: stretch;
    }

    &-box {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: var(--element);
      box-shadow: 0 1px 6px 0 var(--shadow);
    }
  }
`;
