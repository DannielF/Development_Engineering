// helpers
// list.length / 2 result is even or odd 
const isEven = (number) => (number % 2 == 0);

function calcAverageArithmetic(listA) {
  const sumList = listA.reduce(
    function (accumulatedValue = 0, newElement) {
      return accumulatedValue + newElement;
    }
  );

  const averageList = sumList / listA.length;

  return averageList
}


// extract only salaries from colombia array
const salariesCol = colombia.map(
  function (people) {
    return people.salary;
  }
);
// sort with function(compare)
const salariesColSort = salariesCol.sort((a, b) => a - b);

// calc median
function medianSalaries(listA) {
  const middle = parseInt(listA.length / 2);

  if (isEven(listA.length)) {
    // list odd
    const peopleMiddle1 = listA[middle - 1];
    const peopleMiddle2 = listA[middle];

    const median = calcAverageArithmetic([peopleMiddle1, peopleMiddle2]);
    return median;
  } else {
    // even list
    const peopleMiddle = listA[middle];
    return peopleMiddle;
  }
}
const medianSalariesCol = (medianSalaries(salariesColSort));

// median top 10%
const spliceStart = (salariesColSort * 0.90);
const spliceCount = salariesColSort - spliceStart;

const salariesColTop10 = salariesColSort.splice(spliceStart, spliceCount);

const medianColTop10 = (medianSalaries(salariesColTop10));

// console result as objects
console.log([
  medianSalariesCol,
  medianColTop10
]);