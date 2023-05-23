# Take home project - The Lord of the Rings SDK

## Important Documents

1. [TASK.md](TASK.md) explains the project
2. [DESIGN.md](DESIGN.md) explains the code architecture

## Requirements:

1. Git
2. MySQL Server CE
3. Node.js

## Installation:

1. Copy .env.example to .env and fill database details
2. Run `npm install -g nx prisma @nestjs/cli` to globally install useful CLI's.
3. Run `npm install`. It should also setup husky git hooks.
4. Run `husky setup` to setup git hooks.
5. Run `npx prisma migrate dev --name init` to initialize schema on the database
6. Optional: Run `npx prisma db seed` on local environment to seed database with random data.

## Starting Server

1. Run `nx serve api`.

## Running Tests:

1. Run `npm test`. It will run both Unit and E2E test (Note: Web server should be running before starting E2E tests)

## Helpful Links

1. [Postman collection of the API](https://www.postman.com/varunagw/workspace/lotr)
2. [Swagger documentation of the API](http://127.0.0.1:3000/docs)
3. [Github Repository](https://github.com/VarunAgw/LOTR)
