import { IShape } from "./IShape";

export class Square implements IShape {
    constructor(public length: number, public width: number, public name: string) { }
    area = () => this.length * this.width;
}