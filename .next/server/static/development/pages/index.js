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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
    lineNumber: 159,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "px-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "pt-5 pb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 11
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 13
  }
}, "Specific Category")))), __jsx("section", {
  className: "fj-topic-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 7
  }
}, __jsx("table", {
  className: "table table-hover ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 9
  }
}, __jsx("thead", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 11
  }
}, __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 13
  }
}, __jsx("th", {
  scope: "col",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170,
    columnNumber: 15
  }
}, "Topic"), __jsx("th", {
  scope: "col",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 15
  }
}, "Category"), __jsx("th", {
  scope: "col",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 172,
    columnNumber: 15
  }
}, "Author"), __jsx("th", {
  scope: "col",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173,
    columnNumber: 15
  }
}, "Replies"))), __jsx("tbody", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 11
  }
}, __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177,
    columnNumber: 13
  }
}, __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178,
    columnNumber: 15
  }
}, "Some Topic Info"), __jsx("td", {
  className: "category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 15
  }
}, "General Discussion"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 180,
    columnNumber: 15
  }
}, "Guilherme M.Munis"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 15
  }
}, "2")), __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 13
  }
}, __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184,
    columnNumber: 15
  }
}, "Some Topic Info"), __jsx("td", {
  className: "category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 15
  }
}, "General Discussion"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 15
  }
}, "Guilherme M.Munis"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 187,
    columnNumber: 15
  }
}, "2")), __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 13
  }
}, __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 190,
    columnNumber: 15
  }
}, "Some Topic Info"), __jsx("td", {
  className: "category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 15
  }
}, "General Discussion"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 15
  }
}, "Guilherme M.Munis"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 193,
    columnNumber: 15
  }
}, "2"))))), __jsx("section", {
  className: "section-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 200,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "px-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 201,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "pt-5 pb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 202,
    columnNumber: 11
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 203,
    columnNumber: 13
  }
}, "Specific Topic")))), __jsx("section", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 207,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "fj-post-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "col-md-9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "topic-post",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 211,
    columnNumber: 15
  }
}, __jsx("article", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 212,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 213,
    columnNumber: 19
  }
}, __jsx("div", {
  className: "topic-avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 214,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 215,
    columnNumber: 23
  }
}, __jsx("img", {
  className: "avatar subtle-shadow",
  src: "https://i.imgur.com/cVDadwb.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 216,
    columnNumber: 25
  }
}))), __jsx("div", {
  className: "topic-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 221,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "topic-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 222,
    columnNumber: 23
  }
}, __jsx("div", {
  className: "topic-meta",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "name-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 224,
    columnNumber: 27
  }
}, __jsx("span", {
  className: "name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 225,
    columnNumber: 29
  }
}, "Guilherme M.Munis")), __jsx("div", {
  className: "date-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 227,
    columnNumber: 27
  }
}, __jsx("span", {
  className: "date",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 227,
    columnNumber: 59
  }
}, "21h")))), __jsx("div", {
  className: "topic-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 230,
    columnNumber: 23
  }
}, __jsx("div", {
  className: "cooked",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 231,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 232,
    columnNumber: 27
  }
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")), __jsx("section", {
  className: "post-menu-area",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 234,
    columnNumber: 25
  }
}, __jsx("nav", {
  className: "post-controls",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 235,
    columnNumber: 27
  }
}, __jsx("div", {
  className: "actions",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 236,
    columnNumber: 29
  }
}, __jsx("button", {
  className: "btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 237,
    columnNumber: 31
  }
}, "reply"))))))))))), __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 248,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "col-md-9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 249,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "topic-post",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 250,
    columnNumber: 15
  }
}, __jsx("article", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 251,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 252,
    columnNumber: 19
  }
}, __jsx("div", {
  className: "topic-avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 253,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 254,
    columnNumber: 23
  }
}, __jsx("img", {
  className: "avatar subtle-shadow",
  src: "https://i.imgur.com/cVDadwb.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 255,
    columnNumber: 25
  }
}))), __jsx("div", {
  className: "topic-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 260,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "topic-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 261,
    columnNumber: 23
  }
}, __jsx("div", {
  className: "topic-meta",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 262,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "name-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 263,
    columnNumber: 27
  }
}, __jsx("span", {
  className: "name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 264,
    columnNumber: 29
  }
}, "Guilherme M.Munis")), __jsx("div", {
  className: "date-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 266,
    columnNumber: 27
  }
}, __jsx("span", {
  className: "date",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 266,
    columnNumber: 59
  }
}, "21h")))), __jsx("div", {
  className: "topic-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 23
  }
}, __jsx("div", {
  className: "cooked",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 270,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 271,
    columnNumber: 27
  }
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")), __jsx("section", {
  className: "post-menu-area",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 273,
    columnNumber: 25
  }
}, __jsx("nav", {
  className: "post-controls",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 274,
    columnNumber: 27
  }
}, __jsx("div", {
  className: "actions",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 275,
    columnNumber: 29
  }
}, __jsx("button", {
  className: "btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 276,
    columnNumber: 31
  }
}, "reply"))))))))))), __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 287,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "col-md-9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 288,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "topic-post",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 289,
    columnNumber: 15
  }
}, __jsx("article", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 290,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 291,
    columnNumber: 19
  }
}, __jsx("div", {
  className: "topic-avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 292,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 293,
    columnNumber: 23
  }
}, __jsx("img", {
  className: "avatar subtle-shadow",
  src: "https://i.imgur.com/cVDadwb.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 294,
    columnNumber: 25
  }
}))), __jsx("div", {
  className: "topic-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 299,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "topic-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 300,
    columnNumber: 23
  }
}, __jsx("div", {
  className: "topic-meta",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 301,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "name-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 302,
    columnNumber: 27
  }
}, __jsx("span", {
  className: "name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 303,
    columnNumber: 29
  }
}, "Guilherme M.Munis")), __jsx("div", {
  className: "date-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 305,
    columnNumber: 27
  }
}, __jsx("span", {
  className: "date",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 305,
    columnNumber: 59
  }
}, "21h")))), __jsx("div", {
  className: "topic-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 308,
    columnNumber: 23
  }
}, __jsx("div", {
  className: "cooked",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 309,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 310,
    columnNumber: 27
  }
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")), __jsx("section", {
  className: "post-menu-area",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 312,
    columnNumber: 25
  }
}, __jsx("nav", {
  className: "post-controls",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 313,
    columnNumber: 27
  }
}, __jsx("div", {
  className: "actions",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 314,
    columnNumber: 29
  }
}, __jsx("button", {
  className: "btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 315,
    columnNumber: 31
  }
}, "reply"))))))))))))), __jsx("section", {
  className: "section-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 330,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "px-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 331,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "pt-5 pb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 332,
    columnNumber: 11
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 333,
    columnNumber: 13
  }
}, "Login Page")))), __jsx("div", {
  className: "bwm-form",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 337,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 338,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "col-md-5 mx-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 339,
    columnNumber: 11
  }
}, __jsx("h1", {
  className: "page-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 340,
    columnNumber: 13
  }
}, "Login"), __jsx("form", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 341,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 342,
    columnNumber: 15
  }
}, __jsx("label", {
  htmlFor: "email",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 343,
    columnNumber: 17
  }
}, "Email"), __jsx("input", {
  type: "email",
  className: "form-control",
  id: "email",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 344,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 349,
    columnNumber: 15
  }
}, __jsx("label", {
  htmlFor: "password",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 350,
    columnNumber: 17
  }
}, "Password"), __jsx("input", {
  type: "password",
  className: "form-control",
  id: "password",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 351,
    columnNumber: 17
  }
})), __jsx("button", {
  type: "submit",
  className: "btn btn-main bg-blue py-2 ttu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 356,
    columnNumber: 15
  }
}, "Submit")))))), __jsx("div", {
  className: "reply-controls",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 368,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "reply-area",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 369,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "reply-to",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 370,
    columnNumber: 9
  }
}, "Reply To: ", __jsx("span", {
  className: "text ml-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 371,
    columnNumber: 21
  }
}, "User1")), __jsx("div", {
  className: "fj-editor-input",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 373,
    columnNumber: 9
  }
}, __jsx("input", {
  name: "title",
  placeholder: "Topic title",
  type: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 374,
    columnNumber: 11
  }
})), __jsx("div", {
  className: "fj-editor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 379,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "fj-editor-textarea-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 380,
    columnNumber: 11
  }
}, __jsx("textarea", {
  name: "content",
  placeholder: "Type here",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 381,
    columnNumber: 13
  }
})), __jsx("div", {
  className: "fj-editor-preview-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 386,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "preview",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 387,
    columnNumber: 13
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 388,
    columnNumber: 15
  }
})))), __jsx("div", {
  className: "submit-area",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 392,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "send mr-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 393,
    columnNumber: 11
  }
}, __jsx("button", {
  href: "#",
  className: "btn btn-main bg-blue py-2 ttu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 394,
    columnNumber: 13
  }
}, "Reply"), __jsx("a", {
  className: "btn py-2 ttu gray-10",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 397,
    columnNumber: 13
  }
}, "Cancel")), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 399,
    columnNumber: 11
  }
}, __jsx("a", {
  className: "btn py-2 ttu gray-10",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 400,
    columnNumber: 13
  }
}, "hide preview"))))), __jsx("footer", {
  id: "sticky-footer",
  className: "py-4 bg-black text-white-50 py-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 407,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 408,
    columnNumber: 7
  }
}, __jsx("small", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 409,
    columnNumber: 9
  }
}, "Copyright \xA9 Your Website"))));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQSxNQUFNQSxJQUFJLEdBQUcsTUFDWDtBQUFLLFdBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FFRTtBQUFLLFdBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsNENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUcsV0FBUyxFQUFDLG9DQUFiO0FBQWtELE1BQUksRUFBQyxHQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUU7QUFBUSxXQUFTLEVBQUMsZ0JBQWxCO0FBQW1DLE1BQUksRUFBQyxRQUF4QztBQUFpRCxpQkFBWSxVQUE3RDtBQUF3RSxpQkFBWSx5QkFBcEY7QUFBOEcsbUJBQWMsd0JBQTVIO0FBQXFKLG1CQUFjLE9BQW5LO0FBQTJLLGdCQUFXLG1CQUF0TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBTSxXQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQUZGLEVBTUU7QUFBSyxXQUFTLEVBQUMsMEJBQWY7QUFBMEMsSUFBRSxFQUFDLHdCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBRyxXQUFTLEVBQUMsVUFBYjtBQUF3QixNQUFJLEVBQUMsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBREYsRUFJRTtBQUFJLFdBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFHLFdBQVMsRUFBQyxVQUFiO0FBQXdCLE1BQUksRUFBQyxHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FKRixFQU9FO0FBQUksV0FBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUcsV0FBUyxFQUFDLFVBQWI7QUFBd0IsTUFBSSxFQUFDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQVBGLEVBVUU7QUFBSSxXQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBRyxXQUFTLEVBQUMsVUFBYjtBQUF3QixNQUFJLEVBQUMsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBVkYsQ0FERixFQWVFO0FBQUksV0FBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFHLFdBQVMsRUFBQyxVQUFiO0FBQXdCLE1BQUksRUFBQyxHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FERixFQUlFO0FBQUksV0FBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUcsV0FBUyxFQUFDLDRDQUFiO0FBQTBELE1BQUksRUFBQyxHQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FKRixDQWZGLENBTkYsQ0FERixDQUZGLEVBcUNFO0FBQVMsV0FBUyxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUksV0FBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkRBREYsRUFFRTtBQUFJLFdBQVMsRUFBQyxxQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLEVBR0U7QUFBSyxXQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUcsTUFBSSxFQUFDLEVBQVI7QUFBVyxXQUFTLEVBQUMsMEJBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBREYsQ0FIRixDQURGLEVBUUU7QUFBSyxXQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFHLFdBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFDRSxXQUFTLEVBQUMsWUFEWjtBQUVFLEtBQUcsRUFBQywwREFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERixDQURGLENBUkYsQ0FERixDQXJDRixFQTBERTtBQUFLLFdBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FFRTtBQUFTLFdBQVMsRUFBQyxlQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLENBREYsQ0FGRixFQVNFO0FBQVMsV0FBUyxFQUFDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBSSxXQUFTLEVBQUMsK0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixFQUdFO0FBQUcsV0FBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUhBSEYsQ0FERixFQU1FO0FBQUssV0FBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFPLFdBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQURGLENBTkYsQ0FERixDQURGLEVBYUU7QUFBSyxXQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUksV0FBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQUksV0FBUyxFQUFDLCtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHRTtBQUFHLFdBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9IQUhGLENBREYsRUFNRTtBQUFLLFdBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBTyxXQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFERixDQU5GLENBREYsQ0FiRixFQXlCRTtBQUFLLFdBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBSSxXQUFTLEVBQUMsK0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixFQUdFO0FBQUcsV0FBUyxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0hBSEYsQ0FERixFQU1FO0FBQUssV0FBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFPLFdBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQURGLENBTkYsQ0FERixDQXpCRixDQURGLENBVEYsRUFpREU7QUFBRyxNQUFJLEVBQUMsRUFBUjtBQUFXLFdBQVMsRUFBQywwQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFqREYsRUFrREU7QUFBUyxXQUFTLEVBQUMsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLENBREYsQ0FsREYsRUF5REU7QUFBUyxXQUFTLEVBQUMsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUcsTUFBSSxFQUFDLEdBQVI7QUFBWSxXQUFTLEVBQUMsbUdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixDQURGLEVBS0U7QUFBRyxXQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9HQUxGLEVBTUU7QUFBSyxXQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssS0FBRyxFQUFDLGlDQUFUO0FBQTJDLFdBQVMsRUFBQyxtQkFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBTSxXQUFTLEVBQUMsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixDQU5GLENBREYsRUFZRTtBQUFHLE1BQUksRUFBQyxHQUFSO0FBQVksV0FBUyxFQUFDLHdHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUksV0FBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFO0FBQU8sV0FBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsQ0FERixFQUtFO0FBQUcsV0FBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FMRixFQU1FO0FBQUssV0FBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLEtBQUcsRUFBQyxpQ0FBVDtBQUEyQyxXQUFTLEVBQUMsbUJBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFO0FBQU0sV0FBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsQ0FORixDQVpGLEVBdUJFO0FBQUcsTUFBSSxFQUFDLEdBQVI7QUFBWSxXQUFTLEVBQUMsd0dBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLEVBRUU7QUFBTyxXQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixDQURGLEVBS0U7QUFBRyxXQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9HQUxGLEVBTUU7QUFBSyxXQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssS0FBRyxFQUFDLGlDQUFUO0FBQTJDLFdBQVMsRUFBQyxtQkFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBTSxXQUFTLEVBQUMsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixDQU5GLENBdkJGLENBREYsQ0F6REYsRUE4RkU7QUFBRyxNQUFJLEVBQUMsRUFBUjtBQUFXLFdBQVMsRUFBQywwQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE5RkYsRUFrR0U7QUFBUyxXQUFTLEVBQUMsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FERixDQURGLENBbEdGLEVBeUdFO0FBQVMsV0FBUyxFQUFDLGVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFPLFdBQVMsRUFBQyxvQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxPQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsRUFFRTtBQUFJLE9BQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQUdFO0FBQUksT0FBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLEVBSUU7QUFBSSxPQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsQ0FERixDQURGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBSSxXQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FKRixDQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFJLFdBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUpGLENBUEYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQUksV0FBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSkYsQ0FiRixDQVRGLENBREYsQ0F6R0YsRUEySUU7QUFBUyxXQUFTLEVBQUMsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FERixDQURGLENBM0lGLEVBa0pFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFDRSxXQUFTLEVBQUMsc0JBRFo7QUFFRSxLQUFHLEVBQUMsaUNBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBREYsQ0FERixFQVFFO0FBQUssV0FBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFNLFdBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBREYsRUFJRTtBQUFLLFdBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWdDO0FBQU0sV0FBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBaEMsQ0FKRixDQURGLENBREYsRUFTRTtBQUFLLFdBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJQQURGLENBREYsRUFJRTtBQUFTLFdBQVMsRUFBQyxnQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQVEsV0FBUyxFQUFDLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixDQURGLENBREYsQ0FKRixDQVRGLENBUkYsQ0FERixDQURGLENBREYsQ0FERixDQURGLEVBd0NFO0FBQUssV0FBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUNFLFdBQVMsRUFBQyxzQkFEWjtBQUVFLEtBQUcsRUFBQyxpQ0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERixDQURGLEVBUUU7QUFBSyxXQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQU0sV0FBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FERixFQUlFO0FBQUssV0FBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZ0M7QUFBTSxXQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFoQyxDQUpGLENBREYsQ0FERixFQVNFO0FBQUssV0FBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMlBBREYsQ0FERixFQUlFO0FBQVMsV0FBUyxFQUFDLGdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBUSxXQUFTLEVBQUMsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBREYsQ0FERixDQUpGLENBVEYsQ0FSRixDQURGLENBREYsQ0FERixDQURGLENBeENGLEVBK0VFO0FBQUssV0FBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUNFLFdBQVMsRUFBQyxzQkFEWjtBQUVFLEtBQUcsRUFBQyxpQ0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FERixDQURGLEVBUUU7QUFBSyxXQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQU0sV0FBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FERixFQUlFO0FBQUssV0FBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZ0M7QUFBTSxXQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFoQyxDQUpGLENBREYsQ0FERixFQVNFO0FBQUssV0FBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMlBBREYsQ0FERixFQUlFO0FBQVMsV0FBUyxFQUFDLGdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBUSxXQUFTLEVBQUMsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBREYsQ0FERixDQUpGLENBVEYsQ0FSRixDQURGLENBREYsQ0FERixDQURGLENBL0VGLENBREYsQ0FsSkYsRUE2UUU7QUFBUyxXQUFTLEVBQUMsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixDQURGLENBN1FGLEVBb1JFO0FBQUssV0FBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFJLFdBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFPLFNBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQUVFO0FBQ0UsTUFBSSxFQUFDLE9BRFA7QUFFRSxXQUFTLEVBQUMsY0FGWjtBQUdFLElBQUUsRUFBQyxPQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixDQURGLEVBUUU7QUFBSyxXQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBTyxTQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUNFLE1BQUksRUFBQyxVQURQO0FBRUUsV0FBUyxFQUFDLGNBRlo7QUFHRSxJQUFFLEVBQUMsVUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsQ0FSRixFQWVFO0FBQ0UsTUFBSSxFQUFDLFFBRFA7QUFFRSxXQUFTLEVBQUMsK0JBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGLENBRkYsQ0FERixDQURGLENBcFJGLENBMURGLEVBNldFO0FBQUssV0FBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1k7QUFBTSxXQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURaLENBREYsRUFJRTtBQUFLLFdBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFDRSxNQUFJLEVBQUMsT0FEUDtBQUVFLGFBQVcsRUFBQyxhQUZkO0FBR0UsTUFBSSxFQUFDLE1BSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBSkYsRUFVRTtBQUFLLFdBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFDRSxNQUFJLEVBQUMsU0FEUDtBQUVFLGFBQVcsRUFBQyxXQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGLEVBT0U7QUFBSyxXQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGLENBUEYsQ0FWRixFQXVCRTtBQUFLLFdBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUNFLE1BQUksRUFBQyxHQURQO0FBRUUsV0FBUyxFQUFDLCtCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQUlFO0FBQUcsV0FBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixDQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUcsV0FBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FQRixDQXZCRixDQURGLENBN1dGLEVBb1pFO0FBQVEsSUFBRSxFQUFDLGVBQVg7QUFBMkIsV0FBUyxFQUFDLGtDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsQ0FERixDQXBaRixDQURGOztBQThaZUEsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvWkEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tYXBwXCI+XHJcbiAgICB7LyogTkFWQkFSIFNUQVJUICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItd3JhcHBlclwiPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGZqLW13OVwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBtci0zIGZvbnQtd2VpZ2h0LWJvbGRcIiBocmVmPVwiI1wiPkd1aWxoZXJtZSBNLk11bmlzPC9hPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtci0zXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlBvcnRmb2xpbzwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1yLTNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+Q291cnNlczwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1yLTNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+Q3Y8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtci0zXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkFzayBtZTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtci0zXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlNpZ24gVXA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtci0zXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYnRuIGJ0bi1zdWNjZXNzIGJnLWdyZWVuLTIgYnJpZ2h0XCIgaHJlZj1cIiNcIj5TaWduIEluPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKiBOQVZCQVIgRU5EUyAqL31cclxuICAgIHsvKiBIRVJPIFNUQVJUUyAqL31cclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZqLWhlcm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmai1oZXJvLXdyYXBwZXIgcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWxlZnQgY29sLW1kLTZcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3aGl0ZSBoZXJvLXRpdGxlXCI+T2zDoSBldSBzb3UgbyBHdWlsaGVybWUgTS5NdW5pcy4gRnVsbCBTdGFjayBEZXZlbG9wZXI8L2gxPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIndoaXRlIGhlcm8tc3VidGl0bGVcIj5Db25maXJhIG1ldSBwb3J0Zm9saW88L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJidG4gYnRuLW1haW4gYmctYmx1ZSB0dHVcIj5Ew6ogdW1hIG9saGFkYSBubyBtZXUgdHJhYmFsaG88L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tcmlnaHQgY29sLW1kLTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JvdyBoZXJvLWxpbmtcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLWltYWdlXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS51ZGVteWNkbi5jb20vY291cnNlLzc1MHg0MjIvMTY1MjYwOF82NjJiXzguanBnXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIHsvKiBIRVJPIEVORFMgKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICB7LyogSE9NRSBQQUdFIFNUQVJUUyAqL31cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTRcIj5cclxuICAgICAgICAgICAgPGgxPlBvcnRmb2xpb3M8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGItNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzdWJ0bGUtc2hhZG93IG5vLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhcmQgdGl0bGU8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+Q2FyZCBzdWJ0aXRsZTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgZnMtMlwiPkFsZ3VtIGV4ZW1wbG8gZGUgdGV4dG8gcsOhcGlkbyBwYXJhIGNyaWFyIG8gdMOtdHVsbyBkbyBjYXJkIGUgY29tcG9yIGEgbWFpb3IgcGFydGUgZG8gY29udGXDumRvIGRvIGNhcmQ8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBuby1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+w5psdGltYSBhdHVhbGl6YcOnw6NvIGjDoSAzIG1pbnV0b3M8L3NtYWxsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc3VidGxlLXNoYWRvdyBuby1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DYXJkIHRpdGxlPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPkNhcmQgc3VidGl0bGU8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZzLTIgXCI+QWxndW0gZXhlbXBsbyBkZSB0ZXh0byByw6FwaWRvIHBhcmEgY3JpYXIgbyB0w610dWxvIGRvIGNhcmQgZSBjb21wb3IgYSBtYWlvciBwYXJ0ZSBkbyBjb250ZcO6ZG8gZG8gY2FyZC48L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBuby1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+w5psdGltYSBhdHVhbGl6YcOnw6NvIGjDoSAzIG1pbnV0b3M8L3NtYWxsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc3VidGxlLXNoYWRvdyBuby1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DYXJkIHRpdGxlPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPkNhcmQgc3VidGl0bGU8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZzLTIgXCI+QWxndW0gZXhlbXBsbyBkZSB0ZXh0byByw6FwaWRvIHBhcmEgY3JpYXIgbyB0w610dWxvIGRvIGNhcmQgZSBjb21wb3IgYSBtYWlvciBwYXJ0ZSBkbyBjb250ZcO6ZG8gZG8gY2FyZC48L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBuby1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+w5psdGltYSBhdHVhbGl6YcOnw6NvIGjDoSAzIG1pbnV0b3M8L3NtYWxsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJidG4gYnRuLW1haW4gYmctYmx1ZSB0dHVcIj5WZWphIG1haXMgUG9ydGZvbGlvczwvYT5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTRcIj5cclxuICAgICAgICAgICAgPGgxPkFzayBNZTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYi01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0IHB5LTMgc3VidGxlLXNoYWRvdyBuby1ib3JkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMSBibGFja1wiPkxpc3QgZ3JvdXAgaXRlbSBoZWFkaW5nPC9oNT5cclxuICAgICAgICAgICAgICA8c21hbGw+MyBkaWFzIGF0csOhczwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xXCI+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBNYWVjZW5hcyBzZWQgZGlhbSBlZ2V0IHJpc3VzIHZhcml1cyBibGFuZGl0LjwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItY29udGFpbmVyIG15LTJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIiBjbGFzc05hbWU9XCJhdmF0YXItaW1hZ2UgbXItMlwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF2YXRhci10aXRsZVwiPkd1aWxoZXJtZSBNLk11bmlzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnQgbXQtMyBweS0zIHN1YnRsZS1zaGFkb3cgbm8tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTEgYmxhY2tcIj5MaXN0IGdyb3VwIGl0ZW0gaGVhZGluZzwvaDU+XHJcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4zIGRpYXMgYXRyw6FzPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTFcIj5Eb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIE1hZWNlbmFzIHNlZCBkaWFtIGVnZXQgcmlzdXMgdmFyaXVzIGJsYW5kaXQuPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1jb250YWluZXIgbXktMlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiIGNsYXNzTmFtZT1cImF2YXRhci1pbWFnZSBtci0yXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXZhdGFyLXRpdGxlXCI+R3VpbGhlcm1lIE0uTXVuaXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydCBtdC0zIHB5LTMgc3VidGxlLXNoYWRvdyBuby1ib3JkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMSBibGFja1wiPkxpc3QgZ3JvdXAgaXRlbSBoZWFkaW5nPC9oNT5cclxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPjMgZGlhcyBhdHLDoXM8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPkRvbmVjIGlkIGVsaXQgbm9uIG1pIHBvcnRhIGdyYXZpZGEgYXQgZWdldCBtZXR1cy4gTWFlY2VuYXMgc2VkIGRpYW0gZWdldCByaXN1cyB2YXJpdXMgYmxhbmRpdC48L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLWNvbnRhaW5lciBteS0yXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIgY2xhc3NOYW1lPVwiYXZhdGFyLWltYWdlIG1yLTJcIj48L2ltZz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdmF0YXItdGl0bGVcIj5HdWlsaGVybWUgTS5NdW5pczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImJ0biBidG4tbWFpbiBiZy1ibHVlIHR0dVwiPlZlamEgbWFpcyBQb3N0czwvYT5cclxuICAgICAgey8qIEhPTUUgUEFHRSBFTkRTICovfVxyXG4gICAgXHJcbiAgICAgIHsvKiBUT1BJQ1MgUEFHRSBTVEFSVFMgKi99XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBwYi00XCI+XHJcbiAgICAgICAgICAgIDxoMT5TcGVjaWZpYyBDYXRlZ29yeTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmai10b3BpYy1saXN0XCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIFwiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VG9waWM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNhdGVnb3J5PC90aD5cclxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BdXRob3I8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlJlcGxpZXM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5Tb21lIFRvcGljIEluZm88L3RoPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPkdlbmVyYWwgRGlzY3Vzc2lvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPkd1aWxoZXJtZSBNLk11bmlzPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+U29tZSBUb3BpYyBJbmZvPC90aD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5HZW5lcmFsIERpc2N1c3Npb248L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5HdWlsaGVybWUgTS5NdW5pczwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjI8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlNvbWUgVG9waWMgSW5mbzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+R2VuZXJhbCBEaXNjdXNzaW9uPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+R3VpbGhlcm1lIE0uTXVuaXM8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD4yPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICB7LyogVE9QSUNTIFBBR0UgRU5EUyAqL31cclxuICAgICAgey8qIFBPU1RTIFBBR0UgU1RBUlRTICovfVxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcGItNFwiPlxyXG4gICAgICAgICAgICA8aDE+U3BlY2lmaWMgVG9waWM8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmai1wb3N0LWxpc3RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLXBvc3RcIj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgc3VidGxlLXNoYWRvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9jVkRhZHdiLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+R3VpbGhlcm1lIE0uTXVuaXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLWNvbnRhaW5lclwiPjxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj4yMWg8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb29rZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBvc3QtbWVudS1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5yZXBseTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLXBvc3RcIj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgc3VidGxlLXNoYWRvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9jVkRhZHdiLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+R3VpbGhlcm1lIE0uTXVuaXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLWNvbnRhaW5lclwiPjxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj4yMWg8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb29rZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBvc3QtbWVudS1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5yZXBseTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLXBvc3RcIj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgc3VidGxlLXNoYWRvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9jVkRhZHdiLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+R3VpbGhlcm1lIE0uTXVuaXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLWNvbnRhaW5lclwiPjxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj4yMWg8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb29rZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBvc3QtbWVudS1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5yZXBseTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICB7LyogUE9TVFMgUEFHRSBFTkRTICovfVxyXG4gICAgICB7LyogTE9HSU4gUEFHRSBTVEFSVFMgKi99XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBwYi00XCI+XHJcbiAgICAgICAgICAgIDxoMT5Mb2dpbiBQYWdlPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYndtLWZvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNSBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+TG9naW48L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tYWluIGJnLWJsdWUgcHktMiB0dHVcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogTE9HSU4gUEFHRSBFTkRTICovfVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgey8qIFJFUExJRVIgU1RBUlRTICovfVxyXG4gICAgey8qIDxkaXYgY2xhc3NOYW1lPSdyZXBseS1jb250cm9scyBpcy1vcGVuJz4gKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncmVwbHktY29udHJvbHMnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGx5LWFyZWFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGx5LXRvXCI+XHJcbiAgICAgICAgICBSZXBseSBUbzogPHNwYW4gY2xhc3NOYW1lPVwidGV4dCBtbC0yXCI+VXNlcjE8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmai1lZGl0b3ItaW5wdXRcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRvcGljIHRpdGxlXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmotZWRpdG9yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZqLWVkaXRvci10ZXh0YXJlYS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiPlxyXG4gICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZqLWVkaXRvci1wcmV2aWV3LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LWFyZWFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZCBtci1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tYWluIGJnLWJsdWUgcHktMiB0dHVcIj5SZXBseTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gcHktMiB0dHUgZ3JheS0xMFwiPkNhbmNlbDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIHB5LTIgdHR1IGdyYXktMTBcIj5oaWRlIHByZXZpZXc8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIHsvKiBSRVBMSUVSIEVORFMgKi99XHJcbiAgICB7LyogRk9PVEVSIFNUQVJUUyAqL31cclxuICAgIDxmb290ZXIgaWQ9XCJzdGlja3ktZm9vdGVyXCIgY2xhc3NOYW1lPVwicHktNCBiZy1ibGFjayB0ZXh0LXdoaXRlLTUwIHB5LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8c21hbGw+Q29weXJpZ2h0ICZjb3B5OyBZb3VyIFdlYnNpdGU8L3NtYWxsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgey8qIEZPT1RFUiBFTkRTICovfVxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=