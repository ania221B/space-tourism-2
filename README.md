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
  inset: 0 auto auto 0;
  padding: 0.75em 1.5em;
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
}

.skip-to-content:focus {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
}
```

##### Content for screen readers only

In situations where you have elements like buttons for slide switching that look like dots and therefore ones that don't screen-reader users much, it is a good practice to add text to the button and hide it using a class:

```html
<div class="dot-indicators">
  <button type="button"><span class="sr-only">Launch vehicle</span></button>
  <button type="button"><span class="sr-only">Spaceport</span></button>
  <button type="button"><span class="sr-only">Space capsule</span></button>
</div>
```

```css
.sr-only {
  position: absolute !important;
  height: 1px !important;
  width: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  border: 0 !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
}
```

##### Hidding content from screen readers

If you have content that makes sens for sighted users, but is not really useful for people with impaired vision — like the numbering of navigation menu in this project — it is a good idea to hide it using `aria-hidden` attribute:

```html
<a href="page.html"><span aria-hidden="true">00</span>Home</a>
```

#### Using attributes instead of classes in JS

To build navigation menu and tabbed component from this project I would use classes that are added and removed with the use of JS. I learnt form the course that you can do the same by using attributes.

### Continued development

- Grid
- JS
- Accessibility

## Author

- Frontend Mentor - [@ania221B](https://www.frontendmentor.io/profile/ania221B)

## Acknowledgments

I've rebuilt this website after completing the [Frontend Mentor x Scrimba x Kevin Powell course](https://scrimba.com/learn/spacetravel).
