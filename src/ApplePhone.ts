class MobilePhone {
    constructor() {}
    
    makeCall() {
        return "Can make a call";
    }

    sendSms() {
        return "Can send SMS";
    }
}

class ApplePhone extends MobilePhone {
    constructor() {
        super();
    }

    useSiri() {
        return "Can use Siri to control"
    }

    showFunctions() {
        return super.makeCall() + "; " + super.sendSms() + "; " + this.useSiri();
    }
}

var applePhone = new ApplePhone();
console.log(applePhone.showFunctions());