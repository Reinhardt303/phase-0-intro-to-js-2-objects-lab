// Write your solution in this file!
const employee = {
    name: "defaultName",
    streetAddress: "defaultAddy",
};

function updateEmployeeWithKeyAndValue(obj, key, value,) {
    return{
        ...obj,
        [key]: value,
    }
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee, defaultName, "updatedName"
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value,) {
    obj[key] = value; 

  return obj;
}

const destructedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
    employee, defaultName, "updatedName"
);

function deleteFromEmployeeByKey() {
    const removedKeyEmployee = {...employee}
    delete removedKeyEmployee.name
    return removedKeyEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee;
}

