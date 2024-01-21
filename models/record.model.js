export class Record {

  constructor(name, age, type, color, disease){
    this.id = this.getId();
    this.name = name;
    this.age = age;
    this.type = type;
    this.color = color;
    this.disease = disease;
  }

  getId(){
    return new Date().getTime();
  }

}