var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mobile = /** @class */ (function () {
    function Mobile(mobileId, mobileName, mobileCost) {
        this.mobileId = mobileId;
        this.mobileName = mobileName;
        this.mobileCost = mobileCost;
    }
    Mobile.prototype.printMobilrDetails = function () {
        console.log("Mobile Id:" + this.mobileId + "\nMobile Name:" + this.mobileName + "\nMobile Id:" + this.mobileCost);
    };
    return Mobile;
}());
var BasicPhone = /** @class */ (function (_super) {
    __extends(BasicPhone, _super);
    function BasicPhone(mobileType, mobileId, mobileName, mobileCost) {
        var _this = _super.call(this, mobileId, mobileName, mobileCost) || this;
        _this.mobileType = mobileType;
        return _this;
    }
    return BasicPhone;
}(Mobile));
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone(mobileType, mobileId, mobileName, mobileCost) {
        var _this = _super.call(this, mobileId, mobileName, mobileCost) || this;
        _this.mobileType = mobileType;
        return _this;
    }
    return SmartPhone;
}(Mobile));
var bphone = new BasicPhone('Basic Phone', 100, 'Nokia', 1000);
bphone.printMobilrDetails();
console.log("--------------------------");
var sphone = new SmartPhone('Smart Phone', 101, 'Pixel', 30000);
sphone.printMobilrDetails();
