'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({number: 1}, function() {
    console.log('The number space created');
  });
  chrome.storage.sync.set({typep: 1}, function() {
    console.log('The typep space created');
  });
});

var keys = ["typep","first","second"];


function conn_proxy() {

chrome.storage.sync.get(keys, function(datap) {
	var typep = datap.typep;
	
	switch(typep){
    case 1:
    	var config = { mode: "direct"};
    	chrome.proxy.settings.set({value: config, scope: "regular"});
    	console.log("set config "+config);
    	break;
    case 2:
    	var config = { mode: "auto_detect"};
    	chrome.proxy.settings.set({value: config, scope: "regular"});
    	console.log("set config "+config);
	    break;
    case 3:
    	var config = { mode: "system"};
    	chrome.proxy.settings.set({value: config, scope: "regular"});
    	console.log("set config "+config);
	    break;
    case 4:
	    var config = { mode: "pac_script", pacScript: {url: datap.first}};
	    chrome.proxy.settings.set({value: config, scope: "regular"});
	    console.log("set config "+config);
	    break;
    case 5:
    	var config = { mode: "fixed_servers", rules: {singleProxy: {host: datap.first, port: datap.second}}};
    	chrome.proxy.settings.set({value: config, scope: "regular"});
    	console.log("set config "+config);
	    break;
	case 6:
    	var config = { mode: "pac_script", pacScript: {data: datap.first}};
    	chrome.proxy.settings.set({value: config, scope: "regular"});
    	console.log("set config "+config);
	    break;
	}


		
		
	});
	chrome.browserAction.setIcon({path: 'icon_g.png'});		
	
}



function disconn_proxy() {
	
	
var config = {
  mode: "system",
};
	  
	  
chrome.proxy.settings.set(
    {value: config, scope: 'regular'},
    function() {});
	
chrome.browserAction.setIcon({path: 'icon.png'});	
	
	
}






function update_proxy(){
chrome.storage.sync.get('number', function(data) {
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
	chrome.storage.sync.set({number: current}, function() {
      console.log('The number is set to ' + current);
    });

});
}


chrome.browserAction.onClicked.addListener(update_proxy);

