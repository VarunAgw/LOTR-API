# Take home project - The Lord of the Rings SDK

## Directory Structure

1. `/prisma/` contains prisma schema, seed data and migrations
2. `/packages/api/` contains the Nest.js package
3. `/packages/api/src/` contains different module for the API package
4. Unit test co-exist with the main code and contain `.spec` as part of their name. For example if a file is `movie.controller.ts`, then relevant unit test would be `movie.controller.spec.ts`.
5. All E2E tests are in `/packages/api-e2e/`

## Design Decisions

1. Use `nx` to create a monorepo. This will help the project down the road. We will also be able to shared interfaces between the frontend and backend easily
2. Avoided `yarn` after extensive testing for now until it's more stable and robust.
3. Split `quote` and `movie` under their own module to be future-proof
4. Used `typescript` to avoid future bugs.
