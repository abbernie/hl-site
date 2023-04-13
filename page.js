
var dates = [

      {
		"date":"June 16 ",
		"loc":"Paris, FR",
		"venue":"Centre Pompidou",
	    "link":	""
	},
        
	
        {
		"date":"July 22",
		"loc":"Vigo, ES",
		"venue":"Sinsal Festival",
		"link":"https://festival.sins.al/gl"
	},
	{
		"date":"August 4",
		"loc":"Genk, BE",
		"venue":"Absolutely Free Festival",
		"link":"https://www.instagram.com/absolutelyfreefestival/?hl=en"
	},
		{
		"date":"August 5",
		"loc":"Cernoy, FR",
		"venue":"Celebration Days",
		"link":"https://celebrationdays.org/"
	},
		{
		"date":"August 6",
		"loc":"Liege, BE",
		"venue":"Micro Festival",
		"link":"https://microfestival.be/"
	},
		{
		"date":"August 31",
		"loc":"London, UK",
		"venue":"Studio 9294",
		"link":"http://studio9294.co.uk/"
	},
		{
		"date":"September 1",
		"loc":"Dorset, UK",
		"venue":"End of the Road Festival",
		"link":"https://endoftheroadfestival.com/"
	},
	{
		"date":"September 2",
		"loc":"Birmingham, UK",
		"venue":"Supersonic Festival",
		"link":"https://supersonicfestival.com/"
	},
		{
		"date":"October 6",
		"loc":"Barreiro, PT",
		"venue":"Out.Fest",
		"link":"https://outfest.pt/eng/"
	},
		{
		"date":"October 13",
		"loc":"Bydgoscz, PL",
		"venue":"Fonomo Music & Film Festival",
		"link":"https://www.instagram.com/fonomo_festival/?hl=en"
	}
	
	

	];

$(document).ready(function(){
	

	for(var i = 0; i < dates.length; i++){

		$('#dates').append("<tr><td>"+dates[i].date+"</td>"+
							"<td>"+dates[i].loc+"</td>"+
							"<td><a href='"+dates[i].link+"'>"+dates[i].venue+"</a></td></tr>");
	}
});
