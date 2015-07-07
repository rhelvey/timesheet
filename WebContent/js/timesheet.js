$(document).ready(function() {

	jQuery(function($){
	$('#datetimepicker6').datetimepicker({
		defaultDate : "7/4/2015"
	});
	$('#datetimepicker7').datetimepicker({
		defaultDate : "7/4/2015"
	});
	$("#datetimepicker6").on("dp.change", function(e) {
		$('#datetimepicker7').data("DateTimePicker").minDate(e.date);
	});
	$("#datetimepicker7").on("dp.change", function(e) {
		$('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
	});

	});
	
	jQuery(function($){
	$('#datetimepicker8').datetimepicker({
		defaultDate : "7/4/2015"
	});
	$('#datetimepicker9').datetimepicker({
		defaultDate : "7/4/2015"
	});
	$("#datetimepicker8").on("dp.change", function(e) {
		$('#datetimepicker8').data("DateTimePicker").minDate(e.date);
	});
	$("#datetimepicker9").on("dp.change", function(e) {
		$('#datetimepicker8').data("DateTimePicker").maxDate(e.date);
	});
	});

});

/*
 * 
 * saved this for later once I need to get and send date info
 * $(document).ready(function() { $('.datetimepicker') .datetimepicker({ format:
 * 'dd-mm-yyyy hh:ii', todayBtn: true, pickerPosition: "bottom-left" })
 * .on('changeDate', function(ev){ $("#view").html(ev.date.valueOf()); });
 */
