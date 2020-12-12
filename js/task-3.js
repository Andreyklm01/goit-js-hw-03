// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает
// имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате"имя": "кол-во задач".

// алгоритм:
// функция вытягивает значения и ключи
// ищет самое большое число в значениях maxValue.
// находит индекс maxValue
// выводит ключ у которого есть значение maxValue.

const findBestEmployee = function (employees) {
  const bestEmployee = Object.keys(employees);
  const tasks = Object.values(employees);

  const maxValue = Math.max(...tasks);
  const indexMaxValue = tasks.indexOf(maxValue);

  return bestEmployee[indexMaxValue];
};

// способ 2
// const findBestEmployee = function (employees) {
//   let bestEmployee;
//   let maxTasks = 0;

//   for (const employee in employees) {
//     const tasks = employees[employee];
//     if (tasks > maxTasks) {
//       maxTasks = tasks;
//       bestEmployee = employee;
//     }
//   }
//   return bestEmployee;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
