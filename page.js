
var dates = [

		{
		"date":"August 31",
		"loc":"London, United Kingdom",
		"venue":"Studio 9294",
		"link":"http://studio9294.co.uk/"
	},
		{
		"date":"September 1",
		"loc":"Dorset, United Kingdom",
		"venue":"End of the Road Festival",
		"link":"https://endoftheroadfestival.com/"
	},
	{
		"date":"September 2",
		"loc":"Birmingham, United Kingdom",
		"venue":"Supersonic Festival",
		"link":"https://supersonicfestival.com/"
	},
	{
		"date":"September 9",
		"loc":"Corato, Italy",
		"venue":"Secolare Festival",
		"link":"https://dice.fm/event/l5ovr-secolare-festival-2023-full-pass-9th-sep-agriturismo-san-giuseppe-corato-tickets?lng=en"
	},
		{
		"date":"October 6",
		"loc":"Barreiro, Portugal",
		"venue":"Out.Fest",
		"link":"https://outfest.pt/eng/"
	},
		{
		"date":"October 13",
		"loc":"Bydgoscz, Poland",
		"venue":"Fonomo Music & Film Festival",
		"link":"https://www.instagram.com/fonomo_festival/?hl=en"
	},
	{
		"date":"October 14",
		"loc":"Belgrade, Serbia",
		"venue":"Changeover Festival",
		"link":"http://changeoverfestival.com/"
	},
	,
	{
		"date":"November 10 - 12",
		"loc":"Wels, Austria",
		"venue":"Music Unlimited",
		"link":"https://www.waschaecht.at/music-unlimited/de"
	}
	
	

	];

$(document).ready(function(){
	

	for(var i = 0; i < dates.length; i++){

		$('#dates').append("<tr><td>"+dates[i].date+"</td>"+
							"<td>"+dates[i].loc+"</td>"+
							"<td><a href='"+dates[i].link+"'>"+dates[i].venue+"</a></td></tr>");
	}
});
