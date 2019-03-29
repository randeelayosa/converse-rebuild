# Converse - Site Rebuild

#### _Front End Development/JavaScript, Week 12 - Independent Project, 3.29.19_

#### By _**Randee Layosa**_

![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

_This application is a clone of the [Converse.com](https://www.converse.com) landing page. It uses Angular to build the site's different components and Firebase as a database._

## Preview
<p align="center">My Rebuild</p>
<p align="center">
<img src="src/assets/img/rebuilt1.png" width="250" height="355" title="rebuilt site">
<img src="src/assets/img/rebuilt2.png" width="250" height="355" title="rebuilt site">
<img src="src/assets/img/rebuilt3.png" width="250" height="355" title="rebuilt site">
</p>

<p align="center">Original Site</p>
<p align="center">
  <img src="src/assets/img/org1.png" width="250" height="355" title="original site">
  <img src="src/assets/img/org2.png" width="250" height="355" title="original site">
  <img src="src/assets/img/org3.png" width="250" height="355" title="original site">
</p>

## Technologies Used

  * _This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5._
  * _Typescript_
  * _Webpack_
  * _Jasmine_
  * _Karma_
  * _Sass_

## Setup/Installation Requirements

#### To open and view this project file:
1. Clone this GitHub repository https://github.com/randeelayosa/galactic-calculator.git to your Desktop.
* Install git onto your computer if it isn't already.
* To clone the project down to your desktop, open your Terminal, and enter the following commands:
  ```
  cd desktop
  git clone [paste link here]
  cd desktop/[project folder name]
  atom .
  ```
 _You can use another text editor if Atom is not your preferred program._

#### Running the server to view the live project
Run `ng serve` in the project directory in Terminal. Go to `http://localhost:4200/` in the browser of your choice. _Note: The app will automatically reload if you change any of the source files._

#### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Planning

**Configuration/Dependencies**

  | Configuration/Dependencies | Use |
| :-------------     | :------------- |
| Angular | framework |
| Clean-Webpack-Plugin | clears project dist folder |
| CSS-Loader, Style-Loader, Sass-Loader, Node-Sass | styling |
| ESLint | JavaScript linter, checks code for errors |
| File-Loader | image loader |
| HTML-Webpack-Plugin | loads HTML file |
| Jasmine, Karma | for testing code |
| Typescript | programming language |
| UglifyJS-Webpack-Plugin | minifies code |
| Webpack | bundles/compiles code |

**Specs**

  | Description | Input | Output |
| :-------------     | :------------- | :------------- |
| Program has reusable components that are used throughout the site  | n/a | n/a |
| Program will mimic the layout and build of Converse.com | localhost:4200 | identical look as you scroll to bottom of the page |
| Program has click functionality that connects to other pages | click on "Shop Chuck 70" | loads Converse page for Chuck shoe styles in stock |
| Program uses Firebase to mimic a generic Sign In feature | click on "Sign In" | modal prompt element pops up to create a user account |
| Program uses Firebase to mimic a generic Shopping Cart feature | click on Shopping Cart icon | loads page depicting items the user has saved for purchase |

**Integration**
  * src folder: files responsible for UI code and backend functionality
  * Display: clone of the Converse landing page
  * Integrate Firebase to add Sign In and Shopping Cart functionality

**UX/UI**
  * Include and modify Sass
  * Incorporate photos, gifs, videos and icons the real Converse site uses

**Polish**
  * Delete unused dependencies in `package.json` and plugins in the config files
  * Ensure README includes all necessary language for instructions, bugs, and documentation

### Legal

*This software is licensed under MIT license.*

Copyright (c) 2019 **_Randee Layosa_**
