export default class Employee {
  // constructor
  constructor(id, name, title, phone){
    this.id =id;
    this.name =name;
    this.title =title;
    this.phone = phone;

  }
  // updateName
  updatename(name){
    this.name=name;
  }
  // updatePhone
  updatephone(phone){
    this.phone=phone;
  }
  // updateTitle
  updatetitle(title){
    this.title =title;
  }
}
