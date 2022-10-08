import styled from 'styled-components';

export const StyledFilter = styled.div`
  padding: 5px 1rem;
  border: 1px solid var(--shadow);
  border-radius: 5px;
  margin: 3rem 0;
  font-size: 1.6rem;
  background-color: var(--element);
  color: var(--text);
  /* transition: color 0.3s ease-in-out; */

  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:focus-within {
    box-shadow: 0 1px 6px 0 var(--shadow);
  }

  select {
    appearance: none;
    background-color: transparent;
    width: 100%;
    outline: none;
    border: none;
    display: block;

    font-family: inherit;
    font-size: inherit;
    line-height: inherit;

    padding: 1rem;
    /* border: 1px solid black; */
  }

  option {
    padding: 1rem;
    /* border: 1px solid black; */
  }

  @media screen and (max-width: 37.5em) {
    width: 100%;
    margin: 1rem 0;
  }
`;
