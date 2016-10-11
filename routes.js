var routes = function(app){
  var airtablemethods = require('./airtablemethods.js');
  app.get('/speakers', function(req, res) {
    var speakersData = airtablemethods.retrieveListofSpeakers(req.body);
    res.json(speakersData);
  });

<<<<<<< HEAD
  app.get('/schedule', function(req, res) {
    var scheduleData = airtablemethods.retrieveSessionSchedule(req.body);
    res.json(scheduleData);
  });

=======
>>>>>>> 7c81db838557df10a9453f9b2fedaaececf78f4e
  app.post('/submitApplicant', function(req, res){
    airtablemethods.createNewApplicant(req.body);
    res.end("true");
  });
};

module.exports = routes;
