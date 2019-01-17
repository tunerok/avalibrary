//inp
var first_inp = document.getElementById('first_inp');
var second_inp = document.getElementById('second_inp');

//labels
var first_label = document.getElementById('first_label');
var second_label = document.getElementById('second_label');
var proxy_mode_label = document.getElementById('proxy_mode_text');


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
      first_label.innerHTML = chrome.i18n.getMessage("extUrlToPacText");
      first_div.style.visibility = 'visible';
      second_div.style.visibility = 'hidden';
      break;
    case 'fixed_servers':
      first_label.innerHTML = chrome.i18n.getMessage("extHostText");
      first_div.style.visibility = 'visible';
      second_label.innerHTML = chrome.i18n.getMessage("extPortText");
      second_div.style.visibility = 'visible';
      break;
      case 'pac_script_data':
        first_label.innerHTML = chrome.i18n.getMessage("extPACScriptText");
        first_div.style.visibility = 'visible';
        second_div.style.visibility = 'hidden';
      break;

  }
}


window.onload = function() {
  btn_save.innerHTML = chrome.i18n.getMessage("extSaveOptBtn");
  proxy_mode_label.innerHTML = chrome.i18n.getMessage("extProxyMode");
  chrome.storage.local.get('typep', function(datap){
      var typep = datap.typep;
      if (typep != 1){
        var setter = "";
        switch (typep){
        case 2: setter = chrome.i18n.getMessage("extTypepAD");
        break;
        case 3: setter = chrome.i18n.getMessage("extTypepSys");
        break;
        case 4: setter = chrome.i18n.getMessage("extTypepRPS");
        break;
        case 5: setter = chrome.i18n.getMessage("extTypepFS");
        break;
        case 6: setter = chrome.i18n.getMessage("extTypepPSD");
        break;
      }
        document.getElementById('status').innerHTML = chrome.i18n.getMessage("extCurrentProxySettings") + setter;
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
    status = chrome.i18n.getMessage("extTypepD");
    chrome.storage.local.set({typep: 1, first:"", second:""}, function() {
      console.log('The type is set to 1');
    });
     break;
    case 'auto_detect':
    status = chrome.i18n.getMessage("extTypepAD");
    chrome.storage.local.set({typep: 2, first:"", second:""}, function() {
      console.log('The type is set to 2');
    });
     break;
    case 'system':
    status = chrome.i18n.getMessage("extTypepSys");
    chrome.storage.local.set({typep: 3, first:"", second:""}, function() {
      console.log('The type is set to 3');
    });
     break;
    case 'pac_script':
      status = chrome.i18n.getMessage("extTypepRPS");
      chrome.storage.local.set({typep: 4, first:first_inp.value, second:""}, function() {
      console.log('The type is set to 4');
    });
      break;
    case 'fixed_servers':
      status = chrome.i18n.getMessage("extTypepFS");
      chrome.storage.local.set({typep: 5, first: first_inp.value, second:parseInt(second_inp.value, 10)}, function() {
      console.log('The type is set to 5');
      });
      break;
      case 'pac_script_data':
      status = chrome.i18n.getMessage("extTypepPSD");
        chrome.storage.local.set({typep: 6, first: first_inp.value, second:""}, function() {
              console.log('The type is set to 6');
        });
      break;


    }
    document.getElementById('status').innerHTML = chrome.i18n.getMessage("extSetProxySettings") + status;
    console.log('end');

  }


  
