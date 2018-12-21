'use strict';




function conn_proxy() {

        chrome.proxy.settings.set({
value: {
mode: "pac_script",
pacScript: {
url: ""
}
}, scope: "regular"
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

