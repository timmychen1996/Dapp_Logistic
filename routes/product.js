
var express = require('express');
var router = express.Router();
var { JSDOM } = require( "jsdom" );
var { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

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

var contractABI_Account_Key_Message = [
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


var contractAddress_product = '0x87032F4B93cFd5BCB10872A5899d7617B93166eb';

var contractAddress_product_transfer = '0xCCFcaED487F301b17e2864529A9313C7E6d043bF';

var contractAddress_account_key_message = '0xED26e7fbf25507A8A3237AF35B931477c161912e';

var web3 = new Web3( new Web3.providers.HttpProvider("http://localhost:7545") );


var ProductContract = new web3.eth.Contract( contractABI_Product, contractAddress_product );
var ProductTransferContract = new web3.eth.Contract( contractABI_ProductTransfer, contractAddress_product_transfer );
var AccountKeyMessageContract = new web3.eth.Contract( contractABI_Account_Key_Message, contractAddress_account_key_message );


var defaultGas = 4700000;

/*因貨物對應之資訊太過繁瑣，且solidity 之contract 其variable最多
可放七至八個變數, 故分成setProductone, setProducttwo, setProductfinal*/
function setProductone(Pnumber, product_name, company_name,
  dispatch_time, receive_time, dispatch_amount, receive_amount){

  console.log("Yep we are in the setProductone part");
  return ProductContract.methods.setProductone(Pnumber, product_name, company_name,
  dispatch_time, receive_time, dispatch_amount, receive_amount).send(
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

function setProducttwo(Pnumber, price, exporter,
  consignee, means_of_transport_and_route, incoterns, bill_of_lading){

  console.log("Yep we are in the setProducttwo part");
  return ProductContract.methods.setProducttwo(Pnumber, price, exporter,
  consignee, means_of_transport_and_route, incoterns, bill_of_lading).send(
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

function setProductfinal(Pnumber, number_and_date_of_invoice, certificate_number,
  company_address, dangerous_or_flammable_cargo, product_status, product_registered_time){

  console.log("Yep we are in the setProductfinal part");
  return ProductContract.methods.setProductfinal(Pnumber, number_and_date_of_invoice, certificate_number,
    company_address, dangerous_or_flammable_cargo, product_status,product_registered_time).send(
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

/*紀錄新增貨物時所對應之時間*/
function setProductday(Pnumber, product_registered_day){

  return ProductContract.methods.setProductDay(Pnumber, product_registered_day).send(
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

/*當新增貨物與提單時，使用者(Exporter, Importer, Carrier)會輸入私鑰，
而產生對應之私鑰與訊息，這邊的訊息是指貨物與提單的單號*/
function setSignatureandMessage(sign_signature, message){

  return AccountKeyMessageContract.methods.setSignatureandMessage(sign_signature,message).send(
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

/*因貨物與提單的單號不只一個，所以需要透過AccountKeyMessageContract 紀錄每一單號對應之訊息*/
function setMessageofSignature(index, message){

  return AccountKeyMessageContract.methods.setMessageofSignature(index, message).send(
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

/*透過AccountKeyMessageContract 找出對應之簽章*/
function getSignature(index){

  return AccountKeyMessageContract.methods.getSignature(index).call().then( function(signature){
    return signature;
  });
}

/*透過AccountKeyMessageContract 找出對應之訊息(message)*/
function getMessageofSignature(index){

  return AccountKeyMessageContract.methods.getMessageofSignature(index).call().then(function(message){
    return message;
  });
}


function getProductone( product_id){

  return ProductContract.methods.getProductone( product_id ).call().then( function( product_info ){
      return product_info;
  });
}

function getshippingorderone( product_id ){

  return ProductContract.methods.getshippingorderone(product_id).call().then( function( shipping_order_info ){
      return shipping_order_info;
  })
}

function getProducttwo( product_id){

  return ProductContract.methods.getProducttwo( product_id ).call().then( function( product_info ){
      return product_info;
  });

}

function getProductfinal( product_id ){

  return ProductContract.methods.getProductfinal( product_id ).call().then( function( product_info ){
      return product_info;
  });
}

function getProductDay( product_id ){

  return ProductContract.methods.getProductDay( product_id ).call().then( function( product_info){
      return product_info;
  });
}

function getupdateProductDay( product_id ){

  return ProductContract.methods.getupdateProductDay( product_id ).call().then( function( product_info){
      return product_info;
  });

}


function getupdateProductTime( product_id ){

  return ProductContract.methods.getupdateProductTime( product_id ).call().then( function( product_info){
      return product_info;
  });
}

/*將所找尋之對應資訊，透過前端頁面顯示出來，而因資訊過多故需
showProductinfoone, showProductinfotwo, showProductinfofinal 來表示*/
function showProductinfoone( product_info_one ){

    var product_name = product_info_one["product_name"];
    var company_name = product_info_one["company_name"];
    var dispatch_time = product_info_one["dispatch_time"];
    var receive_time = product_info_one["receive_time"];
    var dispatch_amount = product_info_one["dispatch_amount"];
    var receive_amount = product_info_one["receive_amount"];

    $('#productNameB').append( product_name );
    $('#companyNameB').append( company_name );
    $('#dispatchTimeB').append( dispatch_time );
    $('#receiveTimeB').append( receive_time );
    $('#dispatchAmountB').append( dispatch_amount );
    $('#receiveAmountB').append( receive_amount );

}


function showshippingorderone( shipping_order_info_one ){

    var dangerous_or_flammable_cargo =  shipping_order_info_one["dangerous_or_flammable_cargo"];
    var consignee =  shipping_order_info_one["consignee"];
    $('#consigneefromproductC').append( consignee );
    $('#dangerousorflammablecargofromproductC').append( dangerous_or_flammable_cargo );
}


function showProductinfotwo( product_info_two ){

    var price = product_info_two["price"];
    var exporter = product_info_two["exporter"];
    var consignee = product_info_two["consignee"];
    var means_of_transport_and_route = product_info_two["means_of_transport_and_route"];
    var incoterns = product_info_two["incoterns"];
    var bill_of_lading = product_info_two["bill_of_lading"];

    $('#priceB').append( price );
    $('#exporterB').append( exporter );
    $('#consigneeB').append( consignee );
    $('#meansoftransportandrouteB').append( means_of_transport_and_route );
    $('#incoternsB').append( incoterns );
    $('#billofladingB').append( bill_of_lading );

}


function showProductinfofinal( product_info_final ){

    var number_and_date_of_invoice = product_info_final["number_and_date_of_invoice"];
    var certificate_number = product_info_final["certificate_number"];
    var company_address = product_info_final["company_address"];
    var dangerous_or_flammable_cargo = product_info_final["dangerous_or_flammable_cargo"];
    var product_status = product_info_final["product_status"];
    var product_registered_time = product_info_final["product_time"];

    $('#numberanddateofinvoiceB').append(number_and_date_of_invoice);
    $('#certificatenumberB').append(certificate_number);
    $('#companyaddressB').append(company_address);
    $('#dangerousorflammablecargoB').append(dangerous_or_flammable_cargo);
    $('#productstatusB').append( product_status);
    $('#productregisteredtimeB').append( product_registered_time );

}


function showProductDay( product_day_info ){

    console.log("Find the right one");
    var product_registered_day = product_day_info;
    console.log( product_registered_day );
    $('#productregistereddayB').append( product_registered_day );

}

function showupdateProductDay( updated_product_day_info ){

    var updated_product_day = updated_product_day_info;
    $('#productupdateddayB').append( updated_product_day );

}

function showupdateProductTime( updated_product_day_time ){

    var updated_product_time = updated_product_day_time;
    $('#productupdatedtimeB').append( updated_product_time );

}

/*透過web3.eth.getBlock method 找出近期之latest block*/
function getlatestBlock(){

    latest_block_promise = web3.eth.getBlock('latest');
    return latest_block_promise.then(function(result) {
        return result.number
    });
}

/*新增貨物時紀錄其對應之貨物簽章*/
async function addProductSignature(req,res,result){

    console.log("Now we add the product signature");
    var sig_private_key = req.body.addPrivateKeyB;
    let message = result.toString();
    let sign_result = web3.eth.accounts.sign(message,sig_private_key);
    let sign_signature = sign_result['signature'];
    let finish_signature_message_signed = await setSignatureandMessage(sign_signature, message);
    let recover_address = web3.eth.accounts.recover( message, sign_signature );
    return result;
}

/*每當新增一筆貨物資訊時，ProductContract 會發出相關之Smart contract event( NewProduct ),
並透過追溯近期新增之歷史block 找尋其內容有包括 event NewProduct的與其對應之transaction hash*/
async function show_Product_BlockNumber_TransactionHash(req, res, result){

    latest_block = await getlatestBlock();
    block_number_before = latest_block-10
    const results = await ProductContract.getPastEvents(
      'NewProduct',
    {
      fromBlock: block_number_before
    }
    );
    console.log("The val of latest block");
    console.log(latest_block);
    res.redirect('/product');

}

/*透過前端新增之貨物資訊，透過ProductContract將其資訊紀錄於blockchain中*/
async function addProduct(req, res, result){

    var product_id = parseInt(result);
    var product_name= req.body.addproductnameB;
    var company_name = req.body.addcompanynameB;
    var dispatch_time = req.body.addcompanynameB;
    var receive_time = req.body.addreceivetimeB;
    var dispatch_amount = req.body.adddispatchamountB;
    var receive_amount = req.body.addreceiveamountB;
    var price = req.body.addpriceB;
    var exporter = req.body.addexporterB;
    var consignee = req.body.addconsigneeB;
    var means_of_transport_and_route = req.body.addmeansoftransportandrouteB;
    var incoterns = req.body.addincoternsB;
    var bill_of_lading = req.body.addbillofladingB;
    var number_and_date_of_invoice = req.body.addnumberanddateofinvoiceB;
    var certificate_number = req.body.addcertificatenumberB;
    var company_address = req.body.addcompanyaddressB;
    var dangerous_or_flammable_cargo = req.body.adddangerousorflammablecargoB;
    var product_status = req.body.addproductstatusB
    var export_country = req.body.addproductexportcountryB
    var import_country = req.body.addproductimportcountryB

    const time_now = Date.now();
    var current_time = new Date( time_now );
    var cur_day = current_time.getDate();
    var cur_month = current_time.getMonth()+1;
    var cur_year = current_time.getFullYear();

    var product_registered_day = cur_day + "/" + cur_month + "/" + cur_year;
    var product_registered_time = current_time.toTimeString();
    let product_one = await setProductone( product_id, product_name, company_name, dispatch_time, receive_time, dispatch_amount, receive_amount);
    let product_two = await setProducttwo( product_id, price, exporter, consignee, means_of_transport_and_route, incoterns, bill_of_lading);
    let product_final = await setProductfinal( product_id, number_and_date_of_invoice, certificate_number, company_address, dangerous_or_flammable_cargo, product_status, product_registered_time);
    let product_final_day = await setProductday( product_id, product_registered_day );
    return product_id;
}

/*此程式根據新增貨物之時間及任意產生之亂數作為此貨物之訂單號碼*/
function giveProductNumber(){

    var current_time = new Date();
    var cur_day = current_time.getDate().toString();
    var cur_month = current_time.getMonth()+1;
    var str_cur_month = cur_month.toString();
    var cur_year = current_time.getFullYear().toString();

    updated_product_registered_day = cur_year + str_cur_month + cur_day;

    let random_number = parseInt( Math.random() * 1000000 );
    let random_number_string = random_number.toString();
    let time_random_number = random_number_string + updated_product_registered_day;
    return time_random_number;
}


async function getProductafteradd(){

    var product_id = $("#productCodeB").val();
    let product_info_one = await getProductone( product_id );
    let product_info_two = await getProducttwo( product_id );
    let product_info_final = await getProductfinal( product_id );
    let product_day_info = await getProductDay(product_id);

    let updated_product_day_info = await getupdateProductDay( product_id );
    let updated_product_day_time = await getupdateProductTime( product_id);


    let show_product_info_one = await showProductinfoone( product_info_one );
    let show_product_info_two = await showProductinfotwo( product_info_two );
    let show_product_info_final = await showProductinfofinal( product_info_final );
    let show_product_day = await showProductDay( product_day_info );

    let show_updated_product_day_info = showupdateProductDay( updated_product_day_info );
    let show_updated_product_time_info = showupdateProductTime( updated_product_day_time );

}

/*This one shows the recent added shippingorder info*/
async function getshippingorderafteradd(){

    var product_id = $("#shippingorderfromproductC").val();
    let shipping_order_info_one = await getshippingorderone( product_id );
    let show_shipping_order_info_one = await showshippingorderone( shipping_order_info_one );

}

function changeProduct(Pnumber, receive_time, dispatch_time,
  receive_amount, dispatch_amount, dangerous_or_flammable_cargo,product_status){

  return ProductContract.methods.updateProduct(Pnumber, receive_time, dispatch_time,
  receive_amount, dispatch_amount, dangerous_or_flammable_cargo,product_status).send(
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

function updateProductDay(Pnumber, updated_product_registered_day){

  return ProductContract.methods.updateProductDay(Pnumber, updated_product_registered_day).send(
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


function updateProductTime(Pnumber, updated_product_registered_time){

  return ProductContract.methods.updateProductTime(Pnumber, updated_product_registered_time).send(
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

/*此程式透過使用者輸入之貨物更新資訊，而ProductContract則更新此資訊*/
async function updateProduct(req,res,result){

    var product_id = req.body.productidupdateB;
    var receive_time = req.body.receivetimeupdateB;
    var dispatch_time = req.body.dispatchtimeupdateB;
    var receive_amount = req.body.receiveamountupdateB;
    var dispatch_amount = req.body.dispatchamountupdateB;
    var dangerous_or_flammable_cargo = req.body.dangerousorflammablecargoupdateB;
    var product_status = req.body.productstatusupdateB;

    const time_now = Date.now();
    var current_time = new Date( time_now );
    var cur_day = current_time.getDate();
    var cur_month = current_time.getMonth()+1;
    var cur_year = current_time.getFullYear();

    var updated_product_registered_day = cur_day + "/" + cur_month + "/" + cur_year;

    var updated_product_registered_time = current_time.toTimeString();

    let update_product_day = await updateProductDay( product_id, updated_product_registered_day );
    let update_product_time = await updateProductTime( product_id, updated_product_registered_time );
    let update_product = await changeProduct( product_id, receive_time, dispatch_time, receive_amount, dispatch_amount, dangerous_or_flammable_cargo, product_status);
}

/*此程式根據新增貨物之時間及任意產生之亂數作為此貨物之訂單號碼*/
async function showProductDialog(){

    var current_time = new Date( time_now );

    var cur_day = current_time.getDate().toString();
    var cur_month = current_time.getMonth()+1;
    var str_cur_month = cur_month.toString();
    var cur_year = current_time.getFullYear().toString();

    updated_product_registered_day = cur_year + str_cur_month + cur_day;

    let random_number = parseInt( Math.random() * 1000000 );
    let random_number_string = random_number.toString();

    let time_random_number = random_number_string + updated_product_registered_day;
    window.alert('你已完成此貨物新增\n貨物訂單號碼:'+ time_random_number );
    return time_random_number;
}


function getProductTransferMappingId(index){

  return ProductTransferContract.methods.getProductTransferMappingId(index).call().then( function(Product_number){
      return Product_number;
  });
}

function getProductlength(){

  return ProductTransferContract.methods.getProductTransferListlength().call().then( function(Product_length){
      return Product_length;
  });
}


function getSignatureLength(){

  return AccountKeyMessageContract.methods.getSignatureLength().call().then( function(Signature_length){
      return Signature_length;
  });
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
        if ( product_number >0 ){
                /*$("#Products_table tbody").append('<tr><td>'+ product_number +'</td><td>' +
                product_info_day );*/
                res.send( '<tr><td>' + product_number  + '</td><td>' + product_info_day );
        }

    }
    /*var user_role_option = getCookie("role");*/
    /*for(index=0; index<number_of_product; index++){

        var product_number = await getProductTransferMappingId(index);
        var product_info_day = await getProductDay( product_number );
        var  user_role_option = getCookie("role");
        if ( user_role_option == "IMP"){

          if ( product_number >0 ){

            $("#Products_table tbody").append('<tr><td>'+ product_number +'</td><td>' +
            product_info_day + '</td><td><a href="./product_logout_status_Importer.html">查詢/修改</a></td></tr>');
          }
          if( index+1 == number_of_product ){
            return true;
          }

        }

        if( user_role_option == "EXP"){

          if ( product_number >0 ){
            $("#Products_table tbody").append('<tr><td>'+
            product_number +'</td><td>' +
            product_info_day + '</td><td><a href="./product_logout_status_Exporter.html">查詢/修改</a></td></tr>');
          }
          if( index+1 == number_of_product ){
            return true;
          }

        }

        if( user_role_option == "CAR"){

          if ( product_number>0 ){

            $("#Products_table tbody").append('<tr><td>'+
            product_number +'</td><td>' +
            product_info_day + '</td><td><a href="./product_logout_status_Carrier.html">查詢/修改</a></td></tr>');
          }
          if( index+1 == number_of_product){
            return true;
          }

        }

    }*/

}

/*此程式顯示已新增之提單與貨物相關之電子簽名*/
async function show_recent_signatures(){

    var index;
    if ( $("#Signatures_table tbody").length == 0 ) {

        $("#Signatures_table").append("<tbody></tbody>");
    }
    var number_of_signature = await getSignatureLength();
    // Append Signature to the table
    for(index=0; index<number_of_signature; index++){

        var _signature = await getSignature( index );
        var message = await getMessageofSignature( index );
        let recover_address = web3.eth.accounts.recover(message, _signature);
        let sign_signature_partial = _signature.substring(2,35) + "......";

        $("#Signatures_table tbody").append('<tr><td>'+
        sign_signature_partial +'</td><td>' +
        recover_address + '</td></tr>');
    }

}


async function products_link(result){

   if(result){

        var table = document.getElementById("Products_table");
        var rows = table.getElementsByTagName("tr");
        for (i = 1; i < rows.length; i++) {

            var currentRow = table.rows[i];
            var createClickHandler = function(row) {
              return function() {
                var cell = row.getElementsByTagName("td")[0];
                var id = cell.innerHTML;
                set_cookie_Product_number(id);
              };
            };
            currentRow.onclick = createClickHandler(currentRow);
        }
   }
   else{
        console.log("Show recent products failed");
   }

}


async function show_products_number_and_link(req,res){

  show_recent_products(req,res);
  /*show_recent_finish_promise.then( function(result){
      products_link(result);
  });*/
}

function set_cookie_Product_number( Productnumber_val ){

  res.cookie('Productnumber', Productnumber_val, { path: '/product', maxAge:600000 });
}


function get_cookie_Product_number( Productnumber_option ){

  var product_number = Productnumber_option + "=";

  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {

    var c = ca[i];/*此行的目的主要是將最外面的[]清掉*/
    /*console.log("For loop for c");
    console.log(c); -> 這行會顯示username=John 也就是將括號順利清掉了*/
    while (c.charAt(0) == ' ') {

      c = c.substring(1);
      /*此行主要是看username=John前面是否有空格*/
    }
    if (c.indexOf( product_number ) == 0) {
      return c.substring( product_number.length, c.length);
    }
  }

}



/* 當使用者要登入時,網址輸入http://localhost:3000/product/product_info_Carrier 即可登入*/
router.get('/', function(req, res, next) {

    res.render('product_info.html');
});


/*當使用者透過product_info 輸入貨物資料時,將post資料至 此/product/addproduct 之路徑
而這邊router處理相對應之post路徑並同時執行 addProduct 之function*/
router.post('/addproduct',function(req,res){

    console.log("Yep now we are in these stages");
    let result = giveProductNumber();
    addProduct(req,res,result).then( function(result){
        addProductSignature(req,res,result).then(function(result){
            show_Product_BlockNumber_TransactionHash(req,res,result);
        });
    })
    res.redirect('/product');
});

/*此程式透過使用者輸入之貨物更新資訊，而ProductContract則更新此資訊*/
router.post('/updateproduct',function(req,res){

    console.log("Yep now we are updating the product");
    updateProduct(req,res);
    res.redirect('/product');
});





module.exports = router;








































































