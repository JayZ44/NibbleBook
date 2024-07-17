# NibbleBook

Welcome to NibbleBook, the place for all of your strange food curiosities and cravings! Explore out library of the most unusual foods from around the world, form the delicious to the dastardly!

### Getting Started

To get started with the Strange Food API, follow these steps!:

- Fork and Clone the repository.

- Install dependencies with "npm install"

- Initialize the database with "npm run db:init" and seed it with "npm run db:seed". The run "npm run start" to start up the server.


### Database Setup

1. **Open your terminal and connect to PostgreSQL:**

```bash

psql -h localhost -p 5432 -U postgres```


2. Create the database:


```CREATE DATABASE snacks_dev;```


3. Run the schema.sql file to create the necessary tables:



psql -h localhost -p 5432 -U postgres -d snacks_dev -f path/to/schema.sql


4. Run the seed.sql file to populate the database with initial data:

psql -h localhost -p 5432 -U postgres -d snacks_dev -f path/to/seed.sql


5. env configuration:



PORT=3999
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=snacks_dev
PG_USER=postgres
```



