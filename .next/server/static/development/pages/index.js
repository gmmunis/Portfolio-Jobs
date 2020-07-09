module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\gmmun\\Desktop\\Project\\portifolio-jobs\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Home = () => __jsx("div", {
  className: "portfolio-app",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "navbar-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("nav", {
  className: "navbar navbar-expand-lg navbar-dark fj-mw9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, __jsx("a", {
  className: "navbar-brand mr-3 font-weight-bold",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, "Guilherme M.Munis"), __jsx("button", {
  className: "navbar-toggler",
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarSupportedContent",
  "aria-controls": "navbarSupportedContent",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "navbar-toggler-icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 11
  }
})), __jsx("div", {
  className: "collapse navbar-collapse",
  id: "navbarSupportedContent",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx("ul", {
  className: "navbar-nav",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 11
  }
}, __jsx("li", {
  className: "nav-item mr-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "nav-link",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 15
  }
}, "Portfolio")), __jsx("li", {
  className: "nav-item mr-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "nav-link",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 15
  }
}, "Courses")), __jsx("li", {
  className: "nav-item mr-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "nav-link",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 15
  }
}, "Cv")), __jsx("li", {
  className: "nav-item mr-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "nav-link",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 15
  }
}, "Ask me"))), __jsx("ul", {
  className: "navbar-nav ml-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 11
  }
}, __jsx("li", {
  className: "nav-item mr-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "nav-link",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 15
  }
}, "Sign Up")), __jsx("li", {
  className: "nav-item mr-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "nav-link btn btn-success bg-green-2 bright",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 15
  }
}, "Sign In")))))), __jsx("section", {
  className: "fj-hero",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "fj-hero-wrapper row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "hero-left col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }
}, __jsx("h1", {
  className: "white hero-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 11
  }
}, "Ol\xE1 eu sou o Guilherme M.Munis. Full Stack Developer"), __jsx("h2", {
  className: "white hero-subtitle",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 11
  }
}, "Confira meu portfolio"), __jsx("div", {
  className: "button-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 11
  }
}, __jsx("a", {
  href: "",
  className: "btn btn-main bg-blue ttu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 13
  }
}, "D\xEA uma olhada no meu trabalho"))), __jsx("div", {
  className: "hero-right col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "hero-image-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 11
  }
}, __jsx("a", {
  className: "grow hero-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 13
  }
}, __jsx("img", {
  className: "hero-image",
  src: "https://i.udemycdn.com/course/750x422/1652608_662b_8.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 15
  }
})))))), __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }
}, __jsx("section", {
  className: "section-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "px-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "pt-5 pb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 11
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 13
  }
}, "Portfolios")))), __jsx("section", {
  className: "pb-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "col-md-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "card subtle-shadow no-border",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "card-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 15
  }
}, __jsx("h5", {
  className: "card-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 17
  }
}, "Card title"), __jsx("h6", {
  className: "card-subtitle mb-2 text-muted",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 17
  }
}, "Card subtitle"), __jsx("p", {
  className: "card-text fs-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 17
  }
}, "Algum exemplo de texto r\xE1pido para criar o t\xEDtulo do card e compor a maior parte do conte\xFAdo do card")), __jsx("div", {
  className: "card-footer no-border",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 15
  }
}, __jsx("small", {
  className: "text-muted",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 17
  }
}, "\xDAltima atualiza\xE7\xE3o h\xE1 3 minutos")))), __jsx("div", {
  className: "col-md-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "card subtle-shadow no-border",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "card-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 15
  }
}, __jsx("h5", {
  className: "card-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 17
  }
}, "Card title"), __jsx("h6", {
  className: "card-subtitle mb-2 text-muted",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 17
  }
}, "Card subtitle"), __jsx("p", {
  className: "card-text fs-2 ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 17
  }
}, "Algum exemplo de texto r\xE1pido para criar o t\xEDtulo do card e compor a maior parte do conte\xFAdo do card.")), __jsx("div", {
  className: "card-footer no-border",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 15
  }
}, __jsx("small", {
  className: "text-muted",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 17
  }
}, "\xDAltima atualiza\xE7\xE3o h\xE1 3 minutos")))), __jsx("div", {
  className: "col-md-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "card subtle-shadow no-border",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "card-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 15
  }
}, __jsx("h5", {
  className: "card-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 17
  }
}, "Card title"), __jsx("h6", {
  className: "card-subtitle mb-2 text-muted",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 17
  }
}, "Card subtitle"), __jsx("p", {
  className: "card-text fs-2 ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 17
  }
}, "Algum exemplo de texto r\xE1pido para criar o t\xEDtulo do card e compor a maior parte do conte\xFAdo do card.")), __jsx("div", {
  className: "card-footer no-border",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 15
  }
}, __jsx("small", {
  className: "text-muted",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 17
  }
}, "\xDAltima atualiza\xE7\xE3o h\xE1 3 minutos")))))), __jsx("a", {
  href: "",
  className: "btn btn-main bg-blue ttu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 7
  }
}, "Veja mais Portfolios"), __jsx("section", {
  className: "section-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "px-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "pt-5 pb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 11
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 13
  }
}, "Ask Me")))), __jsx("section", {
  className: "pb-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "list-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 9
  }
}, __jsx("a", {
  href: "#",
  className: "list-group-item list-group-item-action flex-column align-items-start py-3 subtle-shadow no-border",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "d-flex w-100 justify-content-between",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 13
  }
}, __jsx("h5", {
  className: "mb-1 black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 15
  }
}, "List group item heading"), __jsx("small", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 15
  }
}, "3 dias atr\xE1s")), __jsx("p", {
  className: "mb-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 13
  }
}, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."), __jsx("div", {
  className: "avatar-container my-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 13
  }
}, __jsx("img", {
  src: "https://via.placeholder.com/150",
  className: "avatar-image mr-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 15
  }
}), __jsx("span", {
  className: "avatar-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 15
  }
}, "Guilherme M.Munis"))), __jsx("a", {
  href: "#",
  className: "list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "d-flex w-100 justify-content-between",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 13
  }
}, __jsx("h5", {
  className: "mb-1 black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 15
  }
}, "List group item heading"), __jsx("small", {
  className: "text-muted",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 15
  }
}, "3 dias atr\xE1s")), __jsx("p", {
  className: "mb-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 13
  }
}, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."), __jsx("div", {
  className: "avatar-container my-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 13
  }
}, __jsx("img", {
  src: "https://via.placeholder.com/150",
  className: "avatar-image mr-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 15
  }
}), __jsx("span", {
  className: "avatar-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 15
  }
}, "Guilherme M.Munis"))), __jsx("a", {
  href: "#",
  className: "list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "d-flex w-100 justify-content-between",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 13
  }
}, __jsx("h5", {
  className: "mb-1 black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 15
  }
}, "List group item heading"), __jsx("small", {
  className: "text-muted",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 15
  }
}, "3 dias atr\xE1s")), __jsx("p", {
  className: "mb-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 13
  }
}, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."), __jsx("div", {
  className: "avatar-container my-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 13
  }
}, __jsx("img", {
  src: "https://via.placeholder.com/150",
  className: "avatar-image mr-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 15
  }
}), __jsx("span", {
  className: "avatar-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 15
  }
}, "Guilherme M.Munis"))))), __jsx("a", {
  href: "",
  className: "btn btn-main bg-blue ttu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 7
  }
}, "Veja mais Posts"), __jsx("section", {
  className: "section-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "px-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "pt-5 pb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 11
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 13
  }
}, "Categories")))), __jsx("section", {
  className: "fj-category-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 165,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "col-md-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "fj-category-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "fj-category subtle-shadow no-border",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "category-information",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "heading gray-90",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 19
  }
}, "General Discussion"), __jsx("div", {
  className: "description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 19
  }
}, "Just general question"))))), __jsx("div", {
  className: "col-md-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "fj-category-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 187,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "fj-category subtle-shadow no-border",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 188,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "category-information",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 194,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "heading gray-90",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 195,
    columnNumber: 19
  }
}, "Other Discussion"), __jsx("div", {
  className: "description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198,
    columnNumber: 19
  }
}, "Just general question"))))), __jsx("div", {
  className: "col-md-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 205,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "fj-category-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "fj-category subtle-shadow no-border",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 207,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "category-information",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 213,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "heading gray-90",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 214,
    columnNumber: 19
  }
}, "Some Discussion"), __jsx("div", {
  className: "description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217,
    columnNumber: 19
  }
}, "Just general question"))))))), __jsx("section", {
  className: "section-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "px-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 229,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "pt-5 pb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 230,
    columnNumber: 11
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 231,
    columnNumber: 13
  }
}, "Specific Category")))), __jsx("section", {
  className: "fj-topic-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 235,
    columnNumber: 7
  }
}, __jsx("table", {
  className: "table table-hover ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 236,
    columnNumber: 9
  }
}, __jsx("thead", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 237,
    columnNumber: 11
  }
}, __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 238,
    columnNumber: 13
  }
}, __jsx("th", {
  scope: "col",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 239,
    columnNumber: 15
  }
}, "Topic"), __jsx("th", {
  scope: "col",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 240,
    columnNumber: 15
  }
}, "Category"), __jsx("th", {
  scope: "col",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 241,
    columnNumber: 15
  }
}, "Author"), __jsx("th", {
  scope: "col",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 242,
    columnNumber: 15
  }
}, "Replies"))), __jsx("tbody", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 245,
    columnNumber: 11
  }
}, __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 246,
    columnNumber: 13
  }
}, __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 247,
    columnNumber: 15
  }
}, "Some Topic Info"), __jsx("td", {
  className: "category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 248,
    columnNumber: 15
  }
}, "General Discussion"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 249,
    columnNumber: 15
  }
}, "Guilherme M.Munis"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 250,
    columnNumber: 15
  }
}, "2")), __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 252,
    columnNumber: 13
  }
}, __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 253,
    columnNumber: 15
  }
}, "Some Topic Info"), __jsx("td", {
  className: "category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 254,
    columnNumber: 15
  }
}, "General Discussion"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 255,
    columnNumber: 15
  }
}, "Guilherme M.Munis"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 256,
    columnNumber: 15
  }
}, "2")), __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 258,
    columnNumber: 13
  }
}, __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 259,
    columnNumber: 15
  }
}, "Some Topic Info"), __jsx("td", {
  className: "category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 260,
    columnNumber: 15
  }
}, "General Discussion"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 261,
    columnNumber: 15
  }
}, "Guilherme M.Munis"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 262,
    columnNumber: 15
  }
}, "2"))))), __jsx("section", {
  className: "section-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "px-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 270,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "pt-5 pb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 271,
    columnNumber: 11
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 272,
    columnNumber: 13
  }
}, "Specific Topic")))), __jsx("section", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 276,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "fj-post-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 277,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 278,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "col-md-9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 279,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "topic-post",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 280,
    columnNumber: 15
  }
}, __jsx("article", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 281,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 282,
    columnNumber: 19
  }
}, __jsx("div", {
  className: "topic-avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 283,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 284,
    columnNumber: 23
  }
}, __jsx("img", {
  className: "avatar subtle-shadow",
  src: "https://i.imgur.com/cVDadwb.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 285,
    columnNumber: 25
  }
}))), __jsx("div", {
  className: "topic-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 290,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "topic-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 291,
    columnNumber: 23
  }
}, __jsx("div", {
  className: "topic-meta",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 292,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "name-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 293,
    columnNumber: 27
  }
}, __jsx("span", {
  className: "name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 294,
    columnNumber: 29
  }
}, "Guilherme M.Munis")), __jsx("div", {
  className: "date-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 296,
    columnNumber: 27
  }
}, __jsx("span", {
  className: "date",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 296,
    columnNumber: 59
  }
}, "21h")))), __jsx("div", {
  className: "topic-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 299,
    columnNumber: 23
  }
}, __jsx("div", {
  className: "cooked",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 300,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 301,
    columnNumber: 27
  }
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")), __jsx("section", {
  className: "post-menu-area",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 303,
    columnNumber: 25
  }
}, __jsx("nav", {
  className: "post-controls",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 304,
    columnNumber: 27
  }
}, __jsx("div", {
  className: "actions",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 305,
    columnNumber: 29
  }
}, __jsx("button", {
  className: "btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 306,
    columnNumber: 31
  }
}, "reply"))))))))))), __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 317,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "col-md-9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 318,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "topic-post",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 319,
    columnNumber: 15
  }
}, __jsx("article", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 320,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 321,
    columnNumber: 19
  }
}, __jsx("div", {
  className: "topic-avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 322,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 323,
    columnNumber: 23
  }
}, __jsx("img", {
  className: "avatar subtle-shadow",
  src: "https://i.imgur.com/cVDadwb.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 324,
    columnNumber: 25
  }
}))), __jsx("div", {
  className: "topic-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 329,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "topic-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 330,
    columnNumber: 23
  }
}, __jsx("div", {
  className: "topic-meta",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 331,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "name-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 332,
    columnNumber: 27
  }
}, __jsx("span", {
  className: "name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 333,
    columnNumber: 29
  }
}, "Guilherme M.Munis")), __jsx("div", {
  className: "date-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 335,
    columnNumber: 27
  }
}, __jsx("span", {
  className: "date",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 335,
    columnNumber: 59
  }
}, "21h")))), __jsx("div", {
  className: "topic-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 338,
    columnNumber: 23
  }
}, __jsx("div", {
  className: "cooked",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 339,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 340,
    columnNumber: 27
  }
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")), __jsx("section", {
  className: "post-menu-area",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 342,
    columnNumber: 25
  }
}, __jsx("nav", {
  className: "post-controls",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 343,
    columnNumber: 27
  }
}, __jsx("div", {
  className: "actions",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 344,
    columnNumber: 29
  }
}, __jsx("button", {
  className: "btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 345,
    columnNumber: 31
  }
}, "reply"))))))))))), __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 356,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "col-md-9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 357,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "topic-post",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 358,
    columnNumber: 15
  }
}, __jsx("article", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 359,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 360,
    columnNumber: 19
  }
}, __jsx("div", {
  className: "topic-avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 361,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 362,
    columnNumber: 23
  }
}, __jsx("img", {
  className: "avatar subtle-shadow",
  src: "https://i.imgur.com/cVDadwb.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 363,
    columnNumber: 25
  }
}))), __jsx("div", {
  className: "topic-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 368,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "topic-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 369,
    columnNumber: 23
  }
}, __jsx("div", {
  className: "topic-meta",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 370,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "name-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 371,
    columnNumber: 27
  }
}, __jsx("span", {
  className: "name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 372,
    columnNumber: 29
  }
}, "Guilherme M.Munis")), __jsx("div", {
  className: "date-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 374,
    columnNumber: 27
  }
}, __jsx("span", {
  className: "date",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 374,
    columnNumber: 59
  }
}, "21h")))), __jsx("div", {
  className: "topic-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 377,
    columnNumber: 23
  }
}, __jsx("div", {
  className: "cooked",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 378,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 379,
    columnNumber: 27
  }
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")), __jsx("section", {
  className: "post-menu-area",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 381,
    columnNumber: 25
  }
}, __jsx("nav", {
  className: "post-controls",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 382,
    columnNumber: 27
  }
}, __jsx("div", {
  className: "actions",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 383,
    columnNumber: 29
  }
}, __jsx("button", {
  className: "btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 384,
    columnNumber: 31
  }
}, "reply"))))))))))))), __jsx("section", {
  className: "section-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 399,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "px-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 400,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "pt-5 pb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 401,
    columnNumber: 11
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 402,
    columnNumber: 13
  }
}, "Login Page")))), __jsx("div", {
  className: "bwm-form",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 406,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 407,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "col-md-5 mx-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 408,
    columnNumber: 11
  }
}, __jsx("h1", {
  className: "page-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 409,
    columnNumber: 13
  }
}, "Login"), __jsx("form", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 410,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 411,
    columnNumber: 15
  }
}, __jsx("label", {
  htmlFor: "email",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 412,
    columnNumber: 17
  }
}, "Email"), __jsx("input", {
  type: "email",
  className: "form-control",
  id: "email",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 413,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 418,
    columnNumber: 15
  }
}, __jsx("label", {
  htmlFor: "password",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 419,
    columnNumber: 17
  }
}, "Password"), __jsx("input", {
  type: "password",
  className: "form-control",
  id: "password",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 420,
    columnNumber: 17
  }
})), __jsx("button", {
  type: "submit",
  className: "btn btn-main bg-blue py-2 ttu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 425,
    columnNumber: 15
  }
}, "Submit")))))), __jsx("div", {
  className: "reply-controls",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 437,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "reply-area",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 438,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "reply-to",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 439,
    columnNumber: 9
  }
}, "Reply To: ", __jsx("span", {
  className: "text ml-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 440,
    columnNumber: 21
  }
}, "User1")), __jsx("div", {
  className: "fj-editor-input",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 442,
    columnNumber: 9
  }
}, __jsx("input", {
  name: "title",
  placeholder: "Topic title",
  type: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 443,
    columnNumber: 11
  }
})), __jsx("div", {
  className: "fj-editor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 448,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "fj-editor-textarea-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 449,
    columnNumber: 11
  }
}, __jsx("textarea", {
  name: "content",
  placeholder: "Type here",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 450,
    columnNumber: 13
  }
})), __jsx("div", {
  className: "fj-editor-preview-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 455,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "preview",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 456,
    columnNumber: 13
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 457,
    columnNumber: 15
  }
})))), __jsx("div", {
  className: "submit-area",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 461,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "send mr-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 462,
    columnNumber: 11
  }
}, __jsx("button", {
  href: "#",
  className: "btn btn-main bg-blue py-2 ttu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 463,
    columnNumber: 13
  }
}, "Reply"), __jsx("a", {
  className: "btn py-2 ttu gray-10",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 466,
    columnNumber: 13
  }
}, "Cancel")), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 468,
    columnNumber: 11
  }
}, __jsx("a", {
  className: "btn py-2 ttu gray-10",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 469,
    columnNumber: 13
  }
}, "hide preview"))))), __jsx("footer", {
  id: "sticky-footer",
  className: "py-4 bg-black text-white-50 py-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 476,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 477,
    columnNumber: 7
  }
}, __jsx("small", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 478,
    columnNumber: 9
  }
}, "Copyright \xA9 Your Website"))));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gmmun\Desktop\Project\portifolio-jobs\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQSxNQUFNQSxJQUFJLEdBQUcsTUFDWDtBQUFLLFdBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FFRTtBQUFLLFdBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsNENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUcsV0FBUyxF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LENBREYsQ0FERixDQWhORixFQXVORTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQ0UsV0FBUyxFQUFDLHNCQURaO0FBRUUsS0FBRyxFQUFDLGlDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGLENBREYsRUFRRTtBQUFLLFdBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBTSxXQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFB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QUE7QUFBQTtBQUFBLEVBREYsQ0FERixDQVBGLENBVkYsRUF1QkU7QUFBSyxXQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFDRSxNQUFJLEVBQUMsR0FEUDtBQUVFLFdBQVMsRUFBQywrQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsRUFJRTtBQUFHLFdBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsQ0FERixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFHLFdBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBUEYsQ0F2QkYsQ0FERixDQWxiRixFQXlkRTtBQUFRLElBQUUsRUFBQyxlQUFYO0FBQTJCLFdBQVMsRUFBQyxrQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLENBREYsQ0F6ZEYsQ0FERjs7QUFtZWVBLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcGVBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIlxyXG5jb25zdCBIb21lID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWFwcFwiPlxyXG4gICAgey8qIE5BVkJBUiBTVEFSVCAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXdyYXBwZXJcIj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBmai1tdzlcIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgbXItMyBmb250LXdlaWdodC1ib2xkXCIgaHJlZj1cIiNcIj5HdWlsaGVybWUgTS5NdW5pczwvYT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXItM1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5Qb3J0Zm9saW88L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtci0zXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkNvdXJzZXM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtci0zXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkN2PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXItM1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5Bc2sgbWU8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXItM1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5TaWduIFVwPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXItM1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGJ0biBidG4tc3VjY2VzcyBiZy1ncmVlbi0yIGJyaWdodFwiIGhyZWY9XCIjXCI+U2lnbiBJbjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyogTkFWQkFSIEVORFMgKi99XHJcbiAgICB7LyogSEVSTyBTVEFSVFMgKi99XHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmai1oZXJvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmotaGVyby13cmFwcGVyIHJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1sZWZ0IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid2hpdGUgaGVyby10aXRsZVwiPk9sw6EgZXUgc291IG8gR3VpbGhlcm1lIE0uTXVuaXMuIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyPC9oMT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3aGl0ZSBoZXJvLXN1YnRpdGxlXCI+Q29uZmlyYSBtZXUgcG9ydGZvbGlvPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tYWluIGJnLWJsdWUgdHR1XCI+RMOqIHVtYSBvbGhhZGEgbm8gbWV1IHRyYWJhbGhvPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXJpZ2h0IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyb3cgaGVyby1saW5rXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVyby1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kudWRlbXljZG4uY29tL2NvdXJzZS83NTB4NDIyLzE2NTI2MDhfNjYyYl84LmpwZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICB7LyogSEVSTyBFTkRTICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgey8qIEhPTUUgUEFHRSBTVEFSVFMgKi99XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBwYi00XCI+XHJcbiAgICAgICAgICAgIDxoMT5Qb3J0Zm9saW9zPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBiLTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc3VidGxlLXNoYWRvdyBuby1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DYXJkIHRpdGxlPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPkNhcmQgc3VidGl0bGU8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZzLTJcIj5BbGd1bSBleGVtcGxvIGRlIHRleHRvIHLDoXBpZG8gcGFyYSBjcmlhciBvIHTDrXR1bG8gZG8gY2FyZCBlIGNvbXBvciBhIG1haW9yIHBhcnRlIGRvIGNvbnRlw7pkbyBkbyBjYXJkPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXIgbm8tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPsOabHRpbWEgYXR1YWxpemHDp8OjbyBow6EgMyBtaW51dG9zPC9zbWFsbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHN1YnRsZS1zaGFkb3cgbm8tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q2FyZCB0aXRsZTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj5DYXJkIHN1YnRpdGxlPC9oNj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmcy0yIFwiPkFsZ3VtIGV4ZW1wbG8gZGUgdGV4dG8gcsOhcGlkbyBwYXJhIGNyaWFyIG8gdMOtdHVsbyBkbyBjYXJkIGUgY29tcG9yIGEgbWFpb3IgcGFydGUgZG8gY29udGXDumRvIGRvIGNhcmQuPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXIgbm8tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPsOabHRpbWEgYXR1YWxpemHDp8OjbyBow6EgMyBtaW51dG9zPC9zbWFsbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHN1YnRsZS1zaGFkb3cgbm8tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q2FyZCB0aXRsZTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj5DYXJkIHN1YnRpdGxlPC9oNj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmcy0yIFwiPkFsZ3VtIGV4ZW1wbG8gZGUgdGV4dG8gcsOhcGlkbyBwYXJhIGNyaWFyIG8gdMOtdHVsbyBkbyBjYXJkIGUgY29tcG9yIGEgbWFpb3IgcGFydGUgZG8gY29udGXDumRvIGRvIGNhcmQuPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXIgbm8tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPsOabHRpbWEgYXR1YWxpemHDp8OjbyBow6EgMyBtaW51dG9zPC9zbWFsbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tYWluIGJnLWJsdWUgdHR1XCI+VmVqYSBtYWlzIFBvcnRmb2xpb3M8L2E+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBwYi00XCI+XHJcbiAgICAgICAgICAgIDxoMT5Bc2sgTWU8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGItNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydCBweS0zIHN1YnRsZS1zaGFkb3cgbm8tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTEgYmxhY2tcIj5MaXN0IGdyb3VwIGl0ZW0gaGVhZGluZzwvaDU+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPjMgZGlhcyBhdHLDoXM8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPkRvbmVjIGlkIGVsaXQgbm9uIG1pIHBvcnRhIGdyYXZpZGEgYXQgZWdldCBtZXR1cy4gTWFlY2VuYXMgc2VkIGRpYW0gZWdldCByaXN1cyB2YXJpdXMgYmxhbmRpdC48L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLWNvbnRhaW5lciBteS0yXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIgY2xhc3NOYW1lPVwiYXZhdGFyLWltYWdlIG1yLTJcIj48L2ltZz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdmF0YXItdGl0bGVcIj5HdWlsaGVybWUgTS5NdW5pczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0IG10LTMgcHktMyBzdWJ0bGUtc2hhZG93IG5vLWJvcmRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0xIGJsYWNrXCI+TGlzdCBncm91cCBpdGVtIGhlYWRpbmc8L2g1PlxyXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+MyBkaWFzIGF0csOhczwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xXCI+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBNYWVjZW5hcyBzZWQgZGlhbSBlZ2V0IHJpc3VzIHZhcml1cyBibGFuZGl0LjwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItY29udGFpbmVyIG15LTJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIiBjbGFzc05hbWU9XCJhdmF0YXItaW1hZ2UgbXItMlwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF2YXRhci10aXRsZVwiPkd1aWxoZXJtZSBNLk11bmlzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnQgbXQtMyBweS0zIHN1YnRsZS1zaGFkb3cgbm8tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTEgYmxhY2tcIj5MaXN0IGdyb3VwIGl0ZW0gaGVhZGluZzwvaDU+XHJcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4zIGRpYXMgYXRyw6FzPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTFcIj5Eb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIE1hZWNlbmFzIHNlZCBkaWFtIGVnZXQgcmlzdXMgdmFyaXVzIGJsYW5kaXQuPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1jb250YWluZXIgbXktMlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiIGNsYXNzTmFtZT1cImF2YXRhci1pbWFnZSBtci0yXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXZhdGFyLXRpdGxlXCI+R3VpbGhlcm1lIE0uTXVuaXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJidG4gYnRuLW1haW4gYmctYmx1ZSB0dHVcIj5WZWphIG1haXMgUG9zdHM8L2E+XHJcbiAgICAgIHsvKiBIT01FIFBBR0UgRU5EUyAqL31cclxuICAgICAgey8qIEZPUlVNIENBVEVHT1JJRVMgU1RBUlQgKi99XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBwYi00XCI+XHJcbiAgICAgICAgICAgIDxoMT5DYXRlZ29yaWVzPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZqLWNhdGVnb3J5LWxpc3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZqLWNhdGVnb3J5LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZqLWNhdGVnb3J5IHN1YnRsZS1zaGFkb3cgbm8tYm9yZGVyXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgPGltZyBzcmM9XCJpbWFnZXMvcGVuLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1pbmZvcm1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmcgZ3JheS05MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEdlbmVyYWwgRGlzY3Vzc2lvblxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEp1c3QgZ2VuZXJhbCBxdWVzdGlvblxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmai1jYXRlZ29yeS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmai1jYXRlZ29yeSBzdWJ0bGUtc2hhZG93IG5vLWJvcmRlclwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAvLyAgIDxpbWcgc3JjPVwiaW1hZ2VzL3Blbi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAvLyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktaW5mb3JtYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nIGdyYXktOTBcIj5cclxuICAgICAgICAgICAgICAgICAgICBPdGhlciBEaXNjdXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSnVzdCBnZW5lcmFsIHF1ZXN0aW9uXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZqLWNhdGVnb3J5LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZqLWNhdGVnb3J5IHN1YnRsZS1zaGFkb3cgbm8tYm9yZGVyXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgPGltZyBzcmM9XCJpbWFnZXMvcGVuLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1pbmZvcm1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmcgZ3JheS05MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNvbWUgRGlzY3Vzc2lvblxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEp1c3QgZ2VuZXJhbCBxdWVzdGlvblxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICB7LyogRk9SVU0gQ0FURUdPUklFUyBFTkRTICovfVxyXG4gICAgICB7LyogVE9QSUNTIFBBR0UgU1RBUlRTICovfVxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcGItNFwiPlxyXG4gICAgICAgICAgICA8aDE+U3BlY2lmaWMgQ2F0ZWdvcnk8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmotdG9waWMtbGlzdFwiPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciBcIj5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRvcGljPC90aD5cclxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5DYXRlZ29yeTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QXV0aG9yPC90aD5cclxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5SZXBsaWVzPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+U29tZSBUb3BpYyBJbmZvPC90aD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5HZW5lcmFsIERpc2N1c3Npb248L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5HdWlsaGVybWUgTS5NdW5pczwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjI8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlNvbWUgVG9waWMgSW5mbzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+R2VuZXJhbCBEaXNjdXNzaW9uPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+R3VpbGhlcm1lIE0uTXVuaXM8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD4yPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5Tb21lIFRvcGljIEluZm88L3RoPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPkdlbmVyYWwgRGlzY3Vzc2lvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPkd1aWxoZXJtZSBNLk11bmlzPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgey8qIFRPUElDUyBQQUdFIEVORFMgKi99XHJcbiAgICAgIHsvKiBQT1NUUyBQQUdFIFNUQVJUUyAqL31cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTRcIj5cclxuICAgICAgICAgICAgPGgxPlNwZWNpZmljIFRvcGljPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmotcG9zdC1saXN0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1wb3N0XCI+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXZhdGFyIHN1YnRsZS1zaGFkb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vY1ZEYWR3Yi5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkd1aWxoZXJtZSBNLk11bmlzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1jb250YWluZXJcIj48c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+MjFoPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29va2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwb3N0LW1lbnUtYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicG9zdC1jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+cmVwbHk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1wb3N0XCI+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXZhdGFyIHN1YnRsZS1zaGFkb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vY1ZEYWR3Yi5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkd1aWxoZXJtZSBNLk11bmlzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1jb250YWluZXJcIj48c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+MjFoPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29va2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwb3N0LW1lbnUtYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicG9zdC1jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+cmVwbHk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1wb3N0XCI+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXZhdGFyIHN1YnRsZS1zaGFkb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vY1ZEYWR3Yi5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkd1aWxoZXJtZSBNLk11bmlzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1jb250YWluZXJcIj48c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+MjFoPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29va2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwb3N0LW1lbnUtYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicG9zdC1jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+cmVwbHk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgey8qIFBPU1RTIFBBR0UgRU5EUyAqL31cclxuICAgICAgey8qIExPR0lOIFBBR0UgU1RBUlRTICovfVxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcGItNFwiPlxyXG4gICAgICAgICAgICA8aDE+TG9naW4gUGFnZTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ3bS1mb3JtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbWFpbiBiZy1ibHVlIHB5LTIgdHR1XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIExPR0lOIFBBR0UgRU5EUyAqL31cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIHsvKiBSRVBMSUVSIFNUQVJUUyAqL31cclxuICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncmVwbHktY29udHJvbHMgaXMtb3Blbic+ICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlcGx5LWNvbnRyb2xzJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBseS1hcmVhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBseS10b1wiPlxyXG4gICAgICAgICAgUmVwbHkgVG86IDxzcGFuIGNsYXNzTmFtZT1cInRleHQgbWwtMlwiPlVzZXIxPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmotZWRpdG9yLWlucHV0XCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUb3BpYyB0aXRsZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZqLWVkaXRvclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmai1lZGl0b3ItdGV4dGFyZWEtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIj5cclxuICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmai1lZGl0b3ItcHJldmlldy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1wiPlxyXG4gICAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1hcmVhXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmQgbXItYXV0b1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbWFpbiBiZy1ibHVlIHB5LTIgdHR1XCI+UmVwbHk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIHB5LTIgdHR1IGdyYXktMTBcIj5DYW5jZWw8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBweS0yIHR0dSBncmF5LTEwXCI+aGlkZSBwcmV2aWV3PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyogUkVQTElFUiBFTkRTICovfVxyXG4gICAgey8qIEZPT1RFUiBTVEFSVFMgKi99XHJcbiAgICA8Zm9vdGVyIGlkPVwic3RpY2t5LWZvb3RlclwiIGNsYXNzTmFtZT1cInB5LTQgYmctYmxhY2sgdGV4dC13aGl0ZS01MCBweS0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPHNtYWxsPkNvcHlyaWdodCAmY29weTsgWW91ciBXZWJzaXRlPC9zbWFsbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIHsvKiBGT09URVIgRU5EUyAqL31cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9