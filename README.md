# LoreGameBot Script Dev Environment

This project provides type safety for @LoreGameBot telegram bot custom scripts.


## Prerequisites
1. Knowledge of the grammY parse-mode plugin: https://grammy.dev/plugins/parse-mode

## Setup
1. Clone the entire project
2. Run `npm install`

## Development
1. Edit the default function in `src/script.ts`, ensuring an instance of `FormattedString` is returned (plain strings are not accepted)
2. Run the script with `npm run dev` making sure your desired output is returned
3. Run the test suite from cli with `npm run test`. The default test suite ensures your script has 100% coverage of the API edge cases.

## Deploy
1. *Remove the top-level imports from the `script.ts` file* (if you don't, you will get the error `require is not a function`)
2. Upload your script file using the item `Usage Generator` in-game with the `.ts` extension (it will be automatically compiled and renamed)
