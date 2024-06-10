// const createPerson = (callback) => {
//   let person = {};
//   callback(person, setName);
// }

// const setName = (person, callback) => {
//   person.name = '유호영';
//   callback(person, setAge);
// }

// const setAge = (person, callback) => {
//   person.age = 28;
//   callback(person, setJob);
// }

// const setJob = (person) => {
//   person.job = '학생';
//   console.log(person);
// }

// createPerson((person, callback) => callback(person, setName));

function a(){
  function b(){
    function c(){
      function d(){
        function e(){
          function f(){
            console.log(f);
          }
          f();
        }
        e();
      }
      d();
    }
    c();
  }
  b();
}
a();