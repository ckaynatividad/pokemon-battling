# Pokemon Battle App
_See PR for specific code feedback_
## General Notes
* Don't forget to update your README -- details about what to include are [here](https://github.com/alchemycodelab/september-2021-foundations-i/blob/main/curriculum/labs/project-guidelines.md#documentation)
* You have a few functions that appear to be doing the same thing -- isCompKO versus isKO and isDead in isDead.js vs utils.js
* You have several places where you're removing eslint errors by using `// eslint-disable-next-line no-unused-vars` or `eslint-disable` -- this is a bad habit. Eslint errors are there to clean up our code and can help find bugs. 
* While the battle logic is impressive, I worry about the maintainability of the code -- I would have preferred to see less functionality, with more tests to validate the functionality. MVPs should be exactly that -- minimum viable product. What is that absolute least code you can write to get a working product. In this case, I don't think you needed all the battle complexity in order to deliver a working product.
* All that being said -- you all did great getting this working -- I think looking into refactoring this with classes would be a fun project for you in the future -- super complex game logic can be handled well with object oriented programming (not something we have covered yet but there's lots of resources if you want to explore on your own)


|                                                                                                                                   | Possible Points | Pokemon |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------- |
| **Good and proper use of HTML**                                                                                                       | 15              | 15      |
| Clear, readable, and efficient structure                                                                                          |                 |         |
| Uses semantic markup whenever possible                                                                                            |                 |         |
| **Good and proper use of CSS**                                                                                                        | 15              | 15      |
| Clear, readable, and efficient styles                                                                                             |                 |         |
| Appropriate page layout for desktop                                                                                               |                 |         |
| Well-organized file structure                                                                                                     |                 |         |
| **Good and proper use of JavaScript**                                                                                                 |                 |         |
| Clear, readable, and efficient code (points removed for battle code)                                                              | 5               | 3       |
| Uses domain models to encapsulate data and behavior, such as objects and constructors                                             | 5               | 5       |
| Responds to user events to receive/process user input and display new content to the user                                         | 5               | 5       |
| Contains no unnecessary or commented-out code (points removed for eslint issues)                                                  | 5               | 0       |
| **Generally useful and functional**                                                                                                   |                 |         |
| Works as expected with no bugs                                                                                                    | 5               | 4       |
| Has at least three distinct pages with clear navigation, one of which must be an "About Us" page                                  | 5               | 5       |
| Has at least two pages that accept and process user input (usually, this is a <form> element using the new FormData() constructor | 10              | 10      |
| State is persisted between page reloads, and common state is used between at least two pages.                                     | 10              | 10      |
| TDD: At least three tested JavaScript functions, passing CI in GitHub.                                                            | 15              | 15      |
| Deployed live on the Internet via GitHub Pages                                                                                    | 5               | 5       |
|                                                                                                                                   | 100             | 92      |