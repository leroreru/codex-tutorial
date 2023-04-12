interface CustDocument{
    getDataCustomer():any
    getKodePosCustomer():any
}

abstract class dataCustomer implements CustDocument{
    constructor(public firstName:string, public lastName:string, protected alamat:string, private phoneNumber:string, private kodePos:number) {
    }


    setPhoneNumber(phoneNumber1:string){
        this.phoneNumber=phoneNumber1;
    }

    protected getFullName(): string{
        return `${this.firstName} ${this.lastName}`
    }

    getDataCustomer(): any{
        return `Nama: ${this.getFullName()}\nAlamat: ${this.alamat}\nPhone Number: ${this.phoneNumber}`
    }

    getKodePosCustomer(): any{
        return`Nama: ${this.getFullName()}\nAlamat: ${this.alamat}\nKode Pos: ${this.kodePos}`
    }
}

interface Documentation extends CustDocument{
    pengiriman():any
}

class pembelianCustomer extends dataCustomer implements Documentation {
    constructor(firstName:string, lastName:string, alamat:string, phoneNumber:string, kodePos:number, private barang:string, public jmlhBarang:number, private hargaBarang:number, public statusPengiriman:boolean) {
        super(firstName,lastName,alamat,phoneNumber,kodePos)
    }

    getDiscount():string;
    getDiscount(disc:number):string;
    getDiscount(disc?:any):any{
        let diskon = (this.hargaBarang*this.jmlhBarang) *disc
        let total = (this.hargaBarang*this.jmlhBarang) - diskon
        return (disc)?`Dapat potongan harga sebesar : ${diskon}\nTotal yang harus dibayar : ${total}`: `Total yang harus dibayar : ${this.hargaBarang*this.jmlhBarang}`
    }

    setAlamat(alamat1:string){
        this.alamat=alamat1;
    }
    getAlamat(): string{
        return this.alamat;
    }

    setBarang(barang1:string){
        this.barang=barang1;
    }

    getHargaBarang(): number {
        return this.hargaBarang
    }

    getDataCustomer(): any{
        // return super.getFullName()+` membeli ${this.barang} sebanyak ${this.jmlhBarang}\nHarga Barang: ${this.hargaBarang}\nTotal: ${this.jmlhBarang*this.hargaBarang}`
        return super.getDataCustomer()+`\nBarang: ${this.barang}\nJumlah: ${this.jmlhBarang}\nHarga Per Barang: ${this.hargaBarang}\n${this.getDiscount(0.2)}`
    }

    pengiriman(): any {
        return `Barang ${this.barang} sudah dikirim ke ${this.getAlamat()}`
    }
}
const pembeli = new pembelianCustomer('Fadil','Jaidi','Jakarta','0874398493',613822,'Mejikom',2,100_000, true);
// console.log(pembeli.pembelian()); //Fadil Jaidi membeli Sapu sebanyak 2
// console.log(pembeli.getDataCustomer());
(pembeli.statusPengiriman)?console.log(pembeli.getDataCustomer()+'\n'+pembeli.pengiriman()):
console.log('Pembelian atas nama '+pembeli.firstName+' belum dikirim');