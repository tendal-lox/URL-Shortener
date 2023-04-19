# NodeJS URL Shortener

##### Shrink full URL to short URL

✨ This is the main task of this module. ✨

In this module you can give the full address and the result will be a short address that you can click on and it will refer you to the full address.

## Features & Ability

- Ability to save the given Url in the dataBase
- Ability to create default shortId fo each full Url

## Tech

This module uses a number of open source projects to work properly:

- [Node.js] - evented I/O for the backend
- [Express] - Fast and low overhead web framework, for Node.js
- [Mongoose] - DataBase
- [ejs] - Generate HTML markup with plain JavaScript

## Installation guide for the user

```sh
git clone https://github.com/tendal-lox/Send-verification-code-via-sms.git
cd sendCode
npm install
```

## Guide how to use

```sh
npm install Send-verification-code-via-sms
npm start
```

 To start the app in dev mode.\
Open [http://localhost:3000/docs/](http://localhost:3000/docs/) to view it in the browser.

## swagger athentication guide

After receiving the token, you must give it to swagger authorize to set that token in requests header.

> Note: SMS sending service is according to the country of Iran. So you have to adjust it according to your country.
For this, you need to enter /routes/sendVerificationCode.js and change this part of the code:

```javascript
// Kavenegar send api
const api = Kavenegar.KavenegarApi({apikey: 'api key from kavenegar'});
api.Send({ message: generatedCode , sender: "xxx" , receptor: phoneNumber })
```

## Bugs are being fixed

There is no any problem in the production code, but in the first version of this module, there is a problem in the test. Since there is no database in the test file, when you run npm test you will always encounter a database connection problem.

## License

MIT

[node.js]: <http://nodejs.org>
[Express]: <https://expressjs.com/>
[Mongoose]: <https://mongoosejs.com/>
[ejs]: <https://ejs.co/>