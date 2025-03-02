## CODE DOCUMENTATION:

### NAV hover effect on li elements:

**Originally, I set it up by adding an .active class, giving the current element an underline.**

```bash
.active {
text-decoration: underline;
text-decoration-color: var(--accent-color);
text-decoration-thickness: 3px;
text-underline-offset: 10px;
}
```

But I wanted more animation during the user interaction with the nav elements. The effect I wanted was to visibly show the user live what is the hovered li item, by shortening the underline slightly upon hovering the element.

In this case, I found the pseudo class **::after** to prove useful in order to gain complete control over the width of the underline, making it easier to adjust the length as needed.

---

### URL displaying the correct navigation dynamically:

Since this webpage operates solely with dynamic navigation within one page, I needed to figure out how I could make sure the site URL reflected where the user where at.

This was harder than expected to research, and I turned to Mr. ChatGPT for some help understanding how to make this approach work:
[StackOverflow](https://stackoverflow.com/questions/37105745/how-can-i-history-pushstate-and-then-immediately-go-to-the-page-in-the-url-bar)

**It all started here:**

```bash
history.pushState({ page: "home" }, "", "/home");
```

After some discussion with Mr. ChatGPT, I eventually ended up not using his advice after all, since he required me to set up a server handling the index.html part etc. It all seemed a bit complex for such a small matter as this one-pager.

**I turned to one of my colleagues for help, and after a quick talk it came down to hashing the pathname:**

```bash
window.location.hash = "#home";
```

And utilising a good old **if statement** for the initial path:

```bash
if (window.location.pathname.includes("index.html")) {
window.location.replace("#home");
}
```

### Custom cursor:

I learnt how to utilise "mousemove" to create a custom cursor, so I thought it cool to make a simple rocket ship cursor. I got great help in this article:</br>
https://www.freecodecamp.org/news/how-to-make-a-custom-mouse-cursor-with-css-and-javascript/

---

## Resources:

- https://stackoverflow.com/questions/14472690/use-webkit-playsinline-in-javascript

- https://stackoverflow.com/questions/37105745/how-can-i-history-pushstate-and-then-immediately-go-to-the-page-in-the-url-bar

- https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs

- https://www.freecodecamp.org/news/how-to-make-a-custom-mouse-cursor-with-css-and-javascript/
