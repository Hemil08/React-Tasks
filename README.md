**STATE MANAGEMENT IN REACT**

This folder, state management in react, demonstrates various state management techniques using React. Each task focuses on implementing specific functionalities to dynamically manage state and interact with React components.

Features

1. Toggle Visibility

Task: A button toggles the visibility of some text.

Implementation: useState is used to track whether the text is visible or hidden. Clicking the button toggles this state.

2. Change Background Color

Task: A button changes the background color of a div when clicked.

Implementation: useState manages the current background color. Multiple colors are cycled through on button clicks.

3. Simple Form Handling

Task: A form with an input field and a "Submit" button captures and displays the entered value.

Implementation: useState captures the input value, which is displayed when the form is submitted.

4. Character Counter

Task: A textarea displays the number of characters typed in real-time.

Implementation: useState tracks the text entered and updates the character count dynamically.

5. Like Button

Task: A "Like" button toggles between "Liked" and "Unliked" states.

Implementation: useState tracks whether the button is liked or not and updates the label accordingly.

6. Shopping Cart

Task: A shopping cart allows items to be added or removed.

Implementation: useState manages an array of items, updated when items are added or removed.

7. Show Password Feature

Task: An input field for a password with a checkbox labeled "Show Password."

Implementation: useState toggles whether the password is visible or hidden based on the checkbox state.

8. Simple To-Do List

Task: A to-do list allows users to add tasks.

Implementation: useState manages an array of tasks, with new tasks added via an input field and displayed in a list.

9. Light/Dark Mode Toggle

Task: A light/dark mode toggle button.

Implementation: useState tracks whether the app is in light or dark mode, changing styles dynamically.

10. Emoji Picker

Task: A list of emoji buttons displays the selected emoji when clicked.

Implementation: useState tracks the selected emoji and displays it below the buttons.

-----------------------------------------------------------------------------------------
**DATA FETCHING & SIDE EFFECTS**

This project contains a suite of tasks designed to showcase different functionalities in React, including data fetching, state management, local storage interaction, and UI responsiveness. Each task is implemented as a React component, demonstrating best practices in React development.


Running the Project

Task 1: Fetch Data and Display as Cards

Objective: Fetch data from the JSONPlaceholder API and display it in card format.

API Endpoint: https://jsonplaceholder.typicode.com/photos

Features:

Displays photos in card format with an image and title.

Includes loading and error states for enhanced UX.

Task 2: Fetch Data and Store in Local State

Objective: Fetch comments data and store it in the component’s local state.

API Endpoint: https://jsonplaceholder.typicode.com/comments

Features:

Fetches data and stores it in the state.

Displays comments in a list format.

Task 3: Polling for Data Updates

Objective: Implement a polling mechanism to fetch data periodically.

API Endpoint: https://jsonplaceholder.typicode.com/posts

Features:

Fetches data every 5 seconds.

Automatically stops polling when the component unmounts.

Task 4: Fetch and Display Posts

Objective: Fetch and display a list of posts.

API Endpoint: https://jsonplaceholder.typicode.com/posts

Features:

Displays posts with titles and body content.

Includes a loading message during data fetching.

Task 5: Fetch Data on Button Click

Objective: Fetch data only when a button is clicked.

API Endpoint: https://jsonplaceholder.typicode.com/todos

Features:

Fetches and displays to-do items in a list upon button click.

Task 6: Countdown Timer

Objective: Create a countdown timer that decreases a number every second.

Features:

Starts at 10 and counts down to 0.

Stops automatically at 0 and displays a message.

Task 7: Sync State with Local Storage

Objective: Save and retrieve state from local storage.

Features:

Saves a text input value to local storage whenever it changes.

Retrieves the saved value on initial render and updates the state.

Task 8: Changing Background Color

Objective: Change the background color based on user selection.

Features:

Provides a dropdown for color selection.

Changes the background color dynamically based on the selected value.

----------------------------------------------------------------------------

**REACT ROUTING**

1. Basic Route Setup Exercise
Create a simple React app with three components: Home, About, and Contact.
Use React Router to navigate between these components using different routes.

2. Navigation Bar Exercise
Implement a navigation bar using Link or NavLink components.
Ensure users can click on links to navigate between pages (Home, About, Contact).

3. Nested Routes Exercise
Create a page called About with nested routes for Team and Company.
Use nested routes to display different sections (Team and Company) when the user is on the About page.

4. Route Parameters Exercise
Create a User component that takes a user ID from the URL parameter (e.g., s/user/1).
Display the user ID dynamically in the User component.

5. 404 Page Exercise
Create a NotFound component that displays a 404 error message.
Set up a route that catches undefined paths and displays the NotFound component.

6. Programmatic Navigation Exercise
Implement a button on the Home page that navigates to the Contact page when clicked using the useNavigate hook.

7. Protected Route Exercise
Create a protected route that only renders if a user is "logged in" (use a boolean flag to simulate authentication).
If the user is not logged in, redirect them to a login page.

8. Lazy Loading Routes Exercise
Set up lazy loading for one or more routes (e.g., load the About page only when it's visited).
Use React.lazy() and Suspense to achieve this.

9. Route Redirection Exercise
Create a redirect from the path /home to / (the Home page).
Implement a route that automatically redirects when accessed.

10. Scroll Restoration Exercise
Implement a feature where the scroll position is preserved or reset when navigating between routes.

11. Query Parameters Exercise
Create a Search page that reads a query parameter (e.g., /search?query=react).
Display the search term dynamically based on the URL’s query parameter.

12. Breadcrumb Navigation Exercise
Create a breadcrumb navigation system that shows the current location in the app (e.g., Home > About > Team).



How to Use

Navigate to the folder.

Install dependencies and start the React development server:

cd "Folder Name"
npm install
npm start

Project Structure

state management in react
├── src
│   ├── components  # React components for each task
│   ├── App.js      # Main React app
│   └── index.js    # Entry point
└── package.json    # React project configuration

Technologies Used

React, JSX (for State Management)

Screenshots

Add relevant screenshots of the implemented tasks to help users understand the functionalities.

Future Enhancements

Add animations for better UI/UX.

Implement unit tests for React components.

Refactor code for modularity and reusability.
