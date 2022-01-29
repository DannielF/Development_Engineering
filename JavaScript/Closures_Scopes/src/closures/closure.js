// no recuerda el ambito, osea los valores
const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins; // operacion asignacion-adiccion
  console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

// closures like a bagpack
// calling a function, creating new local execution context
const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4); // primer llamado
myMoneyBox(6); // 6 +4 = 10
myMoneyBox(10); // 10 + 10 = 20
