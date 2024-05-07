# Weekday Assignment

This project is a job listing application built using ReactJs, Material UI, CSS, and Redux. It allows users to view job listings, filter them based on various criteria, and search for specific job postings.

## How to Run Locally

1. **Clone the Repository**: Open your terminal and run the command:

   ```
   git clone https://github.com/Devansh-bharadwaj/weekday-assignment.git
   ```

2. **Install Dependencies**: Navigate into the project directory and run:

   ```
   npm install
   ```

3. **Start the Project**: Run the following command to start the project locally:

   ```
   npm start
   ```

## About the Project

This project utilizes ReactJs for the frontend development, Material UI for styling components, and Redux for managing global state. The application features a set of job cards displayed on the UI. As the user scrolls down, additional job cards dynamically load.

### Features

- **Filtering**: Users can filter job listings based on job role, location, minimum experience, and minimum base pay.
- **Search**: A search box is provided for users to search for job postings by typing the company name.
- **Dynamic Loading**: Job cards are dynamically loaded as the user scrolls down the page.

### Project Structure

- **src/utils/useGetData.js**: This file contains a custom hook for fetching data from an API and storing it in the Redux store.
- **src/utils/appStore.js**: This file initializes the Redux store.
- **src/utils/dataSlice.js**: Here, a Redux slice is created for adding data globally and managing filter values for filtering job listings.
- **src/components/Home.js**: This is the home page where i imported all the components.
- **src/components/JobCard.js**: This component includes the job card ui and have all the information inside it about the job.
- **src/components/ApplyButton.js**: This is a material ui button for applying the job.
- **src/components/Filter.js**: Here all the filtering elements are presents.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
