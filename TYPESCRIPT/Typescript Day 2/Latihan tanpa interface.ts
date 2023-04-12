abstract class dataCustomer{
    constructor(public firstName:string ,public lastName:string , protected alamat:string, private phoneNumber:string) {
       
    }
    
    abstract getHargaBarang(): number

    getFullName():string {
       return `${this.firstName} ${this.lastName}`
    }

    setPhoneNumner(ph:string){ //agar di update 
      this.phoneNumber=ph

    }

    setAlamat(al:string){ 
       this.alamat=al
   }

 
  protected getDataCustomer(): string {
       return `
       Name                : ${this.firstName} ${this.lastName}
       Phone Number        : ${this.phoneNumber}
       Alamat              : ${this.alamat}`
   }

}

class customer extends dataCustomer{
   constructor(
       firstName:string,
       lastName:string,
       alamat :string,
       phoneNumber:string,
       public barang:string,
       private jmlBarang:number,
       public harga:number){
       super(firstName,lastName,alamat,phoneNumber)
   }


getDiscount(): string;
getDiscount(disc:number):string;
getDiscount(disc?:any):any{
    let diskon = this.harga * disc
    let total = this.harga - diskon
return (disc)?`Dapat potongan harga sebesar  : ${diskon}\n Total yang harus dibayar      : ${total} `: `Discount=0,harga normal`
}


   setjmlBrang(jmlbr:number){
       this.jmlBarang=jmlbr
   }

   getHargaBarang(): number {
    return this.harga
}
   
   getDataCustomer(): string {
       return super.getDataCustomer()+ 
       `
       Barang yang dibeli  : ${this.barang}
       Berjumlah           : ${this.jmlBarang}
       Harga               : ${this.harga}
       `
   }
}

const customerData = new customer('John','Doe','Jln Jalan','092131231','Sepatu',2,100_000)
// customerData.firstName='Dany'
// customerData.setPhoneNumner('08123111')
// customerData.barang='Tas'
// customerData.setAlamat('Jl Haji Doni')
// customerData.setjmlBrang(10)
console.log(customerData.getDataCustomer()+'\n',customerData.getDiscount(0.3))



