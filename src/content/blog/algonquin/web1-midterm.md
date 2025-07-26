---
title: "Web1 Midterm"
description: ""
pubDate: "Feb 08 2025"
heroImage: "/src/assets/shuang.jpg"
tags: ["algonquin"]
---
# Lone Starfish Website

## Overview
For the midterm project, I built a single-page website to practice structuring a website with semantic HTML and custom CSS styling. This project helped me learn how to create a clear layout with a header, navigation, main content sections, form, and a footer while applying consistent design.

## Demo
[🌐 View the Demo Here](https://liu00701.github.io/midterm/)

[🧑‍💻 View the Code Here](https://github.com/liu00701/liu00701.github.io/tree/main/midterm)

![Screenshot of Website](/images/screenshot-lone-starfish.jpg)

## Technologies Used
- HTML
- CSS

## Challenges Faced 
While working on this project, I ran into a few chanllenges but I also learned a lot.

### Centering the Page

I wanted the page content to stay centered no matter the screen size. To do that, I used a max-width in vw (viewport width) and margin: 0 auto; to center everyting.

``` css
body {
    /* Set the width to 80% of the screen */
    max-width: 80vw; 
    /* Automatically center the body */
    margin: 0 auto;  
}
```

### Set header background-image

To style the header with an image and control its position and scaling: 

``` css
header {
    background-image: url('lone-starfish.jpg');
    background-repeat: no-repeat; /* Don’t repeat the image */
    background-position: center;  /* Center it horizontally and vertically */
    background-size: cover; /* Stretch it to fill the header */
}
```

#### Some other values for background-size:
- 50% – image takes up 50% of the width (height auto)
- contain – image fits completely inside the box without cropping
- auto – keeps original image size

### Clear Floats
I used a floated image, but the text that came after started wrapping around it. To fix this, I added a clear class to stop the wrapping:

``` css
.clear {
    /* this makes sure the content after a float starts on a new line */
    clear: both;
}
```

### Working with a Form

- Don't need to set display: block to move inputs to new lines - setting width: 99% works well.
- To link a label and input, use the for attribute on the label and id on the input with the same value.
- Implict label: just nest the input inside the label (no for needed)
- For radio buttons to work as a group, give them the same time.

``` html
<form action="" method="get">
    <label for="name">Your Name</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Your Email</label>
    <input type="email" id="email" name="email" required>
    <label for="message">Your Message</label>
    <textarea id="message" name="message" rows="4" required> </textarea>

    <p>Would you like to visit the starfish?</p>
    <label>Yes<input type="radio" id="yes" name="fav_visit" value="Yes"></label>
    <label>No<input type="radio" id="no" name="fav_visit" value="No"></label>
    <label>Maybe<input type="radio" id="maybe" name="fav_visit" value="Maybe"></label>
    <button type="submit">SEND</button>
</form>
```

``` css
input[type="text"],
input[type="email"],
textarea {
    /* It ensures the inputs expand nearly fully across the form width while leaving a slight margin to avoid layout issues */
    width: 99%;
}
```

### Making textarea non-resizable
``` css
textarea {
    resize: none;
}
```

### Button Font Mathing Page Font

By default, buttons have their own font styles. To match them with the page font:

``` css
button {
    font-family: inherit;
}
```