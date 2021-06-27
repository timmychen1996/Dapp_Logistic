
var express = require('express');
var router = express.Router();

var contractABI_user_login_register = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "user_account",
        "type": "string"
      },
      {
        "name": "user_password",
        "type": "string"
      },
      {
        "name": "user_role_option",
        "type": "string"
      },
      {
        "name": "user_address",
        "type": "string"
      }
    ],
    "name": "registerUserInfo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "user_account",
        "type": "string"
      },
      {
        "name": "user_password",
        "type": "string"
      }
    ],
    "name": "checkloginUser",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "user_account",
        "type": "string"
      }
    ],
    "name": "getloginUserInfo",
    "outputs": [
      {
        "name": "user_password",
        "type": "string"
      },
      {
        "name": "user_role_option",
        "type": "string"
      },
      {
        "name": "user_address",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];

var contractABI_account_key_message =[
  {
    "constant": false,
    "inputs": [
      {
        "name": "_account",
        "type": "string"
      },
      {
        "name": "_key",
        "type": "string"
      }
    ],
    "name": "setAccountKey",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      }
    ],
    "name": "setBoLNumber",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "thetime",
        "type": "string"
      },
      {
        "name": "message",
        "type": "string"
      }
    ],
    "name": "setBoLStatusMessage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_given_current_address",
        "type": "string"
      }
    ],
    "name": "setCurrentWorkingAddress",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      }
    ],
    "name": "setProductNumber",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "thetime",
        "type": "string"
      },
      {
        "name": "harbor_name",
        "type": "string"
      },
      {
        "name": "message",
        "type": "string"
      }
    ],
    "name": "setProductStatusMessage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theSignaturenumber",
        "type": "string"
      },
      {
        "name": "themessage",
        "type": "string"
      }
    ],
    "name": "setSignatureandMessage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bol_list",
    "outputs": [
      {
        "name": "BLmapping_id",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bol_mapping_index",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bol_message_index",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bol_message_list",
    "outputs": [
      {
        "name": "BLmapping_id",
        "type": "uint256"
      },
      {
        "name": "BL_registration_time",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_career",
        "type": "string"
      }
    ],
    "name": "getAccountCareer",
    "outputs": [
      {
        "name": "_account",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_account",
        "type": "string"
      }
    ],
    "name": "getAccountKey",
    "outputs": [
      {
        "name": "_key",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      }
    ],
    "name": "getBoLMappingIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "queue_index",
        "type": "uint256"
      }
    ],
    "name": "getBoLMessageInfo",
    "outputs": [
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "_message_registration_time",
        "type": "string"
      },
      {
        "name": "message",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      }
    ],
    "name": "getBoLStatusMessage",
    "outputs": [
      {
        "name": "message",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getCurrentWorkingAddress",
    "outputs": [
      {
        "name": "_current_working_address",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getMessageofSignature",
    "outputs": [
      {
        "name": "_message",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      }
    ],
    "name": "getProductMappingIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      },
      {
        "name": "queue_product_index",
        "type": "uint256"
      }
    ],
    "name": "getProductMessageInfo",
    "outputs": [
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "_message_registration_time",
        "type": "string"
      },
      {
        "name": "harbor_name",
        "type": "string"
      },
      {
        "name": "message",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getProductQueueLength",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      }
    ],
    "name": "getProductStatusMessage",
    "outputs": [
      {
        "name": "message",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getQueueLength",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getSignature",
    "outputs": [
      {
        "name": "_signature",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getSignatureLength",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "message_list",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "product_list",
    "outputs": [
      {
        "name": "Productmapping_id",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "product_mapping_index",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "product_message_index",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "product_message_list",
    "outputs": [
      {
        "name": "Productmapping_id",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "signature_list",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];


Web3 = require('web3');
ethers = require('ethers');

MongoClient = require('mongodb').MongoClient;

var contractAddress_user_login_register = '0x892B99F4b01fB911780bf97BEc5C7b12019a4c6D';
var contractAddress_account_key = '0x2aFDd97CF295bAb5214D22F58f7228156518C935';

var web3 = new Web3( new Web3.providers.HttpProvider("http://localhost:7545") );

var UserContract = new web3.eth.Contract( contractABI_user_login_register, contractAddress_user_login_register );
var AccountKeyMessageContract = new web3.eth.Contract( contractABI_account_key_message, contractAddress_account_key );

var defaultGas = 900000;
var exporter_first_address_used = false;
var importer_first_address_used = false;
var carrier_first_address_used = false;



/*此程式根據使用者角色找出對應之user_account*/
async function user_role_to_ganache_account(user_role_option){

  return AccountKeyMessageContract.methods.getAccountCareer( user_role_option ).call().then( function(user_account){
      return user_account;
  });

}

/*此程式suretoadd可以變成promise然後
再透過此promise讓其他程式(suretoadd, getloginUserInfoafteradd...... )可以順利執行*/
async function suretoadd(){
    return true;
}

/*此程式會回傳私鑰且根據Ganache中的HD Path來決定*/
/*此HD Path 可在Ganache Console 的右上方找到*/
function generatePrivateKey(index){

    index_string = index.toString();
    let mnemonic = "laundry pair wet panic cake shallow now giggle wide robust dolphin analyst";
    let path = "m/44'/60'/0'/0/" + index_string;
    let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic,path);
    let pri_key = mnemonicWallet.privateKey;
    return pri_key;
}

/*此程式根據使用者的地址 進而產生對應之public-key*/
async function generatePublicKey( user_address ){

    const provider = new ethers.providers.JsonRpcProvider('http://localhost:7545');
    /*provider.getSigner(1) refers to account 1 in ganache console
    provider.getSigner(2) refers to account 2 in ganache console and etc*/

    /*This one refers to exporter one*/
    if( user_address == "0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b" ){
        var get_signer_index = 0;
    }

    /*This one refers to exporter two*/
    if( user_address == "0x3cF2DEdffC74ab8776f61C2d7F261c121c16F45c" ){
        var get_signer_index = 2;
    }

    /*This one refers to importer one*/
    if( user_address == "0x3C95107cAd460D3989F2dB09606BB436c2f47482" ){
        var get_signer_index = 1;
    }

    /*This one refers to importer two*/
    if( user_address == "0x9eb378EFfa2bE988B96431B421bEd2F859006A94"){
        var get_signer_index = 3;
    }

    /*This one refers to carrier one*/
    if( user_address == "0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28" ){
        var get_signer_index = 4;
    }

    /*This one refers to carrier two*/
    if( user_address == "0x87919efD1fbBEC204aA429fab906C5AF0196E795") {
        var get_signer_index = 5;
    }

    const signer = provider.getSigner(get_signer_index);
    const ethAddress = await signer.getAddress();
    const hash = await ethers.utils.keccak256( ethAddress );
    const sig = await signer.signMessage(ethers.utils.arrayify(hash));
    const pubKey = ethers.utils.recoverPublicKey(ethers.utils.arrayify(ethers.utils.hashMessage(ethers.utils.arrayify(hash))), sig);
    return pubKey;
}


/*此程式透過AccountKeyMessageContract紀錄使用者之地址與對應之公鑰*/
async function setAccountwithKey(user_address, pub_key){

  return AccountKeyMessageContract.methods.setAccountKey(user_address, pub_key).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });
}

/*此程式透過UserContract 紀錄相關之user 訊息*/
function registerUserInfo( user_account, user_password, user_role_option, user_address){

  return UserContract.methods.registerUserInfo( user_account, user_password, user_role_option, user_address).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){

      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });
}

/*此程式當使用者輸入相關之資料後,
將其對應之public key與使用者資料透過Account Key Message Contract 儲存
並同時產生對應之私鑰*/
async function addUserinfo(req, res){

    /*透過req.body 找尋user 帳戶,密碼及career*/
    var user_account = req.body.useraccount;
    var user_password = req.body.userpassword;
    var user_role_option = req.body.usercareer;
    if( user_role_option == 'Exporter' ){

        if( exporter_first_address_used ){

             var user_address = '0x3cF2DEdffC74ab8776f61C2d7F261c121c16F45c';
             index = 2;
        }
        else{

            var user_address = await user_role_to_ganache_account(user_role_option);
            exporter_first_address_used = true;
            index = 0;
        }
    }

    if( user_role_option == 'Importer' ){

        if( importer_first_address_used ){

            var user_address = '0x9eb378EFfa2bE988B96431B421bEd2F859006A94';
            index = 3;

        }
        else{

            var user_address = await user_role_to_ganache_account(user_role_option);
            importer_first_address_used = true;
            index = 1;
        }

    }

    if( user_role_option == 'Carrier'){

        if( carrier_first_address_used ){

             var user_address = '0x87919efD1fbBEC204aA429fab906C5AF0196E795';
             index = 5;
        }
        else{

            var user_address = await user_role_to_ganache_account(user_role_option);
            carrier_first_address_used = true;
            index = 4;
        }
    }

    let pub_key = await generatePublicKey(user_address);
    let account_with_key = await setAccountwithKey(user_address, pub_key);
    let user_registered_info = await registerUserInfo( user_account, user_password, user_role_option, user_address);
    let pri_key_all = await generatePrivateKey(index);
    let pri_key = pri_key_all.substring(2);
}


/* 當使用者要登入時,網址輸入http://localhost:3000/register 即可登入*/
router.get('/', function(req, res, next) {

    res.render('register.html');
});


/*當使用者透過register.html執行相關http post行為時, router 此時處理這方面的post請求*/
router.post('/userregister', function(req, res, next) {

    /*res.redirect 先重新導回userregister的頁面
    再執行addUserinfo function*/
    res.redirect('/register');
    addUserinfo(req, res);

});



module.exports = router;