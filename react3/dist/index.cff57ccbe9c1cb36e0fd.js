webpackJsonp([1],{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _SearchBar = __webpack_require__(185);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _ProductTable = __webpack_require__(186);

var _ProductTable2 = _interopRequireDefault(_ProductTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            filterText: '',
            inStockOnly: false
        };
        _this.handleFilterTextInput = _this.handleFilterTextInput.bind(_this);
        _this.handleStockInput = _this.handleStockInput.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'handleFilterTextInput',
        value: function handleFilterTextInput(filterText) {
            this.setState({
                filterText: filterText
            });
        }
    }, {
        key: 'handleStockInput',
        value: function handleStockInput(inStockOnly) {
            this.setState({
                inStockOnly: inStockOnly
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_SearchBar2.default, {
                    filterText: this.state.filterText,
                    inStockOnly: this.state.inStockOnly,
                    onFilterTextInput: this.handleFilterTextInput,
                    onInStockInput: this.handleStockInput
                }),
                _react2.default.createElement(_ProductTable2.default, {
                    products: this.props.products,
                    filterText: this.state.filterText,
                    inStockOnly: this.state.inStockOnly
                })
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.handleFilterTextChange = _this.handleFilterTextChange.bind(_this);
        _this.handleStockInputChange = _this.handleStockInputChange.bind(_this);
        return _this;
    }

    _createClass(SearchBar, [{
        key: "handleFilterTextChange",
        value: function handleFilterTextChange(e) {
            this.props.onFilterTextInput(e.target.value);
        }
    }, {
        key: "handleStockInputChange",
        value: function handleStockInputChange(e) {
            this.props.onInStockInput(e.target.checked);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "form",
                null,
                _react2.default.createElement("input", {
                    type: "text",
                    placeholder: "Search...",
                    value: this.props.filterText,
                    onChange: this.handleFilterTextChange
                }),
                _react2.default.createElement(
                    "label",
                    null,
                    _react2.default.createElement("input", {
                        type: "checkbox",
                        checked: this.props.inStockOnly,
                        onChange: this.handleStockInputChange
                    }),
                    _react2.default.createElement(
                        "span",
                        null,
                        "hidden stock item"
                    )
                )
            );
        }
    }]);

    return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _ProductCategoryRow = __webpack_require__(187);

var _ProductCategoryRow2 = _interopRequireDefault(_ProductCategoryRow);

var _ProductRow = __webpack_require__(188);

var _ProductRow2 = _interopRequireDefault(_ProductRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductTable = function (_React$Component) {
    _inherits(ProductTable, _React$Component);

    function ProductTable() {
        _classCallCheck(this, ProductTable);

        return _possibleConstructorReturn(this, (ProductTable.__proto__ || Object.getPrototypeOf(ProductTable)).apply(this, arguments));
    }

    _createClass(ProductTable, [{
        key: 'render',
        value: function render() {
            var rows = [];
            var lastCategory = null;
            var _this = this;
            this.props.products.forEach(function (product, index) {
                var indexOf = _this.props.filterText;
                if (product.name.indexOf(indexOf) < 0) {
                    return;
                }
                if (_this.props.inStockOnly && !product.stocked) {
                    return;
                }
                if (product.category !== lastCategory) {
                    rows.push(_react2.default.createElement(_ProductCategoryRow2.default, { category: product.category, key: product.category }));
                }
                rows.push(_react2.default.createElement(_ProductRow2.default, { product: product, key: product.name }));
                lastCategory = product.category;
            });
            return _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            null,
                            'Name'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Price'
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    rows
                )
            );
        }
    }]);

    return ProductTable;
}(_react2.default.Component);

exports.default = ProductTable;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductCategoryRow = function (_React$Component) {
    _inherits(ProductCategoryRow, _React$Component);

    function ProductCategoryRow() {
        _classCallCheck(this, ProductCategoryRow);

        return _possibleConstructorReturn(this, (ProductCategoryRow.__proto__ || Object.getPrototypeOf(ProductCategoryRow)).apply(this, arguments));
    }

    _createClass(ProductCategoryRow, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    { colSpan: "2" },
                    this.props.category
                )
            );
        }
    }]);

    return ProductCategoryRow;
}(_react2.default.Component);

exports.default = ProductCategoryRow;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductRow = function (_React$Component) {
    _inherits(ProductRow, _React$Component);

    function ProductRow() {
        _classCallCheck(this, ProductRow);

        return _possibleConstructorReturn(this, (ProductRow.__proto__ || Object.getPrototypeOf(ProductRow)).apply(this, arguments));
    }

    _createClass(ProductRow, [{
        key: 'render',
        value: function render() {
            var Name = this.props.product.stocked ? this.props.product.name : _react2.default.createElement(
                'span',
                { style: { border: '1px solid red', color: 'red' } },
                this.props.product.name
            );
            return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    Name
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    this.props.product.price
                )
            );
        }
    }]);

    return ProductRow;
}(_react2.default.Component);

exports.default = ProductRow;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(57);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(184);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRODUCTS = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' }, { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' }, { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];

var root = document.getElementById('product');
_reactDom2.default.render(_react2.default.createElement(_App2.default, { products: PRODUCTS }), root);

/***/ })

},[83]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdDMvY29tcG9uZW50L0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdDMvY29tcG9uZW50L1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdDMvY29tcG9uZW50L1Byb2R1Y3RUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdDMvY29tcG9uZW50L1Byb2R1Y3RDYXRlZ29yeVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdDMvY29tcG9uZW50L1Byb2R1Y3RSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJmaWx0ZXJUZXh0IiwiaW5TdG9ja09ubHkiLCJoYW5kbGVGaWx0ZXJUZXh0SW5wdXQiLCJiaW5kIiwiaGFuZGxlU3RvY2tJbnB1dCIsInNldFN0YXRlIiwicHJvZHVjdHMiLCJDb21wb25lbnQiLCJTZWFyY2hCYXIiLCJoYW5kbGVGaWx0ZXJUZXh0Q2hhbmdlIiwiaGFuZGxlU3RvY2tJbnB1dENoYW5nZSIsImUiLCJvbkZpbHRlclRleHRJbnB1dCIsInRhcmdldCIsInZhbHVlIiwib25JblN0b2NrSW5wdXQiLCJjaGVja2VkIiwiUHJvZHVjdFRhYmxlIiwicm93cyIsImxhc3RDYXRlZ29yeSIsIl90aGlzIiwiZm9yRWFjaCIsInByb2R1Y3QiLCJpbmRleCIsImluZGV4T2YiLCJuYW1lIiwic3RvY2tlZCIsImNhdGVnb3J5IiwicHVzaCIsIlByb2R1Y3RDYXRlZ29yeVJvdyIsIlByb2R1Y3RSb3ciLCJOYW1lIiwiYm9yZGVyIiwiY29sb3IiLCJwcmljZSIsIlBST0RVQ1RTIiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7OztBQUNqQixpQkFBWUMsS0FBWixFQUFrQjtBQUFBOztB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S2pDLEtBQUwsQ0FBV3dCLE9BQVgsQ0FBbUJZO0FBQXhCO0FBRkosYUFESjtBQU1IOzs7O0VBVG1DLGdCQUFNM0IsUzs7a0JBQXpCdUIsVTs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlLLFdBQVcsQ0FDWCxFQUFDUixVQUFVLGdCQUFYLEVBQTZCTyxPQUFPLFFBQXBDLEVBQThDUixTQUFTLElBQXZELEVBQTZERCxNQUFNLFVBQW5FLEVBRFcsRUFFWCxFQUFDRSxVQUFVLGdCQUFYLEVBQTZCTyxPQUFPLE9BQXBDLEVBQTZDUixTQUFTLElBQXRELEVBQTRERCxNQUFNLFVBQWxFLEVBRlcsRUFHWCxFQUFDRSxVQUFVLGdCQUFYLEVBQTZCTyxPQUFPLFFBQXBDLEVBQThDUixTQUFTLEtBQXZELEVBQThERCxNQUFNLFlBQXBFLEVBSFcsRUFJWCxFQUFDRSxVQUFVLGFBQVgsRUFBMEJPLE9BQU8sUUFBakMsRUFBMkNSLFNBQVMsSUFBcEQsRUFBMERELE1BQU0sWUFBaEUsRUFKVyxFQUtYLEVBQUNFLFVBQVUsYUFBWCxFQUEwQk8sT0FBTyxTQUFqQyxFQUE0Q1IsU0FBUyxLQUFyRCxFQUE0REQsTUFBTSxVQUFsRSxFQUxXLEVBTVgsRUFBQ0UsVUFBVSxhQUFYLEVBQTBCTyxPQUFPLFNBQWpDLEVBQTRDUixTQUFTLElBQXJELEVBQTJERCxNQUFNLFNBQWpFLEVBTlcsQ0FBZjs7QUFTQSxJQUFNVyxPQUFPQyxTQUFTQyxjQUFULENBQXdCLFNBQXhCLENBQWI7QUFDQSxtQkFBU0MsTUFBVCxDQUNJLCtDQUFLLFVBQVVKLFFBQWYsR0FESixFQUVJQyxJQUZKLEUiLCJmaWxlIjoiaW5kZXguY2ZmNTdjY2JlOWMxY2IzNmUwZmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL1NlYXJjaEJhci5qcyc7XG5pbXBvcnQgUHJvZHVjdFRhYmxlIGZyb20gJy4vUHJvZHVjdFRhYmxlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZmlsdGVyVGV4dDonJyxcbiAgICAgICAgICAgIGluU3RvY2tPbmx5OmZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyVGV4dElucHV0ID0gdGhpcy5oYW5kbGVGaWx0ZXJUZXh0SW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdG9ja0lucHV0ID0gdGhpcy5oYW5kbGVTdG9ja0lucHV0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRmlsdGVyVGV4dElucHV0KGZpbHRlclRleHQpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlclRleHQ6ZmlsdGVyVGV4dFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdG9ja0lucHV0KGluU3RvY2tPbmx5KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpblN0b2NrT25seTppblN0b2NrT25seVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJUZXh0PXt0aGlzLnN0YXRlLmZpbHRlclRleHR9XG4gICAgICAgICAgICAgICAgICAgIGluU3RvY2tPbmx5PXt0aGlzLnN0YXRlLmluU3RvY2tPbmx5fVxuICAgICAgICAgICAgICAgICAgICBvbkZpbHRlclRleHRJbnB1dD17dGhpcy5oYW5kbGVGaWx0ZXJUZXh0SW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uSW5TdG9ja0lucHV0PXt0aGlzLmhhbmRsZVN0b2NrSW5wdXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdFRhYmxlXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXt0aGlzLnByb3BzLnByb2R1Y3RzfVxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJUZXh0PXt0aGlzLnN0YXRlLmZpbHRlclRleHR9XG4gICAgICAgICAgICAgICAgICAgIGluU3RvY2tPbmx5PXt0aGlzLnN0YXRlLmluU3RvY2tPbmx5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWFjdDMvY29tcG9uZW50L0FwcC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJUZXh0Q2hhbmdlID0gdGhpcy5oYW5kbGVGaWx0ZXJUZXh0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RvY2tJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlU3RvY2tJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZUZpbHRlclRleHRDaGFuZ2UoZSl7XG4gICAgICAgIHRoaXMucHJvcHMub25GaWx0ZXJUZXh0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGhhbmRsZVN0b2NrSW5wdXRDaGFuZ2UoZSl7XG4gICAgICAgIHRoaXMucHJvcHMub25JblN0b2NrSW5wdXQoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZpbHRlclRleHR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbHRlclRleHRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuaW5TdG9ja09ubHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdG9ja0lucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5oaWRkZW4gc3RvY2sgaXRlbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlYWN0My9jb21wb25lbnQvU2VhcmNoQmFyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9kdWN0Q2F0ZWdvcnlSb3cgZnJvbSAnLi9Qcm9kdWN0Q2F0ZWdvcnlSb3cuanMnO1xuaW1wb3J0IFByb2R1Y3RSb3cgZnJvbSAnLi9Qcm9kdWN0Um93LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICBsZXQgbGFzdENhdGVnb3J5ID0gbnVsbDtcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3QsaW5kZXgpe1xuICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBfdGhpcy5wcm9wcy5maWx0ZXJUZXh0O1xuICAgICAgICAgICAgaWYocHJvZHVjdC5uYW1lLmluZGV4T2YoaW5kZXhPZik8MCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoX3RoaXMucHJvcHMuaW5TdG9ja09ubHkgJiYgIXByb2R1Y3Quc3RvY2tlZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJvZHVjdC5jYXRlZ29yeSAhPT0gbGFzdENhdGVnb3J5KXtcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2F0ZWdvcnlSb3cgY2F0ZWdvcnk9e3Byb2R1Y3QuY2F0ZWdvcnl9IGtleT17cHJvZHVjdC5jYXRlZ29yeX0vPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RSb3cgcHJvZHVjdD17cHJvZHVjdH0ga2V5PXtwcm9kdWN0Lm5hbWV9Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsYXN0Q2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3J5O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtyb3dzfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlYWN0My9jb21wb25lbnQvUHJvZHVjdFRhYmxlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdENhdGVnb3J5Um93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiPnt0aGlzLnByb3BzLmNhdGVnb3J5fTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlYWN0My9jb21wb25lbnQvUHJvZHVjdENhdGVnb3J5Um93LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IE5hbWUgPSB0aGlzLnByb3BzLnByb2R1Y3Quc3RvY2tlZCA/IHRoaXMucHJvcHMucHJvZHVjdC5uYW1lIDogPHNwYW4gc3R5bGU9e3tib3JkZXI6JzFweCBzb2xpZCByZWQnLGNvbG9yOidyZWQnfX0+e3RoaXMucHJvcHMucHJvZHVjdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD57TmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5wcm9kdWN0LnByaWNlfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlYWN0My9jb21wb25lbnQvUHJvZHVjdFJvdy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnQvQXBwLmpzJztcblxudmFyIFBST0RVQ1RTID0gW1xuICAgIHtjYXRlZ29yeTogJ1Nwb3J0aW5nIEdvb2RzJywgcHJpY2U6ICckNDkuOTknLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiAnRm9vdGJhbGwnfSxcbiAgICB7Y2F0ZWdvcnk6ICdTcG9ydGluZyBHb29kcycsIHByaWNlOiAnJDkuOTknLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiAnQmFzZWJhbGwnfSxcbiAgICB7Y2F0ZWdvcnk6ICdTcG9ydGluZyBHb29kcycsIHByaWNlOiAnJDI5Ljk5Jywgc3RvY2tlZDogZmFsc2UsIG5hbWU6ICdCYXNrZXRiYWxsJ30sXG4gICAge2NhdGVnb3J5OiAnRWxlY3Ryb25pY3MnLCBwcmljZTogJyQ5OS45OScsIHN0b2NrZWQ6IHRydWUsIG5hbWU6ICdpUG9kIFRvdWNoJ30sXG4gICAge2NhdGVnb3J5OiAnRWxlY3Ryb25pY3MnLCBwcmljZTogJyQzOTkuOTknLCBzdG9ja2VkOiBmYWxzZSwgbmFtZTogJ2lQaG9uZSA1J30sXG4gICAge2NhdGVnb3J5OiAnRWxlY3Ryb25pY3MnLCBwcmljZTogJyQxOTkuOTknLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiAnTmV4dXMgNyd9XG5dO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QnKTtcblJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwIHByb2R1Y3RzPXtQUk9EVUNUU30vPixcbiAgICByb290XG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlYWN0My9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=