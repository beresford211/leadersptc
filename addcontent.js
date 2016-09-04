(function(){
	var speakerSection = document.getElementById("speakers-section");
	var threeSpeakers = "col-xs-12 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0 col-lg-4 col-lg-offset-0 speaker-wrap";
	var oneSpeakerRow = "col-xs-12 col-sm-6 col-sm-offset-0 col-md-12 col-md-offset-0 col-lg-12 col-lg-offset-0";

	//need to prevent further function calls if the list of functions is similar;
	// (function submitData(data){
	// 	$.ajax({
	// 		method: "GET",
	// 		url: "/speakers",
	// 		contentType: 'application/json; charset=utf-8',
	// 		success: function(data){
	// 			clearInnerContents(speakerSection);
	// 			handleResultsSize(data);
	// 		},
	// 		error: function(err){
	// 		  console.log("This is your err ", err);
	// 		}
	// 	});
	// })();

	function handleResultsSize(data){
		var cleanSets = (data.length) - (data.length % 3);
		var leftOver = data.length % 3;
		for(let i = 0; i < cleanSets; i++){
			var obj = {};
			obj.speakerData = data[i];
			obj.speakerDiv = addElement("div");
			addSpeakerBio(addSpeakerCompany(addSpeakerName(addSpeakerImg(addSpeakerDiv(addSpeakerCard(obj, threeSpeakers))))));
		}

		if(leftOver === 1) {
			var obj = {};
			obj.speakerData = data[data.length - 1];
			obj.speakerDiv = addElement("div");
			addSpeakerBio(addSpeakerCompany(addSpeakerName(addSpeakerImg(addSpeakerDiv(addSpeakerCard(obj, oneSpeakerRow))))));
		} else if (leftOver === 2) {
			var twoSpeaker1Row = "col-xs-12 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0 col-lg-4 col-lg-offset-2";
			var twoSpeaker2Row = "col-xs-12 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0 col-lg-4 col-lg-offset-0";

			var obj = {};
			obj.speakerData = data[data.length - 1];
			obj.speakerDiv = addElement("div");
			addSpeakerBio(addSpeakerCompany(addSpeakerName(addSpeakerImg(addSpeakerDiv(addSpeakerCard(obj, twoSpeaker1Row))))));

			var obj2 = {};
			obj2.speakerData = data[data.length - 2];
			obj2.speakerDiv = addElement("div");
			addSpeakerBio(addSpeakerCompany(addSpeakerName(addSpeakerImg(addSpeakerDiv(addSpeakerCard(obj, twoSpeaker2Row))))));
		}
	}

	function addElement(newElement){
		return document.createElement(newElement);
	}

	function clearInnerContents(el){
		el.innerHTML = "";
		return el;
	}

	function addSpeakerCard(speakerObj, speakerClass){
		speakerObj.speakerDiv.className = speakerClass;
		return speakerObj;
	}

	function addSpeakerDiv(speakerObj){
		var speakerWrapper = addElement("div");
		speakerWrapper.className = "speaker";
		speakerObj.speakerDiv.appendChild(speakerWrapper);
		return speakerObj;
	}

	function addSpeakerImg(speakerObj){
		var speakerImg = addElement("img");
		speakerImg.src = speakerObj.speakerData.speakerHeadshot;
		speakerImg.alt = speakerObj.speakerData.speakerName;
		speakerImg.className = "speaker-pic img-circle img-responsive";
		speakerObj.speakerDiv.firstChild.appendChild(speakerImg);
		return speakerObj;
	}

	function addSpeakerName(speakerObj){
		var speakerNameElement = addElement("div");
		speakerNameElement.className = "speaker-name";
		speakerNameElement.innerHTML = speakerObj.speakerData.speakerName;
		speakerObj.speakerDiv.firstChild.appendChild(speakerNameElement);
		return speakerObj;
	}

	function addSpeakerCompany(speakerObj){
		var speakerCompanyElement = addElement("div");
		var speakerCompanyUrlElement = addElement("a");
		speakerCompanyUrlElement.setAttribute("href", speakerObj.speakerData.speakerCompanyUrl);
		speakerCompanyUrlElement.innerHTML = speakerObj.speakerData.speakerCompany;
		speakerCompanyElement.className = "speaker-company";
		speakerCompanyElement.appendChild(speakerCompanyUrlElement);
		speakerObj.speakerDiv.firstChild.appendChild(speakerCompanyElement);
		return speakerObj;
	}

	function addSpeakerBio(speakerObj){
		var speakerBioElement = addElement("div");
		speakerBioElement.className = "speaker-bio";
		speakerBioElement.innerHTML = speakerObj.speakerData.speakerBio;
		speakerObj.speakerDiv.firstChild.appendChild(speakerBioElement);
		speakerSection.appendChild(speakerObj.speakerDiv);
	}

})();
