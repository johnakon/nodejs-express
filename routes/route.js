const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (req, res) => {
    if (!req.session.visitCount) {
      req.session.visitCount = 0;
    }
    req.session.visitCount += 1;
    // eslint-disable-next-line no-console
    console.log(`Number of visits := ${req.session.visitCount}`);

    res.render('pages/index.ejs', { pageTitle: 'Welcome' });
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));
  return router;
};
