const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { feedbackService } = params;

  router.get('/', async (req, res) => {
    const feedback = await feedbackService.getList();
    return res.json(feedback);
  });

  // route to get data when form is submitted by someone
  router.post('/:', (req, res) => {
    return res.send('feedback form posted');
  });

  return router;
};
