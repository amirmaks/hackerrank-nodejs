'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
  _input = _input.split(new RegExp('[ \n]+'));
  main();
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " + this.lastName + ", " + this.firstName
      + "\nID: " + this.idNumber
    )
  }
}

class Student extends Person {
  /**
  *   Class Constructor
  *
  *   @param firstName - A string denoting the Person's first name.
  *   @param lastName - A string denoting the Person's last name.
  *   @param id - An integer denoting the Person's ID number.
  *   @param scores - An array of integers denoting the Person's test scores.
  **/
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }

  /**
  *   Method Name: calculate
  *   @return A character denoting the grade.
  **/
  calculate() {
    let s = this.scores.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);

    let a = s/this.scores.length;
    let l;

    if (a <= 100 && a >= 90) {
      l = 'O';
    } else if (a < 90 && a >= 80) {
      l = 'E';
    } else if (a < 80 && a >= 70) {
      l = 'A';
    } else if (a < 70 && a >= 55) {
      l = 'P';
    } else if (a < 55 && a >= 40) {
      l = 'D';
    } else {
      l = 'T';
    }

    return l;
  }
}

function main() {
  let firstName = read()
  let lastName = read()
  let id = +read()
  let numScores = +read()

  let testScores = new Array(numScores)

  for (var i = 0; i < numScores; i++) {
    testScores[i] = +read()
  }

  let s = new Student(firstName, lastName, id, testScores)
  s.printPerson()
  s.calculate()
  console.log('Grade: ' + s.calculate())
}
