/* Typescript adalah javascript yang diberikan typedata.
Karena javascript terlalu fleksibel */
// contoh deklarasi pada typescript
// let variableName: type;
// variableName= 'number' << sesuai type

// let variableName: type = value; 

// type inference = langsung asign nilai nya 
// type annotation = kasih dulu type data nya 

// membutuhkan {} diawal dan di akrhir  agar antar file tidak konflik

    /* ----STRING----- */
    /*
    let firstName : string = 'John';
    let title : string = 'Web Developer';
    console.log(firstName,title);

    let description = `This TypeScript string can 
    span multiple 
    lines
    `;

    console.log(description);

    let profile : string = `I'm ${firstName}.
    I'm a ${title}`;

    console.log(profile)
    */

    /* ----BOOLEAN---- */

    // let bool1 = true;
    // bool1=false;
    // let bools: boolean=true;
    // bools=(true);
    // assign 0 atau 1 dianggap number


    /* ------TUPLE------ */

    /*
    //jumlah element dalam tuple sudah fixed
    let color : [ number,number,number]=[255,0,0]
    console.log(color)

    let bgColor :[number,number,number,number?]
    bgColor = [0,255,255,0.5]
    bgColor = [0,255,255]
    console.log(bgColor)
    */


    /* --------UNION TYPE-------- */
    /*
    function add(a:number | string , b:number | string){ // variable a bisa di asign 2 type data string dan number 
        if (typeof a === 'number' && typeof b === 'number'){
            return a+b;
        }
        if (typeof a === 'string' && typeof b === 'string'){
            return a+b;
        }
    }
    */


    /* -------ALIAS TYPE------- */

    //untuk mempersingkat penggunaan type pada union type
    /*
    type alphanumeric = string | number ; 
    let input : alphanumeric;
    input =100; //valid
    input ='Hi' //valid
    */

    /* ANY TYPE */

    // lebih fleksibel
    // let result:any;
    // result = 90
    // result = 'test'
    // bisa semua jenis type data


    /* -------ENUM TYPE-------- */
    // type data yang sudah pasti
    /*
    enum Month{
        Jan=1, // beri nilai agar di follow up kebawah nya menjadi 2,3 dst
        Feb,
        Mar,
        Apr,
        May,
        Juni,
        Jul,
        Aug,
        Sep,
        Oct,
        Nov,
        Dec
    };
    console.log(Month.Feb)
    */

    /* ------OBJECT TYPE------- */

    // let employee :object ; // bisa seperti ini 
    // let employee :{}; // bisa juga kayak gini 
    /*
    let employee:{
    firstName : string;
    lastName? : string; // optional ( boleh kosong)
    age : number ;
    jobTitle?:string;
    } ={
    firstName : 'John',
    lastName : 'Doe',
    age : 25,
    jobTitle : 'Web Developer'
    }
    */


    /* ----ARRAY TYPE----- */
    // let arrayName : []=[] //jika dideklarasi tanpa type maka tidak bisa asign value arraynya
    //let arrayName : any[]=[] // solusi dari yang diatas

    //let arrayName=[] / tidak bias array kosong saat inisialisasi dianggap type never
    let arrayName :number[];



