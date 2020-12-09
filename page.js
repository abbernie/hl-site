
var dates = [

      {
		"date":"2/13 - 3/1",
		"loc":"Baltimore, MD",
		"venue":"The Acme Corporation Presents - The First Thing That Happens, an Opera by Lola Pierson and Horse Lords, at The Voxel Theatre",
	    "link":	"https://www.facebook.com/events/2612505678968129/"
	},
        
	
        {
		"date":"<del>3/12",
		"loc":"<del>Baltimore, MD",
		"venue":"<del> 'The Common Task' Record Release at The Ottobar",
		"link":"<del>http://www.theottobar.com/</del>"
	},
	{
		"date":"<del>3/13",
		"loc":"<del>Philadelphia, PA",
		"venue":"<del>Vox Populi",
		"link":"<del>http://voxpopuligallery.org/</del>"
	},
		{
		"date":"<del>3/14",
		"loc":"<del>Brooklyn, NY",
		"venue":"<del>Union Pool",
		"link":"<del>https://www.union-pool.com/</del>"
	},
		{
		"date":"<del>3/15",
		"loc":"<del>Washington, DC",
		"venue":"<del>Rhizome",
		"link":"<del>http://www.rhizomedc.org/</del>"
	},
		{
		"date":"<del>3/16",
		"loc":"<del>Richmond, VA",
		"venue":"<del>Cary St. Cafe",
		"link":"<del>https://www.facebook.com/CaryStreetCafe/</del>"
	},
		{
		"date":"<del>3/18",
		"loc":"<del>Detroit, MI",
		"venue":"<del>UFO Factory",
		"link":"<del>https://www.facebook.com/ufofactorydetroit/</del>"
	},
	{
		"date":"<del>3/19",
		"loc":"<del>Cincinatti, OH",
		"venue":"<del>Northside Tavern",
		"link":"<del>http://www.northsidetav.com/cincy/</del>"
	},
		{
		"date":"<del>3/20",
		"loc":"<del>Chicago, IL",
		"venue":"<del>The Hideout",
		"link":"<del>https://www.hideoutchicago.com/</del>"
	},
		{
		"date":"<del>3/21",
		"loc":"<del>Chicago, IL",
		"venue":"<del>The Hideout",
		"link":"<del>https://www.hideoutchicago.com/</del>"
	},
	
			{
		"date":"<del>5/1",
		"loc":"<del>Brooklyn, NY",
		"venue":"<del>Bang on a Can LONG PLAY Festival",
		"link":"<del>https://www.longplayfestival.org/</del>"
	},
	
	{
		"date":"<del>5/8",
		"loc":"<del>Odesnse, DK",
		"venue":"<del>Momentum",
		"link":"</del>"
	},
		{
		"date":"<del>5/9",
		"loc":"<del>Copenhagen, DK",
		"venue":"<del>Alice",
		"link":"</del>"
	},
		{
		"date":"<del>5/14",
		"loc":"<del>Lyon, FR",
		"venue":"<del>Le Sonic",
		"link":"</del>"
	},
		{
		"date":"<del>5/15",
		"loc":"<del>Nancy, FR",
		"venue":"<del>Bon Moment @ L'Autre Canal",
		"link":"</del>"
	},
			{
		"date":"<del>5/16",
		"loc":"<del>Willingen, DE",
		"venue":"<del>Kernmacherei",
		"link":"</del>"
	},
			{
		"date":"<del>5/18",
		"loc":"<del>Hamburg, DE",
		"venue":"<del>Kampnagel",
		"link":"</del>"
	},
				{
		"date":"<del>5/19",
		"loc":"<del>Aarhus, DK",
		"venue":"<del>Tape",
		"link":"</del>"
	}
	
	
	






	

	];

$(document).ready(function(){
	

	for(var i = 0; i < dates.length; i++){

		$('#dates').append("<tr><td>"+dates[i].date+"</td>"+
							"<td>"+dates[i].loc+"</td>"+
							"<td><a href='"+dates[i].link+"'>"+dates[i].venue+"</a></td></tr>");
	}
});
