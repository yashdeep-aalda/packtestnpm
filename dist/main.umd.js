(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.main = {}));
})(this, (function (exports) { 'use strict';

    console.log('Hello, world!');
    console.log('Yashdeep Raj...!');
    var trySome = function trySome() {
      console.log('Try Some Hello, world!');
      console.log('Try Some Yashdeep Raj...!');
    };

    exports.trySome = trySome;

}));
