# Steps to run this App

## 1. npm install --save-dev jest

## 2. write some test cases refer sum.js file and sum.test.js file for reference

## 3. add a script in package.json
```
    {
      "devDependencies": {
        "jest": "^29.7.0"
      },
      "scripts": {
        "test":"jest"
      }
    }
```

## 4. run the app using `npm run test`

### For running each file separately you can use below commands
```
    npm run test -r spec -- compileAndroid.test.js
    npm run test -r spec -- sum.test.js
```