
var dates = [

	{
		"date":"check back soon for live dates",
		"loc":"",
		"venue":"",
		"link":""
	}	
	
	/*
	{
		"date":"July 18, 2025",
		"loc":"Shainghai, CH",
		"venue":"Icehouse w/ Ka Baird",
		"link":""
	},
	{
		"date":"July 20, 2025",
		"loc":"Beijing, CH",
		"venue":"Icehouse w/ Ka Baird",
		"link":""
	},
	*/
	

	];

$(document).ready(function(){
	

	for(var i = 0; i < dates.length; i++){

		$('#dates').append("<tr><td>"+dates[i].date+"</td>"+
							"<td>"+dates[i].loc+"</td>"+
							"<td><a href='"+dates[i].link+"'>"+dates[i].venue+"</a></td></tr>");
	}
});
