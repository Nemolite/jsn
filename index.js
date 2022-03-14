console.log("111")

const animals = {
    name:'Птица',
    age:5,
    hasfly:true,
}

console.log(animals)

class Animals {
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.hasfly = options.hasfly;
    }

    sound(){
        return "The sound"
    }
}

const any = new Animals(animals)

console.log(any)
console.log(any.name)
console.log(any.age)
console.log(any.hasfly)
console.log(any.sound())
