# SE302---SauceDemo-Automation-Project
SE302 - SauceDemo Automation Project
This repository contains an automated test suite for the SauceDemo (Swag Labs) web application. The project was developed as part of the SE302 - Software Testing and Maintenance course. It demonstrates a robust testing architecture using the Playwright framework and the Page Object Model (POM) design pattern.

👥 Contributors
Can Aysen

Atacan Acar

Yunus Yedek

Meral Buse Yalciner

🏗 Project Architecture: Page Object Model (POM)
To ensure the code is maintainable, scalable, and readable, we implemented the Page Object Model (POM). This pattern separates the technical details of the web pages (locators and methods) from the actual test logic.

Folder Structure
page-objects/: Contains classes for each page (Login, Inventory, Cart, and Checkout). Each class handles the elements and actions specific to that page.

tests/: Contains the test scripts. Scenarios are categorized into Smoke Tests (critical paths) and Normal/Functional Tests (detailed edge cases and negative scenarios).

playwright.config.js: Central configuration for timeouts, retries, and browser settings.

🌐 Cross-Browser Support
The project is specifically configured to run and pass on the following browsers:

Google Chrome (Chromium engine)

Brave Browser (Chromium engine with specific channel configuration)

Safari (WebKit engine)

🚀 Getting Started
Prerequisites
Node.js (v18 or higher recommended)

Git installed and configured

Installation
Clone the repository:

Bash

git clone https://github.com/Canaisen/SE302---SauceDemo-Automation-Project.git
Navigate to the directory and install the required dependencies:

Bash

npm install
Install the Playwright browser binaries:

Bash

npx playwright install
Running the Tests
Run all tests in headless mode:

Bash

npm test
Run tests in headed mode (to see the browser):

Bash

npx playwright test --headed
View the test execution report:

Bash

npx playwright show-report
