module.exports = function multiply(first, second) {
  //имитация умножения столбиком, цифры в числах надо умножать начиная с последних
  const first_a = first.split('').reverse();
  const second_a = second.split('').reverse();
// результаты перемножений скидывать в стэк
  let stack = [];
// множим по порядку
  for (let i = 0; i < first_a.length; i++) {
    for (let j = 0; j < second_a.length; j++) {
      var k = first_a[i] * second_a[j]; //число получили
      
      if (stack[i + j]) {
        stack[i + j] = stack[i + j] + k;//если есть
       } else {
        stack[i + j] = k; //если нету!
      }
      
    }
  }

  for (var i = 0; i < stack.length; i++) {
    var number = stack[i] % 10; //в эту ячейку 
    var next = Math.floor(stack[i] / 10);// в следующую 
    stack[i] = number;

    if (stack[i + 1])
      stack[i + 1] = stack[i + 1] + next;
    else if (next != 0)
      stack[i + 1] = next; //докидываем 
  }
  return stack.reverse().join(''); //сначала
}