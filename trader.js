// JavaScript Document


//dealership - > functionality - > specifications

//functionality

//	change ePrice
//	landing pages
//	oem program
//	web banners
//	countdownClock

//global - functionality - > specifications



// ENABLE/DISABLE PROMOJS FUNCTIONALITY
var indexHero = false;
var oemLPbasic = false;
var oemLPadvanced = false;
var oemLPnew = true;
var epriceNew = false;
var epriceUsed = false;
var countdownClock = false;
var mobileBanner = true;
var holidayHours = false;

//===== "SET BANNER IMAGE SOURCES " =====//

oem.chrysler.webBanners[0] = {
	'shared': {
		'imgUrl': '/new-inventory/index.htm?search=Grand+Cherokee+OR+1500+OR+Compass+AND+%21Caravan',
		'tagline': '4x4 Winter Event',
		'expiryDate': null, // new Date("January 31, 2018 19:59:59") 
	},
	'desktop': {
		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0700/da080bc2f606f2511b1c9a82514b4c8ex.jpg'
	},
	'mobile': {
		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0700/da080bc2f606f2511b1c9a82514b4c8ex.jpg'
	}
};


//===== "LANDING PAGE CONTENT PERSONALIZATION" =====//

oem.chrysler.landingPages[0] = {
	'offerParam': '12k',
	'offerTagline': 'Get Up To $12,000 In Holiday Discounts On Select Models OAC',
	'offerSource': '$12,000 In Holiday Discounts',
	'offerURL': '/new-inventory/index.htm?search=&year=2017&make=Dodge&model=Grand+Caravan',
	'landingPageURL': '/promo/national-offers.htm?offer=12k',
	'desktopImgSrc': 'https://pictures.dealer.com/a/autocanadatc/0254/d4febc94f38500c0758b3d19b336f0c6x.jpg',
	'mobileImgSrc': 'https://pictures.dealer.com/a/autocanadatc/1594/0a4a13f98db1831e70c03e51ddc056d8x.jpg',
	'expiryDate': null // new Date("January 31, 2018 19:59:59") 
};

//===== "CUSTOMIZE GET EPRICE" =====//

// Change Both New And Used ePrice Labels 
oem.chrysler.ePrice[0] = {
	'active': false, //new used both
	'text': 'Get ePrice',
	'expiryDate': null, // new Date("January 31, 2018 19:59:59") 
};

// Change New ePrice Label 
oem.chrysler.ePrice[1] = {
	'active': false, //new used both
	'text': 'Get ePrice',
	'expiryDate': null, // new Date("January 31, 2018 19:59:59") 
};
// Change Used ePrice Label 
oem.chrysler.ePrice[2] = {
	'active': false, //new used both
	'text': 'Get ePrice',
	'expiryDate': null, // new Date("January 31, 2018 19:59:59") 
};


//===== "CUSTOMIZE GET EPRICE" =====//


oem.chrysler.oemProgram = {
	'offerTagline': 'Get Up To $12,000 In Holiday Discounts On Select Models OAC',
	'offerURL': '/new-inventory/index.htm?search=&year=2017&make=Dodge&model=Grand+Caravan',
	'landingPageURL': '/promo/national-offers.htm?offer=12k',
	'desktopImgSrc': 'https://pictures.dealer.com/a/autocanadatc/0254/d4febc94f38500c0758b3d19b336f0c6x.jpg',
	'mobileImgSrc': 'https://pictures.dealer.com/a/autocanadatc/1594/0a4a13f98db1831e70c03e51ddc056d8x.jpg',
	'shortDisclaimer': '',
	'fullDisclaimer': '',
	'expiryDate': null, // new Date("January 31, 2018 19:59:59") 
};






// PLACE THIS ON BOTTOM OF BODY JS PAGE SPECIFIC: SET CAMPAIGN EXPIRY DATE - DESKTOP/MOBILE

var endtime = new Date("January 31, 2018 19:59:59"); //Month Days, Year HH:MM:SS

var diff = (endtime.getTime() / 1000) - (currenttime.getTime() / 1000);
//console.log(now, diff, currenttime);
//SHOW IF WITHIN RANGE

if (diff >= 0) {}



	var traderApp = (function () {


			var currenttime = new Date();

			var oem = {
					'chrysler': {
						'ePrice': [],
						'landingPages': [],
						'oemProgram': {},
						'webBanners': []
					}
				};
		
			var dealership = {
				'Courtesy Chrysler Dodge Jeep Ram': {},
				'Dartmouth Chrysler Jeep Dodge': {},
				'Tower Chrysler': {},
				'Toronto Chrysler': {},
				'Wellington Motors': {},
				'Moncton Chrysler Jeep Dodge': {},
				'Ponoka Chrysler Jeep Dodge': {},
				'Okanagan Chrysler Jeep Dodge': {},
				'Capital Chrysler Jeep Dodge Ram Fiat': {},
				'Eastern Chrysler Dodge Jeep': {},
				'Grande Prairie Chrysler Dodge Jeep Ram Fiat': {},
				'Maple Ridge Chrysler Jeep Dodge': {},
				'Northland Chrysler Jeep Dodge': {},
				'Crosstown Auto Centre': {},
				'Airdrie Chrysler Dodge Jeep': {}
		};


		//Get franchise name from dataLayer
		var franchiseName = DDC.dataLayer.site.franchises["0"];
		//Get current dealership name from dataLayer
		var dealershipName = DDC.dataLayer.dealership.dealershipName;

		//Set variable to loop
		var i = 0;


	})();