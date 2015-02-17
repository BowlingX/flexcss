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
	   __cov_G7r$JvG2gU2$BtiZioay5g['/Users/bowlingx/Projekte/flexcss/src/export.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/export.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{},"f":{},"fnMap":{},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":54}},"2":{"start":{"line":5,"column":0},"end":{"line":5,"column":60}},"3":{"start":{"line":7,"column":0},"end":{"line":7,"column":56}},"4":{"start":{"line":9,"column":0},"end":{"line":9,"column":58}},"5":{"start":{"line":11,"column":0},"end":{"line":11,"column":67}},"6":{"start":{"line":14,"column":0},"end":{"line":20,"column":2}}},"branchMap":{},"code":["\"use strict\";","","var Form = to5Runtime.interopRequire(require(\"Form\"));","","var Tooltip = to5Runtime.interopRequire(require(\"Tooltip\"));","","var Modal = to5Runtime.interopRequire(require(\"Modal\"));","","var Widget = to5Runtime.interopRequire(require(\"Widget\"));","","var Settings = to5Runtime.interopRequire(require(\"util/Settings\"));","","// default export as component object","module.exports = {","    Form: Form,","    Tooltip: Tooltip,","    Modal: Modal,","    Widget: Widget,","    Settings: Settings","};"]};
	}
	__cov_G7r$JvG2gU2$BtiZioay5g = __cov_G7r$JvG2gU2$BtiZioay5g['/Users/bowlingx/Projekte/flexcss/src/export.js'];
	__cov_G7r$JvG2gU2$BtiZioay5g.s['1']++;var Form=to5Runtime.interopRequire(__webpack_require__(1));__cov_G7r$JvG2gU2$BtiZioay5g.s['2']++;var Tooltip=to5Runtime.interopRequire(__webpack_require__(2));__cov_G7r$JvG2gU2$BtiZioay5g.s['3']++;var Modal=to5Runtime.interopRequire(__webpack_require__(3));__cov_G7r$JvG2gU2$BtiZioay5g.s['4']++;var Widget=to5Runtime.interopRequire(__webpack_require__(4));__cov_G7r$JvG2gU2$BtiZioay5g.s['5']++;var Settings=to5Runtime.interopRequire(__webpack_require__(5));__cov_G7r$JvG2gU2$BtiZioay5g.s['6']++;module.exports={Form:Form,Tooltip:Tooltip,Modal:Modal,Widget:Widget,Settings:Settings};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";
	var __cov_ne9d3bYaB94HPejJeu9yEA = (Function('return this'))();
	if (!__cov_ne9d3bYaB94HPejJeu9yEA.__coverage__) { __cov_ne9d3bYaB94HPejJeu9yEA.__coverage__ = {}; }
	__cov_ne9d3bYaB94HPejJeu9yEA = __cov_ne9d3bYaB94HPejJeu9yEA.__coverage__;
	if (!(__cov_ne9d3bYaB94HPejJeu9yEA['/Users/bowlingx/Projekte/flexcss/src/main/Form.js'])) {
	   __cov_ne9d3bYaB94HPejJeu9yEA['/Users/bowlingx/Projekte/flexcss/src/main/Form.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/main/Form.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":1,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"109":0,"110":0,"111":0,"112":0,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"121":0,"122":0,"123":0,"124":0,"125":0,"126":0,"127":0,"128":0,"129":0,"130":0,"131":0,"132":0,"133":0,"134":0,"135":0,"136":0,"137":0,"138":0,"139":0,"140":0,"141":0,"142":0,"143":0,"144":0,"145":0,"146":0,"147":0,"148":0,"149":0,"150":0,"151":0,"152":0,"153":0,"154":0,"155":0,"156":0,"157":0,"158":0,"159":0,"160":0,"161":0,"162":0,"163":0,"164":0,"165":1,"166":0,"167":0,"168":0,"169":0,"170":0,"171":0,"172":0,"173":0,"174":0,"175":0,"176":0,"177":0,"178":0,"179":0,"180":0,"181":0,"182":0,"183":0,"184":0,"185":0,"186":0,"187":0,"188":0,"189":0,"190":0,"191":0,"192":0,"193":0,"194":0,"195":0,"196":0,"197":0,"198":0,"199":0,"200":0,"201":0,"202":0,"203":0,"204":0,"205":0,"206":0,"207":0,"208":0,"209":0,"210":0,"211":0,"212":0,"213":0,"214":0,"215":0,"216":0,"217":0,"218":0,"219":0,"220":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0],"34":[0,0],"35":[0,0],"36":[0,0],"37":[0,0],"38":[0,0,0,0],"39":[0,0,0],"40":[0,0],"41":[0,0],"42":[0,0],"43":[0,0],"44":[0,0],"45":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0},"fnMap":{"1":{"name":"(anonymous_1)","line":48,"loc":{"start":{"line":48,"column":12},"end":{"line":48,"column":24}}},"2":{"name":"Form","line":53,"loc":{"start":{"line":53,"column":4},"end":{"line":53,"column":33}}},"3":{"name":"(anonymous_3)","line":74,"loc":{"start":{"line":74,"column":57},"end":{"line":74,"column":69}}},"4":{"name":"_createArrayFromInvalidFieldList","line":127,"loc":{"start":{"line":127,"column":19},"end":{"line":127,"column":67}}},"5":{"name":"_formatErrorTooltip","line":149,"loc":{"start":{"line":149,"column":19},"end":{"line":149,"column":55}}},"6":{"name":"registerErrorMessageHandler","line":162,"loc":{"start":{"line":162,"column":19},"end":{"line":162,"column":67}}},"7":{"name":"init","line":175,"loc":{"start":{"line":175,"column":19},"end":{"line":175,"column":52}}},"8":{"name":"registerValidator","line":193,"loc":{"start":{"line":193,"column":19},"end":{"line":193,"column":63}}},"9":{"name":"registerGlobalRemoteValidationFunction","line":207,"loc":{"start":{"line":207,"column":19},"end":{"line":207,"column":73}}},"10":{"name":"_submitFunction","line":224,"loc":{"start":{"line":224,"column":19},"end":{"line":224,"column":57}}},"11":{"name":"(anonymous_11)","line":262,"loc":{"start":{"line":262,"column":39},"end":{"line":262,"column":52}}},"12":{"name":"_setupErrorMessages","line":282,"loc":{"start":{"line":282,"column":19},"end":{"line":282,"column":65}}},"13":{"name":"_removeElementErrors","line":294,"loc":{"start":{"line":294,"column":19},"end":{"line":294,"column":61}}},"14":{"name":"registerValidator","line":321,"loc":{"start":{"line":321,"column":19},"end":{"line":321,"column":63}}},"15":{"name":"_runValidation","line":337,"loc":{"start":{"line":337,"column":19},"end":{"line":337,"column":65}}},"16":{"name":"(anonymous_16)","line":344,"loc":{"start":{"line":344,"column":28},"end":{"line":344,"column":40}}},"17":{"name":"_customValidationsForElements","line":362,"loc":{"start":{"line":362,"column":19},"end":{"line":362,"column":66}}},"18":{"name":"(anonymous_18)","line":383,"loc":{"start":{"line":383,"column":55},"end":{"line":383,"column":67}}},"19":{"name":"removeErrors","line":408,"loc":{"start":{"line":408,"column":19},"end":{"line":408,"column":43}}},"20":{"name":"prepareErrors","line":422,"loc":{"start":{"line":422,"column":19},"end":{"line":422,"column":67}}},"21":{"name":"validateCustomFields","line":465,"loc":{"start":{"line":465,"column":19},"end":{"line":465,"column":51}}},"22":{"name":"getForm","line":478,"loc":{"start":{"line":478,"column":19},"end":{"line":478,"column":38}}},"23":{"name":"registerRemoteValidation","line":491,"loc":{"start":{"line":491,"column":19},"end":{"line":491,"column":59}}},"24":{"name":"showAndOrCreateTooltip","line":505,"loc":{"start":{"line":505,"column":19},"end":{"line":505,"column":67}}},"25":{"name":"(anonymous_25)","line":517,"loc":{"start":{"line":517,"column":27},"end":{"line":517,"column":39}}},"26":{"name":"_checkIsInvalid","line":541,"loc":{"start":{"line":541,"column":19},"end":{"line":541,"column":47}}},"27":{"name":"(anonymous_27)","line":552,"loc":{"start":{"line":552,"column":31},"end":{"line":552,"column":43}}},"28":{"name":"initFormValidation","line":571,"loc":{"start":{"line":571,"column":19},"end":{"line":571,"column":49}}},"29":{"name":"(anonymous_29)","line":576,"loc":{"start":{"line":576,"column":49},"end":{"line":576,"column":62}}},"30":{"name":"(anonymous_30)","line":579,"loc":{"start":{"line":579,"column":73},"end":{"line":579,"column":92}}},"31":{"name":"(anonymous_31)","line":580,"loc":{"start":{"line":580,"column":40},"end":{"line":580,"column":53}}},"32":{"name":"(anonymous_32)","line":591,"loc":{"start":{"line":591,"column":46},"end":{"line":591,"column":59}}},"33":{"name":"(anonymous_33)","line":605,"loc":{"start":{"line":605,"column":72},"end":{"line":605,"column":84}}},"34":{"name":"_checkIsValidBlurFocusElement","line":619,"loc":{"start":{"line":619,"column":16},"end":{"line":619,"column":63}}},"35":{"name":"(anonymous_35)","line":634,"loc":{"start":{"line":634,"column":47},"end":{"line":634,"column":60}}},"36":{"name":"(anonymous_36)","line":643,"loc":{"start":{"line":643,"column":48},"end":{"line":643,"column":61}}},"37":{"name":"(anonymous_37)","line":647,"loc":{"start":{"line":647,"column":72},"end":{"line":647,"column":84}}},"38":{"name":"(anonymous_38)","line":655,"loc":{"start":{"line":655,"column":37},"end":{"line":655,"column":50}}},"39":{"name":"_submitListener","line":674,"loc":{"start":{"line":674,"column":19},"end":{"line":674,"column":63}}},"40":{"name":"(anonymous_40)","line":691,"loc":{"start":{"line":691,"column":69},"end":{"line":691,"column":88}}},"41":{"name":"(anonymous_41)","line":693,"loc":{"start":{"line":693,"column":40},"end":{"line":693,"column":53}}},"42":{"name":"(anonymous_42)","line":709,"loc":{"start":{"line":709,"column":54},"end":{"line":709,"column":67}}},"43":{"name":"_handleSubmit","line":732,"loc":{"start":{"line":732,"column":19},"end":{"line":732,"column":45}}},"44":{"name":"(anonymous_44)","line":756,"loc":{"start":{"line":756,"column":38},"end":{"line":756,"column":50}}},"45":{"name":"(anonymous_45)","line":758,"loc":{"start":{"line":758,"column":33},"end":{"line":758,"column":45}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":44}},"2":{"start":{"line":7,"column":0},"end":{"line":7,"column":60}},"3":{"start":{"line":9,"column":0},"end":{"line":9,"column":56}},"4":{"start":{"line":11,"column":0},"end":{"line":11,"column":61}},"5":{"start":{"line":13,"column":0},"end":{"line":13,"column":36}},"6":{"start":{"line":14,"column":0},"end":{"line":14,"column":34}},"7":{"start":{"line":15,"column":0},"end":{"line":15,"column":30}},"8":{"start":{"line":16,"column":0},"end":{"line":16,"column":34}},"9":{"start":{"line":17,"column":0},"end":{"line":17,"column":27}},"10":{"start":{"line":18,"column":0},"end":{"line":18,"column":41}},"11":{"start":{"line":19,"column":0},"end":{"line":19,"column":59}},"12":{"start":{"line":20,"column":0},"end":{"line":20,"column":37}},"13":{"start":{"line":27,"column":0},"end":{"line":27,"column":71}},"14":{"start":{"line":32,"column":0},"end":{"line":32,"column":74}},"15":{"start":{"line":37,"column":0},"end":{"line":37,"column":105}},"16":{"start":{"line":42,"column":0},"end":{"line":42,"column":97}},"17":{"start":{"line":48,"column":0},"end":{"line":741,"column":5}},"18":{"start":{"line":53,"column":4},"end":{"line":115,"column":5}},"19":{"start":{"line":54,"column":8},"end":{"line":54,"column":46}},"20":{"start":{"line":56,"column":8},"end":{"line":58,"column":9}},"21":{"start":{"line":57,"column":12},"end":{"line":57,"column":66}},"22":{"start":{"line":64,"column":8},"end":{"line":64,"column":25}},"23":{"start":{"line":69,"column":8},"end":{"line":69,"column":29}},"24":{"start":{"line":74,"column":8},"end":{"line":74,"column":73}},"25":{"start":{"line":80,"column":8},"end":{"line":91,"column":10}},"26":{"start":{"line":94,"column":8},"end":{"line":94,"column":51}},"27":{"start":{"line":99,"column":8},"end":{"line":99,"column":37}},"28":{"start":{"line":106,"column":8},"end":{"line":106,"column":49}},"29":{"start":{"line":112,"column":8},"end":{"line":112,"column":46}},"30":{"start":{"line":114,"column":8},"end":{"line":114,"column":34}},"31":{"start":{"line":117,"column":4},"end":{"line":738,"column":7}},"32":{"start":{"line":128,"column":16},"end":{"line":128,"column":29}},"33":{"start":{"line":129,"column":16},"end":{"line":134,"column":17}},"34":{"start":{"line":130,"column":20},"end":{"line":130,"column":36}},"35":{"start":{"line":131,"column":20},"end":{"line":133,"column":21}},"36":{"start":{"line":132,"column":24},"end":{"line":132,"column":36}},"37":{"start":{"line":135,"column":16},"end":{"line":135,"column":27}},"38":{"start":{"line":150,"column":16},"end":{"line":150,"column":67}},"39":{"start":{"line":163,"column":16},"end":{"line":163,"column":59}},"40":{"start":{"line":176,"column":16},"end":{"line":176,"column":134}},"41":{"start":{"line":177,"column":16},"end":{"line":179,"column":17}},"42":{"start":{"line":178,"column":20},"end":{"line":178,"column":48}},"43":{"start":{"line":194,"column":16},"end":{"line":194,"column":56}},"44":{"start":{"line":195,"column":16},"end":{"line":195,"column":28}},"45":{"start":{"line":208,"column":16},"end":{"line":208,"column":59}},"46":{"start":{"line":209,"column":16},"end":{"line":209,"column":28}},"47":{"start":{"line":225,"column":16},"end":{"line":228,"column":32}},"48":{"start":{"line":230,"column":16},"end":{"line":230,"column":92}},"49":{"start":{"line":233,"column":16},"end":{"line":236,"column":17}},"50":{"start":{"line":234,"column":20},"end":{"line":234,"column":61}},"51":{"start":{"line":235,"column":20},"end":{"line":235,"column":33}},"52":{"start":{"line":238,"column":16},"end":{"line":241,"column":17}},"53":{"start":{"line":240,"column":20},"end":{"line":240,"column":45}},"54":{"start":{"line":243,"column":16},"end":{"line":243,"column":54}},"55":{"start":{"line":246,"column":16},"end":{"line":246,"column":35}},"56":{"start":{"line":249,"column":16},"end":{"line":258,"column":19}},"57":{"start":{"line":260,"column":16},"end":{"line":260,"column":94}},"58":{"start":{"line":262,"column":16},"end":{"line":268,"column":19}},"59":{"start":{"line":263,"column":20},"end":{"line":263,"column":109}},"60":{"start":{"line":265,"column":20},"end":{"line":265,"column":109}},"61":{"start":{"line":267,"column":20},"end":{"line":267,"column":61}},"62":{"start":{"line":283,"column":16},"end":{"line":283,"column":126}},"63":{"start":{"line":295,"column":16},"end":{"line":296,"column":98}},"64":{"start":{"line":297,"column":16},"end":{"line":299,"column":17}},"65":{"start":{"line":298,"column":20},"end":{"line":298,"column":96}},"66":{"start":{"line":300,"column":16},"end":{"line":305,"column":17}},"67":{"start":{"line":301,"column":20},"end":{"line":301,"column":96}},"68":{"start":{"line":302,"column":20},"end":{"line":304,"column":21}},"69":{"start":{"line":303,"column":24},"end":{"line":303,"column":93}},"70":{"start":{"line":322,"column":16},"end":{"line":322,"column":51}},"71":{"start":{"line":323,"column":16},"end":{"line":323,"column":28}},"72":{"start":{"line":338,"column":16},"end":{"line":340,"column":17}},"73":{"start":{"line":339,"column":20},"end":{"line":339,"column":72}},"74":{"start":{"line":341,"column":16},"end":{"line":342,"column":93}},"75":{"start":{"line":343,"column":16},"end":{"line":343,"column":38}},"76":{"start":{"line":344,"column":16},"end":{"line":346,"column":19}},"77":{"start":{"line":345,"column":20},"end":{"line":345,"column":45}},"78":{"start":{"line":347,"column":16},"end":{"line":347,"column":30}},"79":{"start":{"line":363,"column":16},"end":{"line":365,"column":39}},"80":{"start":{"line":366,"column":16},"end":{"line":382,"column":17}},"81":{"start":{"line":367,"column":20},"end":{"line":369,"column":50}},"82":{"start":{"line":370,"column":20},"end":{"line":381,"column":21}},"83":{"start":{"line":372,"column":24},"end":{"line":374,"column":25}},"84":{"start":{"line":373,"column":28},"end":{"line":373,"column":37}},"85":{"start":{"line":375,"column":24},"end":{"line":375,"column":50}},"86":{"start":{"line":376,"column":24},"end":{"line":376,"column":80}},"87":{"start":{"line":378,"column":24},"end":{"line":380,"column":25}},"88":{"start":{"line":379,"column":28},"end":{"line":379,"column":93}},"89":{"start":{"line":383,"column":16},"end":{"line":397,"column":19}},"90":{"start":{"line":384,"column":20},"end":{"line":385,"column":46}},"91":{"start":{"line":386,"column":20},"end":{"line":389,"column":22}},"92":{"start":{"line":391,"column":20},"end":{"line":395,"column":21}},"93":{"start":{"line":392,"column":24},"end":{"line":394,"column":25}},"94":{"start":{"line":393,"column":28},"end":{"line":393,"column":56}},"95":{"start":{"line":396,"column":20},"end":{"line":396,"column":34}},"96":{"start":{"line":409,"column":16},"end":{"line":409,"column":53}},"97":{"start":{"line":410,"column":16},"end":{"line":410,"column":28}},"98":{"start":{"line":423,"column":16},"end":{"line":425,"column":17}},"99":{"start":{"line":424,"column":20},"end":{"line":424,"column":57}},"100":{"start":{"line":428,"column":16},"end":{"line":454,"column":17}},"101":{"start":{"line":429,"column":20},"end":{"line":431,"column":50}},"102":{"start":{"line":432,"column":20},"end":{"line":432,"column":88}},"103":{"start":{"line":433,"column":20},"end":{"line":451,"column":21}},"104":{"start":{"line":434,"column":24},"end":{"line":437,"column":25}},"105":{"start":{"line":436,"column":28},"end":{"line":436,"column":62}},"106":{"start":{"line":439,"column":24},"end":{"line":439,"column":66}},"107":{"start":{"line":440,"column":24},"end":{"line":440,"column":55}},"108":{"start":{"line":441,"column":24},"end":{"line":441,"column":65}},"109":{"start":{"line":442,"column":24},"end":{"line":444,"column":25}},"110":{"start":{"line":443,"column":28},"end":{"line":443,"column":148}},"111":{"start":{"line":445,"column":24},"end":{"line":445,"column":88}},"112":{"start":{"line":447,"column":24},"end":{"line":447,"column":58}},"113":{"start":{"line":448,"column":24},"end":{"line":448,"column":66}},"114":{"start":{"line":450,"column":24},"end":{"line":450,"column":58}},"115":{"start":{"line":453,"column":20},"end":{"line":453,"column":48}},"116":{"start":{"line":466,"column":16},"end":{"line":466,"column":105}},"117":{"start":{"line":479,"column":16},"end":{"line":479,"column":33}},"118":{"start":{"line":492,"column":16},"end":{"line":492,"column":54}},"119":{"start":{"line":493,"column":16},"end":{"line":493,"column":28}},"120":{"start":{"line":506,"column":16},"end":{"line":506,"column":32}},"121":{"start":{"line":507,"column":16},"end":{"line":511,"column":17}},"122":{"start":{"line":508,"column":20},"end":{"line":510,"column":23}},"123":{"start":{"line":513,"column":16},"end":{"line":515,"column":17}},"124":{"start":{"line":514,"column":20},"end":{"line":514,"column":27}},"125":{"start":{"line":517,"column":16},"end":{"line":528,"column":22}},"126":{"start":{"line":518,"column":20},"end":{"line":520,"column":21}},"127":{"start":{"line":519,"column":24},"end":{"line":519,"column":31}},"128":{"start":{"line":521,"column":20},"end":{"line":527,"column":21}},"129":{"start":{"line":522,"column":24},"end":{"line":522,"column":133}},"130":{"start":{"line":524,"column":24},"end":{"line":526,"column":25}},"131":{"start":{"line":525,"column":28},"end":{"line":525,"column":64}},"132":{"start":{"line":542,"column":16},"end":{"line":542,"column":35}},"133":{"start":{"line":543,"column":16},"end":{"line":544,"column":32}},"134":{"start":{"line":545,"column":16},"end":{"line":545,"column":79}},"135":{"start":{"line":547,"column":16},"end":{"line":549,"column":17}},"136":{"start":{"line":548,"column":20},"end":{"line":548,"column":33}},"137":{"start":{"line":551,"column":16},"end":{"line":556,"column":17}},"138":{"start":{"line":552,"column":20},"end":{"line":555,"column":26}},"139":{"start":{"line":553,"column":24},"end":{"line":553,"column":39}},"140":{"start":{"line":554,"column":24},"end":{"line":554,"column":60}},"141":{"start":{"line":558,"column":16},"end":{"line":558,"column":61}},"142":{"start":{"line":559,"column":16},"end":{"line":559,"column":46}},"143":{"start":{"line":560,"column":16},"end":{"line":560,"column":34}},"144":{"start":{"line":573,"column":16},"end":{"line":575,"column":32}},"145":{"start":{"line":576,"column":16},"end":{"line":587,"column":25}},"146":{"start":{"line":577,"column":20},"end":{"line":577,"column":57}},"147":{"start":{"line":578,"column":20},"end":{"line":586,"column":21}},"148":{"start":{"line":579,"column":24},"end":{"line":585,"column":27}},"149":{"start":{"line":580,"column":28},"end":{"line":584,"column":31}},"150":{"start":{"line":581,"column":32},"end":{"line":581,"column":75}},"151":{"start":{"line":582,"column":32},"end":{"line":582,"column":43}},"152":{"start":{"line":583,"column":32},"end":{"line":583,"column":57}},"153":{"start":{"line":591,"column":16},"end":{"line":611,"column":25}},"154":{"start":{"line":592,"column":20},"end":{"line":594,"column":21}},"155":{"start":{"line":593,"column":24},"end":{"line":593,"column":62}},"156":{"start":{"line":595,"column":20},"end":{"line":596,"column":41}},"157":{"start":{"line":598,"column":20},"end":{"line":600,"column":21}},"158":{"start":{"line":599,"column":24},"end":{"line":599,"column":31}},"159":{"start":{"line":602,"column":20},"end":{"line":604,"column":21}},"160":{"start":{"line":603,"column":24},"end":{"line":603,"column":40}},"161":{"start":{"line":605,"column":20},"end":{"line":610,"column":23}},"162":{"start":{"line":606,"column":24},"end":{"line":606,"column":62}},"163":{"start":{"line":607,"column":24},"end":{"line":609,"column":25}},"164":{"start":{"line":608,"column":28},"end":{"line":608,"column":66}},"165":{"start":{"line":619,"column":16},"end":{"line":630,"column":17}},"166":{"start":{"line":620,"column":20},"end":{"line":622,"column":21}},"167":{"start":{"line":621,"column":24},"end":{"line":621,"column":37}},"168":{"start":{"line":624,"column":20},"end":{"line":625,"column":86}},"169":{"start":{"line":626,"column":20},"end":{"line":628,"column":21}},"170":{"start":{"line":627,"column":24},"end":{"line":627,"column":37}},"171":{"start":{"line":629,"column":20},"end":{"line":629,"column":213}},"172":{"start":{"line":634,"column":16},"end":{"line":640,"column":25}},"173":{"start":{"line":636,"column":20},"end":{"line":638,"column":21}},"174":{"start":{"line":637,"column":24},"end":{"line":637,"column":31}},"175":{"start":{"line":639,"column":20},"end":{"line":639,"column":58}},"176":{"start":{"line":643,"column":16},"end":{"line":652,"column":19}},"177":{"start":{"line":644,"column":20},"end":{"line":644,"column":61}},"178":{"start":{"line":645,"column":20},"end":{"line":651,"column":21}},"179":{"start":{"line":646,"column":24},"end":{"line":646,"column":86}},"180":{"start":{"line":647,"column":24},"end":{"line":650,"column":27}},"181":{"start":{"line":648,"column":28},"end":{"line":648,"column":62}},"182":{"start":{"line":649,"column":28},"end":{"line":649,"column":72}},"183":{"start":{"line":655,"column":16},"end":{"line":657,"column":18}},"184":{"start":{"line":656,"column":20},"end":{"line":656,"column":60}},"185":{"start":{"line":658,"column":16},"end":{"line":658,"column":64}},"186":{"start":{"line":660,"column":16},"end":{"line":660,"column":62}},"187":{"start":{"line":675,"column":16},"end":{"line":676,"column":32}},"188":{"start":{"line":678,"column":16},"end":{"line":681,"column":17}},"189":{"start":{"line":679,"column":20},"end":{"line":679,"column":39}},"190":{"start":{"line":680,"column":20},"end":{"line":680,"column":33}},"191":{"start":{"line":683,"column":16},"end":{"line":683,"column":50}},"192":{"start":{"line":684,"column":16},"end":{"line":684,"column":67}},"193":{"start":{"line":685,"column":16},"end":{"line":685,"column":48}},"194":{"start":{"line":686,"column":16},"end":{"line":686,"column":35}},"195":{"start":{"line":688,"column":16},"end":{"line":719,"column":17}},"196":{"start":{"line":689,"column":20},"end":{"line":689,"column":68}},"197":{"start":{"line":691,"column":20},"end":{"line":708,"column":23}},"198":{"start":{"line":692,"column":24},"end":{"line":692,"column":69}},"199":{"start":{"line":693,"column":24},"end":{"line":707,"column":27}},"200":{"start":{"line":695,"column":28},"end":{"line":704,"column":29}},"201":{"start":{"line":696,"column":32},"end":{"line":696,"column":59}},"202":{"start":{"line":697,"column":32},"end":{"line":703,"column":33}},"203":{"start":{"line":700,"column":36},"end":{"line":700,"column":73}},"204":{"start":{"line":701,"column":36},"end":{"line":701,"column":46}},"205":{"start":{"line":702,"column":36},"end":{"line":702,"column":42}},"206":{"start":{"line":705,"column":28},"end":{"line":705,"column":71}},"207":{"start":{"line":706,"column":28},"end":{"line":706,"column":39}},"208":{"start":{"line":709,"column":20},"end":{"line":715,"column":23}},"209":{"start":{"line":710,"column":24},"end":{"line":710,"column":61}},"210":{"start":{"line":711,"column":24},"end":{"line":714,"column":25}},"211":{"start":{"line":713,"column":28},"end":{"line":713,"column":50}},"212":{"start":{"line":717,"column":20},"end":{"line":717,"column":57}},"213":{"start":{"line":718,"column":20},"end":{"line":718,"column":68}},"214":{"start":{"line":733,"column":16},"end":{"line":733,"column":65}},"215":{"start":{"line":740,"column":4},"end":{"line":740,"column":16}},"216":{"start":{"line":743,"column":0},"end":{"line":743,"column":26}},"217":{"start":{"line":751,"column":0},"end":{"line":751,"column":27}},"218":{"start":{"line":756,"column":0},"end":{"line":756,"column":53}},"219":{"start":{"line":758,"column":0},"end":{"line":758,"column":48}},"220":{"start":{"line":759,"column":0},"end":{"line":761,"column":3}}},"branchMap":{"1":{"line":56,"type":"if","locations":[{"start":{"line":56,"column":8},"end":{"line":56,"column":8}},{"start":{"line":56,"column":8},"end":{"line":56,"column":8}}]},"2":{"line":131,"type":"if","locations":[{"start":{"line":131,"column":20},"end":{"line":131,"column":20}},{"start":{"line":131,"column":20},"end":{"line":131,"column":20}}]},"3":{"line":176,"type":"cond-expr","locations":[{"start":{"line":176,"column":62},"end":{"line":176,"column":95}},{"start":{"line":176,"column":98},"end":{"line":176,"column":133}}]},"4":{"line":226,"type":"binary-expr","locations":[{"start":{"line":226,"column":34},"end":{"line":226,"column":70}},{"start":{"line":226,"column":74},"end":{"line":226,"column":105}},{"start":{"line":226,"column":109},"end":{"line":226,"column":129}}]},"5":{"line":233,"type":"if","locations":[{"start":{"line":233,"column":16},"end":{"line":233,"column":16}},{"start":{"line":233,"column":16},"end":{"line":233,"column":16}}]},"6":{"line":238,"type":"if","locations":[{"start":{"line":238,"column":16},"end":{"line":238,"column":16}},{"start":{"line":238,"column":16},"end":{"line":238,"column":16}}]},"7":{"line":249,"type":"cond-expr","locations":[{"start":{"line":249,"column":43},"end":{"line":255,"column":18}},{"start":{"line":255,"column":21},"end":{"line":258,"column":18}}]},"8":{"line":263,"type":"binary-expr","locations":[{"start":{"line":263,"column":21},"end":{"line":263,"column":51}},{"start":{"line":263,"column":55},"end":{"line":263,"column":90}}]},"9":{"line":283,"type":"cond-expr","locations":[{"start":{"line":283,"column":56},"end":{"line":283,"column":117}},{"start":{"line":283,"column":120},"end":{"line":283,"column":125}}]},"10":{"line":302,"type":"if","locations":[{"start":{"line":302,"column":20},"end":{"line":302,"column":20}},{"start":{"line":302,"column":20},"end":{"line":302,"column":20}}]},"11":{"line":338,"type":"if","locations":[{"start":{"line":338,"column":16},"end":{"line":338,"column":16}},{"start":{"line":338,"column":16},"end":{"line":338,"column":16}}]},"12":{"line":370,"type":"if","locations":[{"start":{"line":370,"column":20},"end":{"line":370,"column":20}},{"start":{"line":370,"column":20},"end":{"line":370,"column":20}}]},"13":{"line":372,"type":"if","locations":[{"start":{"line":372,"column":24},"end":{"line":372,"column":24}},{"start":{"line":372,"column":24},"end":{"line":372,"column":24}}]},"14":{"line":372,"type":"binary-expr","locations":[{"start":{"line":372,"column":28},"end":{"line":372,"column":49}},{"start":{"line":372,"column":53},"end":{"line":372,"column":68}}]},"15":{"line":378,"type":"if","locations":[{"start":{"line":378,"column":24},"end":{"line":378,"column":24}},{"start":{"line":378,"column":24},"end":{"line":378,"column":24}}]},"16":{"line":392,"type":"if","locations":[{"start":{"line":392,"column":24},"end":{"line":392,"column":24}},{"start":{"line":392,"column":24},"end":{"line":392,"column":24}}]},"17":{"line":423,"type":"if","locations":[{"start":{"line":423,"column":16},"end":{"line":423,"column":16}},{"start":{"line":423,"column":16},"end":{"line":423,"column":16}}]},"18":{"line":433,"type":"if","locations":[{"start":{"line":433,"column":20},"end":{"line":433,"column":20}},{"start":{"line":433,"column":20},"end":{"line":433,"column":20}}]},"19":{"line":433,"type":"binary-expr","locations":[{"start":{"line":433,"column":24},"end":{"line":433,"column":32}},{"start":{"line":433,"column":36},"end":{"line":433,"column":51}}]},"20":{"line":434,"type":"if","locations":[{"start":{"line":434,"column":24},"end":{"line":434,"column":24}},{"start":{"line":434,"column":24},"end":{"line":434,"column":24}}]},"21":{"line":442,"type":"if","locations":[{"start":{"line":442,"column":24},"end":{"line":442,"column":24}},{"start":{"line":442,"column":24},"end":{"line":442,"column":24}}]},"22":{"line":507,"type":"if","locations":[{"start":{"line":507,"column":16},"end":{"line":507,"column":16}},{"start":{"line":507,"column":16},"end":{"line":507,"column":16}}]},"23":{"line":507,"type":"binary-expr","locations":[{"start":{"line":507,"column":20},"end":{"line":507,"column":34}},{"start":{"line":507,"column":38},"end":{"line":507,"column":65}}]},"24":{"line":513,"type":"if","locations":[{"start":{"line":513,"column":16},"end":{"line":513,"column":16}},{"start":{"line":513,"column":16},"end":{"line":513,"column":16}}]},"25":{"line":518,"type":"if","locations":[{"start":{"line":518,"column":20},"end":{"line":518,"column":20}},{"start":{"line":518,"column":20},"end":{"line":518,"column":20}}]},"26":{"line":521,"type":"if","locations":[{"start":{"line":521,"column":20},"end":{"line":521,"column":20}},{"start":{"line":521,"column":20},"end":{"line":521,"column":20}}]},"27":{"line":521,"type":"binary-expr","locations":[{"start":{"line":521,"column":24},"end":{"line":521,"column":60}},{"start":{"line":521,"column":64},"end":{"line":521,"column":108}}]},"28":{"line":524,"type":"if","locations":[{"start":{"line":524,"column":24},"end":{"line":524,"column":24}},{"start":{"line":524,"column":24},"end":{"line":524,"column":24}}]},"29":{"line":547,"type":"if","locations":[{"start":{"line":547,"column":16},"end":{"line":547,"column":16}},{"start":{"line":547,"column":16},"end":{"line":547,"column":16}}]},"30":{"line":551,"type":"if","locations":[{"start":{"line":551,"column":16},"end":{"line":551,"column":16}},{"start":{"line":551,"column":16},"end":{"line":551,"column":16}}]},"31":{"line":578,"type":"if","locations":[{"start":{"line":578,"column":20},"end":{"line":578,"column":20}},{"start":{"line":578,"column":20},"end":{"line":578,"column":20}}]},"32":{"line":592,"type":"if","locations":[{"start":{"line":592,"column":20},"end":{"line":592,"column":20}},{"start":{"line":592,"column":20},"end":{"line":592,"column":20}}]},"33":{"line":598,"type":"if","locations":[{"start":{"line":598,"column":20},"end":{"line":598,"column":20}},{"start":{"line":598,"column":20},"end":{"line":598,"column":20}}]},"34":{"line":602,"type":"if","locations":[{"start":{"line":602,"column":20},"end":{"line":602,"column":20}},{"start":{"line":602,"column":20},"end":{"line":602,"column":20}}]},"35":{"line":607,"type":"if","locations":[{"start":{"line":607,"column":24},"end":{"line":607,"column":24}},{"start":{"line":607,"column":24},"end":{"line":607,"column":24}}]},"36":{"line":620,"type":"if","locations":[{"start":{"line":620,"column":20},"end":{"line":620,"column":20}},{"start":{"line":620,"column":20},"end":{"line":620,"column":20}}]},"37":{"line":626,"type":"if","locations":[{"start":{"line":626,"column":20},"end":{"line":626,"column":20}},{"start":{"line":626,"column":20},"end":{"line":626,"column":20}}]},"38":{"line":629,"type":"binary-expr","locations":[{"start":{"line":629,"column":29},"end":{"line":629,"column":48}},{"start":{"line":629,"column":52},"end":{"line":629,"column":69}},{"start":{"line":629,"column":73},"end":{"line":629,"column":90}},{"start":{"line":629,"column":94},"end":{"line":629,"column":211}}]},"39":{"line":629,"type":"binary-expr","locations":[{"start":{"line":629,"column":96},"end":{"line":629,"column":131}},{"start":{"line":629,"column":135},"end":{"line":629,"column":169}},{"start":{"line":629,"column":173},"end":{"line":629,"column":210}}]},"40":{"line":636,"type":"if","locations":[{"start":{"line":636,"column":20},"end":{"line":636,"column":20}},{"start":{"line":636,"column":20},"end":{"line":636,"column":20}}]},"41":{"line":645,"type":"if","locations":[{"start":{"line":645,"column":20},"end":{"line":645,"column":20}},{"start":{"line":645,"column":20},"end":{"line":645,"column":20}}]},"42":{"line":678,"type":"if","locations":[{"start":{"line":678,"column":16},"end":{"line":678,"column":16}},{"start":{"line":678,"column":16},"end":{"line":678,"column":16}}]},"43":{"line":688,"type":"if","locations":[{"start":{"line":688,"column":16},"end":{"line":688,"column":16}},{"start":{"line":688,"column":16},"end":{"line":688,"column":16}}]},"44":{"line":697,"type":"if","locations":[{"start":{"line":697,"column":32},"end":{"line":697,"column":32}},{"start":{"line":697,"column":32},"end":{"line":697,"column":32}}]},"45":{"line":711,"type":"if","locations":[{"start":{"line":711,"column":24},"end":{"line":711,"column":24}},{"start":{"line":711,"column":24},"end":{"line":711,"column":24}}]}},"code":["\"use strict\";","","var _core = require(\"6to5-runtime/core-js\");","","/*global Form, HTMLFormElement*/","","var Tooltip = to5Runtime.interopRequire(require(\"Tooltip\"));","","var fetch = to5Runtime.interopRequire(require(\"fetch\"));","","var Event = to5Runtime.interopRequire(require(\"util/Event\"));","","var ERROR_CLASS_NAME = \"form-error\";","var INPUT_ERROR_CLASS = \"invalid\";","var LOADING_CLASS = \"loading\";","var ARIA_INVALID = \"aria-invalid\";","var REMOTE = \"data-remote\";","var REMOTE_ACTION = \"data-remote-action\";","var ATTR_DISABLE_INLINE = \"data-disable-inline-validation\";","var ATTR_VALIDATOR = \"data-validate\";","","","/**"," * Triggered when form is fully initialized and handlers are binded"," * @type {string}"," */","var EVENT_FORM_READY = exports.EVENT_FORM_READY = \"flexcss.form.ready\";","/**"," * Fires when a form is submitted, cancelable"," * @type {string}"," */","var EVENT_FORM_SUBMIT = exports.EVENT_FORM_SUBMIT = \"flexcss.form.submit\";","/**"," * Fired directly after the form has been submitted via ajax"," * @type {string}"," */","var EVENT_FORM_AFTER_AJAX_SUBMIT = exports.EVENT_FORM_AFTER_AJAX_SUBMIT = \"flexcss.form.afterAjaxSubmit\";","/**"," * Fired when ajax events did complete"," * @type {string}"," */","var EVENT_FORM_AJAX_COMPLETED = exports.EVENT_FORM_AJAX_COMPLETED = \"flexcss.form.ajaxCompleted\";","","/**"," * A HTML5 Form Validation replacement"," */","","var Form = (function () {","    /**","     * @param {HTMLElement} form","     * @param [options] optional options","     */","    function Form(form, options) {","        to5Runtime.classCallCheck(this, Form);","","        if (!(form instanceof HTMLFormElement)) {","            throw \"argument {0} form needs to be an form element\";","        }","","        /**","         * The Form","         * @type {HTMLElement}","         */","        this.form = form;","","        /**","         * @type {Tooltip}","         */","        this.tooltips = null;","","        /**","         * @type {Promise}","         */","        this.currentValidationFuture = new _core.Promise(function () {});","","        /**","         * Default options","         * @type {Object}","         */","        this.options = {","            // if true creates tooltips above element, uses FlexCss Tooltips","            createTooltips: true,","            // if true appends error message after input element","            appendError: false,","            // type of ajax submit","            ajaxSubmitType: \"POST\",","            // json content type if ajax method is set to json","            ajaxJsonContentType: \"application/json; charset=utf-8\",","            // allow inline validation","            inlineValidation: true","        };","","        // overwrite default options","        _core.Object.assign(this.options, options);","","        // set form class as widget","        // Forms are very different to classical widgets,","        // we will not use our base widget class for this but just self","        form.hfWidgetInstance = this;","","        /**","         * A List of Validators","         * @type {Object}","         * @private","         */","        this._validators = Form.globalValidators;","","        /**","         * @type {Function}","         * @private","         */","        this._remoteValidationFunction = null;","","        this.initFormValidation();","    }","","    to5Runtime.prototypeProperties(Form, {","        _createArrayFromInvalidFieldList: {","","            /**","             * Creates an array from a node list with invalid items","             * On Firefox also Fieldset's seems to be invalid, remove them","             * @param list","             * @returns {Array}","             * @private","             */","            value: function _createArrayFromInvalidFieldList(list) {","                var arr = [];","                for (var i = 0; i < list.length; ++i) {","                    var n = list[i];","                    if (!(n instanceof HTMLFieldSetElement)) {","                        arr.push(n);","                    }","                }","                return arr;","            },","            writable: true,","            configurable: true","        },","        _formatErrorTooltip: {","","","            /**","             * Formats the error content for the tooltip","             * @param {String} error","             * @returns {String}","             * @private","             */","            value: function _formatErrorTooltip(error) {","                return \"<i class=\\\"icon-attention\\\"></i> \" + error;","            },","            writable: true,","            configurable: true","        },","        registerErrorMessageHandler: {","","","            /**","             * Registers a global event Handler","             * @param errorFunc","             */","            value: function registerErrorMessageHandler(errorFunc) {","                Form.globalErrorMessageHandler = errorFunc;","            },","            writable: true,","            configurable: true","        },","        init: {","","            /**","             * Initialize forms for a specific selector","             * @param {String} selector","             * @param {Object} options","             */","            value: function init(selector, options) {","                var forms = selector instanceof HTMLElement ? selector.querySelectorAll(\"form\") : document.querySelectorAll(selector);","                for (var i = 0; i < forms.length; i++) {","                    new Form(forms[i], options);","                }","            },","            writable: true,","            configurable: true","        },","        registerValidator: {","","","            /**","             * Registers a global validator that is usable on all form instances","             * @param {String} name","             * @param {Function} validator","             * @returns {Function}","             */","            value: function registerValidator(name, validator) {","                Form.globalValidators[name] = validator;","                return Form;","            },","            writable: true,","            configurable: true","        },","        registerGlobalRemoteValidationFunction: {","","            /**","             * Registers a global function that is called when a form should validate the response of a server","             * @param {Function} func","             * @returns {Form}","             */","            value: function registerGlobalRemoteValidationFunction(func) {","                Form.globalRemoteValidationFunction = func;","                return Form;","            },","            writable: true,","            configurable: true","        }","    }, {","        _submitFunction: {","","            /**","             * Submits this form, either via ajax or just classical (default)","             * @param {HTMLFormElement} thisForm","             * @param {Event} e","             * @private","             * @returns {Promise|boolean} returns false if submit is cancled","             */","            value: function _submitFunction(thisForm, e) {","                var shouldUseAjax = thisForm.getAttribute(REMOTE),","                    ajaxPostUrl = thisForm.getAttribute(REMOTE_ACTION) || thisForm.getAttribute(\"action\") || window.location.href,","                    useJson = \"json\" === shouldUseAjax,","                    self = this;","","                var ev = Event.dispatch(thisForm, EVENT_FORM_SUBMIT).withOriginal(e).fire();","","                // abort execution is event was prevented","                if (ev.defaultPrevented) {","                    thisForm.classList.remove(LOADING_CLASS);","                    return false;","                }","","                if (null === shouldUseAjax) {","                    // submit","                    return thisForm.submit();","                }","","                thisForm.classList.add(LOADING_CLASS);","","                // prevent form from submit normally","                e.preventDefault();","","                // support either JSON request payload or normal payload submission","                var serverCall = useJson ? fetch(ajaxPostUrl, {","                    headers: {","                        \"Content-Type\": this.options.ajaxJsonContentType","                    },","                    method: this.options.ajaxSubmitType,","                    body: JSON.stringify()","                }) : fetch(ajaxPostUrl, {","                    method: this.options.ajaxSubmitType,","                    body: new FormData(thisForm)","                });","","                Event.dispatch(thisForm, EVENT_FORM_AFTER_AJAX_SUBMIT).withOriginal(e).fire();","","                return serverCall.then(function (r) {","                    (self._remoteValidationFunction || Form.globalRemoteValidationFunction).apply(self, [r]);","","                    Event.dispatch(thisForm, EVENT_FORM_AJAX_COMPLETED).withOriginal(e).withDetail(r).fire();","                    // always remove error class","                    thisForm.classList.remove(LOADING_CLASS);","                });","            },","            writable: true,","            configurable: true","        },","        _setupErrorMessages: {","","            /**","             * @param {HTMLElement} field","             * @param {ValidityState} validity","             * @returns {*}","             * @private","             */","","            value: function _setupErrorMessages(field, validity) {","                return Form.globalErrorMessageHandler ? Form.globalErrorMessageHandler.apply(this, [field, validity]) : false;","            },","            writable: true,","            configurable: true","        },","        _removeElementErrors: {","","            /**","             * @param {HTMLElement} thisParent","             * @private","             */","            value: function _removeElementErrors(thisParent) {","                var errors = thisParent.querySelectorAll(\".\" + ERROR_CLASS_NAME),","                    inputsWithErrorClasses = thisParent.querySelectorAll(\".\" + INPUT_ERROR_CLASS);","                for (var elementErrorIndex = 0; elementErrorIndex < errors.length; elementErrorIndex++) {","                    errors[elementErrorIndex].parentNode.removeChild(errors[elementErrorIndex]);","                }","                for (var inputErrorIndex = 0; inputErrorIndex < inputsWithErrorClasses.length; inputErrorIndex++) {","                    inputsWithErrorClasses[inputErrorIndex].classList.remove(INPUT_ERROR_CLASS);","                    if (this.tooltips) {","                        this.tooltips.removeTooltip(inputsWithErrorClasses[inputErrorIndex]);","                    }","                }","            },","            writable: true,","            configurable: true","        },","        registerValidator: {","","","            /**","             * Registers a custom validator","             * @param {String} name","             * @param {Function} validator a validation function should always return either a Future(true) or Future(false)","             * even when the field has been invalidated with `setCustomValidity`, because of different browser `bugs`","             * we can't rely on that","             * @returns {Form}","             */","            value: function registerValidator(name, validator) {","                this._validators[name] = validator;","                return this;","            },","            writable: true,","            configurable: true","        },","        _runValidation: {","","            /**","             * Runs async validation","             * @param {String} validationRef","             * @param {HTMLElement} field","             * @returns {Promise}","             * @private","             */","            value: function _runValidation(validationRef, field) {","                if (!this._validators[validationRef]) {","                    throw \"Could not found validator: \" + validationRef;","                }","                var cl = field.classList,","                    future = this._validators[validationRef].apply(this, [field, this.form]);","                cl.add(LOADING_CLASS);","                future.then(function () {","                    cl.remove(LOADING_CLASS);","                });","                return future;","            },","            writable: true,","            configurable: true","        },","        _customValidationsForElements: {","","","            /**","             * Run custom validations for elements, validations are done async do support XHR Requests or other stuff","             *","             * @param {Array|NodeList} fields","             * @returns {Promise} contains either true if validations passed or false if something went wrong","             * @private","             */","            value: function _customValidationsForElements(fields) {","                var futures = [],","                    fieldsLength = fields.length,","                    checkedFields = [];","                for (var iVal = 0; iVal < fieldsLength; iVal++) {","                    var field = fields[iVal],","                        validationRef = field.getAttribute(ATTR_VALIDATOR),","                        validity = field.validity;","                    if (this._validators[validationRef]) {","                        // use local validation first and then continue with custom validations","                        if (!validity.customError && !validity.valid) {","                            continue;","                        }","                        checkedFields.push(field);","                        futures.push(this._runValidation(validationRef, field));","                    } else {","                        if (validationRef) {","                            console.warn(\"data-validate was set but no validator was found\");","                        }","                    }","                }","                return _core.Promise.all(futures).then(function () {","                    var allFutures = arguments,","                        l = allFutures.length;","                    var result = {","                        checkedFields: checkedFields,","                        foundAnyError: false","                    };","","                    for (var fI = 0; fI < l; fI++) {","                        if (!allFutures[fI]) {","                            result.foundAnyError = true;","                        }","                    }","                    return result;","                });","            },","            writable: true,","            configurable: true","        },","        removeErrors: {","","            /**","             * Remove all errors for this form","             * @returns {Form}","             */","            value: function removeErrors() {","                this._removeElementErrors(this.form);","                return this;","            },","            writable: true,","            configurable: true","        },","        prepareErrors: {","","            /**","             * Will handle errors for given fields","             * @param {Array|NodeList} fields","             * @param {Boolean} removeAllErrors","             */","            value: function prepareErrors(fields, removeAllErrors) {","                if (removeAllErrors) {","                    this._removeElementErrors(this.form);","                }","                // We save all validations in an extra property because we need to reset the validity due some","                // implementation errors in other browsers then chrome","                for (var i = 0; i < fields.length; i++) {","                    var field = fields[i],","                        parent = field.parentNode,","                        validity = field.validity;","                    field.flexFormsSavedValidity = JSON.parse(JSON.stringify(validity));","                    if (validity && !validity.valid) {","                        if (!removeAllErrors) {","                            // Remove current errors:","                            this._removeElementErrors(parent);","                        }","                        // setup custom error messages:","                        this._setupErrorMessages(field, validity);","                        field.classList.add(\"invalid\");","                        field.setAttribute(ARIA_INVALID, \"true\");","                        if (this.options.appendError) {","                            parent.insertAdjacentHTML(\"beforeend\", \"<div class=\\\"\" + ERROR_CLASS_NAME + \"\\\">\" + field.validationMessage + \"</div>\");","                        }","                        field.flexFormsSavedValidationMessage = field.validationMessage;","                    } else {","                        field.classList.remove(\"invalid\");","                        field.setAttribute(ARIA_INVALID, \"false\");","","                        this._removeElementErrors(parent);","                    }","                    // FIXME: We have to reset the custom validity here to allow native validations work again","                    field.setCustomValidity(\"\");","                }","            },","            writable: true,","            configurable: true","        },","        validateCustomFields: {","","            /**","             * Validates all custom fields","             * @returns {Promise}","             */","            value: function validateCustomFields() {","                return this._customValidationsForElements(this.form.querySelectorAll(\"[data-validate]\"));","            },","            writable: true,","            configurable: true","        },","        getForm: {","","","            /**","             * This form","             * @returns {HTMLElement}","             */","            value: function getForm() {","                return this.form;","            },","            writable: true,","            configurable: true","        },","        registerRemoteValidation: {","","            /**","             * Registers a function that handles remote validation","             * @param {Function} func","             * @returns {Form}","             */","            value: function registerRemoteValidation(func) {","                this._remoteValidationFunction = func;","                return this;","            },","            writable: true,","            configurable: true","        },","        showAndOrCreateTooltip: {","","            /**","             * Creates a tooltip at given element, will only create a new instance if not created","             * @param {HTMLElement} target","             * @param {Boolean} [remove]","             */","            value: function showAndOrCreateTooltip(target, remove) {","                var self = this;","                if (!this.tooltips && this.options.createTooltips) {","                    this.tooltips = new Tooltip(this.getForm(), {","                        containerClass: \"error-tooltip\"","                    });","                }","","                if (!this.options.createTooltips) {","                    return;","                }","","                setTimeout(function () {","                    if (!target.flexFormsSavedValidity) {","                        return;","                    }","                    if (!target.flexFormsSavedValidity.valid && target.classList.contains(INPUT_ERROR_CLASS)) {","                        self.tooltips.createTooltip(target, Form._formatErrorTooltip(target.flexFormsSavedValidationMessage), false);","                    } else {","                        if (remove) {","                            self.tooltips.removeTooltip(target);","                        }","                    }","                }, 0);","            },","            writable: true,","            configurable: true","        },","        _checkIsInvalid: {","","            /**","             * Handles invalid event of a form","             * @param {Event} e","             * @returns {Promise|boolean}","             * @private","             */","            value: function _checkIsInvalid(e) {","                e.preventDefault();","                var invalidFields = this.getForm().querySelectorAll(\":invalid\"),","                    self = this;","                var arr = Form._createArrayFromInvalidFieldList(invalidFields);","                // Prevent fire this N times:","                if (arr.indexOf(e.target) > 0) {","                    return false;","                }","                // focus the first field:","                if (arr.length > 0) {","                    setTimeout(function () {","                        arr[0].focus();","                        self.showAndOrCreateTooltip(arr[0]);","                    }, 0);","                }","","                var validation = self.validateCustomFields();","                this.prepareErrors(arr, true);","                return validation;","            },","            writable: true,","            configurable: true","        },","        initFormValidation: {","","","            /**","             * Initializes validation for a given form, registers event handlers","             */","            value: function initFormValidation() {","                // Suppress the default bubbles","                var form = this.getForm(),","                    invalidFormFired = false,","                    self = this;","                form.addEventListener(\"invalid\", function (e) {","                    var result = self._checkIsInvalid(e);","                    if (result) {","                        this.currentValidationFuture = new _core.Promise(function (resolve) {","                            result.then(function (r) {","                                self.prepareErrors(r.checkedFields, false);","                                resolve(r);","                                invalidFormFired = false;","                            });","                        });","                    }","                }, true);","","                // handle focus out for text elements","                // Will show an error if field was invalid the first time","                form.addEventListener(\"blur\", function (e) {","                    if (self.tooltips) {","                        self.tooltips.removeTooltip(e.target);","                    }","                    var target = e.target,","                        hasError = false;","","                    if (!_checkIsValidBlurFocusElement(target)) {","                        return;","                    }","","                    if (target.classList.contains(INPUT_ERROR_CLASS)) {","                        hasError = true;","                    }","                    self._customValidationsForElements([e.target]).then(function () {","                        self.prepareErrors([e.target], false);","                        if (!hasError) {","                            self.showAndOrCreateTooltip(e.target);","                        }","                    });","                }, true);","","                /**","                 * Validates if target is a valid input field to check blur and focus events","                 *","                 * @param {HTMLElement} target","                 * @returns {boolean}","                 */","                function _checkIsValidBlurFocusElement(target) {","                    if (!self.options.inlineValidation) {","                        return false;","                    }","","                    var attr = target.getAttribute(\"type\"),","                        maybeDisableOnBlur = target.hasAttribute(ATTR_DISABLE_INLINE);","                    if (maybeDisableOnBlur) {","                        return false;","                    }","                    return !(attr === \"checkbox\" || attr === \"option\" || attr === \"submit\" || !(target instanceof HTMLSelectElement || target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement));","                }","","                // handle focus on input elements","                // will show an error if field is invalid","                form.addEventListener(\"focus\", function (e) {","                    // do not track errors for checkbox and radios on focus:","                    if (!_checkIsValidBlurFocusElement(e.target)) {","                        return;","                    }","                    self.showAndOrCreateTooltip(e.target);","                }, true);","","                // Handle change for checkbox, radios and selects","                form.addEventListener(\"change\", function (e) {","                    var name = e.target.getAttribute(\"name\");","                    if (name) {","                        var inputs = form.querySelectorAll(\"[name=\\\"\" + name + \"\\\"]\");","                        self._customValidationsForElements(inputs).then(function () {","                            self.prepareErrors(inputs, false);","                            self.showAndOrCreateTooltip(e.target, true);","                        });","                    }","                });","","                // prevent default if form is invalid","                var submitListener = function (e) {","                    self._submitListener(e, submitListener);","                };","                form.addEventListener(\"submit\", submitListener);","","                Event.dispatchAndFire(form, EVENT_FORM_READY);","            },","            writable: true,","            configurable: true","        },","        _submitListener: {","","            /**","             * Listener that is executed on form submit","             * @param e","             * @param submitListener","             * @returns {boolean}","             * @private","             */","            value: function _submitListener(e, submitListener) {","                var form = this.getForm(),","                    self = this;","","                if (form.classList.contains(LOADING_CLASS)) {","                    e.preventDefault();","                    return false;","                }","","                form.classList.add(LOADING_CLASS);","                form.removeEventListener(\"submit\", submitListener);","                this._removeElementErrors(form);","                e.preventDefault();","                // reset:","                if (form.checkValidity()) {","                    form.addEventListener(\"submit\", submitListener);","                    // Custom validations did never pass","                    self.currentValidationFuture = new _core.Promise(function (resolve) {","                        var validation = self.validateCustomFields();","                        validation.then(function (r) {","                            // focus first invalid field:","                            for (var i = 0; i < r.checkedFields.length; i++) {","                                var f = r.checkedFields[i];","                                if (!f.validity.valid) {","                                    // Focus element and show tooltip, we explicitly showing tooltip here, because","                                    // element might have focus already","                                    self.showAndOrCreateTooltip(f, true);","                                    f.focus();","                                    break;","                                }","                            }","                            self.prepareErrors(r.checkedFields, false);","                            resolve(r);","                        });","                    });","                    self.currentValidationFuture.then(function (r) {","                        form.classList.remove(LOADING_CLASS);","                        if (!r.foundAnyError) {","                            // Handle submitting the form to server:","                            self._handleSubmit(e);","                        }","                    });","                } else {","                    form.classList.remove(LOADING_CLASS);","                    form.addEventListener(\"submit\", submitListener);","                }","            },","            writable: true,","            configurable: true","        },","        _handleSubmit: {","","","            /**","             * Handles submitting, optionally allows to stop submitting","             * @param e","             * @private","             */","            value: function _handleSubmit(e) {","                this._submitFunction.apply(this, [this.form, e]);","            },","            writable: true,","            configurable: true","        }","    });","","    return Form;","})();","","exports[\"default\"] = Form;","","","","/**"," * Global validators"," * @type {Array}"," */","Form.globalValidators = [];","","/**"," * Global Remote validation function"," */","Form.globalRemoteValidationFunction = function () {};","","Form.globalErrorMessageHandler = function () {};","Object.defineProperty(exports, \"__esModule\", {","    value: true","});","","/*Form.serializeFormJSON($(thisForm))*/"]};
	}
	__cov_ne9d3bYaB94HPejJeu9yEA = __cov_ne9d3bYaB94HPejJeu9yEA['/Users/bowlingx/Projekte/flexcss/src/main/Form.js'];
	__cov_ne9d3bYaB94HPejJeu9yEA.s['1']++;var _core=__webpack_require__(9);__cov_ne9d3bYaB94HPejJeu9yEA.s['2']++;var Tooltip=to5Runtime.interopRequire(__webpack_require__(2));__cov_ne9d3bYaB94HPejJeu9yEA.s['3']++;var fetch=to5Runtime.interopRequire(__webpack_require__(10));__cov_ne9d3bYaB94HPejJeu9yEA.s['4']++;var Event=to5Runtime.interopRequire(__webpack_require__(7));__cov_ne9d3bYaB94HPejJeu9yEA.s['5']++;var ERROR_CLASS_NAME='form-error';__cov_ne9d3bYaB94HPejJeu9yEA.s['6']++;var INPUT_ERROR_CLASS='invalid';__cov_ne9d3bYaB94HPejJeu9yEA.s['7']++;var LOADING_CLASS='loading';__cov_ne9d3bYaB94HPejJeu9yEA.s['8']++;var ARIA_INVALID='aria-invalid';__cov_ne9d3bYaB94HPejJeu9yEA.s['9']++;var REMOTE='data-remote';__cov_ne9d3bYaB94HPejJeu9yEA.s['10']++;var REMOTE_ACTION='data-remote-action';__cov_ne9d3bYaB94HPejJeu9yEA.s['11']++;var ATTR_DISABLE_INLINE='data-disable-inline-validation';__cov_ne9d3bYaB94HPejJeu9yEA.s['12']++;var ATTR_VALIDATOR='data-validate';__cov_ne9d3bYaB94HPejJeu9yEA.s['13']++;var EVENT_FORM_READY=exports.EVENT_FORM_READY='flexcss.form.ready';__cov_ne9d3bYaB94HPejJeu9yEA.s['14']++;var EVENT_FORM_SUBMIT=exports.EVENT_FORM_SUBMIT='flexcss.form.submit';__cov_ne9d3bYaB94HPejJeu9yEA.s['15']++;var EVENT_FORM_AFTER_AJAX_SUBMIT=exports.EVENT_FORM_AFTER_AJAX_SUBMIT='flexcss.form.afterAjaxSubmit';__cov_ne9d3bYaB94HPejJeu9yEA.s['16']++;var EVENT_FORM_AJAX_COMPLETED=exports.EVENT_FORM_AJAX_COMPLETED='flexcss.form.ajaxCompleted';__cov_ne9d3bYaB94HPejJeu9yEA.s['17']++;var Form=function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['1']++;function Form(form,options){__cov_ne9d3bYaB94HPejJeu9yEA.f['2']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['19']++;to5Runtime.classCallCheck(this,Form);__cov_ne9d3bYaB94HPejJeu9yEA.s['20']++;if(!(form instanceof HTMLFormElement)){__cov_ne9d3bYaB94HPejJeu9yEA.b['1'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['21']++;throw'argument {0} form needs to be an form element';}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['1'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['22']++;this.form=form;__cov_ne9d3bYaB94HPejJeu9yEA.s['23']++;this.tooltips=null;__cov_ne9d3bYaB94HPejJeu9yEA.s['24']++;this.currentValidationFuture=new _core.Promise(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['3']++;});__cov_ne9d3bYaB94HPejJeu9yEA.s['25']++;this.options={createTooltips:true,appendError:false,ajaxSubmitType:'POST',ajaxJsonContentType:'application/json; charset=utf-8',inlineValidation:true};__cov_ne9d3bYaB94HPejJeu9yEA.s['26']++;_core.Object.assign(this.options,options);__cov_ne9d3bYaB94HPejJeu9yEA.s['27']++;form.hfWidgetInstance=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['28']++;this._validators=Form.globalValidators;__cov_ne9d3bYaB94HPejJeu9yEA.s['29']++;this._remoteValidationFunction=null;__cov_ne9d3bYaB94HPejJeu9yEA.s['30']++;this.initFormValidation();}__cov_ne9d3bYaB94HPejJeu9yEA.s['31']++;to5Runtime.prototypeProperties(Form,{_createArrayFromInvalidFieldList:{value:function _createArrayFromInvalidFieldList(list){__cov_ne9d3bYaB94HPejJeu9yEA.f['4']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['32']++;var arr=[];__cov_ne9d3bYaB94HPejJeu9yEA.s['33']++;for(var i=0;i<list.length;++i){__cov_ne9d3bYaB94HPejJeu9yEA.s['34']++;var n=list[i];__cov_ne9d3bYaB94HPejJeu9yEA.s['35']++;if(!(n instanceof HTMLFieldSetElement)){__cov_ne9d3bYaB94HPejJeu9yEA.b['2'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['36']++;arr.push(n);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['2'][1]++;}}__cov_ne9d3bYaB94HPejJeu9yEA.s['37']++;return arr;},writable:true,configurable:true},_formatErrorTooltip:{value:function _formatErrorTooltip(error){__cov_ne9d3bYaB94HPejJeu9yEA.f['5']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['38']++;return'<i class="icon-attention"></i> '+error;},writable:true,configurable:true},registerErrorMessageHandler:{value:function registerErrorMessageHandler(errorFunc){__cov_ne9d3bYaB94HPejJeu9yEA.f['6']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['39']++;Form.globalErrorMessageHandler=errorFunc;},writable:true,configurable:true},init:{value:function init(selector,options){__cov_ne9d3bYaB94HPejJeu9yEA.f['7']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['40']++;var forms=selector instanceof HTMLElement?(__cov_ne9d3bYaB94HPejJeu9yEA.b['3'][0]++,selector.querySelectorAll('form')):(__cov_ne9d3bYaB94HPejJeu9yEA.b['3'][1]++,document.querySelectorAll(selector));__cov_ne9d3bYaB94HPejJeu9yEA.s['41']++;for(var i=0;i<forms.length;i++){__cov_ne9d3bYaB94HPejJeu9yEA.s['42']++;new Form(forms[i],options);}},writable:true,configurable:true},registerValidator:{value:function registerValidator(name,validator){__cov_ne9d3bYaB94HPejJeu9yEA.f['8']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['43']++;Form.globalValidators[name]=validator;__cov_ne9d3bYaB94HPejJeu9yEA.s['44']++;return Form;},writable:true,configurable:true},registerGlobalRemoteValidationFunction:{value:function registerGlobalRemoteValidationFunction(func){__cov_ne9d3bYaB94HPejJeu9yEA.f['9']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['45']++;Form.globalRemoteValidationFunction=func;__cov_ne9d3bYaB94HPejJeu9yEA.s['46']++;return Form;},writable:true,configurable:true}},{_submitFunction:{value:function _submitFunction(thisForm,e){__cov_ne9d3bYaB94HPejJeu9yEA.f['10']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['47']++;var shouldUseAjax=thisForm.getAttribute(REMOTE),ajaxPostUrl=(__cov_ne9d3bYaB94HPejJeu9yEA.b['4'][0]++,thisForm.getAttribute(REMOTE_ACTION))||(__cov_ne9d3bYaB94HPejJeu9yEA.b['4'][1]++,thisForm.getAttribute('action'))||(__cov_ne9d3bYaB94HPejJeu9yEA.b['4'][2]++,window.location.href),useJson='json'===shouldUseAjax,self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['48']++;var ev=Event.dispatch(thisForm,EVENT_FORM_SUBMIT).withOriginal(e).fire();__cov_ne9d3bYaB94HPejJeu9yEA.s['49']++;if(ev.defaultPrevented){__cov_ne9d3bYaB94HPejJeu9yEA.b['5'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['50']++;thisForm.classList.remove(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['51']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['5'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['52']++;if(null===shouldUseAjax){__cov_ne9d3bYaB94HPejJeu9yEA.b['6'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['53']++;return thisForm.submit();}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['6'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['54']++;thisForm.classList.add(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['55']++;e.preventDefault();__cov_ne9d3bYaB94HPejJeu9yEA.s['56']++;var serverCall=useJson?(__cov_ne9d3bYaB94HPejJeu9yEA.b['7'][0]++,fetch(ajaxPostUrl,{headers:{'Content-Type':this.options.ajaxJsonContentType},method:this.options.ajaxSubmitType,body:JSON.stringify()})):(__cov_ne9d3bYaB94HPejJeu9yEA.b['7'][1]++,fetch(ajaxPostUrl,{method:this.options.ajaxSubmitType,body:new FormData(thisForm)}));__cov_ne9d3bYaB94HPejJeu9yEA.s['57']++;Event.dispatch(thisForm,EVENT_FORM_AFTER_AJAX_SUBMIT).withOriginal(e).fire();__cov_ne9d3bYaB94HPejJeu9yEA.s['58']++;return serverCall.then(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['11']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['59']++;((__cov_ne9d3bYaB94HPejJeu9yEA.b['8'][0]++,self._remoteValidationFunction)||(__cov_ne9d3bYaB94HPejJeu9yEA.b['8'][1]++,Form.globalRemoteValidationFunction)).apply(self,[r]);__cov_ne9d3bYaB94HPejJeu9yEA.s['60']++;Event.dispatch(thisForm,EVENT_FORM_AJAX_COMPLETED).withOriginal(e).withDetail(r).fire();__cov_ne9d3bYaB94HPejJeu9yEA.s['61']++;thisForm.classList.remove(LOADING_CLASS);});},writable:true,configurable:true},_setupErrorMessages:{value:function _setupErrorMessages(field,validity){__cov_ne9d3bYaB94HPejJeu9yEA.f['12']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['62']++;return Form.globalErrorMessageHandler?(__cov_ne9d3bYaB94HPejJeu9yEA.b['9'][0]++,Form.globalErrorMessageHandler.apply(this,[field,validity])):(__cov_ne9d3bYaB94HPejJeu9yEA.b['9'][1]++,false);},writable:true,configurable:true},_removeElementErrors:{value:function _removeElementErrors(thisParent){__cov_ne9d3bYaB94HPejJeu9yEA.f['13']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['63']++;var errors=thisParent.querySelectorAll('.'+ERROR_CLASS_NAME),inputsWithErrorClasses=thisParent.querySelectorAll('.'+INPUT_ERROR_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['64']++;for(var elementErrorIndex=0;elementErrorIndex<errors.length;elementErrorIndex++){__cov_ne9d3bYaB94HPejJeu9yEA.s['65']++;errors[elementErrorIndex].parentNode.removeChild(errors[elementErrorIndex]);}__cov_ne9d3bYaB94HPejJeu9yEA.s['66']++;for(var inputErrorIndex=0;inputErrorIndex<inputsWithErrorClasses.length;inputErrorIndex++){__cov_ne9d3bYaB94HPejJeu9yEA.s['67']++;inputsWithErrorClasses[inputErrorIndex].classList.remove(INPUT_ERROR_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['68']++;if(this.tooltips){__cov_ne9d3bYaB94HPejJeu9yEA.b['10'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['69']++;this.tooltips.removeTooltip(inputsWithErrorClasses[inputErrorIndex]);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['10'][1]++;}}},writable:true,configurable:true},registerValidator:{value:function registerValidator(name,validator){__cov_ne9d3bYaB94HPejJeu9yEA.f['14']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['70']++;this._validators[name]=validator;__cov_ne9d3bYaB94HPejJeu9yEA.s['71']++;return this;},writable:true,configurable:true},_runValidation:{value:function _runValidation(validationRef,field){__cov_ne9d3bYaB94HPejJeu9yEA.f['15']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['72']++;if(!this._validators[validationRef]){__cov_ne9d3bYaB94HPejJeu9yEA.b['11'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['73']++;throw'Could not found validator: '+validationRef;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['11'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['74']++;var cl=field.classList,future=this._validators[validationRef].apply(this,[field,this.form]);__cov_ne9d3bYaB94HPejJeu9yEA.s['75']++;cl.add(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['76']++;future.then(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['16']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['77']++;cl.remove(LOADING_CLASS);});__cov_ne9d3bYaB94HPejJeu9yEA.s['78']++;return future;},writable:true,configurable:true},_customValidationsForElements:{value:function _customValidationsForElements(fields){__cov_ne9d3bYaB94HPejJeu9yEA.f['17']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['79']++;var futures=[],fieldsLength=fields.length,checkedFields=[];__cov_ne9d3bYaB94HPejJeu9yEA.s['80']++;for(var iVal=0;iVal<fieldsLength;iVal++){__cov_ne9d3bYaB94HPejJeu9yEA.s['81']++;var field=fields[iVal],validationRef=field.getAttribute(ATTR_VALIDATOR),validity=field.validity;__cov_ne9d3bYaB94HPejJeu9yEA.s['82']++;if(this._validators[validationRef]){__cov_ne9d3bYaB94HPejJeu9yEA.b['12'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['83']++;if((__cov_ne9d3bYaB94HPejJeu9yEA.b['14'][0]++,!validity.customError)&&(__cov_ne9d3bYaB94HPejJeu9yEA.b['14'][1]++,!validity.valid)){__cov_ne9d3bYaB94HPejJeu9yEA.b['13'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['84']++;continue;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['13'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['85']++;checkedFields.push(field);__cov_ne9d3bYaB94HPejJeu9yEA.s['86']++;futures.push(this._runValidation(validationRef,field));}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['12'][1]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['87']++;if(validationRef){__cov_ne9d3bYaB94HPejJeu9yEA.b['15'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['88']++;console.warn('data-validate was set but no validator was found');}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['15'][1]++;}}}__cov_ne9d3bYaB94HPejJeu9yEA.s['89']++;return _core.Promise.all(futures).then(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['18']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['90']++;var allFutures=arguments,l=allFutures.length;__cov_ne9d3bYaB94HPejJeu9yEA.s['91']++;var result={checkedFields:checkedFields,foundAnyError:false};__cov_ne9d3bYaB94HPejJeu9yEA.s['92']++;for(var fI=0;fI<l;fI++){__cov_ne9d3bYaB94HPejJeu9yEA.s['93']++;if(!allFutures[fI]){__cov_ne9d3bYaB94HPejJeu9yEA.b['16'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['94']++;result.foundAnyError=true;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['16'][1]++;}}__cov_ne9d3bYaB94HPejJeu9yEA.s['95']++;return result;});},writable:true,configurable:true},removeErrors:{value:function removeErrors(){__cov_ne9d3bYaB94HPejJeu9yEA.f['19']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['96']++;this._removeElementErrors(this.form);__cov_ne9d3bYaB94HPejJeu9yEA.s['97']++;return this;},writable:true,configurable:true},prepareErrors:{value:function prepareErrors(fields,removeAllErrors){__cov_ne9d3bYaB94HPejJeu9yEA.f['20']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['98']++;if(removeAllErrors){__cov_ne9d3bYaB94HPejJeu9yEA.b['17'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['99']++;this._removeElementErrors(this.form);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['17'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['100']++;for(var i=0;i<fields.length;i++){__cov_ne9d3bYaB94HPejJeu9yEA.s['101']++;var field=fields[i],parent=field.parentNode,validity=field.validity;__cov_ne9d3bYaB94HPejJeu9yEA.s['102']++;field.flexFormsSavedValidity=JSON.parse(JSON.stringify(validity));__cov_ne9d3bYaB94HPejJeu9yEA.s['103']++;if((__cov_ne9d3bYaB94HPejJeu9yEA.b['19'][0]++,validity)&&(__cov_ne9d3bYaB94HPejJeu9yEA.b['19'][1]++,!validity.valid)){__cov_ne9d3bYaB94HPejJeu9yEA.b['18'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['104']++;if(!removeAllErrors){__cov_ne9d3bYaB94HPejJeu9yEA.b['20'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['105']++;this._removeElementErrors(parent);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['20'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['106']++;this._setupErrorMessages(field,validity);__cov_ne9d3bYaB94HPejJeu9yEA.s['107']++;field.classList.add('invalid');__cov_ne9d3bYaB94HPejJeu9yEA.s['108']++;field.setAttribute(ARIA_INVALID,'true');__cov_ne9d3bYaB94HPejJeu9yEA.s['109']++;if(this.options.appendError){__cov_ne9d3bYaB94HPejJeu9yEA.b['21'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['110']++;parent.insertAdjacentHTML('beforeend','<div class="'+ERROR_CLASS_NAME+'">'+field.validationMessage+'</div>');}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['21'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['111']++;field.flexFormsSavedValidationMessage=field.validationMessage;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['18'][1]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['112']++;field.classList.remove('invalid');__cov_ne9d3bYaB94HPejJeu9yEA.s['113']++;field.setAttribute(ARIA_INVALID,'false');__cov_ne9d3bYaB94HPejJeu9yEA.s['114']++;this._removeElementErrors(parent);}__cov_ne9d3bYaB94HPejJeu9yEA.s['115']++;field.setCustomValidity('');}},writable:true,configurable:true},validateCustomFields:{value:function validateCustomFields(){__cov_ne9d3bYaB94HPejJeu9yEA.f['21']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['116']++;return this._customValidationsForElements(this.form.querySelectorAll('[data-validate]'));},writable:true,configurable:true},getForm:{value:function getForm(){__cov_ne9d3bYaB94HPejJeu9yEA.f['22']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['117']++;return this.form;},writable:true,configurable:true},registerRemoteValidation:{value:function registerRemoteValidation(func){__cov_ne9d3bYaB94HPejJeu9yEA.f['23']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['118']++;this._remoteValidationFunction=func;__cov_ne9d3bYaB94HPejJeu9yEA.s['119']++;return this;},writable:true,configurable:true},showAndOrCreateTooltip:{value:function showAndOrCreateTooltip(target,remove){__cov_ne9d3bYaB94HPejJeu9yEA.f['24']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['120']++;var self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['121']++;if((__cov_ne9d3bYaB94HPejJeu9yEA.b['23'][0]++,!this.tooltips)&&(__cov_ne9d3bYaB94HPejJeu9yEA.b['23'][1]++,this.options.createTooltips)){__cov_ne9d3bYaB94HPejJeu9yEA.b['22'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['122']++;this.tooltips=new Tooltip(this.getForm(),{containerClass:'error-tooltip'});}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['22'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['123']++;if(!this.options.createTooltips){__cov_ne9d3bYaB94HPejJeu9yEA.b['24'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['124']++;return;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['24'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['125']++;setTimeout(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['25']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['126']++;if(!target.flexFormsSavedValidity){__cov_ne9d3bYaB94HPejJeu9yEA.b['25'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['127']++;return;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['25'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['128']++;if((__cov_ne9d3bYaB94HPejJeu9yEA.b['27'][0]++,!target.flexFormsSavedValidity.valid)&&(__cov_ne9d3bYaB94HPejJeu9yEA.b['27'][1]++,target.classList.contains(INPUT_ERROR_CLASS))){__cov_ne9d3bYaB94HPejJeu9yEA.b['26'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['129']++;self.tooltips.createTooltip(target,Form._formatErrorTooltip(target.flexFormsSavedValidationMessage),false);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['26'][1]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['130']++;if(remove){__cov_ne9d3bYaB94HPejJeu9yEA.b['28'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['131']++;self.tooltips.removeTooltip(target);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['28'][1]++;}}},0);},writable:true,configurable:true},_checkIsInvalid:{value:function _checkIsInvalid(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['26']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['132']++;e.preventDefault();__cov_ne9d3bYaB94HPejJeu9yEA.s['133']++;var invalidFields=this.getForm().querySelectorAll(':invalid'),self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['134']++;var arr=Form._createArrayFromInvalidFieldList(invalidFields);__cov_ne9d3bYaB94HPejJeu9yEA.s['135']++;if(arr.indexOf(e.target)>0){__cov_ne9d3bYaB94HPejJeu9yEA.b['29'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['136']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['29'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['137']++;if(arr.length>0){__cov_ne9d3bYaB94HPejJeu9yEA.b['30'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['138']++;setTimeout(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['27']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['139']++;arr[0].focus();__cov_ne9d3bYaB94HPejJeu9yEA.s['140']++;self.showAndOrCreateTooltip(arr[0]);},0);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['30'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['141']++;var validation=self.validateCustomFields();__cov_ne9d3bYaB94HPejJeu9yEA.s['142']++;this.prepareErrors(arr,true);__cov_ne9d3bYaB94HPejJeu9yEA.s['143']++;return validation;},writable:true,configurable:true},initFormValidation:{value:function initFormValidation(){__cov_ne9d3bYaB94HPejJeu9yEA.f['28']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['144']++;var form=this.getForm(),invalidFormFired=false,self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['145']++;form.addEventListener('invalid',function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['29']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['146']++;var result=self._checkIsInvalid(e);__cov_ne9d3bYaB94HPejJeu9yEA.s['147']++;if(result){__cov_ne9d3bYaB94HPejJeu9yEA.b['31'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['148']++;this.currentValidationFuture=new _core.Promise(function(resolve){__cov_ne9d3bYaB94HPejJeu9yEA.f['30']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['149']++;result.then(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['31']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['150']++;self.prepareErrors(r.checkedFields,false);__cov_ne9d3bYaB94HPejJeu9yEA.s['151']++;resolve(r);__cov_ne9d3bYaB94HPejJeu9yEA.s['152']++;invalidFormFired=false;});});}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['31'][1]++;}},true);__cov_ne9d3bYaB94HPejJeu9yEA.s['153']++;form.addEventListener('blur',function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['32']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['154']++;if(self.tooltips){__cov_ne9d3bYaB94HPejJeu9yEA.b['32'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['155']++;self.tooltips.removeTooltip(e.target);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['32'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['156']++;var target=e.target,hasError=false;__cov_ne9d3bYaB94HPejJeu9yEA.s['157']++;if(!_checkIsValidBlurFocusElement(target)){__cov_ne9d3bYaB94HPejJeu9yEA.b['33'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['158']++;return;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['33'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['159']++;if(target.classList.contains(INPUT_ERROR_CLASS)){__cov_ne9d3bYaB94HPejJeu9yEA.b['34'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['160']++;hasError=true;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['34'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['161']++;self._customValidationsForElements([e.target]).then(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['33']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['162']++;self.prepareErrors([e.target],false);__cov_ne9d3bYaB94HPejJeu9yEA.s['163']++;if(!hasError){__cov_ne9d3bYaB94HPejJeu9yEA.b['35'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['164']++;self.showAndOrCreateTooltip(e.target);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['35'][1]++;}});},true);function _checkIsValidBlurFocusElement(target){__cov_ne9d3bYaB94HPejJeu9yEA.f['34']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['166']++;if(!self.options.inlineValidation){__cov_ne9d3bYaB94HPejJeu9yEA.b['36'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['167']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['36'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['168']++;var attr=target.getAttribute('type'),maybeDisableOnBlur=target.hasAttribute(ATTR_DISABLE_INLINE);__cov_ne9d3bYaB94HPejJeu9yEA.s['169']++;if(maybeDisableOnBlur){__cov_ne9d3bYaB94HPejJeu9yEA.b['37'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['170']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['37'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['171']++;return!((__cov_ne9d3bYaB94HPejJeu9yEA.b['38'][0]++,attr==='checkbox')||(__cov_ne9d3bYaB94HPejJeu9yEA.b['38'][1]++,attr==='option')||(__cov_ne9d3bYaB94HPejJeu9yEA.b['38'][2]++,attr==='submit')||(__cov_ne9d3bYaB94HPejJeu9yEA.b['38'][3]++,!((__cov_ne9d3bYaB94HPejJeu9yEA.b['39'][0]++,target instanceof HTMLSelectElement)||(__cov_ne9d3bYaB94HPejJeu9yEA.b['39'][1]++,target instanceof HTMLInputElement)||(__cov_ne9d3bYaB94HPejJeu9yEA.b['39'][2]++,target instanceof HTMLTextAreaElement))));}__cov_ne9d3bYaB94HPejJeu9yEA.s['172']++;form.addEventListener('focus',function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['35']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['173']++;if(!_checkIsValidBlurFocusElement(e.target)){__cov_ne9d3bYaB94HPejJeu9yEA.b['40'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['174']++;return;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['40'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['175']++;self.showAndOrCreateTooltip(e.target);},true);__cov_ne9d3bYaB94HPejJeu9yEA.s['176']++;form.addEventListener('change',function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['36']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['177']++;var name=e.target.getAttribute('name');__cov_ne9d3bYaB94HPejJeu9yEA.s['178']++;if(name){__cov_ne9d3bYaB94HPejJeu9yEA.b['41'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['179']++;var inputs=form.querySelectorAll('[name="'+name+'"]');__cov_ne9d3bYaB94HPejJeu9yEA.s['180']++;self._customValidationsForElements(inputs).then(function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['37']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['181']++;self.prepareErrors(inputs,false);__cov_ne9d3bYaB94HPejJeu9yEA.s['182']++;self.showAndOrCreateTooltip(e.target,true);});}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['41'][1]++;}});__cov_ne9d3bYaB94HPejJeu9yEA.s['183']++;var submitListener=function(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['38']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['184']++;self._submitListener(e,submitListener);};__cov_ne9d3bYaB94HPejJeu9yEA.s['185']++;form.addEventListener('submit',submitListener);__cov_ne9d3bYaB94HPejJeu9yEA.s['186']++;Event.dispatchAndFire(form,EVENT_FORM_READY);},writable:true,configurable:true},_submitListener:{value:function _submitListener(e,submitListener){__cov_ne9d3bYaB94HPejJeu9yEA.f['39']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['187']++;var form=this.getForm(),self=this;__cov_ne9d3bYaB94HPejJeu9yEA.s['188']++;if(form.classList.contains(LOADING_CLASS)){__cov_ne9d3bYaB94HPejJeu9yEA.b['42'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['189']++;e.preventDefault();__cov_ne9d3bYaB94HPejJeu9yEA.s['190']++;return false;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['42'][1]++;}__cov_ne9d3bYaB94HPejJeu9yEA.s['191']++;form.classList.add(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['192']++;form.removeEventListener('submit',submitListener);__cov_ne9d3bYaB94HPejJeu9yEA.s['193']++;this._removeElementErrors(form);__cov_ne9d3bYaB94HPejJeu9yEA.s['194']++;e.preventDefault();__cov_ne9d3bYaB94HPejJeu9yEA.s['195']++;if(form.checkValidity()){__cov_ne9d3bYaB94HPejJeu9yEA.b['43'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['196']++;form.addEventListener('submit',submitListener);__cov_ne9d3bYaB94HPejJeu9yEA.s['197']++;self.currentValidationFuture=new _core.Promise(function(resolve){__cov_ne9d3bYaB94HPejJeu9yEA.f['40']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['198']++;var validation=self.validateCustomFields();__cov_ne9d3bYaB94HPejJeu9yEA.s['199']++;validation.then(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['41']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['200']++;for(var i=0;i<r.checkedFields.length;i++){__cov_ne9d3bYaB94HPejJeu9yEA.s['201']++;var f=r.checkedFields[i];__cov_ne9d3bYaB94HPejJeu9yEA.s['202']++;if(!f.validity.valid){__cov_ne9d3bYaB94HPejJeu9yEA.b['44'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['203']++;self.showAndOrCreateTooltip(f,true);__cov_ne9d3bYaB94HPejJeu9yEA.s['204']++;f.focus();__cov_ne9d3bYaB94HPejJeu9yEA.s['205']++;break;}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['44'][1]++;}}__cov_ne9d3bYaB94HPejJeu9yEA.s['206']++;self.prepareErrors(r.checkedFields,false);__cov_ne9d3bYaB94HPejJeu9yEA.s['207']++;resolve(r);});});__cov_ne9d3bYaB94HPejJeu9yEA.s['208']++;self.currentValidationFuture.then(function(r){__cov_ne9d3bYaB94HPejJeu9yEA.f['42']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['209']++;form.classList.remove(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['210']++;if(!r.foundAnyError){__cov_ne9d3bYaB94HPejJeu9yEA.b['45'][0]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['211']++;self._handleSubmit(e);}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['45'][1]++;}});}else{__cov_ne9d3bYaB94HPejJeu9yEA.b['43'][1]++;__cov_ne9d3bYaB94HPejJeu9yEA.s['212']++;form.classList.remove(LOADING_CLASS);__cov_ne9d3bYaB94HPejJeu9yEA.s['213']++;form.addEventListener('submit',submitListener);}},writable:true,configurable:true},_handleSubmit:{value:function _handleSubmit(e){__cov_ne9d3bYaB94HPejJeu9yEA.f['43']++;__cov_ne9d3bYaB94HPejJeu9yEA.s['214']++;this._submitFunction.apply(this,[this.form,e]);},writable:true,configurable:true}});__cov_ne9d3bYaB94HPejJeu9yEA.s['215']++;return Form;}();__cov_ne9d3bYaB94HPejJeu9yEA.s['216']++;exports['default']=Form;__cov_ne9d3bYaB94HPejJeu9yEA.s['217']++;Form.globalValidators=[];__cov_ne9d3bYaB94HPejJeu9yEA.s['218']++;Form.globalRemoteValidationFunction=function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['44']++;};__cov_ne9d3bYaB94HPejJeu9yEA.s['219']++;Form.globalErrorMessageHandler=function(){__cov_ne9d3bYaB94HPejJeu9yEA.f['45']++;};__cov_ne9d3bYaB94HPejJeu9yEA.s['220']++;Object.defineProperty(exports,'__esModule',{value:true});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

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
	__cov_QU3vbYO7toUg5tTrpu4LEg.s['1']++;var _core=__webpack_require__(9);__cov_QU3vbYO7toUg5tTrpu4LEg.s['2']++;var CLASS_NAMES_TOOLTIP='tooltip-container';__cov_QU3vbYO7toUg5tTrpu4LEg.s['3']++;var CLASS_NAMES_TOP='arrow-top';__cov_QU3vbYO7toUg5tTrpu4LEg.s['4']++;var CLASS_NAMES_BOTTOM='arrow-bottom';__cov_QU3vbYO7toUg5tTrpu4LEg.s['5']++;var CLASS_NAMES_OPEN='open';__cov_QU3vbYO7toUg5tTrpu4LEg.s['6']++;var doc=document;__cov_QU3vbYO7toUg5tTrpu4LEg.s['7']++;var Tooltip=function(){__cov_QU3vbYO7toUg5tTrpu4LEg.f['1']++;function Tooltip(DelegateContainer,options){__cov_QU3vbYO7toUg5tTrpu4LEg.f['2']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['9']++;to5Runtime.classCallCheck(this,Tooltip);__cov_QU3vbYO7toUg5tTrpu4LEg.s['10']++;this.container=DelegateContainer instanceof HTMLElement?(__cov_QU3vbYO7toUg5tTrpu4LEg.b['1'][0]++,DelegateContainer):(__cov_QU3vbYO7toUg5tTrpu4LEg.b['1'][1]++,doc.getElementById(DelegateContainer));__cov_QU3vbYO7toUg5tTrpu4LEg.s['11']++;if(!this.container){__cov_QU3vbYO7toUg5tTrpu4LEg.b['2'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['12']++;throw'Could not create Tooltip, DelegateContainer not found';}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['2'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['13']++;this.tooltipContainer=null;__cov_QU3vbYO7toUg5tTrpu4LEg.s['14']++;this.options={containerClass:''};__cov_QU3vbYO7toUg5tTrpu4LEg.s['15']++;_core.Object.assign(this.options,options);}__cov_QU3vbYO7toUg5tTrpu4LEg.s['16']++;to5Runtime.prototypeProperties(Tooltip,null,{createTooltip:{value:function createTooltip(target,text,removeTitle){__cov_QU3vbYO7toUg5tTrpu4LEg.f['3']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['17']++;var self=this;__cov_QU3vbYO7toUg5tTrpu4LEg.s['18']++;if((__cov_QU3vbYO7toUg5tTrpu4LEg.b['4'][0]++,!text)||(__cov_QU3vbYO7toUg5tTrpu4LEg.b['4'][1]++,text)&&(__cov_QU3vbYO7toUg5tTrpu4LEg.b['4'][2]++,text.trim()==='')){__cov_QU3vbYO7toUg5tTrpu4LEg.b['3'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['19']++;return;}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['3'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['20']++;var tooltipContainer=this.tooltipContainer;__cov_QU3vbYO7toUg5tTrpu4LEg.s['21']++;if(!tooltipContainer){__cov_QU3vbYO7toUg5tTrpu4LEg.b['5'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['22']++;tooltipContainer=doc.createElement('div');__cov_QU3vbYO7toUg5tTrpu4LEg.s['23']++;tooltipContainer.className=[CLASS_NAMES_TOOLTIP,self.options.containerClass].join(' ');__cov_QU3vbYO7toUg5tTrpu4LEg.s['24']++;this.container.appendChild(tooltipContainer);__cov_QU3vbYO7toUg5tTrpu4LEg.s['25']++;this.tooltipContainer=tooltipContainer;}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['5'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['26']++;tooltipContainer.style.left='auto';__cov_QU3vbYO7toUg5tTrpu4LEg.s['27']++;tooltipContainer.style.top='auto';__cov_QU3vbYO7toUg5tTrpu4LEg.s['28']++;tooltipContainer.innerHTML=text;__cov_QU3vbYO7toUg5tTrpu4LEg.s['29']++;tooltipContainer.flexTooltipCurrentTarget=target;__cov_QU3vbYO7toUg5tTrpu4LEg.s['30']++;if(removeTitle){__cov_QU3vbYO7toUg5tTrpu4LEg.b['6'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['31']++;target.oldTitle=text;__cov_QU3vbYO7toUg5tTrpu4LEg.s['32']++;target.removeAttribute('title');}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['6'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['33']++;var targetRect=target.getBoundingClientRect(),colRect=this.container.getBoundingClientRect();__cov_QU3vbYO7toUg5tTrpu4LEg.s['34']++;var containerRect=tooltipContainer.getBoundingClientRect(),targetTop=targetRect.top,isCollisionTop=0>=targetTop-containerRect.height,classList=tooltipContainer.classList;__cov_QU3vbYO7toUg5tTrpu4LEg.s['35']++;if(isCollisionTop){__cov_QU3vbYO7toUg5tTrpu4LEg.b['7'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['36']++;tooltipContainer.style.top=targetRect.bottom-colRect.top+'px';__cov_QU3vbYO7toUg5tTrpu4LEg.s['37']++;classList.remove(CLASS_NAMES_BOTTOM);__cov_QU3vbYO7toUg5tTrpu4LEg.s['38']++;classList.add(CLASS_NAMES_TOP);}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['7'][1]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['39']++;classList.remove(CLASS_NAMES_TOP);__cov_QU3vbYO7toUg5tTrpu4LEg.s['40']++;classList.add(CLASS_NAMES_BOTTOM);__cov_QU3vbYO7toUg5tTrpu4LEg.s['41']++;tooltipContainer.style.top=targetTop-containerRect.height-colRect.top+'px';}__cov_QU3vbYO7toUg5tTrpu4LEg.s['42']++;tooltipContainer.style.left=((__cov_QU3vbYO7toUg5tTrpu4LEg.b['8'][0]++,targetRect.left+targetRect.width/2-containerRect.width/2)||(__cov_QU3vbYO7toUg5tTrpu4LEg.b['8'][1]++,0))-colRect.left+'px';__cov_QU3vbYO7toUg5tTrpu4LEg.s['43']++;classList.add(CLASS_NAMES_OPEN);},writable:true,configurable:true},removeTooltip:{value:function removeTooltip(target){__cov_QU3vbYO7toUg5tTrpu4LEg.f['4']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['44']++;if(this.tooltipContainer){__cov_QU3vbYO7toUg5tTrpu4LEg.b['9'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['45']++;if(this.tooltipContainer.flexTooltipCurrentTarget!==target){__cov_QU3vbYO7toUg5tTrpu4LEg.b['10'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['46']++;return;}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['10'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['47']++;this.tooltipContainer.classList.remove('open');}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['9'][1]++;}__cov_QU3vbYO7toUg5tTrpu4LEg.s['48']++;if(target.oldTitle){__cov_QU3vbYO7toUg5tTrpu4LEg.b['11'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['49']++;target.setAttribute('title',target.oldTitle);}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['11'][1]++;}},writable:true,configurable:true},registerEvents:{value:function registerEvents(){__cov_QU3vbYO7toUg5tTrpu4LEg.f['5']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['50']++;var self=this;__cov_QU3vbYO7toUg5tTrpu4LEg.s['51']++;this.container.addEventListener('mouseover',function(e){__cov_QU3vbYO7toUg5tTrpu4LEg.f['6']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['52']++;if(e.target.hasAttribute('data-tooltip')){__cov_QU3vbYO7toUg5tTrpu4LEg.b['12'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['53']++;self.createTooltip(e.target,e.target.getAttribute('title'),true);}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['12'][1]++;}});__cov_QU3vbYO7toUg5tTrpu4LEg.s['54']++;this.container.addEventListener('mouseout',function(e){__cov_QU3vbYO7toUg5tTrpu4LEg.f['7']++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['55']++;if(e.target.hasAttribute('data-tooltip')){__cov_QU3vbYO7toUg5tTrpu4LEg.b['13'][0]++;__cov_QU3vbYO7toUg5tTrpu4LEg.s['56']++;self.removeTooltip(e.target);}else{__cov_QU3vbYO7toUg5tTrpu4LEg.b['13'][1]++;}});__cov_QU3vbYO7toUg5tTrpu4LEg.s['57']++;return this;},writable:true,configurable:true}});__cov_QU3vbYO7toUg5tTrpu4LEg.s['58']++;return Tooltip;}();__cov_QU3vbYO7toUg5tTrpu4LEg.s['59']++;module.exports=Tooltip;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime, global) {"use strict";
	var __cov_uDNHynUXfiYG1N1MRHokGQ = (Function('return this'))();
	if (!__cov_uDNHynUXfiYG1N1MRHokGQ.__coverage__) { __cov_uDNHynUXfiYG1N1MRHokGQ.__coverage__ = {}; }
	__cov_uDNHynUXfiYG1N1MRHokGQ = __cov_uDNHynUXfiYG1N1MRHokGQ.__coverage__;
	if (!(__cov_uDNHynUXfiYG1N1MRHokGQ['/Users/bowlingx/Projekte/flexcss/src/main/Modal.js'])) {
	   __cov_uDNHynUXfiYG1N1MRHokGQ['/Users/bowlingx/Projekte/flexcss/src/main/Modal.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/main/Modal.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":1,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"109":0,"110":0,"111":0,"112":0,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"121":0,"122":0,"123":0,"124":0,"125":0,"126":0,"127":0,"128":0,"129":0,"130":0,"131":0,"132":0,"133":0,"134":0,"135":0,"136":0,"137":0,"138":0,"139":0,"140":0,"141":0,"142":0,"143":0,"144":0,"145":0,"146":0,"147":0,"148":0,"149":0,"150":0,"151":0,"152":0,"153":0,"154":0,"155":0,"156":0,"157":0,"158":0,"159":0,"160":0,"161":0,"162":0,"163":0,"164":0,"165":0,"166":0,"167":0,"168":0,"169":0,"170":0,"171":0,"172":0,"173":0,"174":0,"175":0,"176":0,"177":0,"178":0,"179":0,"180":0,"181":0,"182":0,"183":0,"184":0,"185":0,"186":0,"187":0,"188":0,"189":0,"190":0,"191":0,"192":0,"193":0,"194":0,"195":0,"196":0,"197":0,"198":0,"199":0,"200":0,"201":0,"202":0,"203":0,"204":0,"205":0,"206":0,"207":0,"208":0,"209":0,"210":0,"211":0,"212":0,"213":0,"214":0,"215":0,"216":0,"217":0,"218":0,"219":0,"220":0,"221":0,"222":0,"223":0,"224":0,"225":0,"226":0,"227":0,"228":0,"229":0,"230":0,"231":0,"232":0,"233":0,"234":0,"235":0,"236":0,"237":0,"238":0,"239":0,"240":0,"241":0,"242":0,"243":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0,0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0],"34":[0,0],"35":[0,0],"36":[0,0],"37":[0,0],"38":[0,0],"39":[0,0],"40":[0,0],"41":[0,0],"42":[0,0],"43":[0,0],"44":[0,0],"45":[0,0],"46":[0,0],"47":[0,0],"48":[0,0],"49":[0,0],"50":[0,0],"51":[0,0],"52":[0,0],"53":[0,0],"54":[0,0],"55":[0,0],"56":[0,0],"57":[0,0],"58":[0,0],"59":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0},"fnMap":{"1":{"name":"(anonymous_1)","line":63,"loc":{"start":{"line":63,"column":13},"end":{"line":63,"column":25}}},"2":{"name":"Modal","line":64,"loc":{"start":{"line":64,"column":4},"end":{"line":64,"column":47}}},"3":{"name":"_removeModalFromStack","line":117,"loc":{"start":{"line":117,"column":19},"end":{"line":117,"column":53}}},"4":{"name":"(anonymous_4)","line":124,"loc":{"start":{"line":124,"column":68},"end":{"line":124,"column":81}}},"5":{"name":"getModalContainer","line":148,"loc":{"start":{"line":148,"column":19},"end":{"line":148,"column":48}}},"6":{"name":"close","line":161,"loc":{"start":{"line":161,"column":19},"end":{"line":161,"column":37}}},"7":{"name":"switchModals","line":240,"loc":{"start":{"line":240,"column":19},"end":{"line":240,"column":51}}},"8":{"name":"(anonymous_8)","line":259,"loc":{"start":{"line":259,"column":62},"end":{"line":259,"column":81}}},"9":{"name":"handleScrollbar","line":284,"loc":{"start":{"line":284,"column":19},"end":{"line":284,"column":46}}},"10":{"name":"(anonymous_10)","line":296,"loc":{"start":{"line":296,"column":64},"end":{"line":296,"column":77}}},"11":{"name":"createWidget","line":311,"loc":{"start":{"line":311,"column":19},"end":{"line":311,"column":44}}},"12":{"name":"(anonymous_12)","line":319,"loc":{"start":{"line":319,"column":68},"end":{"line":319,"column":84}}},"13":{"name":"(anonymous_13)","line":350,"loc":{"start":{"line":350,"column":54},"end":{"line":350,"column":66}}},"14":{"name":"(anonymous_14)","line":371,"loc":{"start":{"line":371,"column":45},"end":{"line":371,"column":58}}},"15":{"name":"(anonymous_15)","line":393,"loc":{"start":{"line":393,"column":35},"end":{"line":393,"column":51}}},"16":{"name":"(anonymous_16)","line":414,"loc":{"start":{"line":414,"column":40},"end":{"line":414,"column":53}}},"17":{"name":"(anonymous_17)","line":433,"loc":{"start":{"line":433,"column":51},"end":{"line":433,"column":70}}},"18":{"name":"(anonymous_18)","line":443,"loc":{"start":{"line":443,"column":35},"end":{"line":443,"column":49}}},"19":{"name":"open","line":465,"loc":{"start":{"line":465,"column":19},"end":{"line":465,"column":50}}},"20":{"name":"registerEvents","line":480,"loc":{"start":{"line":480,"column":19},"end":{"line":480,"column":53}}},"21":{"name":"(anonymous_21)","line":486,"loc":{"start":{"line":486,"column":37},"end":{"line":486,"column":49}}},"22":{"name":"fromWidget","line":505,"loc":{"start":{"line":505,"column":19},"end":{"line":505,"column":47}}},"23":{"name":"fromEvent","line":518,"loc":{"start":{"line":518,"column":19},"end":{"line":518,"column":41}}},"24":{"name":"setDestroyOnFinish","line":525,"loc":{"start":{"line":525,"column":19},"end":{"line":525,"column":50}}},"25":{"name":"destroy","line":538,"loc":{"start":{"line":538,"column":19},"end":{"line":538,"column":38}}},"26":{"name":"(anonymous_26)","line":552,"loc":{"start":{"line":552,"column":56},"end":{"line":552,"column":77}}},"27":{"name":"(anonymous_27)","line":553,"loc":{"start":{"line":553,"column":42},"end":{"line":553,"column":54}}},"28":{"name":"(anonymous_28)","line":562,"loc":{"start":{"line":562,"column":70},"end":{"line":562,"column":83}}},"29":{"name":"(anonymous_29)","line":585,"loc":{"start":{"line":585,"column":35},"end":{"line":585,"column":48}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":44}},"2":{"start":{"line":7,"column":0},"end":{"line":7,"column":67}},"3":{"start":{"line":9,"column":0},"end":{"line":9,"column":61}},"4":{"start":{"line":11,"column":0},"end":{"line":11,"column":59}},"5":{"start":{"line":13,"column":0},"end":{"line":13,"column":58}},"6":{"start":{"line":15,"column":0},"end":{"line":15,"column":51}},"7":{"start":{"line":18,"column":0},"end":{"line":18,"column":42}},"8":{"start":{"line":19,"column":0},"end":{"line":19,"column":36}},"9":{"start":{"line":20,"column":0},"end":{"line":20,"column":29}},"10":{"start":{"line":23,"column":0},"end":{"line":23,"column":36}},"11":{"start":{"line":24,"column":0},"end":{"line":24,"column":22}},"12":{"start":{"line":25,"column":0},"end":{"line":25,"column":28}},"13":{"start":{"line":26,"column":0},"end":{"line":26,"column":40}},"14":{"start":{"line":27,"column":0},"end":{"line":27,"column":34}},"15":{"start":{"line":28,"column":0},"end":{"line":28,"column":44}},"16":{"start":{"line":36,"column":0},"end":{"line":36,"column":77}},"17":{"start":{"line":41,"column":0},"end":{"line":41,"column":96}},"18":{"start":{"line":46,"column":0},"end":{"line":46,"column":77}},"19":{"start":{"line":52,"column":0},"end":{"line":52,"column":71}},"20":{"start":{"line":58,"column":0},"end":{"line":58,"column":114}},"21":{"start":{"line":63,"column":0},"end":{"line":575,"column":5}},"22":{"start":{"line":64,"column":4},"end":{"line":106,"column":5}},"23":{"start":{"line":65,"column":8},"end":{"line":65,"column":47}},"24":{"start":{"line":67,"column":8},"end":{"line":68,"column":125}},"25":{"start":{"line":71,"column":8},"end":{"line":73,"column":9}},"26":{"start":{"line":72,"column":12},"end":{"line":72,"column":96}},"27":{"start":{"line":75,"column":8},"end":{"line":75,"column":32}},"28":{"start":{"line":77,"column":8},"end":{"line":77,"column":29}},"29":{"start":{"line":79,"column":8},"end":{"line":79,"column":35}},"30":{"start":{"line":84,"column":8},"end":{"line":89,"column":10}},"31":{"start":{"line":91,"column":8},"end":{"line":91,"column":51}},"32":{"start":{"line":94,"column":8},"end":{"line":94,"column":35}},"33":{"start":{"line":95,"column":8},"end":{"line":95,"column":34}},"34":{"start":{"line":97,"column":8},"end":{"line":97,"column":58}},"35":{"start":{"line":99,"column":8},"end":{"line":99,"column":34}},"36":{"start":{"line":101,"column":8},"end":{"line":101,"column":35}},"37":{"start":{"line":105,"column":8},"end":{"line":105,"column":60}},"38":{"start":{"line":108,"column":4},"end":{"line":572,"column":7}},"39":{"start":{"line":118,"column":16},"end":{"line":119,"column":32}},"40":{"start":{"line":120,"column":16},"end":{"line":136,"column":17}},"41":{"start":{"line":121,"column":20},"end":{"line":121,"column":55}},"42":{"start":{"line":122,"column":20},"end":{"line":135,"column":21}},"43":{"start":{"line":123,"column":24},"end":{"line":123,"column":70}},"44":{"start":{"line":124,"column":24},"end":{"line":134,"column":27}},"45":{"start":{"line":126,"column":28},"end":{"line":132,"column":29}},"46":{"start":{"line":127,"column":32},"end":{"line":127,"column":85}},"47":{"start":{"line":128,"column":32},"end":{"line":128,"column":77}},"48":{"start":{"line":130,"column":32},"end":{"line":130,"column":73}},"49":{"start":{"line":131,"column":32},"end":{"line":131,"column":80}},"50":{"start":{"line":133,"column":28},"end":{"line":133,"column":54}},"51":{"start":{"line":149,"column":16},"end":{"line":149,"column":43}},"52":{"start":{"line":162,"column":16},"end":{"line":162,"column":32}},"53":{"start":{"line":165,"column":16},"end":{"line":167,"column":17}},"54":{"start":{"line":166,"column":20},"end":{"line":166,"column":33}},"55":{"start":{"line":170,"column":16},"end":{"line":172,"column":17}},"56":{"start":{"line":171,"column":20},"end":{"line":171,"column":33}},"57":{"start":{"line":175,"column":16},"end":{"line":177,"column":17}},"58":{"start":{"line":176,"column":20},"end":{"line":176,"column":33}},"59":{"start":{"line":179,"column":16},"end":{"line":181,"column":17}},"60":{"start":{"line":180,"column":20},"end":{"line":180,"column":39}},"61":{"start":{"line":183,"column":16},"end":{"line":200,"column":17}},"62":{"start":{"line":185,"column":20},"end":{"line":185,"column":96}},"63":{"start":{"line":186,"column":20},"end":{"line":188,"column":21}},"64":{"start":{"line":187,"column":24},"end":{"line":187,"column":37}},"65":{"start":{"line":190,"column":20},"end":{"line":190,"column":62}},"66":{"start":{"line":193,"column":20},"end":{"line":196,"column":21}},"67":{"start":{"line":195,"column":24},"end":{"line":195,"column":123}},"68":{"start":{"line":199,"column":20},"end":{"line":199,"column":80}},"69":{"start":{"line":201,"column":16},"end":{"line":201,"column":61}},"70":{"start":{"line":204,"column":16},"end":{"line":204,"column":40}},"71":{"start":{"line":205,"column":16},"end":{"line":223,"column":17}},"72":{"start":{"line":207,"column":20},"end":{"line":208,"column":66}},"73":{"start":{"line":209,"column":20},"end":{"line":209,"column":60}},"74":{"start":{"line":210,"column":20},"end":{"line":210,"column":47}},"75":{"start":{"line":212,"column":20},"end":{"line":219,"column":21}},"76":{"start":{"line":213,"column":24},"end":{"line":214,"column":48}},"77":{"start":{"line":216,"column":24},"end":{"line":216,"column":54}},"78":{"start":{"line":217,"column":24},"end":{"line":217,"column":47}},"79":{"start":{"line":218,"column":24},"end":{"line":218,"column":53}},"80":{"start":{"line":220,"column":20},"end":{"line":222,"column":21}},"81":{"start":{"line":221,"column":24},"end":{"line":221,"column":86}},"82":{"start":{"line":225,"column":16},"end":{"line":227,"column":17}},"83":{"start":{"line":226,"column":20},"end":{"line":226,"column":35}},"84":{"start":{"line":228,"column":16},"end":{"line":228,"column":28}},"85":{"start":{"line":241,"column":16},"end":{"line":241,"column":36}},"86":{"start":{"line":242,"column":16},"end":{"line":242,"column":47}},"87":{"start":{"line":244,"column":16},"end":{"line":246,"column":17}},"88":{"start":{"line":245,"column":20},"end":{"line":245,"column":58}},"89":{"start":{"line":248,"column":16},"end":{"line":248,"column":38}},"90":{"start":{"line":251,"column":16},"end":{"line":251,"column":54}},"91":{"start":{"line":253,"column":16},"end":{"line":255,"column":17}},"92":{"start":{"line":254,"column":20},"end":{"line":254,"column":84}},"93":{"start":{"line":256,"column":16},"end":{"line":256,"column":73}},"94":{"start":{"line":259,"column":16},"end":{"line":263,"column":19}},"95":{"start":{"line":260,"column":20},"end":{"line":260,"column":54}},"96":{"start":{"line":261,"column":20},"end":{"line":261,"column":60}},"97":{"start":{"line":262,"column":20},"end":{"line":262,"column":63}},"98":{"start":{"line":265,"column":16},"end":{"line":278,"column":17}},"99":{"start":{"line":266,"column":20},"end":{"line":267,"column":70}},"100":{"start":{"line":268,"column":20},"end":{"line":277,"column":21}},"101":{"start":{"line":269,"column":24},"end":{"line":269,"column":54}},"102":{"start":{"line":270,"column":24},"end":{"line":270,"column":63}},"103":{"start":{"line":272,"column":24},"end":{"line":272,"column":56}},"104":{"start":{"line":273,"column":24},"end":{"line":276,"column":25}},"105":{"start":{"line":274,"column":28},"end":{"line":274,"column":58}},"106":{"start":{"line":275,"column":28},"end":{"line":275,"column":73}},"107":{"start":{"line":285,"column":16},"end":{"line":285,"column":32}},"108":{"start":{"line":286,"column":16},"end":{"line":299,"column":17}},"109":{"start":{"line":287,"column":20},"end":{"line":287,"column":63}},"110":{"start":{"line":289,"column":20},"end":{"line":290,"column":55}},"111":{"start":{"line":291,"column":20},"end":{"line":291,"column":54}},"112":{"start":{"line":292,"column":20},"end":{"line":295,"column":21}},"113":{"start":{"line":293,"column":24},"end":{"line":293,"column":60}},"114":{"start":{"line":294,"column":24},"end":{"line":294,"column":51}},"115":{"start":{"line":296,"column":20},"end":{"line":298,"column":23}},"116":{"start":{"line":297,"column":24},"end":{"line":297,"column":137}},"117":{"start":{"line":312,"column":16},"end":{"line":312,"column":32}},"118":{"start":{"line":313,"column":16},"end":{"line":315,"column":17}},"119":{"start":{"line":314,"column":20},"end":{"line":314,"column":33}},"120":{"start":{"line":318,"column":16},"end":{"line":327,"column":17}},"121":{"start":{"line":319,"column":20},"end":{"line":321,"column":23}},"122":{"start":{"line":320,"column":24},"end":{"line":320,"column":54}},"123":{"start":{"line":324,"column":20},"end":{"line":326,"column":21}},"124":{"start":{"line":325,"column":24},"end":{"line":325,"column":37}},"125":{"start":{"line":328,"column":16},"end":{"line":334,"column":51}},"126":{"start":{"line":335,"column":16},"end":{"line":359,"column":17}},"127":{"start":{"line":336,"column":20},"end":{"line":341,"column":21}},"128":{"start":{"line":337,"column":24},"end":{"line":337,"column":42}},"129":{"start":{"line":339,"column":24},"end":{"line":339,"column":35}},"130":{"start":{"line":340,"column":24},"end":{"line":340,"column":55}},"131":{"start":{"line":343,"column":20},"end":{"line":343,"column":38}},"132":{"start":{"line":344,"column":20},"end":{"line":344,"column":63}},"133":{"start":{"line":345,"column":20},"end":{"line":345,"column":67}},"134":{"start":{"line":346,"column":20},"end":{"line":346,"column":53}},"135":{"start":{"line":347,"column":20},"end":{"line":354,"column":21}},"136":{"start":{"line":348,"column":24},"end":{"line":348,"column":93}},"137":{"start":{"line":349,"column":24},"end":{"line":349,"column":45}},"138":{"start":{"line":350,"column":24},"end":{"line":352,"column":27}},"139":{"start":{"line":351,"column":28},"end":{"line":351,"column":88}},"140":{"start":{"line":353,"column":24},"end":{"line":353,"column":37}},"141":{"start":{"line":355,"column":20},"end":{"line":358,"column":21}},"142":{"start":{"line":356,"column":24},"end":{"line":356,"column":53}},"143":{"start":{"line":357,"column":24},"end":{"line":357,"column":43}},"144":{"start":{"line":361,"column":16},"end":{"line":363,"column":17}},"145":{"start":{"line":362,"column":20},"end":{"line":362,"column":33}},"146":{"start":{"line":365,"column":16},"end":{"line":365,"column":101}},"147":{"start":{"line":368,"column":16},"end":{"line":389,"column":17}},"148":{"start":{"line":369,"column":20},"end":{"line":369,"column":79}},"149":{"start":{"line":370,"column":20},"end":{"line":370,"column":89}},"150":{"start":{"line":371,"column":20},"end":{"line":381,"column":22}},"151":{"start":{"line":372,"column":24},"end":{"line":374,"column":25}},"152":{"start":{"line":373,"column":28},"end":{"line":373,"column":41}},"153":{"start":{"line":375,"column":24},"end":{"line":379,"column":25}},"154":{"start":{"line":376,"column":28},"end":{"line":378,"column":29}},"155":{"start":{"line":377,"column":32},"end":{"line":377,"column":45}},"156":{"start":{"line":380,"column":24},"end":{"line":380,"column":38}},"157":{"start":{"line":383,"column":20},"end":{"line":383,"column":110}},"158":{"start":{"line":385,"column":20},"end":{"line":385,"column":74}},"159":{"start":{"line":386,"column":20},"end":{"line":386,"column":68}},"160":{"start":{"line":388,"column":20},"end":{"line":388,"column":56}},"161":{"start":{"line":391,"column":16},"end":{"line":404,"column":18}},"162":{"start":{"line":394,"column":20},"end":{"line":403,"column":21}},"163":{"start":{"line":395,"column":24},"end":{"line":395,"column":58}},"164":{"start":{"line":396,"column":24},"end":{"line":396,"column":62}},"165":{"start":{"line":397,"column":24},"end":{"line":397,"column":68}},"166":{"start":{"line":398,"column":24},"end":{"line":398,"column":58}},"167":{"start":{"line":399,"column":24},"end":{"line":399,"column":57}},"168":{"start":{"line":400,"column":24},"end":{"line":400,"column":64}},"169":{"start":{"line":402,"column":24},"end":{"line":402,"column":62}},"170":{"start":{"line":406,"column":16},"end":{"line":406,"column":39}},"171":{"start":{"line":408,"column":16},"end":{"line":408,"column":65}},"172":{"start":{"line":409,"column":16},"end":{"line":409,"column":53}},"173":{"start":{"line":410,"column":16},"end":{"line":410,"column":36}},"174":{"start":{"line":411,"column":16},"end":{"line":411,"column":35}},"175":{"start":{"line":412,"column":16},"end":{"line":412,"column":62}},"176":{"start":{"line":413,"column":16},"end":{"line":439,"column":17}},"177":{"start":{"line":414,"column":20},"end":{"line":429,"column":23}},"178":{"start":{"line":415,"column":24},"end":{"line":415,"column":35}},"179":{"start":{"line":416,"column":24},"end":{"line":425,"column":25}},"180":{"start":{"line":417,"column":28},"end":{"line":417,"column":39}},"181":{"start":{"line":420,"column":28},"end":{"line":420,"column":67}},"182":{"start":{"line":421,"column":28},"end":{"line":421,"column":72}},"183":{"start":{"line":422,"column":28},"end":{"line":422,"column":50}},"184":{"start":{"line":423,"column":28},"end":{"line":423,"column":53}},"185":{"start":{"line":424,"column":28},"end":{"line":424,"column":45}},"186":{"start":{"line":426,"column":24},"end":{"line":426,"column":53}},"187":{"start":{"line":427,"column":24},"end":{"line":427,"column":87}},"188":{"start":{"line":428,"column":24},"end":{"line":428,"column":38}},"189":{"start":{"line":431,"column":20},"end":{"line":431,"column":163}},"190":{"start":{"line":432,"column":20},"end":{"line":438,"column":21}},"191":{"start":{"line":433,"column":24},"end":{"line":435,"column":27}},"192":{"start":{"line":434,"column":28},"end":{"line":434,"column":40}},"193":{"start":{"line":437,"column":24},"end":{"line":437,"column":104}},"194":{"start":{"line":441,"column":16},"end":{"line":441,"column":64}},"195":{"start":{"line":443,"column":16},"end":{"line":453,"column":19}},"196":{"start":{"line":444,"column":20},"end":{"line":444,"column":50}},"197":{"start":{"line":445,"column":20},"end":{"line":445,"column":56}},"198":{"start":{"line":446,"column":20},"end":{"line":446,"column":60}},"199":{"start":{"line":447,"column":20},"end":{"line":447,"column":41}},"200":{"start":{"line":448,"column":20},"end":{"line":448,"column":40}},"201":{"start":{"line":450,"column":20},"end":{"line":450,"column":40}},"202":{"start":{"line":452,"column":20},"end":{"line":452,"column":30}},"203":{"start":{"line":468,"column":16},"end":{"line":471,"column":17}},"204":{"start":{"line":469,"column":20},"end":{"line":469,"column":62}},"205":{"start":{"line":470,"column":20},"end":{"line":470,"column":43}},"206":{"start":{"line":472,"column":16},"end":{"line":472,"column":59}},"207":{"start":{"line":474,"column":16},"end":{"line":474,"column":65}},"208":{"start":{"line":481,"column":16},"end":{"line":482,"column":32}},"209":{"start":{"line":485,"column":16},"end":{"line":485,"column":59}},"210":{"start":{"line":486,"column":16},"end":{"line":488,"column":18}},"211":{"start":{"line":487,"column":20},"end":{"line":487,"column":61}},"212":{"start":{"line":489,"column":16},"end":{"line":489,"column":104}},"213":{"start":{"line":491,"column":16},"end":{"line":491,"column":56}},"214":{"start":{"line":492,"column":16},"end":{"line":492,"column":28}},"215":{"start":{"line":506,"column":16},"end":{"line":506,"column":49}},"216":{"start":{"line":519,"column":16},"end":{"line":519,"column":44}},"217":{"start":{"line":526,"column":16},"end":{"line":526,"column":41}},"218":{"start":{"line":527,"column":16},"end":{"line":527,"column":28}},"219":{"start":{"line":539,"column":16},"end":{"line":540,"column":57}},"220":{"start":{"line":542,"column":16},"end":{"line":544,"column":17}},"221":{"start":{"line":543,"column":20},"end":{"line":543,"column":112}},"222":{"start":{"line":546,"column":16},"end":{"line":550,"column":17}},"223":{"start":{"line":547,"column":20},"end":{"line":549,"column":21}},"224":{"start":{"line":548,"column":24},"end":{"line":548,"column":78}},"225":{"start":{"line":551,"column":16},"end":{"line":567,"column":17}},"226":{"start":{"line":552,"column":20},"end":{"line":559,"column":23}},"227":{"start":{"line":553,"column":24},"end":{"line":558,"column":27}},"228":{"start":{"line":554,"column":28},"end":{"line":557,"column":29}},"229":{"start":{"line":555,"column":32},"end":{"line":555,"column":86}},"230":{"start":{"line":556,"column":32},"end":{"line":556,"column":54}},"231":{"start":{"line":560,"column":20},"end":{"line":560,"column":74}},"232":{"start":{"line":562,"column":20},"end":{"line":566,"column":23}},"233":{"start":{"line":563,"column":24},"end":{"line":565,"column":25}},"234":{"start":{"line":564,"column":28},"end":{"line":564,"column":82}},"235":{"start":{"line":574,"column":4},"end":{"line":574,"column":17}},"236":{"start":{"line":577,"column":0},"end":{"line":577,"column":27}},"237":{"start":{"line":582,"column":0},"end":{"line":582,"column":27}},"238":{"start":{"line":585,"column":0},"end":{"line":592,"column":3}},"239":{"start":{"line":586,"column":4},"end":{"line":591,"column":5}},"240":{"start":{"line":587,"column":8},"end":{"line":587,"column":80}},"241":{"start":{"line":588,"column":8},"end":{"line":590,"column":9}},"242":{"start":{"line":589,"column":12},"end":{"line":589,"column":51}},"243":{"start":{"line":593,"column":0},"end":{"line":595,"column":3}}},"branchMap":{"1":{"line":68,"type":"cond-expr","locations":[{"start":{"line":68,"column":67},"end":{"line":68,"column":84}},{"start":{"line":68,"column":87},"end":{"line":68,"column":124}}]},"2":{"line":71,"type":"if","locations":[{"start":{"line":71,"column":8},"end":{"line":71,"column":8}},{"start":{"line":71,"column":8},"end":{"line":71,"column":8}}]},"3":{"line":120,"type":"if","locations":[{"start":{"line":120,"column":16},"end":{"line":120,"column":16}},{"start":{"line":120,"column":16},"end":{"line":120,"column":16}}]},"4":{"line":122,"type":"if","locations":[{"start":{"line":122,"column":20},"end":{"line":122,"column":20}},{"start":{"line":122,"column":20},"end":{"line":122,"column":20}}]},"5":{"line":126,"type":"if","locations":[{"start":{"line":126,"column":28},"end":{"line":126,"column":28}},{"start":{"line":126,"column":28},"end":{"line":126,"column":28}}]},"6":{"line":165,"type":"if","locations":[{"start":{"line":165,"column":16},"end":{"line":165,"column":16}},{"start":{"line":165,"column":16},"end":{"line":165,"column":16}}]},"7":{"line":165,"type":"binary-expr","locations":[{"start":{"line":165,"column":20},"end":{"line":165,"column":47}},{"start":{"line":165,"column":51},"end":{"line":165,"column":77}}]},"8":{"line":170,"type":"if","locations":[{"start":{"line":170,"column":16},"end":{"line":170,"column":16}},{"start":{"line":170,"column":16},"end":{"line":170,"column":16}}]},"9":{"line":170,"type":"binary-expr","locations":[{"start":{"line":170,"column":20},"end":{"line":170,"column":56}},{"start":{"line":170,"column":60},"end":{"line":170,"column":61}},{"start":{"line":170,"column":65},"end":{"line":170,"column":100}},{"start":{"line":170,"column":104},"end":{"line":170,"column":138}}]},"10":{"line":175,"type":"if","locations":[{"start":{"line":175,"column":16},"end":{"line":175,"column":16}},{"start":{"line":175,"column":16},"end":{"line":175,"column":16}}]},"11":{"line":179,"type":"if","locations":[{"start":{"line":179,"column":16},"end":{"line":179,"column":16}},{"start":{"line":179,"column":16},"end":{"line":179,"column":16}}]},"12":{"line":183,"type":"if","locations":[{"start":{"line":183,"column":16},"end":{"line":183,"column":16}},{"start":{"line":183,"column":16},"end":{"line":183,"column":16}}]},"13":{"line":186,"type":"if","locations":[{"start":{"line":186,"column":20},"end":{"line":186,"column":20}},{"start":{"line":186,"column":20},"end":{"line":186,"column":20}}]},"14":{"line":193,"type":"if","locations":[{"start":{"line":193,"column":20},"end":{"line":193,"column":20}},{"start":{"line":193,"column":20},"end":{"line":193,"column":20}}]},"15":{"line":195,"type":"binary-expr","locations":[{"start":{"line":195,"column":77},"end":{"line":195,"column":113}},{"start":{"line":195,"column":117},"end":{"line":195,"column":121}}]},"16":{"line":205,"type":"if","locations":[{"start":{"line":205,"column":16},"end":{"line":205,"column":16}},{"start":{"line":205,"column":16},"end":{"line":205,"column":16}}]},"17":{"line":220,"type":"if","locations":[{"start":{"line":220,"column":20},"end":{"line":220,"column":20}},{"start":{"line":220,"column":20},"end":{"line":220,"column":20}}]},"18":{"line":225,"type":"if","locations":[{"start":{"line":225,"column":16},"end":{"line":225,"column":16}},{"start":{"line":225,"column":16},"end":{"line":225,"column":16}}]},"19":{"line":244,"type":"if","locations":[{"start":{"line":244,"column":16},"end":{"line":244,"column":16}},{"start":{"line":244,"column":16},"end":{"line":244,"column":16}}]},"20":{"line":268,"type":"if","locations":[{"start":{"line":268,"column":20},"end":{"line":268,"column":20}},{"start":{"line":268,"column":20},"end":{"line":268,"column":20}}]},"21":{"line":273,"type":"if","locations":[{"start":{"line":273,"column":24},"end":{"line":273,"column":24}},{"start":{"line":273,"column":24},"end":{"line":273,"column":24}}]},"22":{"line":286,"type":"if","locations":[{"start":{"line":286,"column":16},"end":{"line":286,"column":16}},{"start":{"line":286,"column":16},"end":{"line":286,"column":16}}]},"23":{"line":292,"type":"if","locations":[{"start":{"line":292,"column":20},"end":{"line":292,"column":20}},{"start":{"line":292,"column":20},"end":{"line":292,"column":20}}]},"24":{"line":313,"type":"if","locations":[{"start":{"line":313,"column":16},"end":{"line":313,"column":16}},{"start":{"line":313,"column":16},"end":{"line":313,"column":16}}]},"25":{"line":318,"type":"if","locations":[{"start":{"line":318,"column":16},"end":{"line":318,"column":16}},{"start":{"line":318,"column":16},"end":{"line":318,"column":16}}]},"26":{"line":318,"type":"binary-expr","locations":[{"start":{"line":318,"column":20},"end":{"line":318,"column":21}},{"start":{"line":318,"column":25},"end":{"line":318,"column":33}}]},"27":{"line":324,"type":"if","locations":[{"start":{"line":324,"column":20},"end":{"line":324,"column":20}},{"start":{"line":324,"column":20},"end":{"line":324,"column":20}}]},"28":{"line":335,"type":"if","locations":[{"start":{"line":335,"column":16},"end":{"line":335,"column":16}},{"start":{"line":335,"column":16},"end":{"line":335,"column":16}}]},"29":{"line":335,"type":"binary-expr","locations":[{"start":{"line":335,"column":20},"end":{"line":335,"column":33}},{"start":{"line":335,"column":37},"end":{"line":335,"column":45}}]},"30":{"line":336,"type":"if","locations":[{"start":{"line":336,"column":20},"end":{"line":336,"column":20}},{"start":{"line":336,"column":20},"end":{"line":336,"column":20}}]},"31":{"line":347,"type":"if","locations":[{"start":{"line":347,"column":20},"end":{"line":347,"column":20}},{"start":{"line":347,"column":20},"end":{"line":347,"column":20}}]},"32":{"line":347,"type":"binary-expr","locations":[{"start":{"line":347,"column":24},"end":{"line":347,"column":60}},{"start":{"line":347,"column":64},"end":{"line":347,"column":78}}]},"33":{"line":355,"type":"if","locations":[{"start":{"line":355,"column":20},"end":{"line":355,"column":20}},{"start":{"line":355,"column":20},"end":{"line":355,"column":20}}]},"34":{"line":361,"type":"if","locations":[{"start":{"line":361,"column":16},"end":{"line":361,"column":16}},{"start":{"line":361,"column":16},"end":{"line":361,"column":16}}]},"35":{"line":365,"type":"cond-expr","locations":[{"start":{"line":365,"column":66},"end":{"line":365,"column":95}},{"start":{"line":365,"column":98},"end":{"line":365,"column":100}}]},"36":{"line":368,"type":"if","locations":[{"start":{"line":368,"column":16},"end":{"line":368,"column":16}},{"start":{"line":368,"column":16},"end":{"line":368,"column":16}}]},"37":{"line":372,"type":"if","locations":[{"start":{"line":372,"column":24},"end":{"line":372,"column":24}},{"start":{"line":372,"column":24},"end":{"line":372,"column":24}}]},"38":{"line":375,"type":"if","locations":[{"start":{"line":375,"column":24},"end":{"line":375,"column":24}},{"start":{"line":375,"column":24},"end":{"line":375,"column":24}}]},"39":{"line":376,"type":"if","locations":[{"start":{"line":376,"column":28},"end":{"line":376,"column":28}},{"start":{"line":376,"column":28},"end":{"line":376,"column":28}}]},"40":{"line":394,"type":"if","locations":[{"start":{"line":394,"column":20},"end":{"line":394,"column":20}},{"start":{"line":394,"column":20},"end":{"line":394,"column":20}}]},"41":{"line":412,"type":"cond-expr","locations":[{"start":{"line":412,"column":37},"end":{"line":412,"column":54}},{"start":{"line":412,"column":57},"end":{"line":412,"column":61}}]},"42":{"line":413,"type":"if","locations":[{"start":{"line":413,"column":16},"end":{"line":413,"column":16}},{"start":{"line":413,"column":16},"end":{"line":413,"column":16}}]},"43":{"line":413,"type":"binary-expr","locations":[{"start":{"line":413,"column":20},"end":{"line":413,"column":44}},{"start":{"line":413,"column":48},"end":{"line":413,"column":53}}]},"44":{"line":416,"type":"if","locations":[{"start":{"line":416,"column":24},"end":{"line":416,"column":24}},{"start":{"line":416,"column":24},"end":{"line":416,"column":24}}]},"45":{"line":416,"type":"binary-expr","locations":[{"start":{"line":416,"column":28},"end":{"line":416,"column":52}},{"start":{"line":416,"column":56},"end":{"line":416,"column":85}}]},"46":{"line":431,"type":"cond-expr","locations":[{"start":{"line":431,"column":113},"end":{"line":431,"column":126}},{"start":{"line":431,"column":129},"end":{"line":431,"column":162}}]},"47":{"line":431,"type":"binary-expr","locations":[{"start":{"line":431,"column":29},"end":{"line":431,"column":65}},{"start":{"line":431,"column":69},"end":{"line":431,"column":110}}]},"48":{"line":432,"type":"if","locations":[{"start":{"line":432,"column":20},"end":{"line":432,"column":20}},{"start":{"line":432,"column":20},"end":{"line":432,"column":20}}]},"49":{"line":468,"type":"if","locations":[{"start":{"line":468,"column":16},"end":{"line":468,"column":16}},{"start":{"line":468,"column":16},"end":{"line":468,"column":16}}]},"50":{"line":481,"type":"binary-expr","locations":[{"start":{"line":481,"column":40},"end":{"line":481,"column":48}},{"start":{"line":481,"column":52},"end":{"line":481,"column":66}}]},"51":{"line":542,"type":"if","locations":[{"start":{"line":542,"column":16},"end":{"line":542,"column":16}},{"start":{"line":542,"column":16},"end":{"line":542,"column":16}}]},"52":{"line":546,"type":"if","locations":[{"start":{"line":546,"column":16},"end":{"line":546,"column":16}},{"start":{"line":546,"column":16},"end":{"line":546,"column":16}}]},"53":{"line":547,"type":"if","locations":[{"start":{"line":547,"column":20},"end":{"line":547,"column":20}},{"start":{"line":547,"column":20},"end":{"line":547,"column":20}}]},"54":{"line":551,"type":"if","locations":[{"start":{"line":551,"column":16},"end":{"line":551,"column":16}},{"start":{"line":551,"column":16},"end":{"line":551,"column":16}}]},"55":{"line":554,"type":"if","locations":[{"start":{"line":554,"column":28},"end":{"line":554,"column":28}},{"start":{"line":554,"column":28},"end":{"line":554,"column":28}}]},"56":{"line":563,"type":"if","locations":[{"start":{"line":563,"column":24},"end":{"line":563,"column":24}},{"start":{"line":563,"column":24},"end":{"line":563,"column":24}}]},"57":{"line":563,"type":"binary-expr","locations":[{"start":{"line":563,"column":28},"end":{"line":563,"column":55}},{"start":{"line":563,"column":59},"end":{"line":563,"column":101}}]},"58":{"line":586,"type":"if","locations":[{"start":{"line":586,"column":4},"end":{"line":586,"column":4}},{"start":{"line":586,"column":4},"end":{"line":586,"column":4}}]},"59":{"line":588,"type":"if","locations":[{"start":{"line":588,"column":8},"end":{"line":588,"column":8}},{"start":{"line":588,"column":8},"end":{"line":588,"column":8}}]}},"code":["\"use strict\";","","var _core = require(\"6to5-runtime/core-js\");","","/*global KeyboardEvent*/","","var Settings = to5Runtime.interopRequire(require(\"util/Settings\"));","","var Event = to5Runtime.interopRequire(require(\"util/Event\"));","","var Util = to5Runtime.interopRequire(require(\"util/Util\"));","","var Widget = to5Runtime.interopRequire(require(\"Widget\"));","","var HTML_ELEMENT = global.document.documentElement;","","/* Attribute Names */","var ATTR_CREATE_NEW = \"data-new-instance\";","var ATTR_CLOSE = \"data-close-modal\";","var ATTR_NAME = \"data-modal\";","","/* Class names */","var CLS_CONTAINER_CURRENT = \"front\";","var CLS_OPEN = \"open\";","var CLS_CURRENT = \"current\";","var CLS_PART_OF_STACK = \"part-of-stack\";","var CLS_MODAL_OPEN = \"modal-open\";","var CLS_MODAL_CONTAINER = \"modal-container\";","","/* Events */","","/**"," * Event triggered when modal is closed"," * @type {string}"," */","var EVENT_MODAL_CLOSED = exports.EVENT_MODAL_CLOSED = \"flexcss.modal.closed\";","/**"," * Event triggered before a modal is closed, cancelable"," * @type {string}"," */","var EVENT_MODAL_BEFORE_CLOSED = exports.EVENT_MODAL_BEFORE_CLOSED = \"flexcss.modal.beforeClose\";","/**"," * Event triggered when a modal is opened"," * @type {string}"," */","var EVENT_MODAL_OPENED = exports.EVENT_MODAL_OPENED = \"flexcss.modal.opened\";","","/**"," * Event triggered when modal is initilized, called on target"," * @type {string}"," */","var EVENT_MODAL_INIT = exports.EVENT_MODAL_INIT = \"flexcss.modal.init\";","","/**"," * Triggered when the content of an async modal on a target is loaded, called on target"," * @type {string}"," */","var EVENT_MODAL_ASYNC_TARGET_LOADED = exports.EVENT_MODAL_ASYNC_TARGET_LOADED = \"flexcss.modal.asyncTargetLoaded\";","","/**"," * A Modal Implementation"," */","var Modal = (function () {","    function Modal(DelegateContainer, options) {","        to5Runtime.classCallCheck(this, Modal);","","        var doc = global.document,","            container = DelegateContainer instanceof HTMLElement ? DelegateContainer : doc.getElementById(DelegateContainer);","","        // Instance vars:","        if (!container) {","            throw \"Could not found container element by given ID/Element: \" + DelegateContainer;","        }","","        this.currentOpen = null;","","        this.loading = false;","","        this.container = container;","","        /**","         * Default Options","         */","        this.options = {","            classNames: \"modal\",","            closeOnEscape: true,","            closeOnBackgroundClick: true,","            destroyOnFinish: false","        };","","        _core.Object.assign(this.options, options);","","        // Container where events are delegated","        this.eventContainer = null;","        this.eventFunction = null;","","        this.dataMainPageContainer = global.document.body;","","        this.currentScrollTop = 0;","","        this.modalContainer = null;","","        // Destroy full modal instance when no dialogs are bind to?","        // Otherwise container is recycled","        this.destroyOnFinish = this.options.destroyOnFinish;","    }","","    to5Runtime.prototypeProperties(Modal, null, {","        _removeModalFromStack: {","","            /**","             * Removes this modal from global stack","             * Will handle fixing main html element too","             * @private","             * @param n","             */","            value: function _removeModalFromStack(n) {","                var t = Modal._modalInstances.indexOf(n),","                    self = this;","                if (t > -1) {","                    Modal._modalInstances.splice(t, 1);","                    if (0 === Modal._modalInstances.length) {","                        HTML_ELEMENT.classList.remove(CLS_MODAL_OPEN);","                        Settings.get().scrollbarUpdateNodes.forEach(function (n) {","                            // restore scrollPosition:","                            if (self.dataMainPageContainer) {","                                self.dataMainPageContainer.style.position = \"static\";","                                self.dataMainPageContainer.style.top = \"0px\";","                                // reset scrollTop","                                window.scrollTop = self.currentScrollTop;","                                document.body.scrollTop = self.currentScrollTop;","                            }","                            n.style.paddingRight = \"\";","                        });","                    }","                }","            },","            writable: true,","            configurable: true","        },","        getModalContainer: {","","","            /**","             * Modal container that contains all `stacked` modals for this instance","             * @returns {HTMLElement}","             */","            value: function getModalContainer() {","                return this.modalContainer;","            },","            writable: true,","            configurable: true","        },","        close: {","","            /**","             * Closes the current open modal of this stack","             * @params [e], optional event","             * @returns {*}","             */","            value: function close(e) {","                var self = this;","","                // close only on keyboard if instance should","                if (!self.options.closeOnEscape && e instanceof KeyboardEvent) {","                    return false;","                }","","                // close only on background if instance should","                if (!self.options.closeOnBackgroundClick && e && e.type === Settings.CONST_TAB_EVENT && !e.target.hasAttribute(ATTR_CLOSE)) {","                    return false;","                }","","                // if an instance is currently loading, prevent from closing","                if (self.loading) {","                    return false;","                }","","                if (e) {","                    e.preventDefault();","                }","","                if (self.currentOpen) {","                    // dispatch beforeClose event, if prevented prevent modal from closing","                    var ev = Event.dispatchAndFire(self.currentOpen, EVENT_MODAL_BEFORE_CLOSED);","                    if (ev.defaultPrevented) {","                        return false;","                    }","","                    self.currentOpen.removeAttribute(\"style\");","","                    // if there is an previous modal","                    if (self.currentOpen.prevModal) {","                        // switch to the next modal","                        return self.switchModals(self.currentOpen.prevModal, self.currentOpen.prevModal.prevModal || null);","                    }","","                    // finally trigger closed event","                    Event.dispatchAndFire(self.currentOpen, EVENT_MODAL_CLOSED);","                }","                self._removeModalFromStack(self.currentOpen);","","                // Full stack closed:","                self.currentOpen = null;","                if (self.modalContainer) {","                    // setup next open","                    var lastContainer = Modal._modalInstances[Modal._modalInstances.length - 1],","                        classList = self.modalContainer.classList;","                    classList.remove(CLS_CONTAINER_CURRENT);","                    classList.remove(CLS_OPEN);","                    // Remove all current classes from child-nodes","                    for (var i = 0; i < self.modalContainer.childNodes.length; i++) {","                        var node = self.modalContainer.childNodes[i],","                            cl = node.classList;","                        // remove applied styles","                        node.removeAttribute(\"style\");","                        cl.remove(CLS_CURRENT);","                        cl.remove(CLS_PART_OF_STACK);","                    }","                    if (lastContainer) {","                        lastContainer.parentNode.classList.add(CLS_CONTAINER_CURRENT);","                    }","                }","","                if (self.destroyOnFinish) {","                    self.destroy();","                }","                return self;","            },","            writable: true,","            configurable: true","        },","        switchModals: {","","            /**","             * Brings the given modal to front","             * @param co","             * @param last","             */","            value: function switchModals(co, last) {","                co.prevModal = last;","                Modal._modalInstances.push(co);","","                if (last) {","                    last.classList.add(CLS_PART_OF_STACK);","                }","                // set new currentOpen","                this.currentOpen = co;","","                // bring current container to the front","                var instances = Modal._modalInstances;","","                for (var m = 0; m < instances.length; m++) {","                    instances[m].parentNode.classList.remove(CLS_CONTAINER_CURRENT);","                }","                this.modalContainer.classList.add(CLS_CONTAINER_CURRENT);","                // remove animations if animations has been completed, fixes various bugs:","                // - fixes nested scrolling element issue in iOS Browsers / Mobile-Safari","                Util.prefixedAnimateEvent(co, \"AnimationEnd\", function (e, self) {","                    e.target.style.animation = \"none\";","                    e.target.style.webkitAnimation = \"none\";","                    co.removeEventListener(e.type, self, true);","                });","","                for (var i = 0; i < this.modalContainer.childNodes.length; i++) {","                    var n = this.modalContainer.childNodes[i],","                        isCurrent = n.classList.contains(CLS_CURRENT);","                    if (n === co) {","                        co.classList.add(CLS_CURRENT);","                        co.classList.remove(CLS_PART_OF_STACK);","                    } else {","                        n.classList.remove(CLS_CURRENT);","                        if (isCurrent) {","                            this._removeModalFromStack(n);","                            Event.dispatchAndFire(n, EVENT_MODAL_CLOSED);","                        }","                    }","                }","            },","            writable: true,","            configurable: true","        },","        handleScrollbar: {","            value: function handleScrollbar() {","                var self = this;","                if (0 === Modal._modalInstances.length) {","                    HTML_ELEMENT.classList.add(CLS_MODAL_OPEN);","                    // save current scrollTop:","                    var scrollTop = global.pageYOffset,","                        c = self.dataMainPageContainer;","                    self.currentScrollTop = scrollTop;","                    if (c) {","                        c.style.top = scrollTop * -1 + \"px\";","                        c.style.position = \"fixed\";","                    }","                    Settings.get().scrollbarUpdateNodes.forEach(function (n) {","                        n.style.paddingRight = parseInt(global.getComputedStyle(n).paddingRight) + Settings.CONST_SCROLLBAR_WIDTH + \"px\";","                    });","                }","            },","            writable: true,","            configurable: true","        },","        createWidget: {","","            /**","             * Creates a Modal and opens it (later)","             * @param e","             * @returns {Promise|boolean}","             */","            value: function createWidget(e) {","                var self = this;","                if (this.loading) {","                    return false;","                }","","                // check if another modal has registered events on this dom path:","                if (e && e.target) {","                    var foundInstance = Util.parentsUntil(e.target, function (node) {","                        return node.flexModalInstance;","                    });","","                    // if another instance has been found, abort","                    if (foundInstance !== this.container) {","                        return false;","                    }","                }","                var targetContent,","                    future,","                    widget,","                    target,","                    hasTarget = true,","                    isHtmlElement = e instanceof HTMLElement,","                    isWidget = e instanceof Widget;","                if (isHtmlElement || isWidget) {","                    if (isHtmlElement) {","                        targetContent = e;","                    } else {","                        widget = e;","                        targetContent = widget.element;","                    }","                } else {","                    target = e.target;","                    hasTarget = target.hasAttribute(ATTR_NAME);","                    targetContent = target.getAttribute(ATTR_NAME);","                    widget = target.hfWidgetInstance;","                    if (target.hasAttribute(ATTR_CREATE_NEW) && !e.newInstance) {","                        var newInstance = new Modal(this.container).setDestroyOnFinish(true);","                        e.newInstance = true;","                        newInstance.fromEvent(e).then(function () {","                            newInstance.registerEvents(newInstance.getModalContainer());","                        });","                        return false;","                    }","                    if (hasTarget) {","                        e.stopImmediatePropagation();","                        e.preventDefault();","                    }","                }","","                if (!hasTarget) {","                    return false;","                }","","                var modalContainerClasses = this.modalContainer ? this.modalContainer.classList : [];","","                // lazy create modal container","                if (!this.modalContainer) {","                    this.modalContainer = global.document.createElement(\"div\");","                    this.modalContainer.className = CLS_MODAL_CONTAINER + \" \" + CLS_OPEN;","                    var closeModalFunction = function (e) {","                        if (self.loading) {","                            return false;","                        }","                        if (Util.isPartOfNode(e.target, self.currentOpen)) {","                            if (!e.target.hasAttribute(ATTR_CLOSE)) {","                                return false;","                            }","                        }","                        self.close(e);","                    };","","                    this.modalContainer.addEventListener(Settings.CONST_TAB_EVENT, closeModalFunction, false);","","                    modalContainerClasses = this.modalContainer.classList;","                    this.container.appendChild(this.modalContainer);","                } else {","                    modalContainerClasses.add(CLS_OPEN);","                }","","                var loader,","                    doc = global.document,","                    toggleLoader = function (show) {","                    if (show) {","                        loader = doc.createElement(\"div\");","                        loader.className = \"loader-container\";","                        var loaderLoader = doc.createElement(\"div\");","                        loaderLoader.className = \"loader\";","                        loader.appendChild(loaderLoader);","                        self.modalContainer.appendChild(loader);","                    } else {","                        loader.parentNode.removeChild(loader);","                    }","                };","","                this.handleScrollbar();","","                modalContainerClasses.add(CLS_CONTAINER_CURRENT);","                modalContainerClasses.add(\"loading\");","                this.loading = true;","                toggleLoader(true);","                var async = widget ? widget.getAsync() : null;","                if (widget instanceof Widget && async) {","                    future = async.then(function (r) {","                        var result;","                        if (r instanceof HTMLElement || r instanceof DocumentFragment) {","                            result = r;","                        } else {","                            // Create container Element:","                            var element = doc.createElement(\"div\");","                            element.className = self.options.classNames;","                            element.innerHTML = r;","                            element.id = Util.guid();","                            result = element;","                        }","                        widget.finalContent = result;","                        Event.dispatchAndFire(target, EVENT_MODAL_ASYNC_TARGET_LOADED);","                        return result;","                    });","                } else {","                    var el = targetContent instanceof HTMLElement || targetContent instanceof DocumentFragment ? targetContent : doc.getElementById(targetContent);","                    if (el) {","                        future = new _core.Promise(function (resolve) {","                            resolve(el);","                        });","                    } else {","                        throw \"Could not found given modal element (content) with ID: \" + targetContent;","                    }","                }","","                Event.dispatchAndFire(target, EVENT_MODAL_INIT);","","                return future.then(function (el) {","                    el.hfContainerInstance = self;","                    self.modalContainer.appendChild(el);","                    modalContainerClasses.remove(\"loading\");","                    self.loading = false;","                    toggleLoader(false);","","                    self.open(el, true);","","                    return el;","                });","            },","            writable: true,","            configurable: true","        },","        open: {","","            /**","             * Open's an already rendered modal","             * @param {HTMLElement} modal","             * @param {Boolean} [internal], set to true to prevent container management","             */","            value: function open(modal, internal) {","","","                if (!internal) {","                    this.modalContainer.classList.add(\"open\");","                    this.handleScrollbar();","                }","                this.switchModals(modal, this.currentOpen);","","                Event.dispatchAndFire(modal, EVENT_MODAL_OPENED);","            },","            writable: true,","            configurable: true","        },","        registerEvents: {","            value: function registerEvents(delegate) {","                var delegateContainer = delegate || this.container,","                    self = this;","","                // register modal instance so we can detect multiple registrars","                delegateContainer.flexModalInstance = self;","                self.eventFunction = function () {","                    self.createWidget.apply(self, arguments);","                };","                delegateContainer.addEventListener(Settings.CONST_TAB_EVENT, self.eventFunction, false);","","                self.eventContainer = delegateContainer;","                return self;","            },","            writable: true,","            configurable: true","        },","        fromWidget: {","","","            /**","             * Creates a new Dialog Instance either directly from HTML Element or a Widget instance","             * @param {HTMLElement|Widget} widget instance or html element","             * @returns {Promise}","             */","            value: function fromWidget(widget) {","                return this.createWidget(widget);","            },","            writable: true,","            configurable: true","        },","        fromEvent: {","","            /**","             * Creates a Widget from event","             * @param e","             * @returns {Promise}","             */","            value: function fromEvent(e) {","                return this.createWidget(e);","            },","            writable: true,","            configurable: true","        },","        setDestroyOnFinish: {","            value: function setDestroyOnFinish(v) {","                this.destroyOnFinish = v;","                return this;","            },","            writable: true,","            configurable: true","        },","        destroy: {","","            /**","             * Destroy this widget instance, cleans empty DOM nodes","             * Will use fast MutationObserver if available, otherwise falls back to DOMNodeRemoved event","             */","            value: function destroy() {","                var self = this,","                    modalContainer = this.modalContainer;","                // Remove event listener on destroy, do not remove DOM node","                if (self.eventContainer) {","                    self.eventContainer.removeEventListener(Settings.CONST_TAB_EVENT, self.eventFunction, true);","                }","","                if (0 === modalContainer.childNodes.length) {","                    if (modalContainer.parentNode) {","                        modalContainer.parentNode.removeChild(modalContainer);","                    }","                }","                if (global.MutationObserver) {","                    var observer = new MutationObserver(function (mutations) {","                        mutations.forEach(function () {","                            if (0 === modalContainer.childNodes.length) {","                                modalContainer.parentNode.removeChild(modalContainer);","                                observer.disconnect();","                            }","                        });","                    });","                    observer.observe(modalContainer, { childList: true });","                } else {","                    modalContainer.addEventListener(\"DOMNodeRemoved\", function (e) {","                        if (e.target !== modalContainer && 0 === modalContainer.childNodes.length - 1) {","                            modalContainer.parentNode.removeChild(modalContainer);","                        }","                    });","                }","            },","            writable: true,","            configurable: true","        }","    });","","    return Modal;","})();","","exports[\"default\"] = Modal;","","","","// Static variable that keeps track of all open modals","Modal._modalInstances = [];","","// Global keydown listener for modal","global.addEventListener(\"keydown\", function (e) {","    if (27 === e.keyCode) {","        var lastModal = Modal._modalInstances[Modal._modalInstances.length - 1];","        if (lastModal) {","            lastModal.hfContainerInstance.close(e);","        }","    }","});","Object.defineProperty(exports, \"__esModule\", {","    value: true","});"]};
	}
	__cov_uDNHynUXfiYG1N1MRHokGQ = __cov_uDNHynUXfiYG1N1MRHokGQ['/Users/bowlingx/Projekte/flexcss/src/main/Modal.js'];
	__cov_uDNHynUXfiYG1N1MRHokGQ.s['1']++;var _core=__webpack_require__(9);__cov_uDNHynUXfiYG1N1MRHokGQ.s['2']++;var Settings=to5Runtime.interopRequire(__webpack_require__(5));__cov_uDNHynUXfiYG1N1MRHokGQ.s['3']++;var Event=to5Runtime.interopRequire(__webpack_require__(7));__cov_uDNHynUXfiYG1N1MRHokGQ.s['4']++;var Util=to5Runtime.interopRequire(__webpack_require__(8));__cov_uDNHynUXfiYG1N1MRHokGQ.s['5']++;var Widget=to5Runtime.interopRequire(__webpack_require__(4));__cov_uDNHynUXfiYG1N1MRHokGQ.s['6']++;var HTML_ELEMENT=global.document.documentElement;__cov_uDNHynUXfiYG1N1MRHokGQ.s['7']++;var ATTR_CREATE_NEW='data-new-instance';__cov_uDNHynUXfiYG1N1MRHokGQ.s['8']++;var ATTR_CLOSE='data-close-modal';__cov_uDNHynUXfiYG1N1MRHokGQ.s['9']++;var ATTR_NAME='data-modal';__cov_uDNHynUXfiYG1N1MRHokGQ.s['10']++;var CLS_CONTAINER_CURRENT='front';__cov_uDNHynUXfiYG1N1MRHokGQ.s['11']++;var CLS_OPEN='open';__cov_uDNHynUXfiYG1N1MRHokGQ.s['12']++;var CLS_CURRENT='current';__cov_uDNHynUXfiYG1N1MRHokGQ.s['13']++;var CLS_PART_OF_STACK='part-of-stack';__cov_uDNHynUXfiYG1N1MRHokGQ.s['14']++;var CLS_MODAL_OPEN='modal-open';__cov_uDNHynUXfiYG1N1MRHokGQ.s['15']++;var CLS_MODAL_CONTAINER='modal-container';__cov_uDNHynUXfiYG1N1MRHokGQ.s['16']++;var EVENT_MODAL_CLOSED=exports.EVENT_MODAL_CLOSED='flexcss.modal.closed';__cov_uDNHynUXfiYG1N1MRHokGQ.s['17']++;var EVENT_MODAL_BEFORE_CLOSED=exports.EVENT_MODAL_BEFORE_CLOSED='flexcss.modal.beforeClose';__cov_uDNHynUXfiYG1N1MRHokGQ.s['18']++;var EVENT_MODAL_OPENED=exports.EVENT_MODAL_OPENED='flexcss.modal.opened';__cov_uDNHynUXfiYG1N1MRHokGQ.s['19']++;var EVENT_MODAL_INIT=exports.EVENT_MODAL_INIT='flexcss.modal.init';__cov_uDNHynUXfiYG1N1MRHokGQ.s['20']++;var EVENT_MODAL_ASYNC_TARGET_LOADED=exports.EVENT_MODAL_ASYNC_TARGET_LOADED='flexcss.modal.asyncTargetLoaded';__cov_uDNHynUXfiYG1N1MRHokGQ.s['21']++;var Modal=function(){__cov_uDNHynUXfiYG1N1MRHokGQ.f['1']++;function Modal(DelegateContainer,options){__cov_uDNHynUXfiYG1N1MRHokGQ.f['2']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['23']++;to5Runtime.classCallCheck(this,Modal);__cov_uDNHynUXfiYG1N1MRHokGQ.s['24']++;var doc=global.document,container=DelegateContainer instanceof HTMLElement?(__cov_uDNHynUXfiYG1N1MRHokGQ.b['1'][0]++,DelegateContainer):(__cov_uDNHynUXfiYG1N1MRHokGQ.b['1'][1]++,doc.getElementById(DelegateContainer));__cov_uDNHynUXfiYG1N1MRHokGQ.s['25']++;if(!container){__cov_uDNHynUXfiYG1N1MRHokGQ.b['2'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['26']++;throw'Could not found container element by given ID/Element: '+DelegateContainer;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['2'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['27']++;this.currentOpen=null;__cov_uDNHynUXfiYG1N1MRHokGQ.s['28']++;this.loading=false;__cov_uDNHynUXfiYG1N1MRHokGQ.s['29']++;this.container=container;__cov_uDNHynUXfiYG1N1MRHokGQ.s['30']++;this.options={classNames:'modal',closeOnEscape:true,closeOnBackgroundClick:true,destroyOnFinish:false};__cov_uDNHynUXfiYG1N1MRHokGQ.s['31']++;_core.Object.assign(this.options,options);__cov_uDNHynUXfiYG1N1MRHokGQ.s['32']++;this.eventContainer=null;__cov_uDNHynUXfiYG1N1MRHokGQ.s['33']++;this.eventFunction=null;__cov_uDNHynUXfiYG1N1MRHokGQ.s['34']++;this.dataMainPageContainer=global.document.body;__cov_uDNHynUXfiYG1N1MRHokGQ.s['35']++;this.currentScrollTop=0;__cov_uDNHynUXfiYG1N1MRHokGQ.s['36']++;this.modalContainer=null;__cov_uDNHynUXfiYG1N1MRHokGQ.s['37']++;this.destroyOnFinish=this.options.destroyOnFinish;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['38']++;to5Runtime.prototypeProperties(Modal,null,{_removeModalFromStack:{value:function _removeModalFromStack(n){__cov_uDNHynUXfiYG1N1MRHokGQ.f['3']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['39']++;var t=Modal._modalInstances.indexOf(n),self=this;__cov_uDNHynUXfiYG1N1MRHokGQ.s['40']++;if(t>-1){__cov_uDNHynUXfiYG1N1MRHokGQ.b['3'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['41']++;Modal._modalInstances.splice(t,1);__cov_uDNHynUXfiYG1N1MRHokGQ.s['42']++;if(0===Modal._modalInstances.length){__cov_uDNHynUXfiYG1N1MRHokGQ.b['4'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['43']++;HTML_ELEMENT.classList.remove(CLS_MODAL_OPEN);__cov_uDNHynUXfiYG1N1MRHokGQ.s['44']++;Settings.get().scrollbarUpdateNodes.forEach(function(n){__cov_uDNHynUXfiYG1N1MRHokGQ.f['4']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['45']++;if(self.dataMainPageContainer){__cov_uDNHynUXfiYG1N1MRHokGQ.b['5'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['46']++;self.dataMainPageContainer.style.position='static';__cov_uDNHynUXfiYG1N1MRHokGQ.s['47']++;self.dataMainPageContainer.style.top='0px';__cov_uDNHynUXfiYG1N1MRHokGQ.s['48']++;window.scrollTop=self.currentScrollTop;__cov_uDNHynUXfiYG1N1MRHokGQ.s['49']++;document.body.scrollTop=self.currentScrollTop;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['5'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['50']++;n.style.paddingRight='';});}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['4'][1]++;}}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['3'][1]++;}},writable:true,configurable:true},getModalContainer:{value:function getModalContainer(){__cov_uDNHynUXfiYG1N1MRHokGQ.f['5']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['51']++;return this.modalContainer;},writable:true,configurable:true},close:{value:function close(e){__cov_uDNHynUXfiYG1N1MRHokGQ.f['6']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['52']++;var self=this;__cov_uDNHynUXfiYG1N1MRHokGQ.s['53']++;if((__cov_uDNHynUXfiYG1N1MRHokGQ.b['7'][0]++,!self.options.closeOnEscape)&&(__cov_uDNHynUXfiYG1N1MRHokGQ.b['7'][1]++,e instanceof KeyboardEvent)){__cov_uDNHynUXfiYG1N1MRHokGQ.b['6'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['54']++;return false;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['6'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['55']++;if((__cov_uDNHynUXfiYG1N1MRHokGQ.b['9'][0]++,!self.options.closeOnBackgroundClick)&&(__cov_uDNHynUXfiYG1N1MRHokGQ.b['9'][1]++,e)&&(__cov_uDNHynUXfiYG1N1MRHokGQ.b['9'][2]++,e.type===Settings.CONST_TAB_EVENT)&&(__cov_uDNHynUXfiYG1N1MRHokGQ.b['9'][3]++,!e.target.hasAttribute(ATTR_CLOSE))){__cov_uDNHynUXfiYG1N1MRHokGQ.b['8'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['56']++;return false;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['8'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['57']++;if(self.loading){__cov_uDNHynUXfiYG1N1MRHokGQ.b['10'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['58']++;return false;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['10'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['59']++;if(e){__cov_uDNHynUXfiYG1N1MRHokGQ.b['11'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['60']++;e.preventDefault();}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['11'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['61']++;if(self.currentOpen){__cov_uDNHynUXfiYG1N1MRHokGQ.b['12'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['62']++;var ev=Event.dispatchAndFire(self.currentOpen,EVENT_MODAL_BEFORE_CLOSED);__cov_uDNHynUXfiYG1N1MRHokGQ.s['63']++;if(ev.defaultPrevented){__cov_uDNHynUXfiYG1N1MRHokGQ.b['13'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['64']++;return false;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['13'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['65']++;self.currentOpen.removeAttribute('style');__cov_uDNHynUXfiYG1N1MRHokGQ.s['66']++;if(self.currentOpen.prevModal){__cov_uDNHynUXfiYG1N1MRHokGQ.b['14'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['67']++;return self.switchModals(self.currentOpen.prevModal,(__cov_uDNHynUXfiYG1N1MRHokGQ.b['15'][0]++,self.currentOpen.prevModal.prevModal)||(__cov_uDNHynUXfiYG1N1MRHokGQ.b['15'][1]++,null));}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['14'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['68']++;Event.dispatchAndFire(self.currentOpen,EVENT_MODAL_CLOSED);}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['12'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['69']++;self._removeModalFromStack(self.currentOpen);__cov_uDNHynUXfiYG1N1MRHokGQ.s['70']++;self.currentOpen=null;__cov_uDNHynUXfiYG1N1MRHokGQ.s['71']++;if(self.modalContainer){__cov_uDNHynUXfiYG1N1MRHokGQ.b['16'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['72']++;var lastContainer=Modal._modalInstances[Modal._modalInstances.length-1],classList=self.modalContainer.classList;__cov_uDNHynUXfiYG1N1MRHokGQ.s['73']++;classList.remove(CLS_CONTAINER_CURRENT);__cov_uDNHynUXfiYG1N1MRHokGQ.s['74']++;classList.remove(CLS_OPEN);__cov_uDNHynUXfiYG1N1MRHokGQ.s['75']++;for(var i=0;i<self.modalContainer.childNodes.length;i++){__cov_uDNHynUXfiYG1N1MRHokGQ.s['76']++;var node=self.modalContainer.childNodes[i],cl=node.classList;__cov_uDNHynUXfiYG1N1MRHokGQ.s['77']++;node.removeAttribute('style');__cov_uDNHynUXfiYG1N1MRHokGQ.s['78']++;cl.remove(CLS_CURRENT);__cov_uDNHynUXfiYG1N1MRHokGQ.s['79']++;cl.remove(CLS_PART_OF_STACK);}__cov_uDNHynUXfiYG1N1MRHokGQ.s['80']++;if(lastContainer){__cov_uDNHynUXfiYG1N1MRHokGQ.b['17'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['81']++;lastContainer.parentNode.classList.add(CLS_CONTAINER_CURRENT);}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['17'][1]++;}}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['16'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['82']++;if(self.destroyOnFinish){__cov_uDNHynUXfiYG1N1MRHokGQ.b['18'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['83']++;self.destroy();}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['18'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['84']++;return self;},writable:true,configurable:true},switchModals:{value:function switchModals(co,last){__cov_uDNHynUXfiYG1N1MRHokGQ.f['7']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['85']++;co.prevModal=last;__cov_uDNHynUXfiYG1N1MRHokGQ.s['86']++;Modal._modalInstances.push(co);__cov_uDNHynUXfiYG1N1MRHokGQ.s['87']++;if(last){__cov_uDNHynUXfiYG1N1MRHokGQ.b['19'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['88']++;last.classList.add(CLS_PART_OF_STACK);}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['19'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['89']++;this.currentOpen=co;__cov_uDNHynUXfiYG1N1MRHokGQ.s['90']++;var instances=Modal._modalInstances;__cov_uDNHynUXfiYG1N1MRHokGQ.s['91']++;for(var m=0;m<instances.length;m++){__cov_uDNHynUXfiYG1N1MRHokGQ.s['92']++;instances[m].parentNode.classList.remove(CLS_CONTAINER_CURRENT);}__cov_uDNHynUXfiYG1N1MRHokGQ.s['93']++;this.modalContainer.classList.add(CLS_CONTAINER_CURRENT);__cov_uDNHynUXfiYG1N1MRHokGQ.s['94']++;Util.prefixedAnimateEvent(co,'AnimationEnd',function(e,self){__cov_uDNHynUXfiYG1N1MRHokGQ.f['8']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['95']++;e.target.style.animation='none';__cov_uDNHynUXfiYG1N1MRHokGQ.s['96']++;e.target.style.webkitAnimation='none';__cov_uDNHynUXfiYG1N1MRHokGQ.s['97']++;co.removeEventListener(e.type,self,true);});__cov_uDNHynUXfiYG1N1MRHokGQ.s['98']++;for(var i=0;i<this.modalContainer.childNodes.length;i++){__cov_uDNHynUXfiYG1N1MRHokGQ.s['99']++;var n=this.modalContainer.childNodes[i],isCurrent=n.classList.contains(CLS_CURRENT);__cov_uDNHynUXfiYG1N1MRHokGQ.s['100']++;if(n===co){__cov_uDNHynUXfiYG1N1MRHokGQ.b['20'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['101']++;co.classList.add(CLS_CURRENT);__cov_uDNHynUXfiYG1N1MRHokGQ.s['102']++;co.classList.remove(CLS_PART_OF_STACK);}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['20'][1]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['103']++;n.classList.remove(CLS_CURRENT);__cov_uDNHynUXfiYG1N1MRHokGQ.s['104']++;if(isCurrent){__cov_uDNHynUXfiYG1N1MRHokGQ.b['21'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['105']++;this._removeModalFromStack(n);__cov_uDNHynUXfiYG1N1MRHokGQ.s['106']++;Event.dispatchAndFire(n,EVENT_MODAL_CLOSED);}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['21'][1]++;}}}},writable:true,configurable:true},handleScrollbar:{value:function handleScrollbar(){__cov_uDNHynUXfiYG1N1MRHokGQ.f['9']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['107']++;var self=this;__cov_uDNHynUXfiYG1N1MRHokGQ.s['108']++;if(0===Modal._modalInstances.length){__cov_uDNHynUXfiYG1N1MRHokGQ.b['22'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['109']++;HTML_ELEMENT.classList.add(CLS_MODAL_OPEN);__cov_uDNHynUXfiYG1N1MRHokGQ.s['110']++;var scrollTop=global.pageYOffset,c=self.dataMainPageContainer;__cov_uDNHynUXfiYG1N1MRHokGQ.s['111']++;self.currentScrollTop=scrollTop;__cov_uDNHynUXfiYG1N1MRHokGQ.s['112']++;if(c){__cov_uDNHynUXfiYG1N1MRHokGQ.b['23'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['113']++;c.style.top=scrollTop*-1+'px';__cov_uDNHynUXfiYG1N1MRHokGQ.s['114']++;c.style.position='fixed';}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['23'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['115']++;Settings.get().scrollbarUpdateNodes.forEach(function(n){__cov_uDNHynUXfiYG1N1MRHokGQ.f['10']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['116']++;n.style.paddingRight=parseInt(global.getComputedStyle(n).paddingRight)+Settings.CONST_SCROLLBAR_WIDTH+'px';});}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['22'][1]++;}},writable:true,configurable:true},createWidget:{value:function createWidget(e){__cov_uDNHynUXfiYG1N1MRHokGQ.f['11']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['117']++;var self=this;__cov_uDNHynUXfiYG1N1MRHokGQ.s['118']++;if(this.loading){__cov_uDNHynUXfiYG1N1MRHokGQ.b['24'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['119']++;return false;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['24'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['120']++;if((__cov_uDNHynUXfiYG1N1MRHokGQ.b['26'][0]++,e)&&(__cov_uDNHynUXfiYG1N1MRHokGQ.b['26'][1]++,e.target)){__cov_uDNHynUXfiYG1N1MRHokGQ.b['25'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['121']++;var foundInstance=Util.parentsUntil(e.target,function(node){__cov_uDNHynUXfiYG1N1MRHokGQ.f['12']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['122']++;return node.flexModalInstance;});__cov_uDNHynUXfiYG1N1MRHokGQ.s['123']++;if(foundInstance!==this.container){__cov_uDNHynUXfiYG1N1MRHokGQ.b['27'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['124']++;return false;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['27'][1]++;}}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['25'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['125']++;var targetContent,future,widget,target,hasTarget=true,isHtmlElement=e instanceof HTMLElement,isWidget=e instanceof Widget;__cov_uDNHynUXfiYG1N1MRHokGQ.s['126']++;if((__cov_uDNHynUXfiYG1N1MRHokGQ.b['29'][0]++,isHtmlElement)||(__cov_uDNHynUXfiYG1N1MRHokGQ.b['29'][1]++,isWidget)){__cov_uDNHynUXfiYG1N1MRHokGQ.b['28'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['127']++;if(isHtmlElement){__cov_uDNHynUXfiYG1N1MRHokGQ.b['30'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['128']++;targetContent=e;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['30'][1]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['129']++;widget=e;__cov_uDNHynUXfiYG1N1MRHokGQ.s['130']++;targetContent=widget.element;}}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['28'][1]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['131']++;target=e.target;__cov_uDNHynUXfiYG1N1MRHokGQ.s['132']++;hasTarget=target.hasAttribute(ATTR_NAME);__cov_uDNHynUXfiYG1N1MRHokGQ.s['133']++;targetContent=target.getAttribute(ATTR_NAME);__cov_uDNHynUXfiYG1N1MRHokGQ.s['134']++;widget=target.hfWidgetInstance;__cov_uDNHynUXfiYG1N1MRHokGQ.s['135']++;if((__cov_uDNHynUXfiYG1N1MRHokGQ.b['32'][0]++,target.hasAttribute(ATTR_CREATE_NEW))&&(__cov_uDNHynUXfiYG1N1MRHokGQ.b['32'][1]++,!e.newInstance)){__cov_uDNHynUXfiYG1N1MRHokGQ.b['31'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['136']++;var newInstance=new Modal(this.container).setDestroyOnFinish(true);__cov_uDNHynUXfiYG1N1MRHokGQ.s['137']++;e.newInstance=true;__cov_uDNHynUXfiYG1N1MRHokGQ.s['138']++;newInstance.fromEvent(e).then(function(){__cov_uDNHynUXfiYG1N1MRHokGQ.f['13']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['139']++;newInstance.registerEvents(newInstance.getModalContainer());});__cov_uDNHynUXfiYG1N1MRHokGQ.s['140']++;return false;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['31'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['141']++;if(hasTarget){__cov_uDNHynUXfiYG1N1MRHokGQ.b['33'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['142']++;e.stopImmediatePropagation();__cov_uDNHynUXfiYG1N1MRHokGQ.s['143']++;e.preventDefault();}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['33'][1]++;}}__cov_uDNHynUXfiYG1N1MRHokGQ.s['144']++;if(!hasTarget){__cov_uDNHynUXfiYG1N1MRHokGQ.b['34'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['145']++;return false;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['34'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['146']++;var modalContainerClasses=this.modalContainer?(__cov_uDNHynUXfiYG1N1MRHokGQ.b['35'][0]++,this.modalContainer.classList):(__cov_uDNHynUXfiYG1N1MRHokGQ.b['35'][1]++,[]);__cov_uDNHynUXfiYG1N1MRHokGQ.s['147']++;if(!this.modalContainer){__cov_uDNHynUXfiYG1N1MRHokGQ.b['36'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['148']++;this.modalContainer=global.document.createElement('div');__cov_uDNHynUXfiYG1N1MRHokGQ.s['149']++;this.modalContainer.className=CLS_MODAL_CONTAINER+' '+CLS_OPEN;__cov_uDNHynUXfiYG1N1MRHokGQ.s['150']++;var closeModalFunction=function(e){__cov_uDNHynUXfiYG1N1MRHokGQ.f['14']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['151']++;if(self.loading){__cov_uDNHynUXfiYG1N1MRHokGQ.b['37'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['152']++;return false;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['37'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['153']++;if(Util.isPartOfNode(e.target,self.currentOpen)){__cov_uDNHynUXfiYG1N1MRHokGQ.b['38'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['154']++;if(!e.target.hasAttribute(ATTR_CLOSE)){__cov_uDNHynUXfiYG1N1MRHokGQ.b['39'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['155']++;return false;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['39'][1]++;}}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['38'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['156']++;self.close(e);};__cov_uDNHynUXfiYG1N1MRHokGQ.s['157']++;this.modalContainer.addEventListener(Settings.CONST_TAB_EVENT,closeModalFunction,false);__cov_uDNHynUXfiYG1N1MRHokGQ.s['158']++;modalContainerClasses=this.modalContainer.classList;__cov_uDNHynUXfiYG1N1MRHokGQ.s['159']++;this.container.appendChild(this.modalContainer);}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['36'][1]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['160']++;modalContainerClasses.add(CLS_OPEN);}__cov_uDNHynUXfiYG1N1MRHokGQ.s['161']++;var loader,doc=global.document,toggleLoader=function(show){__cov_uDNHynUXfiYG1N1MRHokGQ.f['15']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['162']++;if(show){__cov_uDNHynUXfiYG1N1MRHokGQ.b['40'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['163']++;loader=doc.createElement('div');__cov_uDNHynUXfiYG1N1MRHokGQ.s['164']++;loader.className='loader-container';__cov_uDNHynUXfiYG1N1MRHokGQ.s['165']++;var loaderLoader=doc.createElement('div');__cov_uDNHynUXfiYG1N1MRHokGQ.s['166']++;loaderLoader.className='loader';__cov_uDNHynUXfiYG1N1MRHokGQ.s['167']++;loader.appendChild(loaderLoader);__cov_uDNHynUXfiYG1N1MRHokGQ.s['168']++;self.modalContainer.appendChild(loader);}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['40'][1]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['169']++;loader.parentNode.removeChild(loader);}};__cov_uDNHynUXfiYG1N1MRHokGQ.s['170']++;this.handleScrollbar();__cov_uDNHynUXfiYG1N1MRHokGQ.s['171']++;modalContainerClasses.add(CLS_CONTAINER_CURRENT);__cov_uDNHynUXfiYG1N1MRHokGQ.s['172']++;modalContainerClasses.add('loading');__cov_uDNHynUXfiYG1N1MRHokGQ.s['173']++;this.loading=true;__cov_uDNHynUXfiYG1N1MRHokGQ.s['174']++;toggleLoader(true);__cov_uDNHynUXfiYG1N1MRHokGQ.s['175']++;var async=widget?(__cov_uDNHynUXfiYG1N1MRHokGQ.b['41'][0]++,widget.getAsync()):(__cov_uDNHynUXfiYG1N1MRHokGQ.b['41'][1]++,null);__cov_uDNHynUXfiYG1N1MRHokGQ.s['176']++;if((__cov_uDNHynUXfiYG1N1MRHokGQ.b['43'][0]++,widget instanceof Widget)&&(__cov_uDNHynUXfiYG1N1MRHokGQ.b['43'][1]++,async)){__cov_uDNHynUXfiYG1N1MRHokGQ.b['42'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['177']++;future=async.then(function(r){__cov_uDNHynUXfiYG1N1MRHokGQ.f['16']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['178']++;var result;__cov_uDNHynUXfiYG1N1MRHokGQ.s['179']++;if((__cov_uDNHynUXfiYG1N1MRHokGQ.b['45'][0]++,r instanceof HTMLElement)||(__cov_uDNHynUXfiYG1N1MRHokGQ.b['45'][1]++,r instanceof DocumentFragment)){__cov_uDNHynUXfiYG1N1MRHokGQ.b['44'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['180']++;result=r;}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['44'][1]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['181']++;var element=doc.createElement('div');__cov_uDNHynUXfiYG1N1MRHokGQ.s['182']++;element.className=self.options.classNames;__cov_uDNHynUXfiYG1N1MRHokGQ.s['183']++;element.innerHTML=r;__cov_uDNHynUXfiYG1N1MRHokGQ.s['184']++;element.id=Util.guid();__cov_uDNHynUXfiYG1N1MRHokGQ.s['185']++;result=element;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['186']++;widget.finalContent=result;__cov_uDNHynUXfiYG1N1MRHokGQ.s['187']++;Event.dispatchAndFire(target,EVENT_MODAL_ASYNC_TARGET_LOADED);__cov_uDNHynUXfiYG1N1MRHokGQ.s['188']++;return result;});}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['42'][1]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['189']++;var el=(__cov_uDNHynUXfiYG1N1MRHokGQ.b['47'][0]++,targetContent instanceof HTMLElement)||(__cov_uDNHynUXfiYG1N1MRHokGQ.b['47'][1]++,targetContent instanceof DocumentFragment)?(__cov_uDNHynUXfiYG1N1MRHokGQ.b['46'][0]++,targetContent):(__cov_uDNHynUXfiYG1N1MRHokGQ.b['46'][1]++,doc.getElementById(targetContent));__cov_uDNHynUXfiYG1N1MRHokGQ.s['190']++;if(el){__cov_uDNHynUXfiYG1N1MRHokGQ.b['48'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['191']++;future=new _core.Promise(function(resolve){__cov_uDNHynUXfiYG1N1MRHokGQ.f['17']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['192']++;resolve(el);});}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['48'][1]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['193']++;throw'Could not found given modal element (content) with ID: '+targetContent;}}__cov_uDNHynUXfiYG1N1MRHokGQ.s['194']++;Event.dispatchAndFire(target,EVENT_MODAL_INIT);__cov_uDNHynUXfiYG1N1MRHokGQ.s['195']++;return future.then(function(el){__cov_uDNHynUXfiYG1N1MRHokGQ.f['18']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['196']++;el.hfContainerInstance=self;__cov_uDNHynUXfiYG1N1MRHokGQ.s['197']++;self.modalContainer.appendChild(el);__cov_uDNHynUXfiYG1N1MRHokGQ.s['198']++;modalContainerClasses.remove('loading');__cov_uDNHynUXfiYG1N1MRHokGQ.s['199']++;self.loading=false;__cov_uDNHynUXfiYG1N1MRHokGQ.s['200']++;toggleLoader(false);__cov_uDNHynUXfiYG1N1MRHokGQ.s['201']++;self.open(el,true);__cov_uDNHynUXfiYG1N1MRHokGQ.s['202']++;return el;});},writable:true,configurable:true},open:{value:function open(modal,internal){__cov_uDNHynUXfiYG1N1MRHokGQ.f['19']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['203']++;if(!internal){__cov_uDNHynUXfiYG1N1MRHokGQ.b['49'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['204']++;this.modalContainer.classList.add('open');__cov_uDNHynUXfiYG1N1MRHokGQ.s['205']++;this.handleScrollbar();}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['49'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['206']++;this.switchModals(modal,this.currentOpen);__cov_uDNHynUXfiYG1N1MRHokGQ.s['207']++;Event.dispatchAndFire(modal,EVENT_MODAL_OPENED);},writable:true,configurable:true},registerEvents:{value:function registerEvents(delegate){__cov_uDNHynUXfiYG1N1MRHokGQ.f['20']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['208']++;var delegateContainer=(__cov_uDNHynUXfiYG1N1MRHokGQ.b['50'][0]++,delegate)||(__cov_uDNHynUXfiYG1N1MRHokGQ.b['50'][1]++,this.container),self=this;__cov_uDNHynUXfiYG1N1MRHokGQ.s['209']++;delegateContainer.flexModalInstance=self;__cov_uDNHynUXfiYG1N1MRHokGQ.s['210']++;self.eventFunction=function(){__cov_uDNHynUXfiYG1N1MRHokGQ.f['21']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['211']++;self.createWidget.apply(self,arguments);};__cov_uDNHynUXfiYG1N1MRHokGQ.s['212']++;delegateContainer.addEventListener(Settings.CONST_TAB_EVENT,self.eventFunction,false);__cov_uDNHynUXfiYG1N1MRHokGQ.s['213']++;self.eventContainer=delegateContainer;__cov_uDNHynUXfiYG1N1MRHokGQ.s['214']++;return self;},writable:true,configurable:true},fromWidget:{value:function fromWidget(widget){__cov_uDNHynUXfiYG1N1MRHokGQ.f['22']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['215']++;return this.createWidget(widget);},writable:true,configurable:true},fromEvent:{value:function fromEvent(e){__cov_uDNHynUXfiYG1N1MRHokGQ.f['23']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['216']++;return this.createWidget(e);},writable:true,configurable:true},setDestroyOnFinish:{value:function setDestroyOnFinish(v){__cov_uDNHynUXfiYG1N1MRHokGQ.f['24']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['217']++;this.destroyOnFinish=v;__cov_uDNHynUXfiYG1N1MRHokGQ.s['218']++;return this;},writable:true,configurable:true},destroy:{value:function destroy(){__cov_uDNHynUXfiYG1N1MRHokGQ.f['25']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['219']++;var self=this,modalContainer=this.modalContainer;__cov_uDNHynUXfiYG1N1MRHokGQ.s['220']++;if(self.eventContainer){__cov_uDNHynUXfiYG1N1MRHokGQ.b['51'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['221']++;self.eventContainer.removeEventListener(Settings.CONST_TAB_EVENT,self.eventFunction,true);}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['51'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['222']++;if(0===modalContainer.childNodes.length){__cov_uDNHynUXfiYG1N1MRHokGQ.b['52'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['223']++;if(modalContainer.parentNode){__cov_uDNHynUXfiYG1N1MRHokGQ.b['53'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['224']++;modalContainer.parentNode.removeChild(modalContainer);}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['53'][1]++;}}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['52'][1]++;}__cov_uDNHynUXfiYG1N1MRHokGQ.s['225']++;if(global.MutationObserver){__cov_uDNHynUXfiYG1N1MRHokGQ.b['54'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['226']++;var observer=new MutationObserver(function(mutations){__cov_uDNHynUXfiYG1N1MRHokGQ.f['26']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['227']++;mutations.forEach(function(){__cov_uDNHynUXfiYG1N1MRHokGQ.f['27']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['228']++;if(0===modalContainer.childNodes.length){__cov_uDNHynUXfiYG1N1MRHokGQ.b['55'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['229']++;modalContainer.parentNode.removeChild(modalContainer);__cov_uDNHynUXfiYG1N1MRHokGQ.s['230']++;observer.disconnect();}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['55'][1]++;}});});__cov_uDNHynUXfiYG1N1MRHokGQ.s['231']++;observer.observe(modalContainer,{childList:true});}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['54'][1]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['232']++;modalContainer.addEventListener('DOMNodeRemoved',function(e){__cov_uDNHynUXfiYG1N1MRHokGQ.f['28']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['233']++;if((__cov_uDNHynUXfiYG1N1MRHokGQ.b['57'][0]++,e.target!==modalContainer)&&(__cov_uDNHynUXfiYG1N1MRHokGQ.b['57'][1]++,0===modalContainer.childNodes.length-1)){__cov_uDNHynUXfiYG1N1MRHokGQ.b['56'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['234']++;modalContainer.parentNode.removeChild(modalContainer);}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['56'][1]++;}});}},writable:true,configurable:true}});__cov_uDNHynUXfiYG1N1MRHokGQ.s['235']++;return Modal;}();__cov_uDNHynUXfiYG1N1MRHokGQ.s['236']++;exports['default']=Modal;__cov_uDNHynUXfiYG1N1MRHokGQ.s['237']++;Modal._modalInstances=[];__cov_uDNHynUXfiYG1N1MRHokGQ.s['238']++;global.addEventListener('keydown',function(e){__cov_uDNHynUXfiYG1N1MRHokGQ.f['29']++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['239']++;if(27===e.keyCode){__cov_uDNHynUXfiYG1N1MRHokGQ.b['58'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['240']++;var lastModal=Modal._modalInstances[Modal._modalInstances.length-1];__cov_uDNHynUXfiYG1N1MRHokGQ.s['241']++;if(lastModal){__cov_uDNHynUXfiYG1N1MRHokGQ.b['59'][0]++;__cov_uDNHynUXfiYG1N1MRHokGQ.s['242']++;lastModal.hfContainerInstance.close(e);}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['59'][1]++;}}else{__cov_uDNHynUXfiYG1N1MRHokGQ.b['58'][1]++;}});__cov_uDNHynUXfiYG1N1MRHokGQ.s['243']++;Object.defineProperty(exports,'__esModule',{value:true});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime, global) {"use strict";
	var __cov_01N75i$61$bn_QC8Pt2vfA = (Function('return this'))();
	if (!__cov_01N75i$61$bn_QC8Pt2vfA.__coverage__) { __cov_01N75i$61$bn_QC8Pt2vfA.__coverage__ = {}; }
	__cov_01N75i$61$bn_QC8Pt2vfA = __cov_01N75i$61$bn_QC8Pt2vfA.__coverage__;
	if (!(__cov_01N75i$61$bn_QC8Pt2vfA['/Users/bowlingx/Projekte/flexcss/src/main/Widget.js'])) {
	   __cov_01N75i$61$bn_QC8Pt2vfA['/Users/bowlingx/Projekte/flexcss/src/main/Widget.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/main/Widget.js","s":{"1":0,"2":0,"3":1,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"(anonymous_1)","line":8,"loc":{"start":{"line":8,"column":14},"end":{"line":8,"column":26}}},"2":{"name":"Widget","line":13,"loc":{"start":{"line":13,"column":4},"end":{"line":13,"column":29}}},"3":{"name":"(anonymous_3)","line":30,"loc":{"start":{"line":30,"column":30},"end":{"line":30,"column":42}}},"4":{"name":"(anonymous_4)","line":31,"loc":{"start":{"line":31,"column":45},"end":{"line":31,"column":58}}},"5":{"name":"getAsync","line":53,"loc":{"start":{"line":53,"column":19},"end":{"line":53,"column":39}}},"6":{"name":"setAsync","line":65,"loc":{"start":{"line":65,"column":19},"end":{"line":65,"column":44}}},"7":{"name":"getFinalContent","line":77,"loc":{"start":{"line":77,"column":19},"end":{"line":77,"column":46}}},"8":{"name":"destroy","line":89,"loc":{"start":{"line":89,"column":19},"end":{"line":89,"column":38}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":44}},"2":{"start":{"line":8,"column":0},"end":{"line":107,"column":5}},"3":{"start":{"line":13,"column":4},"end":{"line":44,"column":5}},"4":{"start":{"line":14,"column":8},"end":{"line":14,"column":25}},"5":{"start":{"line":15,"column":8},"end":{"line":15,"column":48}},"6":{"start":{"line":21,"column":8},"end":{"line":21,"column":33}},"7":{"start":{"line":23,"column":8},"end":{"line":38,"column":9}},"8":{"start":{"line":27,"column":12},"end":{"line":27,"column":110}},"9":{"start":{"line":28,"column":12},"end":{"line":37,"column":13}},"10":{"start":{"line":29,"column":16},"end":{"line":29,"column":53}},"11":{"start":{"line":30,"column":16},"end":{"line":34,"column":19}},"12":{"start":{"line":31,"column":20},"end":{"line":33,"column":23}},"13":{"start":{"line":32,"column":24},"end":{"line":32,"column":41}},"14":{"start":{"line":36,"column":16},"end":{"line":36,"column":68}},"15":{"start":{"line":43,"column":8},"end":{"line":43,"column":33}},"16":{"start":{"line":46,"column":4},"end":{"line":104,"column":7}},"17":{"start":{"line":54,"column":16},"end":{"line":54,"column":43}},"18":{"start":{"line":66,"column":16},"end":{"line":66,"column":42}},"19":{"start":{"line":67,"column":16},"end":{"line":67,"column":28}},"20":{"start":{"line":78,"column":16},"end":{"line":78,"column":41}},"21":{"start":{"line":90,"column":16},"end":{"line":93,"column":17}},"22":{"start":{"line":91,"column":20},"end":{"line":91,"column":80}},"23":{"start":{"line":92,"column":20},"end":{"line":92,"column":32}},"24":{"start":{"line":95,"column":16},"end":{"line":95,"column":36}},"25":{"start":{"line":96,"column":16},"end":{"line":96,"column":41}},"26":{"start":{"line":97,"column":16},"end":{"line":97,"column":41}},"27":{"start":{"line":99,"column":16},"end":{"line":99,"column":29}},"28":{"start":{"line":106,"column":4},"end":{"line":106,"column":18}},"29":{"start":{"line":109,"column":0},"end":{"line":109,"column":24}}},"branchMap":{"1":{"line":23,"type":"if","locations":[{"start":{"line":23,"column":8},"end":{"line":23,"column":8}},{"start":{"line":23,"column":8},"end":{"line":23,"column":8}}]},"2":{"line":27,"type":"cond-expr","locations":[{"start":{"line":27,"column":60},"end":{"line":27,"column":67}},{"start":{"line":27,"column":70},"end":{"line":27,"column":109}}]},"3":{"line":28,"type":"if","locations":[{"start":{"line":28,"column":12},"end":{"line":28,"column":12}},{"start":{"line":28,"column":12},"end":{"line":28,"column":12}}]},"4":{"line":90,"type":"if","locations":[{"start":{"line":90,"column":16},"end":{"line":90,"column":16}},{"start":{"line":90,"column":16},"end":{"line":90,"column":16}}]},"5":{"line":90,"type":"binary-expr","locations":[{"start":{"line":90,"column":20},"end":{"line":90,"column":37}},{"start":{"line":90,"column":41},"end":{"line":90,"column":69}}]}},"code":["\"use strict\";","","var _core = require(\"6to5-runtime/core-js\");","","/**"," * A Widget provides async content on a specific target (e.g. a modal link)"," */","var Widget = (function () {","    /**","     * Creates a new Widget","     * @param [element], optional define the content of widget","     */","    function Widget(element) {","        var _this = this;","        to5Runtime.classCallCheck(this, Widget);","","        /**","         *","         * @type {Promise}","         */","        this.asyncContent = null;","","        if (element) {","            /**","             * @type {HTMLElement}","             */","            this.element = element instanceof HTMLElement ? element : global.document.getElementById(element);","            if (this.element) {","                this.element.hfWidgetInstance = this;","                this.setAsync(function () {","                    return new _core.Promise(function (s) {","                        s(_this.element);","                    });","                });","            } else {","                throw \"Could not found element with ID: \" + element;","            }","        }","        /**","         * The final resulted content that a widget did create (e.g. a modal container)","         * @type {HTMLElement}","         */","        this.finalContent = null;","    }","","    to5Runtime.prototypeProperties(Widget, null, {","        getAsync: {","","            /**","             *","             * @returns {Promise}","             */","            value: function getAsync() {","                return this.asyncContent();","            },","            writable: true,","            configurable: true","        },","        setAsync: {","","            /**","             * @param {() => Promise} async","             * @returns {Widget}","             */","            value: function setAsync(async) {","                this.asyncContent = async;","                return this;","            },","            writable: true,","            configurable: true","        },","        getFinalContent: {","","            /**","             * @returns {HTMLElement}","             */","            value: function getFinalContent() {","                return this.finalContent;","            },","            writable: true,","            configurable: true","        },","        destroy: {","","            /**","             * Destroys the generated content of this widget","             * @returns {boolean}","             */","            value: function destroy() {","                if (this.finalContent && this.finalContent.parentNode) {","                    this.finalContent.parentNode.removeChild(this.finalContent);","                    return true;","                }","","                delete this.element;","                delete this.asyncContent;","                delete this.finalContent;","","                return false;","            },","            writable: true,","            configurable: true","        }","    });","","    return Widget;","})();","","module.exports = Widget;"]};
	}
	__cov_01N75i$61$bn_QC8Pt2vfA = __cov_01N75i$61$bn_QC8Pt2vfA['/Users/bowlingx/Projekte/flexcss/src/main/Widget.js'];
	__cov_01N75i$61$bn_QC8Pt2vfA.s['1']++;var _core=__webpack_require__(9);__cov_01N75i$61$bn_QC8Pt2vfA.s['2']++;var Widget=function(){__cov_01N75i$61$bn_QC8Pt2vfA.f['1']++;function Widget(element){__cov_01N75i$61$bn_QC8Pt2vfA.f['2']++;__cov_01N75i$61$bn_QC8Pt2vfA.s['4']++;var _this=this;__cov_01N75i$61$bn_QC8Pt2vfA.s['5']++;to5Runtime.classCallCheck(this,Widget);__cov_01N75i$61$bn_QC8Pt2vfA.s['6']++;this.asyncContent=null;__cov_01N75i$61$bn_QC8Pt2vfA.s['7']++;if(element){__cov_01N75i$61$bn_QC8Pt2vfA.b['1'][0]++;__cov_01N75i$61$bn_QC8Pt2vfA.s['8']++;this.element=element instanceof HTMLElement?(__cov_01N75i$61$bn_QC8Pt2vfA.b['2'][0]++,element):(__cov_01N75i$61$bn_QC8Pt2vfA.b['2'][1]++,global.document.getElementById(element));__cov_01N75i$61$bn_QC8Pt2vfA.s['9']++;if(this.element){__cov_01N75i$61$bn_QC8Pt2vfA.b['3'][0]++;__cov_01N75i$61$bn_QC8Pt2vfA.s['10']++;this.element.hfWidgetInstance=this;__cov_01N75i$61$bn_QC8Pt2vfA.s['11']++;this.setAsync(function(){__cov_01N75i$61$bn_QC8Pt2vfA.f['3']++;__cov_01N75i$61$bn_QC8Pt2vfA.s['12']++;return new _core.Promise(function(s){__cov_01N75i$61$bn_QC8Pt2vfA.f['4']++;__cov_01N75i$61$bn_QC8Pt2vfA.s['13']++;s(_this.element);});});}else{__cov_01N75i$61$bn_QC8Pt2vfA.b['3'][1]++;__cov_01N75i$61$bn_QC8Pt2vfA.s['14']++;throw'Could not found element with ID: '+element;}}else{__cov_01N75i$61$bn_QC8Pt2vfA.b['1'][1]++;}__cov_01N75i$61$bn_QC8Pt2vfA.s['15']++;this.finalContent=null;}__cov_01N75i$61$bn_QC8Pt2vfA.s['16']++;to5Runtime.prototypeProperties(Widget,null,{getAsync:{value:function getAsync(){__cov_01N75i$61$bn_QC8Pt2vfA.f['5']++;__cov_01N75i$61$bn_QC8Pt2vfA.s['17']++;return this.asyncContent();},writable:true,configurable:true},setAsync:{value:function setAsync(async){__cov_01N75i$61$bn_QC8Pt2vfA.f['6']++;__cov_01N75i$61$bn_QC8Pt2vfA.s['18']++;this.asyncContent=async;__cov_01N75i$61$bn_QC8Pt2vfA.s['19']++;return this;},writable:true,configurable:true},getFinalContent:{value:function getFinalContent(){__cov_01N75i$61$bn_QC8Pt2vfA.f['7']++;__cov_01N75i$61$bn_QC8Pt2vfA.s['20']++;return this.finalContent;},writable:true,configurable:true},destroy:{value:function destroy(){__cov_01N75i$61$bn_QC8Pt2vfA.f['8']++;__cov_01N75i$61$bn_QC8Pt2vfA.s['21']++;if((__cov_01N75i$61$bn_QC8Pt2vfA.b['5'][0]++,this.finalContent)&&(__cov_01N75i$61$bn_QC8Pt2vfA.b['5'][1]++,this.finalContent.parentNode)){__cov_01N75i$61$bn_QC8Pt2vfA.b['4'][0]++;__cov_01N75i$61$bn_QC8Pt2vfA.s['22']++;this.finalContent.parentNode.removeChild(this.finalContent);__cov_01N75i$61$bn_QC8Pt2vfA.s['23']++;return true;}else{__cov_01N75i$61$bn_QC8Pt2vfA.b['4'][1]++;}__cov_01N75i$61$bn_QC8Pt2vfA.s['24']++;delete this.element;__cov_01N75i$61$bn_QC8Pt2vfA.s['25']++;delete this.asyncContent;__cov_01N75i$61$bn_QC8Pt2vfA.s['26']++;delete this.finalContent;__cov_01N75i$61$bn_QC8Pt2vfA.s['27']++;return false;},writable:true,configurable:true}});__cov_01N75i$61$bn_QC8Pt2vfA.s['28']++;return Widget;}();__cov_01N75i$61$bn_QC8Pt2vfA.s['29']++;module.exports=Widget;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime, global) {"use strict";
	var __cov_iTRhyhb8eZkw8_Tdve14lg = (Function('return this'))();
	if (!__cov_iTRhyhb8eZkw8_Tdve14lg.__coverage__) { __cov_iTRhyhb8eZkw8_Tdve14lg.__coverage__ = {}; }
	__cov_iTRhyhb8eZkw8_Tdve14lg = __cov_iTRhyhb8eZkw8_Tdve14lg.__coverage__;
	if (!(__cov_iTRhyhb8eZkw8_Tdve14lg['/Users/bowlingx/Projekte/flexcss/src/main/util/Settings.js'])) {
	   __cov_iTRhyhb8eZkw8_Tdve14lg['/Users/bowlingx/Projekte/flexcss/src/main/util/Settings.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/main/util/Settings.js","s":{"1":0,"2":0,"3":0,"4":0,"5":1,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":22,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":28}}},"2":{"name":"Settings","line":23,"loc":{"start":{"line":23,"column":4},"end":{"line":23,"column":24}}},"3":{"name":"setup","line":34,"loc":{"start":{"line":34,"column":19},"end":{"line":34,"column":44}}},"4":{"name":"get","line":41,"loc":{"start":{"line":41,"column":19},"end":{"line":41,"column":34}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":44}},"2":{"start":{"line":5,"column":0},"end":{"line":5,"column":59}},"3":{"start":{"line":10,"column":0},"end":{"line":17,"column":2}},"4":{"start":{"line":22,"column":0},"end":{"line":50,"column":5}},"5":{"start":{"line":23,"column":4},"end":{"line":25,"column":5}},"6":{"start":{"line":24,"column":8},"end":{"line":24,"column":50}},"7":{"start":{"line":27,"column":4},"end":{"line":47,"column":7}},"8":{"start":{"line":35,"column":16},"end":{"line":35,"column":63}},"9":{"start":{"line":42,"column":16},"end":{"line":42,"column":39}},"10":{"start":{"line":49,"column":4},"end":{"line":49,"column":20}},"11":{"start":{"line":52,"column":0},"end":{"line":52,"column":26}},"12":{"start":{"line":58,"column":0},"end":{"line":58,"column":58}},"13":{"start":{"line":60,"column":0},"end":{"line":60,"column":65}},"14":{"start":{"line":62,"column":0},"end":{"line":62,"column":35}}},"branchMap":{},"code":["\"use strict\";","","var _core = require(\"6to5-runtime/core-js\");","","var Util = to5Runtime.interopRequire(require(\"util/Util\"));","","/**"," * Global Settings"," */","var GLOBAL_SETTINGS = {","    // defined breakpoint for small devices < n","    smallBreakpoint: 768,","    // nodes that should be updated when no scrollbar is expected","    scrollbarUpdateNodes: [global.document.body],","    // additional Delay until darkener is fully hidden","    darkenerFadeDelay: 100","};","","/**"," * Utility class that setups global settings"," */","var Settings = (function () {","    function Settings() {","        to5Runtime.classCallCheck(this, Settings);","    }","","    to5Runtime.prototypeProperties(Settings, {","        setup: {","","            /**","             * Setup global settings, overwrite default values","             * @param {Object} settings","             */","            value: function setup(settings) {","                _core.Object.assign(GLOBAL_SETTINGS, settings);","            },","            writable: true,","            configurable: true","        },","        get: {","            value: function get() {","                return GLOBAL_SETTINGS;","            },","            writable: true,","            configurable: true","        }","    });","","    return Settings;","})();","","module.exports = Settings;","","","// Settings Statics, used by widgets","","// Measure scrollbar width","Settings.CONST_SCROLLBAR_WIDTH = Util.getScrollBarWidth();","// detect right transition end event","Settings.CONST_TRANSITION_EVENT = Util.whichTransitionEndEvent();","","Settings.CONST_TAB_EVENT = \"click\";"]};
	}
	__cov_iTRhyhb8eZkw8_Tdve14lg = __cov_iTRhyhb8eZkw8_Tdve14lg['/Users/bowlingx/Projekte/flexcss/src/main/util/Settings.js'];
	__cov_iTRhyhb8eZkw8_Tdve14lg.s['1']++;var _core=__webpack_require__(9);__cov_iTRhyhb8eZkw8_Tdve14lg.s['2']++;var Util=to5Runtime.interopRequire(__webpack_require__(8));__cov_iTRhyhb8eZkw8_Tdve14lg.s['3']++;var GLOBAL_SETTINGS={smallBreakpoint:768,scrollbarUpdateNodes:[global.document.body],darkenerFadeDelay:100};__cov_iTRhyhb8eZkw8_Tdve14lg.s['4']++;var Settings=function(){__cov_iTRhyhb8eZkw8_Tdve14lg.f['1']++;function Settings(){__cov_iTRhyhb8eZkw8_Tdve14lg.f['2']++;__cov_iTRhyhb8eZkw8_Tdve14lg.s['6']++;to5Runtime.classCallCheck(this,Settings);}__cov_iTRhyhb8eZkw8_Tdve14lg.s['7']++;to5Runtime.prototypeProperties(Settings,{setup:{value:function setup(settings){__cov_iTRhyhb8eZkw8_Tdve14lg.f['3']++;__cov_iTRhyhb8eZkw8_Tdve14lg.s['8']++;_core.Object.assign(GLOBAL_SETTINGS,settings);},writable:true,configurable:true},get:{value:function get(){__cov_iTRhyhb8eZkw8_Tdve14lg.f['4']++;__cov_iTRhyhb8eZkw8_Tdve14lg.s['9']++;return GLOBAL_SETTINGS;},writable:true,configurable:true}});__cov_iTRhyhb8eZkw8_Tdve14lg.s['10']++;return Settings;}();__cov_iTRhyhb8eZkw8_Tdve14lg.s['11']++;module.exports=Settings;__cov_iTRhyhb8eZkw8_Tdve14lg.s['12']++;Settings.CONST_SCROLLBAR_WIDTH=Util.getScrollBarWidth();__cov_iTRhyhb8eZkw8_Tdve14lg.s['13']++;Settings.CONST_TRANSITION_EVENT=Util.whichTransitionEndEvent();__cov_iTRhyhb8eZkw8_Tdve14lg.s['14']++;Settings.CONST_TAB_EVENT='click';
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var global = {};

	"use strict";

	var _core = __webpack_require__(9);

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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";
	var __cov_HvPf3POrDe4GfFDGb4GwRQ = (Function('return this'))();
	if (!__cov_HvPf3POrDe4GfFDGb4GwRQ.__coverage__) { __cov_HvPf3POrDe4GfFDGb4GwRQ.__coverage__ = {}; }
	__cov_HvPf3POrDe4GfFDGb4GwRQ = __cov_HvPf3POrDe4GfFDGb4GwRQ.__coverage__;
	if (!(__cov_HvPf3POrDe4GfFDGb4GwRQ['/Users/bowlingx/Projekte/flexcss/src/main/util/Event.js'])) {
	   __cov_HvPf3POrDe4GfFDGb4GwRQ['/Users/bowlingx/Projekte/flexcss/src/main/util/Event.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/main/util/Event.js","s":{"1":0,"2":0,"3":1,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":1,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"fnMap":{"1":{"name":"(anonymous_1)","line":8,"loc":{"start":{"line":8,"column":20},"end":{"line":8,"column":32}}},"2":{"name":"EventHandler","line":13,"loc":{"start":{"line":13,"column":4},"end":{"line":13,"column":40}}},"3":{"name":"withOptions","line":33,"loc":{"start":{"line":33,"column":19},"end":{"line":33,"column":49}}},"4":{"name":"withOriginal","line":46,"loc":{"start":{"line":46,"column":19},"end":{"line":46,"column":44}}},"5":{"name":"withDetail","line":59,"loc":{"start":{"line":59,"column":19},"end":{"line":59,"column":42}}},"6":{"name":"fire","line":71,"loc":{"start":{"line":71,"column":19},"end":{"line":71,"column":35}}},"7":{"name":"(anonymous_7)","line":86,"loc":{"start":{"line":86,"column":13},"end":{"line":86,"column":25}}},"8":{"name":"Event","line":87,"loc":{"start":{"line":87,"column":4},"end":{"line":87,"column":21}}},"9":{"name":"dispatch","line":99,"loc":{"start":{"line":99,"column":19},"end":{"line":99,"column":51}}},"10":{"name":"dispatchAndFire","line":114,"loc":{"start":{"line":114,"column":19},"end":{"line":114,"column":67}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":44}},"2":{"start":{"line":8,"column":0},"end":{"line":84,"column":5}},"3":{"start":{"line":13,"column":4},"end":{"line":23,"column":5}},"4":{"start":{"line":14,"column":8},"end":{"line":14,"column":54}},"5":{"start":{"line":16,"column":8},"end":{"line":16,"column":29}},"6":{"start":{"line":17,"column":8},"end":{"line":20,"column":10}},"7":{"start":{"line":22,"column":8},"end":{"line":22,"column":25}},"8":{"start":{"line":25,"column":4},"end":{"line":81,"column":7}},"9":{"start":{"line":34,"column":16},"end":{"line":34,"column":72}},"10":{"start":{"line":35,"column":16},"end":{"line":35,"column":28}},"11":{"start":{"line":47,"column":16},"end":{"line":47,"column":54}},"12":{"start":{"line":48,"column":16},"end":{"line":48,"column":28}},"13":{"start":{"line":60,"column":16},"end":{"line":60,"column":47}},"14":{"start":{"line":61,"column":16},"end":{"line":61,"column":28}},"15":{"start":{"line":72,"column":16},"end":{"line":72,"column":72}},"16":{"start":{"line":73,"column":16},"end":{"line":75,"column":17}},"17":{"start":{"line":74,"column":20},"end":{"line":74,"column":49}},"18":{"start":{"line":76,"column":16},"end":{"line":76,"column":25}},"19":{"start":{"line":83,"column":4},"end":{"line":83,"column":24}},"20":{"start":{"line":86,"column":0},"end":{"line":123,"column":5}},"21":{"start":{"line":87,"column":4},"end":{"line":89,"column":5}},"22":{"start":{"line":88,"column":8},"end":{"line":88,"column":47}},"23":{"start":{"line":91,"column":4},"end":{"line":120,"column":7}},"24":{"start":{"line":100,"column":16},"end":{"line":100,"column":54}},"25":{"start":{"line":115,"column":16},"end":{"line":115,"column":82}},"26":{"start":{"line":122,"column":4},"end":{"line":122,"column":17}},"27":{"start":{"line":125,"column":0},"end":{"line":125,"column":23}}},"branchMap":{"1":{"line":34,"type":"binary-expr","locations":[{"start":{"line":34,"column":57},"end":{"line":34,"column":64}},{"start":{"line":34,"column":68},"end":{"line":34,"column":70}}]},"2":{"line":73,"type":"if","locations":[{"start":{"line":73,"column":16},"end":{"line":73,"column":16}},{"start":{"line":73,"column":16},"end":{"line":73,"column":16}}]}},"code":["\"use strict\";","","var _core = require(\"6to5-runtime/core-js\");","","/**"," * Simpler Event dispatching"," */","var EventHandler = (function () {","    /**","     * @param {HTMLElement} target","     * @param {String} name","     */","    function EventHandler(target, name) {","        to5Runtime.classCallCheck(this, EventHandler);","","        this.target = target;","        this.defaultOptions = {","            bubbles: true,","            cancelable: true","        };","","        this.name = name;","    }","","    to5Runtime.prototypeProperties(EventHandler, null, {","        withOptions: {","","            /**","             * Set more options","             * @param {Object} options","             * @returns {EventHandler}","             */","            value: function withOptions(options) {","                _core.Object.assign(this.defaultOptions, options || {});","                return this;","            },","            writable: true,","            configurable: true","        },","        withOriginal: {","","            /**","             * @param {Event} e","             * @returns {EventHandler}","             */","            value: function withOriginal(e) {","                this.defaultOptions.originalEvent = e;","                return this;","            },","            writable: true,","            configurable: true","        },","        withDetail: {","","            /**","             * @param {*} o","             * @returns {EventHandler}","             */","            value: function withDetail(o) {","                this.defaultOptions.detail = o;","                return this;","            },","            writable: true,","            configurable: true","        },","        fire: {","","            /**","             * @returns {Window.CustomEvent}","             */","            value: function fire() {","                var e = new CustomEvent(this.name, this.defaultOptions);","                if (this.target) {","                    this.target.dispatchEvent(e);","                }","                return e;","            },","            writable: true,","            configurable: true","        }","    });","","    return EventHandler;","})();","","var Event = (function () {","    function Event() {","        to5Runtime.classCallCheck(this, Event);","    }","","    to5Runtime.prototypeProperties(Event, {","        dispatch: {","            /**","             * Dispatches a custom event","             * @param {HTMLElement} target","             * @param {String} name","             * @returns {EventHandler}","             */","            value: function dispatch(target, name) {","                return new EventHandler(target, name);","            },","            writable: true,","            configurable: true","        },","        dispatchAndFire: {","","            /**","             * Dispatches a custom event","             * @param {HTMLElement} target","             * @param {String} name","             * @param {Object} [options]","             * @returns {Window.CustomEvent}","             */","            value: function dispatchAndFire(target, name, options) {","                return new EventHandler(target, name).withOptions(options).fire();","            },","            writable: true,","            configurable: true","        }","    });","","    return Event;","})();","","module.exports = Event;"]};
	}
	__cov_HvPf3POrDe4GfFDGb4GwRQ = __cov_HvPf3POrDe4GfFDGb4GwRQ['/Users/bowlingx/Projekte/flexcss/src/main/util/Event.js'];
	__cov_HvPf3POrDe4GfFDGb4GwRQ.s['1']++;var _core=__webpack_require__(9);__cov_HvPf3POrDe4GfFDGb4GwRQ.s['2']++;var EventHandler=function(){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['1']++;function EventHandler(target,name){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['2']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['4']++;to5Runtime.classCallCheck(this,EventHandler);__cov_HvPf3POrDe4GfFDGb4GwRQ.s['5']++;this.target=target;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['6']++;this.defaultOptions={bubbles:true,cancelable:true};__cov_HvPf3POrDe4GfFDGb4GwRQ.s['7']++;this.name=name;}__cov_HvPf3POrDe4GfFDGb4GwRQ.s['8']++;to5Runtime.prototypeProperties(EventHandler,null,{withOptions:{value:function withOptions(options){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['3']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['9']++;_core.Object.assign(this.defaultOptions,(__cov_HvPf3POrDe4GfFDGb4GwRQ.b['1'][0]++,options)||(__cov_HvPf3POrDe4GfFDGb4GwRQ.b['1'][1]++,{}));__cov_HvPf3POrDe4GfFDGb4GwRQ.s['10']++;return this;},writable:true,configurable:true},withOriginal:{value:function withOriginal(e){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['4']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['11']++;this.defaultOptions.originalEvent=e;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['12']++;return this;},writable:true,configurable:true},withDetail:{value:function withDetail(o){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['5']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['13']++;this.defaultOptions.detail=o;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['14']++;return this;},writable:true,configurable:true},fire:{value:function fire(){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['6']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['15']++;var e=new CustomEvent(this.name,this.defaultOptions);__cov_HvPf3POrDe4GfFDGb4GwRQ.s['16']++;if(this.target){__cov_HvPf3POrDe4GfFDGb4GwRQ.b['2'][0]++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['17']++;this.target.dispatchEvent(e);}else{__cov_HvPf3POrDe4GfFDGb4GwRQ.b['2'][1]++;}__cov_HvPf3POrDe4GfFDGb4GwRQ.s['18']++;return e;},writable:true,configurable:true}});__cov_HvPf3POrDe4GfFDGb4GwRQ.s['19']++;return EventHandler;}();__cov_HvPf3POrDe4GfFDGb4GwRQ.s['20']++;var Event=function(){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['7']++;function Event(){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['8']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['22']++;to5Runtime.classCallCheck(this,Event);}__cov_HvPf3POrDe4GfFDGb4GwRQ.s['23']++;to5Runtime.prototypeProperties(Event,{dispatch:{value:function dispatch(target,name){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['9']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['24']++;return new EventHandler(target,name);},writable:true,configurable:true},dispatchAndFire:{value:function dispatchAndFire(target,name,options){__cov_HvPf3POrDe4GfFDGb4GwRQ.f['10']++;__cov_HvPf3POrDe4GfFDGb4GwRQ.s['25']++;return new EventHandler(target,name).withOptions(options).fire();},writable:true,configurable:true}});__cov_HvPf3POrDe4GfFDGb4GwRQ.s['26']++;return Event;}();__cov_HvPf3POrDe4GfFDGb4GwRQ.s['27']++;module.exports=Event;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime, global) {"use strict";
	var __cov_QkdW5$203odPOHHSXQGWbA = (Function('return this'))();
	if (!__cov_QkdW5$203odPOHHSXQGWbA.__coverage__) { __cov_QkdW5$203odPOHHSXQGWbA.__coverage__ = {}; }
	__cov_QkdW5$203odPOHHSXQGWbA = __cov_QkdW5$203odPOHHSXQGWbA.__coverage__;
	if (!(__cov_QkdW5$203odPOHHSXQGWbA['/Users/bowlingx/Projekte/flexcss/src/main/util/Util.js'])) {
	   __cov_QkdW5$203odPOHHSXQGWbA['/Users/bowlingx/Projekte/flexcss/src/main/util/Util.js'] = {"path":"/Users/bowlingx/Projekte/flexcss/src/main/util/Util.js","s":{"1":0,"2":0,"3":1,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":1,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"fnMap":{"1":{"name":"(anonymous_1)","line":5,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":24}}},"2":{"name":"Util","line":6,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":20}}},"3":{"name":"prefixedAnimateEvent","line":19,"loc":{"start":{"line":19,"column":19},"end":{"line":19,"column":74}}},"4":{"name":"(anonymous_4)","line":20,"loc":{"start":{"line":20,"column":35},"end":{"line":20,"column":48}}},"5":{"name":"whichTransitionEndEvent","line":40,"loc":{"start":{"line":40,"column":19},"end":{"line":40,"column":54}}},"6":{"name":"isPartOfNode","line":68,"loc":{"start":{"line":68,"column":19},"end":{"line":68,"column":57}}},"7":{"name":"parentsUntil","line":92,"loc":{"start":{"line":92,"column":19},"end":{"line":92,"column":55}}},"8":{"name":"guid","line":112,"loc":{"start":{"line":112,"column":19},"end":{"line":112,"column":35}}},"9":{"name":"s4","line":113,"loc":{"start":{"line":113,"column":16},"end":{"line":113,"column":30}}},"10":{"name":"getScrollBarWidth","line":129,"loc":{"start":{"line":129,"column":19},"end":{"line":129,"column":48}}},"11":{"name":"addEventOnce","line":168,"loc":{"start":{"line":168,"column":19},"end":{"line":168,"column":59}}},"12":{"name":"(anonymous_12)","line":169,"loc":{"start":{"line":169,"column":35},"end":{"line":169,"column":52}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":43}},"2":{"start":{"line":5,"column":0},"end":{"line":181,"column":5}},"3":{"start":{"line":6,"column":4},"end":{"line":8,"column":5}},"4":{"start":{"line":7,"column":8},"end":{"line":7,"column":46}},"5":{"start":{"line":10,"column":4},"end":{"line":178,"column":7}},"6":{"start":{"line":20,"column":16},"end":{"line":22,"column":18}},"7":{"start":{"line":21,"column":20},"end":{"line":21,"column":63}},"8":{"start":{"line":24,"column":16},"end":{"line":28,"column":17}},"9":{"start":{"line":25,"column":20},"end":{"line":25,"column":59}},"10":{"start":{"line":25,"column":33},"end":{"line":25,"column":59}},"11":{"start":{"line":26,"column":20},"end":{"line":26,"column":45}},"12":{"start":{"line":27,"column":20},"end":{"line":27,"column":71}},"13":{"start":{"line":41,"column":16},"end":{"line":42,"column":63}},"14":{"start":{"line":44,"column":16},"end":{"line":49,"column":18}},"15":{"start":{"line":51,"column":16},"end":{"line":55,"column":17}},"16":{"start":{"line":52,"column":20},"end":{"line":54,"column":21}},"17":{"start":{"line":53,"column":24},"end":{"line":53,"column":46}},"18":{"start":{"line":69,"column":16},"end":{"line":71,"column":17}},"19":{"start":{"line":70,"column":20},"end":{"line":70,"column":33}},"20":{"start":{"line":72,"column":16},"end":{"line":72,"column":33}},"21":{"start":{"line":73,"column":16},"end":{"line":78,"column":17}},"22":{"start":{"line":74,"column":20},"end":{"line":76,"column":21}},"23":{"start":{"line":75,"column":24},"end":{"line":75,"column":30}},"24":{"start":{"line":77,"column":20},"end":{"line":77,"column":41}},"25":{"start":{"line":79,"column":16},"end":{"line":79,"column":36}},"26":{"start":{"line":93,"column":16},"end":{"line":95,"column":17}},"27":{"start":{"line":94,"column":20},"end":{"line":94,"column":33}},"28":{"start":{"line":96,"column":16},"end":{"line":96,"column":33}},"29":{"start":{"line":97,"column":16},"end":{"line":99,"column":17}},"30":{"start":{"line":98,"column":20},"end":{"line":98,"column":41}},"31":{"start":{"line":101,"column":16},"end":{"line":101,"column":27}},"32":{"start":{"line":113,"column":16},"end":{"line":115,"column":17}},"33":{"start":{"line":114,"column":20},"end":{"line":114,"column":93}},"34":{"start":{"line":117,"column":16},"end":{"line":117,"column":101}},"35":{"start":{"line":130,"column":16},"end":{"line":131,"column":51}},"36":{"start":{"line":132,"column":16},"end":{"line":132,"column":43}},"37":{"start":{"line":133,"column":16},"end":{"line":133,"column":45}},"38":{"start":{"line":135,"column":16},"end":{"line":135,"column":53}},"39":{"start":{"line":136,"column":16},"end":{"line":136,"column":50}},"40":{"start":{"line":137,"column":16},"end":{"line":137,"column":40}},"41":{"start":{"line":138,"column":16},"end":{"line":138,"column":41}},"42":{"start":{"line":139,"column":16},"end":{"line":139,"column":50}},"43":{"start":{"line":140,"column":16},"end":{"line":140,"column":44}},"44":{"start":{"line":141,"column":16},"end":{"line":141,"column":45}},"45":{"start":{"line":142,"column":16},"end":{"line":142,"column":48}},"46":{"start":{"line":143,"column":16},"end":{"line":143,"column":41}},"47":{"start":{"line":145,"column":16},"end":{"line":145,"column":44}},"48":{"start":{"line":146,"column":16},"end":{"line":146,"column":43}},"49":{"start":{"line":147,"column":16},"end":{"line":147,"column":48}},"50":{"start":{"line":148,"column":16},"end":{"line":148,"column":43}},"51":{"start":{"line":149,"column":16},"end":{"line":151,"column":17}},"52":{"start":{"line":150,"column":20},"end":{"line":150,"column":43}},"53":{"start":{"line":152,"column":16},"end":{"line":152,"column":44}},"54":{"start":{"line":154,"column":16},"end":{"line":154,"column":31}},"55":{"start":{"line":169,"column":16},"end":{"line":172,"column":18}},"56":{"start":{"line":170,"column":20},"end":{"line":170,"column":32}},"57":{"start":{"line":171,"column":20},"end":{"line":171,"column":65}},"58":{"start":{"line":173,"column":16},"end":{"line":173,"column":65}},"59":{"start":{"line":180,"column":4},"end":{"line":180,"column":16}},"60":{"start":{"line":183,"column":0},"end":{"line":183,"column":22}}},"branchMap":{"1":{"line":25,"type":"if","locations":[{"start":{"line":25,"column":20},"end":{"line":25,"column":20}},{"start":{"line":25,"column":20},"end":{"line":25,"column":20}}]},"2":{"line":52,"type":"if","locations":[{"start":{"line":52,"column":20},"end":{"line":52,"column":20}},{"start":{"line":52,"column":20},"end":{"line":52,"column":20}}]},"3":{"line":69,"type":"if","locations":[{"start":{"line":69,"column":16},"end":{"line":69,"column":16}},{"start":{"line":69,"column":16},"end":{"line":69,"column":16}}]},"4":{"line":69,"type":"binary-expr","locations":[{"start":{"line":69,"column":20},"end":{"line":69,"column":27}},{"start":{"line":69,"column":31},"end":{"line":69,"column":38}}]},"5":{"line":73,"type":"binary-expr","locations":[{"start":{"line":73,"column":23},"end":{"line":73,"column":37}},{"start":{"line":73,"column":41},"end":{"line":73,"column":53}}]},"6":{"line":74,"type":"if","locations":[{"start":{"line":74,"column":20},"end":{"line":74,"column":20}},{"start":{"line":74,"column":20},"end":{"line":74,"column":20}}]},"7":{"line":93,"type":"if","locations":[{"start":{"line":93,"column":16},"end":{"line":93,"column":16}},{"start":{"line":93,"column":16},"end":{"line":93,"column":16}}]},"8":{"line":97,"type":"binary-expr","locations":[{"start":{"line":97,"column":23},"end":{"line":97,"column":33}},{"start":{"line":97,"column":37},"end":{"line":97,"column":49}}]},"9":{"line":149,"type":"if","locations":[{"start":{"line":149,"column":16},"end":{"line":149,"column":16}},{"start":{"line":149,"column":16},"end":{"line":149,"column":16}}]}},"code":["\"use strict\";","","var PFX = [\"webkit\", \"moz\", \"MS\", \"o\", \"\"];","","var Util = (function () {","    function Util() {","        to5Runtime.classCallCheck(this, Util);","    }","","    to5Runtime.prototypeProperties(Util, {","        prefixedAnimateEvent: {","","            /**","             * Will register the right animation event based on browser","             * @param element","             * @param type","             * @param callback","             */","            value: function prefixedAnimateEvent(element, type, callback) {","                var thisFunction = function (e) {","                    callback.apply(element, [e, thisFunction]);","                };","","                for (var p = 0; p < PFX.length; p++) {","                    if (!PFX[p]) type = type.toLowerCase();","                    var name = PFX[p] + type;","                    element.addEventListener(name, thisFunction, true);","                }","            },","            writable: true,","            configurable: true","        },","        whichTransitionEndEvent: {","","            /**","             * Get correct transitionend event","             * @returns {String}","             * @private","             */","            value: function whichTransitionEndEvent() {","                var t,","                    el = document.createElement(\"fakeelement\");","","                var transitions = {","                    transition: \"transitionend\",","                    OTransition: \"oTransitionEnd\",","                    MozTransition: \"transitionend\",","                    WebkitTransition: \"webkitTransitionEnd\"","                };","","                for (t in transitions) {","                    if (el.style[t] !== undefined) {","                        return transitions[t];","                    }","                }","            },","            writable: true,","            configurable: true","        },","        isPartOfNode: {","","            /**","             * Check if target is part of parent node","             * @param target","             * @param parent","             * @returns {boolean}","             */","            value: function isPartOfNode(target, parent) {","                if (!target || !parent) {","                    return false;","                }","                var now = target;","                while (now !== parent && now !== null) {","                    if (now === parent) {","                        break;","                    }","                    now = now.parentNode;","                }","                return null !== now;","            },","            writable: true,","            configurable: true","        },","        parentsUntil: {","","            /**","             * Walks the tree until func returns true for given argument","             * @param target","             * @param func","             * @returns {HTMLElement}","             */","            value: function parentsUntil(target, func) {","                if (!target) {","                    return false;","                }","                var now = target;","                while (!func(now) && now !== null) {","                    now = now.parentNode;","                }","","                return now;","            },","            writable: true,","            configurable: true","        },","        guid: {","","            /**","             * Generates a unique id","             * @return {String}","             */","            value: function guid() {","                function s4() {","                    return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);","                }","","                return s4() + s4() + \"-\" + s4() + \"-\" + s4() + \"-\" + s4() + \"-\" + s4() + s4() + s4();","            },","            writable: true,","            configurable: true","        },","        getScrollBarWidth: {","","            /**","             * Detects scrollbar width","             * @see http://stackoverflow.com/questions/986937/how-can-i-get-the-browsers-scrollbar-sizes","             * @returns {number}","             */","            value: function getScrollBarWidth() {","                var doc = global.document,","                    inner = doc.createElement(\"p\");","                inner.style.width = \"100%\";","                inner.style.height = \"200px\";","","                var outer = doc.createElement(\"div\");","                outer.style.position = \"absolute\";","                outer.style.top = \"0px\";","                outer.style.left = \"0px\";","                outer.style.visibility = \"hidden\";","                outer.style.width = \"200px\";","                outer.style.height = \"150px\";","                outer.style.overflow = \"hidden\";","                outer.appendChild(inner);","","                doc.body.appendChild(outer);","                var w1 = inner.offsetWidth;","                outer.style.overflow = \"scroll\";","                var w2 = inner.offsetWidth;","                if (w1 === w2) {","                    w2 = outer.clientWidth;","                }","                doc.body.removeChild(outer);","","                return w1 - w2;","            },","            writable: true,","            configurable: true","        },","        addEventOnce: {","","","            /**","             * Run an event once","             * @param {String} ev","             * @param {HTMLElement} target","             * @param {Function} func","             */","            value: function addEventOnce(ev, target, func) {","                var thisFunction = function (event) {","                    func(event);","                    target.removeEventListener(ev, thisFunction);","                };","                return target.addEventListener(ev, thisFunction);","            },","            writable: true,","            configurable: true","        }","    });","","    return Util;","})();","","module.exports = Util;"]};
	}
	__cov_QkdW5$203odPOHHSXQGWbA = __cov_QkdW5$203odPOHHSXQGWbA['/Users/bowlingx/Projekte/flexcss/src/main/util/Util.js'];
	__cov_QkdW5$203odPOHHSXQGWbA.s['1']++;var PFX=['webkit','moz','MS','o',''];__cov_QkdW5$203odPOHHSXQGWbA.s['2']++;var Util=function(){__cov_QkdW5$203odPOHHSXQGWbA.f['1']++;function Util(){__cov_QkdW5$203odPOHHSXQGWbA.f['2']++;__cov_QkdW5$203odPOHHSXQGWbA.s['4']++;to5Runtime.classCallCheck(this,Util);}__cov_QkdW5$203odPOHHSXQGWbA.s['5']++;to5Runtime.prototypeProperties(Util,{prefixedAnimateEvent:{value:function prefixedAnimateEvent(element,type,callback){__cov_QkdW5$203odPOHHSXQGWbA.f['3']++;__cov_QkdW5$203odPOHHSXQGWbA.s['6']++;var thisFunction=function(e){__cov_QkdW5$203odPOHHSXQGWbA.f['4']++;__cov_QkdW5$203odPOHHSXQGWbA.s['7']++;callback.apply(element,[e,thisFunction]);};__cov_QkdW5$203odPOHHSXQGWbA.s['8']++;for(var p=0;p<PFX.length;p++){__cov_QkdW5$203odPOHHSXQGWbA.s['9']++;if(!PFX[p]){__cov_QkdW5$203odPOHHSXQGWbA.b['1'][0]++;__cov_QkdW5$203odPOHHSXQGWbA.s['10']++;type=type.toLowerCase();}else{__cov_QkdW5$203odPOHHSXQGWbA.b['1'][1]++;}__cov_QkdW5$203odPOHHSXQGWbA.s['11']++;var name=PFX[p]+type;__cov_QkdW5$203odPOHHSXQGWbA.s['12']++;element.addEventListener(name,thisFunction,true);}},writable:true,configurable:true},whichTransitionEndEvent:{value:function whichTransitionEndEvent(){__cov_QkdW5$203odPOHHSXQGWbA.f['5']++;__cov_QkdW5$203odPOHHSXQGWbA.s['13']++;var t,el=document.createElement('fakeelement');__cov_QkdW5$203odPOHHSXQGWbA.s['14']++;var transitions={transition:'transitionend',OTransition:'oTransitionEnd',MozTransition:'transitionend',WebkitTransition:'webkitTransitionEnd'};__cov_QkdW5$203odPOHHSXQGWbA.s['15']++;for(t in transitions){__cov_QkdW5$203odPOHHSXQGWbA.s['16']++;if(el.style[t]!==undefined){__cov_QkdW5$203odPOHHSXQGWbA.b['2'][0]++;__cov_QkdW5$203odPOHHSXQGWbA.s['17']++;return transitions[t];}else{__cov_QkdW5$203odPOHHSXQGWbA.b['2'][1]++;}}},writable:true,configurable:true},isPartOfNode:{value:function isPartOfNode(target,parent){__cov_QkdW5$203odPOHHSXQGWbA.f['6']++;__cov_QkdW5$203odPOHHSXQGWbA.s['18']++;if((__cov_QkdW5$203odPOHHSXQGWbA.b['4'][0]++,!target)||(__cov_QkdW5$203odPOHHSXQGWbA.b['4'][1]++,!parent)){__cov_QkdW5$203odPOHHSXQGWbA.b['3'][0]++;__cov_QkdW5$203odPOHHSXQGWbA.s['19']++;return false;}else{__cov_QkdW5$203odPOHHSXQGWbA.b['3'][1]++;}__cov_QkdW5$203odPOHHSXQGWbA.s['20']++;var now=target;__cov_QkdW5$203odPOHHSXQGWbA.s['21']++;while((__cov_QkdW5$203odPOHHSXQGWbA.b['5'][0]++,now!==parent)&&(__cov_QkdW5$203odPOHHSXQGWbA.b['5'][1]++,now!==null)){__cov_QkdW5$203odPOHHSXQGWbA.s['22']++;if(now===parent){__cov_QkdW5$203odPOHHSXQGWbA.b['6'][0]++;__cov_QkdW5$203odPOHHSXQGWbA.s['23']++;break;}else{__cov_QkdW5$203odPOHHSXQGWbA.b['6'][1]++;}__cov_QkdW5$203odPOHHSXQGWbA.s['24']++;now=now.parentNode;}__cov_QkdW5$203odPOHHSXQGWbA.s['25']++;return null!==now;},writable:true,configurable:true},parentsUntil:{value:function parentsUntil(target,func){__cov_QkdW5$203odPOHHSXQGWbA.f['7']++;__cov_QkdW5$203odPOHHSXQGWbA.s['26']++;if(!target){__cov_QkdW5$203odPOHHSXQGWbA.b['7'][0]++;__cov_QkdW5$203odPOHHSXQGWbA.s['27']++;return false;}else{__cov_QkdW5$203odPOHHSXQGWbA.b['7'][1]++;}__cov_QkdW5$203odPOHHSXQGWbA.s['28']++;var now=target;__cov_QkdW5$203odPOHHSXQGWbA.s['29']++;while((__cov_QkdW5$203odPOHHSXQGWbA.b['8'][0]++,!func(now))&&(__cov_QkdW5$203odPOHHSXQGWbA.b['8'][1]++,now!==null)){__cov_QkdW5$203odPOHHSXQGWbA.s['30']++;now=now.parentNode;}__cov_QkdW5$203odPOHHSXQGWbA.s['31']++;return now;},writable:true,configurable:true},guid:{value:function guid(){__cov_QkdW5$203odPOHHSXQGWbA.f['8']++;function s4(){__cov_QkdW5$203odPOHHSXQGWbA.f['9']++;__cov_QkdW5$203odPOHHSXQGWbA.s['33']++;return Math.floor((1+Math.random())*65536).toString(16).substring(1);}__cov_QkdW5$203odPOHHSXQGWbA.s['34']++;return s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4()+s4();},writable:true,configurable:true},getScrollBarWidth:{value:function getScrollBarWidth(){__cov_QkdW5$203odPOHHSXQGWbA.f['10']++;__cov_QkdW5$203odPOHHSXQGWbA.s['35']++;var doc=global.document,inner=doc.createElement('p');__cov_QkdW5$203odPOHHSXQGWbA.s['36']++;inner.style.width='100%';__cov_QkdW5$203odPOHHSXQGWbA.s['37']++;inner.style.height='200px';__cov_QkdW5$203odPOHHSXQGWbA.s['38']++;var outer=doc.createElement('div');__cov_QkdW5$203odPOHHSXQGWbA.s['39']++;outer.style.position='absolute';__cov_QkdW5$203odPOHHSXQGWbA.s['40']++;outer.style.top='0px';__cov_QkdW5$203odPOHHSXQGWbA.s['41']++;outer.style.left='0px';__cov_QkdW5$203odPOHHSXQGWbA.s['42']++;outer.style.visibility='hidden';__cov_QkdW5$203odPOHHSXQGWbA.s['43']++;outer.style.width='200px';__cov_QkdW5$203odPOHHSXQGWbA.s['44']++;outer.style.height='150px';__cov_QkdW5$203odPOHHSXQGWbA.s['45']++;outer.style.overflow='hidden';__cov_QkdW5$203odPOHHSXQGWbA.s['46']++;outer.appendChild(inner);__cov_QkdW5$203odPOHHSXQGWbA.s['47']++;doc.body.appendChild(outer);__cov_QkdW5$203odPOHHSXQGWbA.s['48']++;var w1=inner.offsetWidth;__cov_QkdW5$203odPOHHSXQGWbA.s['49']++;outer.style.overflow='scroll';__cov_QkdW5$203odPOHHSXQGWbA.s['50']++;var w2=inner.offsetWidth;__cov_QkdW5$203odPOHHSXQGWbA.s['51']++;if(w1===w2){__cov_QkdW5$203odPOHHSXQGWbA.b['9'][0]++;__cov_QkdW5$203odPOHHSXQGWbA.s['52']++;w2=outer.clientWidth;}else{__cov_QkdW5$203odPOHHSXQGWbA.b['9'][1]++;}__cov_QkdW5$203odPOHHSXQGWbA.s['53']++;doc.body.removeChild(outer);__cov_QkdW5$203odPOHHSXQGWbA.s['54']++;return w1-w2;},writable:true,configurable:true},addEventOnce:{value:function addEventOnce(ev,target,func){__cov_QkdW5$203odPOHHSXQGWbA.f['11']++;__cov_QkdW5$203odPOHHSXQGWbA.s['55']++;var thisFunction=function(event){__cov_QkdW5$203odPOHHSXQGWbA.f['12']++;__cov_QkdW5$203odPOHHSXQGWbA.s['56']++;func(event);__cov_QkdW5$203odPOHHSXQGWbA.s['57']++;target.removeEventListener(ev,thisFunction);};__cov_QkdW5$203odPOHHSXQGWbA.s['58']++;return target.addEventListener(ev,thisFunction);},writable:true,configurable:true}});__cov_QkdW5$203odPOHHSXQGWbA.s['59']++;return Util;}();__cov_QkdW5$203odPOHHSXQGWbA.s['60']++;module.exports=Util;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), (function() { return this; }())))

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _core = __webpack_require__(9);

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
