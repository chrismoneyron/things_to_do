function show_activities() {
	var location = $("#location").val();
	var start_date = $("#start_date").val();
	var end_date = $("#end_date").val();

	if (location == '') {
		alert("Please enter a location.");
		return;
	}

	var url = "http://terminal2.expedia.com/x/activities/search?location=" + location + "&startDate=" + start_date + 
				"&endDate=" + end_date + "&apikey=iSDdC3EVGZaibhO38FDiXWxtyYLbch71";
		
	$.getJSON(url, function(json) {
		$(".results tr").remove();
		$(".results").html("<th>Activities</th><th>Images</th>");
		for (var i = 0; i < json.activities.length; i++) {
			$(".results").append("<tr><td>" + json.activities[i].title + "</td><td><img src='" + 
				json.activities[i].imageUrl + "'></td></tr>");
		}
	});
}