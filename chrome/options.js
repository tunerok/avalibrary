//inp
var first_inp = document.getElementById('first_inp');
var second_inp = document.getElementById('second_inp');

//labels
var first_label = document.getElementById('first_label');
var second_label = document.getElementById('second_label');


//divs
var first_div = document.getElementById('first_div');
var second_div = document.getElementById('second_div');

function change_select(){
  
  var proxy_type = document.getElementById('proxy_type').value;
  switch(proxy_type){
    case 'direct':
    case 'auto_detect':
    case 'system':
      first_div.style.visibility = 'hidden';
      second_div.style.visibility = 'hidden';
     break;
    case 'pac_script':
      first_label.innerHTML = 'URL to PAC-file: ';
      first_div.style.visibility = 'visible';
      second_div.style.visibility = 'hidden';
      break;
    case 'fixed_servers':
      first_label.innerHTML = 'Host: ';
      first_div.style.visibility = 'visible';
      second_label.innerHTML = 'Port: ';
      second_div.style.visibility = 'visible';
      break;

  }
}


window.onload = function() {
  change_select();
  document.getElementById('proxy_type').addEventListener('change' , change_select);
}

function save_options() {
  var color = document.getElementById('proxy_type').value;
  change_select();
  
}




document.getElementById('save').addEventListener('click', save_options);