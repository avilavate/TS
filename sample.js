function MyFunc(num) {
    if (typeof (num) == "string") {
        return num.split('');
    }
    return null;
}
console.log(MyFunc("avil avtae"));
var ABC = (function () {
    function ABC(Name) {
        var _this = this;
        this.Name = Name;
        this.getName = function () {
            console.log(_this.Name);
        };
        this.someException = function () {
            var input = " ....";
            try {
                JSON.parse(input);
            }
            catch (_a) {
                console.log("Invalid JSON given\n\n" + input);
            }
        };
        this.someEnum = function () {
            var Colors;
            (function (Colors) {
                Colors["Red"] = "RED";
                Colors["Green"] = "GREEN";
                Colors["Blue"] = "BLUE";
            })(Colors || (Colors = {}));
            console.log(Colors);
        };
        this.someGenerics = function () {
            function arrayMap(f) {
                return function (a) { return a.map(f); };
            }
            arrayMap(function (num) { return num; });
        };
    }
    return ABC;
}());
var objABC = new ABC("Avil Avate");
objABC.getName();
objABC.someException();
objABC.someEnum();
//# sourceMappingURL=sample.js.map