var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/express', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var links = [
  { title: "fake link 1", url: "fake.url.1"},
  { title: "fake link 2", url: "fake.url.2"},
  { title: "fake link 3", url: "fake.url.3"}
];

router.get('/api/links', function(req, res, next) {
  res.json({ links: links });
});

router.post('/api/links', function(req, res, next) {
  var newLink = req.body;
  links.push(newLink);
  res.json(newLink);
});

module.exports = router;
