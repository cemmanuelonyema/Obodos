import styled from 'styled-components';

export const StyledCountries = styled.section`
  .countries__container {
    padding: 0 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
  }
`;
