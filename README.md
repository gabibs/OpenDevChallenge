# Challenge_OpenDev

Challenge_OpenDev is a solution for frontend automated testing.

## Installation
NodeJS:

* Follow this instructions to install NVM (https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)
* Remember to run it as Administrator fom CMD or Power Shell.
* In Power Shell (as Admin) run "nvm use <version_of_node>" e.g.: "nvm use 14.17.6"
* run ""npm --version"
* If returns error "npm.ps1 cannot be loaded because running scripts is disabled on this system." then run "Get-ExecutionPolicy"
* It will respnds "Restricted" so then run "Set-ExecutionPolicy Unrestricted"
* Will ask if you want to change ExecutionPolicy. Answer "Y" (for a step by step go here "https://dev.to/tradecoder/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system-34fe")
Power Shell view:
[](settingUpNPM.png)
* Close IDE (if you have it already open) and reopen it.

Project:

* Clone project from (https://github.com/gabibs/OpenDevChallenge.git)
* Open Terminal and run "npm install"
* Follow instructions for update npm if it's needed.
* In terminal run "npx wdio run wdio.conf.js" to start test execution.

Troubleshooting





## Usage





## License
[MIT](https://choosealicense.com/licenses/mit/)
