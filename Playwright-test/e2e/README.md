
# QA Automation README (Beta)

This is the **first beta version** of the README for the `qa-automation` folder. It will likely expand or change in the future.

## Overview
This folder (`qa-automation`) contains our Playwright automation tests and supporting configuration files.

## Running Locally
1. **Install dependencies** (from the project root):
   ```bash
   npm install
   npm run dev
   This command will start up your local environment and prepare it for testing.


## Running Tests
1.  **Navigate to the `qa-automation` folder**
```bash
cd qa-automation
    npm install

    
### Running Specific Tests
You can run specific tests using an environment variable and Playwright’s built-in command-line options. For example:
```bash
env=local npx playwright test -g @test --workers=1 --headed



### What do these options mean?

**env=local**  
Sets the environment variable to `local` (in some projects you might use `ENVIRONMENT=local` instead). The code looks for `process.env.ENVIRONMENT` or `process.env.env` to load specific URLs or credentials.

**-g @test**  
The `-g` option stands for *grep*. It runs only the tests that match the provided pattern (in this case, any test tagged or named with `@test`).

**--workers=1**  
By default, Playwright can run multiple tests in parallel. Setting `--workers=1` forces the tests to run sequentially in a single worker. This is useful if your tests depend on shared resources or if you want to observe each test in detail.

**--headed**  
Runs the browser in a visible window instead of headless mode, allowing you to see the actions performed in real time.


## Generating a Report
After the tests finish, you can generate a report:

npx playwright show-report

This will open an HTML report in your browser where you can inspect the results of your test runs.


