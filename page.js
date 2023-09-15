
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
	{
		"date":"November 10 - 12",
		"loc":"Wels, Austria",
		"venue":"Music Unlimited",
		"link":"https://www.waschaecht.at/music-unlimited/de"
	},
	{
		"date":"March 12",
		"loc":"Minneapolis, MN",
		"venue":"Icehouse w/ Ka Baird",
		"link":"https://dice.fm/partner/dice/event/mdx3w?dice_id=1515571&dice_channel=web&dice_tags=organic&dice_campaign=DICE&dice_feature=marketing&_branch_match_id=1153706971361173320&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1U81NrJMs7QwNDVJSwYAtckn%2BCEAAAA%3D"
	},
	{
		"date":"March 13",
		"loc":"Chicago, IL",
		"venue":"Empty Bottle w/ Ka Baird",
		"link":"https://www.ticketweb.com/event/horse-lords-ka-baird-empty-bottle-tickets/13593628?pl=eb"
	},
	{
		"date":"March 14",
		"loc":"Cleveland, OH",
		"venue":"Grog Shop w/ Ka Baird",
		"link":"https://www.ticketweb.com/event/horse-lords-ka-baird-grog-shop-tickets/13438338?pl=grogshop"
	},
	{
		"date":"March 15",
		"loc":"Toronto, ON",
		"venue":"Baby G w/ Ka Baird",
		"link":"https://www.ticketscene.ca/events/45861/"
	},
	{
		"date":"March 16",
		"loc":"Montréal, PQ",
		"venue":"La Sotterenea w/ Ka Baird",
		"link":"https://www.venuepilot.co/events/80657/orders/new"
	},
	{
		"date":"March 17",
		"loc":"Peterborough, NH",
		"venue":"Nova Arts w/ Ka Baird",
		"link":"http://www.novaarts.org/events/horselords"
	},
	{
		"date":"March 18",
		"loc":"Kingston, NY",
		"venue":"Tubby's w/ Ka Baird",
		"link":"https://tubbyskingston.lyte.com/3707330"
	},
	{
		"date":"March 19",
		"loc":"Brooklyn, NY",
		"venue":"Market Hotel w/ Nadah El-Shazly + Ka Baird",
		"link":"https://pioneerworks.org/programs/pioneer-works-presents-horse-lords-nadah-el-shazly-and-ka-baird?pin=0159&draft=drafts.51b01122-b509-4344-b56b-ba1be1c0da16&rev=f621039c-8e80-4426-a929-55afc8681a3f"
	},
	{
		"date":"March 20",
		"loc":"Philadelphia, PA",
		"venue":"Solar Myth",
		"link":"https://link.dice.fm/u1ffcb2d1003"
	},
	{
		"date":"March 21",
		"loc":"Baltimore, MD",
		"venue":"Ottobar w/ Ka Baird",
		"link":"https://www.etix.com/ticket/p/64210257/horse-lords-baltimore-ottobar"
	},
	{
		"date":"March 22 - 24",
		"loc":"Knoxville, TN",
		"venue":"Big Ears Festival",
		"link":"https://bigearsfestival.org/passes/"
	}
	
	

	];

$(document).ready(function(){
	

	for(var i = 0; i < dates.length; i++){

		$('#dates').append("<tr><td>"+dates[i].date+"</td>"+
							"<td>"+dates[i].loc+"</td>"+
							"<td><a href='"+dates[i].link+"'>"+dates[i].venue+"</a></td></tr>");
	}
});
