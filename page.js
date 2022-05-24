
var dates = [

      {
		"date":"May 28",
		"loc":"Berlin, DE",
		"venue":"KM28",
	    "link":	"https://www.km28.de"
	},
        
	
        {
		"date":"May 29",
		"loc":"Amsterdam, NL",
		"venue":"OCCII",
		"link":"https://occii.org/"
	},
	{
		"date":"May 30",
		"loc":"London, UK",
		"venue":"Cafe Oto",
		"link":"https://www.cafeoto.co.uk/"
	},
		{
		"date":"May 31",
		"loc":"Liverpool, UK",
		"venue":"Kazimier Stockroom",
		"link":"https://www.invisiblewindfactory.com/stockroom"
	},
		{
		"date":"June 1",
		"loc":"Bristol, UK",
		"venue":"Dareshack",
		"link":"https://www.dareshack.com/"
	},
		{
		"date":"June 2",
		"loc":"Brighton, UK",
		"venue":"Green Door Store",
		"link":"https://thegreendoorstore.co.uk/"
	},
		{
		"date":"June 3",
		"loc":"Brussels, BE",
		"venue":"Les Atelier Claus",
		"link":"http://www.lesateliersclaus.com/"
	},
	{
		"date":"June 4",
		"loc":"Antwerp, BE",
		"venue":"Het-Bos",
		"link":"https://www.hetbos.be/"
	},
		{
		"date":"June 5 - 6",
		"loc":"Moers, DE",
		"venue":"Moers Festival",
		"link":"https://www.moers-festival.de/en"
	},
		{
		"date":"June 7",
		"loc":"Bern, CH",
		"venue":"ISC",
		"link":"https://isc-club.ch/"
	},
	
			{
		"date":"June 8",
		"loc":"Ravenna, IT",
		"venue":"Beaches Brew Festival",
		"link":"https://www.beachesbrew.com/"
	},
	
	{
		"date":"June 10",
		"loc":"Prato, IT",
		"venue":"Off Tune Festival",
		"link":"https://offtunefestival.it/"
	},
		{
		"date":"June 11",
		"loc":"Cigole",
		"venue":"A Forest Festival",
		"link":"https://www.facebook.com/Nosilenz.festival/"
	}
	
	

	];

$(document).ready(function(){
	

	for(var i = 0; i < dates.length; i++){

		$('#dates').append("<tr><td>"+dates[i].date+"</td>"+
							"<td>"+dates[i].loc+"</td>"+
							"<td><a href='"+dates[i].link+"'>"+dates[i].venue+"</a></td></tr>");
	}
});
