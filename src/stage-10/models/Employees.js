export default class Employee {
    constructor (id, name, phone, title){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.title = title;
    }
    //update name
    updateName(name){
        this.name = name;
    }
    //update phone
    updatePhone(phone){
        this.phone= phone;
    }
    //update title
    updateTitle(title){
        this.title = title;
    }
}