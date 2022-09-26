import styled from 'styled-components';

export const StyledForms = styled.section`
  .forms__container {
    padding: 0 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 37.5em) {
      flex-direction: column;
      padding: 2rem 3rem;
    }
  }
`;
