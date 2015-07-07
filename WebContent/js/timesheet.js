$(document).ready(function() {
	alert("Hello! I hit the JS file");
	$(function() {
		
		$('#datetimepicker6').datetimepicker();
		$('#datetimepicker7').datetimepicker();
		$("#datetimepicker6").on("dp.change", function(e) {
			$('#datetimepicker7').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker7").on("dp.change", function(e) {
			$('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
		});
	});
});