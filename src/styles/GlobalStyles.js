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
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito Sans', sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

button {
  background-color: transparent;
  border: none;
  outline: none;
}


`;
