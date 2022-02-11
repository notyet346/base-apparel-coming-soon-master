# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

### Screenshot

![Desktop preview solution](./desktop.png)
![Active desktop preview](./active.png)
![Mobile preview](./mobile.png)

### Links

- Solution URL: [Github](https://github.com/notyet346/base-apparel-coming-soon-master)
- Live Site URL: [Github](https://notyet346.github.io/base-apparel-coming-soon-master/)


## My process

### Built with

- HTML5 
- CSS 
- CSS Grid


### What I learned

- How to use the <picture> atrribute to switch from mobile to desktop.

```html
<picture>
    <source media="(max-width: 375px)" srcset="images/hero-mobile.jpg">
    <source media="(min-width: 810px)" srcset="images/hero-desktop.jpg">
    <img src="images/hero-desktop.jpg" alt="">
</picture>
```

- CSS grid-area property

```css
.container {
	display: grid;
	grid-template-rows: 87.5px auto auto 50px;
    grid-template-areas:  "header"
                          "hero-image"
                          "main"
                          "footer"
}
```

- Using CSS variables

```css
:root {
  /*Primary colors: Red*/
  --primary-desaturated: hsl(0, 36%, 70%);
  --primary-soft: hsl(0, 93%, 68%);
  --primary-neutral: hsl(0, 6%, 24%);
  --active: hsl(0, 80%, 86%);
  /*Gradients*/
  --linear-gradient-1: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%)),  linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
  --linear-gradient-2: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
}
```

- Using regex
```js
const emailFormat = /^\w+([\.-]?\w+)*@\w+.[a-z]+[\.a-z]?/;
```

### Continued development

- CSS grid
- CSS variables
- Regex

### Useful resources

- [Regexr](https://regexr.com/2rhq7) - This was extremely helpful, for my email format. Learning regex was easy, but using it is tough. So I recommend using it to test Regex, for beginners.
- [MDN Web DOCS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) - MDN gave me an idea of how to use the picture element for responsive images.
- [W3School](https://www.w3schools.com/) - I used it as a cheatsheet for syntax. W3Schools is also a great tool for learning.

## Author

- Frontend Mentor - [@notyet346](https://www.frontendmentor.io/profile/notyet346)
