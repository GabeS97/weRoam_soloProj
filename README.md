# weRoam_soloProj
https://github.com/GabeS97/weRoam_soloProj.wiki.git

1. Clone this repository

   ```git clone https://github.com/GabeS97/weRoam_soloProj.wiki.git```

2. cd into the backend directory and install dependencies

    ```npm install```

3. cd into the frontend directory and install dependencies

    ```npm install```

4.  Create a .env file using the follwing format 
5.  
            PORT=5000
            DB_USERNAME=<database username>
            DB_PASSWORD= <create password>
            DB_DATABASE=<database name> 
            DB_HOST=localhost
            JWT_SECRET= <enter secret token>
            JWT_EXPIRES_IN= <enter token expiry> 

5.  Create a user in psql based on what the foramt given above: 
6.  Enter psql onto your terminal and create a user using the follwing command: 
   
    ```"CREATE USER <username> PASSWORD '<password>' CREATEDB"```

6. Create the database, migrate, and seed

    ```npx dotenv sequelize db:create```

    ```npx dotenv sequelize db:migrate```

    ```npx dotenv sequelize db:seed:all```

7. Open up two terminals one for the backend and another for the frontend directories, npm start on each terminal

8. Sign in or you may use demo id to access the ewebstie
