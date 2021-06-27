
var express = require('express');
var router = express.Router();

var { JSDOM } = require( "jsdom" );
var { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
var fs = require('fs');

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

var contractABI_ProductTransfer = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "ProductTransfermapping_index",
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
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "InPackaged",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "LoadandDepart",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
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
    "name": "setProductTransferNumber",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getProductTransferMappingId",
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
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getProductTransfer",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "UnloadandArrival",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "name": "getProductTransferMappingIndex",
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
    "name": "product_transfer_list",
    "outputs": [
      {
        "name": "Product_id",
        "type": "uint256"
      },
      {
        "name": "Productstate",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "Finished",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "Failed",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getProductTransferListlength",
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
    "inputs": [
      {
        "name": "AccountyKey_addr",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];


var contractABI_Product =[
  {
    "constant": false,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      },
      {
        "name": "product_time",
        "type": "string"
      }
    ],
    "name": "setProductTime",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "name": "getProductone",
    "outputs": [
      {
        "name": "product_name",
        "type": "string"
      },
      {
        "name": "company_name",
        "type": "string"
      },
      {
        "name": "dispatch_time",
        "type": "string"
      },
      {
        "name": "receive_time",
        "type": "string"
      },
      {
        "name": "dispatch_amount",
        "type": "uint256"
      },
      {
        "name": "receive_amount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
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
        "name": "product_name",
        "type": "string"
      },
      {
        "name": "company_name",
        "type": "string"
      },
      {
        "name": "dispatch_time",
        "type": "string"
      },
      {
        "name": "receive_time",
        "type": "string"
      },
      {
        "name": "dispatch_amount",
        "type": "uint256"
      },
      {
        "name": "receive_amount",
        "type": "uint256"
      }
    ],
    "name": "setProductone",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "name": "getupdateProductDay",
    "outputs": [
      {
        "name": "update_product_day",
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
    "name": "getProductfinal",
    "outputs": [
      {
        "name": "number_and_date_of_invoice",
        "type": "string"
      },
      {
        "name": "certificate_number",
        "type": "string"
      },
      {
        "name": "company_address",
        "type": "string"
      },
      {
        "name": "dangerous_or_flammable_cargo",
        "type": "string"
      },
      {
        "name": "product_status",
        "type": "string"
      },
      {
        "name": "product_time",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
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
        "name": "update_product_day",
        "type": "string"
      }
    ],
    "name": "updateProductDay",
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
        "name": "product_day",
        "type": "string"
      }
    ],
    "name": "setProductDay",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "name": "getshippingorderone",
    "outputs": [
      {
        "name": "dangerous_or_flammable_cargo",
        "type": "string"
      },
      {
        "name": "consignee",
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
    "name": "getProducttwo",
    "outputs": [
      {
        "name": "price",
        "type": "uint256"
      },
      {
        "name": "exporter",
        "type": "string"
      },
      {
        "name": "consignee",
        "type": "string"
      },
      {
        "name": "means_of_transport_and_route",
        "type": "string"
      },
      {
        "name": "incoterns",
        "type": "string"
      },
      {
        "name": "bill_of_lading",
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
    "name": "getupdateProductTime",
    "outputs": [
      {
        "name": "update_product_time",
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
    "name": "getProductDay",
    "outputs": [
      {
        "name": "product_day",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
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
        "name": "number_and_date_of_invoice",
        "type": "string"
      },
      {
        "name": "certificate_number",
        "type": "string"
      },
      {
        "name": "company_address",
        "type": "string"
      },
      {
        "name": "dangerous_or_flammable_cargo",
        "type": "string"
      },
      {
        "name": "product_status",
        "type": "string"
      },
      {
        "name": "product_time",
        "type": "string"
      }
    ],
    "name": "setProductfinal",
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
        "name": "update_product_time",
        "type": "string"
      }
    ],
    "name": "updateProductTime",
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
        "name": "receive_time",
        "type": "string"
      },
      {
        "name": "dispatch_time",
        "type": "string"
      },
      {
        "name": "receive_amount",
        "type": "uint256"
      },
      {
        "name": "dispatch_amount",
        "type": "uint256"
      },
      {
        "name": "dangerous_or_flammable_cargo",
        "type": "string"
      },
      {
        "name": "product_status",
        "type": "string"
      }
    ],
    "name": "updateProduct",
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
        "name": "price",
        "type": "uint256"
      },
      {
        "name": "exporter",
        "type": "string"
      },
      {
        "name": "consignee",
        "type": "string"
      },
      {
        "name": "means_of_transport_and_route",
        "type": "string"
      },
      {
        "name": "incoterns",
        "type": "string"
      },
      {
        "name": "bill_of_lading",
        "type": "string"
      }
    ],
    "name": "setProducttwo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "ProductTransfer_addr",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "Product_number",
        "type": "uint256"
      }
    ],
    "name": "NewProduct",
    "type": "event"
  }
];


Web3 = require('web3');
ethers = require('ethers');

MongoClient = require('mongodb').MongoClient;

var contractAddress_user_login_register = '0x892B99F4b01fB911780bf97BEc5C7b12019a4c6D';
var contractAddress_account_key_message = '0x2aFDd97CF295bAb5214D22F58f7228156518C935';

var contractAddress_product_transfer = '0xCCFcaED487F301b17e2864529A9313C7E6d043bF';

var contractAddress_product = '0x87032F4B93cFd5BCB10872A5899d7617B93166eb';


var web3 = new Web3( new Web3.providers.HttpProvider("http://localhost:7545") );

var UserContract = new web3.eth.Contract( contractABI_user_login_register, contractAddress_user_login_register );
var AccountKeyMessageContract = new web3.eth.Contract( contractABI_account_key_message, contractAddress_account_key_message );

var ProductContract = new web3.eth.Contract( contractABI_Product, contractAddress_product );
var ProductTransferContract = new web3.eth.Contract( contractABI_ProductTransfer, contractAddress_product_transfer );

var defaultGas = 900000;
var exporter_first_address_used = false;
var importer_first_address_used = false;
var carrier_first_address_used = false;


/*此程式suretoadd可以變成promise然後
再透過此promise讓其他程式(setCurrentWorkingAddress, getloginUserInfoafteradd...... )可以順利執行*/
async function suretoadd(){
    return true;
}


/*此程式透過UserContract 判定此User是否還存在*/
async function checkloginUser(req, res) {

  var user_account = req.body.useraccountlogin;
  var user_password = req.body.userpasswordlogin;
  return UserContract.methods.checkloginUser(user_account, user_password).call().then( function(result){
      return result;
  });
}



/*此程式根據使用者目前對應之ganache帳號
透過AccountKeyMessageContract紀錄*/
async function setCurrentWorkingAddress( result, _given_current_address ){

  if(result){

    return AccountKeyMessageContract.methods.setCurrentWorkingAddress( _given_current_address ).send(
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
}

/*此程式根據使用者帳號找尋對應之使用者資訊*/
async function getloginUserInfo( user_login_account ){

  return UserContract.methods.getloginUserInfo( user_login_account ).call().then( function( user_info){
      return user_info;
  });

}

/*此程式可根據user_role(Exporter,Importer,或是Carrier)而進入不同的頁面
並同時紀錄目前之地址*/
async function getloginUserInfoafteradd(req, res){

    var user_account = req.body.useraccountlogin;
    let user_login_info = await getloginUserInfo( user_account );
    var show_user_role_option = user_login_info["user_role_option"];
    var show_user_password = user_login_info["user_password"];
    var show_user_address = user_login_info["user_address"];
    add_user_promise = suretoadd();
    if( show_user_role_option == 'Exporter'){

        add_user_promise.then( function(result){
            setCurrentWorkingAddress( result, show_user_address).then( function(){
                res.cookie('role', show_user_role_option, { path: '/login', maxAge:600000  });
                res.redirect('/login/product_and_BL_logout_all_Exporter');
            });
        });
    }

    if( show_user_role_option == 'Importer'){

        add_user_promise.then( function(result){
            setCurrentWorkingAddress( result, show_user_address).then( function(){
                res.cookie('role', show_user_role_option, { path: '/login', maxAge:600000  });
                res.redirect('/login/product_and_BL_logout_all_Importer');
            });
        });

    }

    if( show_user_role_option == 'Carrier'){

        add_user_promise.then( function(result){
            setCurrentWorkingAddress( result, show_user_address).then( function(){
                res.cookie('role', show_user_role_option, { path: '/login', maxAge:600000  });
                res.redirect('/login/product_and_BL_logout_all_Carrier');
             });
        });

    }

}








function getProductlength(){

  return ProductTransferContract.methods.getProductTransferListlength().call().then( function(Product_length){
      return Product_length;
  });
}

function getProductTransferMappingId(index){

  return ProductTransferContract.methods.getProductTransferMappingId(index).call().then( function(Product_number){
      return Product_number;
  });
}

function getProductDay( product_id ){

  return ProductContract.methods.getProductDay( product_id ).call().then( function( product_info){
      return product_info;
  });
}


function render(filename, params) {
  var data = fs.readFileSync(filename, 'utf8');
  for (var key in params) {
    data = data.replace('{' + key + '}', params[key]);
  }
  return data;
}

/*此程式可顯示近期已新增之貨物個數，並根據cookie中對應之
role而附上其相關之貨物查詢頁面(product_logout_status_Exporter,
product_logout_status_Importer,product_logout_status_Carrier)*/
async function show_recent_products(req,res){

    var index;
    if ( $("#Products_table tbody").length == 0 ) {

        $("#Products_table").append("<tbody></tbody>");
    }

    var number_of_product = await getProductlength();
    if( number_of_product < 0){
        console.log("Registration for Product is failed");
    }
    console.log("The val of number of the product");
    console.log( number_of_product );
    for(index=0; index<number_of_product; index++){
        var product_number = await getProductTransferMappingId(index);
        var product_info_day = await getProductDay( product_number );
        console.log("so bad man");
        console.log(product_number);
        if ( product_number >0 ){
                /*$("#Products_table tbody").append('<tr><td>'+ product_number +'</td><td>' +
                product_info_day );*/
                /*res.send( '<tr><td>' + product_number  + '</td><td>' + product_info_day );*/
                res.send(render('./views/product_and_BL_logout_all_Importer.html', {
                    product_number: product_number,
                    product_info_day: product_info_day
                }));
        }

    }
    res.render('product_and_BL_logout_all_Importer.html');
}

async function show_products_number_and_link(req,res){

  show_recent_products(req,res);
}








/* 當使用者要登入時,網址輸入http://localhost:3000/login 即可登入*/
router.get('/', function(req, res, next) {
    res.render('login.html');

});

/* 當網址輸入http://localhost:3000/login/product_and_BL_logout_all_Importer
提供Carrier 可查看之介面*/
router.get('/product_and_BL_logout_all_Carrier', function(req, res, next) {
    res.render('product_and_BL_logout_all_Carrier.html');
});

/* 當網址輸入http://localhost:3000/login/product_and_BL_logout_all_Exporter
提供Exporter 可查看之介面*/
router.get('/product_and_BL_logout_all_Exporter', function(req, res, next) {
    res.render('product_and_BL_logout_all_Exporter.html');
});

/* 當網址輸入http://localhost:3000/login/product_and_BL_logout_all_Importer
提供Importer 可查看之介面*/
router.get('/product_and_BL_logout_all_Importer', function(req, res, next) {

    show_products_number_and_link(req,res);
});

/*當使用者透過login.html 輸入資料時,將post資料至 此/login/userlogin之路徑
而這邊router處理相對應之post路徑並同時執行 getloginUserInfoafteradd 之function*/
router.post('/userlogin',function(req,res){
    getloginUserInfoafteradd(req,res);
});



module.exports = router;