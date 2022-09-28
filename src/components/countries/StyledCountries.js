import styled from 'styled-components';

export const StyledCountries = styled.section`
  .countries__container {
    padding: 0 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr)); */
    /* display: flex; */
    /* flex-wrap: wrap; */
    gap: 3rem;

    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 37.5em) {
      grid-template-columns: 1fr;
    }
  }
`;
