function Person(initialAge) {

  this.age = initialAge;

  if (this.age < 0) {
    console.log('Age is not valid, setting age to 0.');
    this.age = 0;
  }

  this.amIOld=function(){
    let l;
    if (this.age < 13) {
      l = 'You are young.';
    } else if (this.age >= 13 && this.age < 18) {
      l = 'You are a teenager.';
    } else {
      l = 'You are old.';
    }
    console.log(l);
  };

  this.yearPasses = function () {
    this.age++;
  };
}

  var age=-5;
  var p=new Person(age);
  p.amIOld();
  for(j=0;j<3;j++){
    p.yearPasses();

  }
  p.amIOld();
  console.log("");
