var Airtable = require('airtable');
var base = new Airtable({ apiKey: PROCESS.ENV.ATKEY }).base('app6wA7UTiPFvDybn');
var speakersList = [];
var supportersList = [];
var aboutParagraphs = [];

base('speakers').select({ maxRecords: 10, view: "Main View" }).eachPage(function page(records) {
// This function (`page`) will get called for each page of records.
	records.forEach(function(record) {
	  var userObj = {};
	  userObj.speakerName = record.get('speaker-name');
	  userObj.speakerCompany = record.get('speaker-company');
	  userObj.speakerCompanyUrl = record.get('speaker-company-url');
	  userObj.speakerBio = record.get('speaker-bio');
	  userObj.speakerHeadshot = record.get('speaker-headshot');
	  speakersList.push(userObj);
	});
});

base('supporters').select({ maxRecords: 10, view: "Main View" }).eachPage(function page(records) {
// This function (`page`) will get called for each page of records.
	records.forEach(function(record) {
		var supporterObj = {};
		supporterObj.supporterHomePage = record.get('supporterHomePage');
		supporterObj.supporterLogoAlt = record.get('supporterLogoAlt');
		supporterObj.supporterLogoSrc = record.get('supporterLogoSrc');
		supportersList.push(supporterObj);
	});
});

base('about-section').select({ maxRecords: 3, view: "Main View" }).eachPage(function page(records) {
// This function (`page`) will get called for each page of records.
	records.forEach(function(record) {
		var aboutObj = {};
		aboutObj.aboutParagraph = record.get('paragraphContent');
		aboutParagraphs.push(aboutObj);
	});
});

var createNewApplicant = function(data){
	var applicantName = data.data.userFirstName + " " + data.data.userLastName;
	var applicantLinkedinUrl = data.data.userLinkedinUrl;
	var applicantEmail = data.data.userEmail;
	var applicantBenefitsFromEvent = data.data.userBenefitsFromEvent;
	var applicantContributesToEvent = data.data.userContributesToEvent;
	var myOnOffSwitch = data.data.myOnOffSwitch.toString();

	base('applicants').create({
	  "Name": applicantName,
	  "applicant-linkedin": applicantLinkedinUrl,
	  "applicant-email": applicantEmail,
	  "applicant-contribution": applicantContributesToEvent,
	  "applicant-gains": applicantBenefitsFromEvent,
	  "applicant-expense-event": myOnOffSwitch
	}, function(err, record) {
	    if (err) { console.log(err); return; }
	    console.log(record);
	});
};

var retrieveListofSpeakers = function(){
	return speakersList;
};

var retrieveListofSupporters = function(){
	return supportersList;
};

var retrieveListofAboutParagraphs = function(){
	return aboutParagraphs;
};

module.exports = {
	createNewApplicant: createNewApplicant,
	retrieveListofSupporters : retrieveListofSupporters,
	retrieveListofAboutParagraphs :retrieveListofAboutParagraphs,
	retrieveListofSpeakers: retrieveListofSpeakers
};
