
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


/*
function draw_cir(s) {
	
	var canvas = document.getElementById("imgCanvas");
    var context = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect();
    var posx = 50;
    var posy = 10;

    context.fillStyle = s ;
    context.beginPath();
    context.arc(posx, posy, 10, 0, 2 * Math.PI);
    context.fill();
	
}*/