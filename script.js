///function sleep(name){
//console.log(name + " sleeps for 8 hours")
//}
var animalPopulation = 0;
var all =[];
function run(){
    all[0] = new Tiger("tigger");
    all[1] = new Bear("pooh");
    all[2] = new Unicorn("Rarity");
    all[3] = new Giraffe("Gemma");
    all[4] = new Bee("Stinger");
    console.log(all);
    var Zoe = new Zookeeper("Zoebot");
    Zoe.feedAnimals(all, "meat");
    console.log(Animal.getPopulation());
}
///var favoriteFood = "bacon";

///function eat(name, food){
///console.log(name + " eats " + food);
//food == favoriteFood ? console.log("YUM!!!!! " + name + " wants more") : sleep(name);
//}
class Zookeeper{
    constructor(name){
        this.name = name;
    }
    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " animals of " + Animal.getPopulation() + " total animals");
        for(var i = 0; i < animals.length; i++){
            animals[i].eat(food);
        }
    }
}
class Animal{
    constructor(name, favoriteFood){
        this.favoriteFood = favoriteFood;
        this.moniker = name;
        animalPopulation++;
    }
    eat(food){
        console.log(this.moniker + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!!!! " + this.moniker + " wants more " + this.favoriteFood) : this.sleep();
    }
    static getPopulation() {
        return animalPopulation;
    }

}

class Tiger extends Animal{
    constructor(name){
        super(name, "meat");
    }
    sleep(){
        console.log(this.moniker + " sleeps for 8 hours");
    }
}

class Bear extends Animal{
    constructor(name){
        super(name, "fish");
    }
    sleep(){
        console.log(this.moniker + " hibernates for 4 months");
    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name, "marshmallows");
    }
    sleep(){
        console.log(this.moniker + " sleeps in a cloud");
    }
}
class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
    }
    sleep(){
        console.log(this.moniker + " sleeps");
    }
    eat(food){
        food == this.favoriteFood ? super.eat("leaves"): console.log("YUCK!!! " + this.moniker + " will not eat the " + food);

    }
}
class Bee extends Animal{
    constructor(name){
        super(name, "pollen");
    }
    sleep(){
        console.log(this.moniker + " never sleeps");
    }
    eat(food){
        food == this.favoriteFood ? super.eat("pollen"): console.log("YUCK!!! " + this.moniker + " will not eat the " + food);
    }
}