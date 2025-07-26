---
title: "Web1 Midterm"
description: ""
pubDate: "Feb 08 2025"
heroImage: "/src/assets/shuang.jpg"
tags: ["algonquin"]
---
# My Web Midterm Project: [Lone Starfish Homepage]

## Overview
For the midterm project, I built a single-page website to practice structuring a website with semantic HTML and custom CSS styling. This project helped me learn how to create a clear layout with a header, navigation, main content sections, form, and a footer while applying consistent design.

## Demo
[🌐 View the Demo Here](https://liu00701.github.io/midterm/)

[🧑‍💻 View the Code Here](https://github.com/liu00701/liu00701.github.io/tree/main/midterm)

![Screenshot of Website](/src/assets/blog/screenshot-lone-starfish.jpg)

## Technologies Used
- HTML
- CSS

## Challenges Faced and What I Learned
While working on this project, I encountered:
- **How to make body center:** Use vw to set the max width of the browser's visible width and set margin to 0 auto making it center.

    ``` css
    body {
        /* Set body to 80% of the viewport's width */
        max-width: 80vw; 
        /* Center it with 10% empty on each side for good readability */
        margin: 0 auto;  
        background-color: rgb(178, 211, 207);
    }
    ```

- **Set header background-image** 
    - background-repeat: no-repeat; means the image will not repeat across the element
    - background-position: center; center the image horizontally and vertically
    - background-size: cover; means the image scales to fully cover the element while maintaining aspect ratio, cropping if needed
        - 50%; 50% of the element's width, height auto to maintain aspect ration
        - contain; fill image inside the element, no cropping
        - auto; keep original size

    ``` css
    header {
        background-image: url('lone-starfish.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    ```

- **Clear Float:** the floated element is taken out of the normal layout flow which means other content may wrap around the floated element, so avoid the title 'Facts About Starfish' wrapping by setting the clear class
    ``` css
    .clear {
        /* both ensures that content after a float starts on a new line, not beside the floated element */
        clear: both;
    }
    ```

- **Form**
    - put label and input in different lines without setting display: set input width to 99%
    - link label with input: set for to label and id to input with the same value
    - implicit label: put input inside a label 
    - radio button: set all radio input with the same name
    
    ``` html
      <div class="form-container">
        <form action="./test.html" method="get">
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
    </div>
    ```

    ``` css
    input[type="text"],
    input[type="email"],
    textarea {
        /* It ensures your inputs and textarea expand nearly fully 
        across the form width while leaving a slight margin to avoid layout issues */
        width: 99%;
        border: 1px solid #ccc;
        box-sizing: border-box;
        margin-bottom: 5px;
        padding: 2px;
    }
    ```

- **Can not change textarea size**
    ``` css
    textarea {
        resize: none;
    }
    ```

- **Button font:** By default, buttons have browser styles, which include their own font family. This may not match the font of your page.
    ``` css
    button {
        font-family: inherit;
    }
    ```