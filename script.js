let coins = 0;
let energy = 100;
let progress = 0;
const hamster = document.getElementById('hamster');
const coinsDisplay = document.getElementById('coins');
const energyDisplay = document.getElementById('energy');
const progressBar = document.getElementById('progress-bar');
const boostButton = document.getElementById('boost');

// Клик по хомяку увеличивает монеты и уменьшает энергию
hamster.addEventListener('click', () => {
  if (energy > 0) {
    coins += 10;
    energy -= 1;
    progress += 2;
    updateUI();
  }
});

// Boost увеличивает монеты на 50 и восстанавливает энергию
boostButton.addEventListener('click', () => {
  if (energy <= 90) {
    coins += 50;
    energy += 10;
    progress += 5;
    updateUI();
  }
});

// Обновление интерфейса
function updateUI() {
  coinsDisplay.textContent = coins;
  energyDisplay.textContent = energy;
  progressBar.style.width = progress + '%';
  if (progress >= 100) {
    alert('Уровень пройден!');
    progress = 0;
  }
}

// Автоматическое восстановление энергии
setInterval(() => {
  if (energy < 100) {
    energy += 1;
    updateUI();
  }
}, 1000);
    // Массив с путями к картинкам хомяков
const hamsterImages = [
    "wide_4_3_89c246eebbbd2dc6613d99253ae54d3d.jpg  ", // Первая картинка
    "https://files.vgtimes.ru/posts/2024-06/1718227523_67.webp", // Вторая картинка
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--A6_JkSh4DIriinnadIwoU1V_XxIXtuqsw&s", // Третья картинка
  ];
  
  let currentHamsterIndex = 0; // Текущий хомяк
  let level = 1; // Текущий уровень
  
  // Функция для обновления картинки хомяка
  function updateHamsterImage() {
    if (currentHamsterIndex < hamsterImages.length - 1) {
      currentHamsterIndex++; // Переход к следующей картинке
    } else {
      currentHamsterIndex = 0; // Сброс к первой картинке (цикл)
    }
    hamster.src = hamsterImages[currentHamsterIndex]; // Обновляем картинку
  }
  
  // Функция для сброса прогресса и увеличения уровня
  function levelUp() {
    alert(`Уровень пройден! Добро пожаловать на уровень ${++level}!`);
    progress = 0; // Сброс прогресса
    updateHamsterImage(); // Обновление картинки хомяка
  }
  
  // Обновление интерфейса (с учётом проверки уровня)
  function updateUI() {
    coinsDisplay.textContent = coins;
    energyDisplay.textContent = energy;
    progressBar.style.width = progress + '%';
    if (progress >= 100) {
      levelUp(); // Уровень повышен
    }
  }
  
  // Автоматическое восстановление энергии
  setInterval(() => {
    if (energy < 100) {
      energy += 1;
      updateUI();
    }
  }, 1000);
  