# Smart Games API

This is the back-end for the Smart Games project, an API developed for the fictitious Smart Games game store. The purpose of this project is to provide a robust platform for managing games, stores, and platforms via an API interface.

The project was built with scalability, maintainability, and future feature integration in mind. Best coding practices were applied to ensure clean and well-structured code.

## Tech Stack

<!--- # "Verify icons availability here https://github.com/tandpfun/skill-icons" -->

[![My Skills](https://skillicons.dev/icons?i=js,nodejs,express,sequelize,npm,mysql)](https://skillicons.dev)

## Cloning

How to clone your project

```bash
git clone https://github.com/MatheusHenrique129/smart-game.git
```

## Getting Started

1. **Install Dependencies**:

```bash
npm install
```

2. **Database Setup**:

- Import the MySQL database.
  Update the `database.json` file to match your local database settings.
- type: If you're not using MySQL, adjust it accordingly.
- **host**, **username**, **password**, **database**: Update with your environment credentials.

3. **Create the Database**:

```bash
npx sequelize db:create
```

4. **Run Migrations**:
   To create necessary tables and relationships, run:

```bash
npx sequelize db:migrate
```

5. **Seed the Database**:
   Populate the database with initial data:

```bash
npx sequelize db:seed:all
```

6. **Start the Server**: Once the database is set up and dependencies are installed, start the application on port 8000:

```bash
npm start
```

#### Available Endpoints

- GET [`http://localhost:8000/games`](http://localhost:8000/games): List of Games
- GET [`http://localhost:8000/stores`](http://localhost:8000/stores): List of Stores
- GET [`http://localhost:8000/search`](http://localhost:8000/search): Search Games by title or category
- GET [`http://localhost:8000/platforms`](http://localhost:8000/platforms): List of Platforms

### Documentations that might help

- [📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)
- [💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
