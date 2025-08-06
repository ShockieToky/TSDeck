# 🃏 TSDeck : Your Ultimate “One Piece Card Game” Companion

This repository contains the source code for a modern web application, built with a robust Symfony backend and a dynamic React frontend. It's designed to **offer a comprehensive database of One Piece cards, ensuring you have all the information you need at your fingertips. Manage your collection and build your decks with ease and prepare for epic battles.**

## ✨ Features

* **Comprehensive Card Database:** Access detailed information on a vast collection of One Piece cards.

* **Collection Management:** Easily track and organize your personal card collection.

* **Deck Builder:** Create and refine your One Piece card decks for strategic gameplay.

* **Community Features:** Launching soon, including forums, deck sharing, player profiles, and social interactions to connect with fellow players and share strategies.

* **Play Features:** Rolling out soon, enabling real-time matches, tournaments, and ranked play with friends to test your skills!

## 🛠️ Technologies Used

This project leverages a powerful stack to deliver a seamless user experience and a scalable backend.

### Backend

* **Symfony 7.x:** A high-performance PHP framework for building robust web applications and APIs.

* **Doctrine ORM:** For database interaction and object-relational mapping.

* **PHP 8.x:** The scripting language powering the backend.

### Frontend

* **React 18.x:** A JavaScript library for building user interfaces, providing a fast and interactive experience.

* **Webpack Encore:** Integrates Webpack into Symfony projects for efficient asset management and React compilation.

* **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.

### Database

* **MySQL:** A powerful, open-source relational database system.

### Bug Tracking

* **Jira:** Used as our internal project management tool for tracking and fixing issues.

## 💻 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

* **PHP:** Version 8.1 or higher.

* **Composer:** PHP dependency manager.

* **Node.js:** Version 16 or higher (LTS recommended).

* **Npm, Pnpm or Yarn:** JavaScript package managers.

* **Git:** For cloning the repository.

* **A Mysql database**

### Installation

1. **Clone the repository:**
    ```
    git clone https://github.com/ShockieToky/TSDeck.git
    cd TSDeck
  
    ```

2. **Backend Setup (Symfony):**

* Install PHP dependencies:

  ```
  composer install
  
  ```

* Copy the example environment file and configure your database connection and other settings:

  ```
  cp .env .env.local
  # Open .env.local and configure DATABASE_URL, APP_ENV, etc.
  
  ```

* Create the database (if it doesn't exist) and run migrations:

  ```
  php bin/console doctrine:database:create
  php bin/console doctrine:migrations:migrate
  
  ```

* (Optional) Load fixtures if your project uses them:

  ```
  php bin/console doctrine:fixtures:load
  
  ```

3. **Frontend Setup (React):**

* Install JavaScript dependencies:

  ```
  npm install # or yarn install
  
  ```

### Running the Application

1. **Start the Symfony development server:**
  
    ```
    symfony server:start # Or php -S 127.0.0.1:8000 -t public
  
    ```

This will typically run on `http://127.0.0.1:8000`.

2. **Start the React development server (Webpack Encore):**

    ```
    npm run watch # or yarn watch or pnpm run watch
  
    ```

This command will compile your frontend assets and watch for changes. The React application will be served through the Symfony server.

Your application should now be accessible in your web browser at the Symfony development server's address.

## 🐛 Bug Tracking

We use **Jira** as our internal project management tool. For **reporting bugs or suggesting features**, please open a new issue directly on this GitHub repository's [Issues page](https://github.com/ShockieToky/TSDeck/issues). Our team will then triage these issues and transfer them to Jira for tracking and resolution.

* **Reporting Bugs:** When creating an issue, please provide as much detail as possible, including steps to reproduce, expected behavior, and actual behavior.

* **Feature Requests:** For new feature ideas or enhancements, please also create an issue on GitHub.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

ShockieToky - [https://github.com/ShockieToky](https://github.com/ShockieToky)
Yohan-Frmt - [https://github.com/Yohan-Frmt](https://github.com/Yohan-Frmt)

Project Link: <https://github.com/ShockieToky/TSDeck>
