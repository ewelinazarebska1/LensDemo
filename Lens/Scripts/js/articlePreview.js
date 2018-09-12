﻿
// Little helper used to parse query strings from urls
// --------
// 

var qs = function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = pair[1];
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], pair[1]];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(pair[1]);
        }
    }
    return query_string;
}();


// Check for devices
// --------
// 

function isIOSDevice() {
    var iPadAgent = navigator.userAgent.match(/iPad/i) != null;
    var iPodAgent = navigator.userAgent.match(/iPhone/i) != null;
    return iPadAgent || iPodAgent;
}

function isIphone() {
    var iPhoneAgent = navigator.userAgent.match(/iPhone/i) != null;
    return iPhoneAgent;
}

function isMobile() {
    var iPadAgent = navigator.userAgent.match(/iPad/i) != null;
    var iPodAgent = navigator.userAgent.match(/iPhone/i) != null;
    var AndroidAgent = navigator.userAgent.match(/Android/i) != null;
    var webOSAgent = navigator.userAgent.match(/webOS/i) != null;

    return iPadAgent || iPodAgent || AndroidAgent || webOSAgent;
}

function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}

// Example documents
// --------
// 
// Uncomment the document you want see

// Remote Example 00005
//var documentURL = "https://s3.amazonaws.com/elife-cdn/elife-articles/00005/elife00005.xml";

// Remote Example 00311
//var documentURL = "https://s3.amazonaws.com/elife-cdn/elife-articles/00311/elife00311.xml";

// Remote Example 00778
//var documentURL = "https://s3.amazonaws.com/elife-cdn/elife-articles/00778/elife00778.xml";

// Remote Example 01608
// var documentURL = "https://s3.amazonaws.com/elife-cdn/elife-articles/01608/elife01608.xml";

// Remote Example 01541
// var documentURL = "https://s3.amazonaws.com/elife-cdn/elife-articles/01541/elife01541.xml";

// Remote Example 01157
// var documentURL = "https://s3.amazonaws.com/elife-cdn/elife-articles/01157/elife01157.xml";

// Remote Example 00924
// var documentURL = "https://s3.amazonaws.com/elife-cdn/elife-articles/00924/elife00924.xml";

// Remote Example 00951
// var documentURL = "https://s3.amazonaws.com/elife-cdn/elife-articles/00951/elife00951.xml";

// Lens About Document
// Deploy to: http://lens.elifesciences.org/about
// var documentURL = "data/about/index.xml";

// Lens Article Description
// Deploy to: http://lens.elifesciences.org/lens_article
// var documentURL = "lens_article.xml";

// Local Example
  var documentURL = "/data/00778/index.xml";
//var documentURL = "/data/00778/book3.xml";

// Kitchen Sink Example (contains a lot of edge cases)
// var documentURL = "data/kitchen_sink/index.xml";



// Create a new Lens app instance
// --------
//
// Injects itself into body

var app = new Lens({
    document_url: qs.url ? decodeURIComponent(qs.url) : documentURL
});

$(function () {
    app.start();

    if (isTouchDevice()) {
        $('#container').addClass('touchable');
    }

    if (isIOSDevice()) {
        $('#container').addClass('ios');
    }

    if (isIphone()) {
        $('#container').addClass('iphone');
    }
});

