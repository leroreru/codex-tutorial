class dataCustomer{
     constructor(public firstName:string ,public lastName:string , protected alamat:string, private phoneNumber:string) {
        
     }

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
        private jmlBarang:number){
        super(firstName,lastName,alamat,phoneNumber)
    }
    
    setjmlBrang(jmlbr:number){
        this.jmlBarang=jmlbr
    }

    
    getDataCustomer(): string {
        return super.getDataCustomer()+ 
        `
        Barang yang dibeli  : ${this.barang}
        Berjumlah           : ${this.jmlBarang}`
    }
}

const customerData = new customer('John','Doe','Jln Jalan','092131231','Sepatu',2)
// customerData.firstName='Dany'
// customerData.setPhoneNumner('08123111')
// customerData.barang='Tas'
// customerData.setAlamat('Jl Haji Doni')
// customerData.setjmlBrang(10)
console.log(customerData.getDataCustomer())



