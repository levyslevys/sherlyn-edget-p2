$(document).ready(function() {
	$("#first_name").focus();

    // put today's date in the start_date text box
	var today = new Date();
	var month = today.getMonth() + 1; // Add 1 since months start at 0
	var day = today.getDate();
	var year = today.getFullYear();
	var dateText = ((month < 10) ? "0" + month : month) + "/"; // Pad month
	dateText += ((day < 10) ? "0" + day: day) + "/"; // Pad date
	dateText += year;
	$("#today_date").val(dateText);

	$("#member_form").validate({

		rules: {
			first_name: {
				required: true
			},
			last_name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			verify: {
				required: true,
				equalTo: "#email"
			},
			phone: {
				required: true,
				phoneUS: true
			},
			today_date: {
				required: true,
				date: true
			},
			subject: {
				required: true,
			},
			message: {
				required: true,
			}
	}
	}); // end validate
}); // end ready
