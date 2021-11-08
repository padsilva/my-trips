# :earth_africa: My Trips

A simple project to show some of my favorite places.

## :warning: Getting Started

### GraphCMS

This project uses [GraphCMS](https://graphcms.com/), so you need to create an account there first.

#### 1. Create Project

First, you need to create a project, giving a name and a pick a region of your choise.

#### 2. Create Model and Fields

After that, you need to create the Schema and Fields. From the sidebar, navigate to the Schema editor and follow the steps:

- Create a new Model called `Place`
- Add the following fields:

  - `Single line text` as `name`
  - `Slug` as `slug`
  - `Map` as `location`
  - `Rich text` as `description`
  - `Rich text` as `reference`
  - `Asset picker` as `gallery`
  - `Boolean` as `visited`

- Create a new Model called `Page`
- Add the following Fields:
  - `Single line text` as `heading`
  - `Slug` as `slug`
  - `Rich text` as `body`

#### 3. Add Content

Now add some content to the new models and don't forget to `publish`!

#### 4. Authentication

In order to create a token access, go to `Settings > API Access`, inside this page, find `Permanent Auth Tokens`,
create a Token Name and mark all queries possible. Save and get the token.

### NextJS

After creating your account on [GraphCMS](https://graphcms.com/) and following the steps above, you just need to execute the following steps:

- Clone the project

```bash
  git clone https://github.com/padsilva/my-trips
```

- Go to the project directory

```bash
  cd my-trips
```

- Install dependencies

```bash
npm install
# or
yarn install
```

- Rename the `.env.example` to `.env.local` (if you plan to run locally) and edit the keys there.

- Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## :computer: Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages

## :construction_worker: Author

[@padsilva](https://www.github.com/padsilva)

## :mailbox: Feedback

If you have any feedback, please reach out to me at pauloalexandreduartesilva@gmail.com.
