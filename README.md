# ICTWEB430 - Produce server-side script for dynamic web pages 2022

Created by Michael Hermann
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

## Contents

- Description
- Installation instructions
- Run Application
- Usage Guide
- Further Help

## Description

You have been asked to develop a website for a local Veterinarian practice. This project should be coded using ASP.NET in an IDE such as Visual Studio or VS Code.

The website is a basic shop front type website to promote the Vet’s business. You are provided with information about the Vet and some other resources to complete this task. The Vet is a dog specialist but does treat other suburban pets. The Vet does not have any rural clients although is happy to see farm class animals as required.

The client would like to a simple site - around 4 pages, but happy if more are required for your design.

1.        A title page with the Business information with links to the other 3 pages.

2.        The Second page is about its people and their Biographies.

3.        The third page is about the services provided.

4.        The last page has the location information and a map.

The client, who is a dog specialist, would also like each dog owner to be able to add an account to become a member of the website.

The account creation process will collect:

First name, Surname, contact phone number, email address, suburb, postcode, pet name, pet breed, pet age, pet gender.

## Installation instructions

1. Check Node `npm -v` (If not found install node/newest version)
2. Install Angular Client `npm install -g @angular/cli`
3. Install Node Packages `npm i`
4. Add Install Angular Material `ng add @angular/material`

## Run Application

Ensure there are 2 seperate terminal windows open
In first terminal ensure directory is the game folder TwoUp2.
Use `cd api` to navigate to backend folder in the second terminal.

To run database `node server.js`, database should start listening on port 5000. Messgaes reading 'Server is running on port 5000' and 'Connection to database established' should be displayed in the console
To run application `ng serve -o`, Navigate to `http://localhost:4200/`.

If connected to database, the users and game results will both be stored with the myAQL database in seperate tables.

## Usage guide

1. Run application
2. Run database
3. Navigate through pages
4. Login using the email and password
5. View user details
6. View pet details
7. Logout

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
