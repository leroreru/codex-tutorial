//hanya memberikan type data nya
let weight :number = 70
 let height : number = 1.72
 let bmi :number = weight /(height*height)

 let weightStatus;

 if(bmi < 18.8){
    weightStatus = 'Underweight';
 }else if (bmi >= 18.5 && bmi <= 24.9) {
    weightStatus = 'Healthly Weight'; 
 } else if (bmi >= 25 && bmi <= 29.9) {
    weightStatus = 'Over Weight'; 
 }else {
    weightStatus = 'Obesity';
 } 
 console.log(weightStatus);