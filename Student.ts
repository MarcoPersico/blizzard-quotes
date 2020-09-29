import Person from './Person';

class Student extends Person {
  public getPersonId() {
    return this.getId();
  }
}

export default Student;
