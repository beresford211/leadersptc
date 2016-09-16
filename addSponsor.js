(function(){
	var supporterWrapper = document.getElementById("supporters-wrapper");
	var basicClass = "col-xs-12 col-sm-12 col-md-3 col-lg-3 supporter-wrap";
	var isolatePhoto = "col-xs-12 col-sm-12 col-md-4 col-lg-4 supporter-wrap";
	var twoPhotos = "col-xs-12 col-sm-12 col-md-6 col-lg-6 supporter-wrap";

	//need to prevent further function calls if the list of functions is similar;
	// (function(data){
	// 	$.ajax({
	// 		method: "GET",
	// 		url: "/supporters",
	// 		contentType: 'application/json; charset=utf-8',
	// 		success: function(data){
	// 			clearInnerContents(supporterWrapper);
	// 			addSupporter(data);
	// 		},
	// 		error: function(err){
	// 			//add functionality to update UI with error message;
	// 		} });
	// })();

	function addSupporter(data){
		var cleanSets = (data.length) - (data.length % 3);
		var leftOver = data.length % 3;

		for(let i = 0; i < cleanSets; i++) {
			var obj = {};
			obj.supportData = data[i];
			obj.supportDiv = addElement("div");
			addSupporterImg(addSupporterAtag(addSupporterCard(obj, basicClass)));
		}

		if (leftOver === 1) {
			var obj = {};
			obj.supportData = data[data.length - 1];
			obj.supportDiv = addElement("div");
			addSupporterImg(addSupporterAtag(addSupporterCard(obj, isolatePhoto)));
		} else if (leftOver === 2) {
			var obj = {};
			obj.supportData = data[data.length - 1];
			obj.supportDiv = addElement("div");
			addSupporterImg(addSupporterAtag(addSupporterCard(obj, twoPhotos)));
			var obj2 = {};
			obj2.supportData = data[data.length - 2];
			obj2.supportDiv = addElement("div");
			addSupporterImg(addSupporterAtag(addSupporterCard(obj2, twoPhotos)));
		}
	}

	function clearInnerContents(el){
	  el.innerHTML = "";
	  return el;
	}

	function addElement(newElement){
		return document.createElement(newElement);
	}

	function addSupporterCard(supportObj, divClass){
	  supportObj.supportDiv.className = divClass;
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
