class PersonInherit{
    constructor(private firstName: string , private lastName: string) {
        
    }

getFullName():string{
    return `${this.firstName} ${this.lastName}`
}
describe(): string {
    return `This is ${this.firstName} ${this.lastName}`
}

}

class Employee extends PersonInherit{
    constructor(
        firstName:string,
        lastName: string,
        private jobTitle: string){
            super(firstName,lastName)
        }

        getFullNameEmployee():string{ // karna getFullName ke protected harus membuat get baru
            return super.getFullName() //super untuk memanggil property 
        }

        describe(): string {
            return super.describe()+ ` I'm a ${this.jobTitle}`
        }
    
}

let employee = new Employee('John','Doe','Web Developer')
console.log(employee.describe())
console.log(employee.getFullNameEmployee())