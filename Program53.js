const student = {
  Name: "mayuri",
  phy: 45,
  bio: 87,
  Math: 95,
  chem: 70,
  getAvg(){
    let avg = (this.bio+this.Math+this.chem)/3;
    console.log(`${this.Name}'s average marks is = ${avg}`);
  }
}

student.getAvg();