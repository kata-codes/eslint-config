# [@kata.codes](https://github.com/kata-codes) / [eslint-config](https://github.com/kata-codes/eslint-config)

[![dependencies Status](https://david-dm.org/kata-codes/eslint-config/status.svg)](https://david-dm.org/kata-codes/eslint-config) ![Node CI](https://github.com/kata-codes/eslint-config/workflows/Node%20CI/badge.svg)

This repo contains the base ESLint configuration for all **kata.codes** TypeScript projects.

You will need to install this package as a dev dependency.  Then you will want to add a linting script to the `scripts` property to your `package.json`.

### Installation

#### Step 1: `devDependencies`

Include the following within the `devDependencies` object of `package.json`.  This specifies where to grab the ESLint config from.

```json
"@kata-codes/eslint-config": "github:kata-codes/eslint-config"
```

#### Step 2: `eslintConfig`

Add the following object to `package.json`.  This specifies the ESLint config file we want to extend.

```json
"eslintConfig": {
	"extends": "@kata-codes/eslint-config"
}
```

#### Step 3: `scripts`

Include the following within the `scripts` object of `package.json`.  This creates an `npm` script that will run ESLint.

```json
"scripts": {
	"code:lint": "eslint ./src/**/*.ts"
}
```
