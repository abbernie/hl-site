
var dates = [

      {
		"date":"November 3",
		"loc":"Berlin, DE",
		"venue":"Silent Green",
	    "link":	"https://ticketorganizer.eu/event/horse-lords-northern-spy"
	},
        
	
        {
		"date":"November 6",
		"loc":"Prague, CZ",
		"venue":"Punctum",
		"link":"https://punctum.cz/"
	},
	{
		"date":"November 8",
		"loc":"Aarhus, DK",
		"venue":"Alter @ Kunsthal Aarhus",
		"link":"https://tikkio.com/tickets/31724-alter-horse-lords"
	},
		{
		"date":"November 9",
		"loc":"Copenhagen, DK",
		"venue":"Valby Kulturhus",
		"link":"https://billetto.dk/e/horse-lords-us-at-valby-kulturhus-billetter-683993"
	},
		{
		"date":"November 10",
		"loc":"Odense, DK",
		"venue":"Momentum",
		"link":"http://www.place2book.com/da/sw2/sales/qywyd0eru8"
	},
		{
		"date":"November 11",
		"loc":"Leipzig, DE",
		"venue":"Transcentury Update",
		"link":"https://www.tixforgigs.com/Event/32976?af=ozqw0atnumoi&saf=s54498u"
	},
		{
		"date":"November 13",
		"loc":"Utrecht, NL",
		"venue":"Le Guess Who?",
		"link":"https://www.leguesswho.nl/tickets"
	},
	{
		"date":"November 15",
		"loc":"Manchester, UK",
		"venue":"White Hotel",
		"link":"https://www.seetickets.com/event/horse-lords/the-white-hotel/2386679"
	},
		{
		"date":"November 16",
		"loc":"London, UK",
		"venue":"EFG London Jazz @ Moth Club",
		"link":"https://songkick.seetickets.com/event/horse-lords/moth-club/2367743?pref1=40487894&aff=id1songkick"
	},
		{
		"date":"November 17",
		"loc":"Paris, FR",
		"venue":"Gare XP",
		"link":"https://garexp.org/"
	},
	
			{
		"date":"November 18",
		"loc":"Lyon, FR",
		"venue":"Le Sonic",
		"link":"https://yurplan.com/event/HORSE-LORDS-guest-au-Sonic/89523#/"
	},
	
	{
		"date":"November 19",
		"loc":"Chaux-Du Fonds, CH",
		"venue":"Bikini Test",
		"link":"https://www.bikinitest.ch/"
	},
		{
		"date":"November 20",
		"loc":"St. Gallen, CH",
		"venue":"Palace",
		"link":"https://www.petzi.ch/de/events/49838-palace-horse-lords-us-omni-selassi-ch/"
	}
	
	

	];

$(document).ready(function(){
	

	for(var i = 0; i < dates.length; i++){

		$('#dates').append("<tr><td>"+dates[i].date+"</td>"+
							"<td>"+dates[i].loc+"</td>"+
							"<td><a href='"+dates[i].link+"'>"+dates[i].venue+"</a></td></tr>");
	}
});
