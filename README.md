# knt website

the knt website is a hobby website about train stations, suburbs and quiet suburbs
- the website is available here
  - [KNT](https://kingofpopmj1.github.io)

## how to make changes to the website:
how to make changes

- make your html/css/js changes to the html and phtml files in the `inputFiles` folder
  - these are the website source files
  - they use ssi include system and needs to be compiled
- compile the website
  - `node scripts/compile.js`
  - this will generate the compiled html files into the root folder
- commit your changes
  - `git add .`
  - `git status`
  - `git commit -m "your commit message"`
- deploy your changes
  - `git push`
  - this will trigger the github-pages deployment. Wait a few minutes for the deployment to run.
- your changes should be deployed now.

## about the technology used to build the website:

here are some technologies used

- html/css/js
  - a good reference is w3 schools
  - [w3 schools html](https://www.w3schools.com/html/).
  - [w3 schools javascript](https://www.w3schools.com/js/).
  - [w3 schools css](https://www.w3schools.com/css/).
- ssi library used to implement server sides includes
  - [node.ssi](https://www.npmjs.com/package/@ln-e/node-ssi).
- The website is hosted using [GitHub Pages](https://pages.github.com/).
