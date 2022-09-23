import styled from 'styled-components';

export const StyledSearch = styled.form`
  display: inline-flex;
  align-items: center;
  width: 40%;
  gap: 1rem;
  border: 1px solid rgba(1, 8, 22, 0.298);
  padding: 0 1rem;
  margin: 3rem 0;

  &:focus-within {
    box-shadow: 0 1px 6px 0 var(--shadow);
  }

  input {
    width: 100%;
    border: none;
    padding: 1rem 0;
    border: none;

    font-family: inherit;
    font-weight: 600;
    font-size: 16px;
    background-color: transparent;
  }

  input:focus {
    outline: none;
  }
`;
