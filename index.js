const express = require('express');
const {
  ExpressAdapter
} = require('ask-sdk-express-adapter');

const app = express();
const skillBuilder = require('./skillBuilder.js').skillBuilder;
const skill = skillBuilder.create();
const adapter = new ExpressAdapter(skill, false, false);
console.log('index.js');
app.post('/', adapter.getRequestHandlers());
app.listen(3000);

