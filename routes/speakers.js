const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;

  router.get('/', async (req, res) => {
    const speakers = await speakerService.getList();
    return res.json(speakers);
  });

  // route for speaker details page
  router.get('/:shortname', (req, res) => {
    return res.send(`Detail page of ${req.params.shortname}`);
  });

  return router;
};
