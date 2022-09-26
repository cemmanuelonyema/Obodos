import styled from 'styled-components';

export const StyledHeader = styled.header`
  box-shadow: 0 1px 6px 0 var(--shadow);
  background-color: var(--element);
  color: var(--text);
  padding: 2rem 0;

  .header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      @media screen and (max-width: 37.5em) {
        font-size: 1.5rem;
      }
    }
  }

  .header__btn span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
