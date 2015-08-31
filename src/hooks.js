module.exports = Person;

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function(){
    return this.name;
};

Person.prototype.getAge = function(){
    return this.age;
};