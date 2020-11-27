"use strict";
exports.__esModule = true;
var arrayMap = require("../dist/test-array-map");
var res = arrayMap([2, 3], function (item) { return Math.pow(item, 2); });
console.log(res);
