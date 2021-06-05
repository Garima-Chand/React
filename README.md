# Employee Management Application [CRUD]

This project has a login page (with userid and password fields) which authenticates the user using database in MySQL.User can view, create, add, delete or update the data after the authentication.
**[NodeJs,React,MySQL]**

## Project's ScreenShots

### `The login Page`
![image](https://user-images.githubusercontent.com/63467994/120751716-1f549c80-c526-11eb-9b89-23eb5bd8154f.png)

**Here, user can perform two actions**

**1. Add a user**: user can enter new credentials and add a new employee into the system.

![image](https://user-images.githubusercontent.com/63467994/120752082-af92e180-c526-11eb-925d-5b3e4472fa25.png)

**2. Login**
: If entered credentials are valid

![image](https://user-images.githubusercontent.com/63467994/120752325-216b2b00-c527-11eb-9f0d-ad16e25932ce.png)

: If entered credentials are invalid or null

![image](https://user-images.githubusercontent.com/63467994/120752359-2def8380-c527-11eb-94c2-9c970b8c3a14.png)

### `Employee Data`

This page displays details of all the employees in the database after user's credentials have been verified.

![image](https://user-images.githubusercontent.com/63467994/120754644-968c2f80-c52a-11eb-8c5a-424fbcc372ee.png)

Here, User can ***Delete or Update*** the data of employees

~`Delete` : Clicking this button deletes the record of the respective employee.

~`Retrieve Data` : Clicking this button fills the form underneath the Employee Data, which can be edited to update the data.

~`Update Data` : Clicking this button will update the record of employees with the updated data.

~`Refresh Data` : Clicking this button will refresh the record of employees.

~`Go Back` : Clicking this button will redirect the user to login form.


*** *********************************************************************************************************************************************************************** ***



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

