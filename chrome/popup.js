
var el = document.getElementById('btn_submit');
if(el){
  el.addEventListener('click', conn);
}

var el2 = document.getElementById('btn_cancel');
if(el2){
  el2.addEventListener('click', disc);
}

function conn(){
	chrome.extension.sendMessage({ msg: "conn" });
}

function disc(){
	chrome.extension.sendMessage({ msg: "dis" });
}

