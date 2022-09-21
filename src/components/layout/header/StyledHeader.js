import styled from 'styled-components';

export const StyledHeader = styled.header`
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  padding: 2rem 0;

  .header__container {
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
  }

  .header__btn {
    cursor: pointer;
    padding: 1rem;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }

  .header__btn span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
