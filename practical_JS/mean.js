const list1 = [
  1,
  2,
  3,
  4,
  2,
  1,
  2,
  5,
  5,
  3
];

const list1Count = {};

list1.map(
  function (element) {
    if (list1Count[element]) {
      list1Count[element] += 1;
    } else {
      list1Count = 1;
    }
  }

);

const list1Array = Object.entries(list1Count).sort((a, b) => a[1] - b[1]);

const mean = list1Array[list1Array.length - 1];