//person object
//secara default tipe ny public
class PersonClass {
    //properti
    name: string =''
    age : number = 0
    static alamat: string='' // bisa lngsung diakses tanpa harus instasiasi
}

class Motor{
    make : string =''
    model : string = ''
    color : string =''
}

//create a new instance of each
//membuat objek baru
const person1 = new PersonClass()
person1.age
PersonClass.alamat// bisa lngsung diakses tanpa harus instasiasi jika static

/*
class Person {
    //tidak menggunakan costructor
    // ssn: string = '';
    // private firstName: string ='';
    // protected lastName: string ='';


    //menggunakan constructor
    ssn: string ;
    private firstName: string ;
    protected lastName: string ;


    constructor(ssn:string , firstName:string , lastName:string){ //tidak sama dengan properti class
        this.ssn=ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // setFirstName(sn:string){ //menggunakan set agar bisa mengakses si private (hanya class sendiri) 
    //     this.firstName=sn;
    // }

    // setLastName(ln:string){ //menggunakan set agar bisa mengakses si protected (turunan dan class sendiri)
    //     this.lastName=ln;
    // }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
//membuat objek tanpa constructor
// let personObj = new Person();

//menggunakan constructor
let personObj = new Person('171-28-0926','John','Doe');

// personObj.ssn = '171-28-0926'
// personObj.setFirstName('John')
// personObj.setLastName('Doe')
console.log(personObj.getFullName())
*/

/* Contoh ke 2 */
/*
class person {

    constructor(public ssn:string , public firstName:string , public lastName:string){ 
    
    }
}
*/


/* CONTOH ke 3 */
/*
class transportasi{

    constructor(public nama:string , public jlhRoda:number , public bahanBakar:string) {
        
    }

    getDataKendaraan():string{
        return `Nama Kendaraan: ${this.nama}, Jumlah Roda ${this.jlhRoda}, dengan bahan bakar ${this.bahanBakar}`
    }


getBBKendaraan():string{
    return `Bahan Bakar kendaraan: ${this.bahanBakar}`
}
}

const dtTrans = new transportasi('Toyota',4,'Bensin');

console.log(dtTrans.getDataKendaraan())
*/


/* CONTOH 4 dengan private */

class transportasi{

    constructor(protected nama:string , protected jlhRoda:number , protected bahanBakar:string) {
        
    }

    setName(nm:string){
        this.nama=nm
    }

    setJlhRoda(jr:string){
        this.nama=jr
    }

   getDataKendaraan():string{
        return `Nama Kendaraan: ${this.nama}, Jumlah Roda ${this.jlhRoda}, dengan bahan bakar ${this.bahanBakar}`
    }


    getBBKendaraan():string{
    return `Bahan Bakar kendaraan: ${this.bahanBakar}`
    }
    }

const dtTrans = new transportasi('Toyota',4,'Bensin');
dtTrans.setName('Kuda');

console.log(dtTrans.getDataKendaraan())


