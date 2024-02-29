(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vconsole"] = factory();
	else
		root["vconsole"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 762:
/***/ (function(__unused_webpack_module, exports) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.success = exports.error = exports.warn = exports.log = void 0;
// 定义一个空的 vconsoles 对象，用于存储 console 方法
var vconsoles = {};
// 创建函数 createVConsole，用于生成 console 方法
var createVConsole = function (consoleTypes) {
    consoleTypes.forEach(function (_a) {
        var name = _a.name, config = _a.config;
        vconsoles[name] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var currentDate = new Date();
            var currentTime = currentDate.toISOString().replace('T', ' ').slice(0, -5);
            console.log.apply(console, __spreadArray(["%c".concat(currentTime, "%c ").concat(args.shift(), " "), "background: ".concat(config.backgroundGradient, "; color: white; ").concat(config.messageStyle, "; padding: 0.3em; border-radius: 0.3em;"), // 渐变背景色
                "".concat(config.messageStyle, "color: ").concat(config.highlight, "; font-weight: bold; font-size: 1.2em;")], args // 其余参数保持不变
            , false));
        };
    });
};
// 定义 consoleTypes 数组，包含各种控制台方法的样式信息
var consoleTypes = [
    {
        name: 'log',
        config: {
            backgroundGradient: 'linear-gradient(to right, #3498DB, #2C3E50)', // 深蓝色
            messageStyle: 'padding: 1px;', // 调整文字样式
            highlight: '#3498DB' // 深蓝色
        }
    },
    {
        name: 'warn',
        config: {
            backgroundGradient: 'linear-gradient(to right, #F39C12, #D35400)', // 橙色渐变
            messageStyle: 'padding: 1px;', // 调整文字样式
            highlight: '#F39C12' // 橙色
        }
    },
    {
        name: 'error',
        config: {
            backgroundGradient: 'linear-gradient(to right, #E74C3C, #C0392B)', // 红色渐变
            messageStyle: 'padding: 1px;', // 调整文字样式
            highlight: '#E74C3C' // 红色
        }
    },
    {
        name: 'success',
        config: {
            backgroundGradient: 'linear-gradient(to right, #2ECC71, #27AE60)', // 绿色渐变
            messageStyle: 'padding: 1px;', // 调整文字样式
            highlight: '#2ECC71' // 绿色
        }
    }
];
// 调用 createVConsole 函数，根据 consoleTypes 生成对应的控制台方法
createVConsole(consoleTypes);
// 导出每个控制台方法
exports.log = vconsoles.log;
exports.warn = vconsoles.warn;
exports.error = vconsoles.error;
exports.success = vconsoles.success;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[762](0, __webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});