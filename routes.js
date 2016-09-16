var routes = function(app){
  var airtablemethods = require('./airtablemethods.js');
  app.get('/speakers', function(req, res) {
    var speakersData = airtablemethods.retrieveListofSpeakers(req.body);
    res.json(speakersData);
  });

  app.post('/submitApplicant', function(req, res){
    airtablemethods.createNewApplicant(req.body);
    res.end("true");
  });
};

module.exports = routes;
