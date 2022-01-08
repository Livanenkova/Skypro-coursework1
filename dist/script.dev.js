"use strict";

var $play1 = document.querySelector('.play1');
var $play2 = document.querySelector('.play2');
var $play3 = document.querySelector('.play3');

var getRandom = function getRandom(num) {
  return Math.floor(Math.random() * num);
};

$play1.addEventListener('click', function (e) {
  var start = {
    startText: 'Введите слово',
    showMessage: function showMessage(i) {
      var text = prompt("".concat(this.startText, "  ").concat(i + 1));
      return text;
    },
    getWord: function getWord(number, count) {
      for (var i = 0; i < number; i++) {
        word = this.showMessage(count);
      }

      return word;
    },
    sortWord: function sortWord(text1) {
      text = text1.toLowerCase().split("").sort().join("");
      return text;
    },
    anagramm: function anagramm(text1, text2) {
      if (text1 === text2) {
        alert("\u0421\u043B\u043E\u0432\u0430 ".concat(text1, " \u0438 ").concat(text2, " \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0430\u043D\u0430\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438"));
      } else if (text1 !== text2) {
        alert("\u0421\u043B\u043E\u0432\u0430 ".concat(text1, " \u0438 ").concat(text2, " \u043D\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0430\u043D\u0430\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438"));
      }
    },
    backend: function backend() {
      var word1 = this.getWord(1, 0);
      var word2 = this.getWord(1, 1);

      if (word1 === word2) {
        alert("\u042D\u0442\u043E \u043D\u0435 2 \u0440\u0430\u0437\u043D\u044B\u0445 \u0441\u043B\u043E\u0432\u0430, \u0430 1, \u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E ".concat(word1, " \u0438 ").concat(word2, " \u043D\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0430\u043D\u0430\u0433\u0440\u0430\u043C\u043C\u043E\u0439"));
      } else if (word1.length !== word2.length) {
        alert("\u0441\u043B\u043E\u0432\u0430 ".concat(word1, " \u0438 ").concat(word2, " \u0440\u0430\u0437\u043D\u044B\u0435 \u043F\u043E \u0434\u043B\u0438\u043D\u0435 - \u0437\u043D\u0430\u0447\u0438\u0442 \u041D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0430\u043D\u0430\u0433\u0440\u0430\u043C\u043C\u043E\u0439. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430"));
      }

      var sortWord1 = this.sortWord(word1);
      var sortWord2 = this.sortWord(word2);
      this.anagramm(sortWord1, sortWord2);
    }
  };
  start.backend();
});
$play2.addEventListener('click', function (e) {
  var enemy = ['камень', 'ножницы', 'бумага'];
  var attack = prompt('введите значение камень, ножницы, или бумага');
  var enemyAttack = enemy[getRandom(enemy.length - 1)];
  play();

  function play() {
    userAttack = attack.toLowerCase();

    if (userAttack == enemyAttack) {
      prompt("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0431\u0440\u0430\u043B ".concat(userAttack, ", \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u0431\u0440\u0430\u043B ").concat(enemyAttack, " - \u041D\u0438\u0447\u044C\u044F, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043A\u0430\u043C\u0435\u043D\u044C, \u043D\u043E\u0436\u043D\u0438\u0446\u044B, \u0438\u043B\u0438 \u0431\u0443\u043C\u0430\u0433\u0430 \u0435\u0449\u0435 \u0440\u0430\u0437"));
    } else if (userAttack == 'камень' && enemyAttack === 'бумага') {
      alert("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0431\u0440\u0430\u043B ".concat(userAttack, ", \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u0431\u0440\u0430\u043B ").concat(enemyAttack, ". \u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u0438\u0433\u0440\u0430\u043B"));
    } else if (userAttack == 'камень' && enemyAttack === 'ножницы') {
      alert("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0431\u0440\u0430\u043B ".concat(userAttack, ", \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u0431\u0440\u0430\u043B ").concat(enemyAttack, ". \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0438\u0433\u0440\u0430\u043B"));
    } else if (userAttack == 'бумага' && enemyAttack === 'ножницы') {
      alert("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0431\u0440\u0430\u043B ".concat(userAttack, ", \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u0431\u0440\u0430\u043B ").concat(enemyAttack, ". \u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u0438\u0433\u0440\u0430\u043B"));
    } else if (userAttack == 'бумага' && enemyAttack === 'камень') {
      alert("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0431\u0440\u0430\u043B ".concat(userAttack, ", \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u0431\u0440\u0430\u043B ").concat(enemyAttack, ". \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0438\u0433\u0440\u0430\u043B"));
    } else if (userAttack == 'ножницы' && enemyAttack === 'камень') {
      alert("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0431\u0440\u0430\u043B ".concat(userAttack, ", \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u0431\u0440\u0430\u043B ").concat(enemyAttack, ". \u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u0438\u0433\u0440\u0430\u043B"));
    } else if (userAttack == 'ножницы' && enemyAttack === 'бумага') {
      alert("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0431\u0440\u0430\u043B ".concat(userAttack, ", \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u0431\u0440\u0430\u043B ").concat(enemyAttack, ". \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u044B\u0438\u0433\u0440\u0430\u043B"));
    } else {
      alert("\u0412\u0432\u0432\u043E\u0434 ".concat(userAttack, " \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043A\u0430\u043C\u0435\u043D\u044C, \u043D\u043E\u0436\u043D\u0438\u0446\u044B, \u0438\u043B\u0438 \u0431\u0443\u043C\u0430\u0433\u0430. \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0441\u043D\u043E\u0432\u0430 \u0438\u0433\u0440\u0443 \u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"));
    }
  }
});
$play3.addEventListener('click', function (e) {
  var userAnswer;
  var secret = {
    question: 'Зимой и летом одним цветом',
    answer: ['елка', 'ёлка'],
    hint: ['Это растет в лесу', 'Это хвойное дерево', 'Это дерево наряжают на новый год'],
    showMessage: function showMessage(text) {
      answer = prompt(text);
      return answer;
    },
    play: function play() {
      for (var i = 0; i <= this.hint.length; i++) {
        userAnswer = answer.toLowerCase();

        if (userAnswer == this.answer[0] || userAnswer == this.answer[1]) {
          alert("\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C! ".concat(userAnswer, " - \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442"));
          return;
        } else if (i === this.hint.length) {
          alert("".concat(userAnswer, " - \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442. \u041F\u043E\u043F\u044B\u0442\u043E\u043A \u043D\u0435 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C. \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0438\u0433\u0440\u0443 \u0437\u0430\u043D\u043E\u0432\u043E"));
        } else if (userAnswer !== this.answer[0] || userAnswer !== this.answer[1]) {
          this.showMessage("".concat(userAnswer, " - \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442. \u041F\u043E\u043F\u044B\u0442\u043E\u043A \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ").concat(this.hint.length - i, " \u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 - : ").concat(this.hint[i]));
        }
      }
    }
  };
  secret.showMessage("\u041E\u0442\u0433\u0430\u0434\u0430\u0439 \u0437\u0430\u0433\u0430\u0434\u043A\u0443 \u0437\u0430 4 \u043F\u043E\u043F\u044B\u0442\u043A\u0438: ".concat(secret.question));
  secret.play();
});