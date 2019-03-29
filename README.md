# Converse - Site Rebuild

#### _Front End Development/JavaScript, Week 12 - Independent Project, 3.29.19_

#### By _**Randee Layosa**_

![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

_This application is a clone of the <a href="https://www.converse.com">Converse.com</a> landing page. It uses Angular to build the site's different components and Firebase as a database._

## Technologies Used

  * _This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5._
  * _Typescript_
  * _Webpack_
  * _Jasmine_
  * _Karma_
  * _Sass_

## Setup/Installation Requirements

#### _To open and view this project file:_
* Clone this GitHub repository https://github.com/randeelayosa/galactic-calculator.git to your Desktop.
* To clone, open your Terminal, enter the command: `cd desktop` , enter the command: `git clone [paste link here]` and then press _Enter_.
* In terminal, navigate to the cloned project file on your Desktop with `cd desktop/[project folder name]`.
* Enter `atom .` if Atom is your preferred text editor. Or, open the folder in a Finder window, select the files you want to view, right click, and select the text editor of your preference.

#### _Running the server to view the live project_
Run `ng serve` in the project directory in Terminal. Go to `http://localhost:4200/` in the browser of your choice. _Note: The app will automatically reload if you change any of the source files._

#### _Running unit tests_
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### _Running end-to-end tests_
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### _Further help_
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Planning

1. **Configuration/Dependencies**

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

2. **Specs**

  | Description | Input | Output |
| :-------------     | :------------- | :------------- |
| Program blocks non-numerical input | g | Invalid input |
| Program disallows form submission if an input field is empty  | click button to Calculate | Field required |
| Program returns user's age | Year born: 1999 | 20 |
| Program calculates and returns user's age on Mercury | 20 | 83 |

3. **Integration**
  * src folder: `index.html`, `main.js`, `age.js`
  * spec folder: `age-spec.js`, `jasmine.json`
  * index.html: `<form>` `<input>`
  * Display: input field for user's age and a submit button
  * Integrate feature that calculates user's age, life expectancy, and remaining years in correspondence to other planets.

4. **UX/UI**
  * Include and modify Sass
  * Develop custom style - solar system/space theme

5. **Polish**
  * Refactor testing specs and JS where applicable
  * Delete unused dependencies in `package.json` and plugins in `webpack.config.js`
  * Produce README that fulfills necessary guidelines and requirements

Copyright (c) 2019 **_Randee Layosa_**
