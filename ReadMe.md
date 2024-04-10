# Simple Express API

This is an Express.js application that provides an API endpoint to retrieve open positions for a specific department from the Actian Careers website.

## Features

- Scrapes the Actian Careers website to fetch open positions
- Filters positions based on the specified department
- Returns the department name and an array of open positions
- Handles errors and provides appropriate error responses

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (version 12 or above)
- npm (Node Package Manager)
- TypeScript
- ts-node

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/asolpshinning/test-fetch.git
   ```

2. Navigate to the project directory:


3. Install the dependencies:

   ```
   npm install
   ```

## Usage

1. Start the server:

   ```
   npm start
   ```

2. Make a GET request to the `/positions/:department` endpoint, replacing `:department` with the desired department name. For example:

   ```
   http://localhost:3000/positions/engineering
   ```

3. The API will respond with a JSON object containing the department name and an array of open positions:

   ```json
   {
        "department": "engineering",
        "openPositions": [
        "C Engineer - Bangalore/Pune",
        "C++ Engineer - Pune",
        "Cloud DevOps Engineer",
        "Core Java Developer - Pune",
        "Engineering Intern, ZEN Hardware",
        "Engineering Intern, ZEN Software",
        "Senior Cloud Engineer - Remote",
        "Senior Software Developer (Zen Engine)",
        "Software Developer DBMS QA - Bangalore",
        "Sustenance Engineer - Actian Data Platform - Bangalore/Pune",
        "Technical Writer - Bangalore",
        "Zen Quality Assurance Engineer - Bangalore/Pune",
        "Zen Sustaining Engineer - Bangalore/Pune"
        ]
        }
   ```

## Error Handling

The API handles the following error scenarios:

- If the `department` parameter is missing, it returns a 400 Bad Request response with an error message.
- If no open positions are found for the specified department, it returns a 404 Not Found response with an error message.
- If an error occurs while fetching data from the Actian Careers website, it returns a 500 Internal Server Error response with an error message.

## Dependencies

The application uses the following dependencies:

- Express.js: Web framework for building the API
- Axios: HTTP client for making requests to the Actian Careers website
- Cheerio: Library for parsing and manipulating HTML

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
