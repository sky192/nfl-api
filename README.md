# NFL API

## Instructions
In the initial commit to this project, you have been provided data about NFL teams. Over the course of the next couple of classes we will use this data to build up a REST API. These exercises will be completed in class.

### Part One
In a branch called `part-one-answer`, you are tasked with creating an Express server capable of responding to the following routes:

* GET /teams - Return the full list of teams
* GET /teams/ID - Returns the team associated with that ID, where ID is a number (ex. `/teams/12`)

### Part Two
In a new branch called `part-two-answer`, continuing from Part One, you are tasked with creating a handler for the following route:

* POST /teams - Create a new team from the data provided and respond with the newly created team, should error if all fields are not provided

#### Part Two Extra Credit
Update your POST /teams route so that the user does not provide the ID and instead your code determines the next ID in line and uses that for the team being created.

### Part Three
In a new branch called `part-three-answer`, continuing from Part Two, you are tasked with creating a `teams.sql` file which contains the SQL code necessary to create a database called `nfl` with a table called `teams` which contains all of the teams in the `teams.js` file. Examine the data carefully before creating the design of your table.

### Part Four
In a new branch called `part-four-answer`, continuing from Part Three, you are tasked with updating all of your routes to utilize your model instead of the `teams.js` data file. When you are done with your updates, you should no longer need to import the `teams.js` data file in any of your code. Do NOT delete the file.

### Part Five
In a new branch called `part-five-answer`, continuing from Part Four, you are tasked with creating unit tests for each of your controllers. Your tests should stub out any database calls made by your controllers.

### Part Six
In a new branch called `part-six-answer`, continuing from Part Five, you are tasked with refactoring your code for robustness and DRYness. Utilize what you have learned about sandboxes, try/catch, beforeEach, and afterEach to make your code better.
