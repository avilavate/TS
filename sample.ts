function MyFunc<I>(num: I): string[] {
    if (typeof (num) == "string") {
        return num.split('');
    }
    return null;
}

console.log(MyFunc<string>("avil avtae"));
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
            console.log("Invalid JSON given\n\n" + input)
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