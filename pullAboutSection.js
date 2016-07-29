
(function(){
	var aboutSection = document.getElementById("about-paragraphs");
	
	//need to prevent further function calls if the list of functions is similar;
	(function submitData(data){
		$.ajax({
			method: "GET",
			url: "/aboutSection",
			contentType: 'application/json; charset=utf-8',
			success: function(data){
				clearInnerContents(aboutSection);
				addAboutParagraph(data);
			},
			error: function(err){
				//add functionality to update UI with error message;
			} });
	})();

	function addAboutParagraph(data){
		for(let i = 0; i < data.length; i++){
			var obj = {};
			obj.aboutData = data[i];
			obj.aboutPtag = addElement("p");
			addParagraph(obj);
		}
	}

	function clearInnerContents(el){
	  el.innerHTML = "";
	  return el;
	}

	function addElement(newElement){
		return document.createElement(newElement);
	}

	function addParagraph(aboutSectionObj){
	  aboutSectionObj.aboutPtag.innerText = aboutSectionObj.aboutData.aboutParagraph;
	  aboutSection.appendChild(aboutSectionObj.aboutPtag);
	}

})();
