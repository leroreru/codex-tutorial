//sebuah type baru object 
//bisa untuk array

interface Person {
    firstName : string;
    lastName : string; 
}

//object
let nama:Person={
    firstName :'John',
    lastName :'Doe'
}

//array
let namaArray:Person[]=[{
    firstName :'John',
    lastName :'Doe'
}]


function getFullName(person:Person) {
    return`${person.firstName}${person.lastName}`
}

console.log(getFullName())

//==============================================================
//interface sebagai kumpulan method
//tidak bisa memberi acces modifier
/*
tanpa parameter
interface Mailable{
    send(email:string):boolean
    queue(email:string):boolean
}


class Mail implements Mailable{
    send(email: string): boolean {
        console.log(`Send email to ${email}`)
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}`)
        return true;
    }
}
*/

//==========================================================
/*
interface Mailable{
    send():any
    queue():any
}

class Mail implements Mailable{
    constructor(public email:string) {
        
    }
 
    send(): any {
        console.log(`Send email to ${this.email}`)
        return`email berhasil di kirim`
       
    }
    queue(): any {
        console.log(`Queue an email to ${this.email}`)
    
    }
}

let mail = new Mail('dany@gmail.com')
console.log(mail.send())
console.log(mail.queue())


//solusi untuk menambah interface
interface FutureMailble extends Mailable{
    later(email:string,after:number):boolean
}

//menggunakan extends mail agar bisa menurunkan isi dari class mail
class MailFuture extends Mail implements FutureMailble{
    later(email:string,after:number):boolean{
        console.log(`Send email to ${email} in ${after}ms.`)
        return true
    }
}

*/

// =============================================================================
//extend interface
/*
interface A{
    a():void
}
interface B extends A{
    b():void
}
interface C{
    c():void
}
interface D extends B,C{ //interface D memiliki semua method a,b dan c
    d():void
}
*/