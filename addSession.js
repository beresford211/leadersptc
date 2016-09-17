(function() {
	var sessionsSection = document.getElementById("schedule-wrapper");

	// // need to prevent further function calls if the list of functions is similar;
	// (function() {
	// 	$.ajax({
	// 		method: "GET",
	// 		url: "/schedule",
	// 		contentType: 'application/json; charset=utf-8',
	// 		success: function(data) {
	// 			clearInnerContents(sessionsSection);
	// 			handleResultsSize(data);
	// 		},
	// 		error: function(err) {
	// 		  console.log("This is your err ", err);
	// 		}
	// 	});
	// })();

	function handleResultsSize(data) {
	 for(let i = 0; i < data.length; i++) {
	 	var obj = {};
		obj.sessionData = data[i];
		obj.scheduleCard = addElement("div");
		addSession(addSessionDescritipion(addSessionDuration(addSessionSpeakerTitle(addSessionSpeakerCard(obj, "schedule-speaker-card")))));
	 }
	}

	function addElement(newElement) {
		return document.createElement(newElement);
	}

	function clearInnerContents(el) {
		el.innerHTML = "";
		return el;
	}

// schedule-speaker-card;
	function addSessionSpeakerCard(scheduleObj, scheduleSpeakerClass) {
		scheduleObj.scheduleCard.className = scheduleSpeakerClass;
		return scheduleObj;
	}

	function addSessionSpeakerTitle(scheduleObj) {
		var speakerAndSession = addElement("div");
		speakerAndSession.className = "schedule-speaker-title";
		speakerAndSession.innerHTML = "" + scheduleObj.sessionData.sessionTitle;
		if(scheduleObj.sessionData.speakerName) {
			speakerAndSession.innerHTML += " : " + scheduleObj.sessionData.speakerName + "<span class=divider> | </span>";
		} else {
			speakerAndSession.innerHTML += "<span class=divider> | </span>";
		}
		scheduleObj.scheduleCard.appendChild(speakerAndSession);
		return scheduleObj;
	}

	function addSessionDuration(scheduleObj) {
		var sessionDuration = addElement("div");
		sessionDuration.className = "schedule-speakersession-duration";
		sessionDuration.innerHTML += "" + scheduleObj.sessionData.startTime + " - " + scheduleObj.sessionData.endTime;
		scheduleObj.scheduleCard.firstChild.appendChild(sessionDuration);
		return scheduleObj;
	}

	function addSessionDescritipion(scheduleObj) {
		if(scheduleObj.sessionData.sessionDescription !== undefined) {
			var sessionDescriptionPtag = addElement("p");
			sessionDescriptionPtag.className = "schedule-speaker-text";
			sessionDescriptionPtag.innerHTML = scheduleObj.sessionData.sessionDescription;
			scheduleObj.scheduleCard.appendChild(sessionDescriptionPtag);
		}
		return scheduleObj;
	}

	function addSession(scheduleObj) {
		sessionsSection.appendChild(scheduleObj.scheduleCard);
	}

})();
