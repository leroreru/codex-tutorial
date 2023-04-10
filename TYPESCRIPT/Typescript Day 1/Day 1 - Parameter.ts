/* PARAMETER */
//optional parameter hanya bisa di typescript
//diawali dengan "?"


/* ----------OPTIONAL PARAMETER-------- */
/*
function multiply( a?:number , b?:number , c?:number):number{
    // function multiply( a?:number , b?:number , c?:number):number // >> optional parameter harus paling akhir
    if (typeof c !== 'undefined' && typeof b !== 'undefined' && typeof a !== 'undefined'){
        return a* b*c;
    }
    return 0
}
console.log(multiply())
*/

/*
function multiply( a:number , b:number , c?:number):number{

        if (isNaN(c) ){  // tidak bisa pakai isNaN karena type number hanya bisa number atau undifined
        return a* b
    }
    return a * b * c
}
*/


/* ---------DEFAULT PARAMETER-------- */
/*
function applyDiscountType ( price = 0,discount =0.05){
    return price * (1-discount);
}

console.log(applyDiscountType(100,0.25))
console.log(applyDiscountType(100,undefined))//95
*/


/* ---------REST PARAMETER----------- */

/*
function getTotal(a:number,b:number, ...number:number[]): number{
    let total = 0;
    number.forEach((num)=> total += num);
    return total+a+b
}

console.log(getTotal(4,3,1,2,3,4,5,6))

*/
