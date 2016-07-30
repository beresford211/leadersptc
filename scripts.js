(function(){
	var formElementsStored = {};
	formElementsStored.application = document.getElementById("application");
	formElementsStored.formToggle = document.getElementById("event-application");
	formElementsStored.footerFormToggle = document.getElementById("event-application-footer");
	formElementsStored.submitApplication = document.getElementById("application-submitted");
	formElementsStored.thanksforapplying = document.getElementById("thanksforapplying");

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
		formElementsStored.submitApplication.style.display = none;
		formElementsStored.thanksforapplying.classList.add("thanksforapplying");
		submitData(storage);
	}

	function submitData(data){
	$.ajax({
		method: "POST",
		url: "/submitApplicant",
		data: JSON.stringify({ "data": data }),
		contentType: 'application/json; charset=utf-8',
		success: function(data){
			if(data === "true"){
				//add functionality to update UI with success message;
			}
		},
		error: function(err){
				//add functionality to update UI with error message;
		} });
	}
	
})();