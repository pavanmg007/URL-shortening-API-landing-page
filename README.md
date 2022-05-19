# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./assets/Screenshot-Desktop.png)

### Links

- Solution URL: [https://github.com/pavanmg007/URL-shortening-API-landing-page](https://github.com/pavanmg007/URL-shortening-API-landing-page)
- Live Site URL: [https://pavanmg007.github.io/URL-shortening-API-landing-page/](https://pavanmg007.github.io/URL-shortening-API-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

I have learnt how to store items in local storage in JSON

```js
useEffect(() => {
  localStorage.setItem("links", JSON.stringify(links));
}, [links]);
```

Ans also learnt how to parse local storage items .

```js
const getLocalStorage = () => {
  let links = localStorage.getItem("links");
  if (links) {
    return JSON.parse(localStorage.getItem("links"));
  } else {
    return [];
  }
};
```

Learnt working with API Calls and handling the response.

```js
const shortenLink = async () => {
  const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
  const data = await res.json();
  setLinks([data.result, ...links]);
  setText("");
};
shortenLink();
```

## Author

- Website - [Github](https://github.com/pavanmg007)
- Frontend Mentor - [@pavanmg007](https://www.frontendmentor.io/profile/pavanmg007)
- Twitter - [@pavanmg007](https://www.twitter.com/pavanmg007)