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
	   __cov_G7r$JvG2gU2$BtiZioay5g['/Users/bowlingx/Projekte/flexcss/src/export.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/export.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{},"fnMap":{},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":54}},"2":{"start":{"line":5,"column":0},"end":{"line":5,"column":60}},"3":{"start":{"line":8,"column":0},"end":{"line":11,"column":2}}},"branchMap":{},"code":["\"use strict\";","","var Form = to5Runtime.interopRequire(require(\"Form\"));","","var Tooltip = to5Runtime.interopRequire(require(\"Tooltip\"));","","// default export as component object","module.exports = {","    Form: Form,","    Tooltip: Tooltip","};"]};
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
	   __cov_ne9d3bYaB94HPejJeu9yEA['/Users/bowlingx/Projekte/flexcss/src/main/Form.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/main/Form.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":1,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"109":0,"110":0,"111":0,"112":0,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"121":0,"122":0,"123":0,"124":0,"125":0,"126":0,"127":0,"128":0,"129":0,"130":0,"131":0,"132":0,"133":0,"134":0,"135":0,"136":0,"137":0,"138":0,"139":0,"140":0,"141":0,"142":0,"143":0,"144":0,"145":0,"146":0,"147":0,"148":0,"149":0,"150":0,"151":0,"152":0,"153":0,"154":0,"155":0,"156":0,"157":0,"158":0,"159":0,"160":0,"161":0,"162":1,"163":0,"164":0,"165":0,"166":0,"167":0,"168":0,"169":0,"170":0,"171":0,"172":0,"173":0,"174":0,"175":0,"176":0,"177":0,"178":0,"179":0,"180":0,"181":0,"182":0,"183":0,"184":0,"185":0,"186":0,"187":0,"188":0,"189":0,"190":0,"191":0,"192":0,"193":0,"194":0,"195":0,"196":0,"197":0,"198":0,"199":0,"200":0,"201":0,"202":0,"203":0,"204":0,"205":0,"206":0,"207":0,"208":0,"209":0,"210":0,"211":0,"212":0,"213":0,"214":0,"215":0,"216":0,"217":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0],"34":[0,0],"35":[0,0],"36":[0,0],"37":[0,0,0,0],"38":[0,0,0],"39":[0,0],"40":[0,0],"41":[0,0],"42":[0,0],"43":[0,0],"44":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0},"fnMap":{"1":{"name":"(anonymous_1)","line":47,"loc":{"start":{"line":47,"column":12},"end":{"line":47,"column":24}}},"2":{"name":"Form","line":52,"loc":{"start":{"line":52,"column":4},"end":{"line":52,"column":33}}},"3":{"name":"(anonymous_3)","line":73,"loc":{"start":{"line":73,"column":57},"end":{"line":73,"column":69}}},"4":{"name":"_createArrayFromInvalidFieldList","line":126,"loc":{"start":{"line":126,"column":19},"end":{"line":126,"column":67}}},"5":{"name":"_formatErrorTooltip","line":148,"loc":{"start":{"line":148,"column":19},"end":{"line":148,"column":55}}},"6":{"name":"registerErrorMessageHandler","line":161,"loc":{"start":{"line":161,"column":19},"end":{"line":161,"column":67}}},"7":{"name":"init","line":174,"loc":{"start":{"line":174,"column":19},"end":{"line":174,"column":52}}},"8":{"name":"registerValidator","line":192,"loc":{"start":{"line":192,"column":19},"end":{"line":192,"column":63}}},"9":{"name":"registerGlobalRemoteValidationFunction","line":206,"loc":{"start":{"line":206,"column":19},"end":{"line":206,"column":73}}},"10":{"name":"_submitFunction","line":223,"loc":{"start":{"line":223,"column":19},"end":{"line":223,"column":57}}},"11":{"name":"(anonymous_11)","line":261,"loc":{"start":{"line":261,"column":39},"end":{"line":261,"column":52}}},"12":{"name":"_setupErrorMessages","line":281,"loc":{"start":{"line":281,"column":19},"end":{"line":281,"column":65}}},"13":{"name":"_removeElementErrors","line":293,"loc":{"start":{"line":293,"column":19},"end":{"line":293,"column":61}}},"14":{"name":"registerValidator","line":320,"loc":{"start":{"line":320,"column":19},"end":{"line":320,"column":63}}},"15":{"name":"_runValidation","line":336,"loc":{"start":{"line":336,"column":19},"end":{"line":336,"column":65}}},"16":{"name":"(anonymous_16)","line":343,"loc":{"start":{"line":343,"column":28},"end":{"line":343,"column":40}}},"17":{"name":"_customValidationsForElements","line":361,"loc":{"start":{"line":361,"column":19},"end":{"line":361,"column":66}}},"18":{"name":"(anonymous_18)","line":378,"loc":{"start":{"line":378,"column":55},"end":{"line":378,"column":67}}},"19":{"name":"removeErrors","line":403,"loc":{"start":{"line":403,"column":19},"end":{"line":403,"column":43}}},"20":{"name":"prepareErrors","line":417,"loc":{"start":{"line":417,"column":19},"end":{"line":417,"column":67}}},"21":{"name":"validateCustomFields","line":460,"loc":{"start":{"line":460,"column":19},"end":{"line":460,"column":51}}},"22":{"name":"getForm","line":473,"loc":{"start":{"line":473,"column":19},"end":{"line":473,"column":38}}},"23":{"name":"registerRemoteValidation","line":486,"loc":{"start":{"line":486,"column":19},"end":{"line":486,"column":59}}},"24":{"name":"showAndOrCreateTooltip","line":500,"loc":{"start":{"line":500,"column":19},"end":{"line":500,"column":67}}},"25":{"name":"(anonymous_25)","line":512,"loc":{"start":{"line":512,"column":27},"end":{"line":512,"column":39}}},"26":{"name":"_checkIsInvalid","line":536,"loc":{"start":{"line":536,"column":19},"end":{"line":536,"column":47}}},"27":{"name":"(anonymous_27)","line":547,"loc":{"start":{"line":547,"column":31},"end":{"line":547,"column":43}}},"28":{"name":"initFormValidation","line":566,"loc":{"start":{"line":566,"column":19},"end":{"line":566,"column":49}}},"29":{"name":"(anonymous_29)","line":571,"loc":{"start":{"line":571,"column":49},"end":{"line":571,"column":62}}},"30":{"name":"(anonymous_30)","line":574,"loc":{"start":{"line":574,"column":73},"end":{"line":574,"column":92}}},"31":{"name":"(anonymous_31)","line":575,"loc":{"start":{"line":575,"column":40},"end":{"line":575,"column":53}}},"32":{"name":"(anonymous_32)","line":586,"loc":{"start":{"line":586,"column":46},"end":{"line":586,"column":59}}},"33":{"name":"(anonymous_33)","line":600,"loc":{"start":{"line":600,"column":72},"end":{"line":600,"column":84}}},"34":{"name":"_checkIsValidBlurFocusElement","line":614,"loc":{"start":{"line":614,"column":16},"end":{"line":614,"column":63}}},"35":{"name":"(anonymous_35)","line":629,"loc":{"start":{"line":629,"column":47},"end":{"line":629,"column":60}}},"36":{"name":"(anonymous_36)","line":638,"loc":{"start":{"line":638,"column":48},"end":{"line":638,"column":61}}},"37":{"name":"(anonymous_37)","line":642,"loc":{"start":{"line":642,"column":72},"end":{"line":642,"column":84}}},"38":{"name":"(anonymous_38)","line":650,"loc":{"start":{"line":650,"column":37},"end":{"line":650,"column":50}}},"39":{"name":"_submitListener","line":669,"loc":{"start":{"line":669,"column":19},"end":{"line":669,"column":63}}},"40":{"name":"(anonymous_40)","line":686,"loc":{"start":{"line":686,"column":69},"end":{"line":686,"column":88}}},"41":{"name":"(anonymous_41)","line":688,"loc":{"start":{"line":688,"column":40},"end":{"line":688,"column":53}}},"42":{"name":"(anonymous_42)","line":704,"loc":{"start":{"line":704,"column":54},"end":{"line":704,"column":67}}},"43":{"name":"_handleSubmit","line":727,"loc":{"start":{"line":727,"column":19},"end":{"line":727,"column":45}}},"44":{"name":"(anonymous_44)","line":751,"loc":{"start":{"line":751,"column":38},"end":{"line":751,"column":50}}},"45":{"name":"(anonymous_45)","line":753,"loc":{"start":{"line":753,"column":33},"end":{"line":753,"column":45}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":44}},"2":{"start":{"line":7,"column":0},"end":{"line":7,"column":60}},"3":{"start":{"line":9,"column":0},"end":{"line":9,"column":56}},"4":{"start":{"line":11,"column":0},"end":{"line":11,"column":61}},"5":{"start":{"line":13,"column":0},"end":{"line":13,"column":63}},"6":{"start":{"line":14,"column":0},"end":{"line":14,"column":62}},"7":{"start":{"line":15,"column":0},"end":{"line":15,"column":54}},"8":{"start":{"line":16,"column":0},"end":{"line":16,"column":57}},"9":{"start":{"line":17,"column":0},"end":{"line":17,"column":44}},"10":{"start":{"line":18,"column":0},"end":{"line":18,"column":65}},"11":{"start":{"line":19,"column":0},"end":{"line":19,"column":89}},"12":{"start":{"line":26,"column":0},"end":{"line":26,"column":71}},"13":{"start":{"line":31,"column":0},"end":{"line":31,"column":74}},"14":{"start":{"line":36,"column":0},"end":{"line":36,"column":105}},"15":{"start":{"line":41,"column":0},"end":{"line":41,"column":97}},"16":{"start":{"line":47,"column":0},"end":{"line":736,"column":5}},"17":{"start":{"line":52,"column":4},"end":{"line":114,"column":5}},"18":{"start":{"line":53,"column":8},"end":{"line":53,"column":46}},"19":{"start":{"line":55,"column":8},"end":{"line":57,"column":9}},"20":{"start":{"line":56,"column":12},"end":{"line":56,"column":66}},"21":{"start":{"line":63,"column":8},"end":{"line":63,"column":25}},"22":{"start":{"line":68,"column":8},"end":{"line":68,"column":29}},"23":{"start":{"line":73,"column":8},"end":{"line":73,"column":73}},"24":{"start":{"line":79,"column":8},"end":{"line":90,"column":10}},"25":{"start":{"line":93,"column":8},"end":{"line":93,"column":51}},"26":{"start":{"line":98,"column":8},"end":{"line":98,"column":37}},"27":{"start":{"line":105,"column":8},"end":{"line":105,"column":49}},"28":{"start":{"line":111,"column":8},"end":{"line":111,"column":46}},"29":{"start":{"line":113,"column":8},"end":{"line":113,"column":34}},"30":{"start":{"line":116,"column":4},"end":{"line":733,"column":7}},"31":{"start":{"line":127,"column":16},"end":{"line":127,"column":29}},"32":{"start":{"line":128,"column":16},"end":{"line":133,"column":17}},"33":{"start":{"line":129,"column":20},"end":{"line":129,"column":36}},"34":{"start":{"line":130,"column":20},"end":{"line":132,"column":21}},"35":{"start":{"line":131,"column":24},"end":{"line":131,"column":36}},"36":{"start":{"line":134,"column":16},"end":{"line":134,"column":27}},"37":{"start":{"line":149,"column":16},"end":{"line":149,"column":67}},"38":{"start":{"line":162,"column":16},"end":{"line":162,"column":59}},"39":{"start":{"line":175,"column":16},"end":{"line":175,"column":134}},"40":{"start":{"line":176,"column":16},"end":{"line":178,"column":17}},"41":{"start":{"line":177,"column":20},"end":{"line":177,"column":48}},"42":{"start":{"line":193,"column":16},"end":{"line":193,"column":56}},"43":{"start":{"line":194,"column":16},"end":{"line":194,"column":28}},"44":{"start":{"line":207,"column":16},"end":{"line":207,"column":59}},"45":{"start":{"line":208,"column":16},"end":{"line":208,"column":28}},"46":{"start":{"line":224,"column":16},"end":{"line":227,"column":32}},"47":{"start":{"line":229,"column":16},"end":{"line":229,"column":92}},"48":{"start":{"line":232,"column":16},"end":{"line":235,"column":17}},"49":{"start":{"line":233,"column":20},"end":{"line":233,"column":61}},"50":{"start":{"line":234,"column":20},"end":{"line":234,"column":33}},"51":{"start":{"line":237,"column":16},"end":{"line":240,"column":17}},"52":{"start":{"line":239,"column":20},"end":{"line":239,"column":45}},"53":{"start":{"line":242,"column":16},"end":{"line":242,"column":54}},"54":{"start":{"line":245,"column":16},"end":{"line":245,"column":35}},"55":{"start":{"line":248,"column":16},"end":{"line":257,"column":19}},"56":{"start":{"line":259,"column":16},"end":{"line":259,"column":94}},"57":{"start":{"line":261,"column":16},"end":{"line":267,"column":19}},"58":{"start":{"line":262,"column":20},"end":{"line":262,"column":109}},"59":{"start":{"line":264,"column":20},"end":{"line":264,"column":109}},"60":{"start":{"line":266,"column":20},"end":{"line":266,"column":61}},"61":{"start":{"line":282,"column":16},"end":{"line":282,"column":126}},"62":{"start":{"line":294,"column":16},"end":{"line":295,"column":98}},"63":{"start":{"line":296,"column":16},"end":{"line":298,"column":17}},"64":{"start":{"line":297,"column":20},"end":{"line":297,"column":96}},"65":{"start":{"line":299,"column":16},"end":{"line":304,"column":17}},"66":{"start":{"line":300,"column":20},"end":{"line":300,"column":96}},"67":{"start":{"line":301,"column":20},"end":{"line":303,"column":21}},"68":{"start":{"line":302,"column":24},"end":{"line":302,"column":93}},"69":{"start":{"line":321,"column":16},"end":{"line":321,"column":51}},"70":{"start":{"line":322,"column":16},"end":{"line":322,"column":28}},"71":{"start":{"line":337,"column":16},"end":{"line":339,"column":17}},"72":{"start":{"line":338,"column":20},"end":{"line":338,"column":72}},"73":{"start":{"line":340,"column":16},"end":{"line":341,"column":93}},"74":{"start":{"line":342,"column":16},"end":{"line":342,"column":38}},"75":{"start":{"line":343,"column":16},"end":{"line":345,"column":19}},"76":{"start":{"line":344,"column":20},"end":{"line":344,"column":45}},"77":{"start":{"line":346,"column":16},"end":{"line":346,"column":30}},"78":{"start":{"line":362,"column":16},"end":{"line":364,"column":39}},"79":{"start":{"line":365,"column":16},"end":{"line":377,"column":17}},"80":{"start":{"line":366,"column":20},"end":{"line":368,"column":50}},"81":{"start":{"line":369,"column":20},"end":{"line":376,"column":21}},"82":{"start":{"line":371,"column":24},"end":{"line":373,"column":25}},"83":{"start":{"line":372,"column":28},"end":{"line":372,"column":37}},"84":{"start":{"line":374,"column":24},"end":{"line":374,"column":50}},"85":{"start":{"line":375,"column":24},"end":{"line":375,"column":80}},"86":{"start":{"line":378,"column":16},"end":{"line":392,"column":19}},"87":{"start":{"line":379,"column":20},"end":{"line":380,"column":46}},"88":{"start":{"line":381,"column":20},"end":{"line":384,"column":22}},"89":{"start":{"line":386,"column":20},"end":{"line":390,"column":21}},"90":{"start":{"line":387,"column":24},"end":{"line":389,"column":25}},"91":{"start":{"line":388,"column":28},"end":{"line":388,"column":56}},"92":{"start":{"line":391,"column":20},"end":{"line":391,"column":34}},"93":{"start":{"line":404,"column":16},"end":{"line":404,"column":53}},"94":{"start":{"line":405,"column":16},"end":{"line":405,"column":28}},"95":{"start":{"line":418,"column":16},"end":{"line":420,"column":17}},"96":{"start":{"line":419,"column":20},"end":{"line":419,"column":57}},"97":{"start":{"line":423,"column":16},"end":{"line":449,"column":17}},"98":{"start":{"line":424,"column":20},"end":{"line":426,"column":50}},"99":{"start":{"line":427,"column":20},"end":{"line":427,"column":88}},"100":{"start":{"line":428,"column":20},"end":{"line":446,"column":21}},"101":{"start":{"line":429,"column":24},"end":{"line":432,"column":25}},"102":{"start":{"line":431,"column":28},"end":{"line":431,"column":62}},"103":{"start":{"line":434,"column":24},"end":{"line":434,"column":66}},"104":{"start":{"line":435,"column":24},"end":{"line":435,"column":55}},"105":{"start":{"line":436,"column":24},"end":{"line":436,"column":65}},"106":{"start":{"line":437,"column":24},"end":{"line":439,"column":25}},"107":{"start":{"line":438,"column":28},"end":{"line":438,"column":148}},"108":{"start":{"line":440,"column":24},"end":{"line":440,"column":88}},"109":{"start":{"line":442,"column":24},"end":{"line":442,"column":58}},"110":{"start":{"line":443,"column":24},"end":{"line":443,"column":66}},"111":{"start":{"line":445,"column":24},"end":{"line":445,"column":58}},"112":{"start":{"line":448,"column":20},"end":{"line":448,"column":48}},"113":{"start":{"line":461,"column":16},"end":{"line":461,"column":105}},"114":{"start":{"line":474,"column":16},"end":{"line":474,"column":33}},"115":{"start":{"line":487,"column":16},"end":{"line":487,"column":54}},"116":{"start":{"line":488,"column":16},"end":{"line":488,"column":28}},"117":{"start":{"line":501,"column":16},"end":{"line":501,"column":32}},"118":{"start":{"line":502,"column":16},"end":{"line":506,"column":17}},"119":{"start":{"line":503,"column":20},"end":{"line":505,"column":23}},"120":{"start":{"line":508,"column":16},"end":{"line":510,"column":17}},"121":{"start":{"line":509,"column":20},"end":{"line":509,"column":27}},"122":{"start":{"line":512,"column":16},"end":{"line":523,"column":22}},"123":{"start":{"line":513,"column":20},"end":{"line":515,"column":21}},"124":{"start":{"line":514,"column":24},"end":{"line":514,"column":31}},"125":{"start":{"line":516,"column":20},"end":{"line":522,"column":21}},"126":{"start":{"line":517,"column":24},"end":{"line":517,"column":133}},"127":{"start":{"line":519,"column":24},"end":{"line":521,"column":25}},"128":{"start":{"line":520,"column":28},"end":{"line":520,"column":64}},"129":{"start":{"line":537,"column":16},"end":{"line":537,"column":35}},"130":{"start":{"line":538,"column":16},"end":{"line":539,"column":32}},"131":{"start":{"line":540,"column":16},"end":{"line":540,"column":79}},"132":{"start":{"line":542,"column":16},"end":{"line":544,"column":17}},"133":{"start":{"line":543,"column":20},"end":{"line":543,"column":33}},"134":{"start":{"line":546,"column":16},"end":{"line":551,"column":17}},"135":{"start":{"line":547,"column":20},"end":{"line":550,"column":26}},"136":{"start":{"line":548,"column":24},"end":{"line":548,"column":39}},"137":{"start":{"line":549,"column":24},"end":{"line":549,"column":60}},"138":{"start":{"line":553,"column":16},"end":{"line":553,"column":61}},"139":{"start":{"line":554,"column":16},"end":{"line":554,"column":46}},"140":{"start":{"line":555,"column":16},"end":{"line":555,"column":34}},"141":{"start":{"line":568,"column":16},"end":{"line":570,"column":32}},"142":{"start":{"line":571,"column":16},"end":{"line":582,"column":25}},"143":{"start":{"line":572,"column":20},"end":{"line":572,"column":57}},"144":{"start":{"line":573,"column":20},"end":{"line":581,"column":21}},"145":{"start":{"line":574,"column":24},"end":{"line":580,"column":27}},"146":{"start":{"line":575,"column":28},"end":{"line":579,"column":31}},"147":{"start":{"line":576,"column":32},"end":{"line":576,"column":75}},"148":{"start":{"line":577,"column":32},"end":{"line":577,"column":43}},"149":{"start":{"line":578,"column":32},"end":{"line":578,"column":57}},"150":{"start":{"line":586,"column":16},"end":{"line":606,"column":25}},"151":{"start":{"line":587,"column":20},"end":{"line":589,"column":21}},"152":{"start":{"line":588,"column":24},"end":{"line":588,"column":62}},"153":{"start":{"line":590,"column":20},"end":{"line":591,"column":41}},"154":{"start":{"line":593,"column":20},"end":{"line":595,"column":21}},"155":{"start":{"line":594,"column":24},"end":{"line":594,"column":31}},"156":{"start":{"line":597,"column":20},"end":{"line":599,"column":21}},"157":{"start":{"line":598,"column":24},"end":{"line":598,"column":40}},"158":{"start":{"line":600,"column":20},"end":{"line":605,"column":23}},"159":{"start":{"line":601,"column":24},"end":{"line":601,"column":62}},"160":{"start":{"line":602,"column":24},"end":{"line":604,"column":25}},"161":{"start":{"line":603,"column":28},"end":{"line":603,"column":66}},"162":{"start":{"line":614,"column":16},"end":{"line":625,"column":17}},"163":{"start":{"line":615,"column":20},"end":{"line":617,"column":21}},"164":{"start":{"line":616,"column":24},"end":{"line":616,"column":37}},"165":{"start":{"line":619,"column":20},"end":{"line":620,"column":86}},"166":{"start":{"line":621,"column":20},"end":{"line":623,"column":21}},"167":{"start":{"line":622,"column":24},"end":{"line":622,"column":37}},"168":{"start":{"line":624,"column":20},"end":{"line":624,"column":213}},"169":{"start":{"line":629,"column":16},"end":{"line":635,"column":25}},"170":{"start":{"line":631,"column":20},"end":{"line":633,"column":21}},"171":{"start":{"line":632,"column":24},"end":{"line":632,"column":31}},"172":{"start":{"line":634,"column":20},"end":{"line":634,"column":58}},"173":{"start":{"line":638,"column":16},"end":{"line":647,"column":19}},"174":{"start":{"line":639,"column":20},"end":{"line":639,"column":61}},"175":{"start":{"line":640,"column":20},"end":{"line":646,"column":21}},"176":{"start":{"line":641,"column":24},"end":{"line":641,"column":86}},"177":{"start":{"line":642,"column":24},"end":{"line":645,"column":27}},"178":{"start":{"line":643,"column":28},"end":{"line":643,"column":62}},"179":{"start":{"line":644,"column":28},"end":{"line":644,"column":72}},"180":{"start":{"line":650,"column":16},"end":{"line":652,"column":18}},"181":{"start":{"line":651,"column":20},"end":{"line":651,"column":60}},"182":{"start":{"line":653,"column":16},"end":{"line":653,"column":64}},"183":{"start":{"line":655,"column":16},"end":{"line":655,"column":62}},"184":{"start":{"line":670,"column":16},"end":{"line":671,"column":32}},"185":{"start":{"line":673,"column":16},"end":{"line":676,"column":17}},"186":{"start":{"line":674,"column":20},"end":{"line":674,"column":39}},"187":{"start":{"line":675,"column":20},"end":{"line":675,"column":33}},"188":{"start":{"line":678,"column":16},"end":{"line":678,"column":50}},"189":{"start":{"line":679,"column":16},"end":{"line":679,"column":67}},"190":{"start":{"line":680,"column":16},"end":{"line":680,"column":48}},"191":{"start":{"line":681,"column":16},"end":{"line":681,"column":35}},"192":{"start":{"line":683,"column":16},"end":{"line":714,"column":17}},"193":{"start":{"line":684,"column":20},"end":{"line":684,"column":68}},"194":{"start":{"line":686,"column":20},"end":{"line":703,"column":23}},"195":{"start":{"line":687,"column":24},"end":{"line":687,"column":69}},"196":{"start":{"line":688,"column":24},"end":{"line":702,"column":27}},"197":{"start":{"line":690,"column":28},"end":{"line":699,"column":29}},"198":{"start":{"line":691,"column":32},"end":{"line":691,"column":59}},"199":{"start":{"line":692,"column":32},"end":{"line":698,"column":33}},"200":{"start":{"line":695,"column":36},"end":{"line":695,"column":73}},"201":{"start":{"line":696,"column":36},"end":{"line":696,"column":46}},"202":{"start":{"line":697,"column":36},"end":{"line":697,"column":42}},"203":{"start":{"line":700,"column":28},"end":{"line":700,"column":71}},"204":{"start":{"line":701,"column":28},"end":{"line":701,"column":39}},"205":{"start":{"line":704,"column":20},"end":{"line":710,"column":23}},"206":{"start":{"line":705,"column":24},"end":{"line":705,"column":61}},"207":{"start":{"line":706,"column":24},"end":{"line":709,"column":25}},"208":{"start":{"line":708,"column":28},"end":{"line":708,"column":50}},"209":{"start":{"line":712,"column":20},"end":{"line":712,"column":57}},"210":{"start":{"line":713,"column":20},"end":{"line":713,"column":68}},"211":{"start":{"line":728,"column":16},"end":{"line":728,"column":65}},"212":{"start":{"line":735,"column":4},"end":{"line":735,"column":16}},"213":{"start":{"line":738,"column":0},"end":{"line":738,"column":26}},"214":{"start":{"line":746,"column":0},"end":{"line":746,"column":27}},"215":{"start":{"line":751,"column":0},"end":{"line":751,"column":53}},"216":{"start":{"line":753,"column":0},"end":{"line":753,"column":48}},"217":{"start":{"line":754,"column":0},"end":{"line":756,"column":3}}},"branchMap":{"1":{"line":55,"type":"if","locations":[{"start":{"line":55,"column":8},"end":{"line":55,"column":8}},{"start":{"line":55,"column":8},"end":{"line":55,"column":8}}]},"2":{"line":130,"type":"if","locations":[{"start":{"line":130,"column":20},"end":{"line":130,"column":20}},{"start":{"line":130,"column":20},"end":{"line":130,"column":20}}]},"3":{"line":175,"type":"cond-expr","locations":[{"start":{"line":175,"column":62},"end":{"line":175,"column":95}},{"start":{"line":175,"column":98},"end":{"line":175,"column":133}}]},"4":{"line":225,"type":"binary-expr","locations":[{"start":{"line":225,"column":34},"end":{"line":225,"column":70}},{"start":{"line":225,"column":74},"end":{"line":225,"column":105}},{"start":{"line":225,"column":109},"end":{"line":225,"column":129}}]},"5":{"line":232,"type":"if","locations":[{"start":{"line":232,"column":16},"end":{"line":232,"column":16}},{"start":{"line":232,"column":16},"end":{"line":232,"column":16}}]},"6":{"line":237,"type":"if","locations":[{"start":{"line":237,"column":16},"end":{"line":237,"column":16}},{"start":{"line":237,"column":16},"end":{"line":237,"column":16}}]},"7":{"line":248,"type":"cond-expr","locations":[{"start":{"line":248,"column":43},"end":{"line":254,"column":18}},{"start":{"line":254,"column":21},"end":{"line":257,"column":18}}]},"8":{"line":262,"type":"binary-expr","locations":[{"start":{"line":262,"column":21},"end":{"line":262,"column":51}},{"start":{"line":262,"column":55},"end":{"line":262,"column":90}}]},"9":{"line":282,"type":"cond-expr","locations":[{"start":{"line":282,"column":56},"end":{"line":282,"column":117}},{"start":{"line":282,"column":120},"end":{"line":282,"column":125}}]},"10":{"line":301,"type":"if","locations":[{"start":{"line":301,"column":20},"end":{"line":301,"column":20}},{"start":{"line":301,"column":20},"end":{"line":301,"column":20}}]},"11":{"line":337,"type":"if","locations":[{"start":{"line":337,"column":16},"end":{"line":337,"column":16}},{"start":{"line":337,"column":16},"end":{"line":337,"column":16}}]},"12":{"line":369,"type":"if","locations":[{"start":{"line":369,"column":20},"end":{"line":369,"column":20}},{"start":{"line":369,"column":20},"end":{"line":369,"column":20}}]},"13":{"line":371,"type":"if","locations":[{"start":{"line":371,"column":24},"end":{"line":371,"column":24}},{"start":{"line":371,"column":24},"end":{"line":371,"column":24}}]},"14":{"line":371,"type":"binary-expr","locations":[{"start":{"line":371,"column":28},"end":{"line":371,"column":49}},{"start":{"line":371,"column":53},"end":{"line":371,"column":68}}]},"15":{"line":387,"type":"if","locations":[{"start":{"line":387,"column":24},"end":{"line":387,"column":24}},{"start":{"line":387,"column":24},"end":{"line":387,"column":24}}]},"16":{"line":418,"type":"if","locations":[{"start":{"line":418,"column":16},"end":{"line":418,"column":16}},{"start":{"line":418,"column":16},"end":{"line":418,"column":16}}]},"17":{"line":428,"type":"if","locations":[{"start":{"line":428,"column":20},"end":{"line":428,"column":20}},{"start":{"line":428,"column":20},"end":{"line":428,"column":20}}]},"18":{"line":428,"type":"binary-expr","locations":[{"start":{"line":428,"column":24},"end":{"line":428,"column":32}},{"start":{"line":428,"column":36},"end":{"line":428,"column":51}}]},"19":{"line":429,"type":"if","locations":[{"start":{"line":429,"column":24},"end":{"line":429,"column":24}},{"start":{"line":429,"column":24},"end":{"line":429,"column":24}}]},"20":{"line":437,"type":"if","locations":[{"start":{"line":437,"column":24},"end":{"line":437,"column":24}},{"start":{"line":437,"column":24},"end":{"line":437,"column":24}}]},"21":{"line":502,"type":"if","locations":[{"start":{"line":502,"column":16},"end":{"line":502,"column":16}},{"start":{"line":502,"column":16},"end":{"line":502,"column":16}}]},"22":{"line":502,"type":"binary-expr","locations":[{"start":{"line":502,"column":20},"end":{"line":502,"column":34}},{"start":{"line":502,"column":38},"end":{"line":502,"column":65}}]},"23":{"line":508,"type":"if","locations":[{"start":{"line":508,"column":16},"end":{"line":508,"column":16}},{"start":{"line":508,"column":16},"end":{"line":508,"column":16}}]},"24":{"line":513,"type":"if","locations":[{"start":{"line":513,"column":20},"end":{"line":513,"column":20}},{"start":{"line":513,"column":20},"end":{"line":513,"column":20}}]},"25":{"line":516,"type":"if","locations":[{"start":{"line":516,"column":20},"end":{"line":516,"column":20}},{"start":{"line":516,"column":20},"end":{"line":516,"column":20}}]},"26":{"line":516,"type":"binary-expr","locations":[{"start":{"line":516,"column":24},"end":{"line":516,"column":60}},{"start":{"line":516,"column":64},"end":{"line":516,"column":108}}]},"27":{"line":519,"type":"if","locations":[{"start":{"line":519,"column":24},"end":{"line":519,"column":24}},{"start":{"line":519,"column":24},"end":{"line":519,"column":24}}]},"28":{"line":542,"type":"if","locations":[{"start":{"line":542,"column":16},"end":{"line":542,"column":16}},{"start":{"line":542,"column":16},"end":{"line":542,"column":16}}]},"29":{"line":546,"type":"if","locations":[{"start":{"line":546,"column":16},"end":{"line":546,"column":16}},{"start":{"line":546,"column":16},"end":{"line":546,"column":16}}]},"30":{"line":573,"type":"if","locations":[{"start":{"line":573,"column":20},"end":{"line":573,"column":20}},{"start":{"line":573,"column":20},"end":{"line":573,"column":20}}]},"31":{"line":587,"type":"if","locations":[{"start":{"line":587,"column":20},"end":{"line":587,"column":20}},{"start":{"line":587,"column":20},"end":{"line":587,"column":20}}]},"32":{"line":593,"type":"if","locations":[{"start":{"line":593,"column":20},"end":{"line":593,"column":20}},{"start":{"line":593,"column":20},"end":{"line":593,"column":20}}]},"33":{"line":597,"type":"if","locations":[{"start":{"line":597,"column":20},"end":{"line":597,"column":20}},{"start":{"line":597,"column":20},"end":{"line":597,"column":20}}]},"34":{"line":602,"type":"if","locations":[{"start":{"line":602,"column":24},"end":{"line":602,"column":24}},{"start":{"line":602,"column":24},"end":{"line":602,"column":24}}]},"35":{"line":615,"type":"if","locations":[{"start":{"line":615,"column":20},"end":{"line":615,"column":20}},{"start":{"line":615,"column":20},"end":{"line":615,"column":20}}]},"36":{"line":621,"type":"if","locations":[{"start":{"line":621,"column":20},"end":{"line":621,"column":20}},{"start":{"line":621,"column":20},"end":{"line":621,"column":20}}]},"37":{"line":624,"type":"binary-expr","locations":[{"start":{"line":624,"column":29},"end":{"line":624,"column":48}},{"start":{"line":624,"column":52},"end":{"line":624,"column":69}},{"start":{"line":624,"column":73},"end":{"line":624,"column":90}},{"start":{"line":624,"column":94},"end":{"line":624,"column":211}}]},"38":{"line":624,"type":"binary-expr","locations":[{"start":{"line":624,"column":96},"end":{"line":624,"column":131}},{"start":{"line":624,"column":135},"end":{"line":624,"column":169}},{"start":{"line":624,"column":173},"end":{"line":624,"column":210}}]},"39":{"line":631,"type":"if","locations":[{"start":{"line":631,"column":20},"end":{"line":631,"column":20}},{"start":{"line":631,"column":20},"end":{"line":631,"column":20}}]},"40":{"line":640,"type":"if","locations":[{"start":{"line":640,"column":20},"end":{"line":640,"column":20}},{"start":{"line":640,"column":20},"end":{"line":640,"column":20}}]},"41":{"line":673,"type":"if","locations":[{"start":{"line":673,"column":16},"end":{"line":673,"column":16}},{"start":{"line":673,"column":16},"end":{"line":673,"column":16}}]},"42":{"line":683,"type":"if","locations":[{"start":{"line":683,"column":16},"end":{"line":683,"column":16}},{"start":{"line":683,"column":16},"end":{"line":683,"column":16}}]},"43":{"line":692,"type":"if","locations":[{"start":{"line":692,"column":32},"end":{"line":692,"column":32}},{"start":{"line":692,"column":32},"end":{"line":692,"column":32}}]},"44":{"line":706,"type":"if","locations":[{"start":{"line":706,"column":24},"end":{"line":706,"column":24}},{"start":{"line":706,"column":24},"end":{"line":706,"column":24}}]}},"code":["\"use strict\";","","var _core = require(\"6to5-runtime/core-js\");","","/*global Form, HTMLFormElement*/","","var Tooltip = to5Runtime.interopRequire(require(\"Tooltip\"));","","var fetch = to5Runtime.interopRequire(require(\"fetch\"));","","var Event = to5Runtime.interopRequire(require(\"util/Event\"));","","var ERROR_CLASS_NAME = exports.ERROR_CLASS_NAME = \"form-error\";","var INPUT_ERROR_CLASS = exports.INPUT_ERROR_CLASS = \"invalid\";","var LOADING_CLASS = exports.LOADING_CLASS = \"loading\";","var ARIA_INVALID = exports.ARIA_INVALID = \"aria-invalid\";","var REMOTE = exports.REMOTE = \"data-remote\";","var REMOTE_ACTION = exports.REMOTE_ACTION = \"data-remote-action\";","var ATTR_DISABLE_INLINE = exports.ATTR_DISABLE_INLINE = \"data-disable-inline-validation\";","","","/**"," * Triggered when form is fully initilized and handlers are binded"," * @type {string}"," */","var EVENT_FORM_READY = exports.EVENT_FORM_READY = \"flexcss.form.ready\";","/**"," * Fires when a form is submitted, cancelable"," * @type {string}"," */","var EVENT_FORM_SUBMIT = exports.EVENT_FORM_SUBMIT = \"flexcss.form.submit\";","/**"," * Fired directly after the form has been submitted via ajax"," * @type {string}"," */","var EVENT_FORM_AFTER_AJAX_SUBMIT = exports.EVENT_FORM_AFTER_AJAX_SUBMIT = \"flexcss.form.afterAjaxSubmit\";","/**"," * Fired when ajax events did complete"," * @type {string}"," */","var EVENT_FORM_AJAX_COMPLETED = exports.EVENT_FORM_AJAX_COMPLETED = \"flexcss.form.ajaxCompleted\";","","/**"," * A HTML5 Form Validation replacement"," */","","var Form = (function () {","    /**","     * @param {HTMLElement} form","     * @param [options] optional options","     */","    function Form(form, options) {","        to5Runtime.classCallCheck(this, Form);","","        if (!(form instanceof HTMLFormElement)) {","            throw \"argument {0} form needs to be an form element\";","        }","","        /**","         * The Form","         * @type {HTMLElement}","         */","        this.form = form;","","        /**","         * @type {Tooltip}","         */","        this.tooltips = null;","","        /**","         * @type {Future}","         */","        this.currentValidationFuture = new _core.Promise(function () {});","","        /**","         * Default options","         * @type {Object}","         */","        this.options = {","            // if true creates tooltips above element, uses FlexCss Tooltips","            createTooltips: true,","            // if true appends error message after input element","            appendError: false,","            // type of ajax submit","            ajaxSubmitType: \"POST\",","            // json content type if ajax method is set to json","            ajaxJsonContentType: \"application/json; charset=utf-8\",","            // allow inline validation","            inlineValidation: true","        };","","        // overwrite default options","        _core.Object.assign(this.options, options);","","        // set form class as widget","        // Forms are very different to classical widgets,","        // we will not use our base widget class for this but just self","        form.hfWidgetInstance = this;","","        /**","         * A List of Validators","         * @type {Object}","         * @private","         */","        this._validators = Form.globalValidators;","","        /**","         * @type {Function}","         * @private","         */","        this._remoteValidationFunction = null;","","        this.initFormValidation();","    }","","    to5Runtime.prototypeProperties(Form, {","        _createArrayFromInvalidFieldList: {","","            /**","             * Creates an array from a node list with invalid items","             * On Firefox also Fieldset's seems to be invalid, remove them","             * @param list","             * @returns {Array}","             * @private","             */","            value: function _createArrayFromInvalidFieldList(list) {","                var arr = [];","                for (var i = 0; i < list.length; ++i) {","                    var n = list[i];","                    if (!(n instanceof HTMLFieldSetElement)) {","                        arr.push(n);","                    }","                }","                return arr;","            },","            writable: true,","            configurable: true","        },","        _formatErrorTooltip: {","","","            /**","             * Formats the error content for the tooltip","             * @param {String} error","             * @returns {String}","             * @private","             */","            value: function _formatErrorTooltip(error) {","                return \"<i class=\\\"icon-attention\\\"></i> \" + error;","            },","            writable: true,","            configurable: true","        },","        registerErrorMessageHandler: {","","","            /**","             * Registers a global event Handler","             * @param errorFunc","             */","            value: function registerErrorMessageHandler(errorFunc) {","                Form.globalErrorMessageHandler = errorFunc;","            },","            writable: true,","            configurable: true","        },","        init: {","","            /**","             * Initialize forms for a specific selector","             * @param {String} selector","             * @param {Object} options","             */","            value: function init(selector, options) {","                var forms = selector instanceof HTMLElement ? selector.querySelectorAll(\"form\") : document.querySelectorAll(selector);","                for (var i = 0; i < forms.length; i++) {","                    new Form(forms[i], options);","                }","            },","            writable: true,","            configurable: true","        },","        registerValidator: {","","","            /**","             * Registers a global validator that is usable on all form instances","             * @param {String} name","             * @param {Function} validator","             * @returns {Function}","             */","            value: function registerValidator(name, validator) {","                Form.globalValidators[name] = validator;","                return Form;","            },","            writable: true,","            configurable: true","        },","        registerGlobalRemoteValidationFunction: {","","            /**","             * Registers a global function that is called when a form should validate the response of a server","             * @param {Function} func","             * @returns {Form}","             */","            value: function registerGlobalRemoteValidationFunction(func) {","                Form.globalRemoteValidationFunction = func;","                return Form;","            },","            writable: true,","            configurable: true","        }","    }, {","        _submitFunction: {","","            /**","             * Submits this form, either via ajax or just classical (default)","             * @param {HTMLFormElement} thisForm","             * @param {Event} e","             * @private","             * @returns {Promise|boolean}","             */","            value: function _submitFunction(thisForm, e) {","                var shouldUseAjax = thisForm.getAttribute(REMOTE),","                    ajaxPostUrl = thisForm.getAttribute(REMOTE_ACTION) || thisForm.getAttribute(\"action\") || window.location.href,","                    useJson = \"json\" === shouldUseAjax,","                    self = this;","","                var ev = Event.dispatch(thisForm, EVENT_FORM_SUBMIT).withOriginal(e).fire();","","                // abort execution is event was prevented","                if (ev.isDefaultPrevented()) {","                    thisForm.classList.remove(LOADING_CLASS);","                    return false;","                }","","                if (null === shouldUseAjax) {","                    // submit","                    return thisForm.submit();","                }","","                thisForm.classList.add(LOADING_CLASS);","","                // prevent form from submit normally","                e.preventDefault();","","                // support either JSON request payload or normal payload submission","                var serverCall = useJson ? fetch(ajaxPostUrl, {","                    headers: {","                        \"Content-Type\": this.options.ajaxJsonContentType","                    },","                    method: this.options.ajaxSubmitType,","                    body: JSON.stringify()","                }) : fetch(ajaxPostUrl, {","                    method: this.options.ajaxSubmitType,","                    body: new FormData(thisForm)","                });","","                Event.dispatch(thisForm, EVENT_FORM_AFTER_AJAX_SUBMIT).withOriginal(e).fire();","","                return serverCall.then(function (r) {","                    (self._remoteValidationFunction || Form.globalRemoteValidationFunction).apply(self, [r]);","","                    Event.dispatch(thisForm, EVENT_FORM_AJAX_COMPLETED).withOriginal(e).withDetail(r).fire();","                    // always remove error class","                    thisForm.classList.remove(LOADING_CLASS);","                });","            },","            writable: true,","            configurable: true","        },","        _setupErrorMessages: {","","            /**","             * @param {HTMLElement} field","             * @param {ValidityState} validity","             * @returns {*}","             * @private","             */","","            value: function _setupErrorMessages(field, validity) {","                return Form.globalErrorMessageHandler ? Form.globalErrorMessageHandler.apply(this, [field, validity]) : false;","            },","            writable: true,","            configurable: true","        },","        _removeElementErrors: {","","            /**","             * @param {HTMLElement} thisParent","             * @private","             */","            value: function _removeElementErrors(thisParent) {","                var errors = thisParent.querySelectorAll(\".\" + ERROR_CLASS_NAME),","                    inputsWithErrorClasses = thisParent.querySelectorAll(\".\" + INPUT_ERROR_CLASS);","                for (var elementErrorIndex = 0; elementErrorIndex < errors.length; elementErrorIndex++) {","                    errors[elementErrorIndex].parentNode.removeChild(errors[elementErrorIndex]);","                }","                for (var inputErrorIndex = 0; inputErrorIndex < inputsWithErrorClasses.length; inputErrorIndex++) {","                    inputsWithErrorClasses[inputErrorIndex].classList.remove(INPUT_ERROR_CLASS);","                    if (this.tooltips) {","                        this.tooltips.removeTooltip(inputsWithErrorClasses[inputErrorIndex]);","                    }","                }","            },","            writable: true,","            configurable: true","        },","        registerValidator: {","","","            /**","             * Registers a custom validator","             * @param {String} name","             * @param {Function} validator a validation function should always return either a Future(true) or Future(false)","             * even when the field has been invalidated with `setCustomValidity`, because of different browser `bugs`","             * we can't rely on that","             * @returns {Form}","             */","            value: function registerValidator(name, validator) {","                this._validators[name] = validator;","                return this;","            },","            writable: true,","            configurable: true","        },","        _runValidation: {","","            /**","             * Runs async validation","             * @param {String} validationRef","             * @param {HTMLElement} field","             * @returns {Promise}","             * @private","             */","            value: function _runValidation(validationRef, field) {","                if (!this._validators[validationRef]) {","                    throw \"Could not found validator: \" + validationRef;","                }","                var cl = field.classList,","                    future = this._validators[validationRef].apply(this, [field, this.form]);","                cl.add(LOADING_CLASS);","                future.then(function () {","                    cl.remove(LOADING_CLASS);","                });","                return future;","            },","            writable: true,","            configurable: true","        },","        _customValidationsForElements: {","","","            /**","             * Run custom validations for elements, validations are done async do support XHR Requests or other stuff","             *","             * @param {Array|NodeList} fields","             * @returns {Promise} contains either true if validations passed or false if something went wrong","             * @private","             */","            value: function _customValidationsForElements(fields) {","                var futures = [],","                    fieldsLength = fields.length,","                    checkedFields = [];","                for (var iVal = 0; iVal < fieldsLength; iVal++) {","                    var field = fields[iVal],","                        validationRef = field.getAttribute(\"data-validate\"),","                        validity = field.validity;","                    if (this._validators[validationRef]) {","                        // use local validation first and then continue with custom validations","                        if (!validity.customError && !validity.valid) {","                            continue;","                        }","                        checkedFields.push(field);","                        futures.push(this._runValidation(validationRef, field));","                    }","                }","                return _core.Promise.all(futures).then(function () {","                    var allFutures = arguments,","                        l = allFutures.length;","                    var result = {","                        checkedFields: checkedFields,","                        foundAnyError: false","                    };","","                    for (var fI = 0; fI < l; fI++) {","                        if (!allFutures[fI]) {","                            result.foundAnyError = true;","                        }","                    }","                    return result;","                });","            },","            writable: true,","            configurable: true","        },","        removeErrors: {","","            /**","             * Remove all errors for this form","             * @returns {Form}","             */","            value: function removeErrors() {","                this._removeElementErrors(this.form);","                return this;","            },","            writable: true,","            configurable: true","        },","        prepareErrors: {","","            /**","             * Will handle errors for given fields","             * @param {Array|NodeList} fields","             * @param {Boolean} removeAllErrors","             */","            value: function prepareErrors(fields, removeAllErrors) {","                if (removeAllErrors) {","                    this._removeElementErrors(this.form);","                }","                // We save all validations in an extra property because we need to reset the validity due some","                // implementation errors in other browsers then chrome","                for (var i = 0; i < fields.length; i++) {","                    var field = fields[i],","                        parent = field.parentNode,","                        validity = field.validity;","                    field.flexFormsSavedValidity = JSON.parse(JSON.stringify(validity));","                    if (validity && !validity.valid) {","                        if (!removeAllErrors) {","                            // Remove current errors:","                            this._removeElementErrors(parent);","                        }","                        // setup custom error messages:","                        this._setupErrorMessages(field, validity);","                        field.classList.add(\"invalid\");","                        field.setAttribute(ARIA_INVALID, \"true\");","                        if (this.options.appendError) {","                            parent.insertAdjacentHTML(\"beforeend\", \"<div class=\\\"\" + ERROR_CLASS_NAME + \"\\\">\" + field.validationMessage + \"</div>\");","                        }","                        field.flexFormsSavedValidationMessage = field.validationMessage;","                    } else {","                        field.classList.remove(\"invalid\");","                        field.setAttribute(ARIA_INVALID, \"false\");","","                        this._removeElementErrors(parent);","                    }","                    // FIXME: We have to reset the custom validity here to allow native validations work again","                    field.setCustomValidity(\"\");","                }","            },","            writable: true,","            configurable: true","        },","        validateCustomFields: {","","            /**","             * Validates all custom fields","             * @returns {Promise}","             */","            value: function validateCustomFields() {","                return this._customValidationsForElements(this.form.querySelectorAll(\"[data-validate]\"));","            },","            writable: true,","            configurable: true","        },","        getForm: {","","","            /**","             * This form","             * @returns {HTMLElement}","             */","            value: function getForm() {","                return this.form;","            },","            writable: true,","            configurable: true","        },","        registerRemoteValidation: {","","            /**","             * Registers a function that handles remote validation","             * @param {Function} func","             * @returns {Form}","             */","            value: function registerRemoteValidation(func) {","                this._remoteValidationFunction = func;","                return this;","            },","            writable: true,","            configurable: true","        },","        showAndOrCreateTooltip: {","","            /**","             * Creates a tooltip at given element, will only create a new instance if not created","             * @param {HTMLElement} target","             * @param {Boolean} [remove]","             */","            value: function showAndOrCreateTooltip(target, remove) {","                var self = this;","                if (!this.tooltips && this.options.createTooltips) {","                    this.tooltips = new Tooltip(this.getForm(), {","                        containerClass: \"error-tooltip\"","                    });","                }","","                if (!this.options.createTooltips) {","                    return;","                }","","                setTimeout(function () {","                    if (!target.flexFormsSavedValidity) {","                        return;","                    }","                    if (!target.flexFormsSavedValidity.valid && target.classList.contains(INPUT_ERROR_CLASS)) {","                        self.tooltips.createTooltip(target, Form._formatErrorTooltip(target.flexFormsSavedValidationMessage), false);","                    } else {","                        if (remove) {","                            self.tooltips.removeTooltip(target);","                        }","                    }","                }, 0);","            },","            writable: true,","            configurable: true","        },","        _checkIsInvalid: {","","            /**","             * Handles invalid event of a form","             * @param {Event} e","             * @returns {Promise|boolean}","             * @private","             */","            value: function _checkIsInvalid(e) {","                e.preventDefault();","                var invalidFields = this.getForm().querySelectorAll(\":invalid\"),","                    self = this;","                var arr = Form._createArrayFromInvalidFieldList(invalidFields);","                // Prevent fire this N times:","                if (arr.indexOf(e.target) > 0) {","                    return false;","                }","                // focus the first field:","                if (arr.length > 0) {","                    setTimeout(function () {","                        arr[0].focus();","                        self.showAndOrCreateTooltip(arr[0]);","                    }, 0);","                }","","                var validation = self.validateCustomFields();","                this.prepareErrors(arr, true);","                return validation;","            },","            writable: true,","            configurable: true","        },","        initFormValidation: {","","","            /**","             * Initializes validation for a given form, registers event handlers","             */","            value: function initFormValidation() {","                // Suppress the default bubbles","                var form = this.getForm(),","                    invalidFormFired = false,","                    self = this;","                form.addEventListener(\"invalid\", function (e) {","                    var result = self._checkIsInvalid(e);","                    if (result) {","                        this.currentValidationFuture = new _core.Promise(function (resolve) {","                            result.then(function (r) {","                                self.prepareErrors(r.checkedFields, false);","                                resolve(r);","                                invalidFormFired = false;","                            });","                        });","                    }","                }, true);","","                // handle focus out for text elements","                // Will show an error if field was invalid the first time","                form.addEventListener(\"blur\", function (e) {","                    if (self.tooltips) {","                        self.tooltips.removeTooltip(e.target);","                    }","                    var target = e.target,","                        hasError = false;","","                    if (!_checkIsValidBlurFocusElement(target)) {","                        return;","                    }","","                    if (target.classList.contains(INPUT_ERROR_CLASS)) {","                        hasError = true;","                    }","                    self._customValidationsForElements([e.target]).then(function () {","                        self.prepareErrors([e.target], false);","                        if (!hasError) {","                            self.showAndOrCreateTooltip(e.target);","                        }","                    });","                }, true);","","                /**","                 * Validates if target is a valid input field to check blur and focus events","                 *","                 * @param {HTMLElement} target","                 * @returns {boolean}","                 */","                function _checkIsValidBlurFocusElement(target) {","                    if (!self.options.inlineValidation) {","                        return false;","                    }","","                    var attr = target.getAttribute(\"type\"),","                        maybeDisableOnBlur = target.hasAttribute(ATTR_DISABLE_INLINE);","                    if (maybeDisableOnBlur) {","                        return false;","                    }","                    return !(attr === \"checkbox\" || attr === \"option\" || attr === \"submit\" || !(target instanceof HTMLSelectElement || target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement));","                }","","                // handle focus on input elements","                // will show an error if field is invalid","                form.addEventListener(\"focus\", function (e) {","                    // do not track errors for checkbox and radios on focus:","                    if (!_checkIsValidBlurFocusElement(e.target)) {","                        return;","                    }","                    self.showAndOrCreateTooltip(e.target);","                }, true);","","                // Handle change for checkbox, radios and selects","                form.addEventListener(\"change\", function (e) {","                    var name = e.target.getAttribute(\"name\");","                    if (name) {","                        var inputs = form.querySelectorAll(\"[name=\\\"\" + name + \"\\\"]\");","                        self._customValidationsForElements(inputs).then(function () {","                            self.prepareErrors(inputs, false);","                            self.showAndOrCreateTooltip(e.target, true);","                        });","                    }","                });","","                // prevent default if form is invalid","                var submitListener = function (e) {","                    self._submitListener(e, submitListener);","                };","                form.addEventListener(\"submit\", submitListener);","","                Event.dispatchAndFire(form, EVENT_FORM_READY);","            },","            writable: true,","            configurable: true","        },","        _submitListener: {","","            /**","             * Listener that is executed on form submit","             * @param e","             * @param submitListener","             * @returns {boolean}","             * @private","             */","            value: function _submitListener(e, submitListener) {","                var form = this.getForm(),","                    self = this;","","                if (form.classList.contains(LOADING_CLASS)) {","                    e.preventDefault();","                    return false;","                }","","                form.classList.add(LOADING_CLASS);","                form.removeEventListener(\"submit\", submitListener);","                this._removeElementErrors(form);","                e.preventDefault();","                // reset:","                if (form.checkValidity()) {","                    form.addEventListener(\"submit\", submitListener);","                    // Custom validations did never pass","                    self.currentValidationFuture = new _core.Promise(function (resolve) {","                        var validation = self.validateCustomFields();","                        validation.then(function (r) {","                            // focus first invalid field:","                            for (var i = 0; i < r.checkedFields.length; i++) {","                                var f = r.checkedFields[i];","                                if (!f.validity.valid) {","                                    // Focus element and show tooltip, we explicitly showing tooltip here, because","                                    // element might have focus already","                                    self.showAndOrCreateTooltip(f, true);","                                    f.focus();","                                    break;","                                }","                            }","                            self.prepareErrors(r.checkedFields, false);","                            resolve(r);","                        });","                    });","                    self.currentValidationFuture.then(function (r) {","                        form.classList.remove(LOADING_CLASS);","                        if (!r.foundAnyError) {","                            // Handle submitting the form to server:","                            self._handleSubmit(e);","                        }","                    });","                } else {","                    form.classList.remove(LOADING_CLASS);","                    form.addEventListener(\"submit\", submitListener);","                }","            },","            writable: true,","            configurable: true","        },","        _handleSubmit: {","","","            /**","             * Handles submitting, optionally allows to stop submitting","             * @param e","             * @private","             */","            value: function _handleSubmit(e) {","                this._submitFunction.apply(this, [this.form, e]);","            },","            writable: true,","            configurable: true","        }","    });","","    return Form;","})();","","exports[\"default\"] = Form;","","","","/**"," * Global validators"," * @type {Array}"," */","Form.globalValidators = [];","","/**"," * Global Remote validation function"," */","Form.globalRemoteValidationFunction = function () {};","","Form.globalErrorMessageHandler = function () {};","Object.defineProperty(exports, \"__esModule\", {","    value: true","});","","/*Form.serializeFormJSON($(thisForm))*/"]};
	}
	__cov_ne9d3bYaB94HPejJeu9yEA = __cov_ne9d3bYaB94HPejJeu9yEA['/Users/bowlingx/Projekte/flexcss/src/main/Form.js'];
	__cov_ne9d3bYaB94HPejJeu9yEA.s['1']++;var _core=__webpack_require__(5);__cov_ne9d3bYaB94HPejJeu9yEA.s['2']++;var Tooltip=to5Runtime.interopRequire(__webpack_require__(2));__cov_ne9d3bYaB94HPejJeu9yEA.s['3']++;var fetch=to5Runtime.interopRequire(__webpack_require__(6));__cov_ne9d3bYaB94HPejJeu9yEA.s['4']++;var Event=to5Runtime.interopRequire(__webpack_require__(4));__cov_ne9d3bYaB94HPejJeu9yEA.s['5']++;var ERROR_CLASS_NAME=exports.ERROR_CLASS_NAME='form-error';__cov_ne9d3bYaB94HPejJeu9yEA.s['6']++;var INPUT_ERROR_CLASS=exports.INPUT_ERROR_CLASS='invalid';__cov_ne9d3bYaB94HPejJeu9yEA.s['7']++;var LOADING_CLASS=exports.LOADING_CLASS='loading';__cov_ne9d3bYaB94HPejJeu9yEA.s['8']++;var ARIA_INVALID=exports.ARIA_INVALID='aria-invalid';__cov_ne9d3bYaB94HPejJeu9yEA.s['9']++;var REMOTE=exports.REMOTE='data-remote';__cov_ne9d3bYaB94HPejJeu9yEA.s['10']++;var REMOTE_ACTION=exports.REMOTE_ACTION='data-remote-action';__cov_ne9d3bYaB94HPejJeu9yEA.s['11']++;var ATTR_DISABLE_INLINE=exports.ATTR_DISABLE_INLINE='data-disable-inline-validation';__cov_ne9d3bYaB94HPejJeu9yEA.s['12']++;var EVENT_FORM_READY=exports.EVENT_FORM_READY='flexcss.form.ready';__cov_ne9d3bYaB94HPejJeu9yEA.s['13']++;var EVENT_FORM_SUBMIT=exports.EVENT_FORM_SUBMIT='flexcss.form.submit';__cov_ne9d3bYaB94HPejJeu9yEA.s['14']++;var EVENT_FORM_AFTER_AJAX_SUBMIT=exports.EVENT_FORM_AFTER_AJAX_SUBMIT='flexcss.form.afterAjaxSubmit';__cov_ne9d3bYaB94HPejJeu9yEA.s['15']++;var EVENT_FORM_AJAX_COMPLETED=exports.EVENT_FORM_AJAX_COMPLETED='flexcss.form.ajaxCompleted';__cov_ne9d3bYaB94HPejJeu9yEA.s['16']++;var Form=function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['1']++;function Form(form,options){__cov_ne9d3bYaB94HPejJeu9yEA.f['2']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['18']++;to5Runtime.classCallCheck(this,Form);__cov_ne9d3bYaB94HPejJeu9yEA.s['19']++;if(!(form instanceof HTMLFormElement)){__cov_ne9d3bYaB94HPejJeu9yEA.b['1'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['20']++;throw'argument {0} form needs to be an form element';}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['1'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['21']++;this.form=form;__cov_ne9d3bYaB94HPejJeu9yEA.s['22']++;this.tooltips=null;__cov_ne9d3bYaB94HPejJeu9yEA.s['23']++;this.currentValidationFuture=new _core.Promise(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['3']++;});__cov_ne9d3bYaB94HPejJeu9yEA.s['24']++;this.options={createTooltips:true,appendError:false,ajaxSubmitType:'POST',ajaxJsonContentType:'application/json; charset=utf-8',inlineValidation:true};__cov_ne9d3bYaB94HPejJeu9yEA.s['25']++;_core.Object.assign(this.options,options);__cov_ne9d3bYaB94HPejJeu9yEA.s['26']++;form.hfWidgetInstance=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['27']++;this._validators=Form.globalValidators;__cov_ne9d3bYaB94HPejJeu9yEA.s['28']++;this._remoteValidationFunction=null;__cov_ne9d3bYaB94HPejJeu9yEA.s['29']++;this.initFormValidation();}__cov_ne9d3bYaB94HPejJeu9yEA.s['30']++;to5Runtime.prototypeProperties(Form,{_createArrayFromInvalidFieldList:{value:function _createArrayFromInvalidFieldList(list){__cov_ne9d3bYaB94HPejJeu9yEA.f['4']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['31']++;var arr=[];__cov_ne9d3bYaB94HPejJeu9yEA.s['32']++;for(var i=0;i<list.length;++i){__cov_ne9d3bYaB94HPejJeu9yEA.s['33']++;var n=list[i];__cov_ne9d3bYaB94HPejJeu9yEA.s['34']++;if(!(n instanceof HTMLFieldSetElement)){__cov_ne9d3bYaB94HPejJeu9yEA.b['2'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['35']++;arr.push(n);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['2'][1]++;}}__cov_ne9d3bYaB94HPejJeu9yEA.s['36']++;return arr;},writable:true,configurable:true},_formatErrorTooltip:{value:function _formatErrorTooltip(error){__cov_ne9d3bYaB94HPejJeu9yEA.f['5']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['37']++;return'<i class="icon-attention"></i> '+error;},writable:true,configurable:true},registerErrorMessageHandler:{value:function registerErrorMessageHandler(errorFunc){__cov_ne9d3bYaB94HPejJeu9yEA.f['6']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['38']++;Form.globalErrorMessageHandler=errorFunc;},writable:true,configurable:true},init:{value:function init(selector,options){__cov_ne9d3bYaB94HPejJeu9yEA.f['7']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['39']++;var forms=selector instanceof HTMLElement?(__cov_ne9d3bYaB94HPejJeu9yEA.b['3'][0]++,selector.querySelectorAll('form')):(__cov_ne9d3bYaB94HPejJeu9yEA.b['3'][1]++,document.querySelectorAll(selector));__cov_ne9d3bYaB94HPejJeu9yEA.s['40']++;for(var i=0;i<forms.length;i++){__cov_ne9d3bYaB94HPejJeu9yEA.s['41']++;new Form(forms[i],options);}},writable:true,configurable:true},registerValidator:{value:function registerValidator(name,validator){__cov_ne9d3bYaB94HPejJeu9yEA.f['8']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['42']++;Form.globalValidators[name]=validator;__cov_ne9d3bYaB94HPejJeu9yEA.s['43']++;return Form;},writable:true,configurable:true},registerGlobalRemoteValidationFunction:{value:function registerGlobalRemoteValidationFunction(func){__cov_ne9d3bYaB94HPejJeu9yEA.f['9']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['44']++;Form.globalRemoteValidationFunction=func;__cov_ne9d3bYaB94HPejJeu9yEA.s['45']++;return Form;},writable:true,configurable:true}},{_submitFunction:{value:function _submitFunction(thisForm,e){__cov_ne9d3bYaB94HPejJeu9yEA.f['10']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['46']++;var shouldUseAjax=thisForm.getAttribute(REMOTE),ajaxPostUrl=(__cov_ne9d3bYaB94HPejJeu9yEA.b['4'][0]++,thisForm.getAttribute(REMOTE_ACTION))||(__cov_ne9d3bYaB94HPejJeu9yEA.b['4'][1]++,thisForm.getAttribute('action'))||(__cov_ne9d3bYaB94HPejJeu9yEA.b['4'][2]++,window.location.href),useJson='json'===shouldUseAjax,self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['47']++;var ev=Event.dispatch(thisForm,EVENT_FORM_SUBMIT).withOriginal(e).fire();__cov_ne9d3bYaB94HPejJeu9yEA.s['48']++;if(ev.isDefaultPrevented()){__cov_ne9d3bYaB94HPejJeu9yEA.b['5'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['49']++;thisForm.classList.remove(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['50']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['5'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['51']++;if(null===shouldUseAjax){__cov_ne9d3bYaB94HPejJeu9yEA.b['6'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['52']++;return thisForm.submit();}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['6'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['53']++;thisForm.classList.add(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['54']++;e.preventDefault();__cov_ne9d3bYaB94HPejJeu9yEA.s['55']++;var serverCall=useJson?(__cov_ne9d3bYaB94HPejJeu9yEA.b['7'][0]++,fetch(ajaxPostUrl,{headers:{'Content-Type':this.options.ajaxJsonContentType},method:this.options.ajaxSubmitType,body:JSON.stringify()})):(__cov_ne9d3bYaB94HPejJeu9yEA.b['7'][1]++,fetch(ajaxPostUrl,{method:this.options.ajaxSubmitType,body:new FormData(thisForm)}));__cov_ne9d3bYaB94HPejJeu9yEA.s['56']++;Event.dispatch(thisForm,EVENT_FORM_AFTER_AJAX_SUBMIT).withOriginal(e).fire();__cov_ne9d3bYaB94HPejJeu9yEA.s['57']++;return serverCall.then(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['11']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['58']++;((__cov_ne9d3bYaB94HPejJeu9yEA.b['8'][0]++,self._remoteValidationFunction)||(__cov_ne9d3bYaB94HPejJeu9yEA.b['8'][1]++,Form.globalRemoteValidationFunction)).apply(self,[r]);__cov_ne9d3bYaB94HPejJeu9yEA.s['59']++;Event.dispatch(thisForm,EVENT_FORM_AJAX_COMPLETED).withOriginal(e).withDetail(r).fire();__cov_ne9d3bYaB94HPejJeu9yEA.s['60']++;thisForm.classList.remove(LOADING_CLASS);});},writable:true,configurable:true},_setupErrorMessages:{value:function _setupErrorMessages(field,validity){__cov_ne9d3bYaB94HPejJeu9yEA.f['12']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['61']++;return Form.globalErrorMessageHandler?(__cov_ne9d3bYaB94HPejJeu9yEA.b['9'][0]++,Form.globalErrorMessageHandler.apply(this,[field,validity])):(__cov_ne9d3bYaB94HPejJeu9yEA.b['9'][1]++,false);},writable:true,configurable:true},_removeElementErrors:{value:function _removeElementErrors(thisParent){__cov_ne9d3bYaB94HPejJeu9yEA.f['13']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['62']++;var errors=thisParent.querySelectorAll('.'+ERROR_CLASS_NAME),inputsWithErrorClasses=thisParent.querySelectorAll('.'+INPUT_ERROR_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['63']++;for(var elementErrorIndex=0;elementErrorIndex<errors.length;elementErrorIndex++){__cov_ne9d3bYaB94HPejJeu9yEA.s['64']++;errors[elementErrorIndex].parentNode.removeChild(errors[elementErrorIndex]);}__cov_ne9d3bYaB94HPejJeu9yEA.s['65']++;for(var inputErrorIndex=0;inputErrorIndex<inputsWithErrorClasses.length;inputErrorIndex++){__cov_ne9d3bYaB94HPejJeu9yEA.s['66']++;inputsWithErrorClasses[inputErrorIndex].classList.remove(INPUT_ERROR_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['67']++;if(this.tooltips){__cov_ne9d3bYaB94HPejJeu9yEA.b['10'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['68']++;this.tooltips.removeTooltip(inputsWithErrorClasses[inputErrorIndex]);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['10'][1]++;}}},writable:true,configurable:true},registerValidator:{value:function registerValidator(name,validator){__cov_ne9d3bYaB94HPejJeu9yEA.f['14']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['69']++;this._validators[name]=validator;__cov_ne9d3bYaB94HPejJeu9yEA.s['70']++;return this;},writable:true,configurable:true},_runValidation:{value:function _runValidation(validationRef,field){__cov_ne9d3bYaB94HPejJeu9yEA.f['15']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['71']++;if(!this._validators[validationRef]){__cov_ne9d3bYaB94HPejJeu9yEA.b['11'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['72']++;throw'Could not found validator: '+validationRef;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['11'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['73']++;var cl=field.classList,future=this._validators[validationRef].apply(this,[field,this.form]);__cov_ne9d3bYaB94HPejJeu9yEA.s['74']++;cl.add(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['75']++;future.then(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['16']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['76']++;cl.remove(LOADING_CLASS);});__cov_ne9d3bYaB94HPejJeu9yEA.s['77']++;return future;},writable:true,configurable:true},_customValidationsForElements:{value:function _customValidationsForElements(fields){__cov_ne9d3bYaB94HPejJeu9yEA.f['17']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['78']++;var futures=[],fieldsLength=fields.length,checkedFields=[];__cov_ne9d3bYaB94HPejJeu9yEA.s['79']++;for(var iVal=0;iVal<fieldsLength;iVal++){__cov_ne9d3bYaB94HPejJeu9yEA.s['80']++;var field=fields[iVal],validationRef=field.getAttribute('data-validate'),validity=field.validity;__cov_ne9d3bYaB94HPejJeu9yEA.s['81']++;if(this._validators[validationRef]){__cov_ne9d3bYaB94HPejJeu9yEA.b['12'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['82']++;if((__cov_ne9d3bYaB94HPejJeu9yEA.b['14'][0]++,!validity.customError)&&(__cov_ne9d3bYaB94HPejJeu9yEA.b['14'][1]++,!validity.valid)){__cov_ne9d3bYaB94HPejJeu9yEA.b['13'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['83']++;continue;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['13'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['84']++;checkedFields.push(field);__cov_ne9d3bYaB94HPejJeu9yEA.s['85']++;futures.push(this._runValidation(validationRef,field));}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['12'][1]++;}}__cov_ne9d3bYaB94HPejJeu9yEA.s['86']++;return _core.Promise.all(futures).then(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['18']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['87']++;var allFutures=arguments,l=allFutures.length;__cov_ne9d3bYaB94HPejJeu9yEA.s['88']++;var result={checkedFields:checkedFields,foundAnyError:false};__cov_ne9d3bYaB94HPejJeu9yEA.s['89']++;for(var fI=0;fI<l;fI++){__cov_ne9d3bYaB94HPejJeu9yEA.s['90']++;if(!allFutures[fI]){__cov_ne9d3bYaB94HPejJeu9yEA.b['15'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['91']++;result.foundAnyError=true;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['15'][1]++;}}__cov_ne9d3bYaB94HPejJeu9yEA.s['92']++;return result;});},writable:true,configurable:true},removeErrors:{value:function removeErrors(){__cov_ne9d3bYaB94HPejJeu9yEA.f['19']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['93']++;this._removeElementErrors(this.form);__cov_ne9d3bYaB94HPejJeu9yEA.s['94']++;return this;},writable:true,configurable:true},prepareErrors:{value:function prepareErrors(fields,removeAllErrors){__cov_ne9d3bYaB94HPejJeu9yEA.f['20']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['95']++;if(removeAllErrors){__cov_ne9d3bYaB94HPejJeu9yEA.b['16'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['96']++;this._removeElementErrors(this.form);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['16'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['97']++;for(var i=0;i<fields.length;i++){__cov_ne9d3bYaB94HPejJeu9yEA.s['98']++;var field=fields[i],parent=field.parentNode,validity=field.validity;__cov_ne9d3bYaB94HPejJeu9yEA.s['99']++;field.flexFormsSavedValidity=JSON.parse(JSON.stringify(validity));__cov_ne9d3bYaB94HPejJeu9yEA.s['100']++;if((__cov_ne9d3bYaB94HPejJeu9yEA.b['18'][0]++,validity)&&(__cov_ne9d3bYaB94HPejJeu9yEA.b['18'][1]++,!validity.valid)){__cov_ne9d3bYaB94HPejJeu9yEA.b['17'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['101']++;if(!removeAllErrors){__cov_ne9d3bYaB94HPejJeu9yEA.b['19'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['102']++;this._removeElementErrors(parent);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['19'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['103']++;this._setupErrorMessages(field,validity);__cov_ne9d3bYaB94HPejJeu9yEA.s['104']++;field.classList.add('invalid');__cov_ne9d3bYaB94HPejJeu9yEA.s['105']++;field.setAttribute(ARIA_INVALID,'true');__cov_ne9d3bYaB94HPejJeu9yEA.s['106']++;if(this.options.appendError){__cov_ne9d3bYaB94HPejJeu9yEA.b['20'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['107']++;parent.insertAdjacentHTML('beforeend','<div class="'+ERROR_CLASS_NAME+'">'+field.validationMessage+'</div>');}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['20'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['108']++;field.flexFormsSavedValidationMessage=field.validationMessage;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['17'][1]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['109']++;field.classList.remove('invalid');__cov_ne9d3bYaB94HPejJeu9yEA.s['110']++;field.setAttribute(ARIA_INVALID,'false');__cov_ne9d3bYaB94HPejJeu9yEA.s['111']++;this._removeElementErrors(parent);}__cov_ne9d3bYaB94HPejJeu9yEA.s['112']++;field.setCustomValidity('');}},writable:true,configurable:true},validateCustomFields:{value:function validateCustomFields(){__cov_ne9d3bYaB94HPejJeu9yEA.f['21']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['113']++;return this._customValidationsForElements(this.form.querySelectorAll('[data-validate]'));},writable:true,configurable:true},getForm:{value:function getForm(){__cov_ne9d3bYaB94HPejJeu9yEA.f['22']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['114']++;return this.form;},writable:true,configurable:true},registerRemoteValidation:{value:function registerRemoteValidation(func){__cov_ne9d3bYaB94HPejJeu9yEA.f['23']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['115']++;this._remoteValidationFunction=func;__cov_ne9d3bYaB94HPejJeu9yEA.s['116']++;return this;},writable:true,configurable:true},showAndOrCreateTooltip:{value:function showAndOrCreateTooltip(target,remove){__cov_ne9d3bYaB94HPejJeu9yEA.f['24']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['117']++;var self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['118']++;if((__cov_ne9d3bYaB94HPejJeu9yEA.b['22'][0]++,!this.tooltips)&&(__cov_ne9d3bYaB94HPejJeu9yEA.b['22'][1]++,this.options.createTooltips)){__cov_ne9d3bYaB94HPejJeu9yEA.b['21'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['119']++;this.tooltips=new Tooltip(this.getForm(),{containerClass:'error-tooltip'});}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['21'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['120']++;if(!this.options.createTooltips){__cov_ne9d3bYaB94HPejJeu9yEA.b['23'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['121']++;return;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['23'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['122']++;setTimeout(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['25']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['123']++;if(!target.flexFormsSavedValidity){__cov_ne9d3bYaB94HPejJeu9yEA.b['24'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['124']++;return;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['24'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['125']++;if((__cov_ne9d3bYaB94HPejJeu9yEA.b['26'][0]++,!target.flexFormsSavedValidity.valid)&&(__cov_ne9d3bYaB94HPejJeu9yEA.b['26'][1]++,target.classList.contains(INPUT_ERROR_CLASS))){__cov_ne9d3bYaB94HPejJeu9yEA.b['25'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['126']++;self.tooltips.createTooltip(target,Form._formatErrorTooltip(target.flexFormsSavedValidationMessage),false);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['25'][1]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['127']++;if(remove){__cov_ne9d3bYaB94HPejJeu9yEA.b['27'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['128']++;self.tooltips.removeTooltip(target);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['27'][1]++;}}},0);},writable:true,configurable:true},_checkIsInvalid:{value:function _checkIsInvalid(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['26']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['129']++;e.preventDefault();__cov_ne9d3bYaB94HPejJeu9yEA.s['130']++;var invalidFields=this.getForm().querySelectorAll(':invalid'),self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['131']++;var arr=Form._createArrayFromInvalidFieldList(invalidFields);__cov_ne9d3bYaB94HPejJeu9yEA.s['132']++;if(arr.indexOf(e.target)>0){__cov_ne9d3bYaB94HPejJeu9yEA.b['28'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['133']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['28'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['134']++;if(arr.length>0){__cov_ne9d3bYaB94HPejJeu9yEA.b['29'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['135']++;setTimeout(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['27']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['136']++;arr[0].focus();__cov_ne9d3bYaB94HPejJeu9yEA.s['137']++;self.showAndOrCreateTooltip(arr[0]);},0);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['29'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['138']++;var validation=self.validateCustomFields();__cov_ne9d3bYaB94HPejJeu9yEA.s['139']++;this.prepareErrors(arr,true);__cov_ne9d3bYaB94HPejJeu9yEA.s['140']++;return validation;},writable:true,configurable:true},initFormValidation:{value:function initFormValidation(){__cov_ne9d3bYaB94HPejJeu9yEA.f['28']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['141']++;var form=this.getForm(),invalidFormFired=false,self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['142']++;form.addEventListener('invalid',function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['29']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['143']++;var result=self._checkIsInvalid(e);__cov_ne9d3bYaB94HPejJeu9yEA.s['144']++;if(result){__cov_ne9d3bYaB94HPejJeu9yEA.b['30'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['145']++;this.currentValidationFuture=new _core.Promise(function(resolve){__cov_ne9d3bYaB94HPejJeu9yEA.f['30']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['146']++;result.then(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['31']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['147']++;self.prepareErrors(r.checkedFields,false);__cov_ne9d3bYaB94HPejJeu9yEA.s['148']++;resolve(r);__cov_ne9d3bYaB94HPejJeu9yEA.s['149']++;invalidFormFired=false;});});}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['30'][1]++;}},true);__cov_ne9d3bYaB94HPejJeu9yEA.s['150']++;form.addEventListener('blur',function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['32']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['151']++;if(self.tooltips){__cov_ne9d3bYaB94HPejJeu9yEA.b['31'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['152']++;self.tooltips.removeTooltip(e.target);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['31'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['153']++;var target=e.target,hasError=false;__cov_ne9d3bYaB94HPejJeu9yEA.s['154']++;if(!_checkIsValidBlurFocusElement(target)){__cov_ne9d3bYaB94HPejJeu9yEA.b['32'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['155']++;return;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['32'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['156']++;if(target.classList.contains(INPUT_ERROR_CLASS)){__cov_ne9d3bYaB94HPejJeu9yEA.b['33'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['157']++;hasError=true;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['33'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['158']++;self._customValidationsForElements([e.target]).then(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['33']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['159']++;self.prepareErrors([e.target],false);__cov_ne9d3bYaB94HPejJeu9yEA.s['160']++;if(!hasError){__cov_ne9d3bYaB94HPejJeu9yEA.b['34'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['161']++;self.showAndOrCreateTooltip(e.target);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['34'][1]++;}});},true);function _checkIsValidBlurFocusElement(target){__cov_ne9d3bYaB94HPejJeu9yEA.f['34']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['163']++;if(!self.options.inlineValidation){__cov_ne9d3bYaB94HPejJeu9yEA.b['35'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['164']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['35'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['165']++;var attr=target.getAttribute('type'),maybeDisableOnBlur=target.hasAttribute(ATTR_DISABLE_INLINE);__cov_ne9d3bYaB94HPejJeu9yEA.s['166']++;if(maybeDisableOnBlur){__cov_ne9d3bYaB94HPejJeu9yEA.b['36'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['167']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['36'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['168']++;return!((__cov_ne9d3bYaB94HPejJeu9yEA.b['37'][0]++,attr==='checkbox')||(__cov_ne9d3bYaB94HPejJeu9yEA.b['37'][1]++,attr==='option')||(__cov_ne9d3bYaB94HPejJeu9yEA.b['37'][2]++,attr==='submit')||(__cov_ne9d3bYaB94HPejJeu9yEA.b['37'][3]++,!((__cov_ne9d3bYaB94HPejJeu9yEA.b['38'][0]++,target instanceof HTMLSelectElement)||(__cov_ne9d3bYaB94HPejJeu9yEA.b['38'][1]++,target instanceof HTMLInputElement)||(__cov_ne9d3bYaB94HPejJeu9yEA.b['38'][2]++,target instanceof HTMLTextAreaElement))));}__cov_ne9d3bYaB94HPejJeu9yEA.s['169']++;form.addEventListener('focus',function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['35']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['170']++;if(!_checkIsValidBlurFocusElement(e.target)){__cov_ne9d3bYaB94HPejJeu9yEA.b['39'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['171']++;return;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['39'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['172']++;self.showAndOrCreateTooltip(e.target);},true);__cov_ne9d3bYaB94HPejJeu9yEA.s['173']++;form.addEventListener('change',function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['36']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['174']++;var name=e.target.getAttribute('name');__cov_ne9d3bYaB94HPejJeu9yEA.s['175']++;if(name){__cov_ne9d3bYaB94HPejJeu9yEA.b['40'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['176']++;var inputs=form.querySelectorAll('[name="'+name+'"]');__cov_ne9d3bYaB94HPejJeu9yEA.s['177']++;self._customValidationsForElements(inputs).then(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['37']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['178']++;self.prepareErrors(inputs,false);__cov_ne9d3bYaB94HPejJeu9yEA.s['179']++;self.showAndOrCreateTooltip(e.target,true);});}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['40'][1]++;}});__cov_ne9d3bYaB94HPejJeu9yEA.s['180']++;var submitListener=function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['38']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['181']++;self._submitListener(e,submitListener);};__cov_ne9d3bYaB94HPejJeu9yEA.s['182']++;form.addEventListener('submit',submitListener);__cov_ne9d3bYaB94HPejJeu9yEA.s['183']++;Event.dispatchAndFire(form,EVENT_FORM_READY);},writable:true,configurable:true},_submitListener:{value:function _submitListener(e,submitListener){__cov_ne9d3bYaB94HPejJeu9yEA.f['39']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['184']++;var form=this.getForm(),self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['185']++;if(form.classList.contains(LOADING_CLASS)){__cov_ne9d3bYaB94HPejJeu9yEA.b['41'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['186']++;e.preventDefault();__cov_ne9d3bYaB94HPejJeu9yEA.s['187']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['41'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['188']++;form.classList.add(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['189']++;form.removeEventListener('submit',submitListener);__cov_ne9d3bYaB94HPejJeu9yEA.s['190']++;this._removeElementErrors(form);__cov_ne9d3bYaB94HPejJeu9yEA.s['191']++;e.preventDefault();__cov_ne9d3bYaB94HPejJeu9yEA.s['192']++;if(form.checkValidity()){__cov_ne9d3bYaB94HPejJeu9yEA.b['42'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['193']++;form.addEventListener('submit',submitListener);__cov_ne9d3bYaB94HPejJeu9yEA.s['194']++;self.currentValidationFuture=new _core.Promise(function(resolve){__cov_ne9d3bYaB94HPejJeu9yEA.f['40']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['195']++;var validation=self.validateCustomFields();__cov_ne9d3bYaB94HPejJeu9yEA.s['196']++;validation.then(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['41']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['197']++;for(var i=0;i<r.checkedFields.length;i++){__cov_ne9d3bYaB94HPejJeu9yEA.s['198']++;var f=r.checkedFields[i];__cov_ne9d3bYaB94HPejJeu9yEA.s['199']++;if(!f.validity.valid){__cov_ne9d3bYaB94HPejJeu9yEA.b['43'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['200']++;self.showAndOrCreateTooltip(f,true);__cov_ne9d3bYaB94HPejJeu9yEA.s['201']++;f.focus();__cov_ne9d3bYaB94HPejJeu9yEA.s['202']++;break;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['43'][1]++;}}__cov_ne9d3bYaB94HPejJeu9yEA.s['203']++;self.prepareErrors(r.checkedFields,false);__cov_ne9d3bYaB94HPejJeu9yEA.s['204']++;resolve(r);});});__cov_ne9d3bYaB94HPejJeu9yEA.s['205']++;self.currentValidationFuture.then(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['42']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['206']++;form.classList.remove(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['207']++;if(!r.foundAnyError){__cov_ne9d3bYaB94HPejJeu9yEA.b['44'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['208']++;self._handleSubmit(e);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['44'][1]++;}});}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['42'][1]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['209']++;form.classList.remove(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['210']++;form.addEventListener('submit',submitListener);}},writable:true,configurable:true},_handleSubmit:{value:function _handleSubmit(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['43']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['211']++;this._submitFunction.apply(this,[this.form,e]);},writable:true,configurable:true}});__cov_ne9d3bYaB94HPejJeu9yEA.s['212']++;return Form;}();__cov_ne9d3bYaB94HPejJeu9yEA.s['213']++;exports['default']=Form;__cov_ne9d3bYaB94HPejJeu9yEA.s['214']++;Form.globalValidators=[];__cov_ne9d3bYaB94HPejJeu9yEA.s['215']++;Form.globalRemoteValidationFunction=function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['44']++;};__cov_ne9d3bYaB94HPejJeu9yEA.s['216']++;Form.globalErrorMessageHandler=function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['45']++;};__cov_ne9d3bYaB94HPejJeu9yEA.s['217']++;Object.defineProperty(exports,'__esModule',{value:true});
	
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
	__cov_QU3vbYO7toUg5tTrpu4LEg.s['1']++;var _core=__webpack_require__(5);__cov_QU3vbYO7toUg5tTrpu4LEg.s['2']++;var CLASS_NAMES_TOOLTIP='tooltip-container';__cov_QU3vbYO7toUg5tTrpu4LEg.s['3']++;var CLASS_NAMES_TOP='arrow-top';__cov_QU3vbYO7toUg5tTrpu4LEg.s['4']++;var CLASS_NAMES_BOTTOM='arrow-bottom';__cov_QU3vbYO7toUg5tTrpu4LEg.s['5']++;var CLASS_NAMES_OPEN='open';__cov_QU3vbYO7toUg5tTrpu4LEg.s['6']++;var doc=document;__cov_QU3vbYO7toUg5tTrpu4LEg.s['7']++;var Tooltip=function(){__cov_QU3vbYO7toUg5tTrpu4LEg.f['1']++;function Tooltip(DelegateContainer,options){__cov_QU3vbYO7toUg5tTrpu4LEg.f['2']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['9']++;to5Runtime.classCallCheck(this,Tooltip);__cov_QU3vbYO7toUg5tTrpu4LEg.s['10']++;this.container=DelegateContainer instanceof HTMLElement?(__cov_QU3vbYO7toUg5tTrpu4LEg.b['1'][0]++,DelegateContainer):(__cov_QU3vbYO7toUg5tTrpu4LEg.b['1'][1]++,doc.getElementById(DelegateContainer));__cov_QU3vbYO7toUg5tTrpu4LEg.s['11']++;if(!this.container){__cov_QU3vbYO7toUg5tTrpu4LEg.b['2'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['12']++;throw'Could not create Tooltip, DelegateContainer not found';}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['2'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['13']++;this.tooltipContainer=null;__cov_QU3vbYO7toUg5tTrpu4LEg.s['14']++;this.options={containerClass:''};__cov_QU3vbYO7toUg5tTrpu4LEg.s['15']++;_core.Object.assign(this.options,options);}__cov_QU3vbYO7toUg5tTrpu4LEg.s['16']++;to5Runtime.prototypeProperties(Tooltip,null,{createTooltip:{value:function createTooltip(target,text,removeTitle){__cov_QU3vbYO7toUg5tTrpu4LEg.f['3']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['17']++;var self=this;__cov_QU3vbYO7toUg5tTrpu4LEg.s['18']++;if((__cov_QU3vbYO7toUg5tTrpu4LEg.b['4'][0]++,!text)||(__cov_QU3vbYO7toUg5tTrpu4LEg.b['4'][1]++,text)&&(__cov_QU3vbYO7toUg5tTrpu4LEg.b['4'][2]++,text.trim()==='')){__cov_QU3vbYO7toUg5tTrpu4LEg.b['3'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['19']++;return;}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['3'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['20']++;var tooltipContainer=this.tooltipContainer;__cov_QU3vbYO7toUg5tTrpu4LEg.s['21']++;if(!tooltipContainer){__cov_QU3vbYO7toUg5tTrpu4LEg.b['5'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['22']++;tooltipContainer=doc.createElement('div');__cov_QU3vbYO7toUg5tTrpu4LEg.s['23']++;tooltipContainer.className=[CLASS_NAMES_TOOLTIP,self.options.containerClass].join(' ');__cov_QU3vbYO7toUg5tTrpu4LEg.s['24']++;this.container.appendChild(tooltipContainer);__cov_QU3vbYO7toUg5tTrpu4LEg.s['25']++;this.tooltipContainer=tooltipContainer;}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['5'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['26']++;tooltipContainer.style.left='auto';__cov_QU3vbYO7toUg5tTrpu4LEg.s['27']++;tooltipContainer.style.top='auto';__cov_QU3vbYO7toUg5tTrpu4LEg.s['28']++;tooltipContainer.innerHTML=text;__cov_QU3vbYO7toUg5tTrpu4LEg.s['29']++;tooltipContainer.flexTooltipCurrentTarget=target;__cov_QU3vbYO7toUg5tTrpu4LEg.s['30']++;if(removeTitle){__cov_QU3vbYO7toUg5tTrpu4LEg.b['6'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['31']++;target.oldTitle=text;__cov_QU3vbYO7toUg5tTrpu4LEg.s['32']++;target.removeAttribute('title');}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['6'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['33']++;var targetRect=target.getBoundingClientRect(),colRect=this.container.getBoundingClientRect();__cov_QU3vbYO7toUg5tTrpu4LEg.s['34']++;var containerRect=tooltipContainer.getBoundingClientRect(),targetTop=targetRect.top,isCollisionTop=0>=targetTop-containerRect.height,classList=tooltipContainer.classList;__cov_QU3vbYO7toUg5tTrpu4LEg.s['35']++;if(isCollisionTop){__cov_QU3vbYO7toUg5tTrpu4LEg.b['7'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['36']++;tooltipContainer.style.top=targetRect.bottom-colRect.top+'px';__cov_QU3vbYO7toUg5tTrpu4LEg.s['37']++;classList.remove(CLASS_NAMES_BOTTOM);__cov_QU3vbYO7toUg5tTrpu4LEg.s['38']++;classList.add(CLASS_NAMES_TOP);}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['7'][1]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['39']++;classList.remove(CLASS_NAMES_TOP);__cov_QU3vbYO7toUg5tTrpu4LEg.s['40']++;classList.add(CLASS_NAMES_BOTTOM);__cov_QU3vbYO7toUg5tTrpu4LEg.s['41']++;tooltipContainer.style.top=targetTop-containerRect.height-colRect.top+'px';}__cov_QU3vbYO7toUg5tTrpu4LEg.s['42']++;tooltipContainer.style.left=((__cov_QU3vbYO7toUg5tTrpu4LEg.b['8'][0]++,targetRect.left+targetRect.width/2-containerRect.width/2)||(__cov_QU3vbYO7toUg5tTrpu4LEg.b['8'][1]++,0))-colRect.left+'px';__cov_QU3vbYO7toUg5tTrpu4LEg.s['43']++;classList.add(CLASS_NAMES_OPEN);},writable:true,configurable:true},removeTooltip:{value:function removeTooltip(target){__cov_QU3vbYO7toUg5tTrpu4LEg.f['4']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['44']++;if(this.tooltipContainer){__cov_QU3vbYO7toUg5tTrpu4LEg.b['9'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['45']++;if(this.tooltipContainer.flexTooltipCurrentTarget!==target){__cov_QU3vbYO7toUg5tTrpu4LEg.b['10'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['46']++;return;}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['10'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['47']++;this.tooltipContainer.classList.remove('open');}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['9'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['48']++;if(target.oldTitle){__cov_QU3vbYO7toUg5tTrpu4LEg.b['11'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['49']++;target.setAttribute('title',target.oldTitle);}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['11'][1]++;}},writable:true,configurable:true},registerEvents:{value:function registerEvents(){__cov_QU3vbYO7toUg5tTrpu4LEg.f['5']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['50']++;var self=this;__cov_QU3vbYO7toUg5tTrpu4LEg.s['51']++;this.container.addEventListener('mouseover',function(e){__cov_QU3vbYO7toUg5tTrpu4LEg.f['6']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['52']++;if(e.target.hasAttribute('data-tooltip')){__cov_QU3vbYO7toUg5tTrpu4LEg.b['12'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['53']++;self.createTooltip(e.target,e.target.getAttribute('title'),true);}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['12'][1]++;}});__cov_QU3vbYO7toUg5tTrpu4LEg.s['54']++;this.container.addEventListener('mouseout',function(e){__cov_QU3vbYO7toUg5tTrpu4LEg.f['7']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['55']++;if(e.target.hasAttribute('data-tooltip')){__cov_QU3vbYO7toUg5tTrpu4LEg.b['13'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['56']++;self.removeTooltip(e.target);}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['13'][1]++;}});__cov_QU3vbYO7toUg5tTrpu4LEg.s['57']++;return this;},writable:true,configurable:true}});__cov_QU3vbYO7toUg5tTrpu4LEg.s['58']++;return Tooltip;}();__cov_QU3vbYO7toUg5tTrpu4LEg.s['59']++;module.exports=Tooltip;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var global = {};

	"use strict";

	var _core = __webpack_require__(5);

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

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";
	var __cov_HvPf3POrDe4GfFDGb4GwRQ = (Function('return this'))();
	if (!__cov_HvPf3POrDe4GfFDGb4GwRQ.__coverage__) { __cov_HvPf3POrDe4GfFDGb4GwRQ.__coverage__ = {}; }
	__cov_HvPf3POrDe4GfFDGb4GwRQ = __cov_HvPf3POrDe4GfFDGb4GwRQ.__coverage__;
	if (!(__cov_HvPf3POrDe4GfFDGb4GwRQ['/Users/bowlingx/Projekte/flexcss/src/main/util/Event.js'])) {
	   __cov_HvPf3POrDe4GfFDGb4GwRQ['/Users/bowlingx/Projekte/flexcss/src/main/util/Event.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/main/util/Event.js","s":{"1":0,"2":0,"3":1,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":1,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"fnMap":{"1":{"name":"(anonymous_1)","line":8,"loc":{"start":{"line":8,"column":20},"end":{"line":8,"column":32}}},"2":{"name":"EventHandler","line":13,"loc":{"start":{"line":13,"column":4},"end":{"line":13,"column":40}}},"3":{"name":"withOptions","line":33,"loc":{"start":{"line":33,"column":19},"end":{"line":33,"column":49}}},"4":{"name":"withOriginal","line":46,"loc":{"start":{"line":46,"column":19},"end":{"line":46,"column":44}}},"5":{"name":"withDetail","line":59,"loc":{"start":{"line":59,"column":19},"end":{"line":59,"column":42}}},"6":{"name":"fire","line":71,"loc":{"start":{"line":71,"column":19},"end":{"line":71,"column":35}}},"7":{"name":"(anonymous_7)","line":84,"loc":{"start":{"line":84,"column":13},"end":{"line":84,"column":25}}},"8":{"name":"Event","line":85,"loc":{"start":{"line":85,"column":4},"end":{"line":85,"column":21}}},"9":{"name":"dispatch","line":97,"loc":{"start":{"line":97,"column":19},"end":{"line":97,"column":51}}},"10":{"name":"dispatchAndFire","line":112,"loc":{"start":{"line":112,"column":19},"end":{"line":112,"column":67}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":44}},"2":{"start":{"line":8,"column":0},"end":{"line":82,"column":5}},"3":{"start":{"line":13,"column":4},"end":{"line":23,"column":5}},"4":{"start":{"line":14,"column":8},"end":{"line":14,"column":54}},"5":{"start":{"line":16,"column":8},"end":{"line":16,"column":29}},"6":{"start":{"line":17,"column":8},"end":{"line":20,"column":10}},"7":{"start":{"line":22,"column":8},"end":{"line":22,"column":25}},"8":{"start":{"line":25,"column":4},"end":{"line":79,"column":7}},"9":{"start":{"line":34,"column":16},"end":{"line":34,"column":72}},"10":{"start":{"line":35,"column":16},"end":{"line":35,"column":28}},"11":{"start":{"line":47,"column":16},"end":{"line":47,"column":54}},"12":{"start":{"line":48,"column":16},"end":{"line":48,"column":28}},"13":{"start":{"line":60,"column":16},"end":{"line":60,"column":47}},"14":{"start":{"line":61,"column":16},"end":{"line":61,"column":28}},"15":{"start":{"line":72,"column":16},"end":{"line":72,"column":72}},"16":{"start":{"line":73,"column":16},"end":{"line":73,"column":45}},"17":{"start":{"line":74,"column":16},"end":{"line":74,"column":25}},"18":{"start":{"line":81,"column":4},"end":{"line":81,"column":24}},"19":{"start":{"line":84,"column":0},"end":{"line":121,"column":5}},"20":{"start":{"line":85,"column":4},"end":{"line":87,"column":5}},"21":{"start":{"line":86,"column":8},"end":{"line":86,"column":47}},"22":{"start":{"line":89,"column":4},"end":{"line":118,"column":7}},"23":{"start":{"line":98,"column":16},"end":{"line":98,"column":54}},"24":{"start":{"line":113,"column":16},"end":{"line":113,"column":82}},"25":{"start":{"line":120,"column":4},"end":{"line":120,"column":17}},"26":{"start":{"line":123,"column":0},"end":{"line":123,"column":23}}},"branchMap":{"1":{"line":34,"type":"binary-expr","locations":[{"start":{"line":34,"column":57},"end":{"line":34,"column":64}},{"start":{"line":34,"column":68},"end":{"line":34,"column":70}}]}},"code":["\"use strict\";","","var _core = require(\"6to5-runtime/core-js\");","","/**"," * Simpler Event dispatching"," */","var EventHandler = (function () {","    /**","     * @param {HTMLElement} target","     * @param {String} name","     */","    function EventHandler(target, name) {","        to5Runtime.classCallCheck(this, EventHandler);","","        this.target = target;","        this.defaultOptions = {","            bubbles: true,","            cancelable: true","        };","","        this.name = name;","    }","","    to5Runtime.prototypeProperties(EventHandler, null, {","        withOptions: {","","            /**","             * Set more options","             * @param {Object} options","             * @returns {EventHandler}","             */","            value: function withOptions(options) {","                _core.Object.assign(this.defaultOptions, options || {});","                return this;","            },","            writable: true,","            configurable: true","        },","        withOriginal: {","","            /**","             * @param {Event} e","             * @returns {EventHandler}","             */","            value: function withOriginal(e) {","                this.defaultOptions.originalEvent = e;","                return this;","            },","            writable: true,","            configurable: true","        },","        withDetail: {","","            /**","             * @param {*} o","             * @returns {EventHandler}","             */","            value: function withDetail(o) {","                this.defaultOptions.detail = o;","                return this;","            },","            writable: true,","            configurable: true","        },","        fire: {","","            /**","             * @returns {Window.CustomEvent}","             */","            value: function fire() {","                var e = new CustomEvent(this.name, this.defaultOptions);","                this.target.dispatchEvent(e);","                return e;","            },","            writable: true,","            configurable: true","        }","    });","","    return EventHandler;","})();","","var Event = (function () {","    function Event() {","        to5Runtime.classCallCheck(this, Event);","    }","","    to5Runtime.prototypeProperties(Event, {","        dispatch: {","            /**","             * Dispatches a custom event","             * @param {HTMLElement} target","             * @param {String} name","             * @returns {EventHandler}","             */","            value: function dispatch(target, name) {","                return new EventHandler(target, name);","            },","            writable: true,","            configurable: true","        },","        dispatchAndFire: {","","            /**","             * Dispatches a custom event","             * @param {HTMLElement} target","             * @param {String} name","             * @param {Object} [options]","             * @returns {Window.CustomEvent}","             */","            value: function dispatchAndFire(target, name, options) {","                return new EventHandler(target, name).withOptions(options).fire();","            },","            writable: true,","            configurable: true","        }","    });","","    return Event;","})();","","module.exports = Event;"]};
	}
	__cov_HvPf3POrDe4GfFDGb4GwRQ = __cov_HvPf3POrDe4GfFDGb4GwRQ['/Users/bowlingx/Projekte/flexcss/src/main/util/Event.js'];
	__cov_HvPf3POrDe4GfFDGb4GwRQ.s['1']++;var _core=__webpack_require__(5);__cov_HvPf3POrDe4GfFDGb4GwRQ.s['2']++;var EventHandler=function(){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['1']++;function EventHandler(target,name){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['2']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['4']++;to5Runtime.classCallCheck(this,EventHandler);__cov_HvPf3POrDe4GfFDGb4GwRQ.s['5']++;this.target=target;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['6']++;this.defaultOptions={bubbles:true,cancelable:true};__cov_HvPf3POrDe4GfFDGb4GwRQ.s['7']++;this.name=name;}__cov_HvPf3POrDe4GfFDGb4GwRQ.s['8']++;to5Runtime.prototypeProperties(EventHandler,null,{withOptions:{value:function withOptions(options){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['3']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['9']++;_core.Object.assign(this.defaultOptions,(__cov_HvPf3POrDe4GfFDGb4GwRQ.b['1'][0]++,options)||(__cov_HvPf3POrDe4GfFDGb4GwRQ.b['1'][1]++,{}));__cov_HvPf3POrDe4GfFDGb4GwRQ.s['10']++;return this;},writable:true,configurable:true},withOriginal:{value:function withOriginal(e){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['4']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['11']++;this.defaultOptions.originalEvent=e;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['12']++;return this;},writable:true,configurable:true},withDetail:{value:function withDetail(o){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['5']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['13']++;this.defaultOptions.detail=o;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['14']++;return this;},writable:true,configurable:true},fire:{value:function fire(){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['6']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['15']++;var e=new CustomEvent(this.name,this.defaultOptions);__cov_HvPf3POrDe4GfFDGb4GwRQ.s['16']++;this.target.dispatchEvent(e);__cov_HvPf3POrDe4GfFDGb4GwRQ.s['17']++;return e;},writable:true,configurable:true}});__cov_HvPf3POrDe4GfFDGb4GwRQ.s['18']++;return EventHandler;}();__cov_HvPf3POrDe4GfFDGb4GwRQ.s['19']++;var Event=function(){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['7']++;function Event(){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['8']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['21']++;to5Runtime.classCallCheck(this,Event);}__cov_HvPf3POrDe4GfFDGb4GwRQ.s['22']++;to5Runtime.prototypeProperties(Event,{dispatch:{value:function dispatch(target,name){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['9']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['23']++;return new EventHandler(target,name);},writable:true,configurable:true},dispatchAndFire:{value:function dispatchAndFire(target,name,options){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['10']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['24']++;return new EventHandler(target,name).withOptions(options).fire();},writable:true,configurable:true}});__cov_HvPf3POrDe4GfFDGb4GwRQ.s['25']++;return Event;}();__cov_HvPf3POrDe4GfFDGb4GwRQ.s['26']++;module.exports=Event;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _core = __webpack_require__(5);

	(function () {
	  "use strict";

	  if (self.fetch) {
	    return;
	  }

	  function Headers(headers) {
	    this.map = {};

	    var self = this;
	    if (headers instanceof Headers) {
	      headers.forEach(function (name, values) {
	        values.forEach(function (value) {
	          self.append(name, value);
	        });
	      });
	    } else if (headers) {
	      _core.Object.getOwnPropertyNames(headers).forEach(function (name) {
	        self.append(name, headers[name]);
	      });
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = name.toLowerCase();
	    var list = this.map[name];
	    if (!list) {
	      list = [];
	      this.map[name] = list;
	    }
	    list.push(value);
	  };

	  Headers.prototype["delete"] = function (name) {
	    delete this.map[name.toLowerCase()];
	  };

	  Headers.prototype.get = function (name) {
	    var values = this.map[name.toLowerCase()];
	    return values ? values[0] : null;
	  };

	  Headers.prototype.getAll = function (name) {
	    return this.map[name.toLowerCase()] || [];
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(name.toLowerCase());
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[name.toLowerCase()] = [value];
	  };

	  // Instead of iterable for now.
	  Headers.prototype.forEach = function (callback) {
	    var self = this;
	    _core.Object.getOwnPropertyNames(this.map).forEach(function (name) {
	      callback(name, self.map[name]);
	    });
	  };

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return _core.Promise.reject(new TypeError("Already read"));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new _core.Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    return fileReaderReady(reader);
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    reader.readAsText(blob);
	    return fileReaderReady(reader);
	  }

	  var support = {
	    blob: "FileReader" in self && "Blob" in self && (function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    })(),
	    formData: "FormData" in self
	  };

	  function Body() {
	    this.bodyUsed = false;

	    if (support.blob) {
	      this._initBody = function (body) {
	        this._bodyInit = body;
	        if (typeof body === "string") {
	          this._bodyText = body;
	        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	          this._bodyBlob = body;
	        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	          this._bodyFormData = body;
	        } else if (!body) {
	          this._bodyText = "";
	        } else {
	          throw new Error("unsupported BodyInit type");
	        }
	      };

	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return _core.Promise.resolve(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error("could not read FormData body as blob");
	        } else {
	          return _core.Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        return this.blob().then(readBlobAsArrayBuffer);
	      };

	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error("could not read FormData body as text");
	        } else {
	          return _core.Promise.resolve(this._bodyText);
	        }
	      };
	    } else {
	      this._initBody = function (body) {
	        this._bodyInit = body;
	        if (typeof body === "string") {
	          this._bodyText = body;
	        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	          this._bodyFormData = body;
	        } else if (!body) {
	          this._bodyText = "";
	        } else {
	          throw new Error("unsupported BodyInit type");
	        }
	      };

	      this.text = function () {
	        var rejected = consumed(this);
	        return rejected ? rejected : _core.Promise.resolve(this._bodyText);
	      };
	    }

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(url, options) {
	    options = options || {};
	    this.url = url;

	    this.credentials = options.credentials || "omit";
	    this.headers = new Headers(options.headers);
	    this.method = normalizeMethod(options.method || "GET");
	    this.mode = options.mode || null;
	    this.referrer = null;

	    if ((this.method === "GET" || this.method === "HEAD") && options.body) {
	      throw new TypeError("Body not allowed for GET or HEAD requests");
	    }
	    this._initBody(options.body);
	  }

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split("&").forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split("=");
	        var name = split.shift().replace(/\+/g, " ");
	        var value = split.join("=").replace(/\+/g, " ");
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function headers(xhr) {
	    var head = new Headers();
	    var pairs = xhr.getAllResponseHeaders().trim().split("\n");
	    pairs.forEach(function (header) {
	      var split = header.trim().split(":");
	      var key = split.shift().trim();
	      var value = split.join(":").trim();
	      head.append(key, value);
	    });
	    return head;
	  }

	  Request.prototype.fetch = function () {
	    var self = this;

	    return new _core.Promise(function (resolve, reject) {
	      var xhr = new XMLHttpRequest();
	      if (self.credentials === "cors") {
	        xhr.withCredentials = true;
	      }

	      function responseURL() {
	        if ("responseURL" in xhr) {
	          return xhr.responseURL;
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader("X-Request-URL");
	        }

	        return;
	      }

	      xhr.onload = function () {
	        var status = xhr.status === 1223 ? 204 : xhr.status;
	        if (status < 100 || status > 599) {
	          reject(new TypeError("Network request failed"));
	          return;
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        };
	        var body = "response" in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError("Network request failed"));
	      };

	      xhr.open(self.method, self.url, true);
	      if ("responseType" in xhr && support.blob) {
	        xhr.responseType = "blob";
	      }

	      self.headers.forEach(function (name, values) {
	        values.forEach(function (value) {
	          xhr.setRequestHeader(name, value);
	        });
	      });

	      xhr.send(typeof self._bodyInit === "undefined" ? null : self._bodyInit);
	    });
	  };

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this._initBody(bodyInit);
	    this.type = "default";
	    this.url = null;
	    this.status = options.status;
	    this.statusText = options.statusText;
	    this.headers = options.headers;
	    this.url = options.url || "";
	  }

	  Body.call(Response.prototype);

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (url, options) {
	    return new Request(url, options).fetch();
	  };
	  self.fetch.polyfill = true;
	})();

/***/ }
/******/ ])
});
