'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaults = require('./defaults.js');
var makeInstaller = require('./make-installer.js');

var index = require('./components/CurdTable/index.js');
var index$1 = require('./components/CurdForm/index.js');
var index$2 = require('./components/ConstantStatus/index.js');
var index$3 = require('./components/FormDialog/index.js');

const install = defaults["default"].install;

exports.CurdTable = index.CurdTable;
exports.CurdForm = index$1.CurdForm;
exports.ConstantStatus = index$2.ConstantStatus;
exports.FormDialog = index$3.FormDialog;
exports["default"] = defaults["default"];
exports.makeInstaller = makeInstaller.makeInstaller;
exports.install = install;
