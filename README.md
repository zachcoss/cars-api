# Cars API

## Installation

- Run `docker build -t cars/cars-api .` within the main directory.
- Then run `docker run -p 3000:3000 cars/cars-api`.
- Make a request to http://localhost:3000/cars.

## Description

- The express web server configuration is located within **./app.js**.
- The router configuration is located within **./src/router.js**.
- The endpoint functionality is located within **./src/routes/**.

## Testing

- The testing functionality is located within **./test/** and can be run with `npm test`.