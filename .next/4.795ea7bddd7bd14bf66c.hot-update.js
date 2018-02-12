webpackHotUpdate(4,{

/***/ "./components/ContentItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/components/ContentItem.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ContentItem = function (_Component) {
    _inherits(ContentItem, _Component);

    function ContentItem() {
        _classCallCheck(this, ContentItem);

        return _possibleConstructorReturn(this, (ContentItem.__proto__ || Object.getPrototypeOf(ContentItem)).apply(this, arguments));
    }

    _createClass(ContentItem, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { display: 'inline', padding: 20 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                this.props.item,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    'buy'
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return ContentItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = ContentItem;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(ContentItem, 'ContentItem', '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/components/ContentItem.js');
    reactHotLoader.register(_default, 'default', '/Users/sitthichaiw/Dev/github/nextjs-workshop-mk/components/ContentItem.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.795ea7bddd7bd14bf66c.hot-update.js.map