import styled from 'styled-components';

export const StyledFilter = styled.div`
  .select {
    padding: 0 1rem;
    border: 1px solid var(--shadow);
    border-radius: 6px;
    margin: 3rem 0;

    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    position: relative;
  }

  .select:focus-within {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }

  select {
    appearance: none;
    background-color: transparent;
    width: 100%;
    outline: none;
    display: block;

    font-family: inherit;
    font-size: inherit;
    line-height: inherit;

    padding: 1rem;
    border: 1px solid black;
  }

  option {
    padding: 1rem;
    border: 1px solid black;
  }
`;
