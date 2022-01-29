function calcHalfArithmeticList(listA) {

  /*   let sumList = 0;
  
    for (let i = 0; i < listA.length; i++) {
      sumList += listA[i];
    } */

  // reduce -> sum all integer values in the array 
  // return an unique value

  const sumList = listA.reduce(
    function (accumulatedValue = 0, newElement) {
      return accumulatedValue + newElement;
    }
  );

  const averageList = sumList / listA.length;

  return averageList
}