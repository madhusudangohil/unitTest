1) run npm init command
2) install following packages
npm install chai mocha istanbul sinon --save-dev

3) modify package.json
    "test": "istanbul cover node_modules/mocha/bin/_mocha"

