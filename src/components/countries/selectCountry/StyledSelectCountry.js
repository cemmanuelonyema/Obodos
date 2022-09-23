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
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .data {
    display: flex;
    justify-content: space-between;
    span {
      display: block;
    }
  }

  .borders {
    display: flex;
    align-items: center;
    span {
      display: block;
      margin: 1rem;
    }
  }
`;
