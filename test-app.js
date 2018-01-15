// JavaScript Document



var currentDate = new Date();

//var endtime = new Date("January 31, 2018 19:59:59"); //Month Days, Year HH:MM:SS

//var diff = (endtime.getTime() / 1000) - (currentDate.getTime() / 1000);
//console.log(now, diff, currenttime);

//SHOW IF WITHIN RANGE

//	if (diff >= 0) {}

var eprice = true;

var banner = true;

//var i = 0;

var oem = {
		'chrysler': {
			'ePrice': [],
			'landingPages': [],
			'oemProgram': {},
			'webBanners': []
		}
	};


//===== "SET BANNER IMAGE SOURCES " =====//


	oem.chrysler.webBanners[0] = {
		'shared': {
			'imgUrl': '/new-inventory/index.htm?search=Grand+Cherokee+OR+1500+OR+Compass+AND+%21Caravan',
			'tagline': '4x4 Winter Event',
			'expiryDate': null // new Date("January 31, 2018 19:59:59") 
		},
		'desktop': {
			'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0511/ff5350cd36dcab2d664fd7f1a3e6ea8fx.jpg'
		},
		'mobile': {
			'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0700/da080bc2f606f2511b1c9a82514b4c8ex.jpg'
		}
	};

	oem.chrysler.webBanners[1] = {
		'shared': {
			'imgUrl': '/new-inventory/index.htm?year=2017&make=Dodge&model=Grand+Caravan',
			'tagline': 'Grand Caravan Bonus Cash',
			'expiryDate': null // new Date("January 31, 2018 19:59:59") 
		},
		'desktop': {
			'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0802/5639c938b314cabf240becce4c2978b9x.jpg'
		},
		'mobile': {
			'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0219/478c660d4d8ba1b73da52410aa029075x.jpg'
		}
	};

	oem.chrysler.webBanners[2] = {
		'shared': {
			'imgUrl': '/new-inventory/index.htm',
			'tagline': 'We Come To You - Test Drive, Purchase, Finance in the comfort of your own driveway.',
			'expiryDate': null // new Date("January 31, 2018 19:59:59") 
		},
		'desktop': {
			'imgSrc': 'https://pictures.dealer.com/a/airdriechryslerdodgejeeptc/0292/98ecccd76cec464c1a3167f3407b3f4ex.jpg'
		},
		'mobile': {
			'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0971/62528a2e3b15fb09697e36ac159e7c43x.jpg'
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

// Change New ePrice Label 
	oem.chrysler.ePrice[0] = {
		'active': true, //new used both
		'text': 'Get The Bemie Price',
		'expiryDate': null // new Date("January 31, 2018 19:59:59") 
	};
// Change Used ePrice Label 
	oem.chrysler.ePrice[1] = {
		'active': false, //new used both
		'text': 'Get ePrice',
		'expiryDate': null // new Date("January 31, 2018 19:59:59") 
	};


	//===== "OEM PROGRAM LANDING PAGE" =====//


	oem.chrysler.oemProgram = {
		'offerTagline': 'Get Up To $12,000 In Holiday Discounts On Select Models OAC',
		'offerURL': '/new-inventory/index.htm?search=&year=2017&make=Dodge&model=Grand+Caravan',
		'landingPageURL': '/promo/national-offers.htm?offer=12k',
		'desktopImgSrc': 'https://pictures.dealer.com/a/autocanadatc/0254/d4febc94f38500c0758b3d19b336f0c6x.jpg',
		'mobileImgSrc': 'https://pictures.dealer.com/a/autocanadatc/1594/0a4a13f98db1831e70c03e51ddc056d8x.jpg',
		'shortDisclaimer': '',
		'fullDisclaimer': '',
		'expiryDate': null // new Date("January 31, 2018 19:59:59") 
	};


//+++++++++++++EPRICE BUTTON TEXT CHANGE

//oem.chrysler.ePrice

//oem.chrysler.ePrice[i].text

//oem.chrysler.ePrice[i].expiryDate

if (eprice === true) { //Global Switch

	for (var i = 0; i <= 1; i++) {

		if ((oem.chrysler.ePrice[i].active === true) && ((oem.chrysler.ePrice[i].expiryDate === null) || (currentDate < oem.chrysler.ePrice[i].expiryDate))) {

			if (oem.chrysler.ePrice[i] === oem.chrysler.ePrice[0]) {

				if (DDC.dataLayer.dealership.stateProvince !== "ON") {

					if (DDC.dataLayer.page.pageInfo.isVlp === true) {
						jQuery('.inv-type-new .pricing .dialog[data-eprice]').text(oem.chrysler.ePrice[i].text);
						jQuery('.mobile .inv-type-new .pricing .dialog[data-eprice]').text(oem.chrysler.ePrice[i].text);
					}

					if (DDC.dataLayer.page.pageInfo.isVdp === true) {
						jQuery('.alias-auto-new-details.vdp .links-list .ddc-btn[data-href*="/eprice-form.htm"]').html('<i class="ddc-icon ddc-icon-banknote"></i>' + oem.chrysler.ePrice[i].text);
						jQuery('.mobile.alias-auto-new-details.vdp .links-list .ddc-btn[data-href*="/eprice-form.htm"]').text(oem.chrysler.ePrice[i].text);
					}
				}

			} else if (oem.chrysler.ePrice[i] === oem.chrysler.ePrice[1]) {

				if (DDC.dataLayer.dealership.stateProvince !== "ON") {

					if (DDC.dataLayer.page.pageInfo.isVlp === true) {
						jQuery('.inv-type-used .pricing .dialog[data-eprice]').text(oem.chrysler.ePrice[i].text);
						jQuery('.mobile .inv-type-used .pricing .dialog[data-eprice]').text(oem.chrysler.ePrice[i].text);
					}

					if (DDC.dataLayer.page.pageInfo.isVdp === true) {
						jQuery('.alias-auto-used-details.vdp .links-list .ddc-btn[data-href*="/eprice-form.htm"]').html('<i class="ddc-icon ddc-icon-banknote"></i>' + oem.chrysler.ePrice[i]);
						jQuery('.mobile.alias-auto-used-details.vdp .links-list .ddc-btn[data-href*="/eprice-form.htm"]').text(oem.chrysler.ePrice[i]);
					}
				}
			}
		}

	}
}
	//+++++++++++++END EPRICE BUTTON TEXT CHANGE


	//+++++++++++++START BANNER LOGIC

	//DESKTOP


	if ((banner === true) && (DDC.dataLayer.page.attributes.layoutType === "desktop") && (DDC.dataLayer.page.pageInfo.pageName === "INDEX")) {

		$('.ddc-content.slideshow-background').before('<div id="desktop-banner-container" class="backstretch"><div id="desktopSlideshow"></div></div');

		var counter = oem.chrysler.webBanners.length;
		
		console.log(counter + ' outside cycle images');
		
		for (var i = 0; i < oem.chrysler.webBanners.length; i++) {
			
			if ((oem.chrysler.webBanners[i].shared.expiryDate  === null) || (currentDate < oem.chrysler.webBanners[i].shared.expiryDate )) {

				$('div#desktopSlideshow').append('<a href="'+ oem.chrysler.webBanners[i].shared.imgUrl  + '" title="' + oem.chrysler.webBanners[i].shared.tagline + '"><img src="' + oem.chrysler.webBanners[i].desktop.imgSrc + '" alt="' + oem.chrysler.webBanners[i].shared.tagline + '" /></a>');
				
			}

		}

		$('div#desktopSlideshow a:first-of-type').addClass('active');

//		function cycleImages() {
//			var $active = $('#desktopSlideshow .active');
//			var $next = ($active.next().length > 0) ? $active.next() : $('#desktopSlideshow a:first');
//			$next.css('z-index', 2); //move the next image up the pile
//			$active.fadeOut(1500, function () { //fade out the top image
//				$active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
//				$next.css('z-index', 3).addClass('active'); //make the next image the top one
//			});
//		}

		//$(document).ready(function () {
		// run every 3s

		if ($('div#desktopSlideshow a').length > 1) {

			setInterval(cycleImages("desktopSlideshow", counter), 3000);
		}

		//});

	}



	//MOBILE

	if ((banner === true) && (DDC.dataLayer.page.attributes.layoutType === "mobile") && (DDC.dataLayer.page.pageInfo.pageName === "INDEX")) {

		$('.ddc-content.inventory-search-form').before('<div id="mobile-pre-links-list"><div id="mobileSlideshow"></div></div>');

		var counter = oem.chrysler.webBanners.length;

		for (var i = 0; i < oem.chrysler.webBanners.length; i++) {

			
			if ((oem.chrysler.webBanners[i].shared.expiryDate  === null) || (currentDate < oem.chrysler.webBanners[i].shared.expiryDate )) {
				
				$('div#mobileSlideshow').append('<a href="'+ oem.chrysler.webBanners[i].shared.imgUrl  + '" title="' + oem.chrysler.webBanners[i].shared.tagline + '"><img src="' + oem.chrysler.webBanners[i].mobile.imgSrc + '" alt="' + oem.chrysler.webBanners[i].shared.tagline + '" /></a>');

			}
		}

		$('div#mobileSlideshow a:first-of-type').addClass('active');

//		function cycleImages(div) {
//			var $active = $('#'+ div + ' .active');
//			var $next = ($active.next().length > 0) ? $active.next() : $('#'+ div + ' a:first');
//			$next.css('z-index', 2); //move the next image up the pile
//			$active.fadeOut(1500, function () { //fade out the top image
//				$active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
//				$next.css('z-index', 3).addClass('active'); //make the next image the top one
//			});
//		}

		//$(document).ready(function () {
		// run every 3s

		if ($('div#mobileSlideshow a').length > 1) {

			setInterval(cycleImages("mobileSlideshow", counter), 3000);
		}

		//});

	}

		function cycleImages(div, counter) {
			
			var index = 0; 
			
			console.log(counter + ' inside cycle images');
			
			if (index <= counter) {
				
				var $active = $('#'+ div + ' .active');
				var $next = ($active.next().length > 0) ? $active.next() : $('#'+ div + ' a:first');
				$next.css('z-index', 2); //move the next image up the pile
				$active.fadeOut(1500, function () { //fade out the top image
					index++; //increment index value
					$active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
					$next.css('z-index', 3).addClass('active'); //make the next image the top one
				});
				
				
				
				
			}
			

		}


	//+++++++++++++END MOBILE BANNER LOGIC



