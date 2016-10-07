(function(){
	var formElementsStored = {};
	formElementsStored.application = document.getElementById("application");
	formElementsStored.formToggle = document.getElementById("event-application");
	formElementsStored.footerFormToggle = document.getElementById("event-application-footer");
	formElementsStored.submitApplication = document.getElementById("application-submitted");
	formElementsStored.thanksforapplying = document.getElementById("thanksforapplying");

	formElementsStored.errormessage = document.getElementById("error-message");

	formElementsStored.submitApplication.addEventListener("click", submitApplicationData);
	formElementsStored.footerFormToggle.addEventListener("click", toggleForm);
	formElementsStored.formToggle.addEventListener("click", toggleForm);

	function toggleForm(e){
	  application.classList.toggle("active");
	}

	function submitApplicationData(e){
		e.preventDefault();
		var storage = {};
		var formData = e.target.form.elements;

		storage.userLastName = formData["user-last-name"].value;
		storage.userLinkedinUrl =	formData["user-linkedin-url"].value;
		storage.userFirstName = formData["user-first-name"].value;
		storage.userEmail = formData["user-email"].value;
		storage.userBenefitsFromEvent =	formData["user-benefits-from-event"].value;
		storage.userContributesToEvent = formData["user-contributes-to-event"].value;
		storage.myOnOffSwitch =	formData["myonoffswitch"].checked;
		var storageLength = Object.keys(storage).length;
		if(storageLength  >= 6){
			submitData(storage);
		} else {
			formElementsStored.errormessage.classList.remove("hideElement");
		}
	}

	function submitData(data){
	$.ajax({
		method: "POST",
		url: "/submitApplicant",
		data: JSON.stringify({ "data": data }),
		contentType: 'application/json; charset=utf-8',
		success: function(data){
			if(data === "true"){
				formElementsStored.errormessage.classList.add("hideElement");
				formElementsStored.submitApplication.classList.add("hideElement");
				formElementsStored.thanksforapplying.classList.remove("hideElement");
				formElementsStored.thanksforapplying.classList.add("thanksforapplying");
			}
		},
		error: function(err){
				//add functionality to update UI with error message;
		} });
	}

})();
