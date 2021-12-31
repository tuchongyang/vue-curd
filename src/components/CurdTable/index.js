'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');

var affix = require('./src/index.js');

const CurdTable = withInstall.withInstall(affix["default"]);


exports.CurdTable = CurdTable;
exports["default"] = CurdTable;
