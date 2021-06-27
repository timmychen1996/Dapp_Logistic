/*var express = require('express');
var router = express.Router();*/

/*2021/6/14 add*/
const xhr = new XMLHttpRequest();
const btn_register = document.getElementById('okBtnRegisterA');
window.onload = init();

/*此程式當使用者輸入相關之資料後,
將其對應之public key與使用者資料透過Account Key Message Contract 儲存
並同時回傳對應之私鑰*/

function init() {

    btn_register.addEventListener('click' , addUserinfo);
}


function addUserinfo(){

    console.log("where_are_you_my_friend");
    let user_info = {

        user_account: undefined,
        user_password: undefined,
        user_role_option: undefined
    }

    /*xhr.open('POST', '/addUserinfo', true);
    xhr.setRequestHeader("Content-type", "application/json");*/
    /*xhr.onreadystatechange = function() {
        /*console.log("good")
        console.log(xhr.readyState)*/
        /*if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                  // log(xhr.responseText);
                  console.log("The val of xhr.responseText......");
                  console.log(xhr.responseText)

                  var user_account = $("#accountregisterA").val();
                  var user_password = $("#passwordregisterA").val();
                  var user_role_option = $("#user_career_register option:selected").text();
                  var index = -1;
                  user_info.user_account = user_account;
                  user_info.user_password = user_password;
                  user_info.user_role_option = user.user_role_option;
                  xhr.send(JSON.stringify(user_info));

              } else {
                  log(`ERROR: status code ${xhr.status}`);
              }
        }
    };*/
}




/*此程式suretoadd可以變成promise然後
再透過此promise讓其他程式(suretoadd, getloginUserInfoafteradd...... )可以順利執行*/
async function suretoadd(){
    return true;
}













