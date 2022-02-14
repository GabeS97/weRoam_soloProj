# weRoam_soloProj
https://github.com/GabeS97/weRoam_soloProj.wiki.git

1. Clone this repository

   ```git clone https://github.com/GabeS97/weRoam_soloProj.wiki.git```

2. CD into the backend directory and install dependencies

    ```npm install```

3. CD into the frontend directory and install dependencies

    ```npm install```

4.  Create a .env file based on the .env.example given

5.  Create a user in psql based on your .env DB_USERNAME

    ```psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"```

6. Create the database, migrate, and seed

    ```npx dotenv sequelize db:create```

    ```npx dotenv sequelize db:migrate```

    ```npx dotenv sequelize db:seed:all```

7. Open up two terminals and cd into the backend and frontend directories, npm start on each terminal

