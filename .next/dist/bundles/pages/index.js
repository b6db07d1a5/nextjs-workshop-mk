module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sidebar__ = __webpack_require__("./components/Sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Content__ = __webpack_require__("./components/Content.js");
var _jsxFileName = '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/components/App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Sidebar__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Content__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                })
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./components/CategoriesList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CategoryItem__ = __webpack_require__("./components/CategoryItem.js");
var _jsxFileName = '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/components/CategoriesList.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CategoriesList = function (_Component) {
    _inherits(CategoriesList, _Component);

    function CategoriesList() {
        _classCallCheck(this, CategoriesList);

        return _possibleConstructorReturn(this, (CategoriesList.__proto__ || Object.getPrototypeOf(CategoriesList)).apply(this, arguments));
    }

    _createClass(CategoriesList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                categories = _props.categories,
                categoryClick = _props.categoryClick;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                categories.map(function (category, i) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CategoryItem__["a" /* default */], { key: 'category ' + i,
                        categoryClick: categoryClick,
                        itemId: category.id,
                        itemName: category.name,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    });
                })
            );
        }
    }]);

    return CategoriesList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CategoriesList);

/***/ }),

/***/ "./components/CategoryItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/components/CategoryItem.js';


var CategoryItem = function CategoryItem(_ref) {
    var itemId = _ref.itemId,
        itemName = _ref.itemName,
        categoryClick = _ref.categoryClick;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { onClick: categoryClick(itemId), __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        itemName
    );
};

/* harmony default export */ __webpack_exports__["a"] = (CategoryItem);

/***/ }),

/***/ "./components/Content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ContentCart__ = __webpack_require__("./components/ContentCart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContentMenus__ = __webpack_require__("./components/ContentMenus.js");
var _jsxFileName = '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/components/Content.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Content = function (_Component) {
    _inherits(Content, _Component);

    function Content() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Content);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Content.__proto__ || Object.getPrototypeOf(Content)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            menus: Array(),
            contentDisplay: _this.props.content.contentDisplay
        }, _this.retrieveMenus = function () {
            var categoryId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            fetch('http://localhost:3001/menus?categoryId=' + categoryId).then(function (resp) {
                return resp.json();
            }).then(function (data) {
                _this.setState(_extends({}, _this.state, {
                    menus: data
                }));
            });
        }, _this.onClickAddTocart = function (menuId) {
            return function () {
                _this.props.dispatch({
                    type: 'ADD_MENU',
                    menuItem: _this.state.menus.find(function (menu) {
                        return menu.id === menuId;
                    })
                });
            };
        }, _this.onClickDecreaseFromCart = function (menuId) {
            return function () {
                _this.props.dispatch({
                    type: 'DECREASE_MENU',
                    menuId: menuId
                });
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Content, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.retrieveMenus();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var contentDisplay = nextProps.content.contentDisplay;

            if (contentDisplay === 'menus') {
                var id = nextProps.category.id;

                this.retrieveMenus(id);
                this.setState(_extends({}, this.state, {
                    contentDisplay: contentDisplay
                }));
            } else {
                var items = nextProps.cart.items;

                this.setState(_extends({}, this.state, {
                    menus: items,
                    contentDisplay: contentDisplay
                }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                menus = _state.menus,
                contentDisplay = _state.contentDisplay;

            var content = contentDisplay === 'menus' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContentMenus__["a" /* default */], { menus: menus, onClickAddTocart: this.onClickAddTocart, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ContentCart__["a" /* default */], { menus: menus, onClickDecreaseFromCart: this.onClickDecreaseFromCart, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            });
            return content;
        }
    }]);

    return Content;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
    return {
        content: state.content,
        category: state.category,
        cart: state.cart };
})(Content));

/***/ }),

/***/ "./components/ContentCart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/components/ContentCart.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ContentCart = function (_Component) {
    _inherits(ContentCart, _Component);

    function ContentCart() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ContentCart);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContentCart.__proto__ || Object.getPrototypeOf(ContentCart)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            sum: 0,
            menus: Array()
        }, _this.sum = function (arr) {
            var sum = 0;
            arr.forEach(function (el) {
                sum += el.price * el.qty;
            });
            return sum;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ContentCart, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var menus = this.props.menus;

            var sum = this.sum(menus);
            this.setState(_extends({}, this.state, {
                menus: menus,
                sum: sum
            }));
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var menus = nextProps.menus;

            var sum = this.sum(menus);
            this.setState(_extends({}, this.state, {
                menus: menus,
                sum: sum
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                menus = _state.menus,
                sum = _state.sum;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                        }
                    },
                    menus.map(function (menu, i) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { key: 'menu cart ' + i, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 42
                                }
                            },
                            menu.name,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'button',
                                { onClick: _this2.props.onClickDecreaseFromCart(menu.id), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 44
                                    }
                                },
                                ' - '
                            ),
                            menu.qty
                        );
                    })
                ),
                '=-=-=-=-=-=-=-=-=-=-=-= ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                }),
                sum
            );
        }
    }]);

    return ContentCart;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ContentCart);

/***/ }),

/***/ "./components/ContentItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
var _jsxFileName = '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/components/ContentItem.js';



var onClickDetail = function onClickDetail(id) {
    return function () {
        return __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push({
            pathname: '/ItemDetail',
            query: { id: id }
        });
    };
};

var ContentItem = function ContentItem(props) {
    var _props$item = props.item,
        id = _props$item.id,
        name = _props$item.name;

    var onClickAddTocart = props.onClickAddTocart;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { display: 'inline' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 14
            }
        },
        name,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: onClickDetail(id), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            },
            'detail'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: onClickAddTocart(id), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            },
            'buy'
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (ContentItem);

/***/ }),

/***/ "./components/ContentMenus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContentItem__ = __webpack_require__("./components/ContentItem.js");
var _jsxFileName = '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/components/ContentMenus.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ContentMenus = function (_Component) {
    _inherits(ContentMenus, _Component);

    function ContentMenus() {
        _classCallCheck(this, ContentMenus);

        return _possibleConstructorReturn(this, (ContentMenus.__proto__ || Object.getPrototypeOf(ContentMenus)).apply(this, arguments));
    }

    _createClass(ContentMenus, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                menus = _props.menus,
                onClickAddTocart = _props.onClickAddTocart;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                menus.map(function (menu, i) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ContentItem__["a" /* default */], { key: 'menu ' + i, onClickAddTocart: onClickAddTocart, item: menu, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    });
                })
            );
        }
    }]);

    return ContentMenus;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ContentMenus);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
var _jsxFileName = '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/components/Header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var styles = { display: 'inline-block', paddingRight: 20 };

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.headerAction = function (headerValue) {
            switch (headerValue) {
                case 'menus':
                    return {
                        type: 'MENUS_CLICK',
                        contentDisplay: headerValue };
                case 'cart':
                    return {
                        type: 'CART_CLICK',
                        contentDisplay: headerValue };
            }
        }, _this.headerClick = function (headerValue) {
            return function () {
                _this.props.dispatch(_this.headerAction(headerValue));
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { style: styles, onClick: this.headerClick('menus'), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            }
                        },
                        'menus'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { style: styles, onClick: this.headerClick('cart'), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            }
                        },
                        'cart'
                    )
                )
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
    return {
        content: state.content };
})(Header));

/***/ }),

/***/ "./components/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CategoriesList__ = __webpack_require__("./components/CategoriesList.js");
var _jsxFileName = '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/components/Sidebar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Sidebar = function (_Component) {
    _inherits(Sidebar, _Component);

    function Sidebar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Sidebar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            categories: Array()
        }, _this.categoryClick = function (categoryId) {
            return function () {
                _this.props.dispatch({
                    type: 'CATEGORY_CLICK',
                    categoryId: categoryId
                });
                _this.props.dispatch({
                    type: 'CART_CLICK',
                    contentDisplay: 'menus' });
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Sidebar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch('http://localhost:3001/categories').then(function (resp) {
                return resp.json();
            }).then(function (data) {
                _this2.setState({ categories: data });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CategoriesList__["a" /* default */], { categoryClick: this.categoryClick, categories: this.state.categories, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            });
        }
    }]);

    return Sidebar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
    return {
        category: state.category,
        content: state.content };
})(Sidebar));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_App__ = __webpack_require__("./components/App.js");
var _jsxFileName = '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/pages/index.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







function categoryReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'CATEGORY_CLICK':
            return _extends({}, state, {
                id: action.categoryId });
        default:
            return state;
    }
}

function contentReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { contentDisplay: 'menus' };
    var action = arguments[1];

    switch (action.type) {
        case 'MENUS_CLICK':
            return _extends({}, state, {
                contentDisplay: action.contentDisplay });
        case 'CART_CLICK':
            return _extends({}, state, {
                contentDisplay: action.contentDisplay });
        default:
            return state;
    }
}

function cartReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { items: Array() };
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_MENU':
            var currItems = state.items;

            var checkItem = currItems.findIndex(function (item) {
                return item.id == action.menuItem.id;
            });

            if (checkItem === -1) {
                var itemToAdd = _extends({}, action.menuItem, {
                    qty: 1
                });
                currItems.push(itemToAdd);

                console.log(currItems);

                return _extends({}, state, { items: currItems });
            } else {
                var newItems = currItems.map(function (item) {
                    if (item.id === action.menuItem.id) {
                        return _extends({}, item, { qty: item.qty + 1 });
                    }
                    return item;
                });

                console.log(newItems);
                return _extends({}, state, { items: newItems });
            }

        case 'DECREASE_MENU':
            var currDecreaseitems = state.items;
            var decreaseItems = currDecreaseitems.map(function (item) {
                if (item.id === action.menuId) {
                    return _extends({}, item, { qty: item.qty - 1 });
                }
                return item;
            });
            var newDecreaseItems = decreaseItems.filter(function (item) {
                return item.qty > 0;
            });

            return _extends({}, state, { items: newDecreaseItems });
        default:
            return state;
    }
}

var indexReducer = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
    content: contentReducer,
    category: categoryReducer,
    cart: cartReducer
});

var store = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(indexReducer);

/* harmony default export */ __webpack_exports__["default"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
        { store: store, __source: {
                fileName: _jsxFileName,
                lineNumber: 86
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_App__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 87
            }
        })
    );
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map