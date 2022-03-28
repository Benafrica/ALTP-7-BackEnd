![example workflow](https://github.com/Benafrica/ALTP-7-BackEnd/actions/workflows/node.js.yml/badge.svg)
![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/Benafrica/a78d22b653f9eb35483bd62a502e9777/raw/ALTP-7-BackEnd__heads_main.json)

# ALTP 7 My Brand BackEnd

### My Brand BackEnd Server App & DataBase Connection

- Express Server Setup & Connection `./src/index.js`

## Usage

## (For development):

### Environment variables

- Create a .env file and insert referring values as shown in .env.example
- You can define many variables in .env as you wish but remember to include them in config/envConfig file to be validated on the start of application
  -New environment variables should also be stated in .env.example
- In Your .env file `NODE_ENV` Variable should be equal to `development`
- Add A Sample In .env.example For Any New Environment Variable Created

### How To Initialize The App

- Open Your Terminal & Run The Following Commands:
- `npm i`
- `npm run dev`

### API Documentation:

- Open your Browser and visit `http://localhost:<port>/api-docs`
- ### N.B: `<port>` is equal to the port you set in .env file.

### All Endpoints:

#### BLOG CRUD Operations

- `GET` - `http://localhost:<port>/admin/blog_articles` - Returns A List Of All Blog Articles
- `POST` - `http://localhost:<port>/admin/blog_articles` - Creates A New Article
- `GET` - `http://localhost:<port>/admin/blog_articles/{id}` - Returns A Blog Article By Id
- `PATCH` - `http://localhost:<port>/admin/blog_articles/{id}` - Updates A Blog Article By Id
- `DELETE` - `http://localhost:<port>/admin/blog_articles/{id}` - Deletes A Blog Article By Id

#### Message Querries CRUD Operations

- `GET` - `http://localhost:<port>/admin/messages` - Returns A List Of All Message Querries
- `POST` - `http://localhost:<port>/admin/messages` - Creates A New Message Querry
- `GET` - `http://localhost:<port>/admin/messages/{id}` - Returns A Message Querry By Id
- `DELETE` - `http://localhost:<port>/admin/messages/{id}` - Deletes A Message Querry By Id

#### Authentication Operations

- `POST` - `http://localhost:<port>/auth/register` - Registers A User
- `POST` - `http://localhost:<port>/auth/login` - Logs In A User
- `DELETE` - `http://localhost:<port>/auth/logout` - Logs Out A User
