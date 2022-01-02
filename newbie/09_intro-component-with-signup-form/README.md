# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./assets/design/screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/sign-up-form-with-html-css-and-a-bit-of-javascript-usBYUmX7L](https://www.frontendmentor.io/solutions/sign-up-form-with-html-css-and-a-bit-of-javascript-usBYUmX7L)
- Live Site URL: [https://paiput-intro-component-with-signup-form.netlify.app/](https://paiput-intro-component-with-signup-form.netlify.app/)

## My process

### Built with

- Flexbox
- Desktop-first workflow

### What I learned

Working through this project, I learned a bit more of CSS, like the use of :is(), and how to validate a simply form with JavaScript.

```css
.main__header :is(h1, p)::selection {
    background-color: #fff;
    color: var(--red);
}

.main__header h1::selection,
.main__header p::selection {
    background-color: #fff;
    color: var(--red);
}
```

### Continued development

I'll continue focusing on JavaScript as I still have a lot to learn.

### Useful resources

- [Use of :is()](https://www.youtube.com/watch?v=McC4QkCvbaY) - This helped me understanding the use of :is(), and how it can simplify a bit our CSS.

## Author

Lucas Piputto

- Frontend Mentor - [@paiput](https://www.frontendmentor.io/profile/paiput)
