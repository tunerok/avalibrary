'use strict';

localStorage.setItem('number', '1');



var proxyON = {
	proxyType:"autoConfig",
	autoConfigUrl:""
};

var proxyOFF = {
	proxyType: "system"
};

function conn_proxy() {

    browser.proxy.settings.set({value: proxyON});
	browser.browserAction.setIcon({path: 'icon_g.png'});		
	
}



function disconn_proxy() {
	
    browser.proxy.settings.set({value: proxyOFF});
	browser.browserAction.setIcon({path: 'icon.png'});	
	
	
}


function update_proxy(){
	var gettingItem = localStorage.getItem('number');

	var current = gettingItem;
	if (current == '1'){
		conn_proxy();
		current = '2';
	}
	else
	{
		disconn_proxy();
		current = '1';
	}
	localStorage.setItem('number', current);

}


browser.browserAction.onClicked.addListener(update_proxy);