function applyBonus(employees, bonus) {
    return new Promise((resolve, reject) => {
      if (typeof bonus !== 'number') {
        reject(new Error('Invalid bonus'));
        return;
      }
      
      let invalidFormat = false;
      employees.forEach(employee => {
        if (!employee.hasOwnProperty('name') || typeof employee.name !== 'string' ||
            !employee.hasOwnProperty('salary') || typeof employee.salary !== 'number') {
          invalidFormat = true;
        }
      });
      
      if (invalidFormat) {
        reject(new Error('Invalid array format'));
        return;
      }
      
      let maxSalary = 0;
      employees.forEach(employee => {
        if (employee.salary > maxSalary) {
          maxSalary = employee.salary;
        }
      });
      
      if (bonus < maxSalary * 0.1) {
        reject('Bonus too small');
        return;
      }
      
      let newSalaries = employees.map(employee => {
        return {
          name: employee.name,
          salary: employee.salary + employee.salary * (bonus / 100)
        };
      });
      
      resolve(newSalaries);
    });
  }
  
  

let app = {
    applyBonus: applyBonus,
}

module.exports = app;