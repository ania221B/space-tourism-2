# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Mobile View](./screenshots/Frontend-Mentor-Space-tourism-website-home-mobile.png)
![Tablet View](./screenshots/Frontend-Mentor-Space-tourism-website-home-mobile.png.jpg)
![Desktop View](./screenshots/Frontend-Mentor-Space-tourism-website-home-desktop.png.jpg)

### Links

- Solution URL: [GitHub](https://github.com/ania221B/space-tourism-2)
- Live Site URL: [GitHub Pages](https://ania221b.github.io/space-tourism-2/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

#### Colors

I've learnt the new hsl color notation and how to use it in custom properties to manipulate the opacity.

Instead of writing:

```css
--clr-primary: hsl(230, 35%, 7%);
```

You use just the numbers without any commas:

```css
--clr-primary: 230 35% 7%;
```

Later, in order to use the color, you need to remember about writing hsl(). If you want to change opacity, you add it after a backslash:

```css
.bg-primary-medium {
  background-color: hsl(var(--clr-primary) / 0.5);
}
```

You don't need to write `hsla()` for the alpha channel to work.

#### Paddings

You can use clamp(), min() and max() functions for paddings to get them grow and shrink without media queries:

```css
.element-1 {
  padding: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
}

.element-2 {
  padding-block: min(4rem, 20vh);
}
```

#### Fonts

You can use clamp() for fonts. It's a good idea to use `+1rem` for the middle value so that font size is always in `rem`:

```css
--fs-900: clamp(5rem, 10vw + 1rem, 9.375rem);
```

#### Accessibility

##### Skip to content link

To make websites easier to navigate for people who use keyboard only, you can add a link enabling them to jump straight to main content without having to tab through the navigation menu. The `href` attribute needs to point to the `id` of main content and it's good to have `aria-label` describing what the link does. The link can be hidden with positioning and transforms.

```html
<a
  href="#main-content"
  class="skip-to-content"
  aria-label="skip to main content"
  >Skip to content</a
>

<main id="main-content"></main>
```

```css
.skip-to-content {
  position: absolute;
  padding: 0.5em 1em;
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
}

.skip-to-content:focus {
}
```

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
