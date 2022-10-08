import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCountry = styled(Link)`
  .country {
    box-shadow: 0 2rem 5rem 1rem var(--shadow2);
    font-size: 1.6rem;
    border-radius: 0.7rem;
    background-color: var(--element);
    color: var(--text);
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  .country__data {
    padding: 2rem;

    h2 {
      margin-bottom: 2rem;
    }

    &_row {
      margin: 5px 0;
    }

    &_name {
      font-weight: bold;
      margin-right: 5px;
    }

    &_item {
      color: var(--neutralText);
    }
  }

  .country__img {
    height: 15rem;
  }
`;
