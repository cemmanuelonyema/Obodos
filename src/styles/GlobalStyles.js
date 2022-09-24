import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  /* color - dark mode*/
  --dark-blue: hsl(209, 23%, 22%);
  --very-dark-blue: hsl(207, 26%, 17%); /* Background */

  /* color - light mode */
  --very-dark-blue: hsl(200, 15%, 8%); /* Text */
  --dark-gray: hsl(0, 0%, 52%); /* input */
  --very-light-gray: hsl(0, 0%, 98%); /* Background */

 
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
      /* transition: all 0.5s ease-in-out; */

     

}

html {
  font-size: 62.5%;
  box-sizing: border-box;

   @media screen and (max-width: 600px) {
     font-size: 54%;
    }
  
}

body {
  font-family: 'Nunito Sans', sans-serif;
   background-color: var(--bg);
   font-size: 1.4rem;
}


a {
  text-decoration: none;
  color: var(--text);
}

button {
  background-color: transparent;
  border: none;
  outline: none;
}




  @media screen and  (max-width: 600px) {
   
    }
`;