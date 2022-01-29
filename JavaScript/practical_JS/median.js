function calcHalfArithmeticList(listA) {
  const sumList = listA.reduce(
    function (accumulatedValue = 0, newElement) {
      return accumulatedValue + newElement;
    }
  );

  const averageList = sumList / listA.length;

  return averageList
}

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

function calcMedian() {
  const inputNumbers = document.getElementById("inputNumbers");
  const numbers = inputNumbers.value;
  // const arrayNumbers = String(numbers).split("").map((num) => { return Numbers(numbers) });

  // sort with function compare(a,b)
  arrayNumbers.sort(function (a, b) {
    return a - b;
  })

  const midNumbers = parseInt(arrayNumbers.length / 2);

  isEven(midNumbers);

  let median;

  if (isEven(numbers.length)) {
    const elementA = arrayNumbers[midNumbers - 1];
    const elementB = arrayNumbers[midNumbers];
    const averageEleAB = calcHalfArithmeticList([
      elementA,
      elementB
    ]);

    median = averageEleAB;

  } else {
    median = arrayNumbers[midNumbers];
  }

  const printResult = document.getElementById("resultMedian");
  printResult.innerText = `The median is ${median}`;
}