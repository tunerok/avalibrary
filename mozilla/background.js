
function conn_proxy() {
   //draw_cir("#00FF00");
   console.log("FUNC");
   
  // const proxyScriptURL = "";

	//browser.proxy.register(proxyScriptURL);
   
   let proxySettings = {
  proxyType: "manual",
  autoConfigUrl:"proxyScriptURL",

};

browser.proxy.settings.set({value: proxySettings});
 

browser.browserAction.setIcon({path: 'icon_g.png'});		
	console.log("ICON");
}



function disconn_proxy() {
	
	
   // draw_cir("#FF0000");
	
	
 let proxySettings = {
  proxyType: "system",
  
};

browser.proxy.settings.set({value: proxySettings});

	
	
browser.browserAction.setIcon({path: 'icon.png'});		
	
	
}


browser.runtime.onMessage.addListener(
	function(req, sen, resp){
		if (req.msg == "conn") conn_proxy();
		if (req.msg == "dis") disconn_proxy();
	}
		);