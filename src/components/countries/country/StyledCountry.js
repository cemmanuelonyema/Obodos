import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCountry = styled(Link)`
  .country {
    box-shadow: 0 2rem 5rem 1rem var(--shadow2);
    font-size: 1.6rem;
    border-radius: 0.7rem;
    background-color: var(--element);
    color: var(--text);
  }

  .country__data {
    padding: 2rem;
  }
  .country__img {
    height: 15rem;
  }

  .country__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
