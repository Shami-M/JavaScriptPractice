class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getPersonDetails(){
        return  `Name: ${this.name}, Age: ${this.age}`
    }
}
export default Person;