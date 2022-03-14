console.log("111")

const animals = {
    name:'Птица',
    age:5,
    hasFlay:true,
}

console.log(animals)

class Animals {
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.hasfly = options.hasfly;
    }
}

const any = new Animals(animals)

console.log(any)
