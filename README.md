# SocialExperiment_API

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

A social networking web application back-end that allows users to share their thoughts, react to friends’ thoughts, and create a friend list. 

## Table of Contents
- [Screenshots](#screenshots)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing) 
- [Questions](#questions)
- [License](#license)

## Screenshots 
![mongoDB](./assets/MongoDB%20screenshot.png)
![Insomnia](./assets/Insomnia%20Screenshot.png)

## Description

The Social Experiment API is a backend application built for social media startups. It provides the necessary API endpoints to handle large amounts of unstructured data, making it perfect for a web application where users can share their thoughts, react to friends’ thoughts, and manage a friend list. This application utilizes Express.js for routing, a MongoDB database for data storage, and the Mongoose ODM for data modeling and management.

The video demonstrating the application's functionality can be visited [here]().

## Installation

To install the SocialExperiment_API:
 1. clone the repository to your local machine. You can do this by running the following command in your terminal: `git clone git@github.com:Pilotguide9897/SocialExperiment_API.git`. Alternatively, the repo url can be obtained by clicking the green code button in the main repo page, clicking the SSH tab, and then copying the URL provided. 

2. Once the repo is cloned to the local system, navigate to the directory in the terminal and run `npm install` in the command line to install the required packages specified in the repo's package.json file. This application requires that users already have node.js and Node Package Manager (NPM) installed to your system. For more information on installing these technologies please consult their official documentation.

3. Ensure that all the required dependencies are installed by running `npm install` from the project's root folder.

4. Ensure that MongoDB is installed. This can be accomplished by opening a new terminal window and running the `mongo` command. If Mongo is installed, this will start the MongoDB shell and you should see a prompt indicating a successful connection to the MongoDB server. If Mongo has not been installed, visit the MongoDB website [here](https://www.mongodb.com) and navigate to the "Download" section. Select the version of MongoDB that is compatible with your operating system and download and run the installer. The installer will guide you through the installation process, including selecting the installation location and configuring any additional settings. 

Once all these steps have been completed, you should have everything installed that you need to run and use this application.

## Usage

The SocialExperiment_API allows users to share thoughts, react to friends' thoughts, and manage their friend list. Specifically, users of the application can have access to multiple api routes that allow them to easily create, update, and delete users; attribute thoughts to those users and subsequently delete or update these thoughts; create reactions to existing thoughts; and even set a friend status between users. Users can launch the app by navigating to the root directory in the command line and executing `node server.js`. This will connect users to the application server and establish a connection to MongoDB. From here, users have access to multiple routes that allow users to interface with the application:

```
Users:
GET to localhost:3001/api/user - fetch data on all users
GET to localhost:3001/api/user/:userId - fetch data for a specified user
POST to localhost:3001/api/user - create a new user
PUT to localhost:3001/api/user/:userId - Update existing user's data with the new information provided in the request body for the user with the specified id 
DELETE to localhost:3001/api/user/:userId - Delete the data of the user with the specified id

Thoughts:
GET to localhost:3001/api/thoughts - fetch the data for all existing thoughts
GET to localhost:3001/api/thoughts/:thoughtId - fetch the data for a specified thought
POST to localhost:3001/api/thoughts - create a new thought attributed to the user and with the text attributed to the user specified in the post body.
PUT to localhost:3001/api/thoughts/:thoughtId - Update an existing thought data with the new information provided in the request body for the thought with the specified id 
DELETE to localhost:3001/api/thoughts/:thoughtId - Delete the thought with the specified id

Friends:
POST to localhost:3001/categories/ - create a new tag
DELETE to localhost:3001/categories/:id - Delete the tag with the specified id

Reactions:
POST to localhost:3001/api/thoughts/:thoughtId/reactions - create a new reaction
DELETE to localhost:3001/api/thoughts/:thoughtId/reactions - Delete the reaction with the specified reaction id provided in the request body
```

For further context or guidance on how to implement the POST and PUT, routes, please consult the models in the Github repo for further detail into the schemas/models.

## Contributing
Users interested in contributing to this project may fork the GitHub repository, make their intended alterations, and submit these changes to the original repository as a pull request. Pull requests will be reviewed by the project author. If accepted, the changes will be merged and added to the project's main branch to create the new starting point for future development!

## Questions
If you have any questions concerning this application, do not hesitate to reach me at jaredryan1997@hotmail.com. You may also view my GitHub profile at http://github.com/Pilotguide9897.

## License
This project is licensed under the ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg). See the [license](https://opensource.org/licenses/MIT) documentation for more information.