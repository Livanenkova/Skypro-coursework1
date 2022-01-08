const $play1 = document.querySelector('.play1');
const $play2 = document.querySelector('.play2');
const $play3 = document.querySelector('.play3');

const getRandom = (num) => Math.floor(Math.random() * num);

$play1.addEventListener('click',function(e){

  const start = {
    startText: 'Введите слово',
    showMessage(i) {
      const text = prompt(`${this.startText}  ${i+1}`,);
      return text;
    },
    getWord(number,count) {
      for (let i = 0; i < number; i ++) {
        word = this.showMessage(count);
      }
      return word;
    }, 
    sortWord(text1){
      text = text1.toLowerCase().split("").sort().join("");
      return text;
    },
    anagramm(text1,text2){
      if (text1 === text2) {
        alert(`Слова ${text1} и ${text2} являются анаграммами`)
      } else if (text1 !== text2) {
        alert(`Слова ${text1} и ${text2} не являются анаграммами`)
      }
    },
    backend() {
      const word1 = this.getWord(1,0);
      const word2 = this.getWord(1,1);
      if (word1 === word2) {
        alert(`Это не 2 разных слова, а 1, следовательно ${word1} и ${word2} не являются анаграммой`)
      } else if (word1.length !== word2.length) {
        alert(`слова ${word1} и ${word2} разные по длине - значит Не могут быть анаграммой. Введите новые слова`)
      }
      const sortWord1 = this.sortWord(word1)
      const sortWord2 = this.sortWord(word2)
      this.anagramm(sortWord1,sortWord2);
    }
  }

  start.backend();
});

$play2.addEventListener('click',function(e){
  const enemy = ['камень', 'ножницы', 'бумага'];
  const attack = prompt('введите значение камень, ножницы, или бумага',);
  const enemyAttack = enemy[getRandom(enemy.length - 1)];

  play();

function play (){

  userAttack = attack.toLowerCase();
  
  if (userAttack == enemyAttack) {
    prompt(`Пользователь выбрал ${userAttack}, компьютер выбрал ${enemyAttack} - Ничья, введите значение камень, ножницы, или бумага еще раз`)
  } else if (userAttack == 'камень' && enemyAttack === 'бумага') {
    alert(`Пользователь выбрал ${userAttack}, компьютер выбрал ${enemyAttack}. Компьютер выиграл`)
  } else if (userAttack == 'камень' && enemyAttack === 'ножницы') {
    alert(`Пользователь выбрал ${userAttack}, компьютер выбрал ${enemyAttack}. Пользователь выиграл`)
  } else if (userAttack == 'бумага' && enemyAttack === 'ножницы') {
    alert(`Пользователь выбрал ${userAttack}, компьютер выбрал ${enemyAttack}. Компьютер выиграл`)
  } else if (userAttack == 'бумага' && enemyAttack === 'камень') {
    alert(`Пользователь выбрал ${userAttack}, компьютер выбрал ${enemyAttack}. Пользователь выиграл`)
  } else if (userAttack == 'ножницы' && enemyAttack === 'камень') {
    alert(`Пользователь выбрал ${userAttack}, компьютер выбрал ${enemyAttack}. Компьютер выиграл`)
  } else if (userAttack == 'ножницы' && enemyAttack === 'бумага') {
    alert(`Пользователь выбрал ${userAttack}, компьютер выбрал ${enemyAttack}. Пользователь выиграл`)
  } else {
    alert(`Вввод ${userAttack} не соотвествует значение камень, ножницы, или бумага. Запустите снова игру и введите верное значение`)
  }
}

});

$play3.addEventListener('click',function(e){
  let userAnswer;
  const secret = {
    question: 'Зимой и летом одним цветом',
    answer: ['елка','ёлка'],
    hint : ['Это растет в лесу','Это хвойное дерево','Это дерево наряжают на новый год'],
    showMessage (text) {
      answer = prompt(text);
      return answer;
    },
    play() {
      for (let i = 0; i <= this.hint.length ; i++) {
        userAnswer  = answer.toLowerCase();
        if (userAnswer == this.answer[0] || userAnswer == this.answer[1]) {
          alert(`Поздравляем! ${userAnswer} - правильный ответ`)
          return
        } else if (i === this.hint.length){
          alert(`${userAnswer} - неправильный ответ. Попыток не осталось. Запустите игру заново`);
        }
        else if (userAnswer !== this.answer[0] || userAnswer !== this.answer[1]) {
          this.showMessage(`${userAnswer} - неправильный ответ. Попыток осталось ${(this.hint.length) - i} Подсказка - : ${this.hint[i]}`);
        } 
      }
    }
  }
  secret.showMessage(`Отгадай загадку за 4 попытки: ${secret.question}`);
  secret.play();

});