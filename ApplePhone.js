var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MobilePhone = (function () {
    function MobilePhone() {
    }
    MobilePhone.prototype.makeCall = function () {
        return "Can make a call";
    };
    MobilePhone.prototype.sendSms = function () {
        return "Can send SMS";
    };
    return MobilePhone;
}());
var ApplePhone = (function (_super) {
    __extends(ApplePhone, _super);
    function ApplePhone() {
        _super.call(this);
    }
    ApplePhone.prototype.useSiri = function () {
        return "Can use Siri to control";
    };
    ApplePhone.prototype.showFunctions = function () {
        return _super.prototype.makeCall.call(this) + "; " + _super.prototype.sendSms.call(this) + "; " + this.useSiri();
    };
    return ApplePhone;
}(MobilePhone));
var applePhone = new ApplePhone();
console.log(applePhone.showFunctions());
//# sourceMappingURL=ApplePhone.js.map