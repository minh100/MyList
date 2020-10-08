This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# View this website

https://minh100.github.io/MyList/

# MyList 

This is a website that allows a user to search for anime and stores the anime.<br/>
Uses the public Kitsu API to get the informations.

## Features

- Search for specific anime
- Search for anime in the **upcoming**, **trending**, and **all time popular** categories
  - Supports viewmore and pagination of each categories
- Stores a users **watching**, **watched**, and **planning** lists
- Anime are displayed as cards in a grid-style format
  - These cards are clickable and which will display more information:
    - Subtype of the anime, description, rating, episodes, and a link to the trailer
    - Controls to add anime to watching, watched, planning or remove them from all
  - On the front of the card there quick actions that allow you to quickly add anime and displays the status of the anime in relation to your lists
- Navbar that links you to your lists and the home/ search page
  - At your *MyList* page it displays all your anime based on your lists
    - You can change lists by hovering over the current lists

## Dev features

- Uses React/ HTML / CSS
- Uses [Kitsu API](https://kitsu.docs.apiary.io/#reference/anime/anime/fetch-collection?console=1).
  - Another [link for JSON API](https://hummingbird-me.github.io/api-docs/#tag/Manga/paths/~1manga/post).
- React axios for getting information from the API
- React Context for state managment
  - The Global folder

## Installation

Clone this repo and run the following commands<br />
This will install the module to see the app's dependencies:

> npm install -g npm-install-missing

Run the module to see which dependicies are needed:

> npm-install-missing

The missing dependencies will automatically be updated/ installed or you can manually update/ install it

## Running app locally

In the project directory, you can run:

> npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Github pages

Use this [link](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) for reference<br/>
Basically use the following command to deploy to GitHub Pages:
> npm run deploy

Having multiple pages may cause an issue where redirecting or refreshing the page would cause crashes.
Use the following link as a reference in order to fix this problem; You only have to do the basic

https://github.com/rafgraph/spa-github-pages
