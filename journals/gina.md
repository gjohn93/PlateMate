# Journal

## Week 3:

### Tuesday 1/10/2023

Today we were able to complete the CRUD functions for allergies and diet_restrict tables. We changed the account_id FK on both tables to be unique and on delete cascade so that if the parent (account) table is deleted, the child (allergies & diet_restrict) table will be deleted.

We are now going to work on the get one restaurant from the Yelp API using a unique API call.

### Monday 1/9/2023

Today we were able to finish our update function. We also were able to make a call to our Yelp API using the FastAPI Swagger tool as a get function. We had to create a header which we called along with the url and a gitignored keys.py file. After lunch, we are going to work on custom url instead of a preset one which we used for testing, and also work on creating additional tables with foreign key relationships.

It is now after lunch, and we were able to set and test custom filters on the URL for our Yelp API call! We also made an allergies and diet_restrict table. We are currently working on the create function for allergies which we are having issuses with because of the foreign key.

## Week 2:

### Friday 1/6/2023

Today we were able to get JWT authentication working to be able to create an authenticated user! We originally had a user table which we changed to an accounts table in order for it to work with the jwt library we were provided. We had to change all of our user variables and functions to accounts to ensure that we could get accounts to work. We also got all functionality for Accounts to work outside of update (CRD from CRUD).

### Thursday 1/5/2023

We started today with the plan of working on JWT authentication. To do so, we had to first create our pydantic models for User including UserIn, UserOut, and UserQueries. Inside UserQueries, we created the retrieve functions from CRUD for the User table. We learned how to alter a column using the ALTER command in SQL and added a row using the PgAdmin tool. We were able to see this data using the router endpoints that we created today as well. We started on Authentication, but are running into issues with our users.py file specifically with the UserQueries.

### Wednesday 1/4/2023

We started setting up our project today with code! We set up the YAML file to have multiple microservices (including GHI for React, API, and Postgres database) essentially from scratch. We also decided on and created a Postgres database named platemate. Additionally, we set up pgadmin and are playing with that tool. We also set up our first migration with our User table, and we can see the fields that we set up as well.

### Tuesday 1/3/2023

We completed our Figma to include the endpoints for our Routers. We also worked with the Yelp API to determine additional filters using the Yelp categories for “restaurants”. We chose restaurants as our main term filter instead of food because it looks like restaurant term includes some of the food categories as well. We also forked the main project from the SJP directory. We then manually copied the files into PlateMate and should have a working directory. We haven’t cloned individually because we are still trying to figure out what to do with our database at this point.

## Week 1

###Thursday 12/22/22
We learned we had to change our name last night because Foodify is already taken. We updated our name to PlateMate instead! We don't have too much information on the backend yet, but we are going to use some of the break to map out more of what the yelp API can give us. We also found out yesterday that an existing app called Restaurant Roulette is also using the Yelp API, so I am definitely curious to look more into the filtering capabilities that they tapped into that we can as well. We also started working on the API framework for our app.

### Wednesday 12/21/22

Today we are working on completing the wireframe using the Figma tool. Right now we have the following pages setup with landing page, signup and login modals, questionnaire page, restaurant detail page, settings and a profile page. We don't have the API setup yet, so we are mostly working on frontend while also testing the Yelp API to see what kind of data we can get from it. We also decided on our name as Foodify!

### Tuesday 12/20/22

We continued working on our wireframe today. We are learning more about the capabilities of Figma which is exciting but also slowing us down a little to keep things organized. It is looking great right now with the color theme as well as some of the other features.

### Monday 12/19/22

We worked on a backend design with Excalidraw. This is a bit challenging to do right now without FastAPI, but we are trying to get a general idea of our project. We also started our wireframe with Figma! This is a new tool to me, but has so much functionality!