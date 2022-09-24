import styled from 'styled-components';

export const StyledForms = styled.section`
  .forms__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      padding: 2rem 3rem;
    }
  }
`;
