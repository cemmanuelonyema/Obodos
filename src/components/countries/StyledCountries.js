import styled from 'styled-components';

export const StyledCountries = styled.section`
  .countries__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
  }
`;
