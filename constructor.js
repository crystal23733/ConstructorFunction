class Person {
  constructor(){
    this._name = '';
    this._age = 0;
    this._job = '';
  }
  set name(value) {
    this._name = value;
  }
  get name(){
    return this._name;
  }
  set age(value) {
    this._age = value;
  }
  get age(){
    return this._age;
  }
  set job(value) {
    this._job = value;
  }
  get job(){
    return this._job;
  }
}

const person = new Person();
person.name = '유호영';
person.age = 28;
person.job = '학생';

console.log('Name', person.name);
console.log('Age', person.age);
console.log('Job', person.job);
