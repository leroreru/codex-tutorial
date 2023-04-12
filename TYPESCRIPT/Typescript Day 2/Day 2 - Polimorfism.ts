// overload : beda parameter isi ny sama 
/* CONTOH OVERLOAD
getDiscount(): string;
getDiscount(disc:number):string;
getDiscount(disc?:any):any{
    return (disc)?`Dapat potongan harga sebesar : ${this.harga = this.harga * disc}` : `Discount=0,harga normal`
}
*/



// override : parameter sama isi ny sama

/*//pada parent
getStatement():string{
    return `Selamat Datang di toko kami`
}

//pada child 
getStatement(): string {
    return (this.status)?`Terimakasih sudah berbelanja di toko kami`: super.getStatement()
}
}

override menulis ulang method dimana parameter ny tetap sama tapi isi ny berbeda 
*/