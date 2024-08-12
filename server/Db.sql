CREATE DATABASE IF NOT EXISTS flashcard_db;

USE flashcard_db;

CREATE TABLE IF NOT EXISTS flashcards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question VARCHAR(255),
  answer TEXT
);
