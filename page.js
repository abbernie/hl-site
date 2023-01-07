
var dates = [

      {
		"date":"March 7",
		"loc":"Savona, IT",
		"venue":"Raindogs",
	    "link":	"https://raindogshouse.com/"
	},
        
	
        {
		"date":"March 8",
		"loc":"Milano, IT",
		"venue":"Spazio Teatro 89",
		"link":"https://link.dice.fm/B636f5a6647d"
	},
	{
		"date":"March 9",
		"loc":"Foligno",
		"venue":"Spazio Zut",
		"link":"https://www.diyticket.it/events/Musica/10275/ufo-23-horse-lords"
	},
		{
		"date":"March 10",
		"loc":"Ravenna, IT",
		"venue":"Bronson",
		"link":"https://link.dice.fm/l8fcd4e597c2"
	},
		{
		"date":"March 11",
		"loc":"Innsbruck, AT",
		"venue":"Die Bäckerei",
		"link":"https://unterton.org/veranstaltungen"
	},
		{
		"date":"March 12",
		"loc":"Nürnberg, DE",
		"venue":"Kantine",
		"link":"https://www.tixforgigs.com/Event/46442"
	},
		{
		"date":"March 13",
		"loc":"Paris, FR",
		"venue":"Point Ephemere",
		"link":"https://link.dice.fm/dfd58b9f3582"
	},
	{
		"date":"March 15",
		"loc":"Nantes, FR",
		"venue":"Pole Etudiant",
		"link":""
	},
		{
		"date":"March 16",
		"loc":"Tourcoing, FR",
		"venue":"Le Grand Mix",
		"link":"https://legrandmix.com/fr/agenda/horse-lords"
	},
		{
		"date":"March 17",
		"loc":"Gent, BE",
		"venue":"De Boer",
		"link":"https://apps.ticketmatic.com/widgets/vooruit/flow/tickets?event=159396900015&l=nl#!/addtickets"
	},
	
			{
		"date":"March 18",
		"loc":"Brussels, BE",
		"venue":"Beursschouwbourg",
		"link":"https://apps.ticketmatic.com/widgets/beursschouwburg/flow/tickets?event=655499502850&l=en#!/addtickets"
	}
	
	

	];

$(document).ready(function(){
	

	for(var i = 0; i < dates.length; i++){

		$('#dates').append("<tr><td>"+dates[i].date+"</td>"+
							"<td>"+dates[i].loc+"</td>"+
							"<td><a href='"+dates[i].link+"'>"+dates[i].venue+"</a></td></tr>");
	}
});
