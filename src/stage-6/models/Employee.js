export default class Employee {
  // constructor
  constructor(id, name, phone, title){
    this.name = name;
    this.id = id;
    this.title = title;
    this.phone = phone;
  }
  // updateName
  updateName(name){
    this.name = name;
  }
  // updatePhone
  updatePhone(phone){
    this.phone = phone;
  }
  // updateTitle
  updateTitle(title){
    this.title = title;
  }
}
