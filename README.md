# PlayWrightFramework
- Running tests 
    >>> npx playwright test
- Run tests in UI mode 
    >>> npx playwright test --ui
- Run tests in headed mode
    >>> npx playwright test --headed
- Run tests on different browsers
    >>> npx playwright test --project webkit --project firefox
- Run specific tests
    >>> npx playwright test landing-page.spec.ts
- Debug tests with the Playwright Inspector
    >>> npx playwright test --debug
    
# GitHub instructions
- If you don't have Git installed. Open up a command prompt.
- Change into the directory where your source code is located in the command prompt.
- First, create a new repository in this directory *git init*
- Now you need to tell Git about your files by adding them to your repository. Do this with git add filename. If you want to add all your files, you can do *git add .*
- Now that you have added your files and made your changes, you need to commit your changes so Git can track them. Type git commit -m "adding files".
- Now you want to push the changes to your Git repository hosted with GitHub. You do this by telling Git to add a remote location, and you do that with this command:
>>> git remote add origin https://github.com/yourusername/your-repo-name.git
- Once you have done that. You can then tell it to push your committed files: 
>>> git push -u origin master

# Allure reporting instructions
- Install allure with the following command un the terminal: 
    >>> brew install allure
- Open your playwright project and install allure framework integration for Playwright with the following command:
    >>> npm i -D allure-playwright
- Create Allure reports 
    >>> npx playwright test --reporter=line,allure-playwright
- Generate allure html report from the allure results:
    >>> allure generate ./allure-results --clean
- Open allure reports
    >>> allure open ./allure-report