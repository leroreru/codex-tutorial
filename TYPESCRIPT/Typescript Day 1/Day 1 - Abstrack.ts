abstract class TransportasiClassAbstract {
    constructor(private namaPemilik : string) {
        
    }

    abstract getHargaKendaraan(): number

    getNamaPemilik ():string{
        return `Nama pemilik kendaraan :${this.namaPemilik}`
    }

    getInfoPemilik(): string {
        return `Nama pemilik kendaraan :${this.namaPemilik}
                telah membayar seharga ${this.getHargaKendaraan()}`
    }
}
//karana abstra tidak bisa instace objek makanya harus diturunin ke class

class TransportasiClass extends TransportasiClassAbstract{
    constructor(namaPemilik:string,private nama:string,protected jlhRoda: number,
        public jenis: string,public warna : string,public merek: string,public harga:number) {
            super(namaPemilik)
    }

    getDiscount(): string;
    getDiscount(disc:number):string;
    getDiscount(disc?:any):any{
        return (disc)?`Dapat potongan harga sebesar : ${this.harga = this.harga * disc}` : `Discount=0,harga normal`
        
    }

    getStatement():string{
        return `Selamat Datang di toko kami`
    }
    getHargaKendaraan():number{
        return this.harga
    }
    setNamaKendaraan(nama : string){
        this.nama= nama
    }
    protected getInfoKendaraan():string{
        return `Nama Kendaraan : ${this.nama} dengan merek : ${this.merek}, Jumlah Roda : ${this.jlhRoda}`
    }

    getInfoDetailKendaraan():string{
        return `jenis Kendaraan : ${this.jenis},warna kendaraan : ${this.warna}`
    }
}

class Mobil extends TransportasiClass {
    constructor(namaPemilik:string, nama:string, jlhRoda: number,
         jenis: string, warna : string, merek: string, harga:number,public bahanBakar: string,public status:boolean) {
        super(namaPemilik,nama,jlhRoda,jenis,warna,merek,harga)
    }
    getJumlahRoda():number{
        return this.jlhRoda
    }
    setJumlahRoda(roda: number){
        this.jlhRoda=roda
    }

    getKendaraan():string{
        return `${super.getInfoKendaraan()}`
    }
    getBahanBakar(): string{
        return `Bahan Bakar yang digunakan ${this.bahanBakar}`
    }

    getInfo(): string {
        return `${this.getKendaraan()},${this.getBahanBakar()}`
    }

    getStatement(): string {
        return (this.status)?`Terimakasih sudah berbelanja di toko kami`: super.getStatement()
    }
}

let mobilObj = new Mobil('John','Bus',6,'Transportasi umum','Biru','Mercy',1_000_000_000,'solar',true)
mobilObj.warna='Putih';


(mobilObj.status)?console.log('\n'+mobilObj.getInfoPemilik()+
'\n',mobilObj.getInfo()+'\n',mobilObj.getDiscount(0.5)+'\n',mobilObj.getStatement()):console.log(mobilObj.getStatement())


