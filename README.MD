## Getting started

First, install [Node.js ](https://nodejs.org/en/download/). We won't actually be running node, but we do want its package manager, npm. *Note: This is only a build dependency and is not required for production servers.*

All commands below are from your terminal or command line

  1. **Clone the project.** `git clone https://github.com/piyushpalod/HealthClues.git`
  1. **Install the dependencies.** `npm install`
  1. **Build and run.** `gulp`
    * This requires [Gulp](http://gulpjs.com/) to be installed globally with `npm install gulp -g` or you can run gulp locally with `node .\node_modules\bin\gulp.js`

This will build the AngularJS app and open it in your default browser.


### File organization best practices  
File organization is based on the **LIFT** principle.  
 * **L**ocate our code easily.
 * **I**dentify code at a glance.
 * **F**lat structure kept as long as possible.
 * **T**ry to stay DRY