import { Circle } from "./Circle";
import { Square } from "./Square";

var objCircle = new Circle(10, "Circle");
console.log(objCircle.name + " Area :" + objCircle.area());
var objSquare = new Square(10,10, "Square");
console.log(objSquare.name + " Area :" + objSquare.area());