import { IShape } from "./IShape";

export class Circle implements IShape {
    constructor(public radius: number, public name: string) { }
    area=()=>2*(22/7)* this.radius;
}