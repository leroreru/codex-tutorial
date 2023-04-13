interface vehicle {
    noPolice: string;
    vehicleType: string;
    year : number;
    price : number;
    tax : number;
    seat: number;
   
}

interface income1 {
    transactionDate: string;
    rent? : number;
    orderPerHours? : number;
    driver? : number;
    order? : number;
    orderPerKM?: number;
    total: number;
}

let vehicle:vehicle[]= [{
    noPolice:'D 1001 UM',
    vehicleType:'SUV',
    year:2010,
    price:350_000_000,
    tax:3_500_000,
    seat:4,
},{
    noPolice:'D 1002 UM',
    vehicleType:'SUV',
    year:2010,
    price:350_000_000,
    tax:3_500_000,
    seat:4,
},{
    noPolice:'D 1003 UM',
    vehicleType:'SUV',
    year:2015,
    price:350_000_000,
    tax:3_500_000,
    seat:5,
   
},{
    noPolice:'D 1004 UM',
    vehicleType:'SUV',
    year:2015,
    price:350_000_000,
    tax:3_500_000,
    seat:5,
    
},{
    noPolice:'D 11 UK',
    vehicleType:'TAXI',
    year:2002,
    price:175_000_000,
    tax:3_500_000,
    seat:4,
   
},{
    noPolice:'D 12 UK',
    vehicleType:'TAXI',
    year:2015,
    price:225_000_000,
    tax:2_250_000,
    seat:4,
   
},{
    noPolice:'D 13 UK',
    vehicleType:'TAXI',
    year:2020,
    price:275_000_000,
    tax:2_750_000,
    seat:4,
   
},{
    noPolice:'ID8089',
    vehicleType:'PrivateJet',
    year:2015,
    price:150_000_000_000,
    tax:1_500_000_000,
    seat:12,

},{
    noPolice:'ID8089',
    vehicleType:'PrivateJet',
    year:2018,
    price:175_000_000_000,
    tax:1_750_000_000,
    seat:15
},]

let income1:income1[]= [{
    transactionDate: '10/01/2023',
    rent: 500_000,
    driver: 150_000,
    total : 650_000
},{
    transactionDate: '10/01/2023',
    rent: 500_000,
    driver: 150_000,
    total : 650_000
},{
    transactionDate: '12/01/2023',
    rent: 500_000,
    driver: 150_000,
    total : 650_000
},{
    transactionDate: '13/01/2023',
    rent: 500_000,
    driver: 150_000,
    total : 650_000
},{
    transactionDate: '12/01/2023',
    order: 45,
    orderPerKM: 4_500,
    total : 202_500
},{
    transactionDate: '13/01/2023',
    order: 75,
    orderPerKM: 4_500,
    total : 337_500
},{
    transactionDate: '13/01/2023',
    order: 90,
    orderPerKM: 4_500,
    total : 405_000
},{
    transactionDate: '23/12/2022',
    rent: 35_000_000,
    orderPerHours: 25_000_000 ,
    driver: 15_000_000,
    total : 50_000_000
},{
    transactionDate: '25/12/2022',
    rent: 55_000_000,
    orderPerHours: 25_000_000 ,
    driver: 25_000_000,
    total : 80_000_000
},]

interface mobil1 {
    GetTotalVehicle():any
}

abstract class mobilAbstract {
    constructor(protected vehicle:vehicle[]) {
        
    }
    abstract GetTotalVehicle(type?:string):any
}
class vehiclePurchase extends mobilAbstract implements mobil1 {
    
    constructor(vehicle:vehicle[]) { 
        super(vehicle) 
    }

    numberFormat():string
    numberFormat(number:number):string
    numberFormat(number?:any):any{
        return(number)? new Intl.NumberFormat("id-ID",{ // function rupiah  berfungsi untuk memformat angka menjadi rupiah 
            style:"currency",
            currency:"IDR",
        minimumFractionDigits:0,
    currencyDisplay:'code',}).format(number).replace('IDR', ''): `Undifined`
    }
   

    GetTotalVehicle():string
    GetTotalVehicle(type:string):string
    GetTotalVehicle(type?:any):any{
        return (type)? 
        `Jumlah kendaraan bertipe ${type} : ${this.vehicle.filter((vehicle)=>vehicle.vehicleType==type).length}` : 
        `Jumlah semua kerdaraan : ${this.vehicle.length}`
    }
}

interface incomeIn extends mobil1 {
    GetTotalIncomeVehicle():any
}


class income extends vehiclePurchase implements incomeIn{
    constructor(vehicle:vehicle[],protected income1:income1[]) {
        super(vehicle)
    }
    GetTotalIncomeVehicle():string
    GetTotalIncomeVehicle(type:string):string
    GetTotalIncomeVehicle(type?:any):any{
        let array3 = this.vehicle.map((obj, index) => Object.assign({}, obj, this.income1[index])); //merge array vehicle dan arrray income1 berdasarkan index
        
        return (type)? 
        `Total Income dari mobil ${type} : ${this.numberFormat(array3.filter((array3)=>array3.vehicleType==type).reduce((sum, current) => sum + current.total,0))}` : 
        `Total Income keseluruhan : ${this.numberFormat(array3.reduce((sum, current) => sum + current.total,0))}`

    }
}

let mobil = new income(vehicle,income1)

console.log(mobil.GetTotalVehicle())
console.log(mobil.GetTotalVehicle('SUV'))
console.log(mobil.GetTotalIncomeVehicle('SUV'))
console.log(mobil.GetTotalIncomeVehicle('TAXI'))
console.log(mobil.GetTotalIncomeVehicle('PrivateJet'))
console.log(mobil.GetTotalIncomeVehicle())


