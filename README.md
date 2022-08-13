<div id="top"></div>
<br />

<div>
        <img src="./client/public/screenshot.png" alt="example screenshot">
</div>

<br />

## MERN CRUD

A simple users/teams dashboard using the MERN stack. Full CRUD operations with auth.

<br />

## Built With

-   [React](https://reactjs.org/)
-   [React Query](https://tanstack.com/query/v3/)
-   [Tailwind](https://tailwindcss.com/)
-   [Express](https://expressjs.com/)
-   [MongoDB](https://mongodb.com/)
-   [Mongoose](https://mongoosejs.com/)
-   [JWT](https://www.npmjs.com/package/jsonwebtoken)

<br />

## Getting Started

To get a local copy up and running follow these simple example steps.

1. Clone the repo
    ```sh
    git clone https://github.com/huffmanks/strata.git
    ```
2. Client

    1. Install packages
        ```sh
        cd client
        yarn
        ```
    2. Update environment variables

        ```sh
        touch .env.development.local

        // .env.development.local

        REACT_APP_NAME={APP_NAME}
        REACT_APP_BASE_AUTH_API_URL=http://localhost:{PORT}/api/auth/
        REACT_APP_BASE_PRIVATE_API_URL=http://localhost:{PORT}/api/private/
        ```

    3. Run
        ```sh
        yarn start
        ```

3. Server

    1. Install packages
        ```sh
        cd server
        yarn
        ```
    2. Update environment variables

        ```sh
        touch config.env

        // config.env

        PORT=5000
        MONGO_URI=mongodb://127.0.0.1:27017/{DB_NAME}
        SERVER_URL=http://localhost:{PORT}
        JWT_REFRESH_TOKEN_SECRET=d
        JWT_REFRESH_TOKEN_EXPIRE=2hr
        JWT_ACCESS_TOKEN_SECRET=d
        JWT_ACCESS_TOKEN_EXPIRE=2d
        ```

    3. Run
        ```sh
        yarn server
        ```
