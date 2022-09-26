import styled from 'styled-components';

export const StyledSearch = styled.form`
  display: inline-flex;
  align-items: center;
  width: 40%;
  gap: 2rem;
  border: 1px solid rgba(1, 8, 22, 0.298);
  border-radius: 5px;
  background-color: var(--element);
  color: var(--text);
  /* transition: color 0.3s ease-in-out; */

  /* padding: 5px 1rem; */

  padding: 5px 2rem;
  margin: 3rem 0;
  font-size: 1.6rem;

  &:focus-within {
    box-shadow: 0 1px 6px 0 var(--shadow);
  }

  input {
    width: 100%;
    border: none;
    padding: 1rem 0;
    border: none;

    font-family: inherit;
    background-color: transparent;

    &::placeholder {
      color: var(--neutralText);
    }
  }

  input:focus {
    outline: none;
  }

  @media screen and (max-width: 37.5em) {
    width: 100%;
    margin: 1rem 0;
  }
`;
