(this["webpackJsonp@scaffold-eth/react-app"] = this["webpackJsonp@scaffold-eth/react-app"] || []).push([[0],{

/***/ 1050:
/***/ (function(module, exports) {

module.exports=[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Recovered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newTotalDeposits","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalSupply","type":"uint256"}],"name":"Reinvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"UpdateAdminFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"UpdateMinTokensToReinvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"UpdateReinvestReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reinvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateAdminFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateMinTokensToReinvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateReinvestReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nyanToken","type":"address"},{"internalType":"address","name":"_stakingContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADMIN_FEE_BIPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"estimateReinvestReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getSharesPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getTokensPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUnderlying","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_TOKENS_TO_REINVEST","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nyanToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REINVEST_REWARD_BIPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingContract","outputs":[{"internalType":"contract NyanRewards","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

/***/ }),

/***/ 1051:
/***/ (function(module, exports) {

module.exports="0xDD7E7aaAB118B5a48779f63f2D3f0b49CE0CeDCA";

/***/ }),

/***/ 1052:
/***/ (function(module, exports) {

module.exports=[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"newFarm","type":"address"}],"name":"addFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"farms","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"farmsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"farmIndex","type":"uint256"}],"name":"removeFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

/***/ }),

/***/ 1053:
/***/ (function(module, exports) {

module.exports="0x7864BA11676B8cc286a7367b3cfd504968920B3a";

/***/ }),

/***/ 1054:
/***/ (function(module, exports) {

module.exports="0xf285108D3aa4DC9041364b64297979979a7Ec7B9";

/***/ }),

/***/ 1055:
/***/ (function(module, exports) {

module.exports=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Recovered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newTotalDeposits","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalSupply","type":"uint256"}],"name":"Reinvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"UpdateAdminFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"UpdateMinTokensToReinvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"UpdateMinTokensToReinvestBeforeDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"UpdateReinvestReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"newValue","type":"bool"}],"name":"UpdateRequireReinvestBeforeDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"ADMIN_FEE_BIPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_TOKENS_TO_REINVEST","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_TOKENS_TO_REINVEST_BEFORE_DEPOSIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REINVEST_REWARD_BIPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REQUIRE_REINVEST_BEFORE_DEPOSIT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"arbi","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositToken","outputs":[{"internalType":"contract IPair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"estimateReinvestReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getDepositTokensForShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getSharesForDepositTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reinvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"revokeAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"setAllowances","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"arbiAddress","type":"address"}],"name":"setArbi","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingContract","outputs":[{"internalType":"contract NyanRewards","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateAdminFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateMinTokensToReinvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateMinTokensToReinvestBeforeDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateReinvestReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateRequireReinvestBeforeDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

/***/ }),

/***/ 1056:
/***/ (function(module, exports) {

module.exports="0xBb6121d3c929360aDe1C1D4b515CF5c2FC331fc2";

/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

module.exports="0xE74E9f3B9F862B7707531ABF425621F53050A7ec";

/***/ }),

/***/ 1058:
/***/ (function(module, exports) {

module.exports="0x32e5594F14de658b0d577D6560fA0d9C6F1aa724";

/***/ }),

/***/ 1059:
/***/ (function(module, exports) {

module.exports="0x62FF5Be795262999fc1EbaC29277575031d2dA2C";

/***/ }),

/***/ 1060:
/***/ (function(module, exports) {

module.exports="0x2C5058325373d02Dfd6c08E48d91FcAf8fD49f45";

/***/ }),

/***/ 1061:
/***/ (function(module, exports) {

module.exports="0x7a20ee66ca1696D516c1bb780AE153ee1de36b24";

/***/ }),

/***/ 1062:
/***/ (function(module, exports) {

module.exports="0xAb4Bf76a278FD67C649b41Dd8f349Ec87cd2621A";

/***/ }),

/***/ 1063:
/***/ (function(module, exports) {

module.exports="0xb970E280F9ddAA3349ab9F3ecf778970cDE46655";

/***/ }),

/***/ 1091:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1130:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1132:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1150:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1152:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1164:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1165:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1186:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1188:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1265:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1309:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1313:
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ 1330:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1340:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1342:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1396:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1398:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1405:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1406:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1511:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1513:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1521:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1522:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1545:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1588:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1595:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1597:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1927:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1933:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1956:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1957:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2104:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2105:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2106:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2107:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2108:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2109:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2110:
/***/ (function(module, exports) {

module.exports="0xF6a37745FC911666132E8b8F29fC9c4F5C4a703D";

/***/ }),

/***/ 2147:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2158:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2174:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2180:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@apollo/client/core/ApolloClient.js + 31 modules
var ApolloClient = __webpack_require__(2202);

// EXTERNAL MODULE: ./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js + 9 modules
var inMemoryCache = __webpack_require__(2208);

// EXTERNAL MODULE: ./node_modules/@apollo/client/react/context/ApolloProvider.js + 1 modules
var ApolloProvider = __webpack_require__(2217);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-css-theme-switcher/dist/react-css-theme-switcher.esm.js
var react_css_theme_switcher_esm = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(103);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@walletconnect/web3-provider/dist/esm/index.js + 8 modules
var esm = __webpack_require__(1074);

// EXTERNAL MODULE: ./node_modules/walletlink/dist/index.js
var dist = __webpack_require__(1030);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/antd/es/alert/index.js + 2 modules
var es_alert = __webpack_require__(2214);

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 3 modules
var menu = __webpack_require__(676);

// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js + 2 modules
var row = __webpack_require__(366);

// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js + 1 modules
var col = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(1308);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(255);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/web3modal/dist/index.js
var web3modal_dist = __webpack_require__(1031);
var web3modal_dist_default = /*#__PURE__*/__webpack_require__.n(web3modal_dist);

// EXTERNAL MODULE: ./src/App.css
var App = __webpack_require__(1309);

// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 12 modules
var typography = __webpack_require__(2207);

// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 8 modules
var skeleton = __webpack_require__(2209);

// EXTERNAL MODULE: ./node_modules/react-blockies/dist/main.js
var main = __webpack_require__(145);
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(98);

// CONCATENATED MODULE: ./src/hooks/OnBlock.js
// helper hook to call a function regularly in time intervals
var DEBUG=false;function useOnBlock(provider,fn,args){var savedCallback=Object(react["useRef"])();// Remember the latest fn.
Object(react["useEffect"])(function(){savedCallback.current=fn;},[fn]);// Turn on the listener if we have a function & a provider
Object(react["useEffect"])(function(){if(fn&&provider){var listener=function listener(blockNumber){if(DEBUG)console.log(blockNumber,fn,args,provider.listeners());if(args&&args.length>0){savedCallback.current.apply(savedCallback,Object(toConsumableArray["a" /* default */])(args));}else{savedCallback.current();}};provider.on("block",listener);return function(){provider.off("block",listener);};}},[provider]);}
// CONCATENATED MODULE: ./src/hooks/Poller.js
// helper hook to call a function regularly in time intervals
function usePoller(fn,delay,extraWatch){var savedCallback=Object(react["useRef"])();// Remember the latest fn.
Object(react["useEffect"])(function(){savedCallback.current=fn;},[fn]);// Set up the interval.
// eslint-disable-next-line consistent-return
Object(react["useEffect"])(function(){function tick(){savedCallback.current();}if(delay!==null){var id=setInterval(tick,delay);return function(){return clearInterval(id);};}},[delay]);// run at start too
Object(react["useEffect"])(function(){fn();},[extraWatch]);}
// CONCATENATED MODULE: ./src/hooks/Balance.js
/*
  ~ What it does? ~

  Gets your balance in ETH from given address and provider

  ~ How can I use? ~

  const yourLocalBalance = useBalance(localProvider, address);

  ~ Features ~

  - Provide address and get balance corresponding to given address
  - Change provider to access balance on different chains (ex. mainnetProvider)
  - If no pollTime is passed, the balance will update on every new block
*/var Balance_DEBUG=false;function useBalance(provider,address){var pollTime=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;var _useState=Object(react["useState"])(),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),balance=_useState2[0],setBalance=_useState2[1];var pollBalance=Object(react["useCallback"])(/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(provider,address){var newBalance;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(provider&&address)){_context.next=5;break;}_context.next=3;return provider.getBalance(address);case 3:newBalance=_context.sent;if(newBalance!==balance){setBalance(newBalance);}case 5:case"end":return _context.stop();}}},_callee);}));return function(_x,_x2){return _ref.apply(this,arguments);};}(),[provider,address]);// Only pass a provider to watch on a block if there is no pollTime
useOnBlock(pollTime===0&&provider,function(){if(provider&&address&&pollTime===0){pollBalance(provider,address);}});// Update balance when the address or provider changes
Object(react["useEffect"])(function(){if(address&&provider)pollBalance(provider,address);},[address,provider,pollBalance]);// Use a poller if a pollTime is provided
usePoller(/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(provider&&address&&pollTime>0){if(Balance_DEBUG)console.log("polling!",address);pollBalance();}case 1:case"end":return _context2.stop();}}},_callee2);})),pollTime,provider&&address);return balance;}
// EXTERNAL MODULE: ./node_modules/ethers/lib.esm/ethers.js + 2 modules
var ethers = __webpack_require__(252);

// CONCATENATED MODULE: ./src/hooks/ContractExistsAtAddress.js
/*
  ~ What it does? ~

  Checks whether a contract exists on the blockchain, returns true if it exists, otherwise false

  ~ How can I use? ~

  const contractIsDeployed = useContractExistsAtAddress(localProvider, contractAddress);

  ~ Features ~

  - Provide contractAddress to check if the contract is deployed
  - Change provider to check contract address on different chains (ex. mainnetProvider)
*/var ContractExistsAtAddress_useContractExistsAtAddress=function useContractExistsAtAddress(provider,contractAddress){var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),contractIsDeployed=_useState2[0],setContractIsDeployed=_useState2[1];// We can look at the blockchain and see what's stored at `contractAddress`
// If we find code then we know that a contract exists there.
// If we find nothing (0x0) then there is no contract deployed to that address
Object(react["useEffect"])(function(){// eslint-disable-next-line consistent-return
var checkDeployment=/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var bytecode;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(ethers["utils"].isAddress(contractAddress)){_context.next=2;break;}return _context.abrupt("return",false);case 2:_context.next=4;return provider.getCode(contractAddress);case 4:bytecode=_context.sent;setContractIsDeployed(bytecode!=="0x0");case 6:case"end":return _context.stop();}}},_callee);}));return function checkDeployment(){return _ref.apply(this,arguments);};}();if(provider)checkDeployment();},[provider,contractAddress]);return contractIsDeployed;};/* harmony default export */ var ContractExistsAtAddress = (ContractExistsAtAddress_useContractExistsAtAddress);
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(47);

// CONCATENATED MODULE: ./src/hooks/ContractLoader.js
/* eslint-disable global-require */var _require=__webpack_require__(108),ContractLoader_ethers=_require.ethers;/*
  ~ What it does? ~

  Loads your local contracts and gives options to read values from contracts
  or write transactions into them

  ~ How can I use? ~

  const readContracts = useContractLoader(localProvider) // or
  const writeContracts = useContractLoader(userProvider)

  ~ Features ~

  - localProvider enables reading values from contracts
  - userProvider enables writing transactions into contracts
  - Example of keeping track of "purpose" variable by loading contracts into readContracts
    and using ContractReader.js hook:
    const purpose = useContractReader(readContracts,"YourContract", "purpose")
  - Example of using setPurpose function from our contract and writing transactions by Transactor.js helper:
    tx( writeContracts.YourContract.setPurpose(newPurpose) )

  config can include:
  - chainId - to hardcode the chainId, irrespective of the providerOrSigner chainId
  - hardhatNetworkName - to hardcode the hardhat network of interest
  - customAddresses: { contractName: 0xCustomAddress } to hardcode the address for a given named contract
  - hardhatContracts: object following the hardhat deploy export format (Json with chainIds as keys, which have hardhat network names as keys, which contain arrays of contracts for each)
  - externalContracts: object with chainIds as keys, with an array of contracts for each
*/function useContractLoader(providerOrSigner){var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _useState=Object(react["useState"])(),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),contracts=_useState2[0],setContracts=_useState2[1];var customAddressKeys=config.customAddresses&&Object.keys(config.customAddresses).join();var customAddressValues=config.customAddresses&&Object.values(config.customAddresses).join();Object(react["useEffect"])(function(){var active=true;function loadContracts(){return _loadContracts.apply(this,arguments);}function _loadContracts(){_loadContracts=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var signer,provider,accounts,providerNetwork,_chainId,contractList,externalContractList,combinedContracts,hardhatNetwork,newContracts;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(providerOrSigner&&typeof providerOrSigner!=="undefined")){_context.next=26;break;}console.log("loading contracts");_context.prev=2;if(!(providerOrSigner&&typeof providerOrSigner.listAccounts==="function")){_context.next=7;break;}_context.next=6;return providerOrSigner.listAccounts();case 6:accounts=_context.sent;case 7:if(ContractLoader_ethers.Signer.isSigner(providerOrSigner)){signer=providerOrSigner;provider=signer.provider;}else if(accounts&&accounts.length>0){signer=providerOrSigner.getSigner();provider=providerOrSigner;}else{signer=providerOrSigner;provider=providerOrSigner;}_context.next=10;return provider.getNetwork();case 10:providerNetwork=_context.sent;_chainId=config.chainId||providerNetwork.chainId;contractList={};externalContractList={};try{contractList=config.hardhatContracts||__webpack_require__(1313);}catch(e){console.log(e);}try{externalContractList=config.externalContracts||__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../contracts/external_contracts.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));}catch(e){console.log(e);}combinedContracts={};if(contractList[_chainId]){for(hardhatNetwork in contractList[_chainId]){if(Object.prototype.hasOwnProperty.call(contractList[_chainId],hardhatNetwork)){if(!config.hardhatNetworkName||hardhatNetwork===config.hardhatNetworkName){combinedContracts=Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},combinedContracts),contractList[_chainId][hardhatNetwork].contracts);}}}}if(externalContractList[_chainId]){combinedContracts=Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},combinedContracts),externalContractList[_chainId].contracts);}newContracts=Object.keys(combinedContracts).reduce(function(accumulator,contractName){var _address=config.customAddresses&&Object.keys(config.customAddresses).includes(contractName)?config.customAddresses[contractName]:combinedContracts[contractName].address;accumulator[contractName]=new ContractLoader_ethers.Contract(_address,combinedContracts[contractName].abi,signer);return accumulator;},{});if(active)setContracts(newContracts);_context.next=26;break;case 23:_context.prev=23;_context.t0=_context["catch"](2);console.log("ERROR LOADING CONTRACTS!!",_context.t0);case 26:case"end":return _context.stop();}}},_callee,null,[[2,23]]);}));return _loadContracts.apply(this,arguments);}loadContracts();return function(){active=false;};},[providerOrSigner,config.chainId,config.hardhatNetworkName,customAddressKeys,customAddressValues]);return contracts;}
// CONCATENATED MODULE: ./src/hooks/ContractReader.js
var ContractReader_DEBUG=false;/*
  ~ What it does? ~

  Enables you to read values from contracts and keep track of them in the local React states

  ~ How can I use? ~

  const purpose = useContractReader(readContracts,"YourContract", "purpose")

  ~ Features ~

  - Provide readContracts by loading contracts (see more on ContractLoader.js)
  - Specify the name of the contract, in this case it is "YourContract"
  - Specify the name of the variable in the contract, in this case we keep track of "purpose" variable
  - Pass an args array if the function requires
  - Pass pollTime - if no pollTime is specified, the function will update on every new block
*/function useContractReader(contracts,contractName,functionName,args,pollTime,formatter,onChange){var _this=this;var adjustPollTime=0;if(pollTime){adjustPollTime=pollTime;}else if(!pollTime&&typeof args==="number"){// it's okay to pass poll time as last argument without args for the call
adjustPollTime=args;}var _useState=Object(react["useState"])(),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),value=_useState2[0],setValue=_useState2[1];var _useState3=Object(react["useState"])(false),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),tried=_useState4[0],setTried=_useState4[1];Object(react["useEffect"])(function(){if(typeof onChange==="function"){setTimeout(onChange.bind(_this,value),1);}},[value,onChange]);var updateValue=/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var newValue,_contracts$contractNa;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;if(ContractReader_DEBUG)console.log("CALLING ",contractName,functionName,"with args",args);if(!(args&&args.length>0)){_context.next=10;break;}_context.next=5;return(_contracts$contractNa=contracts[contractName])[functionName].apply(_contracts$contractNa,Object(toConsumableArray["a" /* default */])(args));case 5:newValue=_context.sent;setTried(true);if(ContractReader_DEBUG)console.log("contractName",contractName,"functionName",functionName,"args",args,"RESULT:",newValue);_context.next=14;break;case 10:_context.next=12;return contracts[contractName][functionName]();case 12:newValue=_context.sent;setTried(true);case 14:if(formatter&&typeof formatter==="function"){newValue=formatter(newValue);}// console.log("GOT VALUE",newValue)
if(newValue!==value){setValue(newValue);}_context.next=21;break;case 18:_context.prev=18;_context.t0=_context["catch"](0);console.log(_context.t0);case 21:case"end":return _context.stop();}}},_callee,null,[[0,18]]);}));return function updateValue(){return _ref.apply(this,arguments);};}();// Only pass a provider to watch on a block if we have a contract and no PollTime
useOnBlock(contracts&&contracts[contractName]&&adjustPollTime===0&&contracts[contractName].provider,function(){if(contracts&&contracts[contractName]&&adjustPollTime===0){if(ContractReader_DEBUG)console.log("on-blocking!",contractName,functionName);updateValue();}});// Use a poller if a pollTime is provided
usePoller(/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(contracts&&contracts[contractName]&&adjustPollTime>0){if(ContractReader_DEBUG)console.log("polling!",contractName,functionName);updateValue();}case 1:case"end":return _context2.stop();}}},_callee2);})),adjustPollTime,contracts&&contracts[contractName]);if(tried===false&&contracts&&contracts[contractName]){updateValue();}return value;}
// CONCATENATED MODULE: ./src/hooks/Debounce.js
function useDebounce(value,delay){var _useState=Object(react["useState"])(value),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),debouncedValue=_useState2[0],setDebouncedValue=_useState2[1];Object(react["useEffect"])(function(){var handler=setTimeout(function(){setDebouncedValue(value);},delay);return function(){clearTimeout(handler);};},[value]);return debouncedValue;}
// CONCATENATED MODULE: ./src/hooks/EventListener.js
/*
  ~ What it does? ~

  Enables you to keep track of events

  ~ How can I use? ~

  const setPurposeEvents = useEventListener(readContracts, "YourContract", "SetPurpose", localProvider, 1);

  ~ Features ~

  - Provide readContracts by loading contracts (see more on ContractLoader.js)
  - Specify the name of the contract, in this case it is "YourContract"
  - Specify the name of the event in the contract, in this case we keep track of "SetPurpose" event
  - Specify the provider
*/function useEventListener(contracts,contractName,eventName,provider,startBlock,args){var _useState=Object(react["useState"])([]),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),updates=_useState2[0],setUpdates=_useState2[1];Object(react["useEffect"])(function(){if(typeof provider!=="undefined"&&typeof startBlock!=="undefined"){// if you want to read _all_ events from your contracts, set this to the block number it is deployed
provider.resetEventsBlock(startBlock);}if(contracts&&contractName&&contracts[contractName]){try{contracts[contractName].on(eventName,function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var blockNumber=args[args.length-1].blockNumber;setUpdates(function(messages){return[Object(objectSpread2["a" /* default */])({blockNumber:blockNumber},args.pop().args)].concat(Object(toConsumableArray["a" /* default */])(messages));});});return function(){contracts[contractName].removeListener(eventName);};}catch(e){console.log(e);}}},[provider,startBlock,contracts,contractName,eventName]);return updates;}
// EXTERNAL MODULE: ./node_modules/@uniswap/sdk/dist/sdk.esm.js
var sdk_esm = __webpack_require__(365);

// EXTERNAL MODULE: ./node_modules/eth-hooks/lib/index.js + 16 modules
var lib = __webpack_require__(156);

// CONCATENATED MODULE: ./src/hooks/ExchangePrice.js
function useExchangePrice(targetNetwork,mainnetProvider,pollTime){var _useState=Object(react["useState"])(0),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),price=_useState2[0],setPrice=_useState2[1];var pollPrice=function pollPrice(){function getPrice(){return _getPrice.apply(this,arguments);}function _getPrice(){_getPrice=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var DAI,pair,route;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(mainnetProvider){_context.next=2;break;}return _context.abrupt("return",0);case 2:if(!targetNetwork.price){_context.next=6;break;}setPrice(targetNetwork.price);_context.next=12;break;case 6:DAI=new sdk_esm["c" /* Token */](mainnetProvider.network?mainnetProvider.network.chainId:1,"0x6B175474E89094C44Da98b954EedeAC495271d0F",18);_context.next=9;return sdk_esm["a" /* Fetcher */].fetchPairData(DAI,sdk_esm["d" /* WETH */][DAI.chainId],mainnetProvider);case 9:pair=_context.sent;route=new sdk_esm["b" /* Route */]([pair],sdk_esm["d" /* WETH */][DAI.chainId]);setPrice(parseFloat(route.midPrice.toSignificant(6)));case 12:case"end":return _context.stop();}}},_callee);}));return _getPrice.apply(this,arguments);}getPrice();};Object(lib["c" /* usePoller */])(pollPrice,pollTime||9777);return price;}
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(342);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/hooks/GasPrice.js
function useGasPrice(targetNetwork,speed){var _useState=Object(react["useState"])(),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),gasPrice=_useState2[0],setGasPrice=_useState2[1];var loadGasPrice=/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(targetNetwork.hasOwnProperty("gasPrice")){setGasPrice(targetNetwork.gasPrice);}else{if(navigator.onLine){axios_default.a.get("https://ethgasstation.info/json/ethgasAPI.json").then(function(response){var newGasPrice=response.data[speed||"fast"]*100000000;if(newGasPrice!==gasPrice){setGasPrice(newGasPrice);}}).catch(function(error){return console.log(error);});}}case 1:case"end":return _context.stop();}}},_callee);}));return function loadGasPrice(){return _ref.apply(this,arguments);};}();Object(lib["c" /* usePoller */])(loadGasPrice,39999);return gasPrice;}
// CONCATENATED MODULE: ./src/hooks/LocalStorage.js
// Hook from useHooks! (https://usehooks.com/useLocalStorage/)
function useLocalStorage(key,initialValue,ttl){// State to store our value
// Pass initial state function to useState so logic is only executed once
var _useState=Object(react["useState"])(function(){try{// Get from local storage by key
var item=window.localStorage.getItem(key);var parsedItem=item?JSON.parse(item):initialValue;if(typeof parsedItem==="object"&&parsedItem!==null&&"expiry"in parsedItem&&"value"in parsedItem){var now=new Date();if(ttl&&now.getTime()>parsedItem.expiry){// If the item is expired, delete the item from storage
// and return null
window.localStorage.removeItem(key);return initialValue;}return parsedItem.value;}// Parse stored json or if none return initialValue
// Parse stored json or if none return initialValue
return parsedItem;}catch(error){// If error also return initialValue
console.log(error);return initialValue;}}),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),storedValue=_useState2[0],setStoredValue=_useState2[1];// Return a wrapped version of useState's setter function that ...
// ... persists the new value to localStorage.
var setValue=function setValue(value){try{// Allow value to be a function so we have same API as useState
var valueToStore=value instanceof Function?value(storedValue):value;// Save state
setStoredValue(valueToStore);// Save to local storage
if(ttl){var now=new Date();// `item` is an object which contains the original value
// as well as the time when it's supposed to expire
var item={value:valueToStore,expiry:now.getTime()+ttl};window.localStorage.setItem(key,JSON.stringify(item));}else{window.localStorage.setItem(key,JSON.stringify(valueToStore));}}catch(error){// A more advanced implementation would handle the error case
console.log(error);}};return[storedValue,setValue];}
// CONCATENATED MODULE: ./src/hooks/LookupAddress.js
// resolved if(name){} to not save "" into cache
/*
  ~ What it does? ~

  Gets ENS name from given address and provider

  ~ How can I use? ~

  const ensName = useLookupAddress(mainnetProvider, address);

  ~ Features ~

  - Provide address and get ENS name corresponding to given address
*/var lookupAddress=/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(provider,address){var reportedName,resolvedAddress;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(address&&ethers["utils"].isAddress(address))){_context.next=16;break;}_context.prev=1;_context.next=4;return provider.lookupAddress(address);case 4:reportedName=_context.sent;_context.next=7;return provider.resolveName(reportedName);case 7:resolvedAddress=_context.sent;if(!(address&&ethers["utils"].getAddress(address)===ethers["utils"].getAddress(resolvedAddress))){_context.next=10;break;}return _context.abrupt("return",reportedName);case 10:return _context.abrupt("return",ethers["utils"].getAddress(address));case 13:_context.prev=13;_context.t0=_context["catch"](1);return _context.abrupt("return",ethers["utils"].getAddress(address));case 16:return _context.abrupt("return",0);case 17:case"end":return _context.stop();}}},_callee,null,[[1,13]]);}));return function lookupAddress(_x,_x2){return _ref.apply(this,arguments);};}();var LookupAddress_useLookupAddress=function useLookupAddress(provider,address){var _useState=Object(react["useState"])(address),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),ensName=_useState2[0],setEnsName=_useState2[1];// const [ensCache, setEnsCache] = useLocalStorage('ensCache_'+address); Writing directly due to sync issues
Object(react["useEffect"])(function(){var cache=window.localStorage.getItem("ensCache_"+address);cache=cache&&JSON.parse(cache);if(cache&&cache.timestamp>Date.now()){setEnsName(cache.name);}else if(provider){lookupAddress(provider,address).then(function(name){if(name){setEnsName(name);window.localStorage.setItem("ensCache_"+address,JSON.stringify({timestamp:Date.now()+360000,name:name}));}});}},[provider,address,setEnsName]);return ensName;};/* harmony default export */ var LookupAddress = (LookupAddress_useLookupAddress);
// CONCATENATED MODULE: ./src/hooks/Nonce.js
function useNonce(mainnetProvider,address){var _useState=Object(react["useState"])(0),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),nonce=_useState2[0],setNonce=_useState2[1];var Nonce=function Nonce(){function getNonce(){return _getNonce.apply(this,arguments);}function _getNonce(){_getNonce=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.t0=setNonce;_context.next=3;return mainnetProvider.getTransactionCount(address);case 3:_context.t1=_context.sent;(0,_context.t0)(_context.t1);case 5:case"end":return _context.stop();}}},_callee);}));return _getNonce.apply(this,arguments);}if(address)getNonce();};Nonce();return nonce;}
// CONCATENATED MODULE: ./src/hooks/ResolveName.js
/*
  ~ What it does? ~

  Gets address from given ENS name and provider

  ~ How can I use? ~

  const addressFromENS = useResolveName(mainnetProvider, "austingriffith.eth");

  ~ Features ~

  - Specify mainnetProvider
  - Provide ENS name and get address corresponding to given ENS name
*/var ResolveName_useResolveName=function useResolveName(provider,ensName){var _useState=Object(react["useState"])(ethers["constants"].AddressZero),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),address=_useState2[0],setAddress=_useState2[1];Object(react["useEffect"])(function(){if(provider){provider.resolveName(ensName).then(function(resolvedAddress){return setAddress(resolvedAddress);});}},[provider,ensName]);return address;};/* harmony default export */ var ResolveName = (ResolveName_useResolveName);
// CONCATENATED MODULE: ./src/hooks/TokenList.js
/*
  ~ What it does? ~

  Gets a tokenlist (see more at https://tokenlists.org/), returning the .tokens only

  ~ How can I use? ~

  const tokenList = useTokenList(); <- default returns the Unsiwap tokens
  const tokenList = useTokenList("https://gateway.ipfs.io/ipns/tokens.uniswap.org");

  ~ Features ~

  - Optional - specify chainId to filter by chainId
*/var TokenList_useTokenList=function useTokenList(tokenListUri,chainId){var _useState=Object(react["useState"])([]),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),tokenList=_useState2[0],setTokenList=_useState2[1];var _tokenListUri=tokenListUri||"https://gateway.ipfs.io/ipns/tokens.uniswap.org";Object(react["useEffect"])(function(){var getTokenList=/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var _tokenList2,tokenListJson,_tokenList;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!navigator.onLine){_context.next=15;break;}_context.prev=1;_context.next=4;return fetch(_tokenListUri);case 4:_tokenList2=_context.sent;_context.next=7;return _tokenList2.json();case 7:tokenListJson=_context.sent;if(chainId){_tokenList=tokenListJson.tokens.filter(function(t){return t.chainId===chainId;});}else{_tokenList=tokenListJson;}setTokenList(_tokenList.tokens);_context.next=15;break;case 12:_context.prev=12;_context.t0=_context["catch"](1);console.log(_context.t0);case 15:case"end":return _context.stop();}}},_callee,null,[[1,12]]);}));return function getTokenList(){return _ref.apply(this,arguments);};}();getTokenList();},[tokenListUri]);return tokenList;};/* harmony default export */ var TokenList = (TokenList_useTokenList);
// CONCATENATED MODULE: ./src/hooks/BurnerSigner.js
var BurnerSigner_require=__webpack_require__(108),BurnerSigner_ethers=BurnerSigner_require.ethers;function useBurnerSigner(provider){var key="metaPrivateKey";var wallet;var _useState=Object(react["useState"])(),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),signer=_useState2[0],setSigner=_useState2[1];var _useState3=Object(react["useState"])(),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),storedValue=_useState4[0],setStoredValue=_useState4[1];var setValue=function setValue(value){try{setStoredValue(value);window.localStorage.setItem(key,value);}catch(error){console.log(error);}};Object(react["useEffect"])(function(){var storedKey=window.localStorage.getItem(key);if(!storedKey){console.log("generating a new key");var _newWallet=BurnerSigner_ethers.Wallet.createRandom();var _newKey=_newWallet.privateKey;setValue(_newKey);}else{setValue(storedKey);}},[]);Object(react["useEffect"])(function(){if(storedValue&&provider){wallet=new BurnerSigner_ethers.Wallet(storedValue);var _signer=wallet.connect(provider);setSigner(_signer);}},[storedValue,provider]);return signer;}
// CONCATENATED MODULE: ./src/hooks/UserSigner.js
/*
  ~ What it does? ~

  Gets user provider

  ~ How can I use? ~

  const userProvider = useUserProvider(injectedProvider, localProvider);

  ~ Features ~

  - Specify the injected provider from Metamask
  - Specify the local provider
  - Usage examples:
    const tx = Transactor(userSigner, gasPrice)
*/var UserSigner_useUserSigner=function useUserSigner(injectedProvider,localProvider){var _useState=Object(react["useState"])(),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),signer=_useState2[0],setSigner=_useState2[1];var burnerSigner=useBurnerSigner(localProvider);Object(react["useMemo"])(function(){if(injectedProvider){console.log("🦊 Using injected provider");var injectedSigner=injectedProvider._isProvider?injectedProvider.getSigner():injectedProvider;setSigner(injectedSigner);}else if(!localProvider)setSigner();else{if(window.location.pathname&&window.location.pathname.indexOf("/pk")>=0){var incomingPK=window.location.hash.replace("#","");var rawPK;if(incomingPK.length===64||incomingPK.length===66){console.log("🔑 Incoming Private Key...");rawPK=incomingPK;window.history.pushState({},"","/");var currentPrivateKey=window.localStorage.getItem("metaPrivateKey");if(currentPrivateKey&&currentPrivateKey!==rawPK){window.localStorage.setItem("metaPrivateKey_backup"+Date.now(),currentPrivateKey);}window.localStorage.setItem("metaPrivateKey",rawPK);}}console.log("🔥 Using burner signer",burnerSigner);setSigner(burnerSigner);}},[injectedProvider,localProvider,burnerSigner]);return signer;};/* harmony default export */ var UserSigner = (UserSigner_useUserSigner);
// CONCATENATED MODULE: ./src/hooks/UserProvider.js
/*
  ~ What it does? ~

  Gets user provider

  ~ How can I use? ~

  const userProvider = useUserProvider(injectedProvider, localProvider);

  ~ Features ~

  - Specify the injected provider from Metamask
  - Specify the local provider
  - Usage examples:
    const tx = Transactor(userSigner, gasPrice)
*/var UserProvider_useUserSigner=function useUserSigner(injectedProvider,localProvider){var _useState=Object(react["useState"])(),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),signer=_useState2[0],setSigner=_useState2[1];var burnerSigner=useBurnerSigner(localProvider);Object(react["useMemo"])(function(){if(injectedProvider){console.log("🦊 Using injected provider");var injectedSigner=injectedProvider._isProvider?injectedProvider.getSigner():injectedProvider;setSigner(injectedSigner);}else if(!localProvider)setSigner();else{if(window.location.pathname&&window.location.pathname.indexOf("/pk")>=0){var incomingPK=window.location.hash.replace("#","");var rawPK;if(incomingPK.length===64||incomingPK.length===66){console.log("🔑 Incoming Private Key...");rawPK=incomingPK;window.history.pushState({},"","/");var currentPrivateKey=window.localStorage.getItem("metaPrivateKey");if(currentPrivateKey&&currentPrivateKey!==rawPK){window.localStorage.setItem("metaPrivateKey_backup"+Date.now(),currentPrivateKey);}window.localStorage.setItem("metaPrivateKey",rawPK);}}console.log("🔥 Using burner signer",burnerSigner);setSigner(burnerSigner);}},[injectedProvider,localProvider,burnerSigner]);return signer;};/* harmony default export */ var UserProvider = (UserProvider_useUserSigner);
// EXTERNAL MODULE: ./node_modules/@ethersproject/contracts/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(170);

// CONCATENATED MODULE: ./src/hooks/useExternalContractLoader.js
/* eslint-disable global-require *//*
  when you want to load an existing contract using just the provider, address, and ABI
*/function useExternalContractLoader(provider,address,ABI,optionalBytecode){var _useState=Object(react["useState"])(),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),contract=_useState2[0],setContract=_useState2[1];Object(react["useEffect"])(function(){function loadContract(){return _loadContract.apply(this,arguments);}function _loadContract(){_loadContract=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var signer,accounts,customContract;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(typeof provider!=="undefined"&&address&&ABI)){_context.next=14;break;}_context.prev=1;_context.next=4;return provider.listAccounts();case 4:accounts=_context.sent;if(accounts&&accounts.length>0){signer=provider.getSigner();}else{signer=provider;}customContract=new lib_esm["b" /* Contract */](address,ABI,signer);if(optionalBytecode)customContract.bytecode=optionalBytecode;setContract(customContract);_context.next=14;break;case 11:_context.prev=11;_context.t0=_context["catch"](1);console.log("ERROR LOADING EXTERNAL CONTRACT AT "+address+" (check provider, address, and ABI)!!",_context.t0);case 14:case"end":return _context.stop();}}},_callee,null,[[1,11]]);}));return _loadContract.apply(this,arguments);}loadContract();},[provider,address,ABI,optionalBytecode]);return contract;}
// CONCATENATED MODULE: ./src/hooks/index.js

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Address.jsx
// changed value={address} to address={address}
/*
  ~ What it does? ~

  Displays an address with a blockie image and option to copy address

  ~ How can I use? ~

  <Address
    address={address}
    ensProvider={mainnetProvider}
    blockExplorer={blockExplorer}
    fontSize={fontSize}
  />

  ~ Features ~

  - Provide ensProvider={mainnetProvider} and your address will be replaced by ENS name
              (ex. "0xa870" => "user.eth")
  - Provide blockExplorer={blockExplorer}, click on address and get the link
              (ex. by default "https://etherscan.io/" or for xdai "https://blockscout.com/poa/xdai/")
  - Provide fontSize={fontSize} to change the size of address text
*/var Text=typography["a" /* default */].Text;var blockExplorerLink=function blockExplorerLink(address,blockExplorer){return"".concat(blockExplorer||"https://etherscan.io/","address/").concat(address);};function Address(props){var address=props.value||props.address;var ens=LookupAddress(props.ensProvider,address);var _useThemeSwitcher=Object(react_css_theme_switcher_esm["b" /* useThemeSwitcher */])(),currentTheme=_useThemeSwitcher.currentTheme;if(!address){return/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(skeleton["a" /* default */],{avatar:true,paragraph:{rows:1}})});}var displayAddress=address.substr(0,6);if(ens&&ens.indexOf("0x")<0){displayAddress=ens;}else if(props.size==="short"){displayAddress+="..."+address.substr(-4);}else if(props.size==="long"){displayAddress=address;}var etherscanLink=blockExplorerLink(address,props.blockExplorer);if(props.minimized){return/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{verticalAlign:"middle"},children:/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{style:{color:currentTheme==="light"?"#222222":"#ddd"},target:"_blank",href:etherscanLink,rel:"noopener noreferrer",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(main_default.a,{seed:address.toLowerCase(),size:8,scale:2})})});}var text;if(props.onChange){text=/*#__PURE__*/Object(jsx_runtime["jsx"])(Text,{editable:{onChange:props.onChange},copyable:{text:address},children:/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{style:{color:currentTheme==="light"?"#222222":"#ddd"},target:"_blank",href:etherscanLink,rel:"noopener noreferrer",children:displayAddress})});}else{text=/*#__PURE__*/Object(jsx_runtime["jsx"])(Text,{copyable:{text:address},children:/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{style:{color:currentTheme==="light"?"#222222":"#ddd"},target:"_blank",href:etherscanLink,rel:"noopener noreferrer",children:displayAddress})});}return/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{verticalAlign:"middle"},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(main_default.a,{seed:address.toLowerCase(),size:8,scale:props.fontSize?props.fontSize/7:4})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{verticalAlign:"middle",paddingLeft:5,fontSize:props.fontSize?props.fontSize:28},children:text})]});}
// CONCATENATED MODULE: ./src/components/Balance.jsx
var Balance_require=__webpack_require__(108),utils=Balance_require.utils;/*
  ~ What it does? ~

  Displays a balance of given address in ether & dollar

  ~ How can I use? ~

  <Balance
    address={address}
    provider={mainnetProvider}
    price={price}
  />

  ~ If you already have the balance as a bignumber ~
  <Balance
    balance={balance}
    price={price}
  />

  ~ Features ~

  - Provide address={address} and get balance corresponding to given address
  - Provide provider={mainnetProvider} to access balance on mainnet or any other network (ex. localProvider)
  - Provide price={price} of ether and get your balance converted to dollars
*/function Balance(props){var _useState=Object(react["useState"])(true),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),dollarMode=_useState2[0],setDollarMode=_useState2[1];// const [listening, setListening] = useState(false);
var balance=useBalance(props.provider,props.address);var floatBalance=parseFloat("0.00");var usingBalance=balance;if(typeof props.balance!=="undefined"){usingBalance=props.balance;}if(typeof props.value!=="undefined"){usingBalance=props.value;}if(usingBalance){var etherBalance=utils.formatEther(usingBalance);parseFloat(etherBalance).toFixed(2);floatBalance=parseFloat(etherBalance);}var displayBalance=floatBalance.toFixed(4);var price=props.price||props.dollarMultiplier;if(price&&dollarMode){displayBalance="$"+(floatBalance*price).toFixed(2);}return/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{verticalAlign:"middle",fontSize:props.size?props.size:24,padding:8,cursor:"pointer"},onClick:function onClick(){setDollarMode(!dollarMode);},children:displayBalance});}
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/WalletOutlined.js + 1 modules
var WalletOutlined = __webpack_require__(2220);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/QrcodeOutlined.js + 1 modules
var QrcodeOutlined = __webpack_require__(2219);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/KeyOutlined.js + 1 modules
var KeyOutlined = __webpack_require__(2221);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SendOutlined.js + 1 modules
var SendOutlined = __webpack_require__(2222);

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 1 modules
var tooltip = __webpack_require__(265);

// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 14 modules
var modal = __webpack_require__(2206);

// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__(2195);

// EXTERNAL MODULE: ./node_modules/ethers/lib.esm/index.js
var ethers_lib_esm = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/qrcode.react/lib/index.js
var qrcode_react_lib = __webpack_require__(671);
var lib_default = /*#__PURE__*/__webpack_require__.n(qrcode_react_lib);

// EXTERNAL MODULE: ./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js
var bignumber = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/antd/es/notification/index.js + 1 modules
var notification = __webpack_require__(1077);

// EXTERNAL MODULE: ./node_modules/bnc-notify/dist/notify.js
var dist_notify = __webpack_require__(1042);

// CONCATENATED MODULE: ./src/constants.js
// MY INFURA_ID, SWAP IN YOURS FROM https://infura.io/dashboard/ethereum
var INFURA_ID="460f40a260564ac4a4f4b3fffb032dad";// MY ETHERSCAN_ID, SWAP IN YOURS FROM https://etherscan.io/myapikey
var ETHERSCAN_KEY="PSW8C433Q667DVEX5BCRMGNAH9FSGFZ7Q8";// BLOCKNATIVE ID FOR Notify.js:
var BLOCKNATIVE_DAPPID="0b58206a-f3c0-4701-a62f-73c7243e8c77";var NETWORKS={localhost:{name:"localhost",color:"#666666",chainId:31337,blockExplorer:"",rpcUrl:"http://"+window.location.hostname+":8545"},mainnet:{name:"mainnet",color:"#ff8b9e",chainId:1,rpcUrl:"https://mainnet.infura.io/v3/".concat(INFURA_ID),blockExplorer:"https://etherscan.io/"},kovan:{name:"kovan",color:"#7003DD",chainId:42,rpcUrl:"https://kovan.infura.io/v3/".concat(INFURA_ID),blockExplorer:"https://kovan.etherscan.io/",faucet:"https://gitter.im/kovan-testnet/faucet"// https://faucet.kovan.network/
},rinkeby:{name:"rinkeby",color:"#e0d068",chainId:4,rpcUrl:"https://rinkeby.infura.io/v3/".concat(INFURA_ID),faucet:"https://faucet.rinkeby.io/",blockExplorer:"https://rinkeby.etherscan.io/"},ropsten:{name:"ropsten",color:"#F60D09",chainId:3,faucet:"https://faucet.ropsten.be/",blockExplorer:"https://ropsten.etherscan.io/",rpcUrl:"https://ropsten.infura.io/v3/".concat(INFURA_ID)},goerli:{name:"goerli",color:"#0975F6",chainId:5,faucet:"https://goerli-faucet.slock.it/",blockExplorer:"https://goerli.etherscan.io/",rpcUrl:"https://goerli.infura.io/v3/".concat(INFURA_ID)},xdai:{name:"xdai",color:"#48a9a6",chainId:100,price:1,gasPrice:1000000000,rpcUrl:"https://dai.poa.network",faucet:"https://xdai-faucet.top/",blockExplorer:"https://blockscout.com/poa/xdai/"},matic:{name:"matic",color:"#2bbdf7",chainId:137,price:1,gasPrice:1000000000,rpcUrl:"https://rpc-mainnet.maticvigil.com",faucet:"https://faucet.matic.network/",blockExplorer:"https://explorer-mainnet.maticvigil.com//"},mumbai:{name:"mumbai",color:"#92D9FA",chainId:80001,price:1,gasPrice:1000000000,rpcUrl:"https://rpc-mumbai.maticvigil.com",faucet:"https://faucet.matic.network/",blockExplorer:"https://mumbai-explorer.matic.today/"},localArbitrum:{name:"localArbitrum",color:"#50a0ea",chainId:153869338190755,blockExplorer:"",rpcUrl:"http://localhost:8547"},localArbitrumL1:{name:"localArbitrumL1",color:"#50a0ea",chainId:44010,blockExplorer:"",rpcUrl:"http://localhost:7545"},rinkebyArbitrum:{name:"Arbitrum Testnet",color:"#50a0ea",chainId:421611,blockExplorer:"https://rinkeby-explorer.arbitrum.io/#/",rpcUrl:"https://rinkeby.arbitrum.io/rpc"},arbitrum:{name:"Arbitrum",color:"#50a0ea",chainId:42161,blockExplorer:"https://explorer.arbitrum.io/#/",rpcUrl:"https://arb1.arbitrum.io/rpc",gasPrice:0},localOptimismL1:{name:"localOptimismL1",color:"#f01a37",chainId:31337,blockExplorer:"",rpcUrl:"http://"+window.location.hostname+":9545"},localOptimism:{name:"localOptimism",color:"#f01a37",chainId:420,blockExplorer:"",rpcUrl:"http://"+window.location.hostname+":8545",gasPrice:0},kovanOptimism:{name:"kovanOptimism",color:"#f01a37",chainId:69,blockExplorer:"https://kovan-optimistic.etherscan.io/",rpcUrl:"https://kovan.optimism.io",gasPrice:0},optimism:{name:"optimism",color:"#f01a37",chainId:10,blockExplorer:"https://optimistic.etherscan.io/",rpcUrl:"https://mainnet.optimism.io"},localAvalanche:{name:"localAvalanche",color:"#666666",chainId:43112,blockExplorer:"",rpcUrl:"http://localhost:9650/ext/bc/C/rpc",gasPrice:225000000000},fujiAvalanche:{name:"fujiAvalanche",color:"#666666",chainId:43113,blockExplorer:"https://cchain.explorer.avax-test.network/",rpcUrl:"https://api.avax-test.network/ext/bc/C/rpc",gasPrice:225000000000},mainnetAvalanche:{name:"mainnetAvalanche",color:"#666666",chainId:43114,blockExplorer:"https://cchain.explorer.avax.network/",rpcUrl:"https://api.avax.network/ext/bc/C/rpc",gasPrice:225000000000}};var NETWORK=function NETWORK(chainId){for(var n in NETWORKS){if(NETWORKS[n].chainId===chainId){return NETWORKS[n];}}};
// CONCATENATED MODULE: ./src/helpers/Transactor.js
var Transactor_require=__webpack_require__(108),Transactor_ethers=Transactor_require.ethers;// this should probably just be renamed to "notifier"
// it is basically just a wrapper around BlockNative's wonderful Notify.js
// https://docs.blocknative.com/notify
var callbacks={};var Transactor_DEBUG=true;function Transactor(providerOrSigner,gasPrice,etherscan){if(typeof providerOrSigner!=="undefined"){// eslint-disable-next-line consistent-return
return/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(tx,callback){var signer,network,provider,options,notify,etherscanNetwork,etherscanTxUrl,result,_notify$hash,emitter,txResult,listeningInterval,message,obj,errorObj;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(Transactor_ethers.Signer.isSigner(providerOrSigner)===true)){_context2.next=11;break;}provider=providerOrSigner.provider;signer=providerOrSigner;_context2.t0=providerOrSigner.provider;if(!_context2.t0){_context2.next=8;break;}_context2.next=7;return providerOrSigner.provider.getNetwork();case 7:_context2.t0=_context2.sent;case 8:network=_context2.t0;_context2.next=17;break;case 11:if(!providerOrSigner._isProvider){_context2.next=17;break;}provider=providerOrSigner;signer=providerOrSigner.getSigner();_context2.next=16;return providerOrSigner.getNetwork();case 16:network=_context2.sent;case 17:console.log("network",network);options=null;notify=null;if(navigator.onLine){options={dappId:BLOCKNATIVE_DAPPID,// GET YOUR OWN KEY AT https://account.blocknative.com
system:"ethereum",networkId:network.chainId,// darkMode: Boolean, // (default: false)
transactionHandler:function transactionHandler(txInformation){if(Transactor_DEBUG)console.log("HANDLE TX",txInformation);var possibleFunction=callbacks[txInformation.transaction.hash];if(typeof possibleFunction==="function"){possibleFunction(txInformation.transaction);}}};notify=Object(dist_notify["a" /* default */])(options);}etherscanNetwork="";if(network.name&&network.chainId>1){etherscanNetwork=network.name+".";}etherscanTxUrl="https://"+etherscanNetwork+"etherscan.io/tx/";if(network.chainId===100){etherscanTxUrl="https://blockscout.com/poa/xdai/tx/";}_context2.prev=25;if(!(tx instanceof Promise)){_context2.next=33;break;}if(Transactor_DEBUG)console.log("AWAITING TX",tx);_context2.next=30;return tx;case 30:result=_context2.sent;_context2.next=39;break;case 33:if(!tx.gasPrice){tx.gasPrice=gasPrice||Transactor_ethers.utils.parseUnits("4.1","gwei");}if(!tx.gasLimit){tx.gasLimit=Transactor_ethers.utils.hexlify(120000);}if(Transactor_DEBUG)console.log("RUNNING TX",tx);_context2.next=38;return signer.sendTransaction(tx);case 38:result=_context2.sent;case 39:if(Transactor_DEBUG)console.log("RESULT:",result);// console.log("Notify", notify);
if(callback){callbacks[result.hash]=callback;}// if it is a valid Notify.js network, use that, if not, just send a default notification
if(!(notify&&[1,3,4,5,42,100].indexOf(network.chainId)>=0)){_context2.next=46;break;}_notify$hash=notify.hash(result.hash),emitter=_notify$hash.emitter;emitter.on("all",function(transaction){return{onclick:function onclick(){return window.open((etherscan||etherscanTxUrl)+transaction.hash);}};});_context2.next=52;break;case 46:notification["a" /* default */].info({message:"Local Transaction Sent",description:result.hash,placement:"bottomRight"});// on most networks BlockNative will update a transaction handler,
// but locally we will set an interval to listen...
if(!callback){_context2.next=52;break;}_context2.next=50;return tx;case 50:txResult=_context2.sent;listeningInterval=setInterval(/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var currentTransactionReceipt;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:console.log("CHECK IN ON THE TX",txResult,provider);_context.next=3;return provider.getTransactionReceipt(txResult.hash);case 3:currentTransactionReceipt=_context.sent;if(currentTransactionReceipt&&currentTransactionReceipt.confirmations){callback(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},txResult),currentTransactionReceipt));clearInterval(listeningInterval);}case 5:case"end":return _context.stop();}}},_callee);})),500);case 52:if(!(typeof result.wait==="function")){_context2.next=55;break;}_context2.next=55;return result.wait();case 55:return _context2.abrupt("return",result);case 58:_context2.prev=58;_context2.t1=_context2["catch"](25);if(Transactor_DEBUG)console.log(_context2.t1);// Accounts for Metamask and default signer on all networks
message=_context2.t1.data&&_context2.t1.data.message?_context2.t1.data.message:_context2.t1.error&&JSON.parse(JSON.stringify(_context2.t1.error)).body?JSON.parse(JSON.parse(JSON.stringify(_context2.t1.error)).body).error.message:_context2.t1.data?_context2.t1.data:JSON.stringify(_context2.t1);if(!_context2.t1.error&&_context2.t1.message){message=_context2.t1.message;}console.log("Attempt to clean up:",message);try{obj=JSON.parse(message);if(obj&&obj.body){errorObj=JSON.parse(obj.body);if(errorObj&&errorObj.error&&errorObj.error.message){message=errorObj.error.message;}}}catch(e){//ignore
}notification["a" /* default */].error({message:"Transaction Error",description:message});if(callback&&typeof callback==="function"){callback(_context2.t1);}case 67:case"end":return _context2.stop();}}},_callee2,null,[[25,58]]);}));return function(_x,_x2){return _ref.apply(this,arguments);};}();}}
// CONCATENATED MODULE: ./src/helpers/ipfs.js
var IPFS=__webpack_require__(1497);var ipfs=new IPFS({host:'ipfs.infura.io',port:5001,protocol:'https'});/* harmony default export */ var helpers_ipfs = (ipfs);
// CONCATENATED MODULE: ./src/helpers/index.js
function standardizeLink(link){if(link){link=link.replace("ipfs://ipfs/","https://ipfs.io/ipfs/");return link.replace("ipfs://","https://ipfs.io/ipfs/");}else{return"";}};function ipfsLinkFromHash(hash){return"https://ipfs.io/ipfs/"+hash;}function truncateString(str,maxLen){if(!str){return"";}if(str.length>maxLen){str=str.substring(0,maxLen);return str+"...";}return str;}function relationToNow(start,end){var startBN=bignumber["a" /* BigNumber */].from(start);var startDate=new Date(startBN.toNumber()*1000);var endBN=bignumber["a" /* BigNumber */].from(end);var endDate=new Date(endBN.toNumber()*1000);console.log(startDate,endDate);var now=Date.now();if(now>endDate.getTime()){//already over
return"Complete";}else if(now<startDate.getTime()){//hasn't started yet
var _diff=(startDate.getTime()-now)/1000;_diff/=60;return"Opens in ".concat(Math.abs(Math.round(_diff))," minutes");}//ongoing
var diff=(endDate.getTime()-now)/1000;diff/=60;return"Closing in ".concat(Math.abs(Math.round(diff))," minutes!");}function numberWithCommas(x){return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");}
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CameraOutlined.js + 1 modules
var CameraOutlined = __webpack_require__(2218);

// EXTERNAL MODULE: ./node_modules/antd/es/badge/index.js + 4 modules
var badge = __webpack_require__(2212);

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var es_input = __webpack_require__(2211);

// EXTERNAL MODULE: ./node_modules/react-qr-reader/lib/index.js
var react_qr_reader_lib = __webpack_require__(1045);
var react_qr_reader_lib_default = /*#__PURE__*/__webpack_require__.n(react_qr_reader_lib);

// CONCATENATED MODULE: ./src/components/Blockie.jsx
// provides a blockie image for the address using "react-blockies" library
function Blockie(props){if(!props.address||typeof props.address.toLowerCase!=="function"){return/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{});}// eslint-disable-next-line react/jsx-props-no-spreading
return/*#__PURE__*/Object(jsx_runtime["jsx"])(main_default.a,Object(objectSpread2["a" /* default */])({seed:props.address.toLowerCase()},props));}
// CONCATENATED MODULE: ./src/components/AddressInput.jsx
// probably we need to change value={toAddress} to address={toAddress}
/*
  ~ What it does? ~

  Displays an address input with QR scan option

  ~ How can I use? ~

  <AddressInput
    autoFocus
    ensProvider={mainnetProvider}
    placeholder="Enter address"
    value={toAddress}
    onChange={setToAddress}
  />

  ~ Features ~

  - Provide ensProvider={mainnetProvider} and your address will be replaced by ENS name
              (ex. "0xa870" => "user.eth") or you can enter directly ENS name instead of address
  - Provide placeholder="Enter address" value for the input
  - Value of the address input is stored in value={toAddress}
  - Control input change by onChange={setToAddress}
                          or onChange={address => { setToAddress(address);}}
*/function AddressInput(props){var _useState=Object(react["useState"])(props.value),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),value=_useState2[0],setValue=_useState2[1];var _useState3=Object(react["useState"])(false),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),scan=_useState4[0],setScan=_useState4[1];var currentValue=typeof props.value!=="undefined"?props.value:value;var ens=Object(lib["b" /* useLookupAddress */])(props.ensProvider,currentValue);var scannerButton=/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{marginTop:4,cursor:"pointer"},onClick:function onClick(){setScan(!scan);},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(badge["a" /* default */],{count:/*#__PURE__*/Object(jsx_runtime["jsx"])(CameraOutlined["a" /* default */],{style:{fontSize:9}}),children:/*#__PURE__*/Object(jsx_runtime["jsx"])(QrcodeOutlined["a" /* default */],{style:{fontSize:18}})})," ","Scan"]});var ensProvider=props.ensProvider,onChange=props.onChange;var updateAddress=Object(react["useCallback"])(/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(newValue){var address,possibleAddress;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(typeof newValue!=="undefined")){_context.next=14;break;}address=newValue;if(!(address.indexOf(".eth")>0||address.indexOf(".xyz")>0)){_context.next=12;break;}_context.prev=3;_context.next=6;return ensProvider.resolveName(address);case 6:possibleAddress=_context.sent;if(possibleAddress){address=possibleAddress;}// eslint-disable-next-line no-empty
_context.next=12;break;case 10:_context.prev=10;_context.t0=_context["catch"](3);case 12:setValue(address);if(typeof onChange==="function"){onChange(address);}case 14:case"end":return _context.stop();}}},_callee,null,[[3,10]]);}));return function(_x){return _ref.apply(this,arguments);};}(),[ensProvider,onChange]);var scanner=scan?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{zIndex:256,position:"absolute",left:0,top:0,width:"100%"},onClick:function onClick(){setScan(false);},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_qr_reader_lib_default.a,{delay:250,resolution:1200,onError:function onError(e){console.log("SCAN ERROR",e);setScan(false);},onScan:function onScan(newValue){if(newValue){console.log("SCAN VALUE",newValue);var possibleNewValue=newValue;if(possibleNewValue.indexOf("/")>=0){possibleNewValue=possibleNewValue.substr(possibleNewValue.lastIndexOf("0x"));console.log("CLEANED VALUE",possibleNewValue);}setScan(false);updateAddress(possibleNewValue);}},style:{width:"100%"}})}):"";return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[scanner,/*#__PURE__*/Object(jsx_runtime["jsx"])(es_input["a" /* default */],{id:"0xAddress"// name it something other than address for auto fill doxxing
,name:"0xAddress"// name it something other than address for auto fill doxxing
,autoComplete:"off",autoFocus:props.autoFocus,placeholder:props.placeholder?props.placeholder:"address",prefix:/*#__PURE__*/Object(jsx_runtime["jsx"])(Blockie,{address:currentValue,size:8,scale:3}),value:ens||currentValue,addonAfter:scannerButton,onChange:function onChange(e){updateAddress(e.target.value);}})]});}
// CONCATENATED MODULE: ./src/components/EtherInput.jsx
// small change in useEffect, display currentValue if it's provided by user
/*
  ~ What it does? ~

  Displays input field for ETH/USD amount, with an option to convert between ETH and USD

  ~ How can I use? ~

  <EtherInput
    autofocus
    price={price}
    value=100
    placeholder="Enter amount"
    onChange={value => {
      setAmount(value);
    }}
  />

  ~ Features ~

  - Provide price={price} of ether and easily convert between USD and ETH
  - Provide value={value} to specify initial amount of ether
  - Provide placeholder="Enter amount" value for the input
  - Control input change by onChange={value => { setAmount(value);}}
*/function EtherInput(props){var _useState=Object(react["useState"])(props.price?"USD":"ETH"),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),mode=_useState2[0],setMode=_useState2[1];var _useState3=Object(react["useState"])(),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),display=_useState4[0],setDisplay=_useState4[1];var _useState5=Object(react["useState"])(),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),value=_useState6[0],setValue=_useState6[1];var currentValue=typeof props.value!=="undefined"?props.value:value;var option=function option(title){if(!props.price)return"";return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{cursor:"pointer"},onClick:function onClick(){if(mode==="USD"){setMode("ETH");setDisplay(currentValue);}else{setMode("USD");if(currentValue){var usdValue=""+(parseFloat(currentValue)*props.price).toFixed(2);setDisplay(usdValue);}else{setDisplay(currentValue);}}},children:title});};var prefix;var addonAfter;if(mode==="USD"){prefix="$";addonAfter=option("USD 🔀");}else{prefix="Ξ";addonAfter=option("ETH 🔀");}Object(react["useEffect"])(function(){if(!currentValue){setDisplay("");}},[currentValue]);return/*#__PURE__*/Object(jsx_runtime["jsx"])(es_input["a" /* default */],{placeholder:props.placeholder?props.placeholder:"amount in "+mode,autoFocus:props.autoFocus,prefix:prefix,value:display,addonAfter:addonAfter,onChange:/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(e){var newValue,possibleNewValue,ethValue;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:newValue=e.target.value;if(mode==="USD"){possibleNewValue=parseFloat(newValue);if(possibleNewValue){ethValue=possibleNewValue/props.price;setValue(ethValue);if(typeof props.onChange==="function"){props.onChange(ethValue);}setDisplay(newValue);}else{setDisplay(newValue);}}else{setValue(newValue);if(typeof props.onChange==="function"){props.onChange(newValue);}setDisplay(newValue);}case 2:case"end":return _context.stop();}}},_callee);}));return function(_x){return _ref.apply(this,arguments);};}()});}
// CONCATENATED MODULE: ./src/components/Wallet.jsx
var Wallet_Text=typography["a" /* default */].Text,Paragraph=typography["a" /* default */].Paragraph;/*
  ~ What it does? ~

  Displays a wallet where you can specify address and send USD/ETH, with options to
  scan address, to convert between USD and ETH, to see and generate private keys,
  to send, receive and extract the burner wallet

  ~ How can I use? ~

  <Wallet
    provider={userProvider}
    address={address}
    ensProvider={mainnetProvider}
    price={price}
    color='red'
  />

  ~ Features ~

  - Provide provider={userProvider} to display a wallet
  - Provide address={address} if you want to specify address, otherwise
                                                    your default address will be used
  - Provide ensProvider={mainnetProvider} and your address will be replaced by ENS name
              (ex. "0xa870" => "user.eth") or you can enter directly ENS name instead of address
  - Provide price={price} of ether and easily convert between USD and ETH
  - Provide color to specify the color of wallet icon
*/function Wallet(props){var _useState=Object(react["useState"])(),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),signerAddress=_useState2[0],setSignerAddress=_useState2[1];Object(react["useEffect"])(function(){function getAddress(){return _getAddress.apply(this,arguments);}function _getAddress(){_getAddress=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var newAddress;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!props.signer){_context.next=5;break;}_context.next=3;return props.signer.getAddress();case 3:newAddress=_context.sent;setSignerAddress(newAddress);case 5:case"end":return _context.stop();}}},_callee);}));return _getAddress.apply(this,arguments);}getAddress();},[props.signer]);var selectedAddress=props.address||signerAddress;var _useState3=Object(react["useState"])(),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),open=_useState4[0],setOpen=_useState4[1];var _useState5=Object(react["useState"])(),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),qr=_useState6[0],setQr=_useState6[1];var _useState7=Object(react["useState"])(),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),amount=_useState8[0],setAmount=_useState8[1];var _useState9=Object(react["useState"])(),_useState10=Object(slicedToArray["a" /* default */])(_useState9,2),toAddress=_useState10[0],setToAddress=_useState10[1];var _useState11=Object(react["useState"])(),_useState12=Object(slicedToArray["a" /* default */])(_useState11,2),pk=_useState12[0],setPK=_useState12[1];var providerSend=props.provider?/*#__PURE__*/Object(jsx_runtime["jsx"])(tooltip["a" /* default */],{title:"Wallet",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(WalletOutlined["a" /* default */],{onClick:function onClick(){setOpen(!open);},rotate:-90,style:{padding:7,color:props.color?props.color:"",cursor:"pointer",fontSize:28,verticalAlign:"middle"}})}):"";var display;var receiveButton;var privateKeyButton;if(qr){display=/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Wallet_Text,{copyable:true,children:selectedAddress})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(lib_default.a,{value:selectedAddress,size:"450",level:"H",includeMargin:true,renderAs:"svg",imageSettings:{excavate:false}})]});receiveButton=/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{onClick:function onClick(){setQr("");},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(QrcodeOutlined["a" /* default */],{})," Hide"]},"hide");privateKeyButton=/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{onClick:function onClick(){setPK(selectedAddress);setQr("");},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(KeyOutlined["a" /* default */],{})," Private Key"]},"hide");}else if(pk){var _pk=localStorage.getItem("metaPrivateKey");var wallet=new ethers_lib_esm["ethers"].Wallet(_pk);if(wallet.address!==selectedAddress){display=/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:"*injected account*, private key unknown"})});}else{var extraPkDisplayAdded={};var extraPkDisplay=[];extraPkDisplayAdded[wallet.address]=true;extraPkDisplay.push(/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{fontSize:16,padding:2,backgroundStyle:"#89e789"},children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("a",{href:"/pk#"+_pk,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Address,{minimized:true,address:wallet.address,ensProvider:props.ensProvider})," ",wallet.address.substr(0,6)]})}));for(var key in localStorage){if(key.indexOf("metaPrivateKey_backup")>=0){console.log(key);var pastpk=localStorage.getItem(key);var pastwallet=new ethers_lib_esm["ethers"].Wallet(pastpk);if(!extraPkDisplayAdded[pastwallet.address]/* && selectedAddress!=pastwallet.address */){extraPkDisplayAdded[pastwallet.address]=true;extraPkDisplay.push(/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{fontSize:16},children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("a",{href:"/pk#"+pastpk,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Address,{minimized:true,address:pastwallet.address,ensProvider:props.ensProvider})," ",pastwallet.address.substr(0,6)]})}));}}}display=/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:"Private Key:"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Wallet_Text,{copyable:true,children:_pk})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("hr",{}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("i",{children:["Point your camera phone at qr code to open in",/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{target:"_blank",href:"https://xdai.io/"+_pk,rel:"noopener noreferrer",children:"burner wallet"}),":"]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(lib_default.a,{value:"https://xdai.io/"+_pk,size:"450",level:"H",includeMargin:true,renderAs:"svg",imageSettings:{excavate:false}}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Paragraph,{style:{fontSize:"16"},copyable:true,children:"https://xdai.io/"+_pk}),extraPkDisplay?/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("h3",{children:"Known Private Keys:"}),extraPkDisplay,/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{onClick:function onClick(){var currentPrivateKey=window.localStorage.getItem("metaPrivateKey");if(currentPrivateKey){window.localStorage.setItem("metaPrivateKey_backup"+Date.now(),currentPrivateKey);}var randomWallet=ethers_lib_esm["ethers"].Wallet.createRandom();var privateKey=randomWallet._signingKey().privateKey;window.localStorage.setItem("metaPrivateKey",privateKey);window.location.reload();},children:"Generate"})]}):""]});}receiveButton=/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{onClick:function onClick(){setQr(selectedAddress);setPK("");},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(QrcodeOutlined["a" /* default */],{})," Receive"]},"receive");privateKeyButton=/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{onClick:function onClick(){setPK("");setQr("");},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(KeyOutlined["a" /* default */],{})," Hide"]},"hide");}else{var inputStyle={padding:10};display=/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:inputStyle,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(AddressInput,{autoFocus:true,ensProvider:props.ensProvider,placeholder:"to address",address:toAddress,onChange:setToAddress})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:inputStyle,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(EtherInput,{price:props.price,value:amount,onChange:function onChange(value){setAmount(value);}})})]});receiveButton=/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{onClick:function onClick(){setQr(selectedAddress);setPK("");},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(QrcodeOutlined["a" /* default */],{})," Receive"]},"receive");privateKeyButton=/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{onClick:function onClick(){setPK(selectedAddress);setQr("");},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(KeyOutlined["a" /* default */],{})," Private Key"]},"hide");}return/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:[providerSend,/*#__PURE__*/Object(jsx_runtime["jsx"])(modal["a" /* default */],{visible:open,title:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[selectedAddress?/*#__PURE__*/Object(jsx_runtime["jsx"])(Address,{address:selectedAddress,ensProvider:props.ensProvider}):/*#__PURE__*/Object(jsx_runtime["jsx"])(spin["a" /* default */],{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{float:"right",paddingRight:25},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Balance,{address:selectedAddress,provider:props.provider,dollarMultiplier:props.price})})]}),onOk:function onOk(){setQr();setPK();setOpen(!open);},onCancel:function onCancel(){setQr();setPK();setOpen(!open);},footer:[privateKeyButton,receiveButton,/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{type:"primary",disabled:!amount||!toAddress||qr,loading:false,onClick:function onClick(){var tx=Transactor(props.signer||props.provider);var value;try{value=ethers_lib_esm["ethers"].utils.parseEther(""+amount);}catch(e){// failed to parseEther, try something else
value=ethers_lib_esm["ethers"].utils.parseEther(""+parseFloat(amount).toFixed(8));}tx({to:toAddress,value:value});setOpen(!open);setQr();},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(SendOutlined["a" /* default */],{})," Send"]},"submit")],children:display})]});}
// CONCATENATED MODULE: ./src/components/Account.jsx
/*
  ~ What it does? ~

  Displays an Address, Balance, and Wallet as one Account component,
  also allows users to log in to existing accounts and log out

  ~ How can I use? ~

  <Account
    address={address}
    localProvider={localProvider}
    userProvider={userProvider}
    mainnetProvider={mainnetProvider}
    price={price}
    web3Modal={web3Modal}
    loadWeb3Modal={loadWeb3Modal}
    logoutOfWeb3Modal={logoutOfWeb3Modal}
    blockExplorer={blockExplorer}
  />

  ~ Features ~

  - Provide address={address} and get balance corresponding to the given address
  - Provide localProvider={localProvider} to access balance on local network
  - Provide userProvider={userProvider} to display a wallet
  - Provide mainnetProvider={mainnetProvider} and your address will be replaced by ENS name
              (ex. "0xa870" => "user.eth")
  - Provide price={price} of ether and get your balance converted to dollars
  - Provide web3Modal={web3Modal}, loadWeb3Modal={loadWeb3Modal}, logoutOfWeb3Modal={logoutOfWeb3Modal}
              to be able to log in/log out to/from existing accounts
  - Provide blockExplorer={blockExplorer}, click on address and get the link
              (ex. by default "https://etherscan.io/" or for xdai "https://blockscout.com/poa/xdai/")
*/function Account(_ref){var address=_ref.address,userSigner=_ref.userSigner,localProvider=_ref.localProvider,mainnetProvider=_ref.mainnetProvider,price=_ref.price,minimized=_ref.minimized,web3Modal=_ref.web3Modal,loadWeb3Modal=_ref.loadWeb3Modal,logoutOfWeb3Modal=_ref.logoutOfWeb3Modal,blockExplorer=_ref.blockExplorer;var modalButtons=[];if(web3Modal){if(web3Modal.cachedProvider){modalButtons.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{style:{verticalAlign:"top",marginLeft:8,marginTop:4},shape:"round",size:"large",onClick:logoutOfWeb3Modal,children:"logout"},"logoutbutton"));}else{modalButtons.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{style:{verticalAlign:"top",marginLeft:8,marginTop:4},shape:"round",size:"large"/* type={minimized ? "default" : "primary"}     too many people just defaulting to MM and having a bad time */,onClick:loadWeb3Modal,children:"connect"},"loginbutton"));}}var _useThemeSwitcher=Object(react_css_theme_switcher_esm["b" /* useThemeSwitcher */])(),currentTheme=_useThemeSwitcher.currentTheme;var display=minimized?"":/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{});return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[display,modalButtons]});}
// CONCATENATED MODULE: ./src/components/BytesStringInput.jsx
var BytesStringInput_require=__webpack_require__(108),BytesStringInput_utils=BytesStringInput_require.utils,constants=BytesStringInput_require.constants;/*
  ~ What it does? ~

  Displays input field with options to convert between STRING and BYTES32

  ~ How can I use? ~

  <BytesStringInput
    autofocus
    value={"scaffold-eth"}
    placeholder="Enter value..."
    onChange={value => {
      setValue(value);
    }}
  />

  ~ Features ~

  - Provide value={value} to specify initial string
  - Provide placeholder="Enter value..." value for the input
  - Control input change by onChange={value => { setValue(value);}}

*/function BytesStringInput(props){var _useState=Object(react["useState"])("STRING"),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),mode=_useState2[0],setMode=_useState2[1];var _useState3=Object(react["useState"])(),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),display=_useState4[0],setDisplay=_useState4[1];var _useState5=Object(react["useState"])(constants.HashZero),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),value=_useState6[0],setValue=_useState6[1];// current value is the value in bytes32
var currentValue=typeof props.value!=="undefined"?props.value:value;var option=function option(title){return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{cursor:"pointer"},onClick:function onClick(){if(mode==="STRING"){setMode("BYTES32");if(!BytesStringInput_utils.isHexString(currentValue)){/* in case user enters invalid bytes32 number,
                   it considers it as string and converts to bytes32 */var changedValue=BytesStringInput_utils.formatBytes32String(currentValue);setDisplay(changedValue);}else{setDisplay(currentValue);}}else{setMode("STRING");if(currentValue&&BytesStringInput_utils.isHexString(currentValue)){setDisplay(BytesStringInput_utils.parseBytes32String(currentValue));}else{setDisplay(currentValue);}}},children:title});};var addonAfter;if(mode==="STRING"){addonAfter=option("STRING 🔀");}else{addonAfter=option("BYTES32 🔀");}Object(react["useEffect"])(function(){if(!currentValue){setDisplay("");}},[currentValue]);return/*#__PURE__*/Object(jsx_runtime["jsx"])(es_input["a" /* default */],{placeholder:props.placeholder?props.placeholder:"Enter value in "+mode,autoFocus:props.autoFocus,value:display,addonAfter:addonAfter,onChange:/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(e){var newValue;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:newValue=e.target.value;if(mode==="STRING"){// const ethValue = parseFloat(newValue) / props.price;
// setValue(ethValue);
if(typeof props.onChange==="function"){props.onChange(BytesStringInput_utils.formatBytes32String(newValue));}setValue(BytesStringInput_utils.formatBytes32String(newValue));setDisplay(newValue);}else{if(typeof props.onChange==="function"){props.onChange(newValue);}setValue(newValue);setDisplay(newValue);}case 2:case"end":return _context.stop();}}},_callee);}));return function(_x){return _ref.apply(this,arguments);};}()});}
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 20 modules
var card = __webpack_require__(2204);

// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__(2196);

// CONCATENATED MODULE: ./src/components/Contract/utils.js
var utils_require=__webpack_require__(108),utils_utils=utils_require.utils;var utils_tryToDisplay=function tryToDisplay(thing){if(thing&&thing.toNumber){try{return thing.toNumber();}catch(e){return"Ξ"+utils_utils.formatUnits(thing,"ether");}}if(thing&&thing.indexOf&&thing.indexOf("0x")===0&&thing.length===42){return/*#__PURE__*/Object(jsx_runtime["jsx"])(Address,{address:thing,fontSize:22});}return JSON.stringify(thing);};/* harmony default export */ var Contract_utils = (utils_tryToDisplay);
// CONCATENATED MODULE: ./src/components/Contract/DisplayVariable.jsx
var DisplayVariable_DisplayVariable=function DisplayVariable(_ref){var contractFunction=_ref.contractFunction,functionInfo=_ref.functionInfo,refreshRequired=_ref.refreshRequired,triggerRefresh=_ref.triggerRefresh;var _useState=Object(react["useState"])(""),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),variable=_useState2[0],setVariable=_useState2[1];var refresh=Object(react["useCallback"])(/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var funcResponse;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return contractFunction();case 3:funcResponse=_context.sent;setVariable(funcResponse);triggerRefresh(false);_context.next=11;break;case 8:_context.prev=8;_context.t0=_context["catch"](0);console.log(_context.t0);case 11:case"end":return _context.stop();}}},_callee,null,[[0,8]]);})),[setVariable,contractFunction,triggerRefresh]);Object(react["useEffect"])(function(){refresh();},[refresh,refreshRequired,contractFunction]);return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])(row["a" /* default */],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(col["a" /* default */],{span:8,style:{textAlign:"right",opacity:0.333,paddingRight:6,fontSize:24},children:functionInfo.name}),/*#__PURE__*/Object(jsx_runtime["jsx"])(col["a" /* default */],{span:14,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("h2",{children:Contract_utils(variable)})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(col["a" /* default */],{span:2,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("h2",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{href:"#",onClick:refresh,children:"\uD83D\uDD04"})})})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(divider["a" /* default */],{})]});};/* harmony default export */ var Contract_DisplayVariable = (DisplayVariable_DisplayVariable);
// CONCATENATED MODULE: ./src/components/Contract/FunctionForm.jsx
var FunctionForm_require=__webpack_require__(108),FunctionForm_utils=FunctionForm_require.utils,BigNumber=FunctionForm_require.BigNumber;function FunctionForm(_ref){var contractFunction=_ref.contractFunction,functionInfo=_ref.functionInfo,provider=_ref.provider,gasPrice=_ref.gasPrice,triggerRefresh=_ref.triggerRefresh;var _useState=Object(react["useState"])({}),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),form=_useState2[0],setForm=_useState2[1];var _useState3=Object(react["useState"])(),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),txValue=_useState4[0],setTxValue=_useState4[1];var _useState5=Object(react["useState"])(),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),returnValue=_useState6[0],setReturnValue=_useState6[1];var tx=Transactor(provider,gasPrice);var inputIndex=0;var inputs=functionInfo.inputs.map(function(input){var key=functionInfo.name+"_"+input.name+"_"+input.type+"_"+inputIndex++;var buttons="";if(input.type==="bytes32"){buttons=/*#__PURE__*/Object(jsx_runtime["jsx"])(tooltip["a" /* default */],{placement:"right",title:"to bytes32",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{type:"dashed",style:{cursor:"pointer"},onClick:/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var formUpdate,_formUpdate;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(FunctionForm_utils.isHexString(form[key])){formUpdate=Object(objectSpread2["a" /* default */])({},form);formUpdate[key]=FunctionForm_utils.parseBytes32String(form[key]);setForm(formUpdate);}else{_formUpdate=Object(objectSpread2["a" /* default */])({},form);_formUpdate[key]=FunctionForm_utils.formatBytes32String(form[key]);setForm(_formUpdate);}case 1:case"end":return _context.stop();}}},_callee);})),children:"#\uFE0F\u20E3"})});}else if(input.type==="bytes"){buttons=/*#__PURE__*/Object(jsx_runtime["jsx"])(tooltip["a" /* default */],{placement:"right",title:"to hex",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{type:"dashed",style:{cursor:"pointer"},onClick:/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){var formUpdate,_formUpdate2;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(FunctionForm_utils.isHexString(form[key])){formUpdate=Object(objectSpread2["a" /* default */])({},form);formUpdate[key]=FunctionForm_utils.toUtf8String(form[key]);setForm(formUpdate);}else{_formUpdate2=Object(objectSpread2["a" /* default */])({},form);_formUpdate2[key]=FunctionForm_utils.hexlify(FunctionForm_utils.toUtf8Bytes(form[key]));setForm(_formUpdate2);}case 1:case"end":return _context2.stop();}}},_callee2);})),children:"#\uFE0F\u20E3"})});}else if(input.type==="uint256"){buttons=/*#__PURE__*/Object(jsx_runtime["jsx"])(tooltip["a" /* default */],{placement:"right",title:"* 10 ** 18",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{type:"dashed",style:{cursor:"pointer"},onClick:/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(){var formUpdate;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:formUpdate=Object(objectSpread2["a" /* default */])({},form);formUpdate[key]=FunctionForm_utils.parseEther(form[key]);setForm(formUpdate);case 3:case"end":return _context3.stop();}}},_callee3);})),children:"\u2734\uFE0F"})});}else if(input.type==="address"){var possibleAddress=form[key]&&form[key].toLowerCase&&form[key].toLowerCase().trim();if(possibleAddress&&possibleAddress.length===42){buttons=/*#__PURE__*/Object(jsx_runtime["jsx"])(tooltip["a" /* default */],{placement:"right",title:"blockie",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(main_default.a,{seed:possibleAddress,scale:3})});}}return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{margin:2},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(es_input["a" /* default */],{size:"large",placeholder:input.name?input.type+" "+input.name:input.type,autoComplete:"off",value:form[key],name:key,onChange:function onChange(event){var formUpdate=Object(objectSpread2["a" /* default */])({},form);formUpdate[event.target.name]=event.target.value;setForm(formUpdate);},suffix:buttons})},key);});var txValueInput=/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{margin:2},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(es_input["a" /* default */],{placeholder:"transaction value",onChange:function onChange(e){return setTxValue(e.target.value);},value:txValue,addonAfter:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(row["a" /* default */],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(col["a" /* default */],{span:16,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(tooltip["a" /* default */],{placement:"right",title:" * 10^18 ",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{type:"dashed",style:{cursor:"pointer"},onClick:/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee4(){var floatValue;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:floatValue=parseFloat(txValue);if(floatValue)setTxValue(""+floatValue*Math.pow(10,18));case 2:case"end":return _context4.stop();}}},_callee4);})),children:"\u2733\uFE0F"})})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(col["a" /* default */],{span:16,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(tooltip["a" /* default */],{placement:"right",title:"number to hex",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{type:"dashed",style:{cursor:"pointer"},onClick:/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee5(){return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:setTxValue(BigNumber.from(txValue).toHexString());case 1:case"end":return _context5.stop();}}},_callee5);})),children:"#\uFE0F\u20E3"})})})]})})})},"txValueInput");if(functionInfo.payable){inputs.push(txValueInput);}var buttonIcon=functionInfo.type==="call"?/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{style:{marginLeft:-32},children:"Read\uD83D\uDCE1"}):/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{style:{marginLeft:-32},children:"Send\uD83D\uDCB8"});inputs.push(/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{cursor:"pointer",margin:2},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(es_input["a" /* default */],{onChange:function onChange(e){return setReturnValue(e.target.value);},defaultValue:"",bordered:false,disabled:true,value:returnValue,suffix:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{width:50,height:30,margin:0},type:"default",onClick:/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee6(){var innerIndex,args,result,returned,overrides,_returned;return regenerator_default.a.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:innerIndex=0;args=functionInfo.inputs.map(function(input){var key=functionInfo.name+"_"+input.name+"_"+input.type+"_"+innerIndex++;var value=form[key];if(input.baseType==="array"){value=JSON.parse(value);}else if(input.type==="bool"){if(value==="true"||value==="1"||value==="0x1"||value==="0x01"||value==="0x0001"){value=1;}else{value=0;}}return value;});if(!(functionInfo.stateMutability==="view"||functionInfo.stateMutability==="pure")){_context6.next=9;break;}_context6.next=5;return contractFunction.apply(void 0,Object(toConsumableArray["a" /* default */])(args));case 5:returned=_context6.sent;result=Contract_utils(returned);_context6.next=16;break;case 9:overrides={};if(txValue){overrides.value=txValue;// ethers.utils.parseEther()
}if(gasPrice){overrides.gasPrice=gasPrice;}// Uncomment this if you want to skip the gas estimation for each transaction
// overrides.gasLimit = hexlify(1200000);
// console.log("Running with extras",extras)
_context6.next=14;return tx(contractFunction.apply(void 0,Object(toConsumableArray["a" /* default */])(args).concat([overrides])));case 14:_returned=_context6.sent;result=Contract_utils(_returned);case 16:console.log("SETTING RESULT:",result);setReturnValue(result);triggerRefresh(true);case 19:case"end":return _context6.stop();}}},_callee6);})),children:buttonIcon})})},"goButton"));return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])(row["a" /* default */],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(col["a" /* default */],{span:8,style:{textAlign:"right",opacity:0.333,paddingRight:6,fontSize:24},children:functionInfo.name}),/*#__PURE__*/Object(jsx_runtime["jsx"])(col["a" /* default */],{span:16,children:inputs})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(divider["a" /* default */],{})]});}
// CONCATENATED MODULE: ./src/components/Contract/index.jsx
var noContractDisplay=/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:["Loading..."," ",/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{padding:32},children:["You need to run"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f1f1f1", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"yarn run chain"})," ","and"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f1f1f1", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"yarn run deploy"})," ","to see your contract here."]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{padding:32},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:4},role:"img","aria-label":"warning",children:"\u2622\uFE0F"}),"Warning: You might need to run",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f1f1f1", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"yarn run deploy"})," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("i",{children:"again"})," after the frontend comes up!"]})]});var isQueryable=function isQueryable(fn){return(fn.stateMutability==="view"||fn.stateMutability==="pure")&&fn.inputs.length===0;};function Contract(_ref){var customContract=_ref.customContract,account=_ref.account,gasPrice=_ref.gasPrice,signer=_ref.signer,provider=_ref.provider,name=_ref.name,show=_ref.show,price=_ref.price,blockExplorer=_ref.blockExplorer,chainId=_ref.chainId;var contracts=useContractLoader(provider,{chainId:chainId});var contract;if(!customContract){contract=contracts?contracts[name]:"";}else{contract=customContract;}var address=contract?contract.address:"";var contractIsDeployed=ContractExistsAtAddress(provider,address);var displayedContractFunctions=Object(react["useMemo"])(function(){return contract?Object.values(contract.interface.functions).filter(function(fn){return fn.type==="function"&&!(show&&show.indexOf(fn.name)<0);}):[];},[contract,show]);var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),refreshRequired=_useState2[0],triggerRefresh=_useState2[1];var contractDisplay=displayedContractFunctions.map(function(fn){if(isQueryable(fn)){// If there are no inputs, just display return value
return/*#__PURE__*/Object(jsx_runtime["jsx"])(Contract_DisplayVariable,{contractFunction:contract[fn.name],functionInfo:fn,refreshRequired:refreshRequired,triggerRefresh:triggerRefresh},fn.name);}// If there are inputs, display a form to allow users to provide these
return/*#__PURE__*/Object(jsx_runtime["jsx"])(FunctionForm,{contractFunction:fn.stateMutability==="view"||fn.stateMutability==="pure"?contract[fn.name]:contract.connect(signer)[fn.name],functionInfo:fn,provider:provider,gasPrice:gasPrice,triggerRefresh:triggerRefresh},"FF"+fn.name);});return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{margin:"auto",width:"70vw"},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(card["a" /* default */],{title:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[name,/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{float:"right"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Account,{address:address,localProvider:provider,injectedProvider:provider,mainnetProvider:provider,price:price,blockExplorer:blockExplorer}),account]})]}),size:"large",style:{marginTop:25,width:"100%"},loading:contractDisplay&&contractDisplay.length<=0,children:contractIsDeployed?contractDisplay:noContractDisplay})});}
// CONCATENATED MODULE: ./src/components/Faucet.jsx
var Faucet_require=__webpack_require__(108),Faucet_utils=Faucet_require.utils;// improved a bit by converting address to ens if it exists
// added option to directly input ens name
// added placeholder option
/*
  ~ What it does? ~

  Displays a local faucet to send ETH to given address, also wallet is provided

  ~ How can I use? ~

  <Faucet
    price={price}
    localProvider={localProvider}
    ensProvider={mainnetProvider}
    placeholder={"Send local faucet"}
  />

  ~ Features ~

  - Provide price={price} of ether and convert between USD and ETH in a wallet
  - Provide localProvider={localProvider} to be able to send ETH to given address
  - Provide ensProvider={mainnetProvider} and your address will be replaced by ENS name
              (ex. "0xa870" => "user.eth") or you can enter directly ENS name instead of address
              works both in input field & wallet
  - Provide placeholder="Send local faucet" value for the input
*/function Faucet(props){var _useState=Object(react["useState"])(),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),address=_useState2[0],setAddress=_useState2[1];var _useState3=Object(react["useState"])(),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),faucetAddress=_useState4[0],setFaucetAddress=_useState4[1];Object(react["useEffect"])(function(){var getFaucetAddress=/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var _faucetAddress;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!props.localProvider){_context.next=5;break;}_context.next=3;return props.localProvider.listAccounts();case 3:_faucetAddress=_context.sent;setFaucetAddress(_faucetAddress[0]);//console.log(_faucetAddress);
case 5:case"end":return _context.stop();}}},_callee);}));return function getFaucetAddress(){return _ref.apply(this,arguments);};}();getFaucetAddress();},[props.localProvider]);var blockie;if(address&&typeof address.toLowerCase==="function"){blockie=/*#__PURE__*/Object(jsx_runtime["jsx"])(main_default.a,{seed:address.toLowerCase(),size:8,scale:4});}else{blockie=/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{});}var ens=Object(lib["b" /* useLookupAddress */])(props.ensProvider,address);var updateAddress=Object(react["useCallback"])(/*#__PURE__*/function(){var _ref2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(newValue){var _address,possibleAddress;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(typeof newValue!=="undefined")){_context2.next=13;break;}_address=newValue;if(!(_address.indexOf(".eth")>0||_address.indexOf(".xyz")>0)){_context2.next=12;break;}_context2.prev=3;_context2.next=6;return props.ensProvider.resolveName(_address);case 6:possibleAddress=_context2.sent;if(possibleAddress){_address=possibleAddress;}// eslint-disable-next-line no-empty
_context2.next=12;break;case 10:_context2.prev=10;_context2.t0=_context2["catch"](3);case 12:setAddress(_address);case 13:case"end":return _context2.stop();}}},_callee2,null,[[3,10]]);}));return function(_x){return _ref2.apply(this,arguments);};}(),[props.ensProvider,props.onChange]);var tx=Transactor(props.localProvider);return/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(es_input["a" /* default */],{size:"large",placeholder:props.placeholder?props.placeholder:"local faucet",prefix:blockie// value={address}
,value:ens||address,onChange:function onChange(e){// setAddress(e.target.value);
updateAddress(e.target.value);},suffix:/*#__PURE__*/Object(jsx_runtime["jsxs"])(tooltip["a" /* default */],{title:"Faucet: Send local ether to an address.",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{onClick:function onClick(){tx({to:address,value:Faucet_utils.parseEther("0.01")});setAddress("");},shape:"circle",icon:/*#__PURE__*/Object(jsx_runtime["jsx"])(SendOutlined["a" /* default */],{})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Wallet,{color:"#888888",provider:props.localProvider,ensProvider:props.ensProvider,price:props.price,address:faucetAddress})]})})});}
// CONCATENATED MODULE: ./src/components/GasGauge.jsx
// added display of 0 instead of NaN if gas price is not provided
/*
  ~ What it does? ~

  Displays gas gauge

  ~ How can I use? ~

  <GasGauge
    gasPrice={gasPrice}
  />

  ~ Features ~

  - Provide gasPrice={gasPrice} and get current gas gauge
*/function GasGauge(props){return/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{onClick:function onClick(){window.open("https://ethgasstation.info/");},size:"large",shape:"round",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{role:"img","aria-label":"fuelpump",children:"\u26FD\uFE0F"})}),typeof props.gasPrice==="undefined"?0:parseInt(props.gasPrice,10)/Math.pow(10,9),"g"]});}
// EXTERNAL MODULE: ./node_modules/antd/es/page-header/index.js + 17 modules
var page_header = __webpack_require__(2205);

// EXTERNAL MODULE: ./src/header.css
var header = __webpack_require__(672);
var header_default = /*#__PURE__*/__webpack_require__.n(header);

// CONCATENATED MODULE: ./src/components/Header.jsx
// displays a page header
function Header(){return/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{href:"https://arbis.finance",target:"_blank",rel:"noopener noreferrer",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(page_header["a" /* default */],{avatar:{src:"/logoredesign3clearbackground.png"},title:"",subTitle:"We have the yields!",style:header_default.a,className:header_default.a})});}
// CONCATENATED MODULE: ./src/components/Provider.jsx
// import { WalletOutlined } from '@ant-design/icons';
function Provider(props){var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),showMore=_useState2[0],setShowMore=_useState2[1];var _useState3=Object(react["useState"])("processing"),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),status=_useState4[0],setStatus=_useState4[1];var _useState5=Object(react["useState"])(),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),network=_useState6[0],setNetwork=_useState6[1];var _useState7=Object(react["useState"])(),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),signer=_useState8[0],setSigner=_useState8[1];var _useState9=Object(react["useState"])(),_useState10=Object(slicedToArray["a" /* default */])(_useState9,2),address=_useState10[0],setAddress=_useState10[1];var blockNumber=Object(lib["a" /* useBlockNumber */])(props.provider);Object(lib["c" /* usePoller */])(/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var newNetwork,newSigner,newAddress;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(props.provider&&typeof props.provider.getNetwork==="function")){_context.next=26;break;}_context.prev=1;_context.next=4;return props.provider.getNetwork();case 4:newNetwork=_context.sent;setNetwork(newNetwork);if(newNetwork.chainId>0){setStatus("success");}else{setStatus("warning");}_context.next=13;break;case 9:_context.prev=9;_context.t0=_context["catch"](1);console.log(_context.t0);setStatus("processing");case 13:_context.prev=13;_context.next=16;return props.provider.getSigner();case 16:newSigner=_context.sent;setSigner(newSigner);_context.next=20;return newSigner.getAddress();case 20:newAddress=_context.sent;setAddress(newAddress);// eslint-disable-next-line no-empty
_context.next=26;break;case 24:_context.prev=24;_context.t1=_context["catch"](13);case 26:case"end":return _context.stop();}}},_callee,null,[[1,9],[13,24]]);})),1377);if(typeof props.provider==="undefined"||typeof props.provider.getNetwork!=="function"||!network||!network.chainId){return/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{shape:"round",size:"large",onClick:function onClick(){setShowMore(!showMore);},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(badge["a" /* default */],{status:status})," ",props.name]});}var showExtra="";if(showMore){showExtra=/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{style:{padding:3},children:["id:",network?network.chainId:""]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{style:{padding:3},children:["name:",network?network.name:""]})]});}var showWallet="";if(typeof signer!=="undefined"&&address){showWallet=/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{padding:3},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Address,{minimized:true,address:address})})});}return/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{shape:"round",size:"large",onClick:function onClick(){setShowMore(!showMore);},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(badge["a" /* default */],{status:status})," ",props.name," ",showWallet," #",blockNumber," ",showExtra]});}
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DollarCircleOutlined.js + 1 modules
var DollarCircleOutlined = __webpack_require__(2223);

// EXTERNAL MODULE: ./node_modules/@ramp-network/ramp-instant-sdk/dist/ramp-instant-sdk.es5.js
var ramp_instant_sdk_es5 = __webpack_require__(1048);

// CONCATENATED MODULE: ./src/components/Ramp.jsx
// added display of 0 if price={price} is not provided
/*
  ~ What it does? ~

  Displays current ETH price and gives options to buy ETH through Wyre/Ramp/Coinbase
                            or get through Rinkeby/Ropsten/Kovan/Goerli

  ~ How can I use? ~

  <Ramp
    price={price}
    address={address}
  />

  ~ Features ~

  - Ramp opens directly in the application, component uses RampInstantSDK
  - Provide price={price} and current ETH price will be displayed
  - Provide address={address} and your address will be pasted into Wyre/Ramp instantly
*/function Ramp(props){var _useState=Object(react["useState"])("down"),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),modalUp=_useState2[0],setModalUp=_useState2[1];var type="default";var allFaucets=[];var _loop=function _loop(n){if(props.networks[n].chainId!==31337&&props.networks[n].chainId!==1){allFaucets.push(/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{style:{color:props.networks[n].color},type:type,size:"large",shape:"round",onClick:function onClick(){window.open(props.networks[n].faucet);},children:props.networks[n].name})},props.networks[n].chainId));}};for(var n in props.networks){_loop(n);}return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{size:"large",shape:"round",onClick:function onClick(){setModalUp("up");},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(DollarCircleOutlined["a" /* default */],{style:{color:"#52c41a"}})," ",typeof props.price==="undefined"?0:props.price.toFixed(2)]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])(modal["a" /* default */],{title:"Buy ETH",visible:modalUp==="up",onCancel:function onCancel(){setModalUp("down");},footer:[/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{onClick:function onClick(){setModalUp("down");},children:"cancel"},"back")],children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{type:type,size:"large",shape:"round",onClick:function onClick(){window.open("https://pay.sendwyre.com/purchase?destCurrency=ETH&sourceAmount=25&dest="+props.address);},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{paddingRight:15},role:"img",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{role:"img","aria-label":"flag-us",children:"\uD83C\uDDFA\uD83C\uDDF8"})}),"Wyre"]})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("p",{children:[" ",/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{type:type,size:"large",shape:"round",onClick:function onClick(){new ramp_instant_sdk_es5["a" /* RampInstantSDK */]({hostAppName:"scaffold-eth",hostLogoUrl:"https://scaffoldeth.io/scaffold-eth.png",swapAmount:"100000000000000000",// 0.1 ETH in wei  ?
swapAsset:"ETH",userAddress:props.address}).on("*",function(event){return console.log(event);}).show();},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{paddingRight:15},role:"img",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{role:"img","aria-label":"flag-gb",children:"\uD83C\uDDEC\uD83C\uDDE7"})}),"Ramp"]})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{type:type,size:"large",shape:"round",onClick:function onClick(){window.open("https://www.coinbase.com/buy-ethereum");},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{paddingRight:15},role:"img","aria-label":"bank",children:"\uD83C\uDFE6"}),"Coinbase"]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(divider["a" /* default */],{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("h2",{children:"Testnet ETH"}),allFaucets]})]});}
// EXTERNAL MODULE: ./node_modules/antd/es/switch/index.js + 1 modules
var es_switch = __webpack_require__(2215);

// CONCATENATED MODULE: ./src/components/ThemeSwitch.jsx
function ThemeSwitcher(){var theme=window.localStorage.getItem("theme");var _useState=Object(react["useState"])(!(!theme||theme==="light")),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),isDarkMode=_useState2[0],setIsDarkMode=_useState2[1];var _useThemeSwitcher=Object(react_css_theme_switcher_esm["b" /* useThemeSwitcher */])(),switcher=_useThemeSwitcher.switcher,currentTheme=_useThemeSwitcher.currentTheme,status=_useThemeSwitcher.status,themes=_useThemeSwitcher.themes;Object(react["useEffect"])(function(){window.localStorage.setItem("theme",currentTheme);},[currentTheme]);var toggleTheme=function toggleTheme(isChecked){setIsDarkMode(isChecked);switcher({theme:isChecked?themes.dark:themes.light});};// Avoid theme change flicker
// if (status === "loading") {
//   return null;
// }
return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"main fade-in",style:{position:"fixed",right:8,bottom:8},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{padding:8},children:currentTheme==="light"?"☀️":"🌜"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_switch["a" /* default */],{checked:isDarkMode,onChange:toggleTheme})]});}
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownloadOutlined.js + 1 modules
var DownloadOutlined = __webpack_require__(2224);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EditOutlined.js + 1 modules
var EditOutlined = __webpack_require__(1079);

// EXTERNAL MODULE: ./node_modules/antd/es/timeline/index.js + 2 modules
var timeline = __webpack_require__(2213);

// CONCATENATED MODULE: ./src/components/Timeline.jsx
var Timeline_Text=typography["a" /* default */].Text;// displays a timeline for scaffold-eth usage
function TimelineDisplay(props){return/*#__PURE__*/Object(jsx_runtime["jsxs"])(timeline["a" /* default */],{mode:"right",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(timeline["a" /* default */].Item,{dot:"\uD83D\uDCBE",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Timeline_Text,{delete:true,children:["Clone and Install from the"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/austintgriffith/scaffold-eth",children:"github repo"})]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(timeline["a" /* default */].Item,{dot:"\u269B\uFE0F",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Timeline_Text,{delete:true,children:["Start your frontend app with: ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Timeline_Text,{strong:true,children:"yarn start"})]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(timeline["a" /* default */].Item,{dot:"\u26D3",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Timeline_Text,{delete:props.chainIsUp,children:["Start your local blockchain with: ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Timeline_Text,{strong:true,children:"yarn run chain"})," (and refresh)"]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(timeline["a" /* default */].Item,{dot:"\uD83D\uDCDD",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Timeline_Text,{delete:props.hasOwner,children:["Compile and deploy your smart contract: ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Timeline_Text,{strong:true,children:"yarn run deploy"})]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(timeline["a" /* default */].Item,{dot:"\uD83E\uDD21",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Timeline_Text,{delete:props.isNotSmoort,children:["Fix error in ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Timeline_Text,{code:true,children:"SmartContractWallet.sol"})," then: ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Timeline_Text,{strong:true,children:"yarn run deploy"})]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(timeline["a" /* default */].Item,{dot:/*#__PURE__*/Object(jsx_runtime["jsx"])(SendOutlined["a" /* default */],{style:{fontSize:"16px"}}),color:props.hasEther?"green":"blue",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Timeline_Text,{delete:props.hasEther,children:["Send test ether to your"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])(main_default.a,{seed:(props.address?props.address:"").toLowerCase(),size:8,scale:2})," address using (bottom left) faucet"]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(timeline["a" /* default */].Item,{dot:/*#__PURE__*/Object(jsx_runtime["jsx"])(DownloadOutlined["a" /* default */],{style:{fontSize:"16px"}}),color:props.contractHasEther?"green":"blue",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Timeline_Text,{delete:props.contractHasEther,children:["Deposit some funds into your"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])(main_default.a,{seed:(props.contractAddress?props.contractAddress:"").toLowerCase(),size:8,scale:2})," ","smart contract wallet"]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(timeline["a" /* default */].Item,{dot:/*#__PURE__*/Object(jsx_runtime["jsx"])(EditOutlined["a" /* default */],{style:{fontSize:"16px"}}),color:props.amOwnerOfContract?"green":"blue",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Timeline_Text,{delete:props.amOwnerOfContract,children:["Set ",/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:"owner"})," of your"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])(main_default.a,{seed:(props.contractAddress?props.contractAddress:"").toLowerCase(),size:8,scale:2})," ","smart contract wallet to your"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])(main_default.a,{seed:(props.address?props.address:"").toLowerCase(),size:8,scale:2})," address"]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(timeline["a" /* default */].Item,{dot:"\u2622\uFE0F",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Timeline_Text,{children:["Yikes, anyone can take ownership of ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Timeline_Text,{code:true,children:"SmartContractWallet.sol"})]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(timeline["a" /* default */].Item,{dot:"\uD83D\uDD2C",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Timeline_Text,{children:["Test your contract with ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Timeline_Text,{code:true,children:"buidler/test/myTest.js"})," then:",/*#__PURE__*/Object(jsx_runtime["jsx"])(Timeline_Text,{strong:true,children:"yarn run test"})]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(timeline["a" /* default */].Item,{dot:"\uD83D\uDE80",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Timeline_Text,{children:["Build something awesome with \uD83C\uDFD7 ",/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{href:"https://github.com/austintgriffith/scaffold-eth",children:"scaffold-eth"})," and"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/austingriffith",children:"@ me"}),"!"]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(timeline["a" /* default */].Item,{dot:"\uD83D\uDCD6",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Timeline_Text,{children:["Read more about"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ethereum.org/developers",children:"Ethereum"}),","," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{target:"_blank",rel:"noopener noreferrer",href:"https://solidity.readthedocs.io/en/develop/contracts.html",children:"Solidity"}),", and"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{target:"_blank",rel:"noopener noreferrer",href:"https://buidler.dev/tutorial",children:"Buidler"})]})})]});}
// CONCATENATED MODULE: ./src/components/TokenBalance.jsx
function TokenBalance(props){var _useState=Object(react["useState"])(true),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),dollarMode=_useState2[0],setDollarMode=_useState2[1];var tokenContract=props.contracts&&props.contracts[props.name];var balance=Object(lib["d" /* useTokenBalance */])(tokenContract,props.address,1777);var floatBalance=parseFloat("0.00");var usingBalance=balance;if(typeof props.balance!=="undefined"){usingBalance=props.balance;}if(usingBalance){var etherBalance=ethers["utils"].formatEther(usingBalance);parseFloat(etherBalance).toFixed(2);floatBalance=parseFloat(etherBalance);}var displayBalance=floatBalance.toFixed(4);if(props.dollarMultiplier&&dollarMode){displayBalance="$"+(floatBalance*props.dollarMultiplier).toFixed(2);}return/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{style:{verticalAlign:"middle",fontSize:24,padding:8,cursor:"pointer"},onClick:function onClick(){setDollarMode(!dollarMode);},children:[props.img," ",displayBalance]});}
// CONCATENATED MODULE: ./src/components/Hint.jsx
function Hint(props){var hint=props.hint;return/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{style:{color:"gray",fontSize:"small"},children:hint});}
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 8 modules
var es_select = __webpack_require__(2210);

// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 58 modules
var date_picker = __webpack_require__(2201);

// EXTERNAL MODULE: ./node_modules/antd/es/image/index.js + 23 modules
var es_image = __webpack_require__(2203);

// EXTERNAL MODULE: ./node_modules/ipfs-http-client/src/index.js
var src = __webpack_require__(262);

// EXTERNAL MODULE: ./src/contracts/Strategy.abi.js
var Strategy_abi = __webpack_require__(666);
var Strategy_abi_default = /*#__PURE__*/__webpack_require__.n(Strategy_abi);

// EXTERNAL MODULE: ./node_modules/typescript/lib/typescript.js
var typescript = __webpack_require__(2103);

// CONCATENATED MODULE: ./src/components/RelationToNow.jsx
function RelationToNow(props){if(props.raiseStart&&props.raiseEnd){return relationToNow(props.raiseStart,props.raiseEnd);}return"";}
// CONCATENATED MODULE: ./src/components/RaiseTile.jsx
var ipfsClient=Object(src["create"])('https://ipfs.infura.io:5001');var Option=es_select["a" /* default */].Option;var TextArea=es_input["a" /* default */].TextArea;var RangePicker=date_picker["a" /* default */].RangePicker;function RaiseTile(_ref){var raiseID=_ref.raiseID,provider=_ref.provider,factoryInstance=_ref.factoryInstance;var _React$useState=react_default.a.useState(false),_React$useState2=Object(slicedToArray["a" /* default */])(_React$useState,2),loading=_React$useState2[0],setLoading=_React$useState2[1];var _React$useState3=react_default.a.useState(false),_React$useState4=Object(slicedToArray["a" /* default */])(_React$useState3,2),loadedData=_React$useState4[0],setLoadedData=_React$useState4[1];var raiseAddress=useContractReader({RaiseFactoryFacet:factoryInstance},"RaiseFactoryFacet","raises",[BigInt(raiseID)]);console.log("loaded address ".concat(raiseAddress," id ").concat(raiseID));//step 2 create raise instance
var farmInstance=useExternalContractLoader(provider,raiseAddress,Strategy_abi_default.a);//step 3 use instance to get data
var raiseData=useContractReader({Strategy:farmInstance},"Strategy","data",[]);var raiseName=useContractReader({Strategy:farmInstance},"Strategy","name",[]);var raiseSymbol=useContractReader({Strategy:farmInstance},"Strategy","symbol",[]);var raiseEnd=useContractReader({Strategy:farmInstance},"Strategy","endTime",[]);console.log("raise data");console.log(raiseData);function loadRaiseData(){return _loadRaiseData.apply(this,arguments);}function _loadRaiseData(){_loadRaiseData=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var d;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:setLoading(true);_context.prev=1;_context.next=4;return axios_default.a.get(raiseData[2]);case 4:d=_context.sent;console.log("axios got data");console.log(d);setLoadedData(d.data);_context.next=13;break;case 10:_context.prev=10;_context.t0=_context["catch"](1);console.log(_context.t0);case 13:setLoading(false);case 14:case"end":return _context.stop();}}},_callee,null,[[1,10]]);}));return _loadRaiseData.apply(this,arguments);}react_default.a.useEffect(function(){if(raiseData!=undefined&&!loading){loadRaiseData();}},[raiseData]);return/*#__PURE__*/Object(jsx_runtime["jsxs"])(card["a" /* default */],{title:raiseName,style:{width:"300",cursor:"pointer"},onClick:function onClick(){window.location=window.location+"r/"+raiseAddress;},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:"Raise #".concat(raiseID)})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),loading?/*#__PURE__*/Object(jsx_runtime["jsx"])(spin["a" /* default */],{}):/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(es_image["a" /* default */],{width:300,height:300,src:loadedData.image}),/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{children:truncateString(loadedData.description?loadedData.description:"",20)})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("a",{href:"https://etherscan.io/address/".concat(raiseAddress),children:[" ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:truncateString("".concat(raiseAddress),8)})})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("hr",{}),raiseData?/*#__PURE__*/Object(jsx_runtime["jsxs"])("p",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(RelationToNow,{raiseStart:raiseData[4],raiseEnd:raiseEnd})," "]}):/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{})]});}
// CONCATENATED MODULE: ./src/components/index.js

// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__(2197);

// EXTERNAL MODULE: ./node_modules/@ethersproject/units/lib.esm/index.js + 1 modules
var units_lib_esm = __webpack_require__(79);

// EXTERNAL MODULE: ./src/contracts/NyanStrategy.abi.js
var NyanStrategy_abi = __webpack_require__(1050);
var NyanStrategy_abi_default = /*#__PURE__*/__webpack_require__.n(NyanStrategy_abi);

// EXTERNAL MODULE: ./src/contracts/ERC20.abi.js
var ERC20_abi = __webpack_require__(503);
var ERC20_abi_default = /*#__PURE__*/__webpack_require__.n(ERC20_abi);

// EXTERNAL MODULE: ./src/contracts/NyanRewardsContract.abi.js
var NyanRewardsContract_abi = __webpack_require__(667);
var NyanRewardsContract_abi_default = /*#__PURE__*/__webpack_require__.n(NyanRewardsContract_abi);

// CONCATENATED MODULE: ./src/views/FarmUI.jsx
var FarmUI_Header=layout["a" /* default */].Header,Footer=layout["a" /* default */].Footer,Sider=layout["a" /* default */].Sider,Content=layout["a" /* default */].Content;var FarmUI_ipfsClient=Object(src["create"])("https://ipfs.infura.io:5001");var FarmUI_Option=es_select["a" /* default */].Option;var FarmUI_TextArea=es_input["a" /* default */].TextArea;var FarmUI_RangePicker=date_picker["a" /* default */].RangePicker;function FarmUI(props){//props{match.params, provider, userSigner, address, tx}
var provider=props.provider,userSigner=props.userSigner,address=props.address,tx=props.tx,injectedProvider=props.injectedProvider,farmAddress=props.farmAddress,farmName=props.farmName,stakingPoolAddress=props.stakingPoolAddress,specialWarning=props.specialWarning;//const { farmAddress } = useParams();
var farmInstance=useExternalContractLoader(injectedProvider,farmAddress,NyanStrategy_abi_default.a);var tokenAddress=useContractReader({NyanStrategy:farmInstance},"NyanStrategy","getUnderlying",[]);var tokenInstance=useExternalContractLoader(injectedProvider,tokenAddress,ERC20_abi_default.a);var userUnderlyingBalance=useContractReader({ERC20:tokenInstance},"ERC20","balanceOf",[address]);var underlyingName=useContractReader({ERC20:tokenInstance},"ERC20","name",[]);var underlyingSymbol=useContractReader({ERC20:tokenInstance},"ERC20","symbol",[]);var underlyingTotalSupply=useContractReader({ERC20:tokenInstance},"ERC20","totalSupply",[]);var approved=useContractReader({ERC20:tokenInstance},"ERC20","allowance",[address,farmAddress]);var name=useContractReader({NyanStrategy:farmInstance},"NyanStrategy","getName",[]);var symbol=useContractReader({NyanStrategy:farmInstance},"NyanStrategy","symbol",[]);var totalDeposits=useContractReader({NyanStrategy:farmInstance},"NyanStrategy","totalDeposits",[]);var shareBalance=useContractReader({NyanStrategy:farmInstance},"NyanStrategy","balanceOf",[address]);var approvedShares=useContractReader({NyanStrategy:farmInstance},"NyanStrategy","allowance",[address,farmAddress]);var underlyingTokensPerShare=useContractReader({NyanStrategy:farmInstance},"NyanStrategy","getTokensPerShare",[BigInt(1000000000000000000)]);var usersUnderlyingTokensAvailable=useContractReader({NyanStrategy:farmInstance},"NyanStrategy","getTokensPerShare",[shareBalance]);var stakingPoolInstance=useExternalContractLoader(injectedProvider,stakingPoolAddress,NyanRewardsContract_abi_default.a);var rewardRate=useContractReader({NyanRewards:stakingPoolInstance},"NyanRewards","rewardRate");var totalSupply=useContractReader({NyanRewards:stakingPoolInstance},"NyanRewards","totalSupply");var _React$useState=react_default.a.useState(true),_React$useState2=Object(slicedToArray["a" /* default */])(_React$useState,2),loading=_React$useState2[0],setLoading=_React$useState2[1];var _React$useState3=react_default.a.useState(false),_React$useState4=Object(slicedToArray["a" /* default */])(_React$useState3,2),visible=_React$useState4[0],setVisible=_React$useState4[1];var _React$useState5=react_default.a.useState(false),_React$useState6=Object(slicedToArray["a" /* default */])(_React$useState5,2),writeLoading=_React$useState6[0],setWriteLoading=_React$useState6[1];var _React$useState7=react_default.a.useState("0"),_React$useState8=Object(slicedToArray["a" /* default */])(_React$useState7,2),amountToDeposit=_React$useState8[0],setAmountToDeposit=_React$useState8[1];var _React$useState9=react_default.a.useState("0"),_React$useState10=Object(slicedToArray["a" /* default */])(_React$useState9,2),amountToWithdraw=_React$useState10[0],setAmountToWithdraw=_React$useState10[1];react_default.a.useEffect(function(){if(injectedProvider!=undefined&&shareBalance!=undefined&&farmInstance!=undefined){setLoading(false);}},[injectedProvider,shareBalance,farmInstance]);function handleInvest(){return _handleInvest.apply(this,arguments);}function _handleInvest(){_handleInvest=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var data,_data;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:setWriteLoading(true);if(!isApproved()){console.log("approving for token ".concat(tokenAddress," spender ").concat(farmAddress," amount ").concat(underlyingTotalSupply));//do approve tx
data=tokenInstance.interface.encodeFunctionData("approve",[farmAddress,underlyingTotalSupply]);tx(userSigner.sendTransaction({to:tokenAddress,data:data}));setTimeout(function(){setVisible(false);setWriteLoading(false);},2000);}else{console.log("doing stake with approval for ".concat(approved," and amount ").concat(Object(units_lib_esm["d" /* parseEther */])(amountToDeposit)));//do stake tx
_data=farmInstance.interface.encodeFunctionData("deposit",[Object(units_lib_esm["d" /* parseEther */])(amountToDeposit)]);tx(userSigner.sendTransaction({to:farmAddress,data:_data}));setTimeout(function(){setVisible(false);setWriteLoading(false);},2000);}case 2:case"end":return _context.stop();}}},_callee);}));return _handleInvest.apply(this,arguments);}function handleWithdraw(){return _handleWithdraw.apply(this,arguments);}function _handleWithdraw(){_handleWithdraw=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){var data;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:setWriteLoading(true);//console.log(`doing stake with approval for ${approved} and amount ${parseEther(amountToDeposit)}`);
//do stake tx
data=farmInstance.interface.encodeFunctionData("withdraw",[Object(units_lib_esm["d" /* parseEther */])(amountToWithdraw)]);tx(userSigner.sendTransaction({to:farmAddress,data:data}));setTimeout(function(){setVisible(false);setWriteLoading(false);},2000);case 4:case"end":return _context2.stop();}}},_callee2);}));return _handleWithdraw.apply(this,arguments);}function handleCompound(){return _handleCompound.apply(this,arguments);}function _handleCompound(){_handleCompound=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(){var data;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:setWriteLoading(true);//console.log(`doing stake with approval for ${approved} and amount ${parseEther(amountToDeposit)}`);
//do stake tx
data=farmInstance.interface.encodeFunctionData("reinvest",[]);tx(userSigner.sendTransaction({to:farmAddress,data:data}));setTimeout(function(){setVisible(false);setWriteLoading(false);},2000);case 4:case"end":return _context3.stop();}}},_callee3);}));return _handleCompound.apply(this,arguments);}var handleCancel=function handleCancel(){console.log("Clicked cancel button");setVisible(false);};function isApproved(){if(!approved){return false;}if(approved==BigInt("0")){return false;}return true;}function isApprovedForShares(){if(!approvedShares){return false;}if(approvedShares==BigInt("0")){return false;}return true;}/*const [loadedData, setLoadedData] = React.useState(false);
  const [ethToSpend, setEthToSpend] = React.useState("0.1");
  const [toReceive, setToReceive] = React.useState("0");

  console.log(`loaded address ${raiseAddress}`);
  //step 2 create raise instance
  const raiseInstance = useExternalContractLoader(props.provider, raiseAddress, RaiseAbi);
  //step 3 use instance to get data
  const raiseData = useContractReader({ Raise: raiseInstance }, "Raise", "data", []);
  const raiseName = useContractReader({ Raise: raiseInstance }, "Raise", "name", []);
  const raiseSymbol = useContractReader({ Raise: raiseInstance }, "Raise", "symbol", []);
  const raiseEnd = useContractReader({ Raise: raiseInstance }, "Raise", "endTime", []);
  const totalRaised = useContractReader({ Raise: raiseInstance }, "Raise", "totalRaised", []);
  const okToApe = useContractReader({ Raise: raiseInstance }, "Raise", "okToApe", [address]);
  const totalSupply = useContractReader({ Raise: raiseInstance }, "Raise", "totalSupply", []);
  const pricingContractAddress = useContractReader({ Raise: raiseInstance }, "Raise", "pricing", []);

  console.log(`ok to ape ${okToApe}`);

  const pricingInstance = useExternalContractLoader(props.provider, pricingContractAddress, OneToOnePricingAbi);
  let maxRaise;
  console.log(pricingContractAddress);
  if (raiseData) {
    maxRaise = raiseData[1]
    document.title = raiseName;
  }
  console.log(`raise data ${pricingContractAddress} pricing contract address ${totalRaised} totalRaised ${maxRaise} maxRaise`);
  console.log(raiseData);

  async function loadRaiseData() {
    setLoading(true);
    try {

      var d = await axios.get(raiseData[2]);
      console.log(`axios got data`);
      console.log(d);
      setLoadedData(d.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    if (raiseData != undefined && !loading) {
      loadRaiseData();
    }

    if (parseFloat(ethToSpend) && pricingInstance) {
      updateToReceive();
    }
  }, [raiseData, ethToSpend]);

  async function updateToReceive() {
    setToReceive(await pricingInstance.viewNextPrice(parseEther(ethToSpend != "" ? ethToSpend : "0"), totalSupply));
  }


  function isOpen(raiseData, raiseEnd) {
    if (raiseData && raiseEnd) {
      const r = relationToNow(raiseData[4], raiseEnd);
      if (r.includes("Closing in")) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }


  async function handleInvest() {
    setWriteLoading(true);
    const data = raiseInstance.interface.encodeFunctionData("apeIn", []);

    //replace with
    //  pricingStrategy address 
    tx(

      userSigner.sendTransaction({
        to: raiseAddress,
        data: data,
        value: parseEther(ethToSpend),
      }),
    );
    setTimeout(() => {
      setVisible(false);
      setWriteLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };


  const backgroundColor = "lightgrey"
  const color = "black"; */function showSymbol(){return" $"+(underlyingSymbol?underlyingSymbol:"");}function showShareSymbol(){return" $"+(symbol?symbol:"");}var SECONDS_PER_YEAR=365.25*24*60*60;//const BLOCKS_IN_A_YEAR = SECONDS_PER_YEAR / 14;
/* `rewardRate` is the reward emitted per sec */var apr=function apr(){return 100*parseFloat(Object(units_lib_esm["b" /* formatEther */])(rewardRate))*SECONDS_PER_YEAR/parseFloat(Object(units_lib_esm["b" /* formatEther */])(totalSupply));};/* https://gist.github.com/sterlu/4b44f59ea665819974ae684d7f564d9b */var aprToApy=function aprToApy(interest){var frequency=arguments.length>1&&arguments[1]!==undefined?arguments[1]:12;return(Math.pow(1+interest/100/frequency,frequency)-1)*100;};return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:loading?/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(spin["a" /* default */],{size:"large",style:{color:"#d8121b"}}),injectedProvider==undefined?/*#__PURE__*/Object(jsx_runtime["jsx"])("h4",{children:"Connect your wallet on the Arbitrum Network"}):""]}):/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(layout["a" /* default */],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Content,{style:{minWidth:"15em",width:"30em",maxWidth:"30em",margin:"auto",padding:"0px",paddingTop:"5%",border:"1px solid black"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("h1",{children:farmName}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("a",{href:"https://arbiscan.io/address/".concat(farmAddress),target:"_blank",rel:"noopener noreferrer",children:[" ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:truncateString("".concat(farmAddress),8)})})]}),specialWarning?/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{className:"special-warning",children:specialWarning}):"",rewardRate&&totalSupply&&/*#__PURE__*/Object(jsx_runtime["jsxs"])("h2",{children:["APY: ",numberWithCommas(aprToApy(apr()).toFixed(0)),"%"]}),"Stake your ",showSymbol()," for $",name?name:""," in Arbi to let them compound automatically!",/*#__PURE__*/Object(jsx_runtime["jsx"])("hr",{}),"TVL: ",parseFloat(Object(units_lib_esm["b" /* formatEther */])(totalDeposits?totalDeposits:"0")).toFixed(3)," ",showSymbol(),/*#__PURE__*/Object(jsx_runtime["jsxs"])("p",{children:["1 ",showShareSymbol()," : ",parseFloat(Object(units_lib_esm["b" /* formatEther */])(underlyingTokensPerShare?underlyingTokensPerShare:"0")).toFixed(3)," ",showSymbol()]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{border:"1px solid black",margin:"5px",padding:"5px"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("h3",{children:"Deposit"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:["MAX:"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{color:"skyblue",cursor:"pointer"},onClick:function onClick(){setAmountToDeposit(Object(units_lib_esm["b" /* formatEther */])(userUnderlyingBalance?userUnderlyingBalance:"0"));},children:Object(units_lib_esm["b" /* formatEther */])(userUnderlyingBalance?userUnderlyingBalance:"0")}),showSymbol()]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_input["a" /* default */],{style:{width:"90%"},value:amountToDeposit,onChange:function onChange(e){return setAmountToDeposit(e.target.value);}}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{style:{margin:"3px",padding:"0px 10px"},onClick:function onClick(){return handleInvest();},children:isApproved()?"Stake":"Approve"})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{border:"1px solid black",margin:"5px",padding:"5px"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("h3",{children:"Withdraw"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:["MAX:"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{color:"skyblue",cursor:"pointer"},onClick:function onClick(){setAmountToWithdraw(Object(units_lib_esm["b" /* formatEther */])(shareBalance?shareBalance:"0"));},children:Object(units_lib_esm["b" /* formatEther */])(shareBalance?shareBalance:"0")}),showShareSymbol()]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_input["a" /* default */],{style:{width:"90%"},value:amountToWithdraw,onChange:function onChange(e){return setAmountToWithdraw(e.target.value);}}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{style:{margin:"3px",padding:"0px 10px"},onClick:function onClick(){return handleWithdraw();},children:isApproved()?"Withdraw":"Approve"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:["Get Back:"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{fontWeight:"bold"},children:Object(units_lib_esm["b" /* formatEther */])(usersUnderlyingTokensAvailable?usersUnderlyingTokensAvailable:"0")}),showSymbol()]})})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{border:"1px solid black",margin:"5px",padding:"5px"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("h3",{children:"Compound"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:"Compound the pools rewards so everyone keeps earning and get a 0.5% fee for your work!\uD83D\uDC69\u200D\uD83C\uDF3E"})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{onClick:function onClick(){return handleCompound();},children:"Compound"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:"If the transaction is expensive or says it will fail, dont do it. That means the pool has already compounded recently"})})]})]})})})});}
// CONCATENATED MODULE: ./src/views/Hints.jsx
var Hints_Option=es_select["a" /* default */].Option;function Hints(_ref){var yourLocalBalance=_ref.yourLocalBalance,mainnetProvider=_ref.mainnetProvider,price=_ref.price,address=_ref.address;// Get a list of tokens from a tokenlist -> see tokenlists.org!
var _useState=Object(react["useState"])("Pick a token!"),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),selectedToken=_useState2[0],setSelectedToken=_useState2[1];var listOfTokens=TokenList("https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json");return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{margin:32},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},children:"\uD83D\uDC77"}),"Edit your ",/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:"contract"})," in",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"packages/hardhat/contracts"})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{margin:32},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},children:"\uD83D\uDEF0"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:"compile/deploy"})," with",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f1f1f1", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"yarn run deploy"})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{margin:32},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},children:"\uD83D\uDE80"}),"Your ",/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:"contract artifacts"})," are automatically injected into your frontend at",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"packages/react-app/src/contracts/"})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{margin:32},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},children:"\uD83C\uDF9B"}),"Edit your ",/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:"frontend"})," in",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"packages/reactapp/src/App.js"})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{marginTop:32},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},children:"\uD83D\uDD2D"}),"explore the",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,marginRight:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"\uD83D\uDD87 hooks"}),"and",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"\uD83D\uDCE6 components"})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{marginTop:32},children:["for example, the",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{margin:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"useBalance()"})," ","hook keeps track of your balance: ",/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:ethers["utils"].formatEther(yourLocalBalance||0)})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{margin:8},children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:"useTokenList()"})," can get you an array of tokens from"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{href:"https://tokenlists.org",target:"_blank",rel:"noopener noreferrer",children:"tokenlists.org!"})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_select["a" /* default */],{showSearch:true,value:selectedToken,onChange:function onChange(value){console.log("selected ".concat(value));setSelectedToken(value);},filterOption:function filterOption(input,option){return option.children.toLowerCase().indexOf(input.toLowerCase())>=0;},optionFilterProp:"children",children:listOfTokens.map(function(token){return/*#__PURE__*/Object(jsx_runtime["jsx"])(Hints_Option,{value:token.symbol,children:token.symbol},token.symbol);})})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{marginTop:32},children:["as you build your app you'll need web3 specific components like an",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{margin:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"<AddressInput/>"}),"component:",/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{width:350,padding:16,margin:"auto"},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(AddressInput,{ensProvider:mainnetProvider})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:"(try putting in your address, an ens address, or scanning a QR code)"})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{marginTop:32},children:["this balance could be multiplied by",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{margin:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"price"})," ","that is loaded with the",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{margin:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"usePrice"})," ","hook with the current value: ",/*#__PURE__*/Object(jsx_runtime["jsxs"])("b",{children:["$",price]})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{marginTop:32},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},children:"\uD83D\uDCA7"}),"use the ",/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:"faucet"})," to send funds to",/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Address,{address:address,minimized:true})," ",address]})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{marginTop:32},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},children:"\uD83D\uDCE1"}),"deploy to a testnet or mainnet by editing",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"packages/hardhat/hardhat.config.js"}),"and running",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f1f1f1", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"yarn run deploy"})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{marginTop:32},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},children:"\uD83D\uDD11"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f1f1f1", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"yarn run generate"}),"will create a deployer account in",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"packages/hardhat"}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{marginTop:8},children:["(use"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f1f1f1", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"yarn run account"})," ","to display deployer address and balance)"]})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{marginTop:32},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},children:"\u2699\uFE0F"}),"build your app with",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f1f1f1", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"yarn run build"})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{marginTop:32},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},children:"\uD83D\uDEA2"}),"ship it!",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f1f1f1", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"yarn run surge"}),"or",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f1f1f1", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"yarn run s3"}),"or",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f1f1f1", */padding:4,borderRadius:4,fontWeight:"bolder"},children:"yarn run ipfs"})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{marginTop:32},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},children:"\uD83D\uDCAC"}),"for support, join this",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:"highlight",style:{marginLeft:4,/* backgroundColor: "#f9f9f9", */padding:4,borderRadius:4,fontWeight:"bolder"},children:/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{target:"_blank",rel:"noopener noreferrer",href:"https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA",children:"Telegram Chat"})})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{padding:128},children:"\uD83D\uDEE0 Check out your browser's developer console for more... (inspect console) \uD83D\uDE80"})]});}
// EXTERNAL MODULE: ./src/contracts/FarmList.address.js
var FarmList_address = __webpack_require__(1051);
var FarmList_address_default = /*#__PURE__*/__webpack_require__.n(FarmList_address);

// EXTERNAL MODULE: ./src/contracts/FarmList.abi.js
var FarmList_abi = __webpack_require__(1052);
var FarmList_abi_default = /*#__PURE__*/__webpack_require__.n(FarmList_abi);

// EXTERNAL MODULE: ./src/contracts/NyanStrategy.address.js
var NyanStrategy_address = __webpack_require__(1053);
var NyanStrategy_address_default = /*#__PURE__*/__webpack_require__.n(NyanStrategy_address);

// EXTERNAL MODULE: ./src/contracts/NyanETHStrategy.address.js
var NyanETHStrategy_address = __webpack_require__(1054);
var NyanETHStrategy_address_default = /*#__PURE__*/__webpack_require__.n(NyanETHStrategy_address);

// EXTERNAL MODULE: ./src/contracts/NyanETHStrategy.abi.js
var NyanETHStrategy_abi = __webpack_require__(1055);
var NyanETHStrategy_abi_default = /*#__PURE__*/__webpack_require__.n(NyanETHStrategy_abi);

// CONCATENATED MODULE: ./src/views/FarmNYANETHUI.jsx
var FarmNYANETHUI_Header=layout["a" /* default */].Header,FarmNYANETHUI_Footer=layout["a" /* default */].Footer,FarmNYANETHUI_Sider=layout["a" /* default */].Sider,FarmNYANETHUI_Content=layout["a" /* default */].Content;var FarmNYANETHUI_ipfsClient=Object(src["create"])("https://ipfs.infura.io:5001");var FarmNYANETHUI_Option=es_select["a" /* default */].Option;var FarmNYANETHUI_TextArea=es_input["a" /* default */].TextArea;var FarmNYANETHUI_RangePicker=date_picker["a" /* default */].RangePicker;function FarmNYANETHUI(props){//props{match.params, provider, userSigner, address, tx}
var provider=props.provider,userSigner=props.userSigner,address=props.address,tx=props.tx,injectedProvider=props.injectedProvider,farmAddress=props.farmAddress,farmName=props.farmName,specialWarning=props.specialWarning;//const { farmAddress } = useParams();
var farmInstance=useExternalContractLoader(injectedProvider,farmAddress,NyanETHStrategy_abi_default.a);var tokenAddress=useContractReader({NYANETHStrategy:farmInstance},"NYANETHStrategy","depositToken",[]);///nyan specific code that wont work for other farms yet
//const stakingContractAddress = useContractReader({ NyanStrategy: farmInstance }, "NyanStrategy", "stakingContract", []);
//const stakingContactInstance = useExternalContractLoader(injectedProvider, stakingContractAddress, NyanRewardsContractAbi);
//const totalAvailableToCompound = useContractReader({ NyanRewards: stakingContactInstance }, "NyanRewards", "userRewards", [farmAddress]);
//const compoundingReward = totalAvailableToCompound ? BigNumber.from(totalAvailableToCompound).div(200): 0;
//console.log(`totalAvailableToCompound ${totalAvailableToCompound} compounding reward ${compoundingReward}`);
///end of specific code that wont work for other farms yet
var tokenInstance=useExternalContractLoader(injectedProvider,tokenAddress,ERC20_abi_default.a);var userUnderlyingBalance=useContractReader({ERC20:tokenInstance},"ERC20","balanceOf",[address]);var underlyingName=useContractReader({ERC20:tokenInstance},"ERC20","name",[]);var underlyingSymbol=useContractReader({ERC20:tokenInstance},"ERC20","symbol",[]);var underlyingTotalSupply=useContractReader({ERC20:tokenInstance},"ERC20","totalSupply",[]);var approved=useContractReader({ERC20:tokenInstance},"ERC20","allowance",[address,farmAddress]);var name=useContractReader({NYANETHStrategy:farmInstance},"NYANETHStrategy","name",[]);var symbol=useContractReader({NYANETHStrategy:farmInstance},"NYANETHStrategy","symbol",[]);var totalDeposits=useContractReader({NYANETHStrategy:farmInstance},"NYANETHStrategy","totalDeposits",[]);var shareBalance=useContractReader({NYANETHStrategy:farmInstance},"NYANETHStrategy","balanceOf",[address]);var approvedShares=useContractReader({NYANETHStrategy:farmInstance},"NYANETHStrategy","allowance",[address,farmAddress]);var underlyingTokensPerShare=useContractReader({NYANETHStrategy:farmInstance},"NYANETHStrategy","getDepositTokensForShares",[BigInt(1000000000000000000)]);var usersUnderlyingTokensAvailable=useContractReader({NYANETHStrategy:farmInstance},"NYANETHStrategy","getDepositTokensForShares",[shareBalance]);//console.log(`underlying per share ${underlyingTokensPerShare}`);
var _React$useState=react_default.a.useState(true),_React$useState2=Object(slicedToArray["a" /* default */])(_React$useState,2),loading=_React$useState2[0],setLoading=_React$useState2[1];var _React$useState3=react_default.a.useState(false),_React$useState4=Object(slicedToArray["a" /* default */])(_React$useState3,2),visible=_React$useState4[0],setVisible=_React$useState4[1];var _React$useState5=react_default.a.useState(false),_React$useState6=Object(slicedToArray["a" /* default */])(_React$useState5,2),writeLoading=_React$useState6[0],setWriteLoading=_React$useState6[1];var _React$useState7=react_default.a.useState("0"),_React$useState8=Object(slicedToArray["a" /* default */])(_React$useState7,2),amountToDeposit=_React$useState8[0],setAmountToDeposit=_React$useState8[1];var _React$useState9=react_default.a.useState("0"),_React$useState10=Object(slicedToArray["a" /* default */])(_React$useState9,2),amountToWithdraw=_React$useState10[0],setAmountToWithdraw=_React$useState10[1];react_default.a.useEffect(function(){if(injectedProvider!=undefined){setLoading(false);}},[injectedProvider]);function handleInvest(){return _handleInvest.apply(this,arguments);}function _handleInvest(){_handleInvest=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var data,_data;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:setWriteLoading(true);if(!isApproved()){console.log("approving for token ".concat(tokenAddress," spender ").concat(farmAddress," amount ").concat(underlyingTotalSupply));//do approve tx
data=tokenInstance.interface.encodeFunctionData("approve",[farmAddress,underlyingTotalSupply]);tx(userSigner.sendTransaction({to:tokenAddress,data:data}));setTimeout(function(){setVisible(false);setWriteLoading(false);},2000);}else{console.log("doing stake with approval for ".concat(approved," and amount ").concat(Object(units_lib_esm["d" /* parseEther */])(amountToDeposit)));//do stake tx
_data=farmInstance.interface.encodeFunctionData("deposit",[Object(units_lib_esm["d" /* parseEther */])(amountToDeposit)]);tx(userSigner.sendTransaction({to:farmAddress,data:_data}));setTimeout(function(){setVisible(false);setWriteLoading(false);},2000);}case 2:case"end":return _context.stop();}}},_callee);}));return _handleInvest.apply(this,arguments);}function handleWithdraw(){return _handleWithdraw.apply(this,arguments);}function _handleWithdraw(){_handleWithdraw=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){var data;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:setWriteLoading(true);//console.log(`doing stake with approval for ${approved} and amount ${parseEther(amountToDeposit)}`);
//do stake tx
data=farmInstance.interface.encodeFunctionData("withdraw",[Object(units_lib_esm["d" /* parseEther */])(amountToWithdraw)]);tx(userSigner.sendTransaction({to:farmAddress,data:data}));setTimeout(function(){setVisible(false);setWriteLoading(false);},2000);case 4:case"end":return _context2.stop();}}},_callee2);}));return _handleWithdraw.apply(this,arguments);}function handleCompound(){return _handleCompound.apply(this,arguments);}function _handleCompound(){_handleCompound=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(){var data;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:setWriteLoading(true);//console.log(`doing stake with approval for ${approved} and amount ${parseEther(amountToDeposit)}`);
//do stake tx
data=farmInstance.interface.encodeFunctionData("reinvest",[]);tx(userSigner.sendTransaction({to:farmAddress,data:data}));setTimeout(function(){setVisible(false);setWriteLoading(false);},2000);case 4:case"end":return _context3.stop();}}},_callee3);}));return _handleCompound.apply(this,arguments);}var handleCancel=function handleCancel(){console.log("Clicked cancel button");setVisible(false);};function isApproved(){if(!approved){return false;}if(approved==BigInt("0")){return false;}return true;}function isApprovedForShares(){if(!approvedShares){return false;}if(approvedShares==BigInt("0")){return false;}return true;}function showSymbol(){return" $"+(underlyingSymbol?underlyingSymbol:"");}function showShareSymbol(){return" $"+(symbol?symbol:"");}return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:loading?/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(spin["a" /* default */],{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("h4",{children:"Connect your wallet on the Arbitrum"})]}):/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(layout["a" /* default */],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(FarmNYANETHUI_Content,{style:{minWidth:"15em",width:"30em",maxWidth:"30em",margin:"auto",padding:"0px",border:"1px solid black"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("h1",{children:farmName}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("a",{href:"https://arbiscan.io/address/".concat(farmAddress),target:"_blank",rel:"noopener noreferrer",children:[" ",/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:truncateString("".concat(farmAddress),8)})})]}),specialWarning?/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{className:"special-warning",children:specialWarning}):"","Stake your NYAN/ETH  $SLP Tokens for ",showShareSymbol()?showShareSymbol():""," in Arbi to let them compound automatically!",/*#__PURE__*/Object(jsx_runtime["jsx"])("hr",{}),"TVL: ",parseFloat(Object(units_lib_esm["b" /* formatEther */])(totalDeposits?totalDeposits:"0")).toFixed(3)," ",showSymbol(),/*#__PURE__*/Object(jsx_runtime["jsxs"])("p",{children:["1 ",showShareSymbol()," : ",parseFloat(Object(units_lib_esm["b" /* formatEther */])(underlyingTokensPerShare?underlyingTokensPerShare:"0")).toFixed(3)," ",showSymbol()]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{border:"1px solid black",margin:"5px",padding:"5px"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("h3",{children:"Deposit"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:["MAX:"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{color:"skyblue",cursor:"pointer"},onClick:function onClick(){setAmountToDeposit(Object(units_lib_esm["b" /* formatEther */])(userUnderlyingBalance?userUnderlyingBalance:"0"));},children:Object(units_lib_esm["b" /* formatEther */])(userUnderlyingBalance?userUnderlyingBalance:"0")}),showSymbol()]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_input["a" /* default */],{style:{width:"90%"},value:amountToDeposit,onChange:function onChange(e){return setAmountToDeposit(e.target.value);}}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{style:{margin:"3px",padding:"0px 10px"},onClick:function onClick(){return handleInvest();},children:isApproved()?"Stake":"Approve"})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{border:"1px solid black",margin:"5px",padding:"5px"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("h3",{children:"Withdraw"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:["MAX:"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{color:"skyblue",cursor:"pointer"},onClick:function onClick(){setAmountToWithdraw(Object(units_lib_esm["b" /* formatEther */])(shareBalance?shareBalance:"0"));},children:Object(units_lib_esm["b" /* formatEther */])(shareBalance?shareBalance:"0")}),showShareSymbol()]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_input["a" /* default */],{style:{width:"90%"},value:amountToWithdraw,onChange:function onChange(e){return setAmountToWithdraw(e.target.value);}}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{style:{margin:"3px",padding:"0px 10px"},onClick:function onClick(){return handleWithdraw();},children:isApproved()?"Withdraw":"Approve"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:["Get Back:"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{fontWeight:"bold"},children:Object(units_lib_esm["b" /* formatEther */])(usersUnderlyingTokensAvailable?usersUnderlyingTokensAvailable:"0")}),showSymbol()]})})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{border:"1px solid black",margin:"5px",padding:"5px"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("h3",{children:"Compound"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:"Compound the pools rewards so everyone keeps earning and get a 0.5% fee for your work!\uD83D\uDC69\u200D\uD83C\uDF3E"})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{onClick:function onClick(){return handleCompound();},children:"Compound"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Hint,{hint:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:"If the transaction is expensive or says it will fail, dont do it. That means the pool has already compounded recently"})})]})]})})})});}
// EXTERNAL MODULE: ./src/contracts/CarbonStrategy.address.js
var CarbonStrategy_address = __webpack_require__(1056);
var CarbonStrategy_address_default = /*#__PURE__*/__webpack_require__.n(CarbonStrategy_address);

// EXTERNAL MODULE: ./src/contracts/PongStrategy.address.js
var PongStrategy_address = __webpack_require__(1057);
var PongStrategy_address_default = /*#__PURE__*/__webpack_require__.n(PongStrategy_address);

// EXTERNAL MODULE: ./src/contracts/NyanStakingPool.address.js
var NyanStakingPool_address = __webpack_require__(1058);
var NyanStakingPool_address_default = /*#__PURE__*/__webpack_require__.n(NyanStakingPool_address);

// EXTERNAL MODULE: ./src/contracts/NyanETHStakingPool.address.js
var NyanETHStakingPool_address = __webpack_require__(1059);
var NyanETHStakingPool_address_default = /*#__PURE__*/__webpack_require__.n(NyanETHStakingPool_address);

// EXTERNAL MODULE: ./src/contracts/CarbonStakingPool.address.js
var CarbonStakingPool_address = __webpack_require__(1060);
var CarbonStakingPool_address_default = /*#__PURE__*/__webpack_require__.n(CarbonStakingPool_address);

// EXTERNAL MODULE: ./src/contracts/PongStakingPool.address.js
var PongStakingPool_address = __webpack_require__(673);
var PongStakingPool_address_default = /*#__PURE__*/__webpack_require__.n(PongStakingPool_address);

// EXTERNAL MODULE: ./src/contracts/PonzuStakingPool.address.js
var PonzuStakingPool_address = __webpack_require__(2110);

// EXTERNAL MODULE: ./src/contracts/PonzuStrategy.address.js
var PonzuStrategy_address = __webpack_require__(1061);
var PonzuStrategy_address_default = /*#__PURE__*/__webpack_require__.n(PonzuStrategy_address);

// EXTERNAL MODULE: ./src/contracts/ApeStrategy.address.js
var ApeStrategy_address = __webpack_require__(1062);
var ApeStrategy_address_default = /*#__PURE__*/__webpack_require__.n(ApeStrategy_address);

// EXTERNAL MODULE: ./src/contracts/ApeStakingPool.address.js
var ApeStakingPool_address = __webpack_require__(1063);
var ApeStakingPool_address_default = /*#__PURE__*/__webpack_require__.n(ApeStakingPool_address);

// CONCATENATED MODULE: ./src/views/HomeUI.jsx
var HomeUI_ipfsClient=Object(src["create"])("https://ipfs.infura.io:5001");var HomeUI_Option=es_select["a" /* default */].Option;var HomeUI_TextArea=es_input["a" /* default */].TextArea;var HomeUI_RangePicker=date_picker["a" /* default */].RangePicker;function Required(){return/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{color:"red"},children:"*"});}var farms=["NYANSTRATEGY","NYANETHSTRATEGY","CARBONSTRATEGY","PONGSTRATEGY","PONZUSTRATEGY","APESTRATEGY"];var stakingPoolAddresses=[NyanStakingPool_address_default.a,NyanETHStakingPool_address_default.a,CarbonStakingPool_address_default.a,PongStakingPool_address_default.a,PongStakingPool_address_default.a,ApeStakingPool_address_default.a];function CreateUI(_ref){var setPurposeEvents=_ref.setPurposeEvents,address=_ref.address,mainnetProvider=_ref.mainnetProvider,userSigner=_ref.userSigner,localProvider=_ref.localProvider,yourLocalBalance=_ref.yourLocalBalance,price=_ref.price,tx=_ref.tx,writeContracts=_ref.writeContracts,injectedProvider=_ref.injectedProvider;var _useState=Object(react["useState"])(true),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),loading=_useState2[0],setLoading=_useState2[1];var _useState3=Object(react["useState"])("NYANSTRATEGY"),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),currentFarm=_useState4[0],setCurrentFarm=_useState4[1];var inUseProvider=injectedProvider;var instance=useExternalContractLoader(inUseProvider,FarmList_address_default.a,FarmList_abi_default.a);var farm0=useContractReader({FarmList:instance},"FarmList","farms",[BigInt(0)]);var raiseCount=0;function showFarms(){var cur=raiseCount-1;if(raiseCount>3){cur=raiseCount+3-raiseCount;}var raises=[];console.log("loading raises ".concat(cur));while(cur>=0){raises.push(/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:farm0})/* {<RaiseTile
                provider={inUseProvider}
                raiseID={cur}
                factoryInstance={instance}
                key={cur}
                /> }*/);cur=cur-1;}return raises.map(function(i){return i;});}react_default.a.useEffect(function(){if(injectedProvider!=undefined){setLoading(false);}},[injectedProvider]);function showFarm(){switch(currentFarm){case farms[0]:return/*#__PURE__*/Object(jsx_runtime["jsx"])(FarmUI,{address:address,userSigner:userSigner,provider:localProvider,injectedProvider:injectedProvider,tx:tx,farmAddress:NyanStrategy_address_default.a,farmName:"Nyan Strategy",stakingPoolAddress:stakingPoolAddresses[0],specialWarning:"♥️ This is Arbi's favorite of the farms we've made so far, the true OGs ❤️"});case farms[1]:return/*#__PURE__*/Object(jsx_runtime["jsx"])(FarmNYANETHUI,{address:address,userSigner:userSigner,provider:localProvider,injectedProvider:injectedProvider,tx:tx,farmAddress:NyanETHStrategy_address_default.a,farmName:"Nyan-ETH Strategy",stakingPoolAddress:stakingPoolAddresses[1]});case farms[2]:return/*#__PURE__*/Object(jsx_runtime["jsx"])(FarmUI,{address:address,userSigner:userSigner,provider:localProvider,injectedProvider:injectedProvider,tx:tx,farmAddress:CarbonStrategy_address_default.a,farmName:"Carbon Strategy",stakingPoolAddress:stakingPoolAddresses[2]});case farms[3]:return/*#__PURE__*/Object(jsx_runtime["jsx"])(FarmUI,{address:address,userSigner:userSigner,provider:localProvider,injectedProvider:injectedProvider,tx:tx,farmAddress:PongStrategy_address_default.a,farmName:"Pong Strategy",stakingPoolAddress:stakingPoolAddresses[3],specialWarning:"🛑Alert: it has come to our attention the dev has pulled liquidity for this project. Exercise EXTREME CAUTION🛑"});case farms[4]:return/*#__PURE__*/Object(jsx_runtime["jsx"])(FarmUI,{address:address,userSigner:userSigner,provider:localProvider,injectedProvider:injectedProvider,tx:tx,farmAddress:PonzuStrategy_address_default.a,farmName:"Ponzu Strategy",stakingPoolAddress:stakingPoolAddresses[4]});case farms[5]:return/*#__PURE__*/Object(jsx_runtime["jsx"])(FarmUI,{address:address,userSigner:userSigner,provider:localProvider,injectedProvider:injectedProvider,tx:tx,farmAddress:ApeStrategy_address_default.a,farmName:"ArbiApe Strategy",stakingPoolAddress:stakingPoolAddresses[5],specialWarning:"🛑Alert: it has come to our attention the dev has pulled liquidity for this project. Exercise EXTREME CAUTION🛑"});default:return/*#__PURE__*/Object(jsx_runtime["jsxs"])("p",{children:["Interface resetting",/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsx"])(spin["a" /* default */],{style:{color:"#d8121b"}})]});}}function setFarm(farm){setCurrentFarm("RESET");setTimeout(function(){setCurrentFarm(farm);},100);}return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"select-farms",children:loading?/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(spin["a" /* default */],{style:{color:"#d8121b"}}),/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("h4",{children:"Connect wallet to use this app"})]}):/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{className:"select-title",children:"Select Farm:"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{onClick:function onClick(){return setFarm(farms[0]);},children:farms[0]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{onClick:function onClick(){return setFarm(farms[1]);},children:farms[1]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{onClick:function onClick(){return setFarm(farms[2]);},children:farms[2]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{className:"select-title",children:"Legacy Farms:"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{onClick:function onClick(){return setFarm(farms[3]);},children:farms[3]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{onClick:function onClick(){return setFarm(farms[4]);},children:farms[4]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{onClick:function onClick(){return setFarm(farms[5]);},children:farms[5]})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{className:"warning",children:"Warning: high risk of extreme volatility of underlying assets and smart contracts. All contracts have not been formally audited."}),showFarm()]})/*  <Space direction="horizontal">
           <Card
             title={"NyanStrategy"}
             style={{ width: "300", cursor: "pointer" }}
             onClick={() => {
               window.location = window.location + "f/" + NyanStrategyAddress;
             }}
           >
             <Hint hint={<span>{`Farm #1`}</span>} />
             <br />
               <div>
                 <Image width={300} height={300} src={"https://i.imgur.com/rc5GSam.png"} />
                 <br />
                 <p>{truncateString("First fair launch token on Arbitrum", 20)}</p>
               </div>
             <br />
             <a href={`https://arbiscan.io/address/${NyanStrategyAddress}`}>
               {" "}
               <Hint hint={<span>{truncateString(`${NyanStrategyAddress}`, 8)}</span>} />
             </a>
             <hr />
             <b>
               APY: <i>Coming Soon</i>
             </b>
           </Card>
           {/* 
             {showFarms()} *}
         </Space> */});}
// CONCATENATED MODULE: ./src/views/index.js

// EXTERNAL MODULE: ./node_modules/@portis/web3/umd/index.js
var umd = __webpack_require__(1064);
var umd_default = /*#__PURE__*/__webpack_require__.n(umd);

// EXTERNAL MODULE: ./node_modules/fortmatic/dist/cjs/fortmatic.js
var fortmatic = __webpack_require__(1065);
var fortmatic_default = /*#__PURE__*/__webpack_require__.n(fortmatic);

// EXTERNAL MODULE: ./node_modules/authereum/dist/index.js
var authereum_dist = __webpack_require__(1066);
var authereum_dist_default = /*#__PURE__*/__webpack_require__.n(authereum_dist);

// CONCATENATED MODULE: ./src/App.jsx
//import Torus from "@toruslabs/torus-embed"
// import Hints from "./Hints";
var App_require=__webpack_require__(108),App_ethers=App_require.ethers;/*
    Welcome to 🏗 scaffold-eth !

    Code:
    https://github.com/austintgriffith/scaffold-eth

    Support:
    https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA
    or DM @austingriffith on twitter or telegram

    You should get your own Infura.io ID and put it in `constants.js`
    (this is your connection to the main Ethereum network for ENS etc.)


    🌏 EXTERNAL CONTRACTS:
    You can also bring in contract artifacts in `constants.js`
    (and then use the `useExternalContractLoader()` hook!)
*/ /// 📡 What chain are your contracts deployed to?
var App_targetNetwork=NETWORKS.arbitrum;// <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)
// 😬 Sorry for all the console logging
var App_DEBUG=true;var NETWORKCHECK=true;// 🛰 providers
if(App_DEBUG)console.log("📡 Connecting to Mainnet Ethereum");// const mainnetProvider = getDefaultProvider("mainnet", { infura: INFURA_ID, etherscan: ETHERSCAN_KEY, quorum: 1 });
// const mainnetProvider = new InfuraProvider("mainnet",INFURA_ID);
//
// attempt to connect to our own scaffold eth rpc and if that fails fall back to infura...
// Using StaticJsonRpcProvider as the chainId won't change see https://github.com/ethers-io/ethers.js/issues/901
var scaffoldEthProvider=navigator.onLine?new App_ethers.providers.StaticJsonRpcProvider("https://rpc.scaffoldeth.io:48544"):null;var poktMainnetProvider=navigator.onLine?new App_ethers.providers.StaticJsonRpcProvider("https://eth-mainnet.gateway.pokt.network/v1/lb/611156b4a585a20035148406"):null;var mainnetInfura=navigator.onLine?new App_ethers.providers.StaticJsonRpcProvider("https://mainnet.infura.io/v3/"+INFURA_ID):null;// ( ⚠️ Getting "failed to meet quorum" errors? Check your INFURA_I )
// 🏠 Your local provider is usually pointed at your local blockchain
var localProviderUrl=App_targetNetwork.rpcUrl;// as you deploy to other networks you can set REACT_APP_PROVIDER=https://dai.poa.network in packages/react-app/.env
var localProviderUrlFromEnv=Object({"NODE_ENV":"production","PUBLIC_URL":".","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).REACT_APP_PROVIDER?Object({"NODE_ENV":"production","PUBLIC_URL":".","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).REACT_APP_PROVIDER:localProviderUrl;if(App_DEBUG)console.log("🏠 Connecting to provider:",localProviderUrlFromEnv);var App_localProvider=new App_ethers.providers.StaticJsonRpcProvider(localProviderUrlFromEnv);// 🔭 block explorer URL
var App_blockExplorer=App_targetNetwork.blockExplorer;// Coinbase walletLink init
var walletLink=new dist_default.a({appName:'coinbase'});// WalletLink provider
var walletLinkProvider=walletLink.makeWeb3Provider("https://mainnet.infura.io/v3/".concat(INFURA_ID),1);// Portis ID: 6255fb2b-58c8-433b-a2c9-62098c05ddc9
/*
  Web3 modal helps us "connect" external wallets:
*/var App_web3Modal=new web3modal_dist_default.a({network:"mainnet",// Optional. If using WalletConnect on xDai, change network to "xdai" and add RPC info below for xDai chain.
cacheProvider:true,// optional
theme:"light",// optional. Change to "dark" for a dark theme.
providerOptions:{walletconnect:{package:esm["a" /* default */],// required
options:{bridge:"https://polygon.bridge.walletconnect.org",infuraId:INFURA_ID,rpc:{1:"https://mainnet.infura.io/v3/".concat(INFURA_ID),// mainnet // For more WalletConnect providers: https://docs.walletconnect.org/quick-start/dapps/web3-provider#required
42:"https://kovan.infura.io/v3/".concat(INFURA_ID),100:"https://dai.poa.network"// xDai
}}},portis:{display:{logo:"https://user-images.githubusercontent.com/9419140/128913641-d025bc0c-e059-42de-a57b-422f196867ce.png",name:"Portis",description:"Connect to Portis App"},package:umd_default.a,options:{id:"6255fb2b-58c8-433b-a2c9-62098c05ddc9"}},fortmatic:{package:fortmatic_default.a,// required
options:{key:"pk_live_5A7C91B2FC585A17"// required
}},// torus: {
//   package: Torus,
//   options: {
//     networkParams: {
//       host: "https://localhost:8545", // optional
//       chainId: 1337, // optional
//       networkId: 1337 // optional
//     },
//     config: {
//       buildEnv: "development" // optional
//     },
//   },
// },
'custom-walletlink':{display:{logo:'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',name:'Coinbase',description:'Connect to Coinbase Wallet (not Coinbase App)'},package:walletLinkProvider,connector:function(){var _connector=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(provider,options){return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return provider.enable();case 2:return _context.abrupt("return",provider);case 3:case"end":return _context.stop();}}},_callee);}));function connector(_x,_x2){return _connector.apply(this,arguments);}return connector;}()},authereum:{package:authereum_dist_default.a// required
}}});function App_App(props){var mainnetProvider=poktMainnetProvider&&poktMainnetProvider._isProvider?poktMainnetProvider:scaffoldEthProvider&&scaffoldEthProvider._network?scaffoldEthProvider:mainnetInfura;var _useState=Object(react["useState"])(),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),injectedProvider=_useState2[0],setInjectedProvider=_useState2[1];var _useState3=Object(react["useState"])(),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),address=_useState4[0],setAddress=_useState4[1];var logoutOfWeb3Modal=/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return App_web3Modal.clearCachedProvider();case 2:if(!(injectedProvider&&injectedProvider.provider&&typeof injectedProvider.provider.disconnect=="function")){_context2.next=5;break;}_context2.next=5;return injectedProvider.provider.disconnect();case 5:setTimeout(function(){window.location.reload();},1);case 6:case"end":return _context2.stop();}}},_callee2);}));return function logoutOfWeb3Modal(){return _ref.apply(this,arguments);};}();/* 💵 This hook will get the price of ETH from 🦄 Uniswap: */var price=useExchangePrice(App_targetNetwork,mainnetProvider);/* 🔥 This hook will get the price of Gas from ⛽️ EtherGasStation */var gasPrice=useGasPrice(App_targetNetwork,"fast");// Use your injected provider from 🦊 Metamask or if you don't have it then instantly generate a 🔥 burner wallet.
var userSigner=UserProvider(injectedProvider,App_localProvider);Object(react["useEffect"])(function(){function getAddress(){return _getAddress.apply(this,arguments);}function _getAddress(){_getAddress=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(){var newAddress;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:if(!userSigner){_context3.next=5;break;}_context3.next=3;return userSigner.getAddress();case 3:newAddress=_context3.sent;setAddress(newAddress);case 5:case"end":return _context3.stop();}}},_callee3);}));return _getAddress.apply(this,arguments);}getAddress();},[userSigner]);// You can warn the user if you would like them to be on a specific network
var localChainId=App_localProvider&&App_localProvider._network&&App_localProvider._network.chainId;var selectedChainId=userSigner&&userSigner.provider&&userSigner.provider._network&&userSigner.provider._network.chainId;// For more hooks, check out 🔗eth-hooks at: https://www.npmjs.com/package/eth-hooks
// The transactor wraps transactions and provides notificiations
var tx=Transactor(userSigner,gasPrice);// Faucet Tx can be used to send funds from the faucet
var faucetTx=Transactor(App_localProvider,gasPrice);// 🏗 scaffold-eth is full of handy hooks like this one to get your balance:
var yourLocalBalance=useBalance(App_localProvider,address);// Just plug in different 🛰 providers to get your balance on different chains:
var yourMainnetBalance=useBalance(mainnetProvider,address);// Load in your local 📝 contract and read a value from it:
var readContracts=useContractLoader(App_localProvider);// If you want to make 🔐 write transactions to your contracts, use the userSigner:
var writeContracts=useContractLoader(userSigner,{chainId:localChainId});// EXTERNAL CONTRACT EXAMPLE:
//
// If you want to bring in the mainnet DAI contract it would look like:
var mainnetContracts=useContractLoader(mainnetProvider);// If you want to call a function on a new block
useOnBlock(mainnetProvider,function(){// console.log(`⛓ A new mainnet block is here: ${mainnetProvider._lastBlockNumber}`);
});// Then read your DAI balance like:
var myMainnetDAIBalance=useContractReader(mainnetContracts,"DAI","balanceOf",["0x34aA3F359A9D614239015126635CE7732c18fDF3"]);// keep track of a variable from the contract in the local React state:
var purpose=useContractReader(readContracts,"YourContract","purpose");// 📟 Listen for broadcast events
var setPurposeEvents=useEventListener(readContracts,"YourContract","SetPurpose",App_localProvider,1);/*
  const addressFromENS = useResolveName(mainnetProvider, "austingriffith.eth");
  console.log("🏷 Resolved austingriffith.eth as:",addressFromENS)
  */ //
// 🧫 DEBUG 👨🏻‍🔬
//
Object(react["useEffect"])(function(){if(App_DEBUG&&mainnetProvider&&address&&selectedChainId&&yourLocalBalance&&yourMainnetBalance&&readContracts&&writeContracts&&mainnetContracts){/*  console.log("_____________________________________ 🏗 scaffold-eth _____________________________________");
      console.log("🌎 mainnetProvider", mainnetProvider);
      console.log("🏠 localChainId", localChainId);
      console.log("👩‍💼 selected address:", address);
      console.log("🕵🏻‍♂️ selectedChainId:", selectedChainId);
      console.log("💵 yourLocalBalance", yourLocalBalance ? ethers.utils.formatEther(yourLocalBalance) : "...");
      console.log("💵 yourMainnetBalance", yourMainnetBalance ? ethers.utils.formatEther(yourMainnetBalance) : "...");
      console.log("📝 readContracts", readContracts);
      console.log("🌍 DAI contract on mainnet:", mainnetContracts);
      console.log("💵 yourMainnetDAIBalance", myMainnetDAIBalance);
      console.log("🔐 writeContracts", writeContracts);
  */}},[mainnetProvider,address,selectedChainId,yourLocalBalance,yourMainnetBalance,readContracts,writeContracts,mainnetContracts]);var networkDisplay="";if(NETWORKCHECK&&localChainId&&selectedChainId&&localChainId!==selectedChainId){var networkSelected=NETWORK(selectedChainId);var networkLocal=NETWORK(localChainId);if(selectedChainId===1337&&localChainId===31337){networkDisplay=/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{zIndex:2,position:"absolute",right:0,top:60,padding:16},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(es_alert["a" /* default */],{message:"\u26A0\uFE0F Wrong Network ID",description:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:["You have ",/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:"chain id 1337"})," for localhost and you need to change it to ",/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:"31337"})," to work with HardHat.",/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:"(MetaMask -> Settings -> Networks -> Chain ID -> 31337)"})]}),type:"error",closable:false})});}else{networkDisplay=/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{zIndex:2,position:"absolute",right:0,top:60,padding:16},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(es_alert["a" /* default */],{message:"\u26A0\uFE0F Wrong Network",description:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:["You have ",/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:networkSelected&&networkSelected.name})," selected and you need to be on"," ",/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{onClick:/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee4(){var ethereum,data,tx;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:ethereum=window.ethereum;data=[{chainId:"0x"+App_targetNetwork.chainId.toString(16),chainName:App_targetNetwork.name,nativeCurrency:App_targetNetwork.nativeCurrency,rpcUrls:[App_targetNetwork.rpcUrl],blockExplorerUrls:[App_targetNetwork.blockExplorer]}];console.log("data",data);_context4.next=5;return ethereum.request({method:"wallet_addEthereumChain",params:data}).catch();case 5:tx=_context4.sent;if(tx){console.log(tx);}case 7:case"end":return _context4.stop();}}},_callee4);})),children:/*#__PURE__*/Object(jsx_runtime["jsx"])("b",{children:networkLocal&&networkLocal.name})}),"."]}),type:"error",closable:false})});}}else{networkDisplay=/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{zIndex:-1,position:"absolute",right:154,top:28,padding:16,color:App_targetNetwork.color},children:App_targetNetwork.name});}var loadWeb3Modal=Object(react["useCallback"])(/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee5(){var provider;return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.next=2;return App_web3Modal.connect();case 2:provider=_context5.sent;setInjectedProvider(new App_ethers.providers.Web3Provider(provider));provider.on("chainChanged",function(chainId){console.log("chain changed to ".concat(chainId,"! updating providers"));setInjectedProvider(new App_ethers.providers.Web3Provider(provider));});provider.on("accountsChanged",function(){console.log("account changed!");setInjectedProvider(new App_ethers.providers.Web3Provider(provider));});// Subscribe to session disconnection
provider.on("disconnect",function(code,reason){console.log(code,reason);logoutOfWeb3Modal();});case 7:case"end":return _context5.stop();}}},_callee5);})),[setInjectedProvider]);Object(react["useEffect"])(function(){if(App_web3Modal.cachedProvider){loadWeb3Modal();}},[loadWeb3Modal]);var _useState5=Object(react["useState"])(),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),route=_useState6[0],setRoute=_useState6[1];Object(react["useEffect"])(function(){setRoute(window.location.pathname);},[setRoute]);var faucetHint="";var faucetAvailable=App_localProvider&&App_localProvider.connection&&App_targetNetwork.name.indexOf("local")!==-1;var _useState7=Object(react["useState"])(false),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),faucetClicked=_useState8[0],setFaucetClicked=_useState8[1];if(!faucetClicked&&App_localProvider&&App_localProvider._network&&App_localProvider._network.chainId===31337&&yourLocalBalance&&App_ethers.utils.formatEther(yourLocalBalance)<=0){faucetHint=/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{padding:16},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(es_button["a" /* default */],{type:"primary",onClick:function onClick(){faucetTx({to:address,value:App_ethers.utils.parseEther("0.01")});setFaucetClicked(true);},children:"\uD83D\uDCB0 Grab funds from the faucet \u26FD\uFE0F"})});}console.log("userProvider is ".concat(userSigner));return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"App",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Header,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("h1",{id:"totalValueLocked",children:"TVL: $1,235,334.30"}),/*#__PURE__*/Object(jsx_runtime["jsxs"])(react_router_dom["a" /* BrowserRouter */],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(menu["a" /* default */],{style:{textAlign:"center"},selectedKeys:[route],mode:"horizontal",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(menu["a" /* default */].Item,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router_dom["b" /* Link */],{onClick:function onClick(){setRoute("/");},to:"/",children:"Home"})},"/")}),/*#__PURE__*/Object(jsx_runtime["jsxs"])(react_router["c" /* Switch */],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router["a" /* Route */],{exact:true,path:"/",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(CreateUI,{address:address,userSigner:userSigner,mainnetProvider:mainnetProvider,localProvider:App_localProvider,yourLocalBalance:yourLocalBalance,price:price,tx:tx,writeContracts:writeContracts,readContracts:readContracts,purpose:purpose,setPurposeEvents:setPurposeEvents,injectedProvider:injectedProvider})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router["a" /* Route */],{path:"/f/:farmAddress",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(FarmUI,{address:address,userSigner:userSigner,provider:App_localProvider,injectedProvider:injectedProvider,tx:tx})})]})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(ThemeSwitcher,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{position:"fixed",textAlign:"right",right:0,top:0,padding:10},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Account,{address:address,localProvider:App_localProvider,userSigner:userSigner,mainnetProvider:mainnetProvider,price:price,web3Modal:App_web3Modal,loadWeb3Modal:loadWeb3Modal,logoutOfWeb3Modal:logoutOfWeb3Modal,blockExplorer:App_blockExplorer})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("p",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{href:"https://twitter.com/arbis_finance",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})," | ",/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{href:"https://discord.gg/VkCZUUKmKN",target:"_blank",rel:"noopener noreferrer",children:"Discord"})," | ",/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{href:"https://github.com/Arbi-s",target:"_blank",rel:"noopener noreferrer",children:"Github"})]})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{position:"fixed",textAlign:"left",left:0,bottom:20,padding:10},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(row["a" /* default */],{align:"middle",gutter:[4,4],children:/*#__PURE__*/Object(jsx_runtime["jsx"])(col["a" /* default */],{span:8,style:{textAlign:"center",opacity:1},children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(es_button["a" /* default */],{onClick:function onClick(){window.open("https://discord.gg/3hUY25Jvdn");},size:"large",shape:"round",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{marginRight:8},role:"img","aria-label":"support",children:"\uD83D\uDCAC"}),"Support"]})})})})]});}/* harmony default export */ var src_App = (App_App);
// EXTERNAL MODULE: ./src/index.css
var src_0 = __webpack_require__(2180);

// CONCATENATED MODULE: ./src/index.jsx
var src_themes={dark:"".concat(".","/dark-theme.css"),light:"".concat(".","/light-theme.css")};var prevTheme=window.localStorage.getItem("theme");var subgraphUri="http://localhost:8000/subgraphs/name/scaffold-eth/your-contract";var client=new ApolloClient["a" /* ApolloClient */]({uri:subgraphUri,cache:new inMemoryCache["a" /* InMemoryCache */]()});react_dom_default.a.render(/*#__PURE__*/Object(jsx_runtime["jsx"])(ApolloProvider["a" /* ApolloProvider */],{client:client,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_css_theme_switcher_esm["a" /* ThemeSwitcherProvider */],{themeMap:src_themes,defaultTheme:prevTheme||"light",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(src_App,{subgraphUri:subgraphUri})})}),document.getElementById("root"));

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

module.exports=[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports=[{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getUnderlying","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reinvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports=[{"inputs":[{"internalType":"contract IERC20","name":"_rewardToken","type":"address"},{"internalType":"contract IERC20","name":"_stakedToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint128","name":"reward","type":"uint128"},{"internalType":"uint64","name":"duration","type":"uint64"}],"name":"setRewardParams","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"amount","type":"uint128"}],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"forWhom","type":"address"},{"internalType":"uint128","name":"amount","type":"uint128"}],"name":"stakeFor","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"stakedToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewards","outputs":[{"internalType":"uint128","name":"userRewardPerTokenPaid","type":"uint128"},{"internalType":"uint128","name":"rewards","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint128","name":"amount","type":"uint128"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawReward","outputs":[],"stateMutability":"nonpayable","type":"function"}];

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports="0xE340031b61A394c7811868ef81d2eacc79098BC2";

/***/ }),

/***/ 915:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 944:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 995:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 995;

/***/ }),

/***/ 996:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[2181,1,2]]]);