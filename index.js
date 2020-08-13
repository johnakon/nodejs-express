const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const routes = require('./routes/route');

/* require service classes */
const FeedbackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');

/* now creating instances of the classes */
const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeakerService('./data/speakers.json');

const app = express();

app.use(express.static(path.join(__dirname, '/static')));

const port = 3000;

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['GHTu75TR4', 'dfTqwEr9u4'],
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(
  '/',
  routes({
    feedbackService,
    speakerService,
    /* speakerService:speakerService */
  })
);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
