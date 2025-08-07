# Contributing to TSDeck

We welcome contributions to TSDeck! Whether it's a bug fix, a new feature, or an improvement to the documentation, your help is greatly appreciated. Please take a moment to review this document to make the contribution process as smooth as possible.

## How Can I Contribute?

### Reporting Bugs

* If you find a bug, please first check the [GitHub Issues page](https://github.com/ShockieToky/TSDeck/issues) to see if it has already been reported.

* If not, open a new issue and provide as much detail as possible. Include:

  * A clear and concise description of the bug.

  * Steps to reproduce the behavior.

  * Expected behavior.

  * Actual behavior.

  * Screenshots or error messages, if applicable.

  * Your operating system and browser versions.

### Suggesting Enhancements / Features

* We love new ideas! If you have a suggestion for an enhancement or a new feature, please open a new issue on the [GitHub Issues page](https://github.com/ShockieToky/TSDeck/issues).

* Clearly describe the feature, why it would be useful, and how you envision it working.

### Code Contributions

We follow a standard Git workflow for contributions.

1. **Fork the Repository:** Start by forking the `TSDeck` repository to your GitHub account.

2. **Clone Your Fork:**

    ```
    git clone https://github.com/YOUR_GITHUB_USERNAME/TSDeck.git
    cd TSDeck
    
    ```

3. **Create a New Branch:** Create a new branch for your feature or bug fix. Use a descriptive name (e.g., `feature/add-deck-export` or `fix/card-search-bug`).


    ```
    git checkout -b feature/your-feature-name
    cd TSDeck
    
    ```


4. **Set Up Your Local Environment:**

* Ensure you have the [prerequisites](https://github.com/ShockieToky/TSDeck/blob/main/README.md) listed in the `README.md`.

* Follow the [installation instructions](https://github.com/ShockieToky/TSDeck/blob/main/README.md) in the `README.md` to set up the Symfony backend and React frontend.

5. **Make Your Changes:**

* Implement your feature or fix the bug.

* Write clear, concise, and well-commented code.

* Ensure your code adheres to the project's coding standards (e.g., Symfony coding standards, React best practices).

* Add or update tests as appropriate.

6. **Test Your Changes:**

* Run existing tests to ensure your changes haven't introduced regressions.

* Manually test your new feature or bug fix thoroughly.

7. **Commit Your Changes:** Write clear and descriptive commit messages.

    ```
    git add .
    git commit -m "feat: Add new deck export functionality" # or "fix: Resolve card search issue"
    
    ```

* We recommend following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.

8. **Push to Your Fork:**

    ```
    git push origin feature/your-feature-name
    
    ```


10. **Open a Pull Request (PR):**

* Go to your forked repository on GitHub and you'll see a prompt to open a pull request.

* Fill out the pull request template thoroughly.

* Explain the purpose of your changes, how they were tested, and any relevant context.

* Link to any related issues (e.g., `Closes #123` or `Fixes #456`).

### Code Style

* **PHP (Symfony):** We generally follow the [Symfony Coding Standards](https://symfony.com/doc/current/contributing/code/standards.html).

* **JavaScript (React):** Adhere to standard React best practices and consistent formatting. If ESLint is configured in the project, please ensure your code passes its checks.

* **Tailwind CSS:** Use Tailwind's utility classes for styling.

## Pull Request Guidelines

* Ensure your PR is focused on a single feature or bug fix.

* Keep your branch up-to-date with the `main` branch of the upstream repository.

* Address any feedback from reviewers promptly.

* Once your PR is reviewed and approved, it will be merged by a maintainer.

Thank you for contributing to TSDeck!
