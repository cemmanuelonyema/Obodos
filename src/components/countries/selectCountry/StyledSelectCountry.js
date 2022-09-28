import styled from 'styled-components';

export const StyledSelectCountry = styled.article`
  font-size: 1.8rem;
  padding: 2rem 0;

  .selectCountry__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* align-items: center; */
    gap: 3rem;
    /* display: flex; */

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
    display: flex;
    align-items: center;
    gap: 2rem;

    /* display: grid; */
    /* grid-template-columns: repeat(3, 1fr); */

    @media screen and (max-width: 37.5em) {
      flex-direction: column;
      align-items: stretch;
    }

    &-box {
      display: block;
      padding: 1rem 2rem;
      background-color: var(--element);
      /* border: 1px solid black; */
      box-shadow: 0 1px 6px 0 var(--shadow);
    }
  }
`;
