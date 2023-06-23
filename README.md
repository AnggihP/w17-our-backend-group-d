# Our Backend - BookmarX

BookmarX is a simple API example inspired by [Raindrop.io](https://raindrop.io) to manage the bookmarks we've created made with [NestJS](https://github.com/nestjs/nest) framework using its TypeScript starter repository.

## Team

| Name           | Role                            |
| -------------- | ------------------------------- |
| Niken Hapsari  | Team Lead and Backend Developer |
| Anggih Pratama | Backend Developer               |
| Nurdin Beta    | Backend Developer               |

## Architecture Design

### Diagram Database

![Diagram Database](assets/diagram-db.png)

### System Design

![gcp-diagram](/assets/gcp-diagram.svg)

## Endpoints

| HTTP   |    Endpoint    |           Description |
| :----- | :------------: | --------------------: |
| POST   |  /auth/signup  |         Register User |
| POST   |  /auth/signin  |            Login User |
| GET    |     /users     |         Get All Users |
| PATCH  |     /users     |       Edit User by Id |
| GET    |   /bookmarks   |     Get All Bookmarks |
| GET    | /bookmarks/:id |    Get Bookmark by Id |
| POST   |   /bookmarks   |       Create Bookmark |
| PATCH  | /bookmarks/:id |   Edit Bookmark by Id |
| DELETE | /bookmarks/:id | Delete Bookmark by Id |
| GET    |     /tags      |          Get All Tags |
| GET    |   /tags/:id    |         Get Tag by Id |
| POST   |     /tags      |            Create Tag |
| PATCH  |   /tags/:id    |        Edit Tag by Id |
| DELETE |   /tags/:id    |      Delete Tag by Id |

## Prepare Database

Make sure the database is ready before doing any dependency installation.

Run Docker and run Docker Compose to run the PostgreSQL instance:

```sh
docker-compose up -d
```

Docker Images: https://hub.docker.com/r/nikenhpsr/bookmarx

Edit `.env` file:

```sh
DATABASE_URL="postgres://groupd:password@database:5432/bookmarx"
JWT_SECRET="super-secret"
```

## Links

```
note: for dev purpose
104.197.135.70
```

Custom Domain: https://bookmarx.nikenhpsr.site/docs

Railway: https://bookmarx-api-production.up.railway.app/docs

Render: https://bookmarx.onrender.com/docs

Status Monitor: https://bookmarx.betteruptime.com/ or https://bookmarks.betteruptime.com/

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# debug mode
$ pnpm run start:debug
```

## Test

```bash
# run tests
$ pnpm run test
```

## API Documentation with Swagger

After running the server on local, open <http://localhost:4000/docs> on your browser. Or if already deployed, check the `/docs` route.
