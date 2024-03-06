# ExpressNoteTakerApp
## Overview
 An efficient and user-friendly note-taking application built with Express.js, enabling users to write, save, and manage their notes with ease. This application leverages a JSON file for persistent storage of notes, providing functionalities such as note creation, viewing, and dynamic management. Designed to support small business owners and individuals in organizing their thoughts and tasks, the ExpressNoteTakerApp offers a seamless interface to enhance productivity. Deployed on Heroku, it ensures accessibility and convenience for users anytime, anywhere.


## Table of Contents
1. [Overview](#overview)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Features](#features)
7. [Technologies Used](#technologies-used)
8. [Screenshot](#screenshot)
9. [Deployed Application](#deployed-application)
10. [License](#license)
11. [Collaborators](#collaborators)
12. [Code Attribution](#code-attribution)
13. [External Resources](#external-resources)
14. [Credits](#credits)


## User Story
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria
```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
```

## Installation
To install the application, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the application directory.
3. Run `npm install` to install the necessary dependencies.

## Usage
To use the application, follow these steps:
1. Start the server with `npm start`.
2. Open your browser and navigate to `http://localhost:3000`.
3. Use the interface to create, view, and delete notes.

## Features
- Create, view, and delete notes
- Unique IDs for each note for easy management
- Persistent storage with a JSON file

## Technologies Used
- HTML/CSS
- JavaScript
- Node.js
- Express.js
- UUID for unique identification
- Heroku for deployment

## Screenshot
![Note Taker Application](/ExpressNoteTakerApp/public/assets/images/APPmain.png)
![Note Taker Application](/ExpressNoteTakerApp/public/assets/images/APPmain2.png)

## Deployed Application
[Click here to view the deployed application.](https://aqueous-cove-34738-8a424dd13215.herokuapp.com/)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Collaborators
- [Kyle Huff](https://github.com/Kykesh)

## Code Attribution
- Express.js for server and routing setup
- UUID npm package for generating unique IDs for notes

## External Resources
- [MDN Web Docs](https://developer.mozilla.org) for web development documentation
- [Stack Overflow](https://stackoverflow.com) for troubleshooting and community advice
- [Heroku Documentation](https://devcenter.heroku.com) for deployment guidelines

## Credits
© 2024 edX Boot Camps LLC. Starter code provided by edX Boot Camps.
