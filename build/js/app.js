(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["FlexCss"] = factory();
	else
		root["FlexCss"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";
	var __cov_G7r$JvG2gU2$BtiZioay5g = (Function('return this'))();
	if (!__cov_G7r$JvG2gU2$BtiZioay5g.__coverage__) { __cov_G7r$JvG2gU2$BtiZioay5g.__coverage__ = {}; }
	__cov_G7r$JvG2gU2$BtiZioay5g = __cov_G7r$JvG2gU2$BtiZioay5g.__coverage__;
	if (!(__cov_G7r$JvG2gU2$BtiZioay5g['/Users/bowlingx/Projekte/flexcss/src/export.js'])) {
	   __cov_G7r$JvG2gU2$BtiZioay5g['/Users/bowlingx/Projekte/flexcss/src/export.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/export.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{},"fnMap":{},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":54}},"2":{"start":{"line":5,"column":0},"end":{"line":5,"column":60}},"3":{"start":{"line":8,"column":0},"end":{"line":11,"column":2}}},"branchMap":{},"code":["\"use strict\";","","var Form = to5Runtime.interopRequire(require(\"Form\"));","","var Tooltip = to5Runtime.interopRequire(require(\"Tooltip\"));","","// default export","module.exports = {","    Form: Form,","    Tooltip: Tooltip","};"]};
	}
	__cov_G7r$JvG2gU2$BtiZioay5g = __cov_G7r$JvG2gU2$BtiZioay5g['/Users/bowlingx/Projekte/flexcss/src/export.js'];
	__cov_G7r$JvG2gU2$BtiZioay5g.s['1']++;var Form=to5Runtime.interopRequire(__webpack_require__(1));__cov_G7r$JvG2gU2$BtiZioay5g.s['2']++;var Tooltip=to5Runtime.interopRequire(__webpack_require__(2));__cov_G7r$JvG2gU2$BtiZioay5g.s['3']++;module.exports={Form:Form,Tooltip:Tooltip};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";
	var __cov_ne9d3bYaB94HPejJeu9yEA = (Function('return this'))();
	if (!__cov_ne9d3bYaB94HPejJeu9yEA.__coverage__) { __cov_ne9d3bYaB94HPejJeu9yEA.__coverage__ = {}; }
	__cov_ne9d3bYaB94HPejJeu9yEA = __cov_ne9d3bYaB94HPejJeu9yEA.__coverage__;
	if (!(__cov_ne9d3bYaB94HPejJeu9yEA['/Users/bowlingx/Projekte/flexcss/src/main/Form.js'])) {
	   __cov_ne9d3bYaB94HPejJeu9yEA['/Users/bowlingx/Projekte/flexcss/src/main/Form.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/main/Form.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":1,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"109":0,"110":0,"111":0,"112":0,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"121":0,"122":0,"123":0,"124":0,"125":0,"126":0,"127":0,"128":0,"129":0,"130":0,"131":0,"132":0,"133":0,"134":0,"135":0,"136":0,"137":0,"138":0,"139":0,"140":0,"141":0,"142":0,"143":0,"144":0,"145":0,"146":0,"147":0,"148":0,"149":0,"150":0,"151":0,"152":0,"153":0,"154":0,"155":0,"156":0,"157":0,"158":0,"159":0,"160":0,"161":0,"162":0,"163":0,"164":0,"165":0,"166":0,"167":1,"168":0,"169":0,"170":0,"171":0,"172":0,"173":0,"174":0,"175":0,"176":0,"177":0,"178":0,"179":0,"180":0,"181":0,"182":0,"183":0,"184":0,"185":0,"186":0,"187":0,"188":0,"189":0,"190":0,"191":0,"192":0,"193":0,"194":0,"195":0,"196":0,"197":0,"198":0,"199":0,"200":0,"201":0,"202":0,"203":0,"204":0,"205":0,"206":0,"207":0,"208":0,"209":0,"210":0,"211":0,"212":0,"213":0,"214":0,"215":0,"216":0,"217":0,"218":0,"219":0,"220":0,"221":0,"222":0,"223":0,"224":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0],"34":[0,0],"35":[0,0],"36":[0,0],"37":[0,0],"38":[0,0],"39":[0,0],"40":[0,0,0,0],"41":[0,0,0],"42":[0,0],"43":[0,0],"44":[0,0],"45":[0,0],"46":[0,0],"47":[0,0],"48":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0},"fnMap":{"1":{"name":"(anonymous_1)","line":23,"loc":{"start":{"line":23,"column":12},"end":{"line":23,"column":24}}},"2":{"name":"Form","line":28,"loc":{"start":{"line":28,"column":4},"end":{"line":28,"column":33}}},"3":{"name":"serializeFormJSON","line":99,"loc":{"start":{"line":99,"column":19},"end":{"line":99,"column":52}}},"4":{"name":"(anonymous_4)","line":102,"loc":{"start":{"line":102,"column":26},"end":{"line":102,"column":38}}},"5":{"name":"_createArrayFromInvalidFieldList","line":126,"loc":{"start":{"line":126,"column":19},"end":{"line":126,"column":67}}},"6":{"name":"_formatErrorTooltip","line":148,"loc":{"start":{"line":148,"column":19},"end":{"line":148,"column":55}}},"7":{"name":"registerErrorMessageHandler","line":161,"loc":{"start":{"line":161,"column":19},"end":{"line":161,"column":67}}},"8":{"name":"init","line":174,"loc":{"start":{"line":174,"column":19},"end":{"line":174,"column":52}}},"9":{"name":"registerValidator","line":192,"loc":{"start":{"line":192,"column":19},"end":{"line":192,"column":63}}},"10":{"name":"registerGlobalRemoteValidationFunction","line":206,"loc":{"start":{"line":206,"column":19},"end":{"line":206,"column":73}}},"11":{"name":"_submitFunction","line":224,"loc":{"start":{"line":224,"column":19},"end":{"line":224,"column":57}}},"12":{"name":"(anonymous_12)","line":262,"loc":{"start":{"line":262,"column":32},"end":{"line":262,"column":45}}},"13":{"name":"(anonymous_13)","line":264,"loc":{"start":{"line":264,"column":26},"end":{"line":264,"column":39}}},"14":{"name":"_setupErrorMessages","line":284,"loc":{"start":{"line":284,"column":19},"end":{"line":284,"column":65}}},"15":{"name":"_removeElementErrors","line":296,"loc":{"start":{"line":296,"column":19},"end":{"line":296,"column":61}}},"16":{"name":"registerValidator","line":323,"loc":{"start":{"line":323,"column":19},"end":{"line":323,"column":63}}},"17":{"name":"_runValidation","line":339,"loc":{"start":{"line":339,"column":19},"end":{"line":339,"column":65}}},"18":{"name":"(anonymous_18)","line":346,"loc":{"start":{"line":346,"column":30},"end":{"line":346,"column":42}}},"19":{"name":"_customValidationsForElements","line":364,"loc":{"start":{"line":364,"column":19},"end":{"line":364,"column":66}}},"20":{"name":"(anonymous_20)","line":381,"loc":{"start":{"line":381,"column":56},"end":{"line":381,"column":68}}},"21":{"name":"removeErrors","line":406,"loc":{"start":{"line":406,"column":19},"end":{"line":406,"column":43}}},"22":{"name":"prepareErrors","line":420,"loc":{"start":{"line":420,"column":19},"end":{"line":420,"column":67}}},"23":{"name":"validateCustomFields","line":463,"loc":{"start":{"line":463,"column":19},"end":{"line":463,"column":51}}},"24":{"name":"getForm","line":476,"loc":{"start":{"line":476,"column":19},"end":{"line":476,"column":38}}},"25":{"name":"registerRemoteValidation","line":489,"loc":{"start":{"line":489,"column":19},"end":{"line":489,"column":59}}},"26":{"name":"showAndOrCreateTooltip","line":503,"loc":{"start":{"line":503,"column":19},"end":{"line":503,"column":67}}},"27":{"name":"(anonymous_27)","line":515,"loc":{"start":{"line":515,"column":27},"end":{"line":515,"column":39}}},"28":{"name":"_checkIsInvalid","line":539,"loc":{"start":{"line":539,"column":19},"end":{"line":539,"column":47}}},"29":{"name":"(anonymous_29)","line":550,"loc":{"start":{"line":550,"column":31},"end":{"line":550,"column":43}}},"30":{"name":"initFormValidation","line":569,"loc":{"start":{"line":569,"column":19},"end":{"line":569,"column":49}}},"31":{"name":"(anonymous_31)","line":574,"loc":{"start":{"line":574,"column":49},"end":{"line":574,"column":62}}},"32":{"name":"(anonymous_32)","line":578,"loc":{"start":{"line":578,"column":36},"end":{"line":578,"column":49}}},"33":{"name":"(anonymous_33)","line":588,"loc":{"start":{"line":588,"column":46},"end":{"line":588,"column":59}}},"34":{"name":"(anonymous_34)","line":602,"loc":{"start":{"line":602,"column":72},"end":{"line":602,"column":84}}},"35":{"name":"_checkIsValidBlurFocusElement","line":616,"loc":{"start":{"line":616,"column":16},"end":{"line":616,"column":63}}},"36":{"name":"(anonymous_36)","line":631,"loc":{"start":{"line":631,"column":47},"end":{"line":631,"column":60}}},"37":{"name":"(anonymous_37)","line":640,"loc":{"start":{"line":640,"column":48},"end":{"line":640,"column":61}}},"38":{"name":"(anonymous_38)","line":644,"loc":{"start":{"line":644,"column":72},"end":{"line":644,"column":84}}},"39":{"name":"(anonymous_39)","line":652,"loc":{"start":{"line":652,"column":37},"end":{"line":652,"column":50}}},"40":{"name":"_submitListener","line":669,"loc":{"start":{"line":669,"column":19},"end":{"line":669,"column":63}}},"41":{"name":"(anonymous_41)","line":688,"loc":{"start":{"line":688,"column":36},"end":{"line":688,"column":49}}},"42":{"name":"(anonymous_42)","line":703,"loc":{"start":{"line":703,"column":54},"end":{"line":703,"column":67}}},"43":{"name":"_handleSubmit","line":726,"loc":{"start":{"line":726,"column":19},"end":{"line":726,"column":45}}},"44":{"name":"(anonymous_44)","line":757,"loc":{"start":{"line":757,"column":38},"end":{"line":757,"column":50}}},"45":{"name":"(anonymous_45)","line":759,"loc":{"start":{"line":759,"column":33},"end":{"line":759,"column":45}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":44}},"2":{"start":{"line":7,"column":0},"end":{"line":7,"column":60}},"3":{"start":{"line":9,"column":0},"end":{"line":9,"column":53}},"4":{"start":{"line":11,"column":0},"end":{"line":11,"column":36}},"5":{"start":{"line":12,"column":0},"end":{"line":12,"column":34}},"6":{"start":{"line":13,"column":0},"end":{"line":13,"column":30}},"7":{"start":{"line":14,"column":0},"end":{"line":14,"column":34}},"8":{"start":{"line":15,"column":0},"end":{"line":15,"column":27}},"9":{"start":{"line":16,"column":0},"end":{"line":16,"column":41}},"10":{"start":{"line":17,"column":0},"end":{"line":17,"column":59}},"11":{"start":{"line":23,"column":0},"end":{"line":742,"column":5}},"12":{"start":{"line":28,"column":4},"end":{"line":88,"column":5}},"13":{"start":{"line":29,"column":8},"end":{"line":29,"column":46}},"14":{"start":{"line":31,"column":8},"end":{"line":31,"column":105}},"15":{"start":{"line":37,"column":8},"end":{"line":37,"column":25}},"16":{"start":{"line":42,"column":8},"end":{"line":42,"column":29}},"17":{"start":{"line":47,"column":8},"end":{"line":47,"column":52}},"18":{"start":{"line":53,"column":8},"end":{"line":64,"column":10}},"19":{"start":{"line":67,"column":8},"end":{"line":67,"column":51}},"20":{"start":{"line":72,"column":8},"end":{"line":72,"column":37}},"21":{"start":{"line":79,"column":8},"end":{"line":79,"column":49}},"22":{"start":{"line":85,"column":8},"end":{"line":85,"column":46}},"23":{"start":{"line":87,"column":8},"end":{"line":87,"column":34}},"24":{"start":{"line":90,"column":4},"end":{"line":739,"column":7}},"25":{"start":{"line":100,"column":16},"end":{"line":100,"column":27}},"26":{"start":{"line":101,"column":16},"end":{"line":101,"column":46}},"27":{"start":{"line":102,"column":16},"end":{"line":111,"column":19}},"28":{"start":{"line":103,"column":20},"end":{"line":110,"column":21}},"29":{"start":{"line":104,"column":24},"end":{"line":106,"column":25}},"30":{"start":{"line":105,"column":28},"end":{"line":105,"column":58}},"31":{"start":{"line":107,"column":24},"end":{"line":107,"column":60}},"32":{"start":{"line":109,"column":24},"end":{"line":109,"column":56}},"33":{"start":{"line":112,"column":16},"end":{"line":112,"column":25}},"34":{"start":{"line":127,"column":16},"end":{"line":127,"column":29}},"35":{"start":{"line":128,"column":16},"end":{"line":133,"column":17}},"36":{"start":{"line":129,"column":20},"end":{"line":129,"column":36}},"37":{"start":{"line":130,"column":20},"end":{"line":132,"column":21}},"38":{"start":{"line":131,"column":24},"end":{"line":131,"column":36}},"39":{"start":{"line":134,"column":16},"end":{"line":134,"column":27}},"40":{"start":{"line":149,"column":16},"end":{"line":149,"column":67}},"41":{"start":{"line":162,"column":16},"end":{"line":162,"column":59}},"42":{"start":{"line":175,"column":16},"end":{"line":175,"column":134}},"43":{"start":{"line":176,"column":16},"end":{"line":178,"column":17}},"44":{"start":{"line":177,"column":20},"end":{"line":177,"column":48}},"45":{"start":{"line":193,"column":16},"end":{"line":193,"column":56}},"46":{"start":{"line":194,"column":16},"end":{"line":194,"column":28}},"47":{"start":{"line":207,"column":16},"end":{"line":207,"column":59}},"48":{"start":{"line":208,"column":16},"end":{"line":208,"column":28}},"49":{"start":{"line":225,"column":16},"end":{"line":228,"column":32}},"50":{"start":{"line":230,"column":16},"end":{"line":230,"column":61}},"51":{"start":{"line":231,"column":16},"end":{"line":231,"column":61}},"52":{"start":{"line":233,"column":16},"end":{"line":236,"column":17}},"53":{"start":{"line":234,"column":20},"end":{"line":234,"column":61}},"54":{"start":{"line":235,"column":20},"end":{"line":235,"column":33}},"55":{"start":{"line":238,"column":16},"end":{"line":241,"column":17}},"56":{"start":{"line":240,"column":20},"end":{"line":240,"column":45}},"57":{"start":{"line":243,"column":16},"end":{"line":243,"column":54}},"58":{"start":{"line":246,"column":16},"end":{"line":246,"column":35}},"59":{"start":{"line":249,"column":16},"end":{"line":258,"column":19}},"60":{"start":{"line":260,"column":16},"end":{"line":260,"column":89}},"61":{"start":{"line":262,"column":16},"end":{"line":270,"column":19}},"62":{"start":{"line":263,"column":20},"end":{"line":263,"column":51}},"63":{"start":{"line":265,"column":20},"end":{"line":265,"column":109}},"64":{"start":{"line":267,"column":20},"end":{"line":267,"column":94}},"65":{"start":{"line":269,"column":20},"end":{"line":269,"column":61}},"66":{"start":{"line":285,"column":16},"end":{"line":285,"column":126}},"67":{"start":{"line":297,"column":16},"end":{"line":298,"column":98}},"68":{"start":{"line":299,"column":16},"end":{"line":301,"column":17}},"69":{"start":{"line":300,"column":20},"end":{"line":300,"column":96}},"70":{"start":{"line":302,"column":16},"end":{"line":307,"column":17}},"71":{"start":{"line":303,"column":20},"end":{"line":303,"column":96}},"72":{"start":{"line":304,"column":20},"end":{"line":306,"column":21}},"73":{"start":{"line":305,"column":24},"end":{"line":305,"column":93}},"74":{"start":{"line":324,"column":16},"end":{"line":324,"column":51}},"75":{"start":{"line":325,"column":16},"end":{"line":325,"column":28}},"76":{"start":{"line":340,"column":16},"end":{"line":342,"column":17}},"77":{"start":{"line":341,"column":20},"end":{"line":341,"column":72}},"78":{"start":{"line":343,"column":16},"end":{"line":344,"column":93}},"79":{"start":{"line":345,"column":16},"end":{"line":345,"column":38}},"80":{"start":{"line":346,"column":16},"end":{"line":348,"column":19}},"81":{"start":{"line":347,"column":20},"end":{"line":347,"column":45}},"82":{"start":{"line":349,"column":16},"end":{"line":349,"column":30}},"83":{"start":{"line":365,"column":16},"end":{"line":367,"column":39}},"84":{"start":{"line":368,"column":16},"end":{"line":380,"column":17}},"85":{"start":{"line":369,"column":20},"end":{"line":371,"column":50}},"86":{"start":{"line":372,"column":20},"end":{"line":379,"column":21}},"87":{"start":{"line":374,"column":24},"end":{"line":376,"column":25}},"88":{"start":{"line":375,"column":28},"end":{"line":375,"column":37}},"89":{"start":{"line":377,"column":24},"end":{"line":377,"column":50}},"90":{"start":{"line":378,"column":24},"end":{"line":378,"column":80}},"91":{"start":{"line":381,"column":16},"end":{"line":395,"column":19}},"92":{"start":{"line":382,"column":20},"end":{"line":383,"column":46}},"93":{"start":{"line":384,"column":20},"end":{"line":387,"column":22}},"94":{"start":{"line":389,"column":20},"end":{"line":393,"column":21}},"95":{"start":{"line":390,"column":24},"end":{"line":392,"column":25}},"96":{"start":{"line":391,"column":28},"end":{"line":391,"column":56}},"97":{"start":{"line":394,"column":20},"end":{"line":394,"column":56}},"98":{"start":{"line":407,"column":16},"end":{"line":407,"column":53}},"99":{"start":{"line":408,"column":16},"end":{"line":408,"column":28}},"100":{"start":{"line":421,"column":16},"end":{"line":423,"column":17}},"101":{"start":{"line":422,"column":20},"end":{"line":422,"column":57}},"102":{"start":{"line":426,"column":16},"end":{"line":452,"column":17}},"103":{"start":{"line":427,"column":20},"end":{"line":429,"column":50}},"104":{"start":{"line":430,"column":20},"end":{"line":430,"column":88}},"105":{"start":{"line":431,"column":20},"end":{"line":449,"column":21}},"106":{"start":{"line":432,"column":24},"end":{"line":435,"column":25}},"107":{"start":{"line":434,"column":28},"end":{"line":434,"column":62}},"108":{"start":{"line":437,"column":24},"end":{"line":437,"column":66}},"109":{"start":{"line":438,"column":24},"end":{"line":438,"column":55}},"110":{"start":{"line":439,"column":24},"end":{"line":439,"column":65}},"111":{"start":{"line":440,"column":24},"end":{"line":442,"column":25}},"112":{"start":{"line":441,"column":28},"end":{"line":441,"column":148}},"113":{"start":{"line":443,"column":24},"end":{"line":443,"column":88}},"114":{"start":{"line":445,"column":24},"end":{"line":445,"column":58}},"115":{"start":{"line":446,"column":24},"end":{"line":446,"column":66}},"116":{"start":{"line":448,"column":24},"end":{"line":448,"column":58}},"117":{"start":{"line":451,"column":20},"end":{"line":451,"column":48}},"118":{"start":{"line":464,"column":16},"end":{"line":464,"column":105}},"119":{"start":{"line":477,"column":16},"end":{"line":477,"column":33}},"120":{"start":{"line":490,"column":16},"end":{"line":490,"column":54}},"121":{"start":{"line":491,"column":16},"end":{"line":491,"column":28}},"122":{"start":{"line":504,"column":16},"end":{"line":504,"column":32}},"123":{"start":{"line":505,"column":16},"end":{"line":509,"column":17}},"124":{"start":{"line":506,"column":20},"end":{"line":508,"column":23}},"125":{"start":{"line":511,"column":16},"end":{"line":513,"column":17}},"126":{"start":{"line":512,"column":20},"end":{"line":512,"column":27}},"127":{"start":{"line":515,"column":16},"end":{"line":526,"column":22}},"128":{"start":{"line":516,"column":20},"end":{"line":518,"column":21}},"129":{"start":{"line":517,"column":24},"end":{"line":517,"column":31}},"130":{"start":{"line":519,"column":20},"end":{"line":525,"column":21}},"131":{"start":{"line":520,"column":24},"end":{"line":520,"column":133}},"132":{"start":{"line":522,"column":24},"end":{"line":524,"column":25}},"133":{"start":{"line":523,"column":28},"end":{"line":523,"column":64}},"134":{"start":{"line":540,"column":16},"end":{"line":540,"column":35}},"135":{"start":{"line":541,"column":16},"end":{"line":542,"column":32}},"136":{"start":{"line":543,"column":16},"end":{"line":543,"column":79}},"137":{"start":{"line":545,"column":16},"end":{"line":547,"column":17}},"138":{"start":{"line":546,"column":20},"end":{"line":546,"column":33}},"139":{"start":{"line":549,"column":16},"end":{"line":554,"column":17}},"140":{"start":{"line":550,"column":20},"end":{"line":553,"column":26}},"141":{"start":{"line":551,"column":24},"end":{"line":551,"column":39}},"142":{"start":{"line":552,"column":24},"end":{"line":552,"column":60}},"143":{"start":{"line":556,"column":16},"end":{"line":556,"column":61}},"144":{"start":{"line":557,"column":16},"end":{"line":557,"column":46}},"145":{"start":{"line":558,"column":16},"end":{"line":558,"column":34}},"146":{"start":{"line":571,"column":16},"end":{"line":573,"column":32}},"147":{"start":{"line":574,"column":16},"end":{"line":584,"column":25}},"148":{"start":{"line":575,"column":20},"end":{"line":575,"column":57}},"149":{"start":{"line":576,"column":20},"end":{"line":583,"column":21}},"150":{"start":{"line":577,"column":24},"end":{"line":577,"column":68}},"151":{"start":{"line":578,"column":24},"end":{"line":582,"column":27}},"152":{"start":{"line":579,"column":28},"end":{"line":579,"column":71}},"153":{"start":{"line":580,"column":28},"end":{"line":580,"column":68}},"154":{"start":{"line":581,"column":28},"end":{"line":581,"column":53}},"155":{"start":{"line":588,"column":16},"end":{"line":608,"column":25}},"156":{"start":{"line":589,"column":20},"end":{"line":591,"column":21}},"157":{"start":{"line":590,"column":24},"end":{"line":590,"column":62}},"158":{"start":{"line":592,"column":20},"end":{"line":593,"column":41}},"159":{"start":{"line":595,"column":20},"end":{"line":597,"column":21}},"160":{"start":{"line":596,"column":24},"end":{"line":596,"column":31}},"161":{"start":{"line":599,"column":20},"end":{"line":601,"column":21}},"162":{"start":{"line":600,"column":24},"end":{"line":600,"column":40}},"163":{"start":{"line":602,"column":20},"end":{"line":607,"column":23}},"164":{"start":{"line":603,"column":24},"end":{"line":603,"column":62}},"165":{"start":{"line":604,"column":24},"end":{"line":606,"column":25}},"166":{"start":{"line":605,"column":28},"end":{"line":605,"column":66}},"167":{"start":{"line":616,"column":16},"end":{"line":627,"column":17}},"168":{"start":{"line":617,"column":20},"end":{"line":619,"column":21}},"169":{"start":{"line":618,"column":24},"end":{"line":618,"column":37}},"170":{"start":{"line":621,"column":20},"end":{"line":622,"column":86}},"171":{"start":{"line":623,"column":20},"end":{"line":625,"column":21}},"172":{"start":{"line":624,"column":24},"end":{"line":624,"column":37}},"173":{"start":{"line":626,"column":20},"end":{"line":626,"column":213}},"174":{"start":{"line":631,"column":16},"end":{"line":637,"column":25}},"175":{"start":{"line":633,"column":20},"end":{"line":635,"column":21}},"176":{"start":{"line":634,"column":24},"end":{"line":634,"column":31}},"177":{"start":{"line":636,"column":20},"end":{"line":636,"column":58}},"178":{"start":{"line":640,"column":16},"end":{"line":649,"column":19}},"179":{"start":{"line":641,"column":20},"end":{"line":641,"column":61}},"180":{"start":{"line":642,"column":20},"end":{"line":648,"column":21}},"181":{"start":{"line":643,"column":24},"end":{"line":643,"column":86}},"182":{"start":{"line":644,"column":24},"end":{"line":647,"column":27}},"183":{"start":{"line":645,"column":28},"end":{"line":645,"column":62}},"184":{"start":{"line":646,"column":28},"end":{"line":646,"column":72}},"185":{"start":{"line":652,"column":16},"end":{"line":654,"column":18}},"186":{"start":{"line":653,"column":20},"end":{"line":653,"column":60}},"187":{"start":{"line":655,"column":16},"end":{"line":655,"column":64}},"188":{"start":{"line":670,"column":16},"end":{"line":671,"column":32}},"189":{"start":{"line":673,"column":16},"end":{"line":676,"column":17}},"190":{"start":{"line":674,"column":20},"end":{"line":674,"column":39}},"191":{"start":{"line":675,"column":20},"end":{"line":675,"column":33}},"192":{"start":{"line":678,"column":16},"end":{"line":678,"column":50}},"193":{"start":{"line":679,"column":16},"end":{"line":679,"column":67}},"194":{"start":{"line":680,"column":16},"end":{"line":680,"column":48}},"195":{"start":{"line":681,"column":16},"end":{"line":681,"column":35}},"196":{"start":{"line":683,"column":16},"end":{"line":713,"column":17}},"197":{"start":{"line":684,"column":20},"end":{"line":684,"column":68}},"198":{"start":{"line":686,"column":20},"end":{"line":686,"column":64}},"199":{"start":{"line":687,"column":20},"end":{"line":687,"column":65}},"200":{"start":{"line":688,"column":20},"end":{"line":702,"column":23}},"201":{"start":{"line":690,"column":24},"end":{"line":699,"column":25}},"202":{"start":{"line":691,"column":28},"end":{"line":691,"column":55}},"203":{"start":{"line":692,"column":28},"end":{"line":698,"column":29}},"204":{"start":{"line":695,"column":32},"end":{"line":695,"column":69}},"205":{"start":{"line":696,"column":32},"end":{"line":696,"column":42}},"206":{"start":{"line":697,"column":32},"end":{"line":697,"column":38}},"207":{"start":{"line":700,"column":24},"end":{"line":700,"column":67}},"208":{"start":{"line":701,"column":24},"end":{"line":701,"column":64}},"209":{"start":{"line":703,"column":20},"end":{"line":709,"column":23}},"210":{"start":{"line":704,"column":24},"end":{"line":704,"column":61}},"211":{"start":{"line":705,"column":24},"end":{"line":708,"column":25}},"212":{"start":{"line":707,"column":28},"end":{"line":707,"column":50}},"213":{"start":{"line":711,"column":20},"end":{"line":711,"column":57}},"214":{"start":{"line":712,"column":20},"end":{"line":712,"column":68}},"215":{"start":{"line":727,"column":16},"end":{"line":729,"column":18}},"216":{"start":{"line":730,"column":16},"end":{"line":730,"column":93}},"217":{"start":{"line":731,"column":16},"end":{"line":733,"column":17}},"218":{"start":{"line":732,"column":20},"end":{"line":732,"column":33}},"219":{"start":{"line":734,"column":16},"end":{"line":734,"column":65}},"220":{"start":{"line":741,"column":4},"end":{"line":741,"column":16}},"221":{"start":{"line":744,"column":0},"end":{"line":744,"column":22}},"222":{"start":{"line":752,"column":0},"end":{"line":752,"column":27}},"223":{"start":{"line":757,"column":0},"end":{"line":757,"column":53}},"224":{"start":{"line":759,"column":0},"end":{"line":759,"column":48}}},"branchMap":{"1":{"line":103,"type":"if","locations":[{"start":{"line":103,"column":20},"end":{"line":103,"column":20}},{"start":{"line":103,"column":20},"end":{"line":103,"column":20}}]},"2":{"line":104,"type":"if","locations":[{"start":{"line":104,"column":24},"end":{"line":104,"column":24}},{"start":{"line":104,"column":24},"end":{"line":104,"column":24}}]},"3":{"line":107,"type":"binary-expr","locations":[{"start":{"line":107,"column":42},"end":{"line":107,"column":52}},{"start":{"line":107,"column":56},"end":{"line":107,"column":58}}]},"4":{"line":109,"type":"binary-expr","locations":[{"start":{"line":109,"column":39},"end":{"line":109,"column":49}},{"start":{"line":109,"column":53},"end":{"line":109,"column":55}}]},"5":{"line":130,"type":"if","locations":[{"start":{"line":130,"column":20},"end":{"line":130,"column":20}},{"start":{"line":130,"column":20},"end":{"line":130,"column":20}}]},"6":{"line":175,"type":"cond-expr","locations":[{"start":{"line":175,"column":62},"end":{"line":175,"column":95}},{"start":{"line":175,"column":98},"end":{"line":175,"column":133}}]},"7":{"line":226,"type":"binary-expr","locations":[{"start":{"line":226,"column":34},"end":{"line":226,"column":70}},{"start":{"line":226,"column":74},"end":{"line":226,"column":105}},{"start":{"line":226,"column":109},"end":{"line":226,"column":129}}]},"8":{"line":233,"type":"if","locations":[{"start":{"line":233,"column":16},"end":{"line":233,"column":16}},{"start":{"line":233,"column":16},"end":{"line":233,"column":16}}]},"9":{"line":238,"type":"if","locations":[{"start":{"line":238,"column":16},"end":{"line":238,"column":16}},{"start":{"line":238,"column":16},"end":{"line":238,"column":16}}]},"10":{"line":249,"type":"cond-expr","locations":[{"start":{"line":249,"column":43},"end":{"line":254,"column":18}},{"start":{"line":254,"column":21},"end":{"line":258,"column":18}}]},"11":{"line":265,"type":"binary-expr","locations":[{"start":{"line":265,"column":21},"end":{"line":265,"column":51}},{"start":{"line":265,"column":55},"end":{"line":265,"column":90}}]},"12":{"line":285,"type":"cond-expr","locations":[{"start":{"line":285,"column":56},"end":{"line":285,"column":117}},{"start":{"line":285,"column":120},"end":{"line":285,"column":125}}]},"13":{"line":304,"type":"if","locations":[{"start":{"line":304,"column":20},"end":{"line":304,"column":20}},{"start":{"line":304,"column":20},"end":{"line":304,"column":20}}]},"14":{"line":340,"type":"if","locations":[{"start":{"line":340,"column":16},"end":{"line":340,"column":16}},{"start":{"line":340,"column":16},"end":{"line":340,"column":16}}]},"15":{"line":372,"type":"if","locations":[{"start":{"line":372,"column":20},"end":{"line":372,"column":20}},{"start":{"line":372,"column":20},"end":{"line":372,"column":20}}]},"16":{"line":374,"type":"if","locations":[{"start":{"line":374,"column":24},"end":{"line":374,"column":24}},{"start":{"line":374,"column":24},"end":{"line":374,"column":24}}]},"17":{"line":374,"type":"binary-expr","locations":[{"start":{"line":374,"column":28},"end":{"line":374,"column":49}},{"start":{"line":374,"column":53},"end":{"line":374,"column":68}}]},"18":{"line":390,"type":"if","locations":[{"start":{"line":390,"column":24},"end":{"line":390,"column":24}},{"start":{"line":390,"column":24},"end":{"line":390,"column":24}}]},"19":{"line":421,"type":"if","locations":[{"start":{"line":421,"column":16},"end":{"line":421,"column":16}},{"start":{"line":421,"column":16},"end":{"line":421,"column":16}}]},"20":{"line":431,"type":"if","locations":[{"start":{"line":431,"column":20},"end":{"line":431,"column":20}},{"start":{"line":431,"column":20},"end":{"line":431,"column":20}}]},"21":{"line":431,"type":"binary-expr","locations":[{"start":{"line":431,"column":24},"end":{"line":431,"column":32}},{"start":{"line":431,"column":36},"end":{"line":431,"column":51}}]},"22":{"line":432,"type":"if","locations":[{"start":{"line":432,"column":24},"end":{"line":432,"column":24}},{"start":{"line":432,"column":24},"end":{"line":432,"column":24}}]},"23":{"line":440,"type":"if","locations":[{"start":{"line":440,"column":24},"end":{"line":440,"column":24}},{"start":{"line":440,"column":24},"end":{"line":440,"column":24}}]},"24":{"line":505,"type":"if","locations":[{"start":{"line":505,"column":16},"end":{"line":505,"column":16}},{"start":{"line":505,"column":16},"end":{"line":505,"column":16}}]},"25":{"line":505,"type":"binary-expr","locations":[{"start":{"line":505,"column":20},"end":{"line":505,"column":34}},{"start":{"line":505,"column":38},"end":{"line":505,"column":65}}]},"26":{"line":511,"type":"if","locations":[{"start":{"line":511,"column":16},"end":{"line":511,"column":16}},{"start":{"line":511,"column":16},"end":{"line":511,"column":16}}]},"27":{"line":516,"type":"if","locations":[{"start":{"line":516,"column":20},"end":{"line":516,"column":20}},{"start":{"line":516,"column":20},"end":{"line":516,"column":20}}]},"28":{"line":519,"type":"if","locations":[{"start":{"line":519,"column":20},"end":{"line":519,"column":20}},{"start":{"line":519,"column":20},"end":{"line":519,"column":20}}]},"29":{"line":519,"type":"binary-expr","locations":[{"start":{"line":519,"column":24},"end":{"line":519,"column":60}},{"start":{"line":519,"column":64},"end":{"line":519,"column":108}}]},"30":{"line":522,"type":"if","locations":[{"start":{"line":522,"column":24},"end":{"line":522,"column":24}},{"start":{"line":522,"column":24},"end":{"line":522,"column":24}}]},"31":{"line":545,"type":"if","locations":[{"start":{"line":545,"column":16},"end":{"line":545,"column":16}},{"start":{"line":545,"column":16},"end":{"line":545,"column":16}}]},"32":{"line":549,"type":"if","locations":[{"start":{"line":549,"column":16},"end":{"line":549,"column":16}},{"start":{"line":549,"column":16},"end":{"line":549,"column":16}}]},"33":{"line":576,"type":"if","locations":[{"start":{"line":576,"column":20},"end":{"line":576,"column":20}},{"start":{"line":576,"column":20},"end":{"line":576,"column":20}}]},"34":{"line":589,"type":"if","locations":[{"start":{"line":589,"column":20},"end":{"line":589,"column":20}},{"start":{"line":589,"column":20},"end":{"line":589,"column":20}}]},"35":{"line":595,"type":"if","locations":[{"start":{"line":595,"column":20},"end":{"line":595,"column":20}},{"start":{"line":595,"column":20},"end":{"line":595,"column":20}}]},"36":{"line":599,"type":"if","locations":[{"start":{"line":599,"column":20},"end":{"line":599,"column":20}},{"start":{"line":599,"column":20},"end":{"line":599,"column":20}}]},"37":{"line":604,"type":"if","locations":[{"start":{"line":604,"column":24},"end":{"line":604,"column":24}},{"start":{"line":604,"column":24},"end":{"line":604,"column":24}}]},"38":{"line":617,"type":"if","locations":[{"start":{"line":617,"column":20},"end":{"line":617,"column":20}},{"start":{"line":617,"column":20},"end":{"line":617,"column":20}}]},"39":{"line":623,"type":"if","locations":[{"start":{"line":623,"column":20},"end":{"line":623,"column":20}},{"start":{"line":623,"column":20},"end":{"line":623,"column":20}}]},"40":{"line":626,"type":"binary-expr","locations":[{"start":{"line":626,"column":29},"end":{"line":626,"column":48}},{"start":{"line":626,"column":52},"end":{"line":626,"column":69}},{"start":{"line":626,"column":73},"end":{"line":626,"column":90}},{"start":{"line":626,"column":94},"end":{"line":626,"column":211}}]},"41":{"line":626,"type":"binary-expr","locations":[{"start":{"line":626,"column":96},"end":{"line":626,"column":131}},{"start":{"line":626,"column":135},"end":{"line":626,"column":169}},{"start":{"line":626,"column":173},"end":{"line":626,"column":210}}]},"42":{"line":633,"type":"if","locations":[{"start":{"line":633,"column":20},"end":{"line":633,"column":20}},{"start":{"line":633,"column":20},"end":{"line":633,"column":20}}]},"43":{"line":642,"type":"if","locations":[{"start":{"line":642,"column":20},"end":{"line":642,"column":20}},{"start":{"line":642,"column":20},"end":{"line":642,"column":20}}]},"44":{"line":673,"type":"if","locations":[{"start":{"line":673,"column":16},"end":{"line":673,"column":16}},{"start":{"line":673,"column":16},"end":{"line":673,"column":16}}]},"45":{"line":683,"type":"if","locations":[{"start":{"line":683,"column":16},"end":{"line":683,"column":16}},{"start":{"line":683,"column":16},"end":{"line":683,"column":16}}]},"46":{"line":692,"type":"if","locations":[{"start":{"line":692,"column":28},"end":{"line":692,"column":28}},{"start":{"line":692,"column":28},"end":{"line":692,"column":28}}]},"47":{"line":705,"type":"if","locations":[{"start":{"line":705,"column":24},"end":{"line":705,"column":24}},{"start":{"line":705,"column":24},"end":{"line":705,"column":24}}]},"48":{"line":731,"type":"if","locations":[{"start":{"line":731,"column":16},"end":{"line":731,"column":16}},{"start":{"line":731,"column":16},"end":{"line":731,"column":16}}]}},"code":["\"use strict\";","","var _core = require(\"6to5-runtime/core-js\");","","/*global Form, HTMLFormElement*/","","var Tooltip = to5Runtime.interopRequire(require(\"Tooltip\"));","","var $ = to5Runtime.interopRequire(require(\"jquery\"));","","var ERROR_CLASS_NAME = \"form-error\";","var INPUT_ERROR_CLASS = \"invalid\";","var LOADING_CLASS = \"loading\";","var ARIA_INVALID = \"aria-invalid\";","var REMOTE = \"data-remote\";","var REMOTE_ACTION = \"data-remote-action\";","var ATTR_DISABLE_INLINE = \"data-disable-inline-validation\";","","/**"," * A HTML5 Form Validation replacement"," */","","var Form = (function () {","    /**","     * @param {HTMLElement} form","     * @param [options] optional options","     */","    function Form(form, options) {","        to5Runtime.classCallCheck(this, Form);","","        console.assert(form instanceof HTMLFormElement, \"argument {0} form needs to be an form element\");","","        /**","         * The Form","         * @type {HTMLElement}","         */","        this.form = form;","","        /**","         * @type {Tooltip}","         */","        this.tooltips = null;","","        /**","         * @type {Future}","         */","        this.currentValidationFuture = $.Deferred();","","        /**","         * Default options","         * @type {Object}","         */","        this.options = {","            // if true creates tooltips above element, uses FlexCss Tooltips","            createTooltips: true,","            // if true appends error message after input element","            appendError: false,","            // type of ajax submit","            ajaxSubmitType: \"POST\",","            // json content type if ajax method is set to json","            ajaxJsonContentType: \"application/json; charset=utf-8\",","            // allow inline validation","            inlineValidation: true","        };","","        // overwrite default options","        _core.Object.assign(this.options, options);","","        // set form class as widget","        // Forms are very different to classical widgets,","        // we will not use our base widget class for this but just self","        form.hfWidgetInstance = this;","","        /**","         * A List of Validators","         * @type {Object}","         * @private","         */","        this._validators = Form.globalValidators;","","        /**","         * @type {Function}","         * @private","         */","        this._remoteValidationFunction = null;","","        this.initFormValidation();","    }","","    to5Runtime.prototypeProperties(Form, {","        serializeFormJSON: {","","            /**","             * Serializes a form to a property map","             * @param {jQuery} form","             * @returns {{}}","             * @private","             */","            value: function serializeFormJSON(form) {","                var o = {};","                var a = form.serializeArray();","                $.each(a, function () {","                    if (o[this.name]) {","                        if (!o[this.name].push) {","                            o[this.name] = [o[this.name]];","                        }","                        o[this.name].push(this.value || \"\");","                    } else {","                        o[this.name] = this.value || \"\";","                    }","                });","                return o;","            },","            writable: true,","            configurable: true","        },","        _createArrayFromInvalidFieldList: {","","            /**","             * Creates an array from a node list with invalid items","             * On Firefox also Fieldset's seems to be invalid, remove them","             * @param list","             * @returns {Array}","             * @private","             */","            value: function _createArrayFromInvalidFieldList(list) {","                var arr = [];","                for (var i = 0; i < list.length; ++i) {","                    var n = list[i];","                    if (!(n instanceof HTMLFieldSetElement)) {","                        arr.push(n);","                    }","                }","                return arr;","            },","            writable: true,","            configurable: true","        },","        _formatErrorTooltip: {","","","            /**","             * Formats the error content for the tooltip","             * @param {String} error","             * @returns {String}","             * @private","             */","            value: function _formatErrorTooltip(error) {","                return \"<i class=\\\"icon-attention\\\"></i> \" + error;","            },","            writable: true,","            configurable: true","        },","        registerErrorMessageHandler: {","","","            /**","             * Registers a global event Handler","             * @param errorFunc","             */","            value: function registerErrorMessageHandler(errorFunc) {","                Form.globalErrorMessageHandler = errorFunc;","            },","            writable: true,","            configurable: true","        },","        init: {","","            /**","             * Initialize forms for a specific selector","             * @param {String} selector","             * @param {Object} options","             */","            value: function init(selector, options) {","                var forms = selector instanceof HTMLElement ? selector.querySelectorAll(\"form\") : document.querySelectorAll(selector);","                for (var i = 0; i < forms.length; i++) {","                    new Form(forms[i], options);","                }","            },","            writable: true,","            configurable: true","        },","        registerValidator: {","","","            /**","             * Registers a global validator that is usable on all form instances","             * @param {String} name","             * @param {Function} validator","             * @returns {Function}","             */","            value: function registerValidator(name, validator) {","                Form.globalValidators[name] = validator;","                return Form;","            },","            writable: true,","            configurable: true","        },","        registerGlobalRemoteValidationFunction: {","","            /**","             * Registers a global function that is called when a form should validate the response of a server","             * @param {Function} func","             * @returns {Form}","             */","            value: function registerGlobalRemoteValidationFunction(func) {","                Form.globalRemoteValidationFunction = func;","                return Form;","            },","            writable: true,","            configurable: true","        }","    }, {","        _submitFunction: {","","","            /**","             * Submits this form, either via ajax or just classical (default)","             * @param {HTMLFormElement} thisForm","             * @param {Event} e","             * @private","             * @returns {*}","             */","            value: function _submitFunction(thisForm, e) {","                var shouldUseAjax = thisForm.getAttribute(REMOTE),","                    ajaxPostUrl = thisForm.getAttribute(REMOTE_ACTION) || thisForm.getAttribute(\"action\") || window.location.href,","                    useJson = \"json\" === shouldUseAjax,","                    self = this;","","                var ev = jQuery.Event(\"flexcss.form.submit\");","                $(thisForm).trigger(ev, [e, this, thisForm]);","                // abort execution is event was prevented","                if (ev.isDefaultPrevented()) {","                    thisForm.classList.remove(LOADING_CLASS);","                    return false;","                }","","                if (null === shouldUseAjax) {","                    // submit","                    return thisForm.submit();","                }","","                thisForm.classList.add(LOADING_CLASS);","","                // prevent form from submit normally","                e.preventDefault();","","                // support either JSON request payload or normal payload submission","                var serverCall = useJson ? $.ajax({","                    contentType: this.options.ajaxJsonContentType,","                    type: this.options.ajaxSubmitType,","                    url: ajaxPostUrl,","                    data: JSON.stringify(Form.serializeFormJSON($(thisForm)))","                }) : $.ajax({","                    type: this.options.ajaxSubmitType,","                    url: ajaxPostUrl,","                    data: $(thisForm).serialize()","                });","","                $(thisForm).trigger(\"flexcss.form.afterAjaxSubmit\", [e, this, thisForm]);","","                serverCall.then(function (r) {","                    return $.Deferred().resolve(r);","                }).always(function (r) {","                    (self._remoteValidationFunction || Form.globalRemoteValidationFunction).apply(self, [r]);","","                    $(thisForm).trigger(\"flexcss.form.ajaxCompleted\", [e, self, thisForm, r]);","                    // always remove error class","                    thisForm.classList.remove(LOADING_CLASS);","                });","            },","            writable: true,","            configurable: true","        },","        _setupErrorMessages: {","","            /**","             * @param {HTMLElement} field","             * @param {ValidityState} validity","             * @returns {*}","             * @private","             */","","            value: function _setupErrorMessages(field, validity) {","                return Form.globalErrorMessageHandler ? Form.globalErrorMessageHandler.apply(this, [field, validity]) : false;","            },","            writable: true,","            configurable: true","        },","        _removeElementErrors: {","","            /**","             * @param {HTMLElement} thisParent","             * @private","             */","            value: function _removeElementErrors(thisParent) {","                var errors = thisParent.querySelectorAll(\".\" + ERROR_CLASS_NAME),","                    inputsWithErrorClasses = thisParent.querySelectorAll(\".\" + INPUT_ERROR_CLASS);","                for (var elementErrorIndex = 0; elementErrorIndex < errors.length; elementErrorIndex++) {","                    errors[elementErrorIndex].parentNode.removeChild(errors[elementErrorIndex]);","                }","                for (var inputErrorIndex = 0; inputErrorIndex < inputsWithErrorClasses.length; inputErrorIndex++) {","                    inputsWithErrorClasses[inputErrorIndex].classList.remove(INPUT_ERROR_CLASS);","                    if (this.tooltips) {","                        this.tooltips.removeTooltip(inputsWithErrorClasses[inputErrorIndex]);","                    }","                }","            },","            writable: true,","            configurable: true","        },","        registerValidator: {","","","            /**","             * Registers a custom validator","             * @param {String} name","             * @param {Function} validator a validation function should always return either a Future(true) or Future(false)","             * even when the field has been invalidated with `setCustomValidity`, because of different browser `bugs`","             * we can't rely on that","             * @returns {Form}","             */","            value: function registerValidator(name, validator) {","                this._validators[name] = validator;","                return this;","            },","            writable: true,","            configurable: true","        },","        _runValidation: {","","            /**","             * Runs async validation","             * @param {String} validationRef","             * @param {HTMLElement} field","             * @returns {*}","             * @private","             */","            value: function _runValidation(validationRef, field) {","                if (!this._validators[validationRef]) {","                    throw \"Could not found validator: \" + validationRef;","                }","                var cl = field.classList,","                    future = this._validators[validationRef].apply(this, [field, this.form]);","                cl.add(LOADING_CLASS);","                future.always(function () {","                    cl.remove(LOADING_CLASS);","                });","                return future;","            },","            writable: true,","            configurable: true","        },","        _customValidationsForElements: {","","","            /**","             * Run custom validations for elements, validations are done async do support XHR Requests or other stuff","             *","             * @param {Array|NodeList} fields","             * @returns {$.Deferred} contains either true if validations passed or false if something went wrong","             * @private","             */","            value: function _customValidationsForElements(fields) {","                var futures = [],","                    fieldsLength = fields.length,","                    checkedFields = [];","                for (var iVal = 0; iVal < fieldsLength; iVal++) {","                    var field = fields[iVal],","                        validationRef = field.getAttribute(\"data-validate\"),","                        validity = field.validity;","                    if (this._validators[validationRef]) {","                        // use local validation first and then continue with custom validations","                        if (!validity.customError && !validity.valid) {","                            continue;","                        }","                        checkedFields.push(field);","                        futures.push(this._runValidation(validationRef, field));","                    }","                }","                return $.when.apply(this, futures).then(function () {","                    var allFutures = arguments,","                        l = allFutures.length;","                    var result = {","                        checkedFields: checkedFields,","                        foundAnyError: false","                    };","","                    for (var fI = 0; fI < l; fI++) {","                        if (!allFutures[fI]) {","                            result.foundAnyError = true;","                        }","                    }","                    return $.Deferred().resolve(result);","                });","            },","            writable: true,","            configurable: true","        },","        removeErrors: {","","            /**","             * Remove all errors for this form","             * @returns {Form}","             */","            value: function removeErrors() {","                this._removeElementErrors(this.form);","                return this;","            },","            writable: true,","            configurable: true","        },","        prepareErrors: {","","            /**","             * Will handle errors for given fields","             * @param {Array|NodeList} fields","             * @param {Boolean} removeAllErrors","             */","            value: function prepareErrors(fields, removeAllErrors) {","                if (removeAllErrors) {","                    this._removeElementErrors(this.form);","                }","                // We save all validations in an extra property because we need to reset the validity due some","                // implementation errors in other browsers then chrome","                for (var i = 0; i < fields.length; i++) {","                    var field = fields[i],","                        parent = field.parentNode,","                        validity = field.validity;","                    field.flexFormsSavedValidity = JSON.parse(JSON.stringify(validity));","                    if (validity && !validity.valid) {","                        if (!removeAllErrors) {","                            // Remove current errors:","                            this._removeElementErrors(parent);","                        }","                        // setup custom error messages:","                        this._setupErrorMessages(field, validity);","                        field.classList.add(\"invalid\");","                        field.setAttribute(ARIA_INVALID, \"true\");","                        if (this.options.appendError) {","                            parent.insertAdjacentHTML(\"beforeend\", \"<div class=\\\"\" + ERROR_CLASS_NAME + \"\\\">\" + field.validationMessage + \"</div>\");","                        }","                        field.flexFormsSavedValidationMessage = field.validationMessage;","                    } else {","                        field.classList.remove(\"invalid\");","                        field.setAttribute(ARIA_INVALID, \"false\");","","                        this._removeElementErrors(parent);","                    }","                    // FIXME: We have to reset the custom validity here to allow native validations work again","                    field.setCustomValidity(\"\");","                }","            },","            writable: true,","            configurable: true","        },","        validateCustomFields: {","","            /**","             * Validates all custom fields","             * @returns {$.Deferred}","             */","            value: function validateCustomFields() {","                return this._customValidationsForElements(this.form.querySelectorAll(\"[data-validate]\"));","            },","            writable: true,","            configurable: true","        },","        getForm: {","","","            /**","             * This form","             * @returns {HTMLElement}","             */","            value: function getForm() {","                return this.form;","            },","            writable: true,","            configurable: true","        },","        registerRemoteValidation: {","","            /**","             * Registers a function that handles remote validation","             * @param {Function} func","             * @returns {Form}","             */","            value: function registerRemoteValidation(func) {","                this._remoteValidationFunction = func;","                return this;","            },","            writable: true,","            configurable: true","        },","        showAndOrCreateTooltip: {","","            /**","             * Creates a tooltip at given element, will only create a new instance if not created","             * @param {HTMLElement} target","             * @param {Boolean} [remove]","             */","            value: function showAndOrCreateTooltip(target, remove) {","                var self = this;","                if (!this.tooltips && this.options.createTooltips) {","                    this.tooltips = new Tooltip(this.getForm(), {","                        containerClass: \"error-tooltip\"","                    });","                }","","                if (!this.options.createTooltips) {","                    return;","                }","","                setTimeout(function () {","                    if (!target.flexFormsSavedValidity) {","                        return;","                    }","                    if (!target.flexFormsSavedValidity.valid && target.classList.contains(INPUT_ERROR_CLASS)) {","                        self.tooltips.createTooltip(target, Form._formatErrorTooltip(target.flexFormsSavedValidationMessage), false);","                    } else {","                        if (remove) {","                            self.tooltips.removeTooltip(target);","                        }","                    }","                }, 0);","            },","            writable: true,","            configurable: true","        },","        _checkIsInvalid: {","","            /**","             * Handles invalid event of a form","             * @param {Event} e","             * @returns {$.Deferred|boolean}","             * @private","             */","            value: function _checkIsInvalid(e) {","                e.preventDefault();","                var invalidFields = this.getForm().querySelectorAll(\":invalid\"),","                    self = this;","                var arr = Form._createArrayFromInvalidFieldList(invalidFields);","                // Prevent fire this N times:","                if (arr.indexOf(e.target) > 0) {","                    return false;","                }","                // focus the first field:","                if (arr.length > 0) {","                    setTimeout(function () {","                        arr[0].focus();","                        self.showAndOrCreateTooltip(arr[0]);","                    }, 0);","                }","","                var validation = self.validateCustomFields();","                this.prepareErrors(arr, true);","                return validation;","            },","            writable: true,","            configurable: true","        },","        initFormValidation: {","","","            /**","             * Initializes validation for a given form, registers event handlers","             */","            value: function initFormValidation() {","                // Suppress the default bubbles","                var form = this.getForm(),","                    invalidFormFired = false,","                    self = this;","                form.addEventListener(\"invalid\", function (e) {","                    var result = self._checkIsInvalid(e);","                    if (result) {","                        this.currentValidationFuture = $.Deferred();","                        result.done(function (r) {","                            self.prepareErrors(r.checkedFields, false);","                            self.currentValidationFuture.resolve(r);","                            invalidFormFired = false;","                        });","                    }","                }, true);","","                // handle focus out for text elements","                // Will show an error if field was invalid the first time","                form.addEventListener(\"blur\", function (e) {","                    if (self.tooltips) {","                        self.tooltips.removeTooltip(e.target);","                    }","                    var target = e.target,","                        hasError = false;","","                    if (!_checkIsValidBlurFocusElement(target)) {","                        return;","                    }","","                    if (target.classList.contains(INPUT_ERROR_CLASS)) {","                        hasError = true;","                    }","                    self._customValidationsForElements([e.target]).done(function () {","                        self.prepareErrors([e.target], false);","                        if (!hasError) {","                            self.showAndOrCreateTooltip(e.target);","                        }","                    });","                }, true);","","                /**","                 * Validates if target is a valid input field to check blur and focus events","                 *","                 * @param {HTMLElement} target","                 * @returns {boolean}","                 */","                function _checkIsValidBlurFocusElement(target) {","                    if (!self.options.inlineValidation) {","                        return false;","                    }","","                    var attr = target.getAttribute(\"type\"),","                        maybeDisableOnBlur = target.hasAttribute(ATTR_DISABLE_INLINE);","                    if (maybeDisableOnBlur) {","                        return false;","                    }","                    return !(attr === \"checkbox\" || attr === \"option\" || attr === \"submit\" || !(target instanceof HTMLSelectElement || target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement));","                }","","                // handle focus on input elements","                // will show an error if field is invalid","                form.addEventListener(\"focus\", function (e) {","                    // do not track errors for checkbox and radios on focus:","                    if (!_checkIsValidBlurFocusElement(e.target)) {","                        return;","                    }","                    self.showAndOrCreateTooltip(e.target);","                }, true);","","                // Handle change for checkbox, radios and selects","                form.addEventListener(\"change\", function (e) {","                    var name = e.target.getAttribute(\"name\");","                    if (name) {","                        var inputs = form.querySelectorAll(\"[name=\\\"\" + name + \"\\\"]\");","                        self._customValidationsForElements(inputs).done(function () {","                            self.prepareErrors(inputs, false);","                            self.showAndOrCreateTooltip(e.target, true);","                        });","                    }","                });","","                // prevent default if form is invalid","                var submitListener = function (e) {","                    self._submitListener(e, submitListener);","                };","                form.addEventListener(\"submit\", submitListener);","            },","            writable: true,","            configurable: true","        },","        _submitListener: {","","            /**","             * Listener that is executed on form submit","             * @param e","             * @param submitListener","             * @returns {boolean}","             * @private","             */","            value: function _submitListener(e, submitListener) {","                var form = this.getForm(),","                    self = this;","","                if (form.classList.contains(LOADING_CLASS)) {","                    e.preventDefault();","                    return false;","                }","","                form.classList.add(LOADING_CLASS);","                form.removeEventListener(\"submit\", submitListener);","                this._removeElementErrors(form);","                e.preventDefault();","                // reset:","                if (form.checkValidity()) {","                    form.addEventListener(\"submit\", submitListener);","                    // Custom validations did never pass","                    self.currentValidationFuture = $.Deferred();","                    var validation = self.validateCustomFields();","                    validation.done(function (r) {","                        // focus first invalid field:","                        for (var i = 0; i < r.checkedFields.length; i++) {","                            var f = r.checkedFields[i];","                            if (!f.validity.valid) {","                                // Focus element and show tooltip, we explicitly showing tooltip here, because","                                // element might have focus already","                                self.showAndOrCreateTooltip(f, true);","                                f.focus();","                                break;","                            }","                        }","                        self.prepareErrors(r.checkedFields, false);","                        self.currentValidationFuture.resolve(r);","                    });","                    self.currentValidationFuture.done(function (r) {","                        form.classList.remove(LOADING_CLASS);","                        if (!r.foundAnyError) {","                            // Handle submitting the form to server:","                            self._handleSubmit(e);","                        }","                    });","                } else {","                    form.classList.remove(LOADING_CLASS);","                    form.addEventListener(\"submit\", submitListener);","                }","            },","            writable: true,","            configurable: true","        },","        _handleSubmit: {","","","            /**","             * Handles submitting, optionally allows to stop submitting","             * @param e","             * @private","             */","            value: function _handleSubmit(e) {","                var obj = {","                    abort: false","                };","                $(this.form).trigger(\"flexcss.form.beforeSubmit\", [e, this, this.form, obj]);","                if (obj.abort === true) {","                    return false;","                }","                this._submitFunction.apply(this, [this.form, e]);","            },","            writable: true,","            configurable: true","        }","    });","","    return Form;","})();","","module.exports = Form;","","","","/**"," * Global validators"," * @type {Array}"," */","Form.globalValidators = [];","","/**"," * Global Remote validation function"," */","Form.globalRemoteValidationFunction = function () {};","","Form.globalErrorMessageHandler = function () {};"]};
	}
	__cov_ne9d3bYaB94HPejJeu9yEA = __cov_ne9d3bYaB94HPejJeu9yEA['/Users/bowlingx/Projekte/flexcss/src/main/Form.js'];
	__cov_ne9d3bYaB94HPejJeu9yEA.s['1']++;var _core=__webpack_require__(4);__cov_ne9d3bYaB94HPejJeu9yEA.s['2']++;var Tooltip=to5Runtime.interopRequire(__webpack_require__(2));__cov_ne9d3bYaB94HPejJeu9yEA.s['3']++;var $=to5Runtime.interopRequire(__webpack_require__(5));__cov_ne9d3bYaB94HPejJeu9yEA.s['4']++;var ERROR_CLASS_NAME='form-error';__cov_ne9d3bYaB94HPejJeu9yEA.s['5']++;var INPUT_ERROR_CLASS='invalid';__cov_ne9d3bYaB94HPejJeu9yEA.s['6']++;var LOADING_CLASS='loading';__cov_ne9d3bYaB94HPejJeu9yEA.s['7']++;var ARIA_INVALID='aria-invalid';__cov_ne9d3bYaB94HPejJeu9yEA.s['8']++;var REMOTE='data-remote';__cov_ne9d3bYaB94HPejJeu9yEA.s['9']++;var REMOTE_ACTION='data-remote-action';__cov_ne9d3bYaB94HPejJeu9yEA.s['10']++;var ATTR_DISABLE_INLINE='data-disable-inline-validation';__cov_ne9d3bYaB94HPejJeu9yEA.s['11']++;var Form=function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['1']++;function Form(form,options){__cov_ne9d3bYaB94HPejJeu9yEA.f['2']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['13']++;to5Runtime.classCallCheck(this,Form);__cov_ne9d3bYaB94HPejJeu9yEA.s['14']++;console.assert(form instanceof HTMLFormElement,'argument {0} form needs to be an form element');__cov_ne9d3bYaB94HPejJeu9yEA.s['15']++;this.form=form;__cov_ne9d3bYaB94HPejJeu9yEA.s['16']++;this.tooltips=null;__cov_ne9d3bYaB94HPejJeu9yEA.s['17']++;this.currentValidationFuture=$.Deferred();__cov_ne9d3bYaB94HPejJeu9yEA.s['18']++;this.options={createTooltips:true,appendError:false,ajaxSubmitType:'POST',ajaxJsonContentType:'application/json; charset=utf-8',inlineValidation:true};__cov_ne9d3bYaB94HPejJeu9yEA.s['19']++;_core.Object.assign(this.options,options);__cov_ne9d3bYaB94HPejJeu9yEA.s['20']++;form.hfWidgetInstance=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['21']++;this._validators=Form.globalValidators;__cov_ne9d3bYaB94HPejJeu9yEA.s['22']++;this._remoteValidationFunction=null;__cov_ne9d3bYaB94HPejJeu9yEA.s['23']++;this.initFormValidation();}__cov_ne9d3bYaB94HPejJeu9yEA.s['24']++;to5Runtime.prototypeProperties(Form,{serializeFormJSON:{value:function serializeFormJSON(form){__cov_ne9d3bYaB94HPejJeu9yEA.f['3']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['25']++;var o={};__cov_ne9d3bYaB94HPejJeu9yEA.s['26']++;var a=form.serializeArray();__cov_ne9d3bYaB94HPejJeu9yEA.s['27']++;$.each(a,function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['4']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['28']++;if(o[this.name]){__cov_ne9d3bYaB94HPejJeu9yEA.b['1'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['29']++;if(!o[this.name].push){__cov_ne9d3bYaB94HPejJeu9yEA.b['2'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['30']++;o[this.name]=[o[this.name]];}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['2'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['31']++;o[this.name].push((__cov_ne9d3bYaB94HPejJeu9yEA.b['3'][0]++,this.value)||(__cov_ne9d3bYaB94HPejJeu9yEA.b['3'][1]++,''));}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['1'][1]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['32']++;o[this.name]=(__cov_ne9d3bYaB94HPejJeu9yEA.b['4'][0]++,this.value)||(__cov_ne9d3bYaB94HPejJeu9yEA.b['4'][1]++,'');}});__cov_ne9d3bYaB94HPejJeu9yEA.s['33']++;return o;},writable:true,configurable:true},_createArrayFromInvalidFieldList:{value:function _createArrayFromInvalidFieldList(list){__cov_ne9d3bYaB94HPejJeu9yEA.f['5']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['34']++;var arr=[];__cov_ne9d3bYaB94HPejJeu9yEA.s['35']++;for(var i=0;i<list.length;++i){__cov_ne9d3bYaB94HPejJeu9yEA.s['36']++;var n=list[i];__cov_ne9d3bYaB94HPejJeu9yEA.s['37']++;if(!(n instanceof HTMLFieldSetElement)){__cov_ne9d3bYaB94HPejJeu9yEA.b['5'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['38']++;arr.push(n);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['5'][1]++;}}__cov_ne9d3bYaB94HPejJeu9yEA.s['39']++;return arr;},writable:true,configurable:true},_formatErrorTooltip:{value:function _formatErrorTooltip(error){__cov_ne9d3bYaB94HPejJeu9yEA.f['6']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['40']++;return'<i class="icon-attention"></i> '+error;},writable:true,configurable:true},registerErrorMessageHandler:{value:function registerErrorMessageHandler(errorFunc){__cov_ne9d3bYaB94HPejJeu9yEA.f['7']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['41']++;Form.globalErrorMessageHandler=errorFunc;},writable:true,configurable:true},init:{value:function init(selector,options){__cov_ne9d3bYaB94HPejJeu9yEA.f['8']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['42']++;var forms=selector instanceof HTMLElement?(__cov_ne9d3bYaB94HPejJeu9yEA.b['6'][0]++,selector.querySelectorAll('form')):(__cov_ne9d3bYaB94HPejJeu9yEA.b['6'][1]++,document.querySelectorAll(selector));__cov_ne9d3bYaB94HPejJeu9yEA.s['43']++;for(var i=0;i<forms.length;i++){__cov_ne9d3bYaB94HPejJeu9yEA.s['44']++;new Form(forms[i],options);}},writable:true,configurable:true},registerValidator:{value:function registerValidator(name,validator){__cov_ne9d3bYaB94HPejJeu9yEA.f['9']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['45']++;Form.globalValidators[name]=validator;__cov_ne9d3bYaB94HPejJeu9yEA.s['46']++;return Form;},writable:true,configurable:true},registerGlobalRemoteValidationFunction:{value:function registerGlobalRemoteValidationFunction(func){__cov_ne9d3bYaB94HPejJeu9yEA.f['10']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['47']++;Form.globalRemoteValidationFunction=func;__cov_ne9d3bYaB94HPejJeu9yEA.s['48']++;return Form;},writable:true,configurable:true}},{_submitFunction:{value:function _submitFunction(thisForm,e){__cov_ne9d3bYaB94HPejJeu9yEA.f['11']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['49']++;var shouldUseAjax=thisForm.getAttribute(REMOTE),ajaxPostUrl=(__cov_ne9d3bYaB94HPejJeu9yEA.b['7'][0]++,thisForm.getAttribute(REMOTE_ACTION))||(__cov_ne9d3bYaB94HPejJeu9yEA.b['7'][1]++,thisForm.getAttribute('action'))||(__cov_ne9d3bYaB94HPejJeu9yEA.b['7'][2]++,window.location.href),useJson='json'===shouldUseAjax,self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['50']++;var ev=jQuery.Event('flexcss.form.submit');__cov_ne9d3bYaB94HPejJeu9yEA.s['51']++;$(thisForm).trigger(ev,[e,this,thisForm]);__cov_ne9d3bYaB94HPejJeu9yEA.s['52']++;if(ev.isDefaultPrevented()){__cov_ne9d3bYaB94HPejJeu9yEA.b['8'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['53']++;thisForm.classList.remove(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['54']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['8'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['55']++;if(null===shouldUseAjax){__cov_ne9d3bYaB94HPejJeu9yEA.b['9'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['56']++;return thisForm.submit();}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['9'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['57']++;thisForm.classList.add(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['58']++;e.preventDefault();__cov_ne9d3bYaB94HPejJeu9yEA.s['59']++;var serverCall=useJson?(__cov_ne9d3bYaB94HPejJeu9yEA.b['10'][0]++,$.ajax({contentType:this.options.ajaxJsonContentType,type:this.options.ajaxSubmitType,url:ajaxPostUrl,data:JSON.stringify(Form.serializeFormJSON($(thisForm)))})):(__cov_ne9d3bYaB94HPejJeu9yEA.b['10'][1]++,$.ajax({type:this.options.ajaxSubmitType,url:ajaxPostUrl,data:$(thisForm).serialize()}));__cov_ne9d3bYaB94HPejJeu9yEA.s['60']++;$(thisForm).trigger('flexcss.form.afterAjaxSubmit',[e,this,thisForm]);__cov_ne9d3bYaB94HPejJeu9yEA.s['61']++;serverCall.then(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['12']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['62']++;return $.Deferred().resolve(r);}).always(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['13']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['63']++;((__cov_ne9d3bYaB94HPejJeu9yEA.b['11'][0]++,self._remoteValidationFunction)||(__cov_ne9d3bYaB94HPejJeu9yEA.b['11'][1]++,Form.globalRemoteValidationFunction)).apply(self,[r]);__cov_ne9d3bYaB94HPejJeu9yEA.s['64']++;$(thisForm).trigger('flexcss.form.ajaxCompleted',[e,self,thisForm,r]);__cov_ne9d3bYaB94HPejJeu9yEA.s['65']++;thisForm.classList.remove(LOADING_CLASS);});},writable:true,configurable:true},_setupErrorMessages:{value:function _setupErrorMessages(field,validity){__cov_ne9d3bYaB94HPejJeu9yEA.f['14']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['66']++;return Form.globalErrorMessageHandler?(__cov_ne9d3bYaB94HPejJeu9yEA.b['12'][0]++,Form.globalErrorMessageHandler.apply(this,[field,validity])):(__cov_ne9d3bYaB94HPejJeu9yEA.b['12'][1]++,false);},writable:true,configurable:true},_removeElementErrors:{value:function _removeElementErrors(thisParent){__cov_ne9d3bYaB94HPejJeu9yEA.f['15']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['67']++;var errors=thisParent.querySelectorAll('.'+ERROR_CLASS_NAME),inputsWithErrorClasses=thisParent.querySelectorAll('.'+INPUT_ERROR_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['68']++;for(var elementErrorIndex=0;elementErrorIndex<errors.length;elementErrorIndex++){__cov_ne9d3bYaB94HPejJeu9yEA.s['69']++;errors[elementErrorIndex].parentNode.removeChild(errors[elementErrorIndex]);}__cov_ne9d3bYaB94HPejJeu9yEA.s['70']++;for(var inputErrorIndex=0;inputErrorIndex<inputsWithErrorClasses.length;inputErrorIndex++){__cov_ne9d3bYaB94HPejJeu9yEA.s['71']++;inputsWithErrorClasses[inputErrorIndex].classList.remove(INPUT_ERROR_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['72']++;if(this.tooltips){__cov_ne9d3bYaB94HPejJeu9yEA.b['13'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['73']++;this.tooltips.removeTooltip(inputsWithErrorClasses[inputErrorIndex]);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['13'][1]++;}}},writable:true,configurable:true},registerValidator:{value:function registerValidator(name,validator){__cov_ne9d3bYaB94HPejJeu9yEA.f['16']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['74']++;this._validators[name]=validator;__cov_ne9d3bYaB94HPejJeu9yEA.s['75']++;return this;},writable:true,configurable:true},_runValidation:{value:function _runValidation(validationRef,field){__cov_ne9d3bYaB94HPejJeu9yEA.f['17']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['76']++;if(!this._validators[validationRef]){__cov_ne9d3bYaB94HPejJeu9yEA.b['14'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['77']++;throw'Could not found validator: '+validationRef;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['14'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['78']++;var cl=field.classList,future=this._validators[validationRef].apply(this,[field,this.form]);__cov_ne9d3bYaB94HPejJeu9yEA.s['79']++;cl.add(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['80']++;future.always(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['18']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['81']++;cl.remove(LOADING_CLASS);});__cov_ne9d3bYaB94HPejJeu9yEA.s['82']++;return future;},writable:true,configurable:true},_customValidationsForElements:{value:function _customValidationsForElements(fields){__cov_ne9d3bYaB94HPejJeu9yEA.f['19']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['83']++;var futures=[],fieldsLength=fields.length,checkedFields=[];__cov_ne9d3bYaB94HPejJeu9yEA.s['84']++;for(var iVal=0;iVal<fieldsLength;iVal++){__cov_ne9d3bYaB94HPejJeu9yEA.s['85']++;var field=fields[iVal],validationRef=field.getAttribute('data-validate'),validity=field.validity;__cov_ne9d3bYaB94HPejJeu9yEA.s['86']++;if(this._validators[validationRef]){__cov_ne9d3bYaB94HPejJeu9yEA.b['15'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['87']++;if((__cov_ne9d3bYaB94HPejJeu9yEA.b['17'][0]++,!validity.customError)&&(__cov_ne9d3bYaB94HPejJeu9yEA.b['17'][1]++,!validity.valid)){__cov_ne9d3bYaB94HPejJeu9yEA.b['16'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['88']++;continue;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['16'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['89']++;checkedFields.push(field);__cov_ne9d3bYaB94HPejJeu9yEA.s['90']++;futures.push(this._runValidation(validationRef,field));}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['15'][1]++;}}__cov_ne9d3bYaB94HPejJeu9yEA.s['91']++;return $.when.apply(this,futures).then(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['20']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['92']++;var allFutures=arguments,l=allFutures.length;__cov_ne9d3bYaB94HPejJeu9yEA.s['93']++;var result={checkedFields:checkedFields,foundAnyError:false};__cov_ne9d3bYaB94HPejJeu9yEA.s['94']++;for(var fI=0;fI<l;fI++){__cov_ne9d3bYaB94HPejJeu9yEA.s['95']++;if(!allFutures[fI]){__cov_ne9d3bYaB94HPejJeu9yEA.b['18'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['96']++;result.foundAnyError=true;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['18'][1]++;}}__cov_ne9d3bYaB94HPejJeu9yEA.s['97']++;return $.Deferred().resolve(result);});},writable:true,configurable:true},removeErrors:{value:function removeErrors(){__cov_ne9d3bYaB94HPejJeu9yEA.f['21']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['98']++;this._removeElementErrors(this.form);__cov_ne9d3bYaB94HPejJeu9yEA.s['99']++;return this;},writable:true,configurable:true},prepareErrors:{value:function prepareErrors(fields,removeAllErrors){__cov_ne9d3bYaB94HPejJeu9yEA.f['22']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['100']++;if(removeAllErrors){__cov_ne9d3bYaB94HPejJeu9yEA.b['19'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['101']++;this._removeElementErrors(this.form);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['19'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['102']++;for(var i=0;i<fields.length;i++){__cov_ne9d3bYaB94HPejJeu9yEA.s['103']++;var field=fields[i],parent=field.parentNode,validity=field.validity;__cov_ne9d3bYaB94HPejJeu9yEA.s['104']++;field.flexFormsSavedValidity=JSON.parse(JSON.stringify(validity));__cov_ne9d3bYaB94HPejJeu9yEA.s['105']++;if((__cov_ne9d3bYaB94HPejJeu9yEA.b['21'][0]++,validity)&&(__cov_ne9d3bYaB94HPejJeu9yEA.b['21'][1]++,!validity.valid)){__cov_ne9d3bYaB94HPejJeu9yEA.b['20'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['106']++;if(!removeAllErrors){__cov_ne9d3bYaB94HPejJeu9yEA.b['22'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['107']++;this._removeElementErrors(parent);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['22'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['108']++;this._setupErrorMessages(field,validity);__cov_ne9d3bYaB94HPejJeu9yEA.s['109']++;field.classList.add('invalid');__cov_ne9d3bYaB94HPejJeu9yEA.s['110']++;field.setAttribute(ARIA_INVALID,'true');__cov_ne9d3bYaB94HPejJeu9yEA.s['111']++;if(this.options.appendError){__cov_ne9d3bYaB94HPejJeu9yEA.b['23'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['112']++;parent.insertAdjacentHTML('beforeend','<div class="'+ERROR_CLASS_NAME+'">'+field.validationMessage+'</div>');}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['23'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['113']++;field.flexFormsSavedValidationMessage=field.validationMessage;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['20'][1]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['114']++;field.classList.remove('invalid');__cov_ne9d3bYaB94HPejJeu9yEA.s['115']++;field.setAttribute(ARIA_INVALID,'false');__cov_ne9d3bYaB94HPejJeu9yEA.s['116']++;this._removeElementErrors(parent);}__cov_ne9d3bYaB94HPejJeu9yEA.s['117']++;field.setCustomValidity('');}},writable:true,configurable:true},validateCustomFields:{value:function validateCustomFields(){__cov_ne9d3bYaB94HPejJeu9yEA.f['23']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['118']++;return this._customValidationsForElements(this.form.querySelectorAll('[data-validate]'));},writable:true,configurable:true},getForm:{value:function getForm(){__cov_ne9d3bYaB94HPejJeu9yEA.f['24']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['119']++;return this.form;},writable:true,configurable:true},registerRemoteValidation:{value:function registerRemoteValidation(func){__cov_ne9d3bYaB94HPejJeu9yEA.f['25']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['120']++;this._remoteValidationFunction=func;__cov_ne9d3bYaB94HPejJeu9yEA.s['121']++;return this;},writable:true,configurable:true},showAndOrCreateTooltip:{value:function showAndOrCreateTooltip(target,remove){__cov_ne9d3bYaB94HPejJeu9yEA.f['26']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['122']++;var self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['123']++;if((__cov_ne9d3bYaB94HPejJeu9yEA.b['25'][0]++,!this.tooltips)&&(__cov_ne9d3bYaB94HPejJeu9yEA.b['25'][1]++,this.options.createTooltips)){__cov_ne9d3bYaB94HPejJeu9yEA.b['24'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['124']++;this.tooltips=new Tooltip(this.getForm(),{containerClass:'error-tooltip'});}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['24'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['125']++;if(!this.options.createTooltips){__cov_ne9d3bYaB94HPejJeu9yEA.b['26'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['126']++;return;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['26'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['127']++;setTimeout(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['27']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['128']++;if(!target.flexFormsSavedValidity){__cov_ne9d3bYaB94HPejJeu9yEA.b['27'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['129']++;return;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['27'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['130']++;if((__cov_ne9d3bYaB94HPejJeu9yEA.b['29'][0]++,!target.flexFormsSavedValidity.valid)&&(__cov_ne9d3bYaB94HPejJeu9yEA.b['29'][1]++,target.classList.contains(INPUT_ERROR_CLASS))){__cov_ne9d3bYaB94HPejJeu9yEA.b['28'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['131']++;self.tooltips.createTooltip(target,Form._formatErrorTooltip(target.flexFormsSavedValidationMessage),false);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['28'][1]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['132']++;if(remove){__cov_ne9d3bYaB94HPejJeu9yEA.b['30'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['133']++;self.tooltips.removeTooltip(target);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['30'][1]++;}}},0);},writable:true,configurable:true},_checkIsInvalid:{value:function _checkIsInvalid(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['28']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['134']++;e.preventDefault();__cov_ne9d3bYaB94HPejJeu9yEA.s['135']++;var invalidFields=this.getForm().querySelectorAll(':invalid'),self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['136']++;var arr=Form._createArrayFromInvalidFieldList(invalidFields);__cov_ne9d3bYaB94HPejJeu9yEA.s['137']++;if(arr.indexOf(e.target)>0){__cov_ne9d3bYaB94HPejJeu9yEA.b['31'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['138']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['31'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['139']++;if(arr.length>0){__cov_ne9d3bYaB94HPejJeu9yEA.b['32'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['140']++;setTimeout(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['29']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['141']++;arr[0].focus();__cov_ne9d3bYaB94HPejJeu9yEA.s['142']++;self.showAndOrCreateTooltip(arr[0]);},0);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['32'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['143']++;var validation=self.validateCustomFields();__cov_ne9d3bYaB94HPejJeu9yEA.s['144']++;this.prepareErrors(arr,true);__cov_ne9d3bYaB94HPejJeu9yEA.s['145']++;return validation;},writable:true,configurable:true},initFormValidation:{value:function initFormValidation(){__cov_ne9d3bYaB94HPejJeu9yEA.f['30']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['146']++;var form=this.getForm(),invalidFormFired=false,self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['147']++;form.addEventListener('invalid',function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['31']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['148']++;var result=self._checkIsInvalid(e);__cov_ne9d3bYaB94HPejJeu9yEA.s['149']++;if(result){__cov_ne9d3bYaB94HPejJeu9yEA.b['33'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['150']++;this.currentValidationFuture=$.Deferred();__cov_ne9d3bYaB94HPejJeu9yEA.s['151']++;result.done(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['32']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['152']++;self.prepareErrors(r.checkedFields,false);__cov_ne9d3bYaB94HPejJeu9yEA.s['153']++;self.currentValidationFuture.resolve(r);__cov_ne9d3bYaB94HPejJeu9yEA.s['154']++;invalidFormFired=false;});}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['33'][1]++;}},true);__cov_ne9d3bYaB94HPejJeu9yEA.s['155']++;form.addEventListener('blur',function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['33']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['156']++;if(self.tooltips){__cov_ne9d3bYaB94HPejJeu9yEA.b['34'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['157']++;self.tooltips.removeTooltip(e.target);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['34'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['158']++;var target=e.target,hasError=false;__cov_ne9d3bYaB94HPejJeu9yEA.s['159']++;if(!_checkIsValidBlurFocusElement(target)){__cov_ne9d3bYaB94HPejJeu9yEA.b['35'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['160']++;return;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['35'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['161']++;if(target.classList.contains(INPUT_ERROR_CLASS)){__cov_ne9d3bYaB94HPejJeu9yEA.b['36'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['162']++;hasError=true;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['36'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['163']++;self._customValidationsForElements([e.target]).done(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['34']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['164']++;self.prepareErrors([e.target],false);__cov_ne9d3bYaB94HPejJeu9yEA.s['165']++;if(!hasError){__cov_ne9d3bYaB94HPejJeu9yEA.b['37'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['166']++;self.showAndOrCreateTooltip(e.target);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['37'][1]++;}});},true);function _checkIsValidBlurFocusElement(target){__cov_ne9d3bYaB94HPejJeu9yEA.f['35']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['168']++;if(!self.options.inlineValidation){__cov_ne9d3bYaB94HPejJeu9yEA.b['38'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['169']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['38'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['170']++;var attr=target.getAttribute('type'),maybeDisableOnBlur=target.hasAttribute(ATTR_DISABLE_INLINE);__cov_ne9d3bYaB94HPejJeu9yEA.s['171']++;if(maybeDisableOnBlur){__cov_ne9d3bYaB94HPejJeu9yEA.b['39'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['172']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['39'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['173']++;return!((__cov_ne9d3bYaB94HPejJeu9yEA.b['40'][0]++,attr==='checkbox')||(__cov_ne9d3bYaB94HPejJeu9yEA.b['40'][1]++,attr==='option')||(__cov_ne9d3bYaB94HPejJeu9yEA.b['40'][2]++,attr==='submit')||(__cov_ne9d3bYaB94HPejJeu9yEA.b['40'][3]++,!((__cov_ne9d3bYaB94HPejJeu9yEA.b['41'][0]++,target instanceof HTMLSelectElement)||(__cov_ne9d3bYaB94HPejJeu9yEA.b['41'][1]++,target instanceof HTMLInputElement)||(__cov_ne9d3bYaB94HPejJeu9yEA.b['41'][2]++,target instanceof HTMLTextAreaElement))));}__cov_ne9d3bYaB94HPejJeu9yEA.s['174']++;form.addEventListener('focus',function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['36']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['175']++;if(!_checkIsValidBlurFocusElement(e.target)){__cov_ne9d3bYaB94HPejJeu9yEA.b['42'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['176']++;return;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['42'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['177']++;self.showAndOrCreateTooltip(e.target);},true);__cov_ne9d3bYaB94HPejJeu9yEA.s['178']++;form.addEventListener('change',function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['37']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['179']++;var name=e.target.getAttribute('name');__cov_ne9d3bYaB94HPejJeu9yEA.s['180']++;if(name){__cov_ne9d3bYaB94HPejJeu9yEA.b['43'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['181']++;var inputs=form.querySelectorAll('[name="'+name+'"]');__cov_ne9d3bYaB94HPejJeu9yEA.s['182']++;self._customValidationsForElements(inputs).done(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['38']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['183']++;self.prepareErrors(inputs,false);__cov_ne9d3bYaB94HPejJeu9yEA.s['184']++;self.showAndOrCreateTooltip(e.target,true);});}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['43'][1]++;}});__cov_ne9d3bYaB94HPejJeu9yEA.s['185']++;var submitListener=function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['39']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['186']++;self._submitListener(e,submitListener);};__cov_ne9d3bYaB94HPejJeu9yEA.s['187']++;form.addEventListener('submit',submitListener);},writable:true,configurable:true},_submitListener:{value:function _submitListener(e,submitListener){__cov_ne9d3bYaB94HPejJeu9yEA.f['40']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['188']++;var form=this.getForm(),self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['189']++;if(form.classList.contains(LOADING_CLASS)){__cov_ne9d3bYaB94HPejJeu9yEA.b['44'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['190']++;e.preventDefault();__cov_ne9d3bYaB94HPejJeu9yEA.s['191']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['44'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['192']++;form.classList.add(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['193']++;form.removeEventListener('submit',submitListener);__cov_ne9d3bYaB94HPejJeu9yEA.s['194']++;this._removeElementErrors(form);__cov_ne9d3bYaB94HPejJeu9yEA.s['195']++;e.preventDefault();__cov_ne9d3bYaB94HPejJeu9yEA.s['196']++;if(form.checkValidity()){__cov_ne9d3bYaB94HPejJeu9yEA.b['45'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['197']++;form.addEventListener('submit',submitListener);__cov_ne9d3bYaB94HPejJeu9yEA.s['198']++;self.currentValidationFuture=$.Deferred();__cov_ne9d3bYaB94HPejJeu9yEA.s['199']++;var validation=self.validateCustomFields();__cov_ne9d3bYaB94HPejJeu9yEA.s['200']++;validation.done(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['41']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['201']++;for(var i=0;i<r.checkedFields.length;i++){__cov_ne9d3bYaB94HPejJeu9yEA.s['202']++;var f=r.checkedFields[i];__cov_ne9d3bYaB94HPejJeu9yEA.s['203']++;if(!f.validity.valid){__cov_ne9d3bYaB94HPejJeu9yEA.b['46'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['204']++;self.showAndOrCreateTooltip(f,true);__cov_ne9d3bYaB94HPejJeu9yEA.s['205']++;f.focus();__cov_ne9d3bYaB94HPejJeu9yEA.s['206']++;break;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['46'][1]++;}}__cov_ne9d3bYaB94HPejJeu9yEA.s['207']++;self.prepareErrors(r.checkedFields,false);__cov_ne9d3bYaB94HPejJeu9yEA.s['208']++;self.currentValidationFuture.resolve(r);});__cov_ne9d3bYaB94HPejJeu9yEA.s['209']++;self.currentValidationFuture.done(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['42']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['210']++;form.classList.remove(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['211']++;if(!r.foundAnyError){__cov_ne9d3bYaB94HPejJeu9yEA.b['47'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['212']++;self._handleSubmit(e);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['47'][1]++;}});}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['45'][1]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['213']++;form.classList.remove(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['214']++;form.addEventListener('submit',submitListener);}},writable:true,configurable:true},_handleSubmit:{value:function _handleSubmit(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['43']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['215']++;var obj={abort:false};__cov_ne9d3bYaB94HPejJeu9yEA.s['216']++;$(this.form).trigger('flexcss.form.beforeSubmit',[e,this,this.form,obj]);__cov_ne9d3bYaB94HPejJeu9yEA.s['217']++;if(obj.abort===true){__cov_ne9d3bYaB94HPejJeu9yEA.b['48'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['218']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['48'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['219']++;this._submitFunction.apply(this,[this.form,e]);},writable:true,configurable:true}});__cov_ne9d3bYaB94HPejJeu9yEA.s['220']++;return Form;}();__cov_ne9d3bYaB94HPejJeu9yEA.s['221']++;module.exports=Form;__cov_ne9d3bYaB94HPejJeu9yEA.s['222']++;Form.globalValidators=[];__cov_ne9d3bYaB94HPejJeu9yEA.s['223']++;Form.globalRemoteValidationFunction=function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['44']++;};__cov_ne9d3bYaB94HPejJeu9yEA.s['224']++;Form.globalErrorMessageHandler=function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['45']++;};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";
	var __cov_QU3vbYO7toUg5tTrpu4LEg = (Function('return this'))();
	if (!__cov_QU3vbYO7toUg5tTrpu4LEg.__coverage__) { __cov_QU3vbYO7toUg5tTrpu4LEg.__coverage__ = {}; }
	__cov_QU3vbYO7toUg5tTrpu4LEg = __cov_QU3vbYO7toUg5tTrpu4LEg.__coverage__;
	if (!(__cov_QU3vbYO7toUg5tTrpu4LEg['/Users/bowlingx/Projekte/flexcss/src/main/Tooltip.js'])) {
	   __cov_QU3vbYO7toUg5tTrpu4LEg['/Users/bowlingx/Projekte/flexcss/src/main/Tooltip.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/main/Tooltip.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":1,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":11,"loc":{"start":{"line":11,"column":15},"end":{"line":11,"column":27}}},"2":{"name":"Tooltip","line":17,"loc":{"start":{"line":17,"column":4},"end":{"line":17,"column":49}}},"3":{"name":"createTooltip","line":54,"loc":{"start":{"line":54,"column":19},"end":{"line":54,"column":69}}},"4":{"name":"removeTooltip","line":105,"loc":{"start":{"line":105,"column":19},"end":{"line":105,"column":50}}},"5":{"name":"registerEvents","line":124,"loc":{"start":{"line":124,"column":19},"end":{"line":124,"column":45}}},"6":{"name":"(anonymous_6)","line":126,"loc":{"start":{"line":126,"column":61},"end":{"line":126,"column":74}}},"7":{"name":"(anonymous_7)","line":132,"loc":{"start":{"line":132,"column":60},"end":{"line":132,"column":73}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":44}},"2":{"start":{"line":5,"column":0},"end":{"line":5,"column":46}},"3":{"start":{"line":6,"column":0},"end":{"line":6,"column":34}},"4":{"start":{"line":7,"column":0},"end":{"line":7,"column":40}},"5":{"start":{"line":8,"column":0},"end":{"line":8,"column":30}},"6":{"start":{"line":9,"column":0},"end":{"line":9,"column":19}},"7":{"start":{"line":11,"column":0},"end":{"line":145,"column":5}},"8":{"start":{"line":17,"column":4},"end":{"line":43,"column":5}},"9":{"start":{"line":18,"column":8},"end":{"line":18,"column":49}},"10":{"start":{"line":23,"column":8},"end":{"line":23,"column":126}},"11":{"start":{"line":25,"column":8},"end":{"line":27,"column":9}},"12":{"start":{"line":26,"column":12},"end":{"line":26,"column":74}},"13":{"start":{"line":33,"column":8},"end":{"line":33,"column":37}},"14":{"start":{"line":38,"column":8},"end":{"line":40,"column":10}},"15":{"start":{"line":42,"column":8},"end":{"line":42,"column":51}},"16":{"start":{"line":45,"column":4},"end":{"line":142,"column":7}},"17":{"start":{"line":56,"column":16},"end":{"line":56,"column":32}},"18":{"start":{"line":57,"column":16},"end":{"line":59,"column":17}},"19":{"start":{"line":58,"column":20},"end":{"line":58,"column":27}},"20":{"start":{"line":60,"column":16},"end":{"line":60,"column":61}},"21":{"start":{"line":62,"column":16},"end":{"line":67,"column":17}},"22":{"start":{"line":63,"column":20},"end":{"line":63,"column":64}},"23":{"start":{"line":64,"column":20},"end":{"line":64,"column":110}},"24":{"start":{"line":65,"column":20},"end":{"line":65,"column":65}},"25":{"start":{"line":66,"column":20},"end":{"line":66,"column":61}},"26":{"start":{"line":68,"column":16},"end":{"line":68,"column":53}},"27":{"start":{"line":69,"column":16},"end":{"line":69,"column":52}},"28":{"start":{"line":70,"column":16},"end":{"line":70,"column":50}},"29":{"start":{"line":71,"column":16},"end":{"line":71,"column":67}},"30":{"start":{"line":72,"column":16},"end":{"line":75,"column":17}},"31":{"start":{"line":73,"column":20},"end":{"line":73,"column":43}},"32":{"start":{"line":74,"column":20},"end":{"line":74,"column":52}},"33":{"start":{"line":76,"column":16},"end":{"line":77,"column":69}},"34":{"start":{"line":80,"column":16},"end":{"line":83,"column":59}},"35":{"start":{"line":84,"column":16},"end":{"line":92,"column":17}},"36":{"start":{"line":85,"column":20},"end":{"line":85,"column":88}},"37":{"start":{"line":86,"column":20},"end":{"line":86,"column":57}},"38":{"start":{"line":87,"column":20},"end":{"line":87,"column":51}},"39":{"start":{"line":89,"column":20},"end":{"line":89,"column":54}},"40":{"start":{"line":90,"column":20},"end":{"line":90,"column":54}},"41":{"start":{"line":91,"column":20},"end":{"line":91,"column":103}},"42":{"start":{"line":93,"column":16},"end":{"line":93,"column":140}},"43":{"start":{"line":94,"column":16},"end":{"line":94,"column":48}},"44":{"start":{"line":106,"column":16},"end":{"line":111,"column":17}},"45":{"start":{"line":107,"column":20},"end":{"line":109,"column":21}},"46":{"start":{"line":108,"column":24},"end":{"line":108,"column":31}},"47":{"start":{"line":110,"column":20},"end":{"line":110,"column":67}},"48":{"start":{"line":112,"column":16},"end":{"line":114,"column":17}},"49":{"start":{"line":113,"column":20},"end":{"line":113,"column":66}},"50":{"start":{"line":125,"column":16},"end":{"line":125,"column":32}},"51":{"start":{"line":126,"column":16},"end":{"line":130,"column":19}},"52":{"start":{"line":127,"column":20},"end":{"line":129,"column":21}},"53":{"start":{"line":128,"column":24},"end":{"line":128,"column":91}},"54":{"start":{"line":132,"column":16},"end":{"line":136,"column":19}},"55":{"start":{"line":133,"column":20},"end":{"line":135,"column":21}},"56":{"start":{"line":134,"column":24},"end":{"line":134,"column":53}},"57":{"start":{"line":137,"column":16},"end":{"line":137,"column":28}},"58":{"start":{"line":144,"column":4},"end":{"line":144,"column":19}},"59":{"start":{"line":147,"column":0},"end":{"line":147,"column":25}}},"branchMap":{"1":{"line":23,"type":"cond-expr","locations":[{"start":{"line":23,"column":68},"end":{"line":23,"column":85}},{"start":{"line":23,"column":88},"end":{"line":23,"column":125}}]},"2":{"line":25,"type":"if","locations":[{"start":{"line":25,"column":8},"end":{"line":25,"column":8}},{"start":{"line":25,"column":8},"end":{"line":25,"column":8}}]},"3":{"line":57,"type":"if","locations":[{"start":{"line":57,"column":16},"end":{"line":57,"column":16}},{"start":{"line":57,"column":16},"end":{"line":57,"column":16}}]},"4":{"line":57,"type":"binary-expr","locations":[{"start":{"line":57,"column":20},"end":{"line":57,"column":25}},{"start":{"line":57,"column":29},"end":{"line":57,"column":33}},{"start":{"line":57,"column":37},"end":{"line":57,"column":55}}]},"5":{"line":62,"type":"if","locations":[{"start":{"line":62,"column":16},"end":{"line":62,"column":16}},{"start":{"line":62,"column":16},"end":{"line":62,"column":16}}]},"6":{"line":72,"type":"if","locations":[{"start":{"line":72,"column":16},"end":{"line":72,"column":16}},{"start":{"line":72,"column":16},"end":{"line":72,"column":16}}]},"7":{"line":84,"type":"if","locations":[{"start":{"line":84,"column":16},"end":{"line":84,"column":16}},{"start":{"line":84,"column":16},"end":{"line":84,"column":16}}]},"8":{"line":93,"type":"binary-expr","locations":[{"start":{"line":93,"column":47},"end":{"line":93,"column":111}},{"start":{"line":93,"column":115},"end":{"line":93,"column":116}}]},"9":{"line":106,"type":"if","locations":[{"start":{"line":106,"column":16},"end":{"line":106,"column":16}},{"start":{"line":106,"column":16},"end":{"line":106,"column":16}}]},"10":{"line":107,"type":"if","locations":[{"start":{"line":107,"column":20},"end":{"line":107,"column":20}},{"start":{"line":107,"column":20},"end":{"line":107,"column":20}}]},"11":{"line":112,"type":"if","locations":[{"start":{"line":112,"column":16},"end":{"line":112,"column":16}},{"start":{"line":112,"column":16},"end":{"line":112,"column":16}}]},"12":{"line":127,"type":"if","locations":[{"start":{"line":127,"column":20},"end":{"line":127,"column":20}},{"start":{"line":127,"column":20},"end":{"line":127,"column":20}}]},"13":{"line":133,"type":"if","locations":[{"start":{"line":133,"column":20},"end":{"line":133,"column":20}},{"start":{"line":133,"column":20},"end":{"line":133,"column":20}}]}},"code":["\"use strict\";","","var _core = require(\"6to5-runtime/core-js\");","","var CLASS_NAMES_TOOLTIP = \"tooltip-container\";","var CLASS_NAMES_TOP = \"arrow-top\";","var CLASS_NAMES_BOTTOM = \"arrow-bottom\";","var CLASS_NAMES_OPEN = \"open\";","var doc = document;","","var Tooltip = (function () {","    /**","     * Creates a Tooltip","     * @param {HTMLElement|String} DelegateContainer","     * @param {Object} options","     */","    function Tooltip(DelegateContainer, options) {","        to5Runtime.classCallCheck(this, Tooltip);","","        /**","         * The Container where possible events are captured","         */","        this.container = DelegateContainer instanceof HTMLElement ? DelegateContainer : doc.getElementById(DelegateContainer);","","        if (!this.container) {","            throw \"Could not create Tooltip, DelegateContainer not found\";","        }","","        /**","         * The Container where tooltips are stored for this instance","         * @type {HTMLElement}","         */","        this.tooltipContainer = null;","","        /**","         * Default Options","         */","        this.options = {","            containerClass: \"\"","        };","","        _core.Object.assign(this.options, options);","    }","","    to5Runtime.prototypeProperties(Tooltip, null, {","        createTooltip: {","","            /**","             * Creates and shows a tooltip","             * @param {HTMLElement} target where is this tooltip positioned","             * @param {String} text text content in tooltip, will be NOT escaped","             * @param {Boolean} removeTitle removes title element if given","             */","            value: function createTooltip(target, text, removeTitle) {","                // abort if text is empty","                var self = this;","                if (!text || text && text.trim() === \"\") {","                    return;","                }","                var tooltipContainer = this.tooltipContainer;","","                if (!tooltipContainer) {","                    tooltipContainer = doc.createElement(\"div\");","                    tooltipContainer.className = [CLASS_NAMES_TOOLTIP, self.options.containerClass].join(\" \");","                    this.container.appendChild(tooltipContainer);","                    this.tooltipContainer = tooltipContainer;","                }","                tooltipContainer.style.left = \"auto\";","                tooltipContainer.style.top = \"auto\";","                tooltipContainer.innerHTML = text;","                tooltipContainer.flexTooltipCurrentTarget = target;","                if (removeTitle) {","                    target.oldTitle = text;","                    target.removeAttribute(\"title\");","                }","                var targetRect = target.getBoundingClientRect(),","                    colRect = this.container.getBoundingClientRect();","","                // detect if we have a collision with top/or bottom, we do not support left/right","                var containerRect = tooltipContainer.getBoundingClientRect(),","                    targetTop = targetRect.top,","                    isCollisionTop = 0 >= targetTop - containerRect.height,","                    classList = tooltipContainer.classList;","                if (isCollisionTop) {","                    tooltipContainer.style.top = targetRect.bottom - colRect.top + \"px\";","                    classList.remove(CLASS_NAMES_BOTTOM);","                    classList.add(CLASS_NAMES_TOP);","                } else {","                    classList.remove(CLASS_NAMES_TOP);","                    classList.add(CLASS_NAMES_BOTTOM);","                    tooltipContainer.style.top = targetTop - containerRect.height - colRect.top + \"px\";","                }","                tooltipContainer.style.left = (targetRect.left + targetRect.width / 2 - containerRect.width / 2 || 0) - colRect.left + \"px\";","                classList.add(CLASS_NAMES_OPEN);","            },","            writable: true,","            configurable: true","        },","        removeTooltip: {","","            /**","             * Removes a Tooltip on given target","             * @param {HTMLElement} target","             */","            value: function removeTooltip(target) {","                if (this.tooltipContainer) {","                    if (this.tooltipContainer.flexTooltipCurrentTarget !== target) {","                        return;","                    }","                    this.tooltipContainer.classList.remove(\"open\");","                }","                if (target.oldTitle) {","                    target.setAttribute(\"title\", target.oldTitle);","                }","            },","            writable: true,","            configurable: true","        },","        registerEvents: {","","            /**","             * Initilizes mouse events on container element","             */","            value: function registerEvents() {","                var self = this;","                this.container.addEventListener(\"mouseover\", function (e) {","                    if (e.target.hasAttribute(\"data-tooltip\")) {","                        self.createTooltip(e.target, e.target.getAttribute(\"title\"), true);","                    }","                });","","                this.container.addEventListener(\"mouseout\", function (e) {","                    if (e.target.hasAttribute(\"data-tooltip\")) {","                        self.removeTooltip(e.target);","                    }","                });","                return this;","            },","            writable: true,","            configurable: true","        }","    });","","    return Tooltip;","})();","","module.exports = Tooltip;"]};
	}
	__cov_QU3vbYO7toUg5tTrpu4LEg = __cov_QU3vbYO7toUg5tTrpu4LEg['/Users/bowlingx/Projekte/flexcss/src/main/Tooltip.js'];
	__cov_QU3vbYO7toUg5tTrpu4LEg.s['1']++;var _core=__webpack_require__(4);__cov_QU3vbYO7toUg5tTrpu4LEg.s['2']++;var CLASS_NAMES_TOOLTIP='tooltip-container';__cov_QU3vbYO7toUg5tTrpu4LEg.s['3']++;var CLASS_NAMES_TOP='arrow-top';__cov_QU3vbYO7toUg5tTrpu4LEg.s['4']++;var CLASS_NAMES_BOTTOM='arrow-bottom';__cov_QU3vbYO7toUg5tTrpu4LEg.s['5']++;var CLASS_NAMES_OPEN='open';__cov_QU3vbYO7toUg5tTrpu4LEg.s['6']++;var doc=document;__cov_QU3vbYO7toUg5tTrpu4LEg.s['7']++;var Tooltip=function(){__cov_QU3vbYO7toUg5tTrpu4LEg.f['1']++;function Tooltip(DelegateContainer,options){__cov_QU3vbYO7toUg5tTrpu4LEg.f['2']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['9']++;to5Runtime.classCallCheck(this,Tooltip);__cov_QU3vbYO7toUg5tTrpu4LEg.s['10']++;this.container=DelegateContainer instanceof HTMLElement?(__cov_QU3vbYO7toUg5tTrpu4LEg.b['1'][0]++,DelegateContainer):(__cov_QU3vbYO7toUg5tTrpu4LEg.b['1'][1]++,doc.getElementById(DelegateContainer));__cov_QU3vbYO7toUg5tTrpu4LEg.s['11']++;if(!this.container){__cov_QU3vbYO7toUg5tTrpu4LEg.b['2'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['12']++;throw'Could not create Tooltip, DelegateContainer not found';}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['2'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['13']++;this.tooltipContainer=null;__cov_QU3vbYO7toUg5tTrpu4LEg.s['14']++;this.options={containerClass:''};__cov_QU3vbYO7toUg5tTrpu4LEg.s['15']++;_core.Object.assign(this.options,options);}__cov_QU3vbYO7toUg5tTrpu4LEg.s['16']++;to5Runtime.prototypeProperties(Tooltip,null,{createTooltip:{value:function createTooltip(target,text,removeTitle){__cov_QU3vbYO7toUg5tTrpu4LEg.f['3']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['17']++;var self=this;__cov_QU3vbYO7toUg5tTrpu4LEg.s['18']++;if((__cov_QU3vbYO7toUg5tTrpu4LEg.b['4'][0]++,!text)||(__cov_QU3vbYO7toUg5tTrpu4LEg.b['4'][1]++,text)&&(__cov_QU3vbYO7toUg5tTrpu4LEg.b['4'][2]++,text.trim()==='')){__cov_QU3vbYO7toUg5tTrpu4LEg.b['3'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['19']++;return;}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['3'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['20']++;var tooltipContainer=this.tooltipContainer;__cov_QU3vbYO7toUg5tTrpu4LEg.s['21']++;if(!tooltipContainer){__cov_QU3vbYO7toUg5tTrpu4LEg.b['5'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['22']++;tooltipContainer=doc.createElement('div');__cov_QU3vbYO7toUg5tTrpu4LEg.s['23']++;tooltipContainer.className=[CLASS_NAMES_TOOLTIP,self.options.containerClass].join(' ');__cov_QU3vbYO7toUg5tTrpu4LEg.s['24']++;this.container.appendChild(tooltipContainer);__cov_QU3vbYO7toUg5tTrpu4LEg.s['25']++;this.tooltipContainer=tooltipContainer;}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['5'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['26']++;tooltipContainer.style.left='auto';__cov_QU3vbYO7toUg5tTrpu4LEg.s['27']++;tooltipContainer.style.top='auto';__cov_QU3vbYO7toUg5tTrpu4LEg.s['28']++;tooltipContainer.innerHTML=text;__cov_QU3vbYO7toUg5tTrpu4LEg.s['29']++;tooltipContainer.flexTooltipCurrentTarget=target;__cov_QU3vbYO7toUg5tTrpu4LEg.s['30']++;if(removeTitle){__cov_QU3vbYO7toUg5tTrpu4LEg.b['6'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['31']++;target.oldTitle=text;__cov_QU3vbYO7toUg5tTrpu4LEg.s['32']++;target.removeAttribute('title');}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['6'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['33']++;var targetRect=target.getBoundingClientRect(),colRect=this.container.getBoundingClientRect();__cov_QU3vbYO7toUg5tTrpu4LEg.s['34']++;var containerRect=tooltipContainer.getBoundingClientRect(),targetTop=targetRect.top,isCollisionTop=0>=targetTop-containerRect.height,classList=tooltipContainer.classList;__cov_QU3vbYO7toUg5tTrpu4LEg.s['35']++;if(isCollisionTop){__cov_QU3vbYO7toUg5tTrpu4LEg.b['7'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['36']++;tooltipContainer.style.top=targetRect.bottom-colRect.top+'px';__cov_QU3vbYO7toUg5tTrpu4LEg.s['37']++;classList.remove(CLASS_NAMES_BOTTOM);__cov_QU3vbYO7toUg5tTrpu4LEg.s['38']++;classList.add(CLASS_NAMES_TOP);}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['7'][1]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['39']++;classList.remove(CLASS_NAMES_TOP);__cov_QU3vbYO7toUg5tTrpu4LEg.s['40']++;classList.add(CLASS_NAMES_BOTTOM);__cov_QU3vbYO7toUg5tTrpu4LEg.s['41']++;tooltipContainer.style.top=targetTop-containerRect.height-colRect.top+'px';}__cov_QU3vbYO7toUg5tTrpu4LEg.s['42']++;tooltipContainer.style.left=((__cov_QU3vbYO7toUg5tTrpu4LEg.b['8'][0]++,targetRect.left+targetRect.width/2-containerRect.width/2)||(__cov_QU3vbYO7toUg5tTrpu4LEg.b['8'][1]++,0))-colRect.left+'px';__cov_QU3vbYO7toUg5tTrpu4LEg.s['43']++;classList.add(CLASS_NAMES_OPEN);},writable:true,configurable:true},removeTooltip:{value:function removeTooltip(target){__cov_QU3vbYO7toUg5tTrpu4LEg.f['4']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['44']++;if(this.tooltipContainer){__cov_QU3vbYO7toUg5tTrpu4LEg.b['9'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['45']++;if(this.tooltipContainer.flexTooltipCurrentTarget!==target){__cov_QU3vbYO7toUg5tTrpu4LEg.b['10'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['46']++;return;}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['10'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['47']++;this.tooltipContainer.classList.remove('open');}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['9'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['48']++;if(target.oldTitle){__cov_QU3vbYO7toUg5tTrpu4LEg.b['11'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['49']++;target.setAttribute('title',target.oldTitle);}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['11'][1]++;}},writable:true,configurable:true},registerEvents:{value:function registerEvents(){__cov_QU3vbYO7toUg5tTrpu4LEg.f['5']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['50']++;var self=this;__cov_QU3vbYO7toUg5tTrpu4LEg.s['51']++;this.container.addEventListener('mouseover',function(e){__cov_QU3vbYO7toUg5tTrpu4LEg.f['6']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['52']++;if(e.target.hasAttribute('data-tooltip')){__cov_QU3vbYO7toUg5tTrpu4LEg.b['12'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['53']++;self.createTooltip(e.target,e.target.getAttribute('title'),true);}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['12'][1]++;}});__cov_QU3vbYO7toUg5tTrpu4LEg.s['54']++;this.container.addEventListener('mouseout',function(e){__cov_QU3vbYO7toUg5tTrpu4LEg.f['7']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['55']++;if(e.target.hasAttribute('data-tooltip')){__cov_QU3vbYO7toUg5tTrpu4LEg.b['13'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['56']++;self.removeTooltip(e.target);}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['13'][1]++;}});__cov_QU3vbYO7toUg5tTrpu4LEg.s['57']++;return this;},writable:true,configurable:true}});__cov_QU3vbYO7toUg5tTrpu4LEg.s['58']++;return Tooltip;}();__cov_QU3vbYO7toUg5tTrpu4LEg.s['59']++;module.exports=Tooltip;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var global = {};

	"use strict";

	var _core = __webpack_require__(4);

	(function (global) {
	  var to5Runtime = global.to5Runtime = {};to5Runtime.inherits = function (subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	  };to5Runtime.defaults = function (obj, defaults) {
	    for (var key in defaults) {
	      if (obj[key] === undefined) {
	        obj[key] = defaults[key];
	      }
	    }return obj;
	  };to5Runtime.prototypeProperties = function (child, staticProps, instanceProps) {
	    if (staticProps) Object.defineProperties(child, staticProps);if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
	  };to5Runtime.applyConstructor = function (Constructor, args) {
	    var instance = Object.create(Constructor.prototype);var result = Constructor.apply(instance, args);return result != null && (typeof result == "object" || typeof result == "function") ? result : instance;
	  };to5Runtime.taggedTemplateLiteral = function (strings, raw) {
	    return _core.Object.freeze(Object.defineProperties(strings, { raw: { value: _core.Object.freeze(raw) } }));
	  };to5Runtime.taggedTemplateLiteralLoose = function (strings, raw) {
	    strings.raw = raw;return strings;
	  };to5Runtime.interopRequire = function (obj) {
	    return obj && obj.__esModule ? obj["default"] : obj;
	  };to5Runtime.toArray = function (arr) {
	    return Array.isArray(arr) ? arr : _core.Array.from(arr);
	  };to5Runtime.slicedToArray = function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else {
	      var _arr = [];for (var _iterator = _core.$for.getIterator(arr), _step; !(_step = _iterator.next()).done;) {
	        _arr.push(_step.value);if (i && _arr.length === i) break;
	      }return _arr;
	    }
	  };to5Runtime.objectWithoutProperties = function (obj, keys) {
	    var target = {};for (var i in obj) {
	      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	  };to5Runtime.hasOwn = Object.prototype.hasOwnProperty;to5Runtime.slice = Array.prototype.slice;to5Runtime.bind = Function.prototype.bind;to5Runtime.defineProperty = function (obj, key, value) {
	    return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  };to5Runtime.asyncToGenerator = function (fn) {
	    return function () {
	      var gen = fn.apply(this, arguments);return new _core.Promise(function (resolve, reject) {
	        var callNext = step.bind(null, "next");var callThrow = step.bind(null, "throw");function step(key, arg) {
	          try {
	            var info = gen[key](arg);var value = info.value;
	          } catch (error) {
	            reject(error);return;
	          }if (info.done) {
	            resolve(value);
	          } else {
	            _core.Promise.resolve(value).then(callNext, callThrow);
	          }
	        }callNext();
	      });
	    };
	  };to5Runtime.interopRequireWildcard = function (obj) {
	    return obj && obj.__esModule ? obj : { "default": obj };
	  };to5Runtime._typeof = function (obj) {
	    return obj && obj.constructor === _core.Symbol ? "symbol" : typeof obj;
	  };to5Runtime._extends = _core.Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };to5Runtime.get = function get(object, property, receiver) {
	    var _arguments = arguments,
	        _this = this,
	        _shouldContinue,
	        _result;
	    do {
	      _shouldContinue = false;
	      _result = (function (object, property, receiver) {
	        var desc = _core.Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	          var parent = _core.Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	          } else {
	            _arguments = [parent, property, receiver];
	            _this = undefined;
	            return _shouldContinue = true;
	          }
	        } else if ("value" in desc && desc.writable) {
	          return desc.value;
	        } else {
	          var getter = desc.get;if (getter === undefined) {
	            return undefined;
	          }return getter.call(receiver);
	        }
	      }).apply(_this, _arguments);
	    } while (_shouldContinue);
	    return _result;
	  };to5Runtime.set = function set(object, property, value, receiver) {
	    var _arguments = arguments,
	        _this = this,
	        _shouldContinue,
	        _result;
	    do {
	      _shouldContinue = false;
	      _result = (function (object, property, value, receiver) {
	        var desc = _core.Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	          var parent = _core.Object.getPrototypeOf(object);if (parent !== null) {
	            _arguments = [parent, property, value, receiver];
	            _this = undefined;
	            return _shouldContinue = true;
	          }
	        } else if ("value" in desc && desc.writable) {
	          return desc.value = value;
	        } else {
	          var setter = desc.set;if (setter !== undefined) {
	            return setter.call(receiver, value);
	          }
	        }
	      }).apply(_this, _arguments);
	    } while (_shouldContinue);
	    return _result;
	  };to5Runtime.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };to5Runtime.objectDestructuringEmpty = function (obj) {
	    if (obj == null) throw new TypeError("Cannot destructure undefined");
	  };to5Runtime.temporalUndefined = {};to5Runtime.temporalAssertDefined = function (val, name, undef) {
	    if (val === undef) {
	      throw new ReferenceError(name + " is not defined - temporal dead zone");
	    }return true;
	  };to5Runtime.tailCall = (function () {
	    function Tail(func, args, context) {
	      this.func = func;this.args = args;this.context = context;
	    }Tail.prototype._isTailDescriptor = true;var isRunning = false;return function (func, args, context) {
	      var result = new Tail(func, args, context);if (!isRunning) {
	        isRunning = true;do {
	          result = result.func.apply(result.context, result.args);
	        } while (result instanceof Tail || result && result._isTailDescriptor);isRunning = false;
	      }return result;
	    };
	  })();
	})(typeof global === "undefined" ? self : global);

	/*** EXPORTS FROM exports-loader ***/
	module.exports = global.to5Runtime

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Core.js 0.4.9
	 * https://github.com/zloirock/core-js
	 * License: http://rock.mit-license.org
	 * © 2015 Denis Pushkarev
	 */
	!(function (global, framework, undefined) {
	  "use strict";

	  /******************************************************************************
	   * Module : common                                                            *
	   ******************************************************************************/

	  // Shortcuts for [[Class]] & property names
	  var OBJECT = "Object",
	      FUNCTION = "Function",
	      ARRAY = "Array",
	      STRING = "String",
	      NUMBER = "Number",
	      REGEXP = "RegExp",
	      DATE = "Date",
	      MAP = "Map",
	      SET = "Set",
	      WEAKMAP = "WeakMap",
	      WEAKSET = "WeakSet",
	      SYMBOL = "Symbol",
	      PROMISE = "Promise",
	      MATH = "Math",
	      ARGUMENTS = "Arguments",
	      PROTOTYPE = "prototype",
	      CONSTRUCTOR = "constructor",
	      TO_STRING = "toString",
	      TO_STRING_TAG = TO_STRING + "Tag",
	      TO_LOCALE = "toLocaleString",
	      HAS_OWN = "hasOwnProperty",
	      FOR_EACH = "forEach",
	      ITERATOR = "iterator",
	      FF_ITERATOR = "@@" + ITERATOR,
	      PROCESS = "process",
	      CREATE_ELEMENT = "createElement"
	  // Aliases global objects and prototypes
	  ,
	      Function = global[FUNCTION],
	      Object = global[OBJECT],
	      Array = global[ARRAY],
	      String = global[STRING],
	      Number = global[NUMBER],
	      RegExp = global[REGEXP],
	      Date = global[DATE],
	      Map = global[MAP],
	      Set = global[SET],
	      WeakMap = global[WEAKMAP],
	      WeakSet = global[WEAKSET],
	      Symbol = global[SYMBOL],
	      Math = global[MATH],
	      TypeError = global.TypeError,
	      setTimeout = global.setTimeout,
	      setImmediate = global.setImmediate,
	      clearImmediate = global.clearImmediate,
	      process = global[PROCESS],
	      nextTick = process && process.nextTick,
	      document = global.document,
	      html = document && document.documentElement,
	      navigator = global.navigator,
	      define = global.define,
	      ArrayProto = Array[PROTOTYPE],
	      ObjectProto = Object[PROTOTYPE],
	      FunctionProto = Function[PROTOTYPE],
	      Infinity = 1 / 0,
	      DOT = ".";

	  // http://jsperf.com/core-js-isobject
	  function isObject(it) {
	    return it != null && (typeof it == "object" || typeof it == "function");
	  }
	  function isFunction(it) {
	    return typeof it == "function";
	  }
	  // Native function?
	  var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);

	  // Object internal [[Class]] or toStringTag
	  // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring
	  var buildIn = {
	    Undefined: 1, Null: 1, Array: 1, String: 1, Arguments: 1,
	    Function: 1, Error: 1, Boolean: 1, Number: 1, Date: 1, RegExp: 1
	  },
	      toString = ObjectProto[TO_STRING];
	  function setToStringTag(it, tag, stat) {
	    if (it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG)) hidden(it, SYMBOL_TAG, tag);
	  }
	  function cof(it) {
	    return it == undefined ? it === undefined ? "Undefined" : "Null" : toString.call(it).slice(8, -1);
	  }
	  function classof(it) {
	    var klass = cof(it),
	        tag;
	    return klass == OBJECT && (tag = it[SYMBOL_TAG]) ? has(buildIn, tag) ? "~" + tag : tag : klass;
	  }

	  // Function
	  var call = FunctionProto.call,
	      apply = FunctionProto.apply,
	      REFERENCE_GET;
	  // Partial apply
	  function part() {
	    var fn = assertFunction(this),
	        length = arguments.length,
	        args = Array(length),
	        i = 0,
	        _ = path._,
	        holder = false;
	    while (length > i) if ((args[i] = arguments[i++]) === _) holder = true;
	    return function () {
	      var that = this,
	          _length = arguments.length,
	          i = 0,
	          j = 0,
	          _args;
	      if (!holder && !_length) return invoke(fn, args, that);
	      _args = args.slice();
	      if (holder) for (; length > i; i++) if (_args[i] === _) _args[i] = arguments[j++];
	      while (_length > j) _args.push(arguments[j++]);
	      return invoke(fn, _args, that);
	    };
	  }
	  // Optional / simple context binding
	  function ctx(fn, that, length) {
	    assertFunction(fn);
	    if (~length && that === undefined) return fn;
	    switch (length) {
	      case 1:
	        return function (a) {
	          return fn.call(that, a);
	        };
	      case 2:
	        return function (a, b) {
	          return fn.call(that, a, b);
	        };
	      case 3:
	        return function (a, b, c) {
	          return fn.call(that, a, b, c);
	        };
	    }return function () {
	      return fn.apply(that, arguments);
	    };
	  }
	  // Fast apply
	  // http://jsperf.lnkit.com/fast-apply/5
	  function invoke(fn, args, that) {
	    var un = that === undefined;
	    switch (args.length | 0) {
	      case 0:
	        return un ? fn() : fn.call(that);
	      case 1:
	        return un ? fn(args[0]) : fn.call(that, args[0]);
	      case 2:
	        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	      case 3:
	        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	      case 4:
	        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	      case 5:
	        return un ? fn(args[0], args[1], args[2], args[3], args[4]) : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	    }return fn.apply(that, args);
	  }
	  function construct(target, argumentsList /*, newTarget*/) {
	    var proto = assertFunction(arguments.length < 3 ? target : arguments[2])[PROTOTYPE],
	        instance = create(isObject(proto) ? proto : ObjectProto),
	        result = apply.call(target, instance, argumentsList);
	    return isObject(result) ? result : instance;
	  }

	  // Object:
	  var create = Object.create,
	      getPrototypeOf = Object.getPrototypeOf,
	      setPrototypeOf = Object.setPrototypeOf,
	      defineProperty = Object.defineProperty,
	      defineProperties = Object.defineProperties,
	      getOwnDescriptor = Object.getOwnPropertyDescriptor,
	      getKeys = Object.keys,
	      getNames = Object.getOwnPropertyNames,
	      getSymbols = Object.getOwnPropertySymbols,
	      isFrozen = Object.isFrozen,
	      has = ctx(call, ObjectProto[HAS_OWN], 2)
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ,
	      ES5Object = Object,
	      Dict;
	  function toObject(it) {
	    return ES5Object(assertDefined(it));
	  }
	  function returnIt(it) {
	    return it;
	  }
	  function returnThis() {
	    return this;
	  }
	  function get(object, key) {
	    if (has(object, key)) return object[key];
	  }
	  function ownKeys(it) {
	    assertObject(it);
	    return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
	  }
	  // 19.1.2.1 Object.assign(target, source, ...)
	  var assign = Object.assign || function (target, source) {
	    var T = Object(assertDefined(target)),
	        l = arguments.length,
	        i = 1;
	    while (l > i) {
	      var S = ES5Object(arguments[i++]),
	          keys = getKeys(S),
	          length = keys.length,
	          j = 0,
	          key;
	      while (length > j) T[key = keys[j++]] = S[key];
	    }
	    return T;
	  };
	  function keyOf(object, el) {
	    var O = toObject(object),
	        keys = getKeys(O),
	        length = keys.length,
	        index = 0,
	        key;
	    while (length > index) if (O[key = keys[index++]] === el) return key;
	  }

	  // Array
	  // array('str1,str2,str3') => ['str1', 'str2', 'str3']
	  function array(it) {
	    return String(it).split(",");
	  }
	  var push = ArrayProto.push,
	      unshift = ArrayProto.unshift,
	      slice = ArrayProto.slice,
	      splice = ArrayProto.splice,
	      indexOf = ArrayProto.indexOf,
	      forEach = ArrayProto[FOR_EACH];
	  /*
	   * 0 -> forEach
	   * 1 -> map
	   * 2 -> filter
	   * 3 -> some
	   * 4 -> every
	   * 5 -> find
	   * 6 -> findIndex
	   */
	  function createArrayMethod(type) {
	    var isMap = type == 1,
	        isFilter = type == 2,
	        isSome = type == 3,
	        isEvery = type == 4,
	        isFindIndex = type == 6,
	        noholes = type == 5 || isFindIndex;
	    return function (callbackfn /*, that = undefined */) {
	      var O = Object(assertDefined(this)),
	          that = arguments[1],
	          self = ES5Object(O),
	          f = ctx(callbackfn, that, 3),
	          length = toLength(self.length),
	          index = 0,
	          result = isMap ? Array(length) : isFilter ? [] : undefined,
	          val,
	          res;
	      for (; length > index; index++) if (noholes || index in self) {
	        val = self[index];
	        res = f(val, index, O);
	        if (type) {
	          if (isMap) result[index] = res; // map
	          else if (res) switch (type) {
	            case 3:
	              return true; // some
	            case 5:
	              return val; // find
	            case 6:
	              return index; // findIndex
	            case 2:
	              result.push(val); // filter
	          } else if (isEvery) return false; // every
	        }
	      }
	      return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
	    };
	  }
	  function createArrayContains(isContains) {
	    return function (el /*, fromIndex = 0 */) {
	      var O = toObject(this),
	          length = toLength(O.length),
	          index = toIndex(arguments[1], length);
	      if (isContains && el != el) {
	        for (; length > index; index++) if (sameNaN(O[index])) return isContains || index;
	      } else for (; length > index; index++) if (isContains || index in O) {
	        if (O[index] === el) return isContains || index;
	      }return !isContains && -1;
	    };
	  }
	  function generic(A, B) {
	    // strange IE quirks mode bug -> use typeof vs isFunction
	    return typeof A == "function" ? A : B;
	  }

	  // Math
	  var MAX_SAFE_INTEGER = 9007199254740991 // pow(2, 53) - 1 == 9007199254740991
	  ,
	      ceil = Math.ceil,
	      floor = Math.floor,
	      max = Math.max,
	      min = Math.min,
	      random = Math.random,
	      trunc = Math.trunc || function (it) {
	    return (it > 0 ? floor : ceil)(it);
	  };
	  // 20.1.2.4 Number.isNaN(number)
	  function sameNaN(number) {
	    return number != number;
	  }
	  // 7.1.4 ToInteger
	  function toInteger(it) {
	    return isNaN(it) ? 0 : trunc(it);
	  }
	  // 7.1.15 ToLength
	  function toLength(it) {
	    return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
	  }
	  function toIndex(index, length) {
	    var index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  }

	  function createReplacer(regExp, replace, isStatic) {
	    var replacer = isObject(replace) ? function (part) {
	      return replace[part];
	    } : replace;
	    return function (it) {
	      return String(isStatic ? it : this).replace(regExp, replacer);
	    };
	  }
	  function createPointAt(toString) {
	    return function (pos) {
	      var s = String(assertDefined(this)),
	          i = toInteger(pos),
	          l = s.length,
	          a,
	          b;
	      if (i < 0 || i >= l) return toString ? "" : undefined;
	      a = s.charCodeAt(i);
	      return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? toString ? s.charAt(i) : a : toString ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
	    };
	  }

	  // Assertion & errors
	  var REDUCE_ERROR = "Reduce of empty object with no initial value";
	  function assert(condition, msg1, msg2) {
	    if (!condition) throw TypeError(msg2 ? msg1 + msg2 : msg1);
	  }
	  function assertDefined(it) {
	    if (it == undefined) throw TypeError("Function called on null or undefined");
	    return it;
	  }
	  function assertFunction(it) {
	    assert(isFunction(it), it, " is not a function!");
	    return it;
	  }
	  function assertObject(it) {
	    assert(isObject(it), it, " is not an object!");
	    return it;
	  }
	  function assertInstance(it, Constructor, name) {
	    assert(it instanceof Constructor, name, ": use the 'new' operator!");
	  }

	  // Property descriptors & Symbol
	  function descriptor(bitmap, value) {
	    return {
	      enumerable: !(bitmap & 1),
	      configurable: !(bitmap & 2),
	      writable: !(bitmap & 4),
	      value: value
	    };
	  }
	  function simpleSet(object, key, value) {
	    object[key] = value;
	    return object;
	  }
	  function createDefiner(bitmap) {
	    return DESC ? function (object, key, value) {
	      return defineProperty(object, key, descriptor(bitmap, value));
	    } : simpleSet;
	  }
	  function uid(key) {
	    return SYMBOL + "(" + key + ")_" + (++sid + random())[TO_STRING](36);
	  }
	  function getWellKnownSymbol(name, setter) {
	    return Symbol && Symbol[name] || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
	  }
	  // The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	  var DESC = !!(function () {
	    try {
	      return defineProperty({}, DOT, ObjectProto);
	    } catch (e) {}
	  })(),
	      sid = 0,
	      hidden = createDefiner(1),
	      set = Symbol ? simpleSet : hidden,
	      safeSymbol = Symbol || uid;
	  function assignHidden(target, src) {
	    for (var key in src) hidden(target, key, src[key]);
	    return target;
	  }

	  var SYMBOL_UNSCOPABLES = getWellKnownSymbol("unscopables"),
	      ArrayUnscopables = ArrayProto[SYMBOL_UNSCOPABLES] || {},
	      SYMBOL_SPECIES = getWellKnownSymbol("species");
	  function setSpecies(C) {
	    if (framework || !isNative(C)) defineProperty(C, SYMBOL_SPECIES, {
	      configurable: true,
	      get: returnThis
	    });
	  }

	  // Iterators
	  var SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR),
	      SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG),
	      SUPPORT_FF_ITER = (FF_ITERATOR in ArrayProto),
	      ITER = safeSymbol("iter"),
	      KEY = 1,
	      VALUE = 2,
	      Iterators = {},
	      IteratorPrototype = {},
	      NATIVE_ITERATORS = (SYMBOL_ITERATOR in ArrayProto
	  // Safari define byggy iterators w/o `next`
	  ),
	      BUGGY_ITERATORS = "keys" in ArrayProto && !("next" in [].keys());
	  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	  setIterator(IteratorPrototype, returnThis);
	  function setIterator(O, value) {
	    hidden(O, SYMBOL_ITERATOR, value);
	    // Add iterator for FF iterator protocol
	    SUPPORT_FF_ITER && hidden(O, FF_ITERATOR, value);
	  }
	  function createIterator(Constructor, NAME, next, proto) {
	    Constructor[PROTOTYPE] = create(proto || IteratorPrototype, { next: descriptor(1, next) });
	    setToStringTag(Constructor, NAME + " Iterator");
	  }
	  function defineIterator(Constructor, NAME, value, DEFAULT) {
	    var proto = Constructor[PROTOTYPE],
	        iter = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || DEFAULT && get(proto, DEFAULT) || value;
	    if (framework) {
	      // Define iterator
	      setIterator(proto, iter);
	      if (iter !== value) {
	        var iterProto = getPrototypeOf(iter.call(new Constructor()));
	        // Set @@toStringTag to native iterators
	        setToStringTag(iterProto, NAME + " Iterator", true);
	        // FF fix
	        has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
	      }
	    }
	    // Plug for library
	    Iterators[NAME] = iter;
	    // FF & v8 fix
	    Iterators[NAME + " Iterator"] = returnThis;
	    return iter;
	  }
	  function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET) {
	    function createIter(kind) {
	      return function () {
	        return new Constructor(this, kind);
	      };
	    }
	    createIterator(Constructor, NAME, next);
	    var entries = createIter(KEY + VALUE),
	        values = createIter(VALUE);
	    if (DEFAULT == VALUE) values = defineIterator(Base, NAME, values, "values");else entries = defineIterator(Base, NAME, entries, "entries");
	    if (DEFAULT) {
	      $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
	        entries: entries,
	        keys: IS_SET ? values : createIter(KEY),
	        values: values
	      });
	    }
	  }
	  function iterResult(done, value) {
	    return { value: value, done: !!done };
	  }
	  function isIterable(it) {
	    var O = Object(it),
	        Symbol = global[SYMBOL],
	        hasExt = ((Symbol && Symbol[ITERATOR] || FF_ITERATOR) in O);
	    return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
	  }
	  function getIterator(it) {
	    var Symbol = global[SYMBOL],
	        ext = it[Symbol && Symbol[ITERATOR] || FF_ITERATOR],
	        getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
	    return assertObject(getIter.call(it));
	  }
	  function stepCall(fn, value, entries) {
	    return entries ? invoke(fn, value) : fn(value);
	  }
	  function forOf(iterable, entries, fn, that) {
	    var iterator = getIterator(iterable),
	        f = ctx(fn, that, entries ? 2 : 1),
	        step;
	    while (!(step = iterator.next()).done) if (stepCall(f, step.value, entries) === false) return;
	  }

	  // core
	  var NODE = cof(process) == PROCESS,
	      core = {},
	      path = framework ? global : core,
	      old = global.core,
	      exportGlobal
	  // type bitmap
	  ,
	      FORCED = 1,
	      GLOBAL = 2,
	      STATIC = 4,
	      PROTO = 8,
	      BIND = 16,
	      WRAP = 32;
	  function $define(type, name, source) {
	    var key,
	        own,
	        out,
	        exp,
	        isGlobal = type & GLOBAL,
	        target = isGlobal ? global : type & STATIC ? global[name] : (global[name] || ObjectProto)[PROTOTYPE],
	        exports = isGlobal ? core : core[name] || (core[name] = {});
	    if (isGlobal) source = name;
	    for (key in source) {
	      // there is a similar native
	      own = !(type & FORCED) && target && key in target && (!isFunction(target[key]) || isNative(target[key]));
	      // export native or passed
	      out = (own ? target : source)[key];
	      // bind timers to global for call from export context
	      if (type & BIND && own) exp = ctx(out, global);
	      // wrap global constructors for prevent change them in library
	      else if (type & WRAP && !framework && target[key] == out) {
	        exp = function (param) {
	          return this instanceof out ? new out(param) : out(param);
	        };
	        exp[PROTOTYPE] = out[PROTOTYPE];
	      } else exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
	      // export
	      if (exports[key] != out) hidden(exports, key, exp);
	      // extend global
	      if (framework && target && !own) {
	        if (isGlobal) target[key] = out;else delete target[key] && hidden(target, key, out);
	      }
	    }
	  }
	  // CommonJS export
	  if (typeof module != "undefined" && module.exports) module.exports = core;
	  // RequireJS export
	  else if (isFunction(define) && define.amd) define(function () {
	    return core;
	  });
	  // Export to global object
	  else exportGlobal = true;
	  if (exportGlobal || framework) {
	    core.noConflict = function () {
	      global.core = old;
	      return core;
	    };
	    global.core = core;
	  }

	  /******************************************************************************
	   * Module : global                                                            *
	   ******************************************************************************/

	  $define(GLOBAL + FORCED, { global: global });

	  /******************************************************************************
	   * Module : es6_symbol                                                        *
	   ******************************************************************************/

	  // ECMAScript 6 symbols shim
	  !(function (TAG, SymbolRegistry, AllSymbols, setter) {
	    // 19.4.1.1 Symbol([description])
	    if (!isNative(Symbol)) {
	      Symbol = function (description) {
	        assert(!(this instanceof Symbol), SYMBOL + " is not a " + CONSTRUCTOR);
	        var tag = uid(description);
	        AllSymbols[tag] = true;
	        DESC && setter && defineProperty(ObjectProto, tag, {
	          configurable: true,
	          set: function (value) {
	            hidden(this, tag, value);
	          }
	        });
	        return set(create(Symbol[PROTOTYPE]), TAG, tag);
	      };
	      hidden(Symbol[PROTOTYPE], TO_STRING, function () {
	        return this[TAG];
	      });
	    }
	    $define(GLOBAL + WRAP, { Symbol: Symbol });

	    var symbolStatics = {
	      // 19.4.2.1 Symbol.for(key)
	      "for": function (key) {
	        return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = Symbol(key);
	      },
	      // 19.4.2.4 Symbol.iterator
	      iterator: SYMBOL_ITERATOR,
	      // 19.4.2.5 Symbol.keyFor(sym)
	      keyFor: part.call(keyOf, SymbolRegistry),
	      // 19.4.2.10 Symbol.species
	      species: SYMBOL_SPECIES,
	      // 19.4.2.13 Symbol.toStringTag
	      toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
	      // 19.4.2.14 Symbol.unscopables
	      unscopables: SYMBOL_UNSCOPABLES,
	      pure: safeSymbol,
	      set: set,
	      useSetter: function () {
	        setter = true;
	      },
	      useSimple: function () {
	        setter = false;
	      }
	    };
	    // 19.4.2.2 Symbol.hasInstance
	    // 19.4.2.3 Symbol.isConcatSpreadable
	    // 19.4.2.6 Symbol.match
	    // 19.4.2.8 Symbol.replace
	    // 19.4.2.9 Symbol.search
	    // 19.4.2.11 Symbol.split
	    // 19.4.2.12 Symbol.toPrimitive
	    forEach.call(array("hasInstance,isConcatSpreadable,match,replace,search,split,toPrimitive"), function (it) {
	      symbolStatics[it] = getWellKnownSymbol(it);
	    });
	    $define(STATIC, SYMBOL, symbolStatics);

	    setToStringTag(Symbol, SYMBOL);

	    $define(STATIC + FORCED * !isNative(Symbol), OBJECT, {
	      // 19.1.2.7 Object.getOwnPropertyNames(O)
	      getOwnPropertyNames: function (it) {
	        var names = getNames(toObject(it)),
	            result = [],
	            key,
	            i = 0;
	        while (names.length > i) has(AllSymbols, key = names[i++]) || result.push(key);
	        return result;
	      },
	      // 19.1.2.8 Object.getOwnPropertySymbols(O)
	      getOwnPropertySymbols: function (it) {
	        var names = getNames(toObject(it)),
	            result = [],
	            key,
	            i = 0;
	        while (names.length > i) has(AllSymbols, key = names[i++]) && result.push(key);
	        return result;
	      }
	    });
	  })(safeSymbol("tag"), {}, {}, true);

	  /******************************************************************************
	   * Module : es6                                                               *
	   ******************************************************************************/

	  // ECMAScript 6 shim
	  !(function (RegExpProto, isFinite, tmp, NAME) {
	    var RangeError = global.RangeError
	    // 20.1.2.3 Number.isInteger(number)
	    ,
	        isInteger = Number.isInteger || function (it) {
	      return !isObject(it) && isFinite(it) && floor(it) === it;
	    }
	    // 20.2.2.28 Math.sign(x)
	    ,
	        sign = Math.sign || function sign(x) {
	      return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	    },
	        E = Math.E,
	        pow = Math.pow,
	        abs = Math.abs,
	        exp = Math.exp,
	        log = Math.log,
	        sqrt = Math.sqrt,
	        fcc = String.fromCharCode,
	        at = createPointAt(true);

	    var objectStatic = {
	      // 19.1.3.1 Object.assign(target, source)
	      assign: assign,
	      // 19.1.3.10 Object.is(value1, value2)
	      is: function (x, y) {
	        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	      }
	    };
	    // 19.1.3.19 Object.setPrototypeOf(O, proto)
	    // Works with __proto__ only. Old v8 can't works with null proto objects.
	    "__proto__" in ObjectProto && (function (buggy, set) {
	      try {
	        set = ctx(call, getOwnDescriptor(ObjectProto, "__proto__").set, 2);
	        set({}, ArrayProto);
	      } catch (e) {
	        buggy = true;
	      }
	      objectStatic.setPrototypeOf = setPrototypeOf = setPrototypeOf || function (O, proto) {
	        assertObject(O);
	        assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
	        if (buggy) O.__proto__ = proto;else set(O, proto);
	        return O;
	      };
	    })();
	    $define(STATIC, OBJECT, objectStatic);

	    // 20.2.2.5 Math.asinh(x)
	    function asinh(x) {
	      return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
	    }
	    // 20.2.2.14 Math.expm1(x)
	    function expm1(x) {
	      return (x = +x) == 0 ? x : x > -0.000001 && x < 0.000001 ? x + x * x / 2 : exp(x) - 1;
	    }

	    $define(STATIC, NUMBER, {
	      // 20.1.2.1 Number.EPSILON
	      EPSILON: pow(2, -52),
	      // 20.1.2.2 Number.isFinite(number)
	      isFinite: function (it) {
	        return typeof it == "number" && isFinite(it);
	      },
	      // 20.1.2.3 Number.isInteger(number)
	      isInteger: isInteger,
	      // 20.1.2.4 Number.isNaN(number)
	      isNaN: sameNaN,
	      // 20.1.2.5 Number.isSafeInteger(number)
	      isSafeInteger: function (number) {
	        return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
	      },
	      // 20.1.2.6 Number.MAX_SAFE_INTEGER
	      MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
	      // 20.1.2.10 Number.MIN_SAFE_INTEGER
	      MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
	      // 20.1.2.12 Number.parseFloat(string)
	      parseFloat: parseFloat,
	      // 20.1.2.13 Number.parseInt(string, radix)
	      parseInt: parseInt
	    });

	    $define(STATIC, MATH, {
	      // 20.2.2.3 Math.acosh(x)
	      acosh: function (x) {
	        return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
	      },
	      // 20.2.2.5 Math.asinh(x)
	      asinh: asinh,
	      // 20.2.2.7 Math.atanh(x)
	      atanh: function (x) {
	        return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
	      },
	      // 20.2.2.9 Math.cbrt(x)
	      cbrt: function (x) {
	        return sign(x = +x) * pow(abs(x), 1 / 3);
	      },
	      // 20.2.2.11 Math.clz32(x)
	      clz32: function (x) {
	        return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
	      },
	      // 20.2.2.12 Math.cosh(x)
	      cosh: function (x) {
	        return (exp(x = +x) + exp(-x)) / 2;
	      },
	      // 20.2.2.14 Math.expm1(x)
	      expm1: expm1,
	      // 20.2.2.16 Math.fround(x)
	      // TODO: fallback for IE9-
	      fround: function (x) {
	        return new Float32Array([x])[0];
	      },
	      // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	      hypot: function (value1, value2) {
	        var sum = 0,
	            len1 = arguments.length,
	            len2 = len1,
	            args = Array(len1),
	            larg = -Infinity,
	            arg;
	        while (len1--) {
	          arg = args[len1] = +arguments[len1];
	          if (arg == Infinity || arg == -Infinity) return Infinity;
	          if (arg > larg) larg = arg;
	        }
	        larg = arg || 1;
	        while (len2--) sum += pow(args[len2] / larg, 2);
	        return larg * sqrt(sum);
	      },
	      // 20.2.2.18 Math.imul(x, y)
	      imul: function (x, y) {
	        var UInt16 = 65535,
	            xn = +x,
	            yn = +y,
	            xl = UInt16 & xn,
	            yl = UInt16 & yn;
	        return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
	      },
	      // 20.2.2.20 Math.log1p(x)
	      log1p: function (x) {
	        return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
	      },
	      // 20.2.2.21 Math.log10(x)
	      log10: function (x) {
	        return log(x) / Math.LN10;
	      },
	      // 20.2.2.22 Math.log2(x)
	      log2: function (x) {
	        return log(x) / Math.LN2;
	      },
	      // 20.2.2.28 Math.sign(x)
	      sign: sign,
	      // 20.2.2.30 Math.sinh(x)
	      sinh: function (x) {
	        return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
	      },
	      // 20.2.2.33 Math.tanh(x)
	      tanh: function (x) {
	        var a = expm1(x = +x),
	            b = expm1(-x);
	        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	      },
	      // 20.2.2.34 Math.trunc(x)
	      trunc: trunc
	    });
	    // 20.2.1.9 Math[@@toStringTag]
	    setToStringTag(Math, MATH, true);

	    function assertNotRegExp(it) {
	      if (cof(it) == REGEXP) throw TypeError();
	    }
	    $define(STATIC, STRING, {
	      // 21.1.2.2 String.fromCodePoint(...codePoints)
	      fromCodePoint: function (x) {
	        var res = [],
	            len = arguments.length,
	            i = 0,
	            code;
	        while (len > i) {
	          code = +arguments[i++];
	          if (toIndex(code, 1114111) !== code) throw RangeError(code + " is not a valid code point");
	          res.push(code < 65536 ? fcc(code) : fcc(((code -= 65536) >> 10) + 55296, code % 1024 + 56320));
	        }return res.join("");
	      },
	      // 21.1.2.4 String.raw(callSite, ...substitutions)
	      raw: function (callSite) {
	        var raw = toObject(callSite.raw),
	            len = toLength(raw.length),
	            sln = arguments.length,
	            res = [],
	            i = 0;
	        while (len > i) {
	          res.push(String(raw[i++]));
	          if (i < sln) res.push(String(arguments[i]));
	        }return res.join("");
	      }
	    });
	    $define(PROTO, STRING, {
	      // 21.1.3.3 String.prototype.codePointAt(pos)
	      codePointAt: createPointAt(false),
	      // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	      endsWith: function (searchString /*, endPosition = @length */) {
	        assertNotRegExp(searchString);
	        var that = String(assertDefined(this)),
	            endPosition = arguments[1],
	            len = toLength(that.length),
	            end = endPosition === undefined ? len : min(toLength(endPosition), len);
	        searchString += "";
	        return that.slice(end - searchString.length, end) === searchString;
	      },
	      // 21.1.3.7 String.prototype.includes(searchString, position = 0)
	      includes: function (searchString /*, position = 0 */) {
	        assertNotRegExp(searchString);
	        return !! ~String(assertDefined(this)).indexOf(searchString, arguments[1]);
	      },
	      // 21.1.3.13 String.prototype.repeat(count)
	      repeat: function (count) {
	        var str = String(assertDefined(this)),
	            res = "",
	            n = toInteger(count);
	        if (0 > n || n == Infinity) throw RangeError("Count can't be negative");
	        for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	        return res;
	      },
	      // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	      startsWith: function (searchString /*, position = 0 */) {
	        assertNotRegExp(searchString);
	        var that = String(assertDefined(this)),
	            index = toLength(min(arguments[1], that.length));
	        searchString += "";
	        return that.slice(index, index + searchString.length) === searchString;
	      }
	    });
	    // 21.1.3.27 String.prototype[@@iterator]()
	    defineStdIterators(String, STRING, function (iterated) {
	      set(this, ITER, { o: String(iterated), i: 0 });
	      // 21.1.5.2.1 %StringIteratorPrototype%.next()
	    }, function () {
	      var iter = this[ITER],
	          O = iter.o,
	          index = iter.i,
	          point;
	      if (index >= O.length) return iterResult(1);
	      point = at.call(O, index);
	      iter.i += point.length;
	      return iterResult(0, point);
	    });

	    $define(STATIC, ARRAY, {
	      // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	      from: function (arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	        var O = Object(assertDefined(arrayLike)),
	            result = new (generic(this, Array))(),
	            mapfn = arguments[1],
	            that = arguments[2],
	            mapping = mapfn !== undefined,
	            f = mapping ? ctx(mapfn, that, 2) : undefined,
	            index = 0,
	            length;
	        if (isIterable(O)) for (var iter = getIterator(O), step; !(step = iter.next()).done; index++) {
	          result[index] = mapping ? f(step.value, index) : step.value;
	        } else for (length = toLength(O.length); length > index; index++) {
	          result[index] = mapping ? f(O[index], index) : O[index];
	        }
	        result.length = index;
	        return result;
	      },
	      // 22.1.2.3 Array.of( ...items)
	      of: function () {
	        var index = 0,
	            length = arguments.length,
	            result = new (generic(this, Array))(length);
	        while (length > index) result[index] = arguments[index++];
	        result.length = length;
	        return result;
	      }
	    });
	    $define(PROTO, ARRAY, {
	      // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	      copyWithin: function (target, /* = 0 */start /* = 0, end = @length */) {
	        var O = Object(assertDefined(this)),
	            len = toLength(O.length),
	            to = toIndex(target, len),
	            from = toIndex(start, len),
	            end = arguments[2],
	            fin = end === undefined ? len : toIndex(end, len),
	            count = min(fin - from, len - to),
	            inc = 1;
	        if (from < to && to < from + count) {
	          inc = -1;
	          from = from + count - 1;
	          to = to + count - 1;
	        }
	        while (count-- > 0) {
	          if (from in O) O[to] = O[from];else delete O[to];
	          to += inc;
	          from += inc;
	        }return O;
	      },
	      // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	      fill: function (value /*, start = 0, end = @length */) {
	        var O = Object(assertDefined(this)),
	            length = toLength(O.length),
	            index = toIndex(arguments[1], length),
	            end = arguments[2],
	            endPos = end === undefined ? length : toIndex(end, length);
	        while (endPos > index) O[index++] = value;
	        return O;
	      },
	      // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	      find: createArrayMethod(5),
	      // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	      findIndex: createArrayMethod(6)
	    });
	    // 22.1.3.4 Array.prototype.entries()
	    // 22.1.3.13 Array.prototype.keys()
	    // 22.1.3.29 Array.prototype.values()
	    // 22.1.3.30 Array.prototype[@@iterator]()
	    defineStdIterators(Array, ARRAY, function (iterated, kind) {
	      set(this, ITER, { o: toObject(iterated), i: 0, k: kind });
	      // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	    }, function () {
	      var iter = this[ITER],
	          O = iter.o,
	          kind = iter.k,
	          index = iter.i++;
	      if (!O || index >= O.length) return (iter.o = undefined, iterResult(1));
	      if (kind == KEY) return iterResult(0, index);
	      if (kind == VALUE) return iterResult(0, O[index]);
	      return iterResult(0, [index, O[index]]);
	    }, VALUE);

	    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	    Iterators[ARGUMENTS] = Iterators[ARRAY];

	    // 24.3.3 JSON[@@toStringTag]
	    setToStringTag(global.JSON, "JSON", true);

	    // Object static methods accept primitives
	    function wrapObjectMethod(key, MODE) {
	      var fn = Object[key],
	          exp = core[OBJECT][key],
	          f = 0,
	          o = {};
	      if (!exp || isNative(exp)) {
	        o[key] = MODE == 1 ? function (it) {
	          return isObject(it) ? fn(it) : it;
	        } : MODE == 2 ? function (it) {
	          return isObject(it) ? fn(it) : true;
	        } : MODE == 3 ? function (it) {
	          return isObject(it) ? fn(it) : false;
	        } : MODE == 4 ? function (it, key) {
	          return fn(toObject(it), key);
	        } : function (it) {
	          return fn(toObject(it));
	        };
	        try {
	          fn(DOT);
	        } catch (e) {
	          f = 1;
	        }
	        $define(STATIC + FORCED * f, OBJECT, o);
	      }
	    }
	    wrapObjectMethod("freeze", 1);
	    wrapObjectMethod("seal", 1);
	    wrapObjectMethod("preventExtensions", 1);
	    wrapObjectMethod("isFrozen", 2);
	    wrapObjectMethod("isSealed", 2);
	    wrapObjectMethod("isExtensible", 3);
	    wrapObjectMethod("getOwnPropertyDescriptor", 4);
	    wrapObjectMethod("getPrototypeOf");
	    wrapObjectMethod("keys");
	    wrapObjectMethod("getOwnPropertyNames");

	    if (framework) {
	      // 19.1.3.6 Object.prototype.toString()
	      tmp[SYMBOL_TAG] = DOT;
	      if (cof(tmp) != DOT) hidden(ObjectProto, TO_STRING, function () {
	        return "[object " + classof(this) + "]";
	      });

	      // 19.2.4.2 name
	      NAME in FunctionProto || defineProperty(FunctionProto, NAME, {
	        configurable: true,
	        get: function () {
	          var match = String(this).match(/^\s*function ([^ (]*)/),
	              name = match ? match[1] : "";
	          has(this, NAME) || defineProperty(this, NAME, descriptor(5, name));
	          return name;
	        },
	        set: function (value) {
	          has(this, NAME) || defineProperty(this, NAME, descriptor(0, value));
	        }
	      });

	      // RegExp allows a regex with flags as the pattern
	      if (DESC && !(function () {
	        try {
	          return RegExp(/a/g, "i") == "/a/i";
	        } catch (e) {}
	      })()) {
	        var _RegExp = RegExp;
	        RegExp = function RegExp(pattern, flags) {
	          return new _RegExp(cof(pattern) == REGEXP && flags !== undefined ? pattern.source : pattern, flags);
	        };
	        forEach.call(getNames(_RegExp), function (key) {
	          key in RegExp || defineProperty(RegExp, key, {
	            configurable: true,
	            get: function () {
	              return _RegExp[key];
	            },
	            set: function (it) {
	              _RegExp[key] = it;
	            }
	          });
	        });
	        RegExpProto[CONSTRUCTOR] = RegExp;
	        RegExp[PROTOTYPE] = RegExpProto;
	        hidden(global, REGEXP, RegExp);
	      }

	      // 21.2.5.3 get RegExp.prototype.flags()
	      if (/./g.flags != "g") defineProperty(RegExpProto, "flags", {
	        configurable: true,
	        get: createReplacer(/^.*\/(\w*)$/, "$1")
	      });

	      // 22.1.3.31 Array.prototype[@@unscopables]
	      forEach.call(array("find,findIndex,fill,copyWithin,entries,keys,values"), function (it) {
	        ArrayUnscopables[it] = true;
	      });
	      SYMBOL_UNSCOPABLES in ArrayProto || hidden(ArrayProto, SYMBOL_UNSCOPABLES, ArrayUnscopables);
	    }

	    setSpecies(RegExp);
	    setSpecies(Array);
	  })(RegExp[PROTOTYPE], isFinite, {}, "name");

	  /******************************************************************************
	   * Module : immediate                                                         *
	   ******************************************************************************/

	  // setImmediate shim
	  // Node.js 0.9+ & IE10+ has setImmediate, else:
	  isFunction(setImmediate) && isFunction(clearImmediate) || (function (ONREADYSTATECHANGE) {
	    var postMessage = global.postMessage,
	        addEventListener = global.addEventListener,
	        MessageChannel = global.MessageChannel,
	        counter = 0,
	        queue = {},
	        defer,
	        channel,
	        port;
	    setImmediate = function (fn) {
	      var args = [],
	          i = 1;
	      while (arguments.length > i) args.push(arguments[i++]);
	      queue[++counter] = function () {
	        invoke(isFunction(fn) ? fn : Function(fn), args);
	      };
	      defer(counter);
	      return counter;
	    };
	    clearImmediate = function (id) {
	      delete queue[id];
	    };
	    function run(id) {
	      if (has(queue, id)) {
	        var fn = queue[id];
	        delete queue[id];
	        fn();
	      }
	    }
	    function listner(event) {
	      run(event.data);
	    }
	    // Node.js 0.8-
	    if (NODE) {
	      defer = function (id) {
	        nextTick(part.call(run, id));
	      }
	      // Modern browsers, skip implementation for WebWorkers
	      // IE8 has postMessage, but it's sync & typeof its postMessage is object
	      ;
	    } else if (addEventListener && isFunction(postMessage) && !global.importScripts) {
	      defer = function (id) {
	        postMessage(id, "*");
	      };
	      addEventListener("message", listner, false);
	      // WebWorkers
	    } else if (isFunction(MessageChannel)) {
	      channel = new MessageChannel();
	      port = channel.port2;
	      channel.port1.onmessage = listner;
	      defer = ctx(port.postMessage, port, 1);
	      // IE8-
	    } else if (document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]("script")) {
	      defer = function (id) {
	        html.appendChild(document[CREATE_ELEMENT]("script"))[ONREADYSTATECHANGE] = function () {
	          html.removeChild(this);
	          run(id);
	        };
	      }
	      // Rest old browsers
	      ;
	    } else {
	      defer = function (id) {
	        setTimeout(part.call(run, id), 0);
	      };
	    }
	  })("onreadystatechange");
	  $define(GLOBAL + BIND, {
	    setImmediate: setImmediate,
	    clearImmediate: clearImmediate
	  });

	  /******************************************************************************
	   * Module : es6_promise                                                       *
	   ******************************************************************************/

	  // ES6 promises shim
	  // Based on https://github.com/getify/native-promise-only/
	  !(function (Promise, test) {
	    isFunction(Promise) && isFunction(Promise.resolve) && Promise.resolve(test = new Promise(function () {})) == test || (function (asap, DEF) {
	      function isThenable(o) {
	        var then;
	        if (isObject(o)) then = o.then;
	        return isFunction(then) ? then : false;
	      }
	      function notify(def) {
	        var chain = def.chain;
	        chain.length && asap(function () {
	          var msg = def.msg,
	              ok = def.state == 1,
	              i = 0;
	          while (chain.length > i) !(function (react) {
	            var cb = ok ? react.ok : react.fail,
	                ret,
	                then;
	            try {
	              if (cb) {
	                ret = cb === true ? msg : cb(msg);
	                if (ret === react.P) {
	                  react.rej(TypeError(PROMISE + "-chain cycle"));
	                } else if (then = isThenable(ret)) {
	                  then.call(ret, react.res, react.rej);
	                } else react.res(ret);
	              } else react.rej(msg);
	            } catch (err) {
	              react.rej(err);
	            }
	          })(chain[i++]);
	          chain.length = 0;
	        });
	      }
	      function resolve(msg) {
	        var def = this,
	            then,
	            wrapper;
	        if (def.done) return;
	        def.done = true;
	        def = def.def || def; // unwrap
	        try {
	          if (then = isThenable(msg)) {
	            wrapper = { def: def, done: false }; // wrap
	            then.call(msg, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
	          } else {
	            def.msg = msg;
	            def.state = 1;
	            notify(def);
	          }
	        } catch (err) {
	          reject.call(wrapper || { def: def, done: false }, err); // wrap
	        }
	      }
	      function reject(msg) {
	        var def = this;
	        if (def.done) return;
	        def.done = true;
	        def = def.def || def; // unwrap
	        def.msg = msg;
	        def.state = 2;
	        notify(def);
	      }
	      function getConstructor(C) {
	        var S = assertObject(C)[SYMBOL_SPECIES];
	        return S != undefined ? S : C;
	      }
	      // 25.4.3.1 Promise(executor)
	      Promise = function (executor) {
	        assertFunction(executor);
	        assertInstance(this, Promise, PROMISE);
	        var def = { chain: [], state: 0, done: false, msg: undefined };
	        hidden(this, DEF, def);
	        try {
	          executor(ctx(resolve, def, 1), ctx(reject, def, 1));
	        } catch (err) {
	          reject.call(def, err);
	        }
	      };
	      assignHidden(Promise[PROTOTYPE], {
	        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	        then: function (onFulfilled, onRejected) {
	          var S = assertObject(assertObject(this)[CONSTRUCTOR])[SYMBOL_SPECIES];
	          var react = {
	            ok: isFunction(onFulfilled) ? onFulfilled : true,
	            fail: isFunction(onRejected) ? onRejected : false
	          },
	              P = react.P = new (S != undefined ? S : Promise)(function (resolve, reject) {
	            react.res = assertFunction(resolve);
	            react.rej = assertFunction(reject);
	          }),
	              def = this[DEF];
	          def.chain.push(react);
	          def.state && notify(def);
	          return P;
	        },
	        // 25.4.5.1 Promise.prototype.catch(onRejected)
	        "catch": function (onRejected) {
	          return this.then(undefined, onRejected);
	        }
	      });
	      assignHidden(Promise, {
	        // 25.4.4.1 Promise.all(iterable)
	        all: function (iterable) {
	          var Promise = getConstructor(this),
	              values = [];
	          return new Promise(function (resolve, reject) {
	            forOf(iterable, false, push, values);
	            var remaining = values.length,
	                results = Array(remaining);
	            if (remaining) forEach.call(values, function (promise, index) {
	              Promise.resolve(promise).then(function (value) {
	                results[index] = value;
	                --remaining || resolve(results);
	              }, reject);
	            });else resolve(results);
	          });
	        },
	        // 25.4.4.4 Promise.race(iterable)
	        race: function (iterable) {
	          var Promise = getConstructor(this);
	          return new Promise(function (resolve, reject) {
	            forOf(iterable, false, function (promise) {
	              Promise.resolve(promise).then(resolve, reject);
	            });
	          });
	        },
	        // 25.4.4.5 Promise.reject(r)
	        reject: function (r) {
	          return new (getConstructor(this))(function (resolve, reject) {
	            reject(r);
	          });
	        },
	        // 25.4.4.6 Promise.resolve(x)
	        resolve: function (x) {
	          return isObject(x) && DEF in x && getPrototypeOf(x) === this[PROTOTYPE] ? x : new (getConstructor(this))(function (resolve, reject) {
	            resolve(x);
	          });
	        }
	      });
	    })(nextTick || setImmediate, safeSymbol("def"));
	    setToStringTag(Promise, PROMISE);
	    setSpecies(Promise);
	    $define(GLOBAL + FORCED * !isNative(Promise), { Promise: Promise });
	  })(global[PROMISE]);

	  /******************************************************************************
	   * Module : es6_collections                                                   *
	   ******************************************************************************/

	  // ECMAScript 6 collections shim
	  !(function () {
	    var UID = safeSymbol("uid"),
	        O1 = safeSymbol("O1"),
	        WEAK = safeSymbol("weak"),
	        LEAK = safeSymbol("leak"),
	        LAST = safeSymbol("last"),
	        FIRST = safeSymbol("first"),
	        SIZE = DESC ? safeSymbol("size") : "size",
	        uid = 0,
	        tmp = {};

	    function getCollection(C, NAME, methods, commonMethods, isMap, isWeak) {
	      var ADDER = isMap ? "set" : "add",
	          proto = C && C[PROTOTYPE],
	          O = {};
	      function initFromIterable(that, iterable) {
	        if (iterable != undefined) forOf(iterable, isMap, that[ADDER], that);
	        return that;
	      }
	      function fixSVZ(key, chain) {
	        var method = proto[key];
	        if (framework) proto[key] = function (a, b) {
	          var result = method.call(this, a === 0 ? 0 : a, b);
	          return chain ? this : result;
	        };
	      }
	      if (!isNative(C) || !(isWeak || !BUGGY_ITERATORS && has(proto, FOR_EACH) && has(proto, "entries"))) {
	        // create collection constructor
	        C = isWeak ? function (iterable) {
	          assertInstance(this, C, NAME);
	          set(this, UID, uid++);
	          initFromIterable(this, iterable);
	        } : function (iterable) {
	          var that = this;
	          assertInstance(that, C, NAME);
	          set(that, O1, create(null));
	          set(that, SIZE, 0);
	          set(that, LAST, undefined);
	          set(that, FIRST, undefined);
	          initFromIterable(that, iterable);
	        };
	        assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
	        isWeak || defineProperty(C[PROTOTYPE], "size", { get: function () {
	            return assertDefined(this[SIZE]);
	          } });
	      } else {
	        var Native = C,
	            inst = new C(),
	            chain = inst[ADDER](isWeak ? {} : -0, 1),
	            buggyZero;
	        // wrap to init collections from iterable
	        if (!NATIVE_ITERATORS || !C.length) {
	          C = function (iterable) {
	            assertInstance(this, C, NAME);
	            return initFromIterable(new Native(), iterable);
	          };
	          C[PROTOTYPE] = proto;
	          if (framework) proto[CONSTRUCTOR] = C;
	        }
	        isWeak || inst[FOR_EACH](function (val, key) {
	          buggyZero = 1 / key === -Infinity;
	        });
	        // fix converting -0 key to +0
	        if (buggyZero) {
	          fixSVZ("delete");
	          fixSVZ("has");
	          isMap && fixSVZ("get");
	        }
	        // + fix .add & .set for chaining
	        if (buggyZero || chain !== inst) fixSVZ(ADDER, true);
	      }
	      setToStringTag(C, NAME);
	      setSpecies(C);

	      O[NAME] = C;
	      $define(GLOBAL + WRAP + FORCED * !isNative(C), O);

	      // add .keys, .values, .entries, [@@iterator]
	      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	      isWeak || defineStdIterators(C, NAME, function (iterated, kind) {
	        set(this, ITER, { o: iterated, k: kind });
	      }, function () {
	        var iter = this[ITER],
	            kind = iter.k,
	            entry = iter.l;
	        // revert to the last existing entry
	        while (entry && entry.r) entry = entry.p;
	        // get next entry
	        if (!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])) {
	          // or finish the iteration
	          return (iter.o = undefined, iterResult(1));
	        }
	        // return step by kind
	        if (kind == KEY) return iterResult(0, entry.k);
	        if (kind == VALUE) return iterResult(0, entry.v);
	        return iterResult(0, [entry.k, entry.v]);
	      }, isMap ? KEY + VALUE : VALUE, !isMap);

	      return C;
	    }

	    function fastKey(it, create) {
	      // return primitive with prefix
	      if (!isObject(it)) return (typeof it == "string" ? "S" : "P") + it;
	      // can't set id to frozen object
	      if (isFrozen(it)) return "F";
	      if (!has(it, UID)) {
	        // not necessary to add id
	        if (!create) return "E";
	        // add missing object id
	        hidden(it, UID, ++uid);
	        // return object id with prefix
	      }return "O" + it[UID];
	    }
	    function getEntry(that, key) {
	      // fast case
	      var index = fastKey(key),
	          entry;
	      if (index != "F") return that[O1][index];
	      // frozen object case
	      for (entry = that[FIRST]; entry; entry = entry.n) {
	        if (entry.k == key) return entry;
	      }
	    }
	    function def(that, key, value) {
	      var entry = getEntry(that, key),
	          prev,
	          index;
	      // change existing entry
	      if (entry) entry.v = value;
	      // create new entry
	      else {
	        that[LAST] = entry = {
	          i: index = fastKey(key, true), // <- index
	          k: key, // <- key
	          v: value, // <- value
	          p: prev = that[LAST], // <- previous entry
	          n: undefined, // <- next entry
	          r: false // <- removed
	        };
	        if (!that[FIRST]) that[FIRST] = entry;
	        if (prev) prev.n = entry;
	        that[SIZE]++;
	        // add to index
	        if (index != "F") that[O1][index] = entry;
	      }return that;
	    }

	    var collectionMethods = {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function () {
	        for (var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n) {
	          entry.r = true;
	          entry.p = entry.n = undefined;
	          delete data[entry.i];
	        }
	        that[FIRST] = that[LAST] = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      "delete": function (key) {
	        var that = this,
	            entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n,
	              prev = entry.p;
	          delete that[O1][entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that[FIRST] == entry) that[FIRST] = next;
	          if (that[LAST] == entry) that[LAST] = prev;
	          that[SIZE]--;
	        }return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function (callbackfn /*, that = undefined */) {
	        var f = ctx(callbackfn, arguments[1], 3),
	            entry;
	        while (entry = entry ? entry.n : this[FIRST]) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function (key) {
	        return !!getEntry(this, key);
	      }
	    };

	    // 23.1 Map Objects
	    Map = getCollection(Map, MAP, {
	      // 23.1.3.6 Map.prototype.get(key)
	      get: function (key) {
	        var entry = getEntry(this, key);
	        return entry && entry.v;
	      },
	      // 23.1.3.9 Map.prototype.set(key, value)
	      set: function (key, value) {
	        return def(this, key === 0 ? 0 : key, value);
	      }
	    }, collectionMethods, true);

	    // 23.2 Set Objects
	    Set = getCollection(Set, SET, {
	      // 23.2.3.1 Set.prototype.add(value)
	      add: function (value) {
	        return def(this, value = value === 0 ? 0 : value, value);
	      }
	    }, collectionMethods);

	    function defWeak(that, key, value) {
	      if (isFrozen(assertObject(key))) leakStore(that).set(key, value);else {
	        has(key, WEAK) || hidden(key, WEAK, {});
	        key[WEAK][that[UID]] = value;
	      }return that;
	    }
	    function leakStore(that) {
	      return that[LEAK] || hidden(that, LEAK, new Map())[LEAK];
	    }

	    var weakMethods = {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      "delete": function (key) {
	        if (!isObject(key)) return false;
	        if (isFrozen(key)) return leakStore(this)["delete"](key);
	        return has(key, WEAK) && has(key[WEAK], this[UID]) && delete key[WEAK][this[UID]];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function (key) {
	        if (!isObject(key)) return false;
	        if (isFrozen(key)) return leakStore(this).has(key);
	        return has(key, WEAK) && has(key[WEAK], this[UID]);
	      }
	    };

	    // 23.3 WeakMap Objects
	    WeakMap = getCollection(WeakMap, WEAKMAP, {
	      // 23.3.3.3 WeakMap.prototype.get(key)
	      get: function (key) {
	        if (isObject(key)) {
	          if (isFrozen(key)) return leakStore(this).get(key);
	          if (has(key, WEAK)) return key[WEAK][this[UID]];
	        }
	      },
	      // 23.3.3.5 WeakMap.prototype.set(key, value)
	      set: function (key, value) {
	        return defWeak(this, key, value);
	      }
	    }, weakMethods, true, true);

	    // IE11 WeakMap frozen keys fix
	    if (framework && DESC && new WeakMap([[Object.freeze(tmp), 7]]).get(tmp) != 7) {
	      forEach.call(array("delete,has,get,set"), function (key) {
	        var method = WeakMap[PROTOTYPE][key];
	        WeakMap[PROTOTYPE][key] = function (a, b) {
	          // store frozen objects on leaky map
	          if (isObject(a) && isFrozen(a)) {
	            var result = leakStore(this)[key](a, b);
	            return key == "set" ? this : result;
	            // store all the rest on native weakmap
	          }return method.call(this, a, b);
	        };
	      });
	    }

	    // 23.4 WeakSet Objects
	    WeakSet = getCollection(WeakSet, WEAKSET, {
	      // 23.4.3.1 WeakSet.prototype.add(value)
	      add: function (value) {
	        return defWeak(this, value, true);
	      }
	    }, weakMethods, false, true);
	  })();

	  /******************************************************************************
	   * Module : es6_reflect                                                       *
	   ******************************************************************************/

	  !(function () {
	    function Enumerate(iterated) {
	      var keys = [],
	          key;
	      for (key in iterated) keys.push(key);
	      set(this, ITER, { o: iterated, a: keys, i: 0 });
	    }
	    createIterator(Enumerate, OBJECT, function () {
	      var iter = this[ITER],
	          keys = iter.a,
	          key;
	      do {
	        if (iter.i >= keys.length) return iterResult(1);
	      } while (!((key = keys[iter.i++]) in iter.o));
	      return iterResult(0, key);
	    });

	    function wrap(fn) {
	      return function (it) {
	        assertObject(it);
	        try {
	          return (fn.apply(undefined, arguments), true);
	        } catch (e) {
	          return false;
	        }
	      };
	    }

	    function reflectGet(target, propertyKey /*, receiver*/) {
	      var _arguments = arguments,
	          _this = this,
	          _shouldContinue,
	          _result;
	      do {
	        _shouldContinue = false;
	        _result = (function (target, propertyKey) {
	          var receiver = arguments.length < 3 ? target : arguments[2],
	              desc = getOwnDescriptor(assertObject(target), propertyKey),
	              proto;
	          if (desc) return desc.get ? desc.get.call(receiver) : desc.value;
	          if (isObject(proto = getPrototypeOf(target))) {
	            _arguments = [proto, propertyKey, receiver];
	            _this = undefined;
	            return _shouldContinue = true;
	          } else {
	            return undefined;
	          }
	        }).apply(_this, _arguments);
	      } while (_shouldContinue);
	      return _result;
	    }
	    function reflectSet(target, propertyKey, V /*, receiver*/) {
	      var _arguments = arguments,
	          _this = this,
	          _shouldContinue,
	          _result;
	      do {
	        _shouldContinue = false;
	        _result = (function (target, propertyKey, V) {
	          var receiver = arguments.length < 4 ? target : arguments[3],
	              desc = getOwnDescriptor(assertObject(target), propertyKey),
	              proto;
	          if (desc) {
	            if (desc.writable === false) return false;
	            if (desc.set) return (desc.set.call(receiver, V), true);
	          }
	          if (isObject(proto = getPrototypeOf(target))) {
	            _arguments = [proto, propertyKey, V, receiver];
	            _this = undefined;
	            return _shouldContinue = true;
	          }
	          desc = getOwnDescriptor(receiver, propertyKey) || descriptor(0);
	          desc.value = V;
	          return (defineProperty(receiver, propertyKey, desc), true);
	        }).apply(_this, _arguments);
	      } while (_shouldContinue);
	      return _result;
	    }
	    var isExtensible = Object.isExtensible || returnIt;

	    var reflect = {
	      // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	      apply: ctx(call, apply, 3),
	      // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	      construct: construct,
	      // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	      defineProperty: wrap(defineProperty),
	      // 26.1.4 Reflect.deleteProperty(target, propertyKey)
	      deleteProperty: function (target, propertyKey) {
	        var desc = getOwnDescriptor(assertObject(target), propertyKey);
	        return desc && !desc.configurable ? false : delete target[propertyKey];
	      },
	      // 26.1.5 Reflect.enumerate(target)
	      enumerate: function (target) {
	        return new Enumerate(assertObject(target));
	      },
	      // 26.1.6 Reflect.get(target, propertyKey [, receiver])
	      get: reflectGet,
	      // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	      getOwnPropertyDescriptor: function (target, propertyKey) {
	        return getOwnDescriptor(assertObject(target), propertyKey);
	      },
	      // 26.1.8 Reflect.getPrototypeOf(target)
	      getPrototypeOf: function (target) {
	        return getPrototypeOf(assertObject(target));
	      },
	      // 26.1.9 Reflect.has(target, propertyKey)
	      has: function (target, propertyKey) {
	        return propertyKey in target;
	      },
	      // 26.1.10 Reflect.isExtensible(target)
	      isExtensible: function (target) {
	        return !!isExtensible(assertObject(target));
	      },
	      // 26.1.11 Reflect.ownKeys(target)
	      ownKeys: ownKeys,
	      // 26.1.12 Reflect.preventExtensions(target)
	      preventExtensions: wrap(Object.preventExtensions || returnIt),
	      // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	      set: reflectSet
	    };
	    // 26.1.14 Reflect.setPrototypeOf(target, proto)
	    if (setPrototypeOf) reflect.setPrototypeOf = function (target, proto) {
	      return (setPrototypeOf(assertObject(target), proto), true);
	    };

	    $define(GLOBAL, { Reflect: {} });
	    $define(STATIC, "Reflect", reflect);
	  })();

	  /******************************************************************************
	   * Module : es7                                                               *
	   ******************************************************************************/

	  !(function () {
	    $define(PROTO, ARRAY, {
	      // https://github.com/domenic/Array.prototype.includes
	      includes: createArrayContains(true)
	    });
	    $define(PROTO, STRING, {
	      // https://github.com/mathiasbynens/String.prototype.at
	      at: createPointAt(true)
	    });

	    function createObjectToArray(isEntries) {
	      return function (object) {
	        var O = toObject(object),
	            keys = getKeys(object),
	            length = keys.length,
	            i = 0,
	            result = Array(length),
	            key;
	        if (isEntries) while (length > i) result[i] = [key = keys[i++], O[key]];else while (length > i) result[i] = O[keys[i++]];
	        return result;
	      };
	    }
	    $define(STATIC, OBJECT, {
	      // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/apr-9.md#51-objectentries-objectvalues
	      values: createObjectToArray(false),
	      entries: createObjectToArray(true)
	    });
	    $define(STATIC, REGEXP, {
	      // https://gist.github.com/kangax/9698100
	      escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, "\\$1", true)
	    });
	  })();

	  /******************************************************************************
	   * Module : es7_refs                                                          *
	   ******************************************************************************/

	  // https://github.com/zenparsing/es-abstract-refs
	  !(function (REFERENCE) {
	    REFERENCE_GET = getWellKnownSymbol(REFERENCE + "Get", true);
	    var REFERENCE_SET = getWellKnownSymbol(REFERENCE + SET, true),
	        REFERENCE_DELETE = getWellKnownSymbol(REFERENCE + "Delete", true);

	    $define(STATIC, SYMBOL, {
	      referenceGet: REFERENCE_GET,
	      referenceSet: REFERENCE_SET,
	      referenceDelete: REFERENCE_DELETE
	    });

	    hidden(FunctionProto, REFERENCE_GET, returnThis);

	    function setMapMethods(Constructor) {
	      if (Constructor) {
	        var MapProto = Constructor[PROTOTYPE];
	        hidden(MapProto, REFERENCE_GET, MapProto.get);
	        hidden(MapProto, REFERENCE_SET, MapProto.set);
	        hidden(MapProto, REFERENCE_DELETE, MapProto["delete"]);
	      }
	    }
	    setMapMethods(Map);
	    setMapMethods(WeakMap);
	  })("reference");

	  /******************************************************************************
	   * Module : dom_itarable                                                      *
	   ******************************************************************************/

	  !(function (NodeList) {
	    if (framework && NodeList && !(SYMBOL_ITERATOR in NodeList[PROTOTYPE])) {
	      hidden(NodeList[PROTOTYPE], SYMBOL_ITERATOR, Iterators[ARRAY]);
	    }
	    Iterators.NodeList = Iterators[ARRAY];
	  })(global.NodeList);

	  /******************************************************************************
	   * Module : dict                                                              *
	   ******************************************************************************/

	  !(function (DICT) {
	    Dict = function (iterable) {
	      var dict = create(null);
	      if (iterable != undefined) {
	        if (isIterable(iterable)) {
	          for (var iter = getIterator(iterable), step, value; !(step = iter.next()).done;) {
	            value = step.value;
	            dict[value[0]] = value[1];
	          }
	        } else assign(dict, iterable);
	      }
	      return dict;
	    };
	    Dict[PROTOTYPE] = null;

	    function DictIterator(iterated, kind) {
	      set(this, ITER, { o: toObject(iterated), a: getKeys(iterated), i: 0, k: kind });
	    }
	    createIterator(DictIterator, DICT, function () {
	      var iter = this[ITER],
	          O = iter.o,
	          keys = iter.a,
	          kind = iter.k,
	          key;
	      do {
	        if (iter.i >= keys.length) return iterResult(1);
	      } while (!has(O, key = keys[iter.i++]));
	      if (kind == KEY) return iterResult(0, key);
	      if (kind == VALUE) return iterResult(0, O[key]);
	      return iterResult(0, [key, O[key]]);
	    });
	    function createDictIter(kind) {
	      return function (it) {
	        return new DictIterator(it, kind);
	      };
	    }

	    /*
	     * 0 -> forEach
	     * 1 -> map
	     * 2 -> filter
	     * 3 -> some
	     * 4 -> every
	     * 5 -> find
	     * 6 -> findKey
	     * 7 -> mapPairs
	     */
	    function createDictMethod(type) {
	      var isMap = type == 1,
	          isEvery = type == 4;
	      return function (object, callbackfn, that /* = undefined */) {
	        var f = ctx(callbackfn, that, 3),
	            O = toObject(object),
	            result = isMap || type == 7 || type == 2 ? new (generic(this, Dict))() : undefined,
	            key,
	            val,
	            res;
	        for (key in O) if (has(O, key)) {
	          val = O[key];
	          res = f(val, key, object);
	          if (type) {
	            if (isMap) result[key] = res; // map
	            else if (res) switch (type) {
	              case 2:
	                result[key] = val;break; // filter
	              case 3:
	                return true; // some
	              case 5:
	                return val; // find
	              case 6:
	                return key; // findKey
	              case 7:
	                result[res[0]] = res[1]; // mapPairs
	            } else if (isEvery) return false; // every
	          }
	        }
	        return type == 3 || isEvery ? isEvery : result;
	      };
	    }
	    function createDictReduce(isTurn) {
	      return function (object, mapfn, init) {
	        assertFunction(mapfn);
	        var O = toObject(object),
	            keys = getKeys(O),
	            length = keys.length,
	            i = 0,
	            memo,
	            key,
	            result;
	        if (isTurn) memo = init == undefined ? new (generic(this, Dict))() : Object(init);else if (arguments.length < 3) {
	          assert(length, REDUCE_ERROR);
	          memo = O[keys[i++]];
	        } else memo = Object(init);
	        while (length > i) if (has(O, key = keys[i++])) {
	          result = mapfn(memo, O[key], key, object);
	          if (isTurn) {
	            if (result === false) break;
	          } else memo = result;
	        }
	        return memo;
	      };
	    }
	    var findKey = createDictMethod(6);
	    function includes(object, el) {
	      return (el == el ? keyOf(object, el) : findKey(object, sameNaN)) !== undefined;
	    }

	    var dictMethods = {
	      keys: createDictIter(KEY),
	      values: createDictIter(VALUE),
	      entries: createDictIter(KEY + VALUE),
	      forEach: createDictMethod(0),
	      map: createDictMethod(1),
	      filter: createDictMethod(2),
	      some: createDictMethod(3),
	      every: createDictMethod(4),
	      find: createDictMethod(5),
	      findKey: findKey,
	      mapPairs: createDictMethod(7),
	      reduce: createDictReduce(false),
	      turn: createDictReduce(true),
	      keyOf: keyOf,
	      includes: includes,
	      // Has / get / set own property
	      has: has,
	      get: get,
	      set: createDefiner(0),
	      isDict: function (it) {
	        return isObject(it) && getPrototypeOf(it) === Dict[PROTOTYPE];
	      }
	    };

	    if (REFERENCE_GET) for (var key in dictMethods) !(function (fn) {
	      function method() {
	        for (var args = [this], i = 0; i < arguments.length;) args.push(arguments[i++]);
	        return invoke(fn, args);
	      }
	      fn[REFERENCE_GET] = function () {
	        return method;
	      };
	    })(dictMethods[key]);

	    $define(GLOBAL + FORCED, { Dict: assignHidden(Dict, dictMethods) });
	  })("Dict");

	  /******************************************************************************
	   * Module : $for                                                              *
	   ******************************************************************************/

	  !(function (ENTRIES, FN) {
	    function $for(iterable, entries) {
	      if (!(this instanceof $for)) return new $for(iterable, entries);
	      this[ITER] = getIterator(iterable);
	      this[ENTRIES] = !!entries;
	    }

	    createIterator($for, "Wrapper", function () {
	      return this[ITER].next();
	    });
	    var $forProto = $for[PROTOTYPE];
	    setIterator($forProto, function () {
	      return this[ITER]; // unwrap
	    });

	    function createChainIterator(next) {
	      function Iter(I, fn, that) {
	        this[ITER] = getIterator(I);
	        this[ENTRIES] = I[ENTRIES];
	        this[FN] = ctx(fn, that, I[ENTRIES] ? 2 : 1);
	      }
	      createIterator(Iter, "Chain", next, $forProto);
	      setIterator(Iter[PROTOTYPE], returnThis); // override $forProto iterator
	      return Iter;
	    }

	    var MapIter = createChainIterator(function () {
	      var step = this[ITER].next();
	      return step.done ? step : iterResult(0, stepCall(this[FN], step.value, this[ENTRIES]));
	    });

	    var FilterIter = createChainIterator(function () {
	      for (;;) {
	        var step = this[ITER].next();
	        if (step.done || stepCall(this[FN], step.value, this[ENTRIES])) return step;
	      }
	    });

	    assignHidden($forProto, {
	      of: function (fn, that) {
	        forOf(this, this[ENTRIES], fn, that);
	      },
	      array: function (fn, that) {
	        var result = [];
	        forOf(fn != undefined ? this.map(fn, that) : this, false, push, result);
	        return result;
	      },
	      filter: function (fn, that) {
	        return new FilterIter(this, fn, that);
	      },
	      map: function (fn, that) {
	        return new MapIter(this, fn, that);
	      }
	    });

	    $for.isIterable = isIterable;
	    $for.getIterator = getIterator;

	    $define(GLOBAL + FORCED, { $for: $for });
	  })("entries", safeSymbol("fn"));

	  /******************************************************************************
	   * Module : binding                                                           *
	   ******************************************************************************/

	  !(function (_, toLocaleString) {
	    // Placeholder
	    core._ = path._ = path._ || {};

	    $define(PROTO + FORCED, FUNCTION, {
	      part: part,
	      only: function (numberArguments, that /* = @ */) {
	        var fn = assertFunction(this),
	            n = toLength(numberArguments),
	            isThat = arguments.length > 1;
	        return function () {
	          var length = min(n, arguments.length),
	              args = Array(length),
	              i = 0;
	          while (length > i) args[i] = arguments[i++];
	          return invoke(fn, args, isThat ? that : this);
	        };
	      }
	    });

	    function tie(key) {
	      var that = this,
	          bound = {};
	      return hidden(that, _, function (key) {
	        if (key === undefined || !(key in that)) return toLocaleString.call(that);
	        return has(bound, key) ? bound[key] : bound[key] = ctx(that[key], that, -1);
	      })[_](key);
	    }

	    hidden(path._, TO_STRING, function () {
	      return _;
	    });

	    hidden(ObjectProto, _, tie);
	    DESC || hidden(ArrayProto, _, tie);
	    // IE8- dirty hack - redefined toLocaleString is not enumerable
	  })(DESC ? uid("tie") : TO_LOCALE, ObjectProto[TO_LOCALE]);

	  /******************************************************************************
	   * Module : object                                                            *
	   ******************************************************************************/

	  !(function () {
	    function define(target, mixin) {
	      var keys = ownKeys(toObject(mixin)),
	          length = keys.length,
	          i = 0,
	          key;
	      while (length > i) defineProperty(target, key = keys[i++], getOwnDescriptor(mixin, key));
	      return target;
	    };
	    $define(STATIC + FORCED, OBJECT, {
	      isObject: isObject,
	      classof: classof,
	      define: define,
	      make: function (proto, mixin) {
	        return define(create(proto), mixin);
	      }
	    });
	  })();

	  /******************************************************************************
	   * Module : array                                                             *
	   ******************************************************************************/

	  $define(PROTO + FORCED, ARRAY, {
	    turn: function (fn, target /* = [] */) {
	      assertFunction(fn);
	      var memo = target == undefined ? [] : Object(target),
	          O = ES5Object(this),
	          length = toLength(O.length),
	          index = 0;
	      while (length > index) if (fn(memo, O[index], index++, this) === false) break;
	      return memo;
	    }
	  });
	  if (framework) ArrayUnscopables.turn = true;

	  /******************************************************************************
	   * Module : array_statics                                                     *
	   ******************************************************************************/

	  // JavaScript 1.6 / Strawman array statics shim
	  !(function (arrayStatics) {
	    function setArrayStatics(keys, length) {
	      forEach.call(array(keys), function (key) {
	        if (key in ArrayProto) arrayStatics[key] = ctx(call, ArrayProto[key], length);
	      });
	    }
	    setArrayStatics("pop,reverse,shift,keys,values,entries", 1);
	    setArrayStatics("indexOf,every,some,forEach,map,filter,find,findIndex,includes", 3);
	    setArrayStatics("join,slice,concat,push,splice,unshift,sort,lastIndexOf," + "reduce,reduceRight,copyWithin,fill,turn");
	    $define(STATIC, ARRAY, arrayStatics);
	  })({});

	  /******************************************************************************
	   * Module : number                                                            *
	   ******************************************************************************/

	  !(function (numberMethods) {
	    function NumberIterator(iterated) {
	      set(this, ITER, { l: toLength(iterated), i: 0 });
	    }
	    createIterator(NumberIterator, NUMBER, function () {
	      var iter = this[ITER],
	          i = iter.i++;
	      return i < iter.l ? iterResult(0, i) : iterResult(1);
	    });
	    defineIterator(Number, NUMBER, function () {
	      return new NumberIterator(this);
	    });

	    numberMethods.random = function (lim /* = 0 */) {
	      var a = +this,
	          b = lim == undefined ? 0 : +lim,
	          m = min(a, b);
	      return random() * (max(a, b) - m) + m;
	    };

	    forEach.call(array(
	    // ES3:
	    "round,floor,ceil,abs,sin,asin,cos,acos,tan,atan,exp,sqrt,max,min,pow,atan2," +
	    // ES6:
	    "acosh,asinh,atanh,cbrt,clz32,cosh,expm1,hypot,imul,log1p,log10,log2,sign,sinh,tanh,trunc"), function (key) {
	      var fn = Math[key];
	      if (fn) numberMethods[key] = function () {
	        // ie9- dont support strict mode & convert `this` to object -> convert it to number
	        var args = [+this],
	            i = 0;
	        while (arguments.length > i) args.push(arguments[i++]);
	        return invoke(fn, args);
	      };
	    });

	    $define(PROTO + FORCED, NUMBER, numberMethods);
	  })({});

	  /******************************************************************************
	   * Module : string                                                            *
	   ******************************************************************************/

	  !(function () {
	    var escapeHTMLDict = {
	      "&": "&amp;",
	      "<": "&lt;",
	      ">": "&gt;",
	      "\"": "&quot;",
	      "'": "&apos;"
	    },
	        unescapeHTMLDict = {},
	        key;
	    for (key in escapeHTMLDict) unescapeHTMLDict[escapeHTMLDict[key]] = key;
	    $define(PROTO + FORCED, STRING, {
	      escapeHTML: createReplacer(/[&<>"']/g, escapeHTMLDict),
	      unescapeHTML: createReplacer(/&(?:amp|lt|gt|quot|apos);/g, unescapeHTMLDict)
	    });
	  })();

	  /******************************************************************************
	   * Module : date                                                              *
	   ******************************************************************************/

	  !(function (formatRegExp, flexioRegExp, locales, current, SECONDS, MINUTES, HOURS, MONTH, YEAR) {
	    function createFormat(prefix) {
	      return function (template, locale /* = current */) {
	        var that = this,
	            dict = locales[has(locales, locale) ? locale : current];
	        function get(unit) {
	          return that[prefix + unit]();
	        }
	        return String(template).replace(formatRegExp, function (part) {
	          switch (part) {
	            case "s":
	              return get(SECONDS); // Seconds : 0-59
	            case "ss":
	              return lz(get(SECONDS)); // Seconds : 00-59
	            case "m":
	              return get(MINUTES); // Minutes : 0-59
	            case "mm":
	              return lz(get(MINUTES)); // Minutes : 00-59
	            case "h":
	              return get(HOURS); // Hours   : 0-23
	            case "hh":
	              return lz(get(HOURS)); // Hours   : 00-23
	            case "D":
	              return get(DATE); // Date    : 1-31
	            case "DD":
	              return lz(get(DATE)); // Date    : 01-31
	            case "W":
	              return dict[0][get("Day")]; // Day     : Понедельник
	            case "N":
	              return get(MONTH) + 1; // Month   : 1-12
	            case "NN":
	              return lz(get(MONTH) + 1); // Month   : 01-12
	            case "M":
	              return dict[2][get(MONTH)]; // Month   : Январь
	            case "MM":
	              return dict[1][get(MONTH)]; // Month   : Января
	            case "Y":
	              return get(YEAR); // Year    : 2014
	            case "YY":
	              return lz(get(YEAR) % 100); // Year    : 14
	          }return part;
	        });
	      };
	    }
	    function lz(num) {
	      return num > 9 ? num : "0" + num;
	    }
	    function addLocale(lang, locale) {
	      function split(index) {
	        var result = [];
	        forEach.call(array(locale.months), function (it) {
	          result.push(it.replace(flexioRegExp, "$" + index));
	        });
	        return result;
	      }
	      locales[lang] = [array(locale.weekdays), split(1), split(2)];
	      return core;
	    }
	    $define(PROTO + FORCED, DATE, {
	      format: createFormat("get"),
	      formatUTC: createFormat("getUTC")
	    });
	    addLocale(current, {
	      weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
	      months: "January,February,March,April,May,June,July,August,September,October,November,December"
	    });
	    addLocale("ru", {
	      weekdays: "Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота",
	      months: "Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь," + "Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь"
	    });
	    core.locale = function (locale) {
	      return has(locales, locale) ? current = locale : current;
	    };
	    core.addLocale = addLocale;
	  })(/\b\w\w?\b/g, /:(.*)\|(.*)$/, {}, "en", "Seconds", "Minutes", "Hours", "Month", "FullYear");
	})(typeof self != "undefined" && self.Math === Math ? self : Function("return this")(), false);
	/* ...args */ /* ...args */ /* ...args */ /* ...args */ /* ...args */ /* ...args */

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/*!
	 * jQuery JavaScript Library v2.1.1
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-05-01T17:11Z
	 */

	(function (global, factory) {
		if (typeof module === "object" && typeof module.exports === "object") {
			// For CommonJS and CommonJS-like environments where a proper window is present,
			// execute the factory and get jQuery
			// For environments that do not inherently posses a window with a document
			// (such as Node.js), expose a jQuery-making factory as module.exports
			// This accentuates the need for the creation of a real window
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		} else {
			factory(global);
		}

		// Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {
		// Can't do this because several apps including ASP.NET trace
		// the stack via arguments.caller.callee and Firefox dies if
		// you try to trace through "use strict" call chains. (#13335)
		// Support: Firefox 18+
		//

		var arr = [];

		var slice = arr.slice;

		var concat = arr.concat;

		var push = arr.push;

		var indexOf = arr.indexOf;

		var class2type = {};

		var toString = class2type.toString;

		var hasOwn = class2type.hasOwnProperty;

		var support = {};



		var
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,
		    version = "2.1.1",
		   

		// Define a local copy of jQuery
		jQuery = function (selector, context) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init(selector, context);
		},
		   

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		   

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([\da-z])/gi,
		   

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function (all, letter) {
			return letter.toUpperCase();
		};

		jQuery.fn = jQuery.prototype = {
			// The current version of jQuery being used
			jquery: version,

			constructor: jQuery,

			// Start with an empty selector
			selector: "",

			// The default length of a jQuery object is 0
			length: 0,

			toArray: function () {
				return slice.call(this);
			},

			// Get the Nth element in the matched element set OR
			// Get the whole matched element set as a clean array
			get: function (num) {
				return num != null ? num < 0 ? this[num + this.length] : this[num] :

				// Return all the elements in a clean array
				slice.call(this);
			},

			// Take an array of elements and push it onto the stack
			// (returning the new matched element set)
			pushStack: function (elems) {
				// Build a new jQuery matched element set
				var ret = jQuery.merge(this.constructor(), elems);

				// Add the old object onto the stack (as a reference)
				ret.prevObject = this;
				ret.context = this.context;

				// Return the newly-formed element set
				return ret;
			},

			// Execute a callback for every element in the matched set.
			// (You can seed the arguments with an array of args, but this is
			// only used internally.)
			each: function (callback, args) {
				return jQuery.each(this, callback, args);
			},

			map: function (callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},

			slice: function () {
				return this.pushStack(slice.apply(this, arguments));
			},

			first: function () {
				return this.eq(0);
			},

			last: function () {
				return this.eq(-1);
			},

			eq: function (i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},

			end: function () {
				return this.prevObject || this.constructor(null);
			},

			// For internal use only.
			// Behaves like an Array's method, not like a jQuery method.
			push: push,
			sort: arr.sort,
			splice: arr.splice
		};

		jQuery.extend = jQuery.fn.extend = function () {
			var options,
			    name,
			    src,
			    copy,
			    copyIsArray,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;

			// Handle a deep copy situation
			if (typeof target === "boolean") {
				deep = target;

				// skip the boolean and the target
				target = arguments[i] || {};
				i++;
			}

			// Handle case when target is a string or something (possible in deep copy)
			if (typeof target !== "object" && !jQuery.isFunction(target)) {
				target = {};
			}

			// extend jQuery itself if only one argument is passed
			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {
				// Only deal with non-null/undefined values
				if ((options = arguments[i]) != null) {
					// Extend the base object
					for (name in options) {
						src = target[name];
						copy = options[name];

						// Prevent never-ending loop
						if (target === copy) {
							continue;
						}

						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = jQuery.extend(deep, clone, copy);

							// Don't bring in undefined values
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}

			// Return the modified object
			return target;
		};

		jQuery.extend({
			// Unique for each copy of jQuery on the page
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

			// Assume jQuery is ready without the ready module
			isReady: true,

			error: function (msg) {
				throw new Error(msg);
			},

			noop: function () {},

			// See test/unit/core.js for details concerning isFunction.
			// Since version 1.3, DOM methods and functions like alert
			// aren't supported. They return false on IE (#2968).
			isFunction: function (obj) {
				return jQuery.type(obj) === "function";
			},

			isArray: Array.isArray,

			isWindow: function (obj) {
				return obj != null && obj === obj.window;
			},

			isNumeric: function (obj) {
				// parseFloat NaNs numeric-cast false positives (null|true|false|"")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				return !jQuery.isArray(obj) && obj - parseFloat(obj) >= 0;
			},

			isPlainObject: function (obj) {
				// Not plain objects:
				// - Any object or value whose internal [[Class]] property is not "[object Object]"
				// - DOM nodes
				// - window
				if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
					return false;
				}

				if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}

				// If the function hasn't returned already, we're confident that
				// |obj| is a plain object, created by {} or constructed with new Object
				return true;
			},

			isEmptyObject: function (obj) {
				var name;
				for (name in obj) {
					return false;
				}
				return true;
			},

			type: function (obj) {
				if (obj == null) {
					return obj + "";
				}
				// Support: Android < 4.0, iOS < 6 (functionish RegExp)
				return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
			},

			// Evaluates a script in a global context
			globalEval: function (code) {
				var script,
				    indirect = eval;

				code = jQuery.trim(code);

				if (code) {
					// If the code includes a valid, prologue position
					// strict mode pragma, execute code by injecting a
					// script tag into the document.
					if (code.indexOf("use strict") === 1) {
						script = document.createElement("script");
						script.text = code;
						document.head.appendChild(script).parentNode.removeChild(script);
					} else {
						// Otherwise, avoid the DOM node creation, insertion
						// and removal by using an indirect global eval
						indirect(code);
					}
				}
			},

			// Convert dashed to camelCase; used by the css and data modules
			// Microsoft forgot to hump their vendor prefix (#9572)
			camelCase: function (string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			},

			nodeName: function (elem, name) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},

			// args is for internal usage only
			each: function (obj, callback, args) {
				var value,
				    i = 0,
				    length = obj.length,
				    isArray = isArraylike(obj);

				if (args) {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.apply(obj[i], args);

							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.apply(obj[i], args);

							if (value === false) {
								break;
							}
						}
					}

					// A special, fast, case for the most common use of each
				} else {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.call(obj[i], i, obj[i]);

							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.call(obj[i], i, obj[i]);

							if (value === false) {
								break;
							}
						}
					}
				}

				return obj;
			},

			// Support: Android<4.1
			trim: function (text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},

			// results is for internal usage only
			makeArray: function (arr, results) {
				var ret = results || [];

				if (arr != null) {
					if (isArraylike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}

				return ret;
			},

			inArray: function (elem, arr, i) {
				return arr == null ? -1 : indexOf.call(arr, elem, i);
			},

			merge: function (first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;

				for (; j < len; j++) {
					first[i++] = second[j];
				}

				first.length = i;

				return first;
			},

			grep: function (elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;

				// Go through the array, only saving the items
				// that pass the validator function
				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}

				return matches;
			},

			// arg is for internal usage only
			map: function (elems, callback, arg) {
				var value,
				    i = 0,
				    length = elems.length,
				    isArray = isArraylike(elems),
				    ret = [];

				// Go through the array, translating each of the items to their new values
				if (isArray) {
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}

					// Go through every key on the object,
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}
				}

				// Flatten any nested arrays
				return concat.apply([], ret);
			},

			// A global GUID counter for objects
			guid: 1,

			// Bind a function to a context, optionally partially applying any
			// arguments.
			proxy: function (fn, context) {
				var tmp, args, proxy;

				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}

				// Quick check to determine if target is callable, in the spec
				// this throws a TypeError, but we will just return undefined.
				if (!jQuery.isFunction(fn)) {
					return undefined;
				}

				// Simulated bind
				args = slice.call(arguments, 2);
				proxy = function () {
					return fn.apply(context || this, args.concat(slice.call(arguments)));
				};

				// Set the guid of unique handler to the same of original handler, so it can be removed
				proxy.guid = fn.guid = fn.guid || jQuery.guid++;

				return proxy;
			},

			now: Date.now,

			// jQuery.support is not used in Core but other projects attach their
			// properties to it so it needs to exist.
			support: support
		});

		// Populate the class2type map
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});

		function isArraylike(obj) {
			var length = obj.length,
			    type = jQuery.type(obj);

			if (type === "function" || jQuery.isWindow(obj)) {
				return false;
			}

			if (obj.nodeType === 1 && length) {
				return true;
			}

			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle =
		/*!
	  * Sizzle CSS Selector Engine v1.10.19
	  * http://sizzlejs.com/
	  *
	  * Copyright 2013 jQuery Foundation, Inc. and other contributors
	  * Released under the MIT license
	  * http://jquery.org/license
	  *
	  * Date: 2014-04-18
	  */
		(function (window) {
			var i,
			    support,
			    Expr,
			    getText,
			    isXML,
			    tokenize,
			    compile,
			    select,
			    outermostContext,
			    sortInput,
			    hasDuplicate,
			   

			// Local document vars
			setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,
			   

			// Instance-specific data
			expando = "sizzle" + -new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    sortOrder = function (a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},
			   

			// General-purpose constants
			strundefined = typeof undefined,
			    MAX_NEGATIVE = 1 << 31,
			   

			// Instance methods
			hasOwn = ({}).hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,
			   
			// Use a stripped-down indexOf if we can't use a native one
			indexOf = arr.indexOf || function (elem) {
				var i = 0,
				    len = this.length;
				for (; i < len; i++) {
					if (this[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			   

			// Regular expressions

			// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
			whitespace = "[\\x20\\t\\r\\n\\f]",
			   
			// http://www.w3.org/TR/css3-syntax/#characters
			characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			   

			// Loosely modeled on CSS identifier characters
			// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
			// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
			identifier = characterEncoding.replace("w", "w#"),
			   

			// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
			attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" + ")\\)|)",
			   

			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
			rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				ID: new RegExp("^#(" + characterEncoding + ")"),
				CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
				TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + attributes),
				PSEUDO: new RegExp("^" + pseudos),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + booleans + ")$", "i"),
				// For use in libraries implementing .is()
				// We use this for POS matching in `select`
				needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,
			   

			// Easily-parseable/retrievable ID or TAG or CLASS selectors
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,
			    rescape = /'|\\/g,
			   

			// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
			runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function (_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 65536;
				// NaN means non-codepoint
				// Support: Firefox<24
				// Workaround erroneous numeric interpretation of +"0x"
				return high !== high || escapedWhitespace ? escaped : high < 0 ?
				// BMP codepoint
				String.fromCharCode(high + 65536) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
			};

			// Optimize for push.apply( _, NodeList )
			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
				// Support: Android<4.0
				// Detect silently failing push.apply
				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ?

					// Leverage slice if possible
					function (target, els) {
						push_native.apply(target, slice.call(els));
					} :

					// Support: IE<9
					// Otherwise append directly
					function (target, els) {
						var j = target.length,
						    i = 0;
						// Can't trust NodeList.length
						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}

			function Sizzle(selector, context, results, seed) {
				var match, elem, m, nodeType,
				// QSA vars
				i, groups, old, nid, newContext, newSelector;

				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}

				context = context || document;
				results = results || [];

				if (!selector || typeof selector !== "string") {
					return results;
				}

				if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
					return [];
				}

				if (documentIsHTML && !seed) {
					// Shortcuts
					if (match = rquickExpr.exec(selector)) {
						// Speed-up: Sizzle("#ID")
						if (m = match[1]) {
							if (nodeType === 9) {
								elem = context.getElementById(m);
								// Check parentNode to catch when Blackberry 4.6 returns
								// nodes that are no longer in the document (jQuery #6963)
								if (elem && elem.parentNode) {
									// Handle the case where IE, Opera, and Webkit return items
									// by name instead of ID
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}
							} else {
								// Context is not a document
								if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
									results.push(elem);
									return results;
								}
							}

							// Speed-up: Sizzle("TAG")
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;

							// Speed-up: Sizzle(".CLASS")
						} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}

					// QSA path
					if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
						nid = old = expando;
						newContext = context;
						newSelector = nodeType === 9 && selector;

						// qSA works strangely on Element-rooted queries
						// We can work around this by specifying an extra ID on the root
						// and working up from there (Thanks to Andrew Dupont for the technique)
						// IE 8 doesn't work on object elements
						if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
							groups = tokenize(selector);

							if (old = context.getAttribute("id")) {
								nid = old.replace(rescape, "\\$&");
							} else {
								context.setAttribute("id", nid);
							}
							nid = "[id='" + nid + "'] ";

							i = groups.length;
							while (i--) {
								groups[i] = nid + toSelector(groups[i]);
							}
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
							newSelector = groups.join(",");
						}

						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (!old) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}

				// All others
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}

			/**
	   * Create key-value caches of limited size
	   * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	   *	deleting the oldest entry
	   */
			function createCache() {
				var keys = [];

				function cache(key, value) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if (keys.push(key + " ") > Expr.cacheLength) {
						// Only keep the most recent entries
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}

			/**
	   * Mark a function for special use by Sizzle
	   * @param {Function} fn The function to mark
	   */
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}

			/**
	   * Support testing using an element
	   * @param {Function} fn Passed the created div and expects a boolean result
	   */
			function assert(fn) {
				var div = document.createElement("div");

				try {
					return !!fn(div);
				} catch (e) {
					return false;
				} finally {
					// Remove from its parent by default
					if (div.parentNode) {
						div.parentNode.removeChild(div);
					}
					// release memory in IE
					div = null;
				}
			}

			/**
	   * Adds the same handler for all of the specified attrs
	   * @param {String} attrs Pipe-separated list of attributes
	   * @param {Function} handler The method that will be applied
	   */
			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = attrs.length;

				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}

			/**
	   * Checks document order of two siblings
	   * @param {Element} a
	   * @param {Element} b
	   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	   */
			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);

				// Use IE sourceIndex if available on both nodes
				if (diff) {
					return diff;
				}

				// Check if b follows a
				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}

				return a ? 1 : -1;
			}

			/**
	   * Returns a function to use in pseudos for input types
	   * @param {String} type
	   */
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}

			/**
	   * Returns a function to use in pseudos for buttons
	   * @param {String} type
	   */
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}

			/**
	   * Returns a function to use in pseudos for positionals
	   * @param {Function} fn
	   */
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;

						// Match elements found at the specified indexes
						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}

			/**
	   * Checks a node for validity as a Sizzle context
	   * @param {Element|Object=} context
	   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	   */
			function testContext(context) {
				return context && typeof context.getElementsByTagName !== strundefined && context;
			}

			// Expose support vars for convenience
			support = Sizzle.support = {};

			/**
	   * Detects XML nodes
	   * @param {Element|Object} elem An element or a document
	   * @returns {Boolean} True iff elem is a non-HTML XML node
	   */
			isXML = Sizzle.isXML = function (elem) {
				// documentElement is verified for cases where it doesn't yet exist
				// (such as loading iframes in IE - #4833)
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};

			/**
	   * Sets document-related variables once based on the current document
	   * @param {Element|Object} [doc] An element or document object to use to set the document
	   * @returns {Object} Returns the current document
	   */
			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    doc = node ? node.ownerDocument || node : preferredDoc,
				    parent = doc.defaultView;

				// If no document and documentElement is available, return
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}

				// Set our document
				document = doc;
				docElem = doc.documentElement;

				// Support tests
				documentIsHTML = !isXML(doc);

				// Support: IE>8
				// If iframe document is assigned to "document" variable and if iframe has been reloaded,
				// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
				// IE6-8 do not support the defaultView property so parent will be undefined
				if (parent && parent !== parent.top) {
					// IE11 does not have attachEvent, so all must suffer
					if (parent.addEventListener) {
						parent.addEventListener("unload", function () {
							setDocument();
						}, false);
					} else if (parent.attachEvent) {
						parent.attachEvent("onunload", function () {
							setDocument();
						});
					}
				}

				/* Attributes
	   ---------------------------------------------------------------------- */

				// Support: IE<8
				// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
				support.attributes = assert(function (div) {
					div.className = "i";
					return !div.getAttribute("className");
				});

				/* getElement(s)By*
	   ---------------------------------------------------------------------- */

				// Check if getElementsByTagName("*") returns only elements
				support.getElementsByTagName = assert(function (div) {
					div.appendChild(doc.createComment(""));
					return !div.getElementsByTagName("*").length;
				});

				// Check if getElementsByClassName can be trusted
				support.getElementsByClassName = rnative.test(doc.getElementsByClassName) && assert(function (div) {
					div.innerHTML = "<div class='a'></div><div class='a i'></div>";

					// Support: Safari<4
					// Catch class over-caching
					div.firstChild.className = "i";
					// Support: Opera<10
					// Catch gEBCN failure to find non-leading classes
					return div.getElementsByClassName("i").length === 2;
				});

				// Support: IE<10
				// Check if getElementById returns elements by name
				// The broken getElementById methods don't pick up programatically-set names,
				// so use a roundabout getElementsByName test
				support.getById = assert(function (div) {
					docElem.appendChild(div).id = expando;
					return !doc.getElementsByName || !doc.getElementsByName(expando).length;
				});

				// ID find and filter
				if (support.getById) {
					Expr.find.ID = function (id, context) {
						if (typeof context.getElementById !== strundefined && documentIsHTML) {
							var m = context.getElementById(id);
							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document #6963
							return m && m.parentNode ? [m] : [];
						}
					};
					Expr.filter.ID = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
				} else {
					// Support: IE6/7
					// getElementById is not reliable as a find shortcut
					delete Expr.find.ID;

					Expr.filter.ID = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
				}

				// Tag
				Expr.find.TAG = support.getElementsByTagName ? function (tag, context) {
					if (typeof context.getElementsByTagName !== strundefined) {
						return context.getElementsByTagName(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,
					    results = context.getElementsByTagName(tag);

					// Filter out possible comments
					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}

						return tmp;
					}
					return results;
				};

				// Class
				Expr.find.CLASS = support.getElementsByClassName && function (className, context) {
					if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};

				/* QSA/matchesSelector
	   ---------------------------------------------------------------------- */

				// QSA and matchesSelector support

				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];

				// qSa(:focus) reports false when true (Chrome 21)
				// We allow this because of a bug in IE8/9 that throws an error
				// whenever `document.activeElement` is accessed on an iframe
				// So, we allow :focus to pass through QSA all the time to avoid the IE error
				// See http://bugs.jquery.com/ticket/13378
				rbuggyQSA = [];

				if (support.qsa = rnative.test(doc.querySelectorAll)) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function (div) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explicitly
						// setting a boolean content attribute,
						// since its presence should be enough
						// http://bugs.jquery.com/ticket/12359
						div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";

						// Support: IE8, Opera 11-12.16
						// Nothing should be selected when empty strings follow ^= or $= or *=
						// The test attribute must be unknown in Opera but "safe" for WinRT
						// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
						if (div.querySelectorAll("[msallowclip^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}

						// Support: IE8
						// Boolean attributes and "value" are not treated correctly
						if (!div.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}

						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}
					});

					assert(function (div) {
						// Support: Windows 8 Native Apps
						// The type and name attributes are restricted during .innerHTML assignment
						var input = doc.createElement("input");
						input.setAttribute("type", "hidden");
						div.appendChild(input).setAttribute("name", "D");

						// Support: IE8
						// Enforce case-sensitivity of name attribute
						if (div.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}

						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":enabled").length) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						// Opera 10-11 does not throw on post-comma invalid pseudos
						div.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}

				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
					assert(function (div) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call(div, "div");

						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call(div, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}

				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

				/* Contains
	   ---------------------------------------------------------------------- */
				hasCompare = rnative.test(docElem.compareDocumentPosition);

				// Element contains another
				// Purposefully does not implement inclusive descendent
				// As in, an element does not contain itself
				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};

				/* Sorting
	   ---------------------------------------------------------------------- */

				// Document order sorting
				sortOrder = hasCompare ? function (a, b) {
					// Flag for duplicate removal
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					// Sort on method existence if only one input has compareDocumentPosition
					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}

					// Calculate position if both inputs belong to the same document
					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

					// Otherwise we know they are disconnected
					1;

					// Disconnected nodes
					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
						// Choose the first element that is related to our preferred document
						if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}

						// Maintain original order
						return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
					}

					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					// Exit early if the nodes are identical
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];

					// Parentless nodes are either documents or disconnected
					if (!aup || !bup) {
						return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;

						// If the nodes are siblings, we can do a quick check
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}

					// Otherwise we need full lists of their ancestors for comparison
					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}

					// Walk down the tree looking for a discrepancy
					while (ap[i] === bp[i]) {
						i++;
					}

					return i ?
					// Do a sibling check if the nodes have a common ancestor
					siblingCheck(ap[i], bp[i]) :

					// Otherwise nodes in our document sort first
					ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};

				return doc;
			};

			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};

			Sizzle.matchesSelector = function (elem, expr) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				// Make sure that attribute selectors are quoted
				expr = expr.replace(rattributeQuotes, "='$1']");

				if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
					try {
						var ret = matches.call(elem, expr);

						// IE 9's matchesSelector returns false on disconnected nodes
						if (ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}

				return Sizzle(expr, document, null, [elem]).length > 0;
			};

			Sizzle.contains = function (context, elem) {
				// Set document vars if needed
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};

			Sizzle.attr = function (elem, name) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				var fn = Expr.attrHandle[name.toLowerCase()],
				   
				// Don't get fooled by Object.prototype properties (jQuery #13807)
				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};

			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};

			/**
	   * Document sorting and removing duplicates
	   * @param {ArrayLike} results
	   */
			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;

				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);

				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}

				// Clear input after sorting to release objects
				// See https://github.com/jquery/sizzle/pull/225
				sortInput = null;

				return results;
			};

			/**
	   * Utility function for retrieving the text value of an array of DOM nodes
	   * @param {Array|Element} elem
	   */
			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;

				if (!nodeType) {
					// If no nodeType, this is expected to be an array
					while (node = elem[i++]) {
						// Do not traverse comment nodes
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (jQuery #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes

				return ret;
			};

			Expr = Sizzle.selectors = {

				// Can be adjusted by the user
				cacheLength: 50,

				createPseudo: markFunction,

				match: matchExpr,

				attrHandle: {},

				find: {},

				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},

				preFilter: {
					ATTR: function (match) {
						match[1] = match[1].replace(runescape, funescape);

						// Move the given value to match[3] whether quoted or unquoted
						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}

						return match.slice(0, 4);
					},

					CHILD: function (match) {
						/* matches from matchExpr["CHILD"]
	     	1 type (only|nth|...)
	     	2 what (child|of-type)
	     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
	     	4 xn-component of xn+y argument ([+-]?\d*n|)
	     	5 sign of xn-component
	     	6 x of xn-component
	     	7 sign of y-component
	     	8 y of y-component
	     */
						match[1] = match[1].toLowerCase();

						if (match[1].slice(0, 3) === "nth") {
							// nth-* requires argument
							if (!match[3]) {
								Sizzle.error(match[0]);
							}

							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");

							// other types prohibit arguments
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}

						return match;
					},

					PSEUDO: function (match) {
						var excess,
						    unquoted = !match[6] && match[2];

						if (matchExpr.CHILD.test(match[0])) {
							return null;
						}

						// Accept quoted arguments as-is
						if (match[3]) {
							match[2] = match[4] || match[5] || "";

							// Strip excess characters from unquoted arguments
						} else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
							// excess is a negative index
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}

						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice(0, 3);
					}
				},

				filter: {

					TAG: function (nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},

					CLASS: function (className) {
						var pattern = classCache[className + " "];

						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
						});
					},

					ATTR: function (name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);

							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}

							result += "";

							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},

					CHILD: function (type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";

						return first === 1 && last === 0 ?

						// Shortcut for :nth-*(n)
						function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    outerCache,
							    node,
							    diff,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType;

							if (parent) {
								// :(first|last|only)-(child|of-type)
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
												return false;
											}
										}
										// Reverse direction for :only-* (if we haven't yet done so)
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}

								start = [forward ? parent.firstChild : parent.lastChild];

								// non-xml :nth-child(...) stores cache data on `parent`
								if (forward && useCache) {
									// Seek `elem` from a previously-cached index
									outerCache = parent[expando] || (parent[expando] = {});
									cache = outerCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = cache[0] === dirruns && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];

									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
										// When found, cache indexes on `parent` and break
										if (node.nodeType === 1 && ++diff && node === elem) {
											outerCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}

									// Use previously-cached element index if available
								} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
									diff = cache[1];

									// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
								} else {
									// Use the same loop as above to seek `elem` from the start
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
											// Cache the index of each encountered element
											if (useCache) {
												(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}

								// Incorporate the offset, then check against cycle size
								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},

					PSEUDO: function (pseudo, argument) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if (fn[expando]) {
							return fn(argument);
						}

						// But maintain support for old signatures
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf.call(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}

						return fn;
					}
				},

				pseudos: {
					// Potentially complex pseudos
					not: markFunction(function (selector) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));

						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;

							// Match elements unmatched by `matcher`
							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							return !results.pop();
						};
					}),

					has: markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),

					contains: markFunction(function (text) {
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),

					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					lang: markFunction(function (lang) {
						// lang value must be a valid identifier
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),

					// Miscellaneous
					target: function (elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},

					root: function (elem) {
						return elem === docElem;
					},

					focus: function (elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},

					// Boolean properties
					enabled: function (elem) {
						return elem.disabled === false;
					},

					disabled: function (elem) {
						return elem.disabled === true;
					},

					checked: function (elem) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},

					selected: function (elem) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}

						return elem.selected === true;
					},

					// Contents
					empty: function (elem) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
						//   but not by others (comment: 8; processing instruction: 7; etc.)
						// nodeType < 6 works because attributes (2) do not appear as children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},

					parent: function (elem) {
						return !Expr.pseudos.empty(elem);
					},

					// Element/input types
					header: function (elem) {
						return rheader.test(elem.nodeName);
					},

					input: function (elem) {
						return rinputs.test(elem.nodeName);
					},

					button: function (elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},

					text: function (elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},

					// Position-in-collection
					first: createPositionalPseudo(function () {
						return [0];
					}),

					last: createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),

					eq: createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),

					even: createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					odd: createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					lt: createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					gt: createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};

			Expr.pseudos.nth = Expr.pseudos.eq;

			// Add button/input type pseudos
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}

			// Easy API for creating new setFilters
			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();

			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];

				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}

				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;

				while (soFar) {
					// Comma and first run
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}

					matched = false;

					// Combinators
					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}

					// Filters
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}

					if (!matched) {
						break;
					}
				}

				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
				// Cache the tokens
				tokenCache(selector, groups).slice(0);
			};

			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}

			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    checkNonElements = base && dir === "parentNode",
				    doneName = done++;

				return combinator.first ?
				// Check against closest ancestor/preceding element
				function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
				} :

				// Check against all ancestor/preceding elements
				function (elem, context, xml) {
					var oldCache,
					    outerCache,
					    newCache = [dirruns, doneName];

					// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});
								if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
									// Assign to newCache so results back-propagate to previous elements
									return newCache[2] = oldCache[2];
								} else {
									// Reuse newcache so results back-propagate to previous elements
									outerCache[dir] = newCache;

									// A match means we're done; a fail means we have to keep checking
									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
				};
			}

			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}

			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}

			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;

				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}

				return newUnmatched;
			}

			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,
					   

					// Get initial elements from seed or context
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
					   

					// Prefilter to get matcher input, preserving a map for seed-results synchronization
					matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || (seed ? preFilter : preexisting || postFilter) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results : matcherIn;

					// Find primary matches
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}

					// Apply postFilter
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);

						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}

					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										// Restore matcherIn since elem is not yet a final match
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}

							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
									seed[temp] = !(results[temp] = elem);
								}
							}
						}

						// Add elements to results, through postFinder if defined
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}

			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,
				   

				// The foundational matcher ensures that elements are reachable from top-level context(s)
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf.call(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				}];

				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

						// Return special upon seeing a positional matcher
						if (matcher[expando]) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}

				return elementMatcher(matchers);
			}

			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function (seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,
					   
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find.TAG("*", outermost),
					   
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;

					if (outermost) {
						outermostContext = context !== document && context;
					}

					// Add elements passing elementMatchers directly to results
					// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
					// Support: IE<9, Safari
					// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}

						// Track unmatched elements for set filters
						if (bySet) {
							// They will have gone through all possible matchers
							if (elem = !matcher && elem) {
								matchedCount--;
							}

							// Lengthen the array for every element, matched or not
							if (seed) {
								unmatched.push(elem);
							}
						}
					}

					// Apply set filters to unmatched elements
					matchedCount += i;
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}

						if (seed) {
							// Reintegrate element matches to eliminate the need for sorting
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}

							// Discard index placeholder values to get only actual matches
							setMatched = condense(setMatched);
						}

						// Add matches to results
						push.apply(results, setMatched);

						// Seedless set matches succeeding multiple successful matchers stipulate sorting
						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
							Sizzle.uniqueSort(results);
						}
					}

					// Override manipulation of globals by nested matchers
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}

					return unmatched;
				};

				return bySet ? markFunction(superMatcher) : superMatcher;
			}

			compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];

				if (!cached) {
					// Generate a function of recursive functions that can be used to check each element
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}

					// Cache the compiled function
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

					// Save selector and tokenization
					cached.selector = selector;
				}
				return cached;
			};

			/**
	   * A low-level selection function that works with Sizzle's compiled
	   *  selector functions
	   * @param {String|Function} selector A selector or a pre-compiled
	   *  selector function built with Sizzle.compile
	   * @param {Element} context
	   * @param {Array} [results]
	   * @param {Array} [seed] A set of elements to match against
	   */
			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);

				results = results || [];

				// Try to minimize operations if there is no seed and only one group
				if (match.length === 1) {
					// Take a shortcut and set the context if the root selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
						context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;

							// Precompiled matchers will still verify ancestry, so step up a level
						} else if (compiled) {
							context = context.parentNode;
						}

						selector = selector.slice(tokens.shift().value.length);
					}

					// Fetch a seed set for right-to-left matching
					i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];

						// Abort if we hit a combinator
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							// Search, expanding context for leading sibling combinators
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}

								break;
							}
						}
					}
				}

				// Compile and execute a filtering function if one is not provided
				// Provide `match` to avoid retokenization if we modified the selector above
				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};

			// One-time assignments

			// Sort stability
			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

			// Support: Chrome<14
			// Always assume duplicates if they aren't passed to the comparison function
			support.detectDuplicates = !!hasDuplicate;

			// Initialize against the default document
			setDocument();

			// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
			// Detached nodes confoundingly follow *each other*
			support.sortDetached = assert(function (div1) {
				// Should return 1, but returns 4 (following)
				return div1.compareDocumentPosition(document.createElement("div")) & 1;
			});

			// Support: IE<8
			// Prevent attribute/property "interpolation"
			// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
			if (!assert(function (div) {
				div.innerHTML = "<a href='#'></a>";
				return div.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}

			// Support: IE<9
			// Use defaultValue in place of getAttribute("value")
			if (!support.attributes || !assert(function (div) {
				div.innerHTML = "<input/>";
				div.firstChild.setAttribute("value", "");
				return div.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}

			// Support: IE<9
			// Use getAttributeNode to fetch booleans when getAttribute lies
			if (!assert(function (div) {
				return div.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}

			return Sizzle;
		})(window);



		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;



		var rneedsContext = jQuery.expr.match.needsContext;

		var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;



		var risSimple = /^.[^:#\[\.,]*$/;

		// Implement the identical functionality for filter and not
		function winnow(elements, qualifier, not) {
			if (jQuery.isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					/* jshint -W018 */
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}

			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}

			if (typeof qualifier === "string") {
				if (risSimple.test(qualifier)) {
					return jQuery.filter(qualifier, elements, not);
				}

				qualifier = jQuery.filter(qualifier, elements);
			}

			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) >= 0 !== not;
			});
		}

		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];

			if (not) {
				expr = ":not(" + expr + ")";
			}

			return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};

		jQuery.fn.extend({
			find: function (selector) {
				var i,
				    len = this.length,
				    ret = [],
				    self = this;

				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}

				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}

				// Needed because $( selector, context ) becomes $( context ).find( selector )
				ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
				ret.selector = this.selector ? this.selector + " " + selector : selector;
				return ret;
			},
			filter: function (selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function (selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function (selector) {
				return !!winnow(this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});


		// Initialize a jQuery object


		// A central reference to the root jQuery(document)
		var rootjQuery,
		   

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		    init = jQuery.fn.init = function (selector, context) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}

			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}

				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {
					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;

						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {
								// Properties of context are called as methods if possible
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);

									// ...and otherwise set as attributes
								} else {
									this.attr(match, context[match]);
								}
							}
						}

						return this;

						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if (elem && elem.parentNode) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || rootjQuery).find(selector);

					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}

				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (jQuery.isFunction(selector)) {
				return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) :
				// Execute immediately if ready is not present
				selector(jQuery);
			}

			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray(selector, this);
		};

		// Give the init function the jQuery prototype for later instantiation
		init.prototype = jQuery.fn;

		// Initialize central reference
		rootjQuery = jQuery(document);


		var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		   
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

		jQuery.extend({
			dir: function (elem, dir, until) {
				var matched = [],
				    truncate = until !== undefined;

				while ((elem = elem[dir]) && elem.nodeType !== 9) {
					if (elem.nodeType === 1) {
						if (truncate && jQuery(elem).is(until)) {
							break;
						}
						matched.push(elem);
					}
				}
				return matched;
			},

			sibling: function (n, elem) {
				var matched = [];

				for (; n; n = n.nextSibling) {
					if (n.nodeType === 1 && n !== elem) {
						matched.push(n);
					}
				}

				return matched;
			}
		});

		jQuery.fn.extend({
			has: function (target) {
				var targets = jQuery(target, this),
				    l = targets.length;

				return this.filter(function () {
					var i = 0;
					for (; i < l; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},

			closest: function (selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
						// Always skip document fragments
						if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
							matched.push(cur);
							break;
						}
					}
				}

				return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
			},

			// Determine the position of an element within
			// the matched set of elements
			index: function (elem) {
				// No argument, return index in parent
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}

				// index in selector
				if (typeof elem === "string") {
					return indexOf.call(jQuery(elem), this[0]);
				}

				// Locate the position of the desired element
				return indexOf.call(this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem);
			},

			add: function (selector, context) {
				return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
			},

			addBack: function (selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});

		function sibling(cur, dir) {
			while ((cur = cur[dir]) && cur.nodeType !== 1) {}
			return cur;
		}

		jQuery.each({
			parent: function (elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function (elem) {
				return jQuery.dir(elem, "parentNode");
			},
			parentsUntil: function (elem, i, until) {
				return jQuery.dir(elem, "parentNode", until);
			},
			next: function (elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function (elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function (elem) {
				return jQuery.dir(elem, "nextSibling");
			},
			prevAll: function (elem) {
				return jQuery.dir(elem, "previousSibling");
			},
			nextUntil: function (elem, i, until) {
				return jQuery.dir(elem, "nextSibling", until);
			},
			prevUntil: function (elem, i, until) {
				return jQuery.dir(elem, "previousSibling", until);
			},
			siblings: function (elem) {
				return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
			},
			children: function (elem) {
				return jQuery.sibling(elem.firstChild);
			},
			contents: function (elem) {
				return elem.contentDocument || jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var matched = jQuery.map(this, fn, until);

				if (name.slice(-5) !== "Until") {
					selector = until;
				}

				if (selector && typeof selector === "string") {
					matched = jQuery.filter(selector, matched);
				}

				if (this.length > 1) {
					// Remove duplicates
					if (!guaranteedUnique[name]) {
						jQuery.unique(matched);
					}

					// Reverse order for parents* and prev-derivatives
					if (rparentsprev.test(name)) {
						matched.reverse();
					}
				}

				return this.pushStack(matched);
			};
		});
		var rnotwhite = /\S+/g;



		// String to Object options format cache
		var optionsCache = {};

		// Convert String-formatted options into Object-formatted ones and store in cache
		function createOptions(options) {
			var object = optionsCache[options] = {};
			jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}

		/*
	  * Create a callback list using the following parameters:
	  *
	  *	options: an optional list of space-separated options that will change how
	  *			the callback list behaves or a more traditional option object
	  *
	  * By default a callback list will act like an event callback list and can be
	  * "fired" multiple times.
	  *
	  * Possible options:
	  *
	  *	once:			will ensure the callback list can only be fired once (like a Deferred)
	  *
	  *	memory:			will keep track of previous values and will call any callback added
	  *					after the list has been fired right away with the latest "memorized"
	  *					values (like a Deferred)
	  *
	  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	  *
	  *	stopOnFalse:	interrupt callings when a callback returns false
	  *
	  */
		jQuery.Callbacks = function (options) {
			// Convert options from String-formatted to Object-formatted if needed
			// (we check in cache first)
			options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);

			var // Last fire value (for non-forgettable lists)
			memory,
			   
			// Flag to know if list was already fired
			fired,
			   
			// Flag to know if list is currently firing
			firing,
			   
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			   
			// End of the loop when firing
			firingLength,
			   
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			   
			// Actual callback list
			list = [],
			   
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			   
			// Fire callbacks
			fire = function (data) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for (; list && firingIndex < firingLength; firingIndex++) {
					if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if (list) {
					if (stack) {
						if (stack.length) {
							fire(stack.shift());
						}
					} else if (memory) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			   
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function () {
					if (list) {
						// First, we save the current length
						var start = list.length;
						(function add(args) {
							jQuery.each(args, function (_, arg) {
								var type = jQuery.type(arg);
								if (type === "function") {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && type !== "string") {
									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);
						// Do we need to add the callbacks to the
						// current firing batch?
						if (firing) {
							firingLength = list.length;
							// With memory, if we're not firing then
							// we should call right away
						} else if (memory) {
							firingStart = start;
							fire(memory);
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function () {
					if (list) {
						jQuery.each(arguments, function (_, arg) {
							var index;
							while ((index = jQuery.inArray(arg, list, index)) > -1) {
								list.splice(index, 1);
								// Handle firing indexes
								if (firing) {
									if (index <= firingLength) {
										firingLength--;
									}
									if (index <= firingIndex) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function (fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
				},
				// Remove all callbacks from the list
				empty: function () {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function () {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function () {
					return !list;
				},
				// Lock the list in its current state
				lock: function () {
					stack = undefined;
					if (!memory) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function () {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function (context, args) {
					if (list && (!fired || stack)) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						if (firing) {
							stack.push(args);
						} else {
							fire(args);
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function () {
					self.fireWith(this, arguments);
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function () {
					return !!fired;
				}
			};

			return self;
		};


		jQuery.extend({

			Deferred: function (func) {
				var tuples = [
				// action, add listener, listener list, final state
				["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
				    state = "pending",
				    promise = {
					state: function () {
						return state;
					},
					always: function () {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					then: function () {
						var fns = arguments;
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
								var fn = jQuery.isFunction(fns[i]) && fns[i];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
									} else {
										newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function (obj) {
						return obj != null ? jQuery.extend(obj, promise) : promise;
					}
				},
				    deferred = {};

				// Keep pipe for back-compat
				promise.pipe = promise.then;

				// Add list-specific methods
				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[3];

					// promise[ done | fail | progress ] = list.add
					promise[tuple[1]] = list.add;

					// Handle state
					if (stateString) {
						list.add(function () {
							// state = [ resolved | rejected ]
							state = stateString;

							// [ reject_list | resolve_list ].disable; progress_list.lock
						}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
					}

					// deferred[ resolve | reject | notify ]
					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
						return this;
					};
					deferred[tuple[0] + "With"] = list.fireWith;
				});

				// Make the deferred a promise
				promise.promise(deferred);

				// Call given func if any
				if (func) {
					func.call(deferred, deferred);
				}

				// All done!
				return deferred;
			},

			// Deferred helper
			when: function (subordinate /* , ..., subordinateN */) {
				var i = 0,
				    resolveValues = slice.call(arguments),
				    length = resolveValues.length,
				   

				// the count of uncompleted subordinates
				remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
				   

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
				   

				// Update function for both resolve and progress values
				updateFunc = function (i, contexts, values) {
					return function (value) {
						contexts[i] = this;
						values[i] = arguments.length > 1 ? slice.call(arguments) : value;
						if (values === progressValues) {
							deferred.notifyWith(contexts, values);
						} else if (! --remaining) {
							deferred.resolveWith(contexts, values);
						}
					};
				},
				    progressValues,
				    progressContexts,
				    resolveContexts;

				// add listeners to Deferred subordinates; treat others as resolved
				if (length > 1) {
					progressValues = new Array(length);
					progressContexts = new Array(length);
					resolveContexts = new Array(length);
					for (; i < length; i++) {
						if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
							resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
						} else {
							--remaining;
						}
					}
				}

				// if we're not waiting on anything, resolve the master
				if (!remaining) {
					deferred.resolveWith(resolveContexts, resolveValues);
				}

				return deferred.promise();
			}
		});


		// The deferred used on DOM ready
		var readyList;

		jQuery.fn.ready = function (fn) {
			// Add the callback
			jQuery.ready.promise().done(fn);

			return this;
		};

		jQuery.extend({
			// Is the DOM ready to be used? Set to true once it occurs.
			isReady: false,

			// A counter to track how many items to wait for before
			// the ready event fires. See #6781
			readyWait: 1,

			// Hold (or release) the ready event
			holdReady: function (hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			},

			// Handle when the DOM is ready
			ready: function (wait) {
				// Abort if there are pending holds or we're already ready
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}

				// Remember that the DOM is ready
				jQuery.isReady = true;

				// If a normal DOM Ready event fired, decrement, and wait if need be
				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}

				// If there are functions bound, to execute
				readyList.resolveWith(document, [jQuery]);

				// Trigger any bound ready events
				if (jQuery.fn.triggerHandler) {
					jQuery(document).triggerHandler("ready");
					jQuery(document).off("ready");
				}
			}
		});

		/**
	  * The ready event handler and self cleanup method
	  */
		function completed() {
			document.removeEventListener("DOMContentLoaded", completed, false);
			window.removeEventListener("load", completed, false);
			jQuery.ready();
		}

		jQuery.ready.promise = function (obj) {
			if (!readyList) {
				readyList = jQuery.Deferred();

				// Catch cases where $(document).ready() is called after the browser event has already occurred.
				// we once tried to use readyState "interactive" here, but it caused issues like the one
				// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
				if (document.readyState === "complete") {
					// Handle it asynchronously to allow scripts the opportunity to delay ready
					setTimeout(jQuery.ready);
				} else {
					// Use the handy event callback
					document.addEventListener("DOMContentLoaded", completed, false);

					// A fallback to window.onload, that will always work
					window.addEventListener("load", completed, false);
				}
			}
			return readyList.promise(obj);
		};

		// Kick off the DOM ready check even if the user does not
		jQuery.ready.promise();




		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    len = elems.length,
			    bulk = key == null;

			// Sets many values
			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
				}

				// Sets one value
			} else if (value !== undefined) {
				chainable = true;

				if (!jQuery.isFunction(value)) {
					raw = true;
				}

				if (bulk) {
					// Bulk operations run against the entire set
					if (raw) {
						fn.call(elems, value);
						fn = null;

						// ...except when executing function values
					} else {
						bulk = fn;
						fn = function (elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}

				if (fn) {
					for (; i < len; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}

			return chainable ? elems :

			// Gets
			bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
		};


		/**
	  * Determines whether an object can have data
	  */
		jQuery.acceptData = function (owner) {
			// Accepts only:
			//  - Node
			//    - Node.ELEMENT_NODE
			//    - Node.DOCUMENT_NODE
			//  - Object
			//    - Any
			/* jshint -W018 */
			return owner.nodeType === 1 || owner.nodeType === 9 || ! +owner.nodeType;
		};


		function Data() {
			// Support: Android < 4,
			// Old WebKit does not have Object.preventExtensions/freeze method,
			// return new empty object instead with no [[set]] accessor
			Object.defineProperty(this.cache = {}, 0, {
				get: function () {
					return {};
				}
			});

			this.expando = jQuery.expando + Math.random();
		}

		Data.uid = 1;
		Data.accepts = jQuery.acceptData;

		Data.prototype = {
			key: function (owner) {
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return the key for a frozen object.
				if (!Data.accepts(owner)) {
					return 0;
				}

				var descriptor = {},
				   
				// Check if the owner object already has a cache key
				unlock = owner[this.expando];

				// If not, create one
				if (!unlock) {
					unlock = Data.uid++;

					// Secure it in a non-enumerable, non-writable property
					try {
						descriptor[this.expando] = { value: unlock };
						Object.defineProperties(owner, descriptor);

						// Support: Android < 4
						// Fallback to a less secure definition
					} catch (e) {
						descriptor[this.expando] = unlock;
						jQuery.extend(owner, descriptor);
					}
				}

				// Ensure the cache object
				if (!this.cache[unlock]) {
					this.cache[unlock] = {};
				}

				return unlock;
			},
			set: function (owner, data, value) {
				var prop,
				   
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key(owner),
				    cache = this.cache[unlock];

				// Handle: [ owner, key, value ] args
				if (typeof data === "string") {
					cache[data] = value;

					// Handle: [ owner, { properties } ] args
				} else {
					// Fresh assignments by object are shallow copied
					if (jQuery.isEmptyObject(cache)) {
						jQuery.extend(this.cache[unlock], data);
						// Otherwise, copy the properties one-by-one to the cache object
					} else {
						for (prop in data) {
							cache[prop] = data[prop];
						}
					}
				}
				return cache;
			},
			get: function (owner, key) {
				// Either a valid cache is found, or will be created.
				// New caches will be created and the unlock returned,
				// allowing direct access to the newly created
				// empty data object. A valid owner object must be provided.
				var cache = this.cache[this.key(owner)];

				return key === undefined ? cache : cache[key];
			},
			access: function (owner, key, value) {
				var stored;
				// In cases where either:
				//
				//   1. No key was specified
				//   2. A string key was specified, but no value provided
				//
				// Take the "read" path and allow the get method to determine
				// which value to return, respectively either:
				//
				//   1. The entire cache object
				//   2. The data stored at the key
				//
				if (key === undefined || key && typeof key === "string" && value === undefined) {
					stored = this.get(owner, key);

					return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
				}

				// [*]When the key is not a string, or both a key and value
				// are specified, set or extend (existing objects) with either:
				//
				//   1. An object of properties
				//   2. A key and value
				//
				this.set(owner, key, value);

				// Since the "set" path can have two possible entry points
				// return the expected data based on which path was taken[*]
				return value !== undefined ? value : key;
			},
			remove: function (owner, key) {
				var i,
				    name,
				    camel,
				    unlock = this.key(owner),
				    cache = this.cache[unlock];

				if (key === undefined) {
					this.cache[unlock] = {};
				} else {
					// Support array or space separated string of keys
					if (jQuery.isArray(key)) {
						// If "name" is an array of keys...
						// When data is initially created, via ("key", "val") signature,
						// keys will be converted to camelCase.
						// Since there is no way to tell _how_ a key was added, remove
						// both plain key and camelCase key. #12786
						// This will only penalize the array argument path.
						name = key.concat(key.map(jQuery.camelCase));
					} else {
						camel = jQuery.camelCase(key);
						// Try the string as a key before any manipulation
						if (key in cache) {
							name = [key, camel];
						} else {
							// If a key with the spaces exists, use it.
							// Otherwise, create an array by matching non-whitespace
							name = camel;
							name = name in cache ? [name] : name.match(rnotwhite) || [];
						}
					}

					i = name.length;
					while (i--) {
						delete cache[name[i]];
					}
				}
			},
			hasData: function (owner) {
				return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
			},
			discard: function (owner) {
				if (owner[this.expando]) {
					delete this.cache[owner[this.expando]];
				}
			}
		};
		var data_priv = new Data();

		var data_user = new Data();



		/*
	 	Implementation Summary
	 
	 	1. Enforce API surface and semantic compatibility with 1.9.x branch
	 	2. Improve the module's maintainability by reducing the storage
	 		paths to a single mechanism.
	 	3. Use the same single mechanism to support "private" and "user" data.
	 	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	 	5. Avoid exposing implementation details on user objects (eg. expando properties)
	 	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	 */
		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /([A-Z])/g;

		function dataAttr(elem, key, data) {
			var name;

			// If nothing was found internally, try to fetch any
			// data from the HTML5 data-* attribute
			if (data === undefined && elem.nodeType === 1) {
				name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
				data = elem.getAttribute(name);

				if (typeof data === "string") {
					try {
						data = data === "true" ? true : data === "false" ? false : data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
					} catch (e) {}

					// Make sure we set the data so it isn't changed later
					data_user.set(elem, key, data);
				} else {
					data = undefined;
				}
			}
			return data;
		}

		jQuery.extend({
			hasData: function (elem) {
				return data_user.hasData(elem) || data_priv.hasData(elem);
			},

			data: function (elem, name, data) {
				return data_user.access(elem, name, data);
			},

			removeData: function (elem, name) {
				data_user.remove(elem, name);
			},

			// TODO: Now that all calls to _data and _removeData have been replaced
			// with direct calls to data_priv methods, these can be deprecated.
			_data: function (elem, name, data) {
				return data_priv.access(elem, name, data);
			},

			_removeData: function (elem, name) {
				data_priv.remove(elem, name);
			}
		});

		jQuery.fn.extend({
			data: function (key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;

				// Gets all values
				if (key === undefined) {
					if (this.length) {
						data = data_user.get(elem);

						if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
							i = attrs.length;
							while (i--) {
								// Support: IE11+
								// The attrs elements can be null (#14894)
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = jQuery.camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							data_priv.set(elem, "hasDataAttrs", true);
						}
					}

					return data;
				}

				// Sets multiple values
				if (typeof key === "object") {
					return this.each(function () {
						data_user.set(this, key);
					});
				}

				return access(this, function (value) {
					var data,
					    camelKey = jQuery.camelCase(key);

					// The calling jQuery object (element matches) is not empty
					// (and therefore has an element appears at this[ 0 ]) and the
					// `value` parameter was not undefined. An empty jQuery object
					// will result in `undefined` for elem = this[ 0 ] which will
					// throw an exception if an attempt to read a data cache is made.
					if (elem && value === undefined) {
						// Attempt to get data from the cache
						// with the key as-is
						data = data_user.get(elem, key);
						if (data !== undefined) {
							return data;
						}

						// Attempt to get data from the cache
						// with the key camelized
						data = data_user.get(elem, camelKey);
						if (data !== undefined) {
							return data;
						}

						// Attempt to "discover" the data in
						// HTML5 custom data-* attrs
						data = dataAttr(elem, camelKey, undefined);
						if (data !== undefined) {
							return data;
						}

						// We tried really hard, but the data doesn't exist.
						return;
					}

					// Set the data...
					this.each(function () {
						// First, attempt to store a copy or reference of any
						// data that might've been store with a camelCased key.
						var data = data_user.get(this, camelKey);

						// For HTML5 data-* attribute interop, we have to
						// store property names with dashes in a camelCase form.
						// This might not apply to all properties...*
						data_user.set(this, camelKey, value);

						// *... In the case of properties that might _actually_
						// have dashes, we need to also store a copy of that
						// unchanged property.
						if (key.indexOf("-") !== -1 && data !== undefined) {
							data_user.set(this, key, value);
						}
					});
				}, null, value, arguments.length > 1, null, true);
			},

			removeData: function (key) {
				return this.each(function () {
					data_user.remove(this, key);
				});
			}
		});


		jQuery.extend({
			queue: function (elem, type, data) {
				var queue;

				if (elem) {
					type = (type || "fx") + "queue";
					queue = data_priv.get(elem, type);

					// Speed up dequeue by getting out quickly if this is just a lookup
					if (data) {
						if (!queue || jQuery.isArray(data)) {
							queue = data_priv.access(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},

			dequeue: function (elem, type) {
				type = type || "fx";

				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function () {
					jQuery.dequeue(elem, type);
				};

				// If the fx queue is dequeued, always remove the progress sentinel
				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}

				if (fn) {
					// Add a progress sentinel to prevent the fx queue from being
					// automatically dequeued
					if (type === "fx") {
						queue.unshift("inprogress");
					}

					// clear up the last queue stop function
					delete hooks.stop;
					fn.call(elem, next, hooks);
				}

				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},

			// not intended for public consumption - generates a queueHooks object, or returns the current one
			_queueHooks: function (elem, type) {
				var key = type + "queueHooks";
				return data_priv.get(elem, key) || data_priv.access(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						data_priv.remove(elem, [type + "queue", key]);
					})
				});
			}
		});

		jQuery.fn.extend({
			queue: function (type, data) {
				var setter = 2;

				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}

				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}

				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);

					// ensure a hooks for this queue
					jQuery._queueHooks(this, type);

					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function (type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function (type) {
				return this.queue(type || "fx", []);
			},
			// Get a promise resolved when queues of a certain type
			// are emptied (fx is the type by default)
			promise: function (type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function () {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};

				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";

				while (i--) {
					tmp = data_priv.get(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

		var cssExpand = ["Top", "Right", "Bottom", "Left"];

		var isHidden = function (elem, el) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
		};

		var rcheckableType = /^(?:checkbox|radio)$/i;



		(function () {
			var fragment = document.createDocumentFragment(),
			    div = fragment.appendChild(document.createElement("div")),
			    input = document.createElement("input");

			// #11217 - WebKit loses check when the name is after the checked attribute
			// Support: Windows Web Apps (WWA)
			// `name` and `type` need .setAttribute for WWA
			input.setAttribute("type", "radio");
			input.setAttribute("checked", "checked");
			input.setAttribute("name", "t");

			div.appendChild(input);

			// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
			// old WebKit doesn't clone checked state correctly in fragments
			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

			// Make sure textarea (and checkbox) defaultValue is properly cloned
			// Support: IE9-IE11+
			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
		})();
		var strundefined = typeof undefined;



		support.focusinBubbles = "onfocusin" in window;


		var rkeyEvent = /^key/,
		    rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		    rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

		function returnTrue() {
			return true;
		}

		function returnFalse() {
			return false;
		}

		function safeActiveElement() {
			try {
				return document.activeElement;
			} catch (err) {}
		}

		/*
	  * Helper functions for managing events -- not part of the public interface.
	  * Props to Dean Edwards' addEvent library for many of the ideas.
	  */
		jQuery.event = {

			global: {},

			add: function (elem, types, handler, data, selector) {
				var handleObjIn,
				    eventHandle,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = data_priv.get(elem);

				// Don't attach events to noData or text/comment nodes (but allow plain objects)
				if (!elemData) {
					return;
				}

				// Caller can pass in an object of custom data in lieu of the handler
				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}

				// Make sure that the handler has a unique ID, used to find/remove it later
				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}

				// Init the element's event structure and main handler, if this is the first
				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {
						// Discard the second event of a jQuery.event.trigger() and
						// when an event is called after a page has unloaded
						return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
					};
				}

				// Handle multiple events separated by a space
				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// There *must* be a type, no attaching namespace-only handlers
					if (!type) {
						continue;
					}

					// If event changes its type, use the special event handlers for the changed type
					special = jQuery.event.special[type] || {};

					// If selector defined, determine special event api type, otherwise given type
					type = (selector ? special.delegateType : special.bindType) || type;

					// Update special based on newly reset type
					special = jQuery.event.special[type] || {};

					// handleObj is passed to all event handlers
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);

					// Init the event handler queue if we're the first
					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;

						// Only use addEventListener if the special events handler returns false
						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle, false);
							}
						}
					}

					if (special.add) {
						special.add.call(elem, handleObj);

						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}

					// Add to the element's handler list, delegates in front
					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}

					// Keep track of which events have ever been used, for event optimization
					jQuery.event.global[type] = true;
				}
			},

			// Detach an event or set of events from an element
			remove: function (elem, types, handler, selector, mappedTypes) {
				var j,
				    origCount,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = data_priv.hasData(elem) && data_priv.get(elem);

				if (!elemData || !(events = elemData.events)) {
					return;
				}

				// Once for each type.namespace in types; type may be omitted
				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// Unbind all events (on this namespace, if provided) for the element
					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}

					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

					// Remove matching events
					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];

						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);

							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}

					// Remove generic event handler if we removed something and no more handlers exist
					// (avoids potential for endless recursion during removal of special event handlers)
					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
							jQuery.removeEvent(elem, type, elemData.handle);
						}

						delete events[type];
					}
				}

				// Remove the expando if it's no longer used
				if (jQuery.isEmptyObject(events)) {
					delete elemData.handle;
					data_priv.remove(elem, "events");
				}
			},

			trigger: function (event, data, elem, onlyHandlers) {
				var i,
				    cur,
				    tmp,
				    bubbleType,
				    ontype,
				    handle,
				    special,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

				cur = tmp = elem = elem || document;

				// Don't do events on text and comment nodes
				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}

				// focus/blur morphs to focusin/out; ensure we're not firing them right now
				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}

				if (type.indexOf(".") >= 0) {
					// Namespaced trigger; create a regexp to match event type in handle()
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;

				// Caller can pass in a jQuery.Event object, Object, or just an event type string
				event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);

				// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

				// Clean up the event in case it is being reused
				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}

				// Clone any incoming data and prepend the event, creating the handler arg list
				data = data == null ? [event] : jQuery.makeArray(data, [event]);

				// Allow special events to draw outside the lines
				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}

				// Determine event propagation path in advance, per W3C events spec (#9951)
				// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
				if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}

					// Only add window if we got to document (e.g., not plain obj or detached DOM)
					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}

				// Fire handlers on the event path
				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
					event.type = i > 1 ? bubbleType : special.bindType || type;

					// jQuery handler
					handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}

					// Native handler
					handle = ontype && cur[ontype];
					if (handle && handle.apply && jQuery.acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;

				// If nobody prevented the default action, do it now
				if (!onlyHandlers && !event.isDefaultPrevented()) {
					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
						// Call a native DOM method on the target with the same name name as the event.
						// Don't do default actions on window, that's where global variables be (#6170)
						if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
							// Don't re-trigger an onFOO event when we call its FOO() method
							tmp = elem[ontype];

							if (tmp) {
								elem[ontype] = null;
							}

							// Prevent re-triggering of the same event, since we already bubbled it above
							jQuery.event.triggered = type;
							elem[type]();
							jQuery.event.triggered = undefined;

							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}

				return event.result;
			},

			dispatch: function (event) {
				// Make a writable jQuery.Event from the native event object
				event = jQuery.event.fix(event);

				var i,
				    j,
				    ret,
				    matched,
				    handleObj,
				    handlerQueue = [],
				    args = slice.call(arguments),
				    handlers = (data_priv.get(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};

				// Use the fix-ed jQuery.Event rather than the (read-only) native event
				args[0] = event;
				event.delegateTarget = this;

				// Call the preDispatch hook for the mapped type, and let it bail if desired
				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}

				// Determine handlers
				handlerQueue = jQuery.event.handlers.call(this, event, handlers);

				// Run delegates first; they may want to stop propagation beneath us
				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;

					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
						// Triggered event must either 1) have no namespace, or
						// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
						if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
							event.handleObj = handleObj;
							event.data = handleObj.data;

							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}

				// Call the postDispatch hook for the mapped type
				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}

				return event.result;
			},

			handlers: function (event, handlers) {
				var i,
				    matches,
				    sel,
				    handleObj,
				    handlerQueue = [],
				    delegateCount = handlers.delegateCount,
				    cur = event.target;

				// Find delegate handlers
				// Black-hole SVG <use> instance trees (#13180)
				// Avoid non-left-click bubbling in Firefox (#3861)
				if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
					for (; cur !== this; cur = cur.parentNode || this) {
						// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
						if (cur.disabled !== true || event.type !== "click") {
							matches = [];
							for (i = 0; i < delegateCount; i++) {
								handleObj = handlers[i];

								// Don't conflict with Object.prototype properties (#13203)
								sel = handleObj.selector + " ";

								if (matches[sel] === undefined) {
									matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matches[sel]) {
									matches.push(handleObj);
								}
							}
							if (matches.length) {
								handlerQueue.push({ elem: cur, handlers: matches });
							}
						}
					}
				}

				// Add the remaining (directly-bound) handlers
				if (delegateCount < handlers.length) {
					handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) });
				}

				return handlerQueue;
			},

			// Includes some event props shared by KeyEvent and MouseEvent
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

			fixHooks: {},

			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function (event, original) {
					// Add which for key events
					if (event.which == null) {
						event.which = original.charCode != null ? original.charCode : original.keyCode;
					}

					return event;
				}
			},

			mouseHooks: {
				props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function (event, original) {
					var eventDoc,
					    doc,
					    body,
					    button = original.button;

					// Calculate pageX/Y if missing and clientX/Y available
					if (event.pageX == null && original.clientX != null) {
						eventDoc = event.target.ownerDocument || document;
						doc = eventDoc.documentElement;
						body = eventDoc.body;

						event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
						event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
					}

					// Add which for click: 1 === left; 2 === middle; 3 === right
					// Note: button is not normalized, so don't use it
					if (!event.which && button !== undefined) {
						event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
					}

					return event;
				}
			},

			fix: function (event) {
				if (event[jQuery.expando]) {
					return event;
				}

				// Create a writable copy of the event object and normalize some properties
				var i,
				    prop,
				    copy,
				    type = event.type,
				    originalEvent = event,
				    fixHook = this.fixHooks[type];

				if (!fixHook) {
					this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
				}
				copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

				event = new jQuery.Event(originalEvent);

				i = copy.length;
				while (i--) {
					prop = copy[i];
					event[prop] = originalEvent[prop];
				}

				// Support: Cordova 2.5 (WebKit) (#13255)
				// All events should have a target; Cordova deviceready doesn't
				if (!event.target) {
					event.target = document;
				}

				// Support: Safari 6.0+, Chrome < 28
				// Target should not be a text node (#504, #13143)
				if (event.target.nodeType === 3) {
					event.target = event.target.parentNode;
				}

				return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
			},

			special: {
				load: {
					// Prevent triggered image.load events from bubbling to window.load
					noBubble: true
				},
				focus: {
					// Fire native event if possible so blur/focus sequence is correct
					trigger: function () {
						if (this !== safeActiveElement() && this.focus) {
							this.focus();
							return false;
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						if (this === safeActiveElement() && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},
				click: {
					// For checkbox, fire native event so checked state will be right
					trigger: function () {
						if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
							this.click();
							return false;
						}
					},

					// For cross-browser consistency, don't fire native .click() on links
					_default: function (event) {
						return jQuery.nodeName(event.target, "a");
					}
				},

				beforeunload: {
					postDispatch: function (event) {
						// Support: Firefox 20+
						// Firefox doesn't alert if the returnValue field is not set.
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			},

			simulate: function (type, elem, event, bubble) {
				// Piggyback on a donor event to simulate a different one.
				// Fake originalEvent to avoid donor's stopPropagation, but if the
				// simulated event prevents default then we do the same on the donor.
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true,
					originalEvent: {}
				});
				if (bubble) {
					jQuery.event.trigger(e, null, elem);
				} else {
					jQuery.event.dispatch.call(elem, e);
				}
				if (e.isDefaultPrevented()) {
					event.preventDefault();
				}
			}
		};

		jQuery.removeEvent = function (elem, type, handle) {
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle, false);
			}
		};

		jQuery.Event = function (src, props) {
			// Allow instantiation without the 'new' keyword
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}

			// Event object
			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;

				// Events bubbling up the document may have been marked as prevented
				// by a handler lower down the tree; reflect the correct value.
				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&
				// Support: Android < 4.0
				src.returnValue === false ? returnTrue : returnFalse;

				// Event type
			} else {
				this.type = src;
			}

			// Put explicitly provided properties onto the event object
			if (props) {
				jQuery.extend(this, props);
			}

			// Create a timestamp if incoming event doesn't have one
			this.timeStamp = src && src.timeStamp || jQuery.now();

			// Mark it as fixed
			this[jQuery.expando] = true;
		};

		// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
		// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
		jQuery.Event.prototype = {
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,

			preventDefault: function () {
				var e = this.originalEvent;

				this.isDefaultPrevented = returnTrue;

				if (e && e.preventDefault) {
					e.preventDefault();
				}
			},
			stopPropagation: function () {
				var e = this.originalEvent;

				this.isPropagationStopped = returnTrue;

				if (e && e.stopPropagation) {
					e.stopPropagation();
				}
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;

				this.isImmediatePropagationStopped = returnTrue;

				if (e && e.stopImmediatePropagation) {
					e.stopImmediatePropagation();
				}

				this.stopPropagation();
			}
		};

		// Create mouseenter/leave events using mouseover/out and event-time checks
		// Support: Chrome 15+
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,

				handle: function (event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;

					// For mousenter/leave call the handler if related is outside the target.
					// NB: No relatedTarget if the mouse left/entered the browser window
					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});

		// Create "bubbling" focus and blur events
		// Support: Firefox, Chrome, Safari
		if (!support.focusinBubbles) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
				// Attach a single capturing handler on the document while someone wants focusin/focusout
				var handler = function (event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
				};

				jQuery.event.special[fix] = {
					setup: function () {
						var doc = this.ownerDocument || this,
						    attaches = data_priv.access(doc, fix);

						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						data_priv.access(doc, fix, (attaches || 0) + 1);
					},
					teardown: function () {
						var doc = this.ownerDocument || this,
						    attaches = data_priv.access(doc, fix) - 1;

						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							data_priv.remove(doc, fix);
						} else {
							data_priv.access(doc, fix, attaches);
						}
					}
				};
			});
		}

		jQuery.fn.extend({

			on: function (types, selector, data, fn, /*INTERNAL*/one) {
				var origFn, type;

				// Types can be a map of types/handlers
				if (typeof types === "object") {
					// ( types-Object, selector, data )
					if (typeof selector !== "string") {
						// ( types-Object, data )
						data = data || selector;
						selector = undefined;
					}
					for (type in types) {
						this.on(type, selector, data, types[type], one);
					}
					return this;
				}

				if (data == null && fn == null) {
					// ( types, fn )
					fn = selector;
					data = selector = undefined;
				} else if (fn == null) {
					if (typeof selector === "string") {
						// ( types, selector, fn )
						fn = data;
						data = undefined;
					} else {
						// ( types, data, fn )
						fn = data;
						data = selector;
						selector = undefined;
					}
				}
				if (fn === false) {
					fn = returnFalse;
				} else if (!fn) {
					return this;
				}

				if (one === 1) {
					origFn = fn;
					fn = function (event) {
						// Can use an empty set, since event contains the info
						jQuery().off(event);
						return origFn.apply(this, arguments);
					};
					// Use same guid so caller can remove using origFn
					fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
				}
				return this.each(function () {
					jQuery.event.add(this, types, fn, data, selector);
				});
			},
			one: function (types, selector, data, fn) {
				return this.on(types, selector, data, fn, 1);
			},
			off: function (types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {
					// ( event )  dispatched jQuery.Event
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if (typeof types === "object") {
					// ( types-object [, selector] )
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {
					// ( types [, fn] )
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			},

			trigger: function (type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function (type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});


		var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		    rtagName = /<([\w:]+)/,
		    rhtml = /<|&#?\w+;/,
		    rnoInnerhtml = /<(?:script|style|link)/i,
		   
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rscriptType = /^$|\/(?:java|ecma)script/i,
		    rscriptTypeMasked = /^true\/(.*)/,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		   

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {

			// Support: IE 9
			option: [1, "<select multiple='multiple'>", "</select>"],

			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

			_default: [0, "", ""]
		};

		// Support: IE 9
		wrapMap.optgroup = wrapMap.option;

		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;

		// Support: 1.x compatibility
		// Manipulating tables requires a tbody
		function manipulationTarget(elem, content) {
			return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
		}

		// Replace/restore the type attribute of script elements for safe DOM manipulation
		function disableScript(elem) {
			elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			var match = rscriptTypeMasked.exec(elem.type);

			if (match) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}

			return elem;
		}

		// Mark scripts as having already been evaluated
		function setGlobalEval(elems, refElements) {
			var i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
			}
		}

		function cloneCopyEvent(src, dest) {
			var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

			if (dest.nodeType !== 1) {
				return;
			}

			// 1. Copy private data: events, handlers, etc.
			if (data_priv.hasData(src)) {
				pdataOld = data_priv.access(src);
				pdataCur = data_priv.set(dest, pdataOld);
				events = pdataOld.events;

				if (events) {
					delete pdataCur.handle;
					pdataCur.events = {};

					for (type in events) {
						for (i = 0, l = events[type].length; i < l; i++) {
							jQuery.event.add(dest, type, events[type][i]);
						}
					}
				}
			}

			// 2. Copy user data
			if (data_user.hasData(src)) {
				udataOld = data_user.access(src);
				udataCur = jQuery.extend({}, udataOld);

				data_user.set(dest, udataCur);
			}
		}

		function getAll(context, tag) {
			var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];

			return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
		}

		// Support: IE >= 9
		function fixInput(src, dest) {
			var nodeName = dest.nodeName.toLowerCase();

			// Fails to persist the checked state of a cloned checkbox or radio button.
			if (nodeName === "input" && rcheckableType.test(src.type)) {
				dest.checked = src.checked;

				// Fails to return the selected option to the default selected state when cloning options
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}

		jQuery.extend({
			clone: function (elem, dataAndEvents, deepDataAndEvents) {
				var i,
				    l,
				    srcElements,
				    destElements,
				    clone = elem.cloneNode(true),
				    inPage = jQuery.contains(elem.ownerDocument, elem);

				// Support: IE >= 9
				// Fix Cloning issues
				if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
					// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
					destElements = getAll(clone);
					srcElements = getAll(elem);

					for (i = 0, l = srcElements.length; i < l; i++) {
						fixInput(srcElements[i], destElements[i]);
					}
				}

				// Copy the events from the original to the clone
				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);

						for (i = 0, l = srcElements.length; i < l; i++) {
							cloneCopyEvent(srcElements[i], destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}

				// Preserve script evaluation history
				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}

				// Return the cloned set
				return clone;
			},

			buildFragment: function (elems, context, scripts, selection) {
				var elem,
				    tmp,
				    tag,
				    wrap,
				    contains,
				    j,
				    fragment = context.createDocumentFragment(),
				    nodes = [],
				    i = 0,
				    l = elems.length;

				for (; i < l; i++) {
					elem = elems[i];

					if (elem || elem === 0) {
						// Add nodes directly
						if (jQuery.type(elem) === "object") {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

							// Convert non-html into a text node
						} else if (!rhtml.test(elem)) {
							nodes.push(context.createTextNode(elem));

							// Convert html into DOM nodes
						} else {
							tmp = tmp || fragment.appendChild(context.createElement("div"));

							// Deserialize a standard representation
							tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
							wrap = wrapMap[tag] || wrapMap._default;
							tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

							// Descend through wrappers to the right content
							j = wrap[0];
							while (j--) {
								tmp = tmp.lastChild;
							}

							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge(nodes, tmp.childNodes);

							// Remember the top-level container
							tmp = fragment.firstChild;

							// Fixes #12346
							// Support: Webkit, IE
							tmp.textContent = "";
						}
					}
				}

				// Remove wrapper from fragment
				fragment.textContent = "";

				i = 0;
				while (elem = nodes[i++]) {
					// #4087 - If origin and destination elements are the same, and this is
					// that element, do not do anything
					if (selection && jQuery.inArray(elem, selection) !== -1) {
						continue;
					}

					contains = jQuery.contains(elem.ownerDocument, elem);

					// Append to fragment
					tmp = getAll(fragment.appendChild(elem), "script");

					// Preserve script evaluation history
					if (contains) {
						setGlobalEval(tmp);
					}

					// Capture executables
					if (scripts) {
						j = 0;
						while (elem = tmp[j++]) {
							if (rscriptType.test(elem.type || "")) {
								scripts.push(elem);
							}
						}
					}
				}

				return fragment;
			},

			cleanData: function (elems) {
				var data,
				    elem,
				    type,
				    key,
				    special = jQuery.event.special,
				    i = 0;

				for (; (elem = elems[i]) !== undefined; i++) {
					if (jQuery.acceptData(elem)) {
						key = elem[data_priv.expando];

						if (key && (data = data_priv.cache[key])) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);

										// This is a shortcut to avoid jQuery.event.remove's overhead
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}
							if (data_priv.cache[key]) {
								// Discard any remaining `private` data
								delete data_priv.cache[key];
							}
						}
					}
					// Discard any remaining `user` data
					delete data_user.cache[elem[data_user.expando]];
				}
			}
		});

		jQuery.fn.extend({
			text: function (value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().each(function () {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							this.textContent = value;
						}
					});
				}, null, value, arguments.length);
			},

			append: function () {
				return this.domManip(arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},

			prepend: function () {
				return this.domManip(arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},

			before: function () {
				return this.domManip(arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},

			after: function () {
				return this.domManip(arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},

			remove: function (selector, keepData /* Internal Use Only */) {
				var elem,
				    elems = selector ? jQuery.filter(selector, this) : this,
				    i = 0;

				for (; (elem = elems[i]) != null; i++) {
					if (!keepData && elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem));
					}

					if (elem.parentNode) {
						if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
							setGlobalEval(getAll(elem, "script"));
						}
						elem.parentNode.removeChild(elem);
					}
				}

				return this;
			},

			empty: function () {
				var elem,
				    i = 0;

				for (; (elem = this[i]) != null; i++) {
					if (elem.nodeType === 1) {
						// Prevent memory leaks
						jQuery.cleanData(getAll(elem, false));

						// Remove any remaining nodes
						elem.textContent = "";
					}
				}

				return this;
			},

			clone: function (dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},

			html: function (value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;

					if (value === undefined && elem.nodeType === 1) {
						return elem.innerHTML;
					}

					// See if we can take a shortcut and just use innerHTML
					if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
						value = value.replace(rxhtmlTag, "<$1></$2>");

						try {
							for (; i < l; i++) {
								elem = this[i] || {};

								// Remove element nodes and prevent memory leaks
								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}

							elem = 0;

							// If using innerHTML throws an exception, use the fallback method
						} catch (e) {}
					}

					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},

			replaceWith: function () {
				var arg = arguments[0];

				// Make the changes, replacing each context element with the new content
				this.domManip(arguments, function (elem) {
					arg = this.parentNode;

					jQuery.cleanData(getAll(this));

					if (arg) {
						arg.replaceChild(elem, this);
					}
				});

				// Force removal if there was no new content (e.g., from empty arguments)
				return arg && (arg.length || arg.nodeType) ? this : this.remove();
			},

			detach: function (selector) {
				return this.remove(selector, true);
			},

			domManip: function (args, callback) {
				// Flatten any nested arrays
				args = concat.apply([], args);

				var fragment,
				    first,
				    scripts,
				    hasScripts,
				    node,
				    doc,
				    i = 0,
				    l = this.length,
				    set = this,
				    iNoClone = l - 1,
				    value = args[0],
				    isFunction = jQuery.isFunction(value);

				// We can't cloneNode fragments that contain checked, in WebKit
				if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
					return this.each(function (index) {
						var self = set.eq(index);
						if (isFunction) {
							args[0] = value.call(this, index, self.html());
						}
						self.domManip(args, callback);
					});
				}

				if (l) {
					fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
					first = fragment.firstChild;

					if (fragment.childNodes.length === 1) {
						fragment = first;
					}

					if (first) {
						scripts = jQuery.map(getAll(fragment, "script"), disableScript);
						hasScripts = scripts.length;

						// Use the original fragment for the last item instead of the first because it can end up
						// being emptied incorrectly in certain situations (#8070).
						for (; i < l; i++) {
							node = fragment;

							if (i !== iNoClone) {
								node = jQuery.clone(node, true, true);

								// Keep references to cloned scripts for later restoration
								if (hasScripts) {
									// Support: QtWebKit
									// jQuery.merge because push.apply(_, arraylike) throws
									jQuery.merge(scripts, getAll(node, "script"));
								}
							}

							callback.call(this[i], node, i);
						}

						if (hasScripts) {
							doc = scripts[scripts.length - 1].ownerDocument;

							// Reenable scripts
							jQuery.map(scripts, restoreScript);

							// Evaluate executable scripts on first document insertion
							for (i = 0; i < hasScripts; i++) {
								node = scripts[i];
								if (rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node)) {
									if (node.src) {
										// Optional AJAX dependency, but won't run scripts if not present
										if (jQuery._evalUrl) {
											jQuery._evalUrl(node.src);
										}
									} else {
										jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
									}
								}
							}
						}
					}
				}

				return this;
			}
		});

		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1,
				    i = 0;

				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);

					// Support: QtWebKit
					// .get() because push.apply(_, arraylike) throws
					push.apply(ret, elems.get());
				}

				return this.pushStack(ret);
			};
		});


		var iframe,
		    elemdisplay = {};

		/**
	  * Retrieve the actual display of a element
	  * @param {String} name nodeName of the element
	  * @param {Object} doc Document object
	  */
		// Called only from within defaultDisplay
		function actualDisplay(name, doc) {
			var style,
			    elem = jQuery(doc.createElement(name)).appendTo(doc.body),
			   

			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css(elem[0], "display");

			// We don't have any data stored on the element,
			// so use "detach" method as fast way to get rid of the element
			elem.detach();

			return display;
		}

		/**
	  * Try to determine the default display value of an element
	  * @param {String} nodeName
	  */
		function defaultDisplay(nodeName) {
			var doc = document,
			    display = elemdisplay[nodeName];

			if (!display) {
				display = actualDisplay(nodeName, doc);

				// If the simple way fails, read from inside an iframe
				if (display === "none" || !display) {
					// Use the already-created iframe if possible
					iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);

					// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
					doc = iframe[0].contentDocument;

					// Support: IE
					doc.write();
					doc.close();

					display = actualDisplay(nodeName, doc);
					iframe.detach();
				}

				// Store the correct default display
				elemdisplay[nodeName] = display;
			}

			return display;
		}
		var rmargin = /^margin/;

		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

		var getStyles = function (elem) {
			return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
		};



		function curCSS(elem, name, computed) {
			var width,
			    minWidth,
			    maxWidth,
			    ret,
			    style = elem.style;

			computed = computed || getStyles(elem);

			// Support: IE9
			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			if (computed) {
				ret = computed.getPropertyValue(name) || computed[name];
			}

			if (computed) {
				if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
					ret = jQuery.style(elem, name);
				}

				// Support: iOS < 6
				// A tribute to the "awesome hack by Dean Edwards"
				// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
				// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
				if (rnumnonpx.test(ret) && rmargin.test(name)) {
					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" : ret;
		}


		function addGetHookIf(conditionFn, hookFn) {
			// Define the hook, we'll check on the first run if it's really needed.
			return {
				get: function () {
					if (conditionFn()) {
						// Hook not needed (or it's not possible to use it due to missing dependency),
						// remove it.
						// Since there are no other hooks for marginRight, remove the whole object.
						delete this.get;
						return;
					}

					// Hook needed; redefine it so that the support test is not executed again.

					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}


		(function () {
			var pixelPositionVal,
			    boxSizingReliableVal,
			    docElem = document.documentElement,
			    container = document.createElement("div"),
			    div = document.createElement("div");

			if (!div.style) {
				return;
			}

			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";

			container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
			container.appendChild(div);

			// Executing both pixelPosition & boxSizingReliable tests require only one layout
			// so they're executed at the same time to save the second computation.
			function computePixelPositionAndBoxSizingReliable() {
				div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
				div.innerHTML = "";
				docElem.appendChild(container);

				var divStyle = window.getComputedStyle(div, null);
				pixelPositionVal = divStyle.top !== "1%";
				boxSizingReliableVal = divStyle.width === "4px";

				docElem.removeChild(container);
			}

			// Support: node.js jsdom
			// Don't assume that getComputedStyle is a property of the global object
			if (window.getComputedStyle) {
				jQuery.extend(support, {
					pixelPosition: function () {
						// This test is executed only once but we still do memoizing
						// since we can use the boxSizingReliable pre-computing.
						// No need to check if the test was already performed, though.
						computePixelPositionAndBoxSizingReliable();
						return pixelPositionVal;
					},
					boxSizingReliable: function () {
						if (boxSizingReliableVal == null) {
							computePixelPositionAndBoxSizingReliable();
						}
						return boxSizingReliableVal;
					},
					reliableMarginRight: function () {
						// Support: Android 2.3
						// Check if div with explicit width and no margin-right incorrectly
						// gets computed margin-right based on width of container. (#3333)
						// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
						// This support function is only executed once so no memoizing is needed.
						var ret,
						    marginDiv = div.appendChild(document.createElement("div"));

						// Reset CSS: box-sizing; display; margin; border; padding
						marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
						marginDiv.style.marginRight = marginDiv.style.width = "0";
						div.style.width = "1px";
						docElem.appendChild(container);

						ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);

						docElem.removeChild(container);

						return ret;
					}
				});
			}
		})();


		// A method for quickly swapping in/out CSS properties to get correct calculations.
		jQuery.swap = function (elem, options, callback, args) {
			var ret,
			    name,
			    old = {};

			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}

			ret = callback.apply(elem, args || []);

			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}

			return ret;
		};


		var
		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
		    rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    cssPrefixes = ["Webkit", "O", "Moz", "ms"];

		// return a css property mapped to a potentially vendor prefixed property
		function vendorPropName(style, name) {
			// shortcut for names that are not vendor prefixed
			if (name in style) {
				return name;
			}

			// check for vendor prefixed names
			var capName = name[0].toUpperCase() + name.slice(1),
			    origName = name,
			    i = cssPrefixes.length;

			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in style) {
					return name;
				}
			}

			return origName;
		}

		function setPositiveNumber(elem, value, subtract) {
			var matches = rnumsplit.exec(value);
			return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
		}

		function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
			var i = extra === (isBorderBox ? "border" : "content") ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
			    val = 0;

			for (; i < 4; i += 2) {
				// both box models exclude margin, so add it if we want it
				if (extra === "margin") {
					val += jQuery.css(elem, extra + cssExpand[i], true, styles);
				}

				if (isBorderBox) {
					// border-box includes padding, so remove it if we want content
					if (extra === "content") {
						val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}

					// at this point, extra isn't border nor margin, so remove border
					if (extra !== "margin") {
						val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				} else {
					// at this point, extra isn't content, so add padding
					val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

					// at this point, extra isn't content nor padding, so add border
					if (extra !== "padding") {
						val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}

			return val;
		}

		function getWidthOrHeight(elem, name, extra) {
			// Start with offset property, which is equivalent to the border-box value
			var valueIsBorderBox = true,
			    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			    styles = getStyles(elem),
			    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

			// some non-html elements return undefined for offsetWidth, so check for null/undefined
			// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
			// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
			if (val <= 0 || val == null) {
				// Fall back to computed then uncomputed css if necessary
				val = curCSS(elem, name, styles);
				if (val < 0 || val == null) {
					val = elem.style[name];
				}

				// Computed unit is not pixels. Stop here and return.
				if (rnumnonpx.test(val)) {
					return val;
				}

				// we need the check for style in case a browser which returns unreliable values
				// for getComputedStyle silently falls back to the reliable elem.style
				valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

				// Normalize "", auto, and prepare for extra
				val = parseFloat(val) || 0;
			}

			// use the active box-sizing model to add/subtract irrelevant styles
			return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
		}

		function showHide(elements, show) {
			var display,
			    elem,
			    hidden,
			    values = [],
			    index = 0,
			    length = elements.length;

			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}

				values[index] = data_priv.get(elem, "olddisplay");
				display = elem.style.display;
				if (show) {
					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if (!values[index] && display === "none") {
						elem.style.display = "";
					}

					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if (elem.style.display === "" && isHidden(elem)) {
						values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
					}
				} else {
					hidden = isHidden(elem);

					if (display !== "none" || !hidden) {
						data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
					}
				}
			}

			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for (index = 0; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
				if (!show || elem.style.display === "none" || elem.style.display === "") {
					elem.style.display = show ? values[index] || "" : "none";
				}
			}

			return elements;
		}

		jQuery.extend({
			// Add in style property hooks for overriding the default
			// behavior of getting and setting a style property
			cssHooks: {
				opacity: {
					get: function (elem, computed) {
						if (computed) {
							// We should always get a number back from opacity
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},

			// Don't automatically add "px" to these possibly-unitless properties
			cssNumber: {
				columnCount: true,
				fillOpacity: true,
				flexGrow: true,
				flexShrink: true,
				fontWeight: true,
				lineHeight: true,
				opacity: true,
				order: true,
				orphans: true,
				widows: true,
				zIndex: true,
				zoom: true
			},

			// Add in properties whose names you wish to fix before
			// setting or getting the value
			cssProps: {
				// normalize float css property
				float: "cssFloat"
			},

			// Get and set the style property on a DOM Node
			style: function (elem, name, value, extra) {
				// Don't set styles on text and comment nodes
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}

				// Make sure that we're working with the right name
				var ret,
				    type,
				    hooks,
				    origName = jQuery.camelCase(name),
				    style = elem.style;

				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));

				// gets hook for the prefixed version
				// followed by the unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// Check if we're setting a value
				if (value !== undefined) {
					type = typeof value;

					// convert relative number strings (+= or -=) to relative numbers. #7345
					if (type === "string" && (ret = rrelNum.exec(value))) {
						value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
						// Fixes bug #9237
						type = "number";
					}

					// Make sure that null and NaN values aren't set. See: #7116
					if (value == null || value !== value) {
						return;
					}

					// If a number was passed in, add 'px' to the (except for certain CSS properties)
					if (type === "number" && !jQuery.cssNumber[origName]) {
						value += "px";
					}

					// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
					// but it would mean to define eight (for every problematic property) identical functions
					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}

					// If a hook was provided, use that value, otherwise just set the specified value
					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
						style[name] = value;
					}
				} else {
					// If a hook was provided get the non-computed value from there
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
						return ret;
					}

					// Otherwise just get the value from the style object
					return style[name];
				}
			},

			css: function (elem, name, extra, styles) {
				var val,
				    num,
				    hooks,
				    origName = jQuery.camelCase(name);

				// Make sure that we're working with the right name
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));

				// gets hook for the prefixed version
				// followed by the unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// If a hook was provided get the computed value from there
				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}

				// Otherwise, if a way to get the computed value exists, use that
				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}

				//convert "normal" to computed value
				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}

				// Return, converting to number if forced or a qualifier was provided and val looks numeric
				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
				}
				return val;
			}
		});

		jQuery.each(["height", "width"], function (i, name) {
			jQuery.cssHooks[name] = {
				get: function (elem, computed, extra) {
					if (computed) {
						// certain elements can have dimension info if we invisibly show them
						// however, it must have a current display style that would benefit from this
						return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) : getWidthOrHeight(elem, name, extra);
					}
				},

				set: function (elem, value, extra) {
					var styles = extra && getStyles(elem);
					return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
				}
			};
		});

		// Support: Android 2.3
		jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
			if (computed) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				return jQuery.swap(elem, { display: "inline-block" }, curCSS, [elem, "marginRight"]);
			}
		});

		// These hooks are used by animate to expand properties
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function (value) {
					var i = 0,
					    expanded = {},
					   

					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];

					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}

					return expanded;
				}
			};

			if (!rmargin.test(prefix)) {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});

		jQuery.fn.extend({
			css: function (name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;

					if (jQuery.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;

						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}

						return map;
					}

					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			},
			show: function () {
				return showHide(this, true);
			},
			hide: function () {
				return showHide(this);
			},
			toggle: function (state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}

				return this.each(function () {
					if (isHidden(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});


		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;

		Tween.prototype = {
			constructor: Tween,
			init: function (elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || "swing";
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function () {
				var hooks = Tween.propHooks[this.prop];

				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function (percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];

				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;

				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}

				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};

		Tween.prototype.init.prototype = Tween.prototype;

		Tween.propHooks = {
			_default: {
				get: function (tween) {
					var result;

					if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
						return tween.elem[tween.prop];
					}

					// passing an empty string as a 3rd parameter to .css will automatically
					// attempt a parseFloat and fallback to a string if the parse fails
					// so, simple values such as "10px" are parsed to Float.
					// complex values such as "rotate(1rad)" are returned as is.
					result = jQuery.css(tween.elem, tween.prop, "");
					// Empty strings, null, undefined and "auto" are converted to 0.
					return !result || result === "auto" ? 0 : result;
				},
				set: function (tween) {
					// use step hook for back compat - use cssHook if its there - use .style if its
					// available and use plain properties where available
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};

		// Support: IE9
		// Panic based approach to setting things on disconnected nodes

		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function (tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};

		jQuery.easing = {
			linear: function (p) {
				return p;
			},
			swing: function (p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			}
		};

		jQuery.fx = Tween.prototype.init;

		// Back Compat <1.8 extension point
		jQuery.fx.step = {};




		var fxNow,
		    timerId,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
		    rrun = /queueHooks$/,
		    animationPrefilters = [defaultPrefilter],
		    tweeners = {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value),
				    target = tween.cur(),
				    parts = rfxnum.exec(value),
				    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
				   

				// Starting value computation is required for potential unit mismatches
				start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
				    scale = 1,
				    maxIterations = 20;

				if (start && start[3] !== unit) {
					// Trust units reported by jQuery.css
					unit = unit || start[3];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style(tween.elem, prop, start + unit);

						// Update scale, tolerating zero or NaN from tween.cur()
						// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
				}

				// Update tween properties
				if (parts) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
				}

				return tween;
			}]
		};

		// Animations created synchronously will run synchronously
		function createFxNow() {
			setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = jQuery.now();
		}

		// Generate parameters to create a standard animation
		function genFx(type, includeWidth) {
			var which,
			    i = 0,
			    attrs = { height: type };

			// if we include width, step value is 1 to do all cssExpand values,
			// if we don't include width, step value is 2 to skip over Left and Right
			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}

			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}

			return attrs;
		}

		function createTween(value, prop, animation) {
			var tween,
			    collection = (tweeners[prop] || []).concat(tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {
					// we're done with this property
					return tween;
				}
			}
		}

		function defaultPrefilter(elem, props, opts) {
			/* jshint validthis: true */
			var prop,
			    value,
			    toggle,
			    tween,
			    hooks,
			    oldfire,
			    display,
			    checkDisplay,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHidden(elem),
			    dataShow = data_priv.get(elem, "fxshow");

			// handle queue: false promises
			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;

				anim.always(function () {
					// doing this makes sure that the complete handler will be called
					// before this completes
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}

			// height/width overflow pass
			if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
				// Make sure that nothing sneaks out
				// Record all 3 overflow attributes because IE9-10 do not
				// change the overflow attribute when overflowX and
				// overflowY are set to the same value
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];

				// Set display property to inline-block for height/width
				// animations on inline elements that are having width/height animated
				display = jQuery.css(elem, "display");

				// Test default display if display is currently "none"
				checkDisplay = display === "none" ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

				if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
					style.display = "inline-block";
				}
			}

			if (opts.overflow) {
				style.overflow = "hidden";
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}

			// show/hide pass
			for (prop in props) {
				value = props[prop];
				if (rfxtypes.exec(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {
						// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

					// Any non-fx value stops us from restoring the original display value
				} else {
					display = undefined;
				}
			}

			if (!jQuery.isEmptyObject(orig)) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = data_priv.access(elem, "fxshow", {});
				}

				// store state if its toggle - enables .stop().toggle() to "reverse"
				if (toggle) {
					dataShow.hidden = !hidden;
				}
				if (hidden) {
					jQuery(elem).show();
				} else {
					anim.done(function () {
						jQuery(elem).hide();
					});
				}
				anim.done(function () {
					var prop;

					data_priv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
				for (prop in orig) {
					tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

					if (!(prop in dataShow)) {
						dataShow[prop] = tween.start;
						if (hidden) {
							tween.end = tween.start;
							tween.start = prop === "width" || prop === "height" ? 1 : 0;
						}
					}
				}

				// If this is a noop like .hide().hide(), restore an overwritten display value
			} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
				style.display = display;
			}
		}

		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;

			// camelCase, specialEasing and expand cssHook pass
			for (index in props) {
				name = jQuery.camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (jQuery.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}

				if (index !== name) {
					props[name] = value;
					delete props[index];
				}

				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];

					// not quite $.extend, this wont overwrite keys already present.
					// also - reusing 'index' from above because we have the correct "name"
					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}

		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = animationPrefilters.length,
			    deferred = jQuery.Deferred().always(function () {
				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			    tick = function () {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
				   
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;

				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}

				deferred.notifyWith(elem, [animation, percent, remaining]);

				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, { specialEasing: {} }, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function (prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function (gotoEnd) {
					var index = 0,
					   
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}

					// resolve when we played the last frame
					// otherwise, reject
					if (gotoEnd) {
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;

			propFilter(props, animation.opts.specialEasing);

			for (; index < length; index++) {
				result = animationPrefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					return result;
				}
			}

			jQuery.map(props, createTween, animation);

			if (jQuery.isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}

			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));

			// attach callbacks from options
			return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		}

		jQuery.Animation = jQuery.extend(Animation, {

			tweener: function (props, callback) {
				if (jQuery.isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.split(" ");
				}

				var prop,
				    index = 0,
				    length = props.length;

				for (; index < length; index++) {
					prop = props[index];
					tweeners[prop] = tweeners[prop] || [];
					tweeners[prop].unshift(callback);
				}
			},

			prefilter: function (callback, prepend) {
				if (prepend) {
					animationPrefilters.unshift(callback);
				} else {
					animationPrefilters.push(callback);
				}
			}
		});

		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
			};

			opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

			// normalize opt.queue - true/undefined/null -> "fx"
			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}

			// Queueing
			opt.old = opt.complete;

			opt.complete = function () {
				if (jQuery.isFunction(opt.old)) {
					opt.old.call(this);
				}

				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};

			return opt;
		};

		jQuery.fn.extend({
			fadeTo: function (speed, to, easing, callback) {
				// show any hidden elements after setting opacity to 0
				return this.filter(isHidden).css("opacity", 0).show()

				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function (prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function () {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);

					// Empty animations, or finishing resolves immediately
					if (empty || data_priv.get(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;

				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function (type, clearQueue, gotoEnd) {
				var stopQueue = function (hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};

				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}

				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = data_priv.get(this);

					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}

					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}

					// start the next in the queue if the last step wasn't forced
					// timers currently will call their complete callbacks, which will dequeue
					// but only if they were gotoEnd
					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function (type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = data_priv.get(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;

					// enable finishing flag on private data
					data.finish = true;

					// empty the queue first
					jQuery.queue(this, type, []);

					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}

					// look for any active animations, and finish them
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}

					// look for any animations in the old queue and finish them
					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}

					// turn off finishing flag
					delete data.finish;
				});
			}
		});

		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});

		// Generate shortcuts for custom animations
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});

		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    i = 0,
			    timers = jQuery.timers;

			fxNow = jQuery.now();

			for (; i < timers.length; i++) {
				timer = timers[i];
				// Checks the timer has not already been removed
				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}

			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};

		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			if (timer()) {
				jQuery.fx.start();
			} else {
				jQuery.timers.pop();
			}
		};

		jQuery.fx.interval = 13;

		jQuery.fx.start = function () {
			if (!timerId) {
				timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
			}
		};

		jQuery.fx.stop = function () {
			clearInterval(timerId);
			timerId = null;
		};

		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,
			// Default speed
			_default: 400
		};


		// Based off of the plugin by Clint Helfers, with permission.
		// http://blindsignals.com/index.php/2009/07/jquery-delay/
		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";

			return this.queue(type, function (next, hooks) {
				var timeout = setTimeout(next, time);
				hooks.stop = function () {
					clearTimeout(timeout);
				};
			});
		};


		(function () {
			var input = document.createElement("input"),
			    select = document.createElement("select"),
			    opt = select.appendChild(document.createElement("option"));

			input.type = "checkbox";

			// Support: iOS 5.1, Android 4.x, Android 2.3
			// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
			support.checkOn = input.value !== "";

			// Must access the parent to make an option select properly
			// Support: IE9, IE10
			support.optSelected = opt.selected;

			// Make sure that the options inside disabled selects aren't marked as disabled
			// (WebKit marks them as disabled)
			select.disabled = true;
			support.optDisabled = !opt.disabled;

			// Check if an input maintains its value after becoming a radio
			// Support: IE9, IE10
			input = document.createElement("input");
			input.value = "t";
			input.type = "radio";
			support.radioValue = input.value === "t";
		})();


		var nodeHook,
		    boolHook,
		    attrHandle = jQuery.expr.attrHandle;

		jQuery.fn.extend({
			attr: function (name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},

			removeAttr: function (name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});

		jQuery.extend({
			attr: function (elem, name, value) {
				var hooks,
				    ret,
				    nType = elem.nodeType;

				// don't get/set attributes on text, comment and attribute nodes
				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				// Fallback to prop when attributes are not supported
				if (typeof elem.getAttribute === strundefined) {
					return jQuery.prop(elem, name, value);
				}

				// All attributes are lowercase
				// Grab necessary hook if one is defined
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					name = name.toLowerCase();
					hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
				}

				if (value !== undefined) {
					if (value === null) {
						jQuery.removeAttr(elem, name);
					} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					} else {
						elem.setAttribute(name, value + "");
						return value;
					}
				} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				} else {
					ret = jQuery.find.attr(elem, name);

					// Non-existent attributes return null, we normalize to undefined
					return ret == null ? undefined : ret;
				}
			},

			removeAttr: function (elem, value) {
				var name,
				    propName,
				    i = 0,
				    attrNames = value && value.match(rnotwhite);

				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						propName = jQuery.propFix[name] || name;

						// Boolean attributes get special treatment (#10870)
						if (jQuery.expr.match.bool.test(name)) {
							// Set corresponding property to false
							elem[propName] = false;
						}

						elem.removeAttribute(name);
					}
				}
			},

			attrHooks: {
				type: {
					set: function (elem, value) {
						if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
							// Setting the type on a radio button after the value resets the value in IE6-9
							// Reset value to default in case type is set after value during creation
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			}
		});

		// Hooks for boolean attributes
		boolHook = {
			set: function (elem, value, name) {
				if (value === false) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr(elem, name);
				} else {
					elem.setAttribute(name, name);
				}
				return name;
			}
		};
		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
			var getter = attrHandle[name] || jQuery.find.attr;

			attrHandle[name] = function (elem, name, isXML) {
				var ret, handle;
				if (!isXML) {
					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[name];
					attrHandle[name] = ret;
					ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
					attrHandle[name] = handle;
				}
				return ret;
			};
		});




		var rfocusable = /^(?:input|select|textarea|button)$/i;

		jQuery.fn.extend({
			prop: function (name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},

			removeProp: function (name) {
				return this.each(function () {
					delete this[jQuery.propFix[name] || name];
				});
			}
		});

		jQuery.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},

			prop: function (elem, name, value) {
				var ret,
				    hooks,
				    notxml,
				    nType = elem.nodeType;

				// don't get/set properties on text, comment and attribute nodes
				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

				if (notxml) {
					// Fix name and attach hooks
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}

				if (value !== undefined) {
					return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
				} else {
					return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
				}
			},

			propHooks: {
				tabIndex: {
					get: function (elem) {
						return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
					}
				}
			}
		});

		// Support: IE9+
		// Selectedness for an option in an optgroup can be inaccurate
		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function (elem) {
					var parent = elem.parentNode;
					if (parent && parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
					return null;
				}
			};
		}

		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});




		var rclass = /[\t\r\n\f]/g;

		jQuery.fn.extend({
			addClass: function (value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    finalValue,
				    proceed = typeof value === "string" && value,
				    i = 0,
				    len = this.length;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, this.className));
					});
				}

				if (proceed) {
					// The disjunction here is for better compressibility (see removeClass)
					classes = (value || "").match(rnotwhite) || [];

					for (; i < len; i++) {
						elem = this[i];
						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}

							// only assign if different to avoid unneeded rendering.
							finalValue = jQuery.trim(cur);
							if (elem.className !== finalValue) {
								elem.className = finalValue;
							}
						}
					}
				}

				return this;
			},

			removeClass: function (value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    finalValue,
				    proceed = arguments.length === 0 || typeof value === "string" && value,
				    i = 0,
				    len = this.length;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, this.className));
					});
				}
				if (proceed) {
					classes = (value || "").match(rnotwhite) || [];

					for (; i < len; i++) {
						elem = this[i];
						// This expression is here for better compressibility (see addClass)
						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								// Remove *all* instances
								while (cur.indexOf(" " + clazz + " ") >= 0) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}

							// only assign if different to avoid unneeded rendering.
							finalValue = value ? jQuery.trim(cur) : "";
							if (elem.className !== finalValue) {
								elem.className = finalValue;
							}
						}
					}
				}

				return this;
			},

			toggleClass: function (value, stateVal) {
				var type = typeof value;

				if (typeof stateVal === "boolean" && type === "string") {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}

				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
					});
				}

				return this.each(function () {
					if (type === "string") {
						// toggle individual class names
						var className,
						    i = 0,
						    self = jQuery(this),
						    classNames = value.match(rnotwhite) || [];

						while (className = classNames[i++]) {
							// check each className given, space separated list
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}

						// Toggle whole class name
					} else if (type === strundefined || type === "boolean") {
						if (this.className) {
							// store className if set
							data_priv.set(this, "__className__", this.className);
						}

						// If the element has a class name or if we're passed "false",
						// then remove the whole classname (if there was one, the above saved it).
						// Otherwise bring back whatever was previously saved (if anything),
						// falling back to the empty string if nothing was stored.
						this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
					}
				});
			},

			hasClass: function (selector) {
				var className = " " + selector + " ",
				    i = 0,
				    l = this.length;
				for (; i < l; i++) {
					if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
						return true;
					}
				}

				return false;
			}
		});




		var rreturn = /\r/g;

		jQuery.fn.extend({
			val: function (value) {
				var hooks,
				    ret,
				    isFunction,
				    elem = this[0];

				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}

						ret = elem.value;

						return typeof ret === "string" ?
						// handle most common string cases
						ret.replace(rreturn, "") :
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
					}

					return;
				}

				isFunction = jQuery.isFunction(value);

				return this.each(function (i) {
					var val;

					if (this.nodeType !== 1) {
						return;
					}

					if (isFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}

					// Treat null/undefined as ""; convert numbers to string
					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (jQuery.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}

					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

					// If set returns undefined, fall back to normal setting
					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});

		jQuery.extend({
			valHooks: {
				option: {
					get: function (elem) {
						var val = jQuery.find.attr(elem, "value");
						return val != null ? val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim(jQuery.text(elem));
					}
				},
				select: {
					get: function (elem) {
						var value,
						    option,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one" || index < 0,
						    values = one ? null : [],
						    max = one ? index + 1 : options.length,
						    i = index < 0 ? max : one ? index : 0;

						// Loop through all the selected options
						for (; i < max; i++) {
							option = options[i];

							// IE6-9 doesn't update selected after form reset (#2551)
							if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
								// Get the specific value for the option
								value = jQuery(option).val();

								// We don't need an array for one selects
								if (one) {
									return value;
								}

								// Multi-Selects return an array
								values.push(value);
							}
						}

						return values;
					},

					set: function (elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;

						while (i--) {
							option = options[i];
							if (option.selected = jQuery.inArray(option.value, values) >= 0) {
								optionSet = true;
							}
						}

						// force browsers to behave consistently when non-matching value is set
						if (!optionSet) {
							elem.selectedIndex = -1;
						}
						return values;
					}
				}
			}
		});

		// Radios and checkboxes getter/setter
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function (elem, value) {
					if (jQuery.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					// Support: Webkit
					// "" is returned instead of "on" if a value isn't specified
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});




		// Return jQuery for attributes-only inclusion


		jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});

		jQuery.fn.extend({
			hover: function (fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			},

			bind: function (types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function (types, fn) {
				return this.off(types, null, fn);
			},

			delegate: function (selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function (selector, types, fn) {
				// ( namespace ) or ( selector, types [, fn] )
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			}
		});


		var nonce = jQuery.now();

		var rquery = /\?/;



		// Support: Android 2.3
		// Workaround failure to string-cast null input
		jQuery.parseJSON = function (data) {
			return JSON.parse(data + "");
		};


		// Cross-browser xml parsing
		jQuery.parseXML = function (data) {
			var xml, tmp;
			if (!data || typeof data !== "string") {
				return null;
			}

			// Support: IE9
			try {
				tmp = new DOMParser();
				xml = tmp.parseFromString(data, "text/xml");
			} catch (e) {
				xml = undefined;
			}

			if (!xml || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};


		var
		// Document location
		ajaxLocParts,
		    ajaxLocation,
		    rhash = /#.*$/,
		    rts = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		   
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,
		    rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		   

		/* Prefilters
	  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	  * 2) These are called:
	  *    - BEFORE asking for a transport
	  *    - AFTER param serialization (s.data is a string if s.processData is true)
	  * 3) key is the dataType
	  * 4) the catchall symbol "*" can be used
	  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	  */
		prefilters = {},
		   

		/* Transports bindings
	  * 1) key is the dataType
	  * 2) the catchall symbol "*" can be used
	  * 3) selection will start with transport dataType and THEN go to "*" if needed
	  */
		transports = {},
		   

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*");

		// #8138, IE may throw an exception when accessing
		// a field from window.location if document.domain has been set
		try {
			ajaxLocation = location.href;
		} catch (e) {
			// Use the href attribute of an A element
			// since IE will modify it given document.location
			ajaxLocation = document.createElement("a");
			ajaxLocation.href = "";
			ajaxLocation = ajaxLocation.href;
		}

		// Segment location into parts
		ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

		// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
		function addToPrefiltersOrTransports(structure) {
			// dataTypeExpression is optional and defaults to "*"
			return function (dataTypeExpression, func) {
				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}

				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

				if (jQuery.isFunction(func)) {
					// For each dataType in the dataTypeExpression
					while (dataType = dataTypes[i++]) {
						// Prepend if requested
						if (dataType[0] === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);

							// Otherwise append
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}

		// Base inspection function for prefilters and transports
		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
			var inspected = {},
			    seekingTransport = structure === transports;

			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}

			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}

		// A special extend for ajax options
		// that takes "flat" options (not to be deep extended)
		// Fixes #9887
		function ajaxExtend(target, src) {
			var key,
			    deep,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};

			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}

			return target;
		}

		/* Handles responses to an ajax request:
	  * - finds the right dataType (mediates between content-type and expected dataType)
	  * - returns the corresponding response
	  */
		function ajaxHandleResponses(s, jqXHR, responses) {
			var ct,
			    type,
			    finalDataType,
			    firstDataType,
			    contents = s.contents,
			    dataTypes = s.dataTypes;

			// Remove auto dataType and get content-type in the process
			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}

			// Check if we're dealing with a known content-type
			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}

			// Check to see if we have a response for the expected dataType
			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {
				// Try convertible dataTypes
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}
				// Or just use first one
				finalDataType = finalDataType || firstDataType;
			}

			// If we found a dataType
			// We add the dataType to the list if needed
			// and return the corresponding response
			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}

		/* Chain conversions given the request and the original response
	  * Also sets the responseXXX fields on the jqXHR instance
	  */
		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},
			   
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

			// Create converters map with lowercased keys
			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}

			current = dataTypes.shift();

			// Convert to each sequential dataType
			while (current) {
				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}

				// Apply the dataFilter if provided
				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}

				prev = current;
				current = dataTypes.shift();

				if (current) {
					// There's only work to do if current dataType is non-auto
					if (current === "*") {
						current = prev;

						// Convert response if prev dataType is non-auto and differs from current
					} else if (prev !== "*" && prev !== current) {
						// Seek a direct converter
						conv = converters[prev + " " + current] || converters["* " + current];

						// If none found, seek a pair
						if (!conv) {
							for (conv2 in converters) {
								// If conv2 outputs current
								tmp = conv2.split(" ");
								if (tmp[1] === current) {
									// If prev can be converted to accepted input
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {
										// Condense equivalence converters
										if (conv === true) {
											conv = converters[conv2];

											// Otherwise, insert the intermediate dataType
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.unshift(tmp[1]);
										}
										break;
									}
								}
							}
						}

						// Apply converter (if not an equivalence)
						if (conv !== true) {
							// Unless errors are allowed to bubble, catch and return them
							if (conv && s.throws) {
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
									return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
								}
							}
						}
					}
				}
			}

			return { state: "success", data: response };
		}

		jQuery.extend({

			// Counter for holding the number of active queries
			active: 0,

			// Last-Modified header cache for next request
			lastModified: {},
			etag: {},

			ajaxSettings: {
				url: ajaxLocation,
				type: "GET",
				isLocal: rlocalProtocol.test(ajaxLocParts[1]),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				/*
	   timeout: 0,
	   data: null,
	   dataType: null,
	   username: null,
	   password: null,
	   cache: null,
	   throws: false,
	   traditional: false,
	   headers: {},
	   */

				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},

				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},

				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},

				// Data converters
				// Keys separate source (or catchall "*") and destination types with a single space
				converters: {

					// Convert anything to text
					"* text": String,

					// Text to html (true = no transformation)
					"text html": true,

					// Evaluate text as a json expression
					"text json": jQuery.parseJSON,

					// Parse text as xml
					"text xml": jQuery.parseXML
				},

				// For options that shouldn't be deep extended:
				// you can add your own custom options here if
				// and when you create one that shouldn't be
				// deep extended (see ajaxExtend)
				flatOptions: {
					url: true,
					context: true
				}
			},

			// Creates a full fledged settings object into target
			// with both ajaxSettings and settings fields.
			// If target is omitted, writes into ajaxSettings.
			ajaxSetup: function (target, settings) {
				return settings ?

				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
			},

			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),

			// Main method
			ajax: function (url, options) {
				// If url is an object, simulate pre-1.5 signature
				if (typeof url === "object") {
					options = url;
					url = undefined;
				}

				// Force options to be an object
				options = options || {};

				var transport,
				   
				// URL without anti-cache param
				cacheURL,
				   
				// Response headers
				responseHeadersString,
				    responseHeaders,
				   
				// timeout handle
				timeoutTimer,
				   
				// Cross-domain detection vars
				parts,
				   
				// To know if global events are to be dispatched
				fireGlobals,
				   
				// Loop variable
				i,
				   
				// Create the final options object
				s = jQuery.ajaxSetup({}, options),
				   
				// Callbacks context
				callbackContext = s.context || s,
				   
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
				   
				// Deferreds
				deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),
				   
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				   
				// Headers (they are sent all at once)
				requestHeaders = {},
				    requestHeadersNames = {},
				   
				// The jqXHR state
				state = 0,
				   
				// Default abort message
				strAbort = "canceled",
				   
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function (key) {
						var match;
						if (state === 2) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function () {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function (name, value) {
						var lname = name.toLowerCase();
						if (!state) {
							name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
							requestHeaders[name] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function (type) {
						if (!state) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function (map) {
						var code;
						if (map) {
							if (state < 2) {
								for (code in map) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[code] = [statusCode[code], map[code]];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							}
						}
						return this;
					},

					// Cancel the request
					abort: function (statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};

				// Attach deferreds
				deferred.promise(jqXHR).complete = completeDeferred.add;
				jqXHR.success = jqXHR.done;
				jqXHR.error = jqXHR.fail;

				// Remove hash character (#7531: and string promotion)
				// Add protocol if not provided (prefilters might expect it)
				// Handle falsy url in the settings object (#10093: consistency with old signature)
				// We also use the url parameter if available
				s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

				// Alias method option to type as per ticket #12004
				s.type = options.method || options.type || s.method || s.type;

				// Extract dataTypes list
				s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

				// A cross-domain request is in order when we have a protocol:host:port mismatch
				if (s.crossDomain == null) {
					parts = rurl.exec(s.url.toLowerCase());
					s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
				}

				// Convert data if not already a string
				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}

				// Apply prefilters
				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

				// If request was aborted inside a prefilter, stop there
				if (state === 2) {
					return jqXHR;
				}

				// We can fire global events as of now if asked to
				fireGlobals = s.global;

				// Watch for a new set of requests
				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}

				// Uppercase the type
				s.type = s.type.toUpperCase();

				// Determine if request has content
				s.hasContent = !rnoContent.test(s.type);

				// Save the URL in case we're toying with the If-Modified-Since
				// and/or If-None-Match header later on
				cacheURL = s.url;

				// More options handling for requests with no content
				if (!s.hasContent) {
					// If data is available, append data to url
					if (s.data) {
						cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
						// #9682: remove data so that it's not used in an eventual retry
						delete s.data;
					}

					// Add anti-cache in url if needed
					if (s.cache === false) {
						s.url = rts.test(cacheURL) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace(rts, "$1_=" + nonce++) :

						// Otherwise add one to the end
						cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
					}
				}

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}

				// Set the correct header, if data is being sent
				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}

				// Set the Accepts header for the server, depending on the dataType
				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

				// Check for headers option
				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}

				// Allow custom headers/mimetypes and early abort
				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
					// Abort if not done already and return
					return jqXHR.abort();
				}

				// aborting is no longer a cancellation
				strAbort = "abort";

				// Install callbacks on deferreds
				for (i in { success: 1, error: 1, complete: 1 }) {
					jqXHR[i](s[i]);
				}

				// Get transport
				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

				// If no transport, we auto-abort
				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;

					// Send global event
					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}
					// Timeout
					if (s.async && s.timeout > 0) {
						timeoutTimer = setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}

					try {
						state = 1;
						transport.send(requestHeaders, done);
					} catch (e) {
						// Propagate exception as error if not done
						if (state < 2) {
							done(-1, e);
							// Simply rethrow otherwise
						} else {
							throw e;
						}
					}
				}

				// Callback for when everything is done
				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;

					// Called once
					if (state === 2) {
						return;
					}

					// State is "done" now
					state = 2;

					// Clear timeout if it exists
					if (timeoutTimer) {
						clearTimeout(timeoutTimer);
					}

					// Dereference transport for early garbage collection
					// (no matter how long the jqXHR object will be used)
					transport = undefined;

					// Cache response headers
					responseHeadersString = headers || "";

					// Set readyState
					jqXHR.readyState = status > 0 ? 4 : 0;

					// Determine if successful
					isSuccess = status >= 200 && status < 300 || status === 304;

					// Get response data
					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}

					// Convert no matter what (that way responseXXX fields are always set)
					response = ajaxConvert(s, response, jqXHR, isSuccess);

					// If successful, handle type chaining
					if (isSuccess) {
						// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}

						// if no content
						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";

							// if not modified
						} else if (status === 304) {
							statusText = "notmodified";

							// If we have data, let's convert it
						} else {
							statusText = response.state;
							success = response.data;
							error = response.error;
							isSuccess = !error;
						}
					} else {
						// We extract error from statusText
						// then normalize statusText and status for non-aborts
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}

					// Set data for the fake xhr object
					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";

					// Success/Error
					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}

					// Status-dependent callbacks
					jqXHR.statusCode(statusCode);
					statusCode = undefined;

					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}

					// Complete
					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
						// Handle the global AJAX counter
						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}

				return jqXHR;
			},

			getJSON: function (url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},

			getScript: function (url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});

		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {
				// shift arguments if data argument was omitted
				if (jQuery.isFunction(data)) {
					type = type || callback;
					callback = data;
					data = undefined;
				}

				return jQuery.ajax({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				});
			};
		});

		// Attach a bunch of functions for handling common AJAX events
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});


		jQuery._evalUrl = function (url) {
			return jQuery.ajax({
				url: url,
				type: "GET",
				dataType: "script",
				async: false,
				global: false,
				throws: true
			});
		};


		jQuery.fn.extend({
			wrapAll: function (html) {
				var wrap;

				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapAll(html.call(this, i));
					});
				}

				if (this[0]) {
					// The elements to wrap the target around
					wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}

					wrap.map(function () {
						var elem = this;

						while (elem.firstElementChild) {
							elem = elem.firstElementChild;
						}

						return elem;
					}).append(this);
				}

				return this;
			},

			wrapInner: function (html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}

				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();

					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},

			wrap: function (html) {
				var isFunction = jQuery.isFunction(html);

				return this.each(function (i) {
					jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
				});
			},

			unwrap: function () {
				return this.parent().each(function () {
					if (!jQuery.nodeName(this, "body")) {
						jQuery(this).replaceWith(this.childNodes);
					}
				}).end();
			}
		});


		jQuery.expr.filters.hidden = function (elem) {
			// Support: Opera <= 12.12
			// Opera reports offsetWidths and offsetHeights less than zero on some elements
			return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
		};
		jQuery.expr.filters.visible = function (elem) {
			return !jQuery.expr.filters.hidden(elem);
		};




		var r20 = /%20/g,
		    rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;

		function buildParams(prefix, obj, traditional, add) {
			var name;

			if (jQuery.isArray(obj)) {
				// Serialize array item.
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {
						// Treat each array item as a scalar.
						add(prefix, v);
					} else {
						// Item is non-scalar (array or object), encode its numeric index.
						buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && jQuery.type(obj) === "object") {
				// Serialize object item.
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {
				// Serialize scalar item.
				add(prefix, obj);
			}
		}

		// Serialize an array of form elements or a set of
		// key/values into a query string
		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function (key, value) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};

			// Set traditional to true for jQuery <= 1.3.2 behavior.
			if (traditional === undefined) {
				traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
			}

			// If an array was passed in, assume that it is an array of form elements.
			if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
				// Serialize the form elements
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {
				// If traditional, encode the "old" way (the way 1.3.2 or older
				// did it), otherwise encode params recursively.
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}

			// Return the resulting serialization
			return s.join("&").replace(r20, "+");
		};

		jQuery.fn.extend({
			serialize: function () {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function () {
				return this.map(function () {
					// Can add propHook for "elements" to filter or add form elements
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;

					// Use .is( ":disabled" ) so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();

					return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});


		jQuery.ajaxSettings.xhr = function () {
			try {
				return new XMLHttpRequest();
			} catch (e) {}
		};

		var xhrId = 0,
		    xhrCallbacks = {},
		    xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		    xhrSupported = jQuery.ajaxSettings.xhr();

		// Support: IE9
		// Open requests must be manually aborted on unload (#5280)
		if (window.ActiveXObject) {
			jQuery(window).on("unload", function () {
				for (var key in xhrCallbacks) {
					xhrCallbacks[key]();
				}
			});
		}

		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		support.ajax = xhrSupported = !!xhrSupported;

		jQuery.ajaxTransport(function (options) {
			var callback;

			// Cross domain only allowed if supported through XMLHttpRequest
			if (support.cors || xhrSupported && !options.crossDomain) {
				return {
					send: function (headers, complete) {
						var i,
						    xhr = options.xhr(),
						    id = ++xhrId;

						xhr.open(options.type, options.url, options.async, options.username, options.password);

						// Apply custom fields if provided
						if (options.xhrFields) {
							for (i in options.xhrFields) {
								xhr[i] = options.xhrFields[i];
							}
						}

						// Override mime type if needed
						if (options.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(options.mimeType);
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if (!options.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						// Set headers
						for (i in headers) {
							xhr.setRequestHeader(i, headers[i]);
						}

						// Callback
						callback = function (type) {
							return function () {
								if (callback) {
									delete xhrCallbacks[id];
									callback = xhr.onload = xhr.onerror = null;

									if (type === "abort") {
										xhr.abort();
									} else if (type === "error") {
										complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status, xhr.statusText);
									} else {
										complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined, xhr.getAllResponseHeaders());
									}
								}
							};
						};

						// Listen to events
						xhr.onload = callback();
						xhr.onerror = callback("error");

						// Create the abort callback
						callback = xhrCallbacks[id] = callback("abort");

						try {
							// Do send the request (this may raise an exception)
							xhr.send(options.hasContent && options.data || null);
						} catch (e) {
							// #14683: Only rethrow if this hasn't been notified as an error yet
							if (callback) {
								throw e;
							}
						}
					},

					abort: function () {
						if (callback) {
							callback();
						}
					}
				};
			}
		});




		// Install script dataType
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function (text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});

		// Handle cache's special case and crossDomain
		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
			}
		});

		// Bind script tag hack transport
		jQuery.ajaxTransport("script", function (s) {
			// This transport only deals with cross domain requests
			if (s.crossDomain) {
				var script, callback;
				return {
					send: function (_, complete) {
						script = jQuery("<script>").prop({
							async: true,
							charset: s.scriptCharset,
							src: s.url
						}).on("load error", callback = function (evt) {
							script.remove();
							callback = null;
							if (evt) {
								complete(evt.type === "error" ? 404 : 200, evt.type);
							}
						});
						document.head.appendChild(script[0]);
					},
					abort: function () {
						if (callback) {
							callback();
						}
					}
				};
			}
		});




		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;

		// Default jsonp settings
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});

		// Detect, normalize options and install callbacks for jsonp requests
		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");

			// Handle iff the expected data type is "jsonp" or we have a parameter to set
			if (jsonProp || s.dataTypes[0] === "jsonp") {
				// Get callback name, remembering preexisting value associated with it
				callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

				// Insert callback into url or form data
				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}

				// Use data converter to retrieve json after script execution
				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};

				// force json dataType
				s.dataTypes[0] = "json";

				// Install callback
				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};

				// Clean-up function (fires after converters)
				jqXHR.always(function () {
					// Restore preexisting value
					window[callbackName] = overwritten;

					// Save back as free
					if (s[callbackName]) {
						// make sure that re-using the options doesn't screw things around
						s.jsonpCallback = originalSettings.jsonpCallback;

						// save the callback name for future use
						oldCallbacks.push(callbackName);
					}

					// Call if it was a function and we have a response
					if (responseContainer && jQuery.isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}

					responseContainer = overwritten = undefined;
				});

				// Delegate to script
				return "script";
			}
		});




		// data: string of html
		// context (optional): If specified, the fragment will be created in this context, defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		jQuery.parseHTML = function (data, context, keepScripts) {
			if (!data || typeof data !== "string") {
				return null;
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}
			context = context || document;

			var parsed = rsingleTag.exec(data),
			    scripts = !keepScripts && [];

			// Single tag
			if (parsed) {
				return [context.createElement(parsed[1])];
			}

			parsed = jQuery.buildFragment([data], context, scripts);

			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}

			return jQuery.merge([], parsed.childNodes);
		};


		// Keep a copy of the old load method
		var _load = jQuery.fn.load;

		/**
	  * Load a url into a page
	  */
		jQuery.fn.load = function (url, params, callback) {
			if (typeof url !== "string" && _load) {
				return _load.apply(this, arguments);
			}

			var selector,
			    type,
			    response,
			    self = this,
			    off = url.indexOf(" ");

			if (off >= 0) {
				selector = jQuery.trim(url.slice(off));
				url = url.slice(0, off);
			}

			// If it's a function
			if (jQuery.isFunction(params)) {
				// We assume that it's the callback
				callback = params;
				params = undefined;

				// Otherwise, build a param string
			} else if (params && typeof params === "object") {
				type = "POST";
			}

			// If we have elements to modify, make the request
			if (self.length > 0) {
				jQuery.ajax({
					url: url,

					// if "type" variable is undefined, then "GET" method will be used
					type: type,
					dataType: "html",
					data: params
				}).done(function (responseText) {
					// Save response for use in complete callback
					response = arguments;

					self.html(selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

					// Otherwise use the full result
					responseText);
				}).complete(callback && function (jqXHR, status) {
					self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
				});
			}

			return this;
		};




		jQuery.expr.filters.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};




		var docElem = window.document.documentElement;

		/**
	  * Gets a window from an element
	  */
		function getWindow(elem) {
			return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
		}

		jQuery.offset = {
			setOffset: function (elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};

				// Set position first, in-case top/left are set even on static elem
				if (position === "static") {
					elem.style.position = "relative";
				}

				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

				// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}

				if (jQuery.isFunction(options)) {
					options = options.call(elem, i, curOffset);
				}

				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}

				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};

		jQuery.fn.extend({
			offset: function (options) {
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}

				var docElem,
				    win,
				    elem = this[0],
				    box = { top: 0, left: 0 },
				    doc = elem && elem.ownerDocument;

				if (!doc) {
					return;
				}

				docElem = doc.documentElement;

				// Make sure it's not a disconnected DOM node
				if (!jQuery.contains(docElem, elem)) {
					return box;
				}

				// If we don't have gBCR, just use 0,0 rather than error
				// BlackBerry 5, iOS 3 (original iPhone)
				if (typeof elem.getBoundingClientRect !== strundefined) {
					box = elem.getBoundingClientRect();
				}
				win = getWindow(doc);
				return {
					top: box.top + win.pageYOffset - docElem.clientTop,
					left: box.left + win.pageXOffset - docElem.clientLeft
				};
			},

			position: function () {
				if (!this[0]) {
					return;
				}

				var offsetParent,
				    offset,
				    elem = this[0],
				    parentOffset = { top: 0, left: 0 };

				// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
				if (jQuery.css(elem, "position") === "fixed") {
					// We assume that getBoundingClientRect is available when computed position is fixed
					offset = elem.getBoundingClientRect();
				} else {
					// Get *real* offsetParent
					offsetParent = this.offsetParent();

					// Get correct offsets
					offset = this.offset();
					if (!jQuery.nodeName(offsetParent[0], "html")) {
						parentOffset = offsetParent.offset();
					}

					// Add offsetParent borders
					parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
					parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
				}

				// Subtract parent offsets and element margins
				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},

			offsetParent: function () {
				return this.map(function () {
					var offsetParent = this.offsetParent || docElem;

					while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
						offsetParent = offsetParent.offsetParent;
					}

					return offsetParent || docElem;
				});
			}
		});

		// Create scrollLeft and scrollTop methods
		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = "pageYOffset" === prop;

			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {
					var win = getWindow(elem);

					if (val === undefined) {
						return win ? win[prop] : elem[method];
					}

					if (win) {
						win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length, null);
			};
		});

		// Add the top/left cssHooks using jQuery.fn.position
		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// getComputedStyle returns percent when specified for top/left/bottom/right
		// rather than make the css module depend on the offset module, we just check for it here
		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);
					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});


		// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
				// margin is only for outerHeight, outerWidth
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

					return access(this, function (elem, type, value) {
						var doc;

						if (jQuery.isWindow(elem)) {
							// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
							// isn't a whole lot we can do. See pull request at this URL for discussion:
							// https://github.com/jquery/jquery/pull/764
							return elem.document.documentElement["client" + name];
						}

						// Get document width or height
						if (elem.nodeType === 9) {
							doc = elem.documentElement;

							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
							// whichever is greatest
							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}

						return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css(elem, type, extra) :

						// Set width or height on the element
						jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable, null);
				};
			});
		});


		// The number of elements contained in the matched element set
		jQuery.fn.size = function () {
			return this.length;
		};

		jQuery.fn.andSelf = jQuery.fn.addBack;




		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.

		// Note that for maximum portability, libraries that are not jQuery should
		// declare themselves as anonymous modules, and avoid setting a global if an
		// AMD loader is present. jQuery is a special case. For more information, see
		// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}




		var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
		   

		// Map over the $ in case of overwrite
		_$ = window.$;

		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}

			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}

			return jQuery;
		};

		// Expose jQuery and $ identifiers, even in
		// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
		// and CommonJS for browser emulators (#13566)
		if (typeof noGlobal === strundefined) {
			window.jQuery = window.$ = jQuery;
		}




		return jQuery;
	});


	// Return just the one element from the set
	// Get excess from tokenize (recursively)
	// advance to the next closing parenthesis


	// Fallback to seeking `elem` from the start


	// Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	/* fnDone, fnFail, fnProgress */
	// Don't return options that are disabled or in a disabled optgroup

/***/ }
/******/ ])
});
