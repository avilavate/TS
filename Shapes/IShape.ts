export interface IShape{
    length?:number;
    width?:number;
    name:string;
    radius?:number;
    area():number;
    volume?:()=>number;
    id:number;
}

