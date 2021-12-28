function recursivaEj(){
  if(/*validacion*/){
    // llamados recursivos
  } else {
    // llamados normales, sin recursividad
  }
}


function recursiva1(numerito: number): number {
  console.log(numerito);
  if (numerito < 5) {
    return recursiva1(numerito + 1);
  } else {
    return 5;
  }
}



function recursiva(numbersArray: number[] | string[]): void {
  if (numbersArray.length !== 0) {
    const firstNum = numbersArray[0];
    console.log(`first number: ${firstNum}`);
    numbersArray.shift(); //* elimina el primer elemento del array
    recursiva(numbersArray);
  }
}