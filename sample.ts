function MyFunc<I>(num: I): string[] {
    if (typeof (num) === "string") {
        return num.split('');
    }
    return null;
}

let f: <T>(x: T) => T;
f = x => x;
console.log(f<string>("Avil"));
console.log(MyFunc<string>("avil avate"));

type A = <T, U>(x: T, y: U) => [T, U];
type B = <S>(x: S, y: S) => [S, S];

function f1(a: A, b: B) {
    //a = b;  // Error
    b = a;  // Ok
}
//Week type detection:

interface Options {
    data?: string,
    timeout?: number,
    maxRetries?: number,
}
function sendMessage(options: Options) {
    console.log("..........." + options.data);
}
let opt = {
    name: "Avil",
    data: "some data"
};
sendMessage(opt);

class ABC {
    constructor(private Name: string) {

    }

    getName = () => {
        console.log(this.Name);
    }

    someException = () => {
        let input = " ....";
        try {
            JSON.parse(input);
        }
        catch {
            // ^ Notice that our `catch` clause doesn't declare a variable.
            console.log("Invalid JSON given: " + input)
        }
    }
    someEnum = () => {
        enum Colors {
            Red = "RED",
            Green = "GREEN",
            Blue = "BLUE",
        }

        console.log(Colors);
    }

    someGenerics = () => {
        function arrayMap<T, U>(f: (x: T) => U): (a: T[]) => U[] {
            return a => a.map(f);
        }
        arrayMap<number, number>((num: number) => num);
    }
}

let objABC = new ABC("Avil Avate");

objABC.getName();
objABC.someException();
objABC.someEnum();

//Generic Sample



class GenericClass<T>{
    private _Type: string;
    private PassedValue: T;
    constructor(private passedType: T) {
        if (typeof (this.passedType) === typeof ("abc")) this._Type = "string";
        if (typeof (this.passedType) === typeof (12)) this._Type = "number";
        if (typeof (this.passedType) === typeof ({})) this._Type = "Object";

        this.PassedValue = passedType;
    }
    getType = (): string => this._Type + " : " + this.PassedValue;
};

var objGeneric = new GenericClass<number>(657);
console.dir(objGeneric.getType());
let a:any =  {};
(function (a) {
    a.Name = "Avil";
    a.Address = "Bangalore";
}(a));

console.dir(a);