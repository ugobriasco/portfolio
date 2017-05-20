# V2
V2 is an API friendly V-Card portfolio website.
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

Copyright: UgoBriasco (hi@ugobriasco.me)

# Release Notes
V2 release 0.0.0

##Features
- Profile data loaded from external .json files under ./docs
- profile data (resume, portfolio) can be entered using markdown
- contact form sends emails via ./assets/inc/email.php (bug)
- the section "press" contains user's twitts/retwitts


##Bugs
- twitter api not working
    + cors conflict
    + a service is calling the wrong directory
- about box overlapping the footer
- images are loading slowly
- email is not sent
    + email.php not accessble due rights issue
- missing input validation empty contact form
- zoneaware error by routing the page
- google wants to translate in portugese
- footer in production not calling the right css
- impressum returns 404

#Depoly information

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
