//inp
var first_inp = document.getElementById('first_inp');
var second_inp = document.getElementById('second_inp');

//labels
var first_label = document.getElementById('first_label');
var second_label = document.getElementById('second_label');


//divs
var first_div = document.getElementById('first_div');
var second_div = document.getElementById('second_div');

//btns
var btn_save = document.getElementById('save');


if(btn_save){
  btn_save.addEventListener('click', save_options);
}

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
      case 'pac_script_data':
        first_label.innerHTML = 'Pac-script data: ';
        first_div.style.visibility = 'visible';
        second_div.style.visibility = 'hidden';
      break;

  }
}


window.onload = function() {
  chrome.storage.sync.get('typep', function(datap){
      var typep = datap.typep;
      if (typep != 1){
        var setter = "";
        switch (typep){
        case 2: setter = "auto detect";
        break;
        case 3: setter = "system";
        break;
        case 4: setter = "pac script";
        break;
        case 5: setter = "fixed servers";
        break;
        case 6: setter = "pac script data";
        break;
      }
        document.getElementById('status').innerHTML = "Текущие настройки прокси выставлены в " + setter;
      }
  });
  change_select();
  document.getElementById('proxy_type').addEventListener('change' , change_select);
}

function save_options() {
  console.log('save');
  var status = "";
  var proxy_type = document.getElementById('proxy_type').value;
  switch(proxy_type){
    case 'direct':
    status = "direct";
    chrome.storage.sync.set({typep: 1, first:"", second:""}, function() {
      console.log('The type is set to 1');
    });
     break;
    case 'auto_detect':
    status = "auto detect";
    chrome.storage.sync.set({typep: 2, first:"", second:""}, function() {
      console.log('The type is set to 2');
    });
     break;
    case 'system':
    status = "system";
    chrome.storage.sync.set({typep: 3, first:"", second:""}, function() {
      console.log('The type is set to 3');
    });
     break;
    case 'pac_script':
      status = "pac script";
      chrome.storage.sync.set({typep: 4, first:first_inp.value, second:""}, function() {
      console.log('The type is set to 4');
    });
      break;
    case 'fixed_servers':
      status = "fixed";
      chrome.storage.sync.set({typep: 5, first: first_inp.value, second:parseInt(second_inp.value, 10)}, function() {
      console.log('The type is set to 5');
      });
      break;
      case 'pac_script_data':
      status = "pac script data";
        chrome.storage.sync.set({typep: 6, first: first_inp.value, second:""}, function() {
              console.log('The type is set to 6');
        });
      break;


    }
    document.getElementById('status').innerHTML = "Настройки прокси выставлены " + status;
    console.log('end');

  }
