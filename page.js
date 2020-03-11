
var dates = [

      {
		"date":"2/13 - 3/1",
		"loc":"Baltimore, MD",
		"venue":"The Acme Corporation Presents - The First Thing That Happens, an Opera by Lola Pierson and Horse Lords, at The Voxel Theatre",
	    "link":	"https://www.facebook.com/events/2612505678968129/"
	},
        
	
        {
		"date":"3/12",
		"loc":"Baltimore, MD",
		"venue":" 'The Common Task' Record Release at The Ottobar",
		"link":"http://www.theottobar.com/"
	},
	{
		"date":"3/13",
		"loc":"Philadelphia, PA",
		"venue":"Vox Populi",
		"link":"http://voxpopuligallery.org/"
	},
		{
		"date":"3/14",
		"loc":"Brooklyn, NY",
		"venue":"Union Pool",
		"link":"https://www.union-pool.com/"
	},
		{
		"date":"3/15",
		"loc":"Washington, DC",
		"venue":"Rhizome",
		"link":"http://www.rhizomedc.org/"
	},
		{
		"date":"3/16",
		"loc":"Richmond, VA",
		"venue":"Cary St. Cafe",
		"link":"https://www.facebook.com/CaryStreetCafe/"
	},
		{
		"date":"3/18",
		"loc":"Detroit, MI",
		"venue":"UFO Factory",
		"link":"https://www.facebook.com/ufofactorydetroit/"
	},
	{
		"date":"3/19",
		"loc":"Cincinatti, OH",
		"venue":"Northside Tavern",
		"link":"http://www.northsidetav.com/cincy/"
	},
		{
		"date":"3/20",
		"loc":"Chicago, IL",
		"venue":"The Hideout",
		"link":"https://www.hideoutchicago.com/"
	},
		{
		"date":"3/21",
		"loc":"Chicago, IL",
		"venue":"The Hideout",
		"link":"https://www.hideoutchicago.com/"
	},
	
			{
		"date":"5/1",
		"loc":"Brooklyn, NY",
		"venue":"Bang on a Can LONG PLAY Festival",
		"link":"https://www.longplayfestival.org/"
	},
	
	{
		"date":"5/8",
		"loc":"Odesnse, DK",
		"venue":"Momentum",
		"link":""
	},
		{
		"date":"5/9",
		"loc":"Copenhagen, DK",
		"venue":"Alice",
		"link":""
	},
		{
		"date":"5/14",
		"loc":"Lyon, FR",
		"venue":"Le Sonic",
		"link":""
	},
		{
		"date":"5/15",
		"loc":"Nancy, FR",
		"venue":"Bon Moment @ L'Autre Canal",
		"link":""
	},
			{
		"date":"5/16",
		"loc":"Willingen, DE",
		"venue":"Kernmacherei",
		"link":""
	},
			{
		"date":"5/18",
		"loc":"Hamburg, DE",
		"venue":"Kampnagel",
		"link":""
	},
				{
		"date":"5/19",
		"loc":"Aarhus, DK",
		"venue":"Tape",
		"link":""
	}
	
	
	






	

	];

$(document).ready(function(){
	

	for(var i = 0; i < dates.length; i++){

		$('#dates').append("<tr><td>"+dates[i].date+"</td>"+
							"<td>"+dates[i].loc+"</td>"+
							"<td><a href='"+dates[i].link+"'>"+dates[i].venue+"</a></td></tr>");
	}
});