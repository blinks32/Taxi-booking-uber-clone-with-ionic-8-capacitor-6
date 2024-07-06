-- ride_hailing_app.sql

-- Drop tables if they exist
DROP TABLE IF EXISTS drivers;
DROP TABLE IF EXISTS riders;
DROP TABLE IF EXISTS requests;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS known_places;
DROP TABLE IF EXISTS history;

-- Create drivers table
CREATE TABLE drivers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    car_model VARCHAR(255),
    car_number VARCHAR(255),
    onlineState BOOLEAN DEFAULT FALSE
);

-- Create riders table
CREATE TABLE riders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uid VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    imgUrl VARCHAR(255)
);

-- Create requests table
CREATE TABLE requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rider_id INT,
    driver_id INT,
    start_location VARCHAR(255),
    end_location VARCHAR(255),
    start_time DATETIME,
    end_time DATETIME,
    status ENUM('pending', 'accepted', 'completed', 'cancelled') DEFAULT 'pending',
    cancel BOOLEAN DEFAULT FALSE,
    countdown INT,
    FOREIGN KEY (rider_id) REFERENCES riders(id),
    FOREIGN KEY (driver_id) REFERENCES drivers(id)
);

-- Create messages table
CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    request_id INT,
    msg TEXT,
    from_user VARCHAR(255),
    myMsg BOOLEAN,
    fromName VARCHAR(255),
    FOREIGN KEY (request_id) REFERENCES requests(id)
);

-- Create cards table
CREATE TABLE cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rider_id INT,
    card_number VARCHAR(20) UNIQUE NOT NULL,
    card_holder_name VARCHAR(255),
    expiration_date DATE,
    cvv VARCHAR(4),
    FOREIGN KEY (rider_id) REFERENCES riders(id)
);

-- Create known_places table
CREATE TABLE known_places (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rider_id INT,
    place_name VARCHAR(255),
    address VARCHAR(255),
    FOREIGN KEY (rider_id) REFERENCES riders(id)
);

-- Create history table
CREATE TABLE history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rider_id INT,
    driver_id INT,
    request_id INT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (rider_id) REFERENCES riders(id),
    FOREIGN KEY (driver_id) REFERENCES drivers(id),
    FOREIGN KEY (request_id) REFERENCES requests(id)
);
