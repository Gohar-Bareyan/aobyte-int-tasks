## XAMPP control panel

Start the XAMPP control panel and ensure that the Apache and MySQL services are running.

## Database Setup

Before running the application, create a new database with the following details:

Database Name: `posts`

## Running Migrations

To run the migrations and create the necessary tables in your database, follow these steps:

Open a command-line interface (CLI) or terminal.
Navigate to the project directory.
Run the following command to execute the migrations:

- `npx sequelize-cli db:migrate`

## Running Seeds

To populate the database with sample data, follow these steps:

Open a command-line interface (CLI) or terminal.
Navigate to the project directory.
Run the following commands to seed the posts table:

- `node .\seeders\postsSeed.js`
- `node .\seeders\postCommentsSeed.js`


## Running the server

- `npm start`