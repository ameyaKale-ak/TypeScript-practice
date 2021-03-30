class Mobile{
    mobileId:number;
    mobileName:string;
    mobileCost:number;

constructor(mobileId:number,mobileName:string,mobileCost:number){
    this.mobileId=mobileId;
    this.mobileName=mobileName;
    this.mobileCost=mobileCost;
}
printMobilrDetails(): void{
    console.log(`Mobile Id:${this.mobileId}
Mobile Name:${this.mobileName}
Mobile Id:${this.mobileCost}`)
 }
}

class BasicPhone extends Mobile{
    mobileType:string;
    constructor(mobileType:string,mobileId:number,mobileName:string,mobileCost:number){
        super(mobileId,mobileName,mobileCost);
        this.mobileType=mobileType;
    }
}

class SmartPhone extends Mobile{
    mobileType:string;
    constructor(mobileType:string,mobileId:number,mobileName:string,mobileCost:number){
        super(mobileId,mobileName,mobileCost);
        this.mobileType=mobileType;
    }
}

let bphone=new BasicPhone('Basic Phone',100,'Nokia',1000);
bphone.printMobilrDetails();
console.log(`--------------------------`);
let sphone=new SmartPhone('Smart Phone',101,'Pixel',30000);
sphone.printMobilrDetails();