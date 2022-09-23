# REST Countries API with color theme switcher

## Welcome! 👋

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [REST Countries API with color theme switcher](#rest-countries-api-with-color-theme-switcher)
  - [Welcome! 👋](#welcome-)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Useful resources](#useful-resources)
  - [Author](#author)
- [Frontend Mentor - REST Countries API with color theme switcher](#frontend-mentor---rest-countries-api-with-color-theme-switcher)
  - [Cloning and setting up this project](#cloning-and-setting-up-this-project)
  - [Deployment](#deployment)
  - [Thank you very much for checking out my project 🙌🙌](#thank-you-very-much-for-checking-out-my-project-)
    - [Please, if you have or know of any opening for software developer position, contact me through](#please-if-you-have-or-know-of-any-opening-for-software-developer-position-contact-me-through)

## Overview

### The challenge

Your challenge is to integrate with the [REST Countries V2 API](https://restcountries.com/#api-endpoints-v2) to pull country data and build out the project to the designs inside the `/design` folder.

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Links

- [Github URL](https://github.com/cemmanuelonyema/Obodos)
- [Live Site URL](https://obodos.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
<!--

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

--- Redux toolkit
1-- Async thunk action creator
2-- writing memo selectors
3-- Regex search and filter
4-- throttling and debounce func to avoid instantaneous api calls
useEffect(() => {
const timeoutId = setTimeout(() => {
if (searchQuery) dispatch(getCountry(searchQuery));
}, 1000);

    //clean up - runs on every rerender
    return () => {
      clearTimeout(timeoutId);
    };

}, [searchQuery]);

I faced the useState async update issue, where my searchQuery was always (last) letter short
const handleChange = (e) => {
setSearchQuery(e.target.value);
console.log(searchQuery);
dispatch(filterCountries(searchQuery));
};

i solved it with useEffect keeping the searchQuery as a dependency, that way its always updated

useEffect(() => {
console.log(searchQuery);
dispatch(filterCountries(searchQuery));
}, [searchQuery]);

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

````js
const proudOfThisFunc = () => {
  console.log("🎉");
};
``` -->

<!-- ### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.** -->

### Useful resources

- [Writing markdown, I'd recommend checking out The Markdown Guide](https://www.markdownguide.org/) to learn more.
<!-- - [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept. -->

## Author

<!-- - Website - [Emmanuel C. Onyema](https://ceonyema.vercel.app) -->

- Email - [cemmanuelOnyema@gmail.com](mailto:cemmanuelonyema@gmail.com)
- Twitter - [@ceonyema\_](https://www.twitter.com/ceonyema_)
- LinkedIN - [@emmanuel-c-onyema](https://www.linkedin.com/in/emmanuel-c-onyema/)
- Frontend Mentor - [@cemmanuelonyema](https://www.frontendmentor.io/profile/cemmanuelonyema)

<!-- ## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit. -->

# Frontend Mentor - REST Countries API with color theme switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](./src//design/desktop-preview.jpg)

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Cloning and setting up this project

<!-- Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on. -->

## Deployment

- Netlify was used for deployment - [Netlify](https://www.netlify.com/)

## Thank you very much for checking out my project 🙌🙌

### Please, if you have or know of any opening for software developer position, contact me through

- Email - [cemmanuelOnyema@gmail.com](mailto:cemmanuelonyema@gmail.com)
- Twitter - [@ceonyema\_](https://www.twitter.com/ceonyema_)
- LinkedIN - [@emmanuel-c-onyema](https://www.linkedin.com/in/emmanuel-c-onyema/)

🚀
````
