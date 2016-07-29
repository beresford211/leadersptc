(function(){
	var supporterWrapper = document.getElementById("supporters-wrapper");
	
	//need to prevent further function calls if the list of functions is similar;
	(function submitData(data){
		$.ajax({
			method: "GET",
			url: "/supporters",
			contentType: 'application/json; charset=utf-8',
			success: function(data){
				clearInnerContents(supporterWrapper);
				addSupporter(data);
				console.log("these are the supporters", data);
			},
			error: function(err){
				//add functionality to update UI with error message;
			} });
	})();

	function addSupporter(data){
		var cleanSets = (data.length) - (data.length % 3);
		var leftOver = data.length % 3;

		for(let i = 0; i < cleanSets; i++){
			var obj = {};
			obj.supportData = data[i];
			obj.supportDiv = addElement("div");
			addSupporterImg(addSupporterAtag(addSupporterCard(obj)));
		}
	}

	function clearInnerContents(el){
	  el.innerHTML = "";
	  return el;
	}

	function addElement(newElement){
		return document.createElement(newElement);
	}

	function addSupporterCard(supportObj){
	  supportObj.supportDiv.className = "col-xs-12 col-sm-12 col-md-3 col-lg-3 supporter-wrap";
	  return supportObj;
	}

	function addSupporterAtag(supportObj){
		var supporterAttribute = addElement("a");
		supporterAttribute.className = "supporter-logo";
		supporterAttribute.target = "_blank";
		supporterAttribute.href = supportObj.supportData.supporterHomePage;
		supportObj.supportDiv.appendChild(supporterAttribute);
		return supportObj;
	}

	function addSupporterImg(supportObj){
		var supporterAttributeImg = addElement("img");
		supporterAttributeImg.alt = supportObj.supportData.supporterLogoAlt;
		supporterAttributeImg.src = supportObj.supportData.supporterLogoSrc;
		supporterAttributeImg.className = "supporter-logo-sm img-responsive";
	  supportObj.supportDiv.firstChild.appendChild(supporterAttributeImg);
	  supporterWrapper.appendChild(supportObj.supportDiv);
	}

})();
