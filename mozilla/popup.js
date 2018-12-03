var el = document.getElementById('btn_submit');
if(el){
  el.addEventListener('click', conn);
}

var el2 = document.getElementById('btn_cancel');
if(el2){
  el2.addEventListener('click', disconn);
}

function conn()
{
		browser.runtime.sendMessage({ msg: "conn"});
}

function disconn()
{
		browser.runtime.sendMessage({ msg: "dis"});
}

