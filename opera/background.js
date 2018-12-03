function conn_proxy() {
   //draw_cir("#00FF00");
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
	
	
   // draw_cir("#FF0000");
	
	
        var config = {
  mode: "system",
  
};

/*
chrome.proxy.settings.get(
      {'incognito': false},
      function(config) {
          console.log(JSON.stringify(config));
      });
*/
	  
	  
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
