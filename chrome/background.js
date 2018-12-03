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



chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "conn") conn_proxy();
		if(request.msg == "dis") disconn_proxy();
    }
);
