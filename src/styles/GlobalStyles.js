import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
    /* neutral */
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);

  --bg:  ${({ theme }) => theme.bg}; 
  --text:  ${({ theme }) => theme.text};
  --element: ${({ theme }) => theme.element};
  --shadow: ${({ theme }) => theme.shadow};
  --shadow2: ${({ theme }) => theme.shadow2};
  --neutralText:  ${({ theme }) => theme.neutralText};
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  color: var(--text);
  transition: all 0.5s ease-in-out;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;

   @media screen and (max-width: 37.5em) {
     font-size: 58%;
    }
  
}

body {
  font-family: 'Nunito Sans', sans-serif;
   background-color: var(--bg);
   font-size: 1.4rem;   
}

.container{
    max-width: 120rem;
    margin: 0 auto;
     padding: 3rem;

}

a {
  text-decoration: none;
  color: var(--text);
  display: inline-block;
}

img{
	width: 100%;
	height: 100%;
	  object-fit: cover;
}

button{
  border: none;
  outline: none;
  cursor: pointer;
}

.btn {
  padding: 1rem 2rem;
  box-shadow: 0 1px 6px 0 var(--shadow);
  background-color: var(--element);
  font-size: inherit;

  &:focus{
    box-shadow: 0 1px 6px 0 var(--shadow);
  }
}
`;
