export default class Employee {
  // constructor
  constructor(id, name, phone, title) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title;
  }

  // updateName
  updateName(newName) {
    this.name = newName;
  }
  // updatePhone
  updatePhone(newPhone) {
    this.phone = newPhone;
  }
  // updateTitle
  updateTitle(newTitle) {
    this.title = newTitle;
  }
}
