/*
 * Returns a data record for given empolyee ID
 */
const employee = function(id, callback) {
  switch (id) {
    case "Karel":
      callback({
        fullname: "Karel Zoha",
        age: 39,
        sex: "Male"
      });
      break;
    case "Peter":
      callback({
        fullname: "Peter Cipov",
        age: 30,
        sex: "Male"
      });
      break;
    case "Milan":
      callback({
        fullname: "Milan Boruvka",
        age: 40,
        sex: "Male"
      });
      break;
    case "Marketa":
      callback({
        fullname: "Marketa Dobra",
        age: 26,
        sex: "Female"
      });
      break;
    case "Lucie":
      callback({
        fullname: "Lucie Vesela",
        age: 23,
        sex: "Female"
      });
      break;
    default:
      callback(null, new Error("Unknown id: " + id));
      break;
  }
};

//////TODO:

/* 1) Call function for id 'Milan' and log result to console */

employee("Milan", console.log);

/* 2) Wrap employee function, create a new function that uses promise */

async function employeeP(id, callback) {
  return employee(id, callback);
}
/* 3) Use wrapped function employeeP and count an average age of males for a given list of employees ids */

const employeeIds = ["Karel", "Peter", "Milan", "Marketa", "Lucie"];

let employeesP = [];

function retrieveAge(data) {
  if (data.sex === "Male") {
    employeesP.push(data.age);
  }
}

employeeIds.forEach(id => {
  employeeP(id, retrieveAge);
});
//pre = previous, curr = current
const sum_age = employeesP.reduce((pre, curr) => pre + curr, 0);
const aver_age = sum_age / employeesP.length;
console.log(aver_age);
