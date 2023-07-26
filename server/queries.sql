CREATE TABLE
    users (
        id_user SERIAL PRIMARY KEY,
        user_name VARCHAR(20) NOT NULL,
        email VARCHAR(25) NOT NULL,
        password VARCHAR(150) NOT NULL,
        role VARCHAR(10) NOT NULL,
        logged BOOLEAN NOT NULL,
        registered_date DATE NOT NULL DEFAULT CURRENT_DATE
    );

    CREATE TABLE
    profile (
        id_profile SERIAL PRIMARY KEY,
        id_user INTEGER,
         Foreign Key (id_user) REFERENCES users(id_user),
        level_of_activity level_of_activity_enum
            CONSTRAINT chk_level_of_activity 
            CHECK (level_of_activity 
            IN ('none', '1 day per week', '3 days per week', '5 days per week', '7 days per week')),
        sports_preferences TYPE sports_preference_enum AS ENUM (
            'basketball',
            'football',
            'tennis',
            'swimming',
            'walk',
            'running'),
        diet /* select */,
        city VARCHAR(10) NOT NULL,
        goal /* select */,
        height INTEGER,
        weight INTEGER,
        gender /* (select) */,
        age INTEGER,
        imc /* calculo */,
    );