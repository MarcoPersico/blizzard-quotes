class Person {
  public name: string;

  public age: number;

  public id: number;

  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public getAge() {
    return this.age;
  }

  public setAge(value: number) {
    this.age = value;
  }
}

export default Person;
