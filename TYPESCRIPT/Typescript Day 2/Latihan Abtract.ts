abstract class dataCustomer{
    constructor(private firstName:string ,private lastName:string) {
       
    }

    abstract getHargaBarang(): number

    getFullName():string {
       return `${this.firstName} ${this.lastName}`
    }

    getInfoPemilik():string{
        return `Nama Customer           : ${this.getFullName()}
                Telah Membayar Seharga  : ${this.getHargaBarang()}`
    }

}

class DataBarang extends dataCustomer{
   constructor(
       firstName:string,
       lastName:string,
       public barang:string,
       public jmlBarang:number,
       public harga:number){
       super(firstName,lastName)
   }
   

   getStatement():string{
    return `Selamat Datang di toko kami`
}
   
   getHargaBarang(): number {
       return this.harga
   }

   getDataBarang(): string {
      return `Nama Barang : ${this.barang}
              Jumlah      : ${this.jmlBarang}
              `
   }
}

class customer extends DataBarang{
    constructor(firstName:string,
        lastName:string,
        barang:string,
        jmlBarang:number,
        harga:number,
        private phoneNumber:string,
        public status : boolean) {
        super(firstName,lastName,barang,jmlBarang,harga)
    }

    setPhoneNumber(ph:string){
        this.phoneNumber=ph
    }
    
    getPhoneNumber():string{
        return`Phone Number : ${this.phoneNumber}`
    }


    getStatement(): string {
        return (this.status)?`Terimakasih sudah berbelanja di toko kami`: super.getStatement()
    }

}

let custData = new customer ('John','Doe','Sepatu',2,100_000,'0219999',true)
custData.barang='Hoodie';

(custData.status)?console.log(custData.getInfoPemilik()+'\n',custData.getDataBarang()+custData.getPhoneNumber()):console.log(custData.getStatement())



// const customerData = new customer('John','Doe','Jln Jalan','092131231','Sepatu',2)
// // customerData.firstName='Dany'
// // customerData.setPhoneNumner('08123111')
// // customerData.barang='Tas'
// // customerData.setAlamat('Jl Haji Doni')
// // customerData.setjmlBrang(10)
// console.log(customerData.getDataCustomer())



