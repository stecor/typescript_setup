var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Basil = (function () {
    function Basil(name, StartColor) {
    }
    Basil.prototype.getColor = function () {
        console.log(this.color);
    };
    return Basil;
}());
var world = new Basil("World", "green");
var BasilGreen = (function (_super) {
    __extends(BasilGreen, _super);
    function BasilGreen(name, startColor) {
        var _this = _super.call(this, name, startColor) || this;
        _this.name = name;
        _this.color = startColor;
        return _this;
    }
    BasilGreen.prototype.setNewColor = function (newcolor) {
        this.color = newcolor;
        _super.prototype.getColor.call(this);
    };
    return BasilGreen;
}(Basil));
var basil3 = new BasilGreen("basil", "brite green");
basil3.getColor();
basil3.setNewColor("Red");
basil3.getColor();
