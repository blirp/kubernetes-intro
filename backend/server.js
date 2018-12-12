const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Martin Larsson", "location": "Bergen"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "1996", "yearTo": "2017", "place": "Delfi Data", "comment": "Coding"}, {"yearFrom": "2017", "yearTo": "2018", "place": "Stacc Insight", "comment": "Architecting"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "1989", "yearTo": "1992", "place": "BIH", "comment": "Studying Computer Science"}, {"yearFrom": "1994", "yearTo": "1995", "place": "CU", "comment": "More CS"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
