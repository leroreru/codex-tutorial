{
interface vehicle {
    noPolice: string;
    vehicleType: string;
    year : number;
    price : number;
    tax : number;
    seat: number;
    transactionDate: string;
    total: number;
}

interface Insuv {
    rent : number;
    driver : number;
}
interface Intaxi {
    order : number;
    orderPerKM : number;
}
interface InprivateJet {
    rent : number;
    orderPerHours : number;
    driver:number;
}


let vehicle: vehicle[] = [{
    noPolice:'D 1001 UM',
    vehicleType:'SUV',
    year:2010,
    price:350_000_000,
    tax:3_500_000,
    seat:4,
    transactionDate: '10/01/2023',
    total : 650_000
},{
    noPolice:'D 1002 UM',
    vehicleType:'SUV',
    year:2010,
    price:350_000_000,
    tax:3_500_000,
    seat:4,
    transactionDate: '10/01/2023',
    total : 650_000
},{
    noPolice:'D 1003 UM',
    vehicleType:'SUV',
    year:2015,
    price:350_000_000,
    tax:3_500_000,
    seat:5,
    transactionDate: '12/01/2023',
    total : 650_000
},{
    noPolice:'D 1004 UM',
    vehicleType:'SUV',
    year:2015,
    price:350_000_000,
    tax:3_500_000,
    seat:5,
    transactionDate: '13/01/2023',
    total : 650_000
},{
    noPolice:'D 11 UK',
    vehicleType:'TAXI',
    year:2002,
    price:175_000_000,
    tax:3_500_000,
    seat:4,
    transactionDate: '12/01/2023',
    total : 202_500
},{
    noPolice:'D 12 UK',
    vehicleType:'TAXI',
    year:2015,
    price:225_000_000,
    tax:2_250_000,
    seat:4,
    transactionDate: '13/01/2023',
    total : 337_500
},{
    noPolice:'D 13 UK',
    vehicleType:'TAXI',
    year:2020,
    price:275_000_000,
    tax:2_750_000,
    seat:4,
    transactionDate: '13/01/2023',
    total : 405_000
},{
    noPolice:'ID8089',
    vehicleType:'PrivateJet',
    year:2015,
    price:150_000_000_000,
    tax:1_500_000_000,
    seat:12,
    transactionDate: '23/12/2022',
    total : 50_000_000
},{
    noPolice:'ID8089',
    vehicleType:'PrivateJet',
    year:2018,
    price:175_000_000_000,
    tax:1_750_000_000,
    seat:15,
    transactionDate: '25/12/2022',
    total : 80_000_000
},]

let suvObj:Insuv[]=[{
    rent : 500_000,
    driver : 150_000

},
{
    rent : 500_000,
    driver : 150_000

},
{
    rent : 500_000,
    driver : 150_000

},
{
    rent : 500_000,
    driver : 150_000

},]

let taxiObj:Intaxi[]=[{
    order : 45,
    orderPerKM : 4_500

},{
    order : 75,
    orderPerKM : 4_500

},
{
    order : 90,
    orderPerKM : 4_500

}]

let privateJetObj:InprivateJet[]=[{
    rent : 35_000_000,
    orderPerHours : 25_000_000,
    driver : 15_000_000

},
{
    rent : 55_000_000,
    orderPerHours : 25_000_000,
    driver : 25_000_000

}]


interface mobil1 {
    GetTotalVehicle():any
    GetTotalIncomeVehicle():any
}

abstract class vehiclePurchase implements mobil1 {
    
    constructor(protected vehicle:vehicle[]) { 
     
    }

    abstract getCount():string

    numberFormat():string
    numberFormat(number:number):string
    numberFormat(number?:any):any{
        return(number)? new Intl.NumberFormat("id-ID",{ // function rupiah  berfungsi untuk memformat angka menjadi rupiah 
            style:"currency",
            currency:"IDR",
        minimumFractionDigits:0,
    currencyDisplay:'code'}).format(number).replace('IDR', ''): `Undifined`
    }
   

   GetTotalVehicle():string{
        return `Jumlah semua kerdaraan : ${this.vehicle.length}`
    }
   
    GetTotalIncomeVehicle():string{
        return `Total income semua kendaraan : ${this.numberFormat(this.vehicle.reduce((sum, current) => sum + current.total,0))}` 
    }

}

class suv extends vehiclePurchase {
    constructor(vehicle:vehicle[],protected suvObj:Insuv[]) {
        super(vehicle)
    }

    getCount():string{
        return `${this.vehicle.filter((vehicle)=>vehicle.vehicleType=='SUV').length}`
    }

    GetTotalVehicle():string{
        return `Jumlah kendaraan bertipe SUV : ${this.getCount()}`
    }
        
    GetTotalIncomeVehicle():string
    {
        return `Total Income SUV  : ${this.numberFormat(this.vehicle.filter((vehicle)=>vehicle.vehicleType=='SUV').reduce((sum, current) => sum + current.total,0))}`
    }

  

}
class taxi extends vehiclePurchase {
    constructor(vehicle:vehicle[],protected taxiObj:Intaxi[]) {
        super(vehicle)
    }

    getCount():string{
        return `${this.vehicle.filter((vehicle)=>vehicle.vehicleType=='TAXI').length}`
    }


    GetTotalVehicle():string{
        return `Jumlah kendaraan bertipe TAXI : ${this.getCount()}` 
    }


    GetTotalIncomeVehicle():string{
        return `Total Income TAXI : ${this.numberFormat(this.vehicle.filter((vehicle)=>vehicle.vehicleType=='TAXI').reduce((sum, current) => sum + current.total,0))}`
    }
}

class privateJet extends vehiclePurchase {
    constructor(vehicle:vehicle[],protected privateJetObj:InprivateJet[]) {
        super(vehicle)
    }

    getCount():string{
        return `${this.vehicle.filter((vehicle)=>vehicle.vehicleType=='PrivateJet').length}`
    }


    GetTotalVehicle():string{
        return `Jumlah kendaraan bertipe  PrivateJet : ${this.getCount()}` 
    }

    GetTotalIncomeVehicle():string{
        return `Total Income PrivateJet : ${this.numberFormat(this.vehicle.filter((vehicle)=>vehicle.vehicleType=='PrivateJet').reduce((sum, current) => sum + current.total,0))}`
    }
   
}

class hitungJumlah extends vehiclePurchase{
    constructor() {
        super(vehicle)
        
    }
     getCount():string{
        return `${super.GetTotalVehicle()}`
    }

    GetTotalIncomeVehicle(): string {
        return `${super.GetTotalIncomeVehicle()}`
    }
}

let suvObject = new suv(vehicle,suvObj)
let taxiObject = new taxi(vehicle,taxiObj)
let privateJetObject = new privateJet(vehicle,privateJetObj)
let totalKendaraan = new hitungJumlah()

console.log(suvObject.GetTotalVehicle())
console.log(suvObject.GetTotalIncomeVehicle())
console.log('-------------------------------------')
console.log(taxiObject.GetTotalVehicle())
console.log(taxiObject.GetTotalIncomeVehicle())
console.log('-------------------------------------')
console.log(privateJetObject.GetTotalVehicle())
console.log(privateJetObject.GetTotalIncomeVehicle())
console.log('-------------------------------------')
console.log(totalKendaraan.getCount())
console.log(totalKendaraan.GetTotalIncomeVehicle())
// console.log(suvObject.GetTotalVehicle())
// console.log(suvObject.GetTotalIncomeVehicle())







// console.log(mobil.GetTotalVehicle('SUV'))
// console.log(mobil.GetTotalIncomeVehicle('SUV'))
// console.log(mobil.GetTotalIncomeVehicle('TAXI'))
// console.log(mobil.GetTotalIncomeVehicle('PrivateJet'))
// console.log(mobil.GetTotalIncomeVehicle())





}