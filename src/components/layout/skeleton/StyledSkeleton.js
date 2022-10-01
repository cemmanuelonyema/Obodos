import styled from 'styled-components';

export const StyledSkeleton = styled.article`
  .skeleton {
    box-shadow: 0 1px 6px 0 var(--shadow);
    animation: skeleton-loading 1s linear infinite alternate;
    padding: 2rem;
  }

  .image {
    background-color: white;
    height: 20rem;
  }

  .content {
    padding: 2rem;
  }
  span {
    display: block;
    background-color: white;
    width: 70%;
    padding: 8px;
    margin-bottom: 1rem;
  }

  .select {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 0;

    @media screen and (max-width: 37.5em) {
      grid-template-columns: 1fr;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .data {
      display: flex;
      justify-content: space-between;
      gap: 5rem;

      @media screen and (max-width: 37.5em) {
        flex-direction: column;
      }

      &-right,
      &-left {
        flex: 1;
      }

      span {
        display: block;
        /* width: 10rem; */
      }
    }
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;
