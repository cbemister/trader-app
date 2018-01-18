// JavaScript Document


	jQuery('head').append('<style type="text/css">.ddc-content.slideshow-background{visibility: hidden;}div#desktopSlideshow{position: absolute;top: 50%;left: -50%;width: 200%;height: 200%;}div#desktopSlideshow img{position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;min-width: 50%;min-height: 50%;height: 37vw;width: auto;}@media screen and (min-width: 1266px){div#desktopSlideshow img{max-height: 513px;}}@media screen and (max-width: 1265px) and (min-width: 1010px){div#desktopSlideshow img{min-height: 465px;}}@media screen and (max-width: 1009px){div#desktopSlideshow img{min-height: 370px;}}</style>');


var currentDate = new Date();

//var endtime = new Date("January 31, 2018 19:59:59"); //Month Days, Year HH:MM:SS

//var diff = (endtime.getTime() / 1000) - (currentDate.getTime() / 1000);
//console.log(now, diff, currenttime);

//SHOW IF WITHIN RANGE

//	if (diff >= 0) {}

var eprice = true;

var banner = true;

var landingPage = true;



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
		'hpImgSrc': 'https://pictures.dealer.com/a/autocanadatc/0511/ff5350cd36dcab2d664fd7f1a3e6ea8fx.jpg',
		'vlpImgSrc': 'https://pictures.dealer.com/a/autocanadatc/1709/451f77de6f482e0d4c0679927de61dc0x.jpg'
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
		'hpImgSrc': 'https://pictures.dealer.com/a/autocanadatc/0802/5639c938b314cabf240becce4c2978b9x.jpg',
		'vlpImgSrc': 'https://pictures.dealer.com/a/autocanadatc/1552/5ec61c77239f53e0167964c82d2a3e02x.jpg'
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
		'hpImgSrc': 'https://pictures.dealer.com/a/airdriechryslerdodgejeeptc/0292/98ecccd76cec464c1a3167f3407b3f4ex.jpg',
		'vlpImgSrc': 'https://pictures.dealer.com/a/airdriechryslerdodgejeeptc/0292/98ecccd76cec464c1a3167f3407b3f4ex.jpg'
		
	},
	'mobile': {
		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0971/62528a2e3b15fb09697e36ac159e7c43x.jpg',
	}
};


//===== "LANDING PAGE CONTENT PERSONALIZATION" =====//

oem.chrysler.landingPages['12k'] = { //Enter offer param ie. 12k 
	'shared': {
		'param': '12k',
		'tagline': 'Get Up To $12,000 In Holiday Discounts On Select Models OAC',
		'source': '$12,000 In Holiday Discounts',
		'imgUrl': '/new-inventory/index.htm?search=&year=2017&make=Dodge&model=Grand+Caravan',
		'expiryDate': null, // new Date("January 31, 2018 19:59:59")
		'disclaimer': '- Wise customers read the fine print: - ●, &*, **,†,††, ‡, ≤, Ο, Ω, ∞,^, ❖, Ω, §, ■, € - The 4X4 Winter Event offers apply to retail deliveries of selected new and unused models purchased from January 3, 2018 to January 31, 2018 from participating retailers. Retailer order/trade may be necessary. Offers subject to change and may be extended without notice. Although we make every effort to ensure the accuracy of the information and offers on this website, we cannot guarantee that the site will be error-free. Therefore, you should consult a participating retailer for complete details and conditions. ●● "Starting at" price represents the Manufacturer\'s Suggested Retail Price (MSRP) for the base model minus Total Discounts (where applicable). Price does not include taxes, freight (from $1,695 to $2,495), insurance, registration, licence, A/C charge, retailer administration fees and other charges, and new tire duties (in Quebec). Model shown may be an upgraded model. Total Discounts may vary from time to time and may vary considerably by model and trim. Total Discounts include Consumer Cash Discounts, which are applied before taxes, and/or Bonus Cash Discounts, which are applied after taxes. Retailers may sell for less. See your retailer for complete details. † 4.29% purchase financing for up to 96 months available to qualified customers on approved credit through Royal Bank of Canada, Scotiabank and TD Auto Finance on select 2017/2018 Chrysler, Jeep, Dodge, Ram and FIAT models. Example: $20,000, with a $0 down payment, financed at 4.29% for 96 months equals 416 weekly payments of $57; cost of borrowing of $3,637 and a total obligation of $23,637.'
	},
	'desktop': {
		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0254/d4febc94f38500c0758b3d19b336f0c6x.jpg'
	},
	'mobile': {
		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/1594/0a4a13f98db1831e70c03e51ddc056d8x.jpg'
	}
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
	'landingPageURL': '/promo/national-offers.htm',
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

	for (var i = 0; i < oem.chrysler.webBanners.length; i++) {

		if ((oem.chrysler.webBanners[i].shared.expiryDate === null) || (currentDate < oem.chrysler.webBanners[i].shared.expiryDate)) {

			$('div#desktopSlideshow').append('<a href="' + oem.chrysler.webBanners[i].shared.imgUrl + '" title="' + oem.chrysler.webBanners[i].shared.tagline + '"><img src="' + oem.chrysler.webBanners[i].desktop.hpImgSrc + '" alt="' + oem.chrysler.webBanners[i].shared.tagline + '" /></a>');

		}

	}

	$('div#desktopSlideshow a:first-of-type').addClass('active');

	//$(document).ready(function () {
	// run every 3s

	if ($('div#desktopSlideshow a').length > 1) {

		setInterval('cycleImages("desktopSlideshow", counter)', 5000);
	}

	//});

} else if ((banner === true) && (DDC.dataLayer.page.attributes.layoutType === "desktop") && (DDC.dataLayer.page.pageInfo.pageName === "INDEX")) {

	$('.ddc-content.content-page-title').before('<div id="desktop-banner-container"><div id="desktopSlideshow"></div></div');

	var counter = oem.chrysler.webBanners.length;

	for (var i = 0; i < oem.chrysler.webBanners.length; i++) {

		if ((oem.chrysler.webBanners[i].shared.expiryDate === null) || (currentDate < oem.chrysler.webBanners[i].shared.expiryDate)) {

			$('div#desktopSlideshow').append('<a href="' + oem.chrysler.webBanners[i].shared.imgUrl + '" title="' + oem.chrysler.webBanners[i].shared.tagline + '"><img src="' + oem.chrysler.webBanners[i].desktop.vlpImgSrc + '" alt="' + oem.chrysler.webBanners[i].shared.tagline + '" /></a>');

		}

	}

	$('div#desktopSlideshow a:first-of-type').addClass('active');

	//$(document).ready(function () {
	// run every 3s

	if ($('div#desktopSlideshow a').length > 1) {

		setInterval('cycleImages("desktopSlideshow", counter)', 5000);
	}

	

//MOBILE

if ((banner === true) && (DDC.dataLayer.page.attributes.layoutType === "mobile") && (DDC.dataLayer.page.pageInfo.pageName === "INDEX")) {

	$('.ddc-content.inventory-search-form').before('<div id="mobile-pre-links-list"><div id="mobileSlideshow"></div></div>');

	var counter = oem.chrysler.webBanners.length;

	for (var i = 0; i < oem.chrysler.webBanners.length; i++) {


		if ((oem.chrysler.webBanners[i].shared.expiryDate === null) || (currentDate < oem.chrysler.webBanners[i].shared.expiryDate)) {

			$('div#mobileSlideshow').append('<a href="' + oem.chrysler.webBanners[i].shared.imgUrl + '" title="' + oem.chrysler.webBanners[i].shared.tagline + '"><img src="' + oem.chrysler.webBanners[i].mobile.imgSrc + '" alt="' + oem.chrysler.webBanners[i].shared.tagline + '" /></a>');

		}
	}

	$('div#mobileSlideshow a:first-of-type').addClass('active');



	//$(document).ready(function () {
	// run every 3s

	if ($('div#mobileSlideshow a').length > 1) {

		setInterval('cycleImages("mobileSlideshow", counter)', 5000);
	}

	//});

}

var index = 1;

function cycleImages(div, counter) {

		var $active = $('#' + div + ' .active');
		var $next = ($active.next().length > 0) ? $active.next() : $('#' + div + ' a:first');
	
	if (index < counter) {


		$next.css('z-index', 2); //move the next image up the pile
		$active.fadeOut(1500, function () { //fade out the top image
			
			console.log(index + ' inside function');
			index++; //increment index value
			$active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
			$next.css('z-index', 3).addClass('active'); //make the next image the top one
		});

	} else if (index === counter) {

		var imgSrc = jQuery('.ddc-content.slideshow-background img').attr('src');
		
		jQuery('div#desktop-banner-container a:nth-of-type(1)').find('img').attr('src', imgSrc);
		
		$active.fadeOut(1500, function () { //fade out the top image	

			jQuery('div#desktop-banner-container').remove();

		});
		
		
		jQuery('div#desktop-banner-container').fadeIn(1500, function () { //fade out the top image	

			jQuery('.ddc-content.slideshow-background').css('visibility', 'initial');
			jQuery('.ddc-content.slideshow-background').css('z-index', '4');

		});
		
	}


}


//+++++++++++++END MOBILE BANNER LOGIC

//+++++++++++++START LANDING PAGE LOGIC


var dynamicContent;

// GET URL PARAM

jQuery(document).ready(function () {

	// CONTENT PERSONALIZATION JS 
	function getParameterByName(e, a) {
		a || (a = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
		var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
			r = n.exec(a);
		return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null;
	}
	dynamicContent = getParameterByName("offer");

});


if ((landingPage === true) && (dynamicContent)) {

	if ((oem.chrysler.landingPages[dynamicContent].shared.expiryDate === null) || (currentDate < oem.chrysler.landingPages[dynamicContent].shared.expiryDate)) {

		if (DDC.dataLayer.page.attributes.layoutType === "desktop") {

			//Desktop JS

			// SINGLE OFFER LANDING PAGE
			jQuery('.ddc-container.main').prepend('<div id="default-content" class="dynamic-content"><a href="' + oem.chrysler.landingPages[dynamicContent].shared.imgUrl + '" class="dynamic-link"  title="View Inventory" id="ext-gen2150"><img src="' + oem.chrysler.landingPages[dynamicContent].desktop.imgSrc + '" id="desktop-hero" alt="' + oem.chrysler.landingPages[dynamicContent].shared.tagline + '" title="View Inventory"></a></div>');


		} else if (DDC.dataLayer.page.attributes.layoutType === "mobile") {

			//Mobile JS	

			// SINGLE OFFER LANDING PAGE
			jQuery('.mobile.ddc-container').prepend('<div id="default-content" class="dynamic-content"><a href="' + oem.chrysler.landingPages[dynamicContent].shared.imgUrl + '" class="dynamic-link"  title="View Inventory" id="ext-gen2150"><img src="' + oem.chrysler.landingPages[dynamicContent].mobile.imgSrc + '" id="mobile-hero" alt="' + oem.chrysler.landingPages[dynamicContent].shared.tagline + '" title="View Inventory"></a></div>');

		}
		
			jQuery('.landingPage.footer').append('<div class="disclaimer">' + oem.chrysler.landingPages[dynamicContent].shared.disclaimer + '</div>');
		
		

	}
}

//+++++++++++++END LANDING PAGE LOGIC