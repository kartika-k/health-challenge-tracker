# health-challenge-tracker  💪

# PROJECT OVERVIEW 

The Health Challenge Tracker is a single-page application (SPA) built with Angular 14+. It allows users to track their workout activities by adding user names, workout types, and workout minutes. The application provides functionalities to display, search, filter, and paginate the workout records. Additionally, it includes charts to display workout progress. 

# 🌟 Key Features:

- Add User Workout: Input fields to add user name, workout type, and workout minutes.
- Display Workout List: Displays the list of user workouts in a table grid format.
- Search by Username: Allows searching workouts by user name.
- Filter by Workout Type: Allows filtering workouts by workout type.
- Pagination: Adds pagination for the workout list with more than 5 users.
- Workout Progress Charts: Displays workout progress using charts.
- Unit Tests: Includes unit tests for one component and one service with 100% code coverage.

# Libraries and Tools Used

-Angular 14+: Framework for building the SPA.

-Angular Material / PrimeNG: UI component libraries.

-Tailwind CSS: For styling the application.

-Chart.js: For displaying workout progress charts.

# Setup and Installation
1. Setup and Installation :
   
   git clone <repository-url>
   cd health-challenge-tracker
   
2. Install Dependencies:
   
    npm install
   
3. Run the Application:
    ng serve

# Edge Cases

-Handles scenarios where no users are added.
-Manages empty search results gracefully.
-Validates input fields to prevent invalid data entry.

🌐 Hosted On:
The application is hosted on Netlify, and you can access it here - 
https://fitnessbudyy.netlify.app/
