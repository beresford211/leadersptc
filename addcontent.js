(function(){
	var speakerSection = document.getElementById("speakers-section");
	var threeSpeakers = "col-xs-12 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0 col-lg-4 col-lg-offset-0 speaker-wrap";
	var oneSpeakerRow = "col-xs-12 col-sm-6 col-sm-offset-0 col-md-12 col-md-offset-0 col-lg-12 col-lg-offset-0";

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




	function addSpeakerRow(data){
		var perRow = 3;
		var cleanSets = data.length - data.length % perRow;

		for(var i = 0; i <= cleanSets; i += perRow){
			var remains = length - i;
			if (remains >= perRow) {
				add3SpeakerRow(
					[{speakerData: data[i],
						speakerData: data[i + 1],
						speakerData: data[i + 2]
					}]
				);
			} else if (remaining == 1) {
				add1SpeakerRow({speakerData: data[data.length - 1]});
			} else if (remaining == 2) {
			  add2SpeakerRow([
					{speakerData: data[data.length - 2]},
					{speakerData: data[data.length - 1]}
				])
			}
		}
	//
	//
	// 	if(leftOver === 1) {
	// 		var obj = {};
	// 		obj.speakerData = data[data.length - 1];
	// 		obj.speakerDiv = addElement("div");
	// 		addSpeakerBio(addSpeakerCompany(addSpeakerName(addSpeakerImg(addSpeakerDiv(addSpeakerCard(obj, oneSpeakerRow))))));
	// 	} else if (leftOver === 2) {
	// 		var twoSpeaker1Row = "col-xs-12 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0 col-lg-4 col-lg-offset-2";
	// 		var twoSpeaker2Row = "col-xs-12 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0 col-lg-4 col-lg-offset-0";
	//
	// 		var obj = {};
	// 		obj.speakerData = data[data.length - 1];
	// 		obj.speakerDiv = addElement("div");
	// 		addSpeakerBio(addSpeakerCompany(addSpeakerName(addSpeakerImg(addSpeakerDiv(addSpeakerCard(obj, twoSpeaker1Row))))));
	//
	// 		var obj2 = {};
	// 		obj2.speakerData = data[data.length - 2];
	// 		obj2.speakerDiv = addElement("div");
	// 		addSpeakerBio(addSpeakerCompany(addSpeakerName(addSpeakerImg(addSpeakerDiv(addSpeakerCard(obj2, twoSpeaker2Row))))));
	// 	}
	// }

	function addElement(newElement){
		return document.createElement(newElement);
	}

	function clearInnerContents(el){
		el.innerHTML = "";
		return el;
	}

	function createSpeakerCard(classes){
		var speakerDiv = addElement("div");
		speakerDiv.className = classes;
		return speakerDiv;
	}

	function createSpeakerWrapper(){
		var speakerWrapper = addElement("div");
		speakerWrapper.className = "speaker";
		return speakerObj;
	}

	function createSpeakerImg(speakerObj){
		var speakerImg = addElement("img");
		speakerImg.src = speakerObj.speakerData.speakerHeadshot;
		speakerImg.alt = speakerObj.speakerData.speakerName;
		speakerImg.className = "speaker-pic img-circle img-responsive";
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

	function add1SpeakerRow(speakerObj) {
		var oneSpeakerRow = "col-xs-12 col-sm-6 col-sm-offset-0 col-md-12 col-md-offset-0 col-lg-12 col-lg-offset-0";
		addSpeakerToRow(speakerObj, oneSpeakerRow);
	}

	function add2SpeakerRow(speakers) {
		var speakerA = speakers[0];
		var twoSpeaker1Row = "col-xs-12 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0 col-lg-4 col-lg-offset-2";
		addSpeakerToRow(speakerA, twoSpeaker1Row);

		var speakerB = speakers[1];
		var twoSpeaker2Row = "col-xs-12 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0 col-lg-4 col-lg-offset-0";
		addSpeakerToRow(speakerB, twoSpeaker2Row);
	}

	function add3SpeakerRow(speakers){
		var threeSpeakers = "col-xs-12 col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-0 col-lg-4 col-lg-offset-0 speaker-wrap"
		speakers.forEach(function addTo3SpeakerRow(speakerObj){
			addSpeakerToRow(speakerObj, threeSpeakers);
		});
	}

})();
