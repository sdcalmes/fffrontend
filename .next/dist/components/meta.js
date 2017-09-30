'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\sdcal\\Documents\\programming\\thefantasyfive\\fffrontend\\components\\meta.js';


_index2.default.onRouteChangeStart = function () {
    return _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
    return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
    return _nprogress2.default.done();
};

exports.default = function () {
    return _react2.default.createElement('div', {
        'data-jsx': 1644874231,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', 'data-jsx': 1644874231,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 1644874231,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: 1644874231,
        css: 'body{font-family:"Roboto";background:#333}*{margin:0;padding:0;box-sizing:border-box}a{text-decoration:none !important;color:blue;font-weight:bold}#nprogress{pointer-events:none}#nprogress .bar{background:#FFEB3B;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #ff9300,0 0 5px #ff9300;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG1ldGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYzJCLEFBR3NDLEFBS1osQUFNdUIsQUFNWixBQUlELEFBVUwsU0F6QkosS0EwQlEsS0F6QkksQUFlUCxDQUpuQixDQWpCb0IsV0FXTCxBQXFCRCxFQVZHLEdBckJqQixJQU1BLENBMEJnQixDQXJCSyxJQVdYLE1BQ0MsQ0FVSyxNQXJCaEIsQUFhSSxNQVM2QyxLQVRsQyxXQUNmLDRCQVNnQixZQUNnQyw2SUFDaEQiLCJmaWxlIjoiY29tcG9uZW50c1xcbWV0YS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zZGNhbC9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvdGhlZmFudGFzeWZpdmUvZmZmcm9udGVuZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4gTlByb2dyZXNzLnN0YXJ0KClcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI25wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI25wcm9ncmVzcyAuYmFyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkVCM0I7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDMxO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI25wcm9ncmVzcyAucGVnIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZjkzMDAsIDAgMCA1cHggI2ZmOTMwMDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEuMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbikiXX0= */\n/*@ sourceURL=components\\meta.js */'
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG1ldGEuanMiXSwibmFtZXMiOlsiSGVhZCIsIk5Qcm9ncmVzcyIsIlJvdXRlciIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLGdCQUFBLEFBQU8scUJBQXFCLFlBQUE7V0FBTSxvQkFBTixBQUFNLEFBQVU7QUFBNUM7QUFDQSxnQkFBQSxBQUFPLHdCQUF3QixZQUFBO1dBQU0sb0JBQU4sQUFBTSxBQUFVO0FBQS9DO0FBQ0EsZ0JBQUEsQUFBTyxxQkFBcUIsWUFBQTtXQUFNLG9CQUFOLEFBQU0sQUFBVTtBQUE1QyxBQUVBOztrQkFBZSxZQUFBOzJCQUNYLGNBQUE7b0JBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsK0NBQ1UsTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIsbURBQTlCOztzQkFBQTt3QkFESixBQUNJLEFBQ0E7QUFEQTtnREFDTSxTQUFOLEFBQWMscUJBQWQ7O3NCQUFBO3dCQUhSLEFBQ0ksQUFFSTtBQUFBOztpQkFIUjthQURXLEFBQ1g7QUFBQTtBQURKIiwiZmlsZSI6Im1ldGEuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvc2RjYWwvRG9jdW1lbnRzL3Byb2dyYW1taW5nL3RoZWZhbnRhc3lmaXZlL2ZmZnJvbnRlbmQifQ==