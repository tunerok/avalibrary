'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({number: 1}, function() {
    console.log('The number space created');
  });
  chrome.storage.local.set({typep: 1}, function() {
    console.log('The typep space created');
  });
});

var keys = ["typep","first","second"];


function conn_proxy() {

chrome.storage.local.get(keys, function(datap) {
	var typep = datap.typep;
	
	switch(typep){
    case 1:
    	var config = { mode: "direct"};
    	chrome.proxy.settings.set({value: config, scope: "regular"});
    	console.log("set config ");
    	console.log(config);
    	break;
    case 2:
    	var config = { mode: "auto_detect"};
    	chrome.proxy.settings.set({value: config, scope: "regular"});
    	console.log("set config ");
    	console.log(config);
	    break;
    case 3:
    	var config = { mode: "system"};
    	chrome.proxy.settings.set({value: config, scope: "regular"});
    	console.log("set config ");
    	console.log(config);
	    break;
    case 4:
	    var config = { mode: "pac_script", pacScript: {url: datap.first}};
	    chrome.proxy.settings.set({value: config, scope: "regular"});
	    console.log("set config ");
    	console.log(config);
	    break;
    case 5:
    	var config = { mode: "fixed_servers", rules: {singleProxy: {host: datap.first, port: parseInt(datap.second)}}};
    	chrome.proxy.settings.set({value: config, scope: "regular"});
    	console.log("set config ");
    	console.log(config);
	    break;
	case 6:
    	var config = { mode: "pac_script", pacScript: {data: datap.first}};
    	chrome.proxy.settings.set({value: config, scope: "regular"});
    	console.log("set config ");
    	console.log(config);
	    break;
	}


		
		
	});
	chrome.browserAction.setIcon({path: 'images/icon_on.png'});		
	
}



function disconn_proxy() {
	
	
var config = {
  mode: "system",
};
	  
	  
chrome.proxy.settings.set(
    {value: config, scope: 'regular'},
    function() {});
	
chrome.browserAction.setIcon({path: 'images/icon32.png'});	
	
	
}






function update_proxy(){
chrome.storage.local.get('number', function(data) {
	var current = data.number;
	if (current == 1){
		conn_proxy();
		current = 2;
	}
	else
	{
		disconn_proxy();
		current = 1;
	}
	chrome.storage.local.set({number: current}, function() {
      console.log('The number is set to ' + current);
    });

});
}


chrome.browserAction.onClicked.addListener(update_proxy);

