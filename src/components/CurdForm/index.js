'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');

var affix = require('./src/index.js');

const CurdForm = withInstall.withInstall(affix["default"]);


exports.CurdForm = CurdForm;
exports["default"] = CurdForm;
