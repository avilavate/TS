"use strict";
exports.__esModule = true;
var Circle = (function () {
    function Circle(radius, name) {
        var _this = this;
        this.radius = radius;
        this.name = name;
        this.area = function () { return 2 * (22 / 7) * _this.radius; };
    }
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map