// ЗВУКИ
//Просто в "" меняете ссылку на звук. Звук нужно загрузить в папку audio и прописать путь к нему ./audio/ +название звука.расширение. Лучше используйте mp3 и именно загрузку из папки, а то может не пойти музыка
const goldSound = new Audio("./audio/up.mp3");
const backgroundSound = new Audio("./audio/back.mp3");

setTimeout(() => {
  backgroundSound.loop = true;
  backgroundSound.volume = 0.1;
  backgroundSound.play().catch(() => {
    const startMusic = () => {
      backgroundSound.play().catch(() => {});
      document.removeEventListener("click", startMusic);
    };
    document.addEventListener("click", startMusic);
  });
}, 1000);

let clicks = 0;
let selected = "Ali";

// База карт
//Просто в "" меняете ссылку на картинку. Картинку нужно загрузить в папку images и прописать путь к ней images/ +название картинки.расширение
const cards = {
  Ali: {
    r3: ["images/али3.jpg"],
    r4: ["images/али4.jpg"],
    r5: ["images/али5.jpg"],
    secret: ["images/али5.jpg"],
  },
  Den: {
    r3: ["images/дэн3.jpg"],
    r4: ["images/дэн4.jpg"],
    r5: ["images/дэн5.jpg"],
    secret: ["images/али5.jpg"],
  },
  Hiroshi: {
    r3: ["images/хироши3.jpg"],
    r4: ["images/хироши4.jpg"],
    r5: ["images/хироши5.jpg"],
    secret: ["images/али5.jpg"],
  },
  Sonkhun: {
    r3: ["images/сонкхун3.jpg"],
    r4: ["images/сонкхун4.jpg"],
    r5: ["images/сонкхун5.jpg"],
    secret: ["images/али5.jpg"],
  },
  Lucius: {
    r3: ["images/люций3.jpg"],
    r4: ["images/люций4.jpg"],
    r5: ["images/люций5.jpg"],
    secret: ["images/али5.jpg"],
  },
};

//Описания карточек
// Менять описания здесь. <br> - переход на новую строку, <i></i> - iitalic шрифт
const description = {
  Ali: {
    r3: "- С праздником, братец! Я ничего не придумал, но как хорошо, что есть решение в виде купонов!<br>- не уверен, думал ли ты в...сколько?! Ты опять соришь деньгами!<br>- уаа, почему ты единственный кто этим не доволен!",
    r4: "Али 4 зв.",
    r5: "Али 5 зв.",
    secret: "Секретка!!",
  },
  Den: {
    r3: "- записка?<br>- это открытка. От меня<br>- нет, это просто записка, даже без твоей подписи..<br>- тогда подписать? Хотя для тебя это уже будет жирно",
    r4: "- Кхм, держи... - Дэн протягивает банку хорошего дорогого кофе. По его реакции сразу видно, что ему непривычно делать подобный жест.<br>- Ого, спасибо Дэн. От тебя лично я подарка не ждал<br> Он кинул на тебя подозрительный взгляд<br>- ...тогда я заберу?<br>- нет-нет! Я приму. Но это довольно дорогая марка, не стоило так<br>- Просто я тебя всегда вижу с кружкой кофе, будто он тебе не помогает. Все равно вялый. Поэтому подумал...лучше одну кружку, но чтоб ты был пободрее. Здесь больше кофеина и он качественнее. Может не буду видеть твою спящую морду так часто<br> - Это...довольно мило, Дэн<br> - ха? это просто кофе, что ты лыбишься? Тебя так легко впечатлить?<br>Вы пригласили Дэна попробовать его подарок вместе, он на удивление согласился и у вас была приятная беседа в предпраздничный вечер",
    r5: "...",
    secret: "Секретка!!",
  },
  Hiroshi: {
    r3: "- это...это же твой мерч?<br>- ну да, а что? Зато отдаю его тебе бесплатно<br>- надеюсь, это хотя бы не брак?<br>- ...вечно ты недоволен",
    r4: "...",
    r5: "...",
    secret: "Секретка!!",
  },
  Sonkhun: {
    r3: "- Простите за скромный подарок, но с праздникам вас, менеджер!<br>- спасибо, но почему это?<br>- Ну, когда увидел этот брелок, почему то напомнило вас...<br>- странные у тебя ассоциации",
    r4: "...",
    r5: "...",
    secret: "Секретка!!",
  },
  Lucius: {
    r3: "- с праздником, Юн-тян! Ты первый человек, кому я дарю подарок на рождество~<br>- спасибо большое, но что это? Внутри...<br>- нууу, это мой и первый подарок, так что вообще не знал что выбрать. Но это же гринч! Такой милашка в коробочке<br>- да...милашка",
    r4: "...",
    r5: "...",
    secret: "Секретка!!",
  },
};

// Описания баннеров. Аналогично описаниям карточек
const bannerDescriptions = {
  Ali: {
    name: "Али",
    desc: "Встречаем самый теплый новый год! Новогодние каникулы на Мальдивах! <br><i>Не могу привыкнуть к холоду, но надеюсь тебе здесь весело!</i>",
    infoURL: "https://t.me/cry_priton/1622?single",
  },
  Den: {
    name: "Дэн",
    desc: "Шампанское? А может лучше море пива с горячим красавцем? <br><i>Чтож, у нас много чего за что можно выпить</i>",
    infoURL: "https://t.me/cry_priton/1626?single",
  },
  Hiroshi: {
    name: "Хироши",
    desc: "Необычный и искренний подарок от супер айдола. О чем он написал в своих строках? <br><i>Ну...я рад что ты со мной сейчас</i>",
    infoURL: "https://t.me/cry_priton/1620?single",
  },
  Sonkhun: {
    name: "Сонкхун",
    desc: "Загляните под елочку - там ваш подарок! Только аккуратнее с ним. <br><i>Я подумал...это будет забавно</i>",
    infoURL: "https://t.me/cry_priton/1624?single",
  },
  Lucius: {
    name: "Люций",
    desc: "няхахаха",
    infoURL: "https://t.me/cry_priton/1628?single",
  },
};

// База коллекции
let collection = {
  Ali: { r3: 0, r4: 0, r5: 0 },
  Den: { r3: 0, r4: 0, r5: 0 },
  Hiroshi: { r3: 0, r4: 0, r5: 0 },
  Sonkhun: { r3: 0, r4: 0, r5: 0 },
  Lucius: { r3: 0, r4: 0, r5: 0 },
};

function saveGame() {
  localStorage.setItem(
    "gameData",
    JSON.stringify({
      clicks: clicks,
      collection: collection,
      pity: pity,
    })
  );
}

// Кликер
document.getElementById("clickBtn").onclick = () => {
  clicks++;
  document.getElementById("clickCounter").textContent = "Клики: " + clicks;
  saveGame();
};

// Баннеры
const banners = document.querySelectorAll(".banner");
const mainBanner = document.getElementById("mainBanner");

banners.forEach((banner) => {
  const img = banner.dataset.image;
  banner.style.backgroundImage = `url(${img})`;
  banner.addEventListener("click", () => {
    banners.forEach((b) => b.classList.remove("active"));
    banner.classList.add("active");
    const img = banner.dataset.image;
    mainBanner.style.backgroundImage = `url(${img})`;
  });
});
document.querySelectorAll(".banner").forEach((banner) => {
  banner.addEventListener("click", () => {
    selected = banner.dataset.char; 
  });
});
// Выпадение
function getRarity(counter) {
  if (counter >= 60) return "r5"; // гарант
  const r = Math.random();
  if (r < 0.01) return "r5";
  if (r < 0.15) return "r4";
  return "r3";
}

document.getElementById("roll1").onclick = () => tryRoll(1, 15);
document.getElementById("roll10").onclick = () => tryRoll(10, 150);

let pity = 0;
let skip = false;

const savedData = localStorage.getItem("gameData");
if (savedData) {
  try {
    const data = JSON.parse(savedData);
    clicks = data.clicks || 0;
    collection = data.collection || {
      Ali: { r3: 0, r4: 0, r5: 0 },
      Den: { r3: 0, r4: 0, r5: 0 },
      Hiroshi: { r3: 0, r4: 0, r5: 0 },
      Sonkhun: { r3: 0, r4: 0, r5: 0 },
      Lucius: { r3: 0, r4: 0, r5: 0 },
    };
    pity = data.pity || 0;

    document.getElementById("clickCounter").textContent = "Клики: " + clicks;
    updateCollectionList();
    updateSecretList();
  } catch (e) {
    console.log("Ошибка загрузки сохранения", e);
  }
}

function tryRoll(num, cost) {
  if (clicks < cost) return;
  clicks -= cost;
  document.getElementById("clickCounter").textContent = "Клики: " + clicks;
  roll(num);
}

//Крутка
function roll(num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    let rarity = getRarity(pity);
    addToCollection(selected, rarity);
    result.push(rarity);
    if (rarity === "r5") pity = 0;
    else pity++;
    saveGame();
  }
  animateResults(result);
}

//Создание летающих кругов на фоне
function createFloatingBalls() {
  const overlay = document.querySelector(".overlay");
  const ballCount = 20 + Math.floor(Math.random() * 5);

  for (let i = 0; i < ballCount; i++) {
    const ball = document.createElement("div");
    ball.className = "floating-ball";

    const size = 20 + Math.floor(Math.random() * 60);
    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    ball.style.left = `${posX}%`;
    ball.style.top = `${posY}%`;
    const duration = 10 + Math.random() * 15;
    ball.style.animationDuration = `${duration}s`;
    const delay = Math.random() * 5;
    ball.style.animationDelay = `${delay}s`;

    overlay.appendChild(ball);
  }
}

function clearingOverlay() {
  const glow = document.querySelector(".glow-effect");
  if (glow) glow.remove();

  const cardContainer = document.querySelector(".cardContainer");
  cardContainer.innerHTML = "";
}

//Спрятать и очистить оверлей с карточками
function closeButtonOnClick() {
  document.getElementById("exitButton").onclick = () => {
    clearingOverlay();
    document.querySelector(".overlay").style.display = "none";
    const floatingBalls = document.querySelectorAll(".floating-ball");
    floatingBalls.forEach((ball) => ball.remove());
    document.querySelector(".overlay-content").style.display = "none";
    document.querySelector(".overlay").style.background = "rgba(0, 0, 0, 0.8)";
    document.querySelector(".cardContainer").classList.remove("card-list");
    document.getElementById("skipBtn").innerText = "ПРОПУСТИТЬ";
  };
}
closeButtonOnClick();

//Вспышки
function createRarityFlare(res) {
  return new Promise((resolve) => {
    const hasR3 = res.includes("r3");
    const hasR4 = res.includes("r4");
    const hasR5 = res.includes("r5");

    const colors = {
      r3: "rgba(50, 80, 255, 0.8)",
      r4: "rgba(180, 70, 255, 0.8)",
      r5: "rgba(255, 220, 50, 0.9)",
    };

    const flaresToShow = [];
    if (hasR3) flaresToShow.push("r3");
    if (hasR4) flaresToShow.push("r4");
    if (hasR5) flaresToShow.push("r5");

    if (flaresToShow.length === 0) {
      resolve();
      return;
    }

    let flareIndex = 0;
    let completedFlares = 0;

    function showNextFlare() {
      if (flareIndex >= flaresToShow.length) {
        return;
      }

      const rarity = flaresToShow[flareIndex];
      const color = colors[rarity];

      const flare = document.createElement("div");
      flare.className = "rarity-flare";
      flare.style.backgroundColor = color;

      document.querySelector(".overlay").appendChild(flare);

      flare.style.animation = `flareAnimation 1s ease-out`;

      flare.addEventListener("animationend", () => {
        flare.remove();
        completedFlares++;
        if (completedFlares === flaresToShow.length) {
          resolve();
        }
      });

      flareIndex++;
      setTimeout(showNextFlare, 700);
    }

    showNextFlare();
  });
}

// Показ результатов по одному
async function animateResults(res) {
  skip = false;

  let i = 0;
  document.getElementById("exitButton").style.display = "none";
  document.querySelector(".overlay-text").style.display = "flex";

  const overlay = document.querySelector(".overlay");
  if (res.length > 1) {
    document.getElementById("skipBtn").style.display = "block";
    document.getElementById("nextButton").style.display = "block";
    overlay.style.backgroundColor = "background-color: rgba(0, 0, 0, 0.8);";
    overlay.style.display = "flex";
    await createRarityFlare(res);
  } else {
    document.getElementById("exitButton").style.display = "block";
  }

  createFloatingBalls();
  next();
  function next() {
    if (i >= res.length) {
      document.getElementById("exitButton").style.display = "block";
      document.getElementById("nextButton").style.display = "none";
      if (res.length > 1) {
        document.getElementById("skipBtn").innerText = "Посмотреть вce";
      }
      return;
    }

    if (window.innerWidth < 576) {
      document.querySelector(".overlay-content").style.display = "block";
    } else {
      document.querySelector(".overlay-content").style.display = "flex";
    }

    const txtOverlay = document.querySelector(".overlay-text");
    txtOverlay.style.animation = "none";
    void txtOverlay.offsetWidth;
    txtOverlay.style.animation = "pop 0.5s ease";
    clearingOverlay();

    const overlay = document.querySelector(".overlay");
    document.getElementById("nextButton").disabled = true;

    const r = res[i];

    overlay.style.display = "flex";

    const url = cards[selected][r][0];
    const div = document.createElement("div");
    div.className = "card " + r;
    div.style.backgroundImage = `url('${url}')`;
    div.onclick = (e) => {
      e.stopPropagation;
      openModal(url);
    };

    document.querySelector(".cardContainer").appendChild(div);

    const glow = document.createElement("div");
    glow.className = "glow-effect";

    const floatingBalls = document.querySelectorAll(".floating-ball");

    const textOverlay = document.querySelector(".overlay-text");
    textOverlay.innerHTML = description[selected][r];

    //Тут цвета всего оверлея
    switch (r) {
      case "r3":
        overlay.style.background = "rgba(0, 12, 73, 0.7)";
        glow.style.background = "rgba(50, 80, 255, 0.8)";
        glow.style.boxShadow =
          "0 0 20px 8px rgba(50, 80, 255, 0.6), 0 0 50px 20px rgba(50, 80, 255, 0.4)";
        floatingBalls.forEach(
          (ball) => (ball.style.background = "rgba(134, 152, 255, 1)")
        );
        break;

      case "r4":
        overlay.style.background = "rgba(64, 25, 89, 0.7)";
        glow.style.background = "rgba(180, 70, 255, 0.8)";
        glow.style.boxShadow =
          "0 0 20px 8px rgba(180, 70, 255, 0.6), 0 0 50px 20px rgba(180, 70, 255, 0.4)";
        floatingBalls.forEach(
          (ball) => (ball.style.background = "rgba(210, 141, 255, 1)")
        );
        break;

      case "r5":
        overlay.style.background = "rgba(131, 114, 28, 0.7)";
        glow.style.background = "rgba(255, 220, 50, 0.8)";
        glow.style.boxShadow =
          "0 0 20px 8px rgba(255, 220, 50, 0.6), 0 0 50px 20px rgba(255, 220, 50, 0.4)";
        floatingBalls.forEach(
          (ball) => (ball.style.background = "rgba(255, 236, 140, 1)")
        );
        goldSound.currentTime = 0;
        goldSound.play().catch(() => {});
        break;
    }

    document.querySelector(".overlay").appendChild(glow);
    glow.style.animation = "horizontalGlow 1.5s ease-in-out";

    glow.addEventListener("animationend", () => {
      glow.remove();
      document.getElementById("nextButton").disabled = false;
    });

    i++;
  }

  document.getElementById("nextButton").onclick = next;
  document.getElementById("skipBtn").disabled = false;

  // Показ всех сразу
  function showAll() {
    if (window.innerWidth < 576) {
      document.querySelector(".overlay-content").style.display = "flex";
    }
    document.querySelector(".overlay").style.background = "rgba(0, 0, 0, 0.8)";
    const box = document.querySelector(".cardContainer");
    box.classList.add("card-list");
    box.innerHTML = "";
    document.querySelector(".overlay-text").style.display = "none";
    box.style.width = "100%";
    res.forEach((r) => {
      const url = cards[selected][r][0];
      const div = document.createElement("div");
      div.className = "small-card card " + r;
      div.style.backgroundImage = `url('${url}')`;
      div.onclick = () => openModal(url);
      box.appendChild(div);
    });
    document.getElementById("skipBtn").style.display = "none";
    document.getElementById("exitButton").style.display = "block";
    document.getElementById("nextButton").style.display = "none";
  }
  document.getElementById("skipBtn").onclick = showAll;
  saveGame();
}

// Модал картинки
function openModal(url) {
  const m = document.getElementById("modal");
  document.getElementById("modalImg").src = url;
  m.style.display = "block";
}
document.getElementById("modal").onclick = () =>
  (document.getElementById("modal").style.display = "none");

document.querySelectorAll(".banner").forEach((b) => {
  b.addEventListener("click", () => {
    const char = b.dataset.char;
    const img = b.dataset.image;

    document.getElementById("mainBanner").style.backgroundImage = `url(${img})`;

    document.getElementById("charName").innerText =
      bannerDescriptions[char].name;
    document.getElementById("charDesc").innerHTML =
      bannerDescriptions[char].desc;
    document.getElementById("charURL").href = bannerDescriptions[char].infoURL;
  });
});
// Выбираем первый баннер при загрузке
window.addEventListener("DOMContentLoaded", () => {
  const first = document.querySelector(".banner");
  if (first) first.click();
});

// КОЛЛЕКЦИЯ КАРТОЧЕК

// Добавление в коллекцию после выпадения
function addToCollection(character, rarity) {
  if (rarity === "r3") collection[character].r3++;
  if (rarity === "r4") collection[character].r4++;
  if (rarity === "r5") collection[character].r5++;

  updateCollectionList();
  updateSecretList();
}

// Обновление списка коллекции
function updateCollectionList() {
  const container = document.getElementById("collectionList");
  container.innerHTML = "";

  for (let char in collection) {
    const c = collection[char];

    const box = document.createElement("div");
    box.className = "collection-box";
    box.innerHTML = `
            <h3>${char}</h3>
            <p>⭐⭐⭐: ${c.r3}</p>
            <p>⭐⭐⭐⭐: ${c.r4}</p>
            <p>⭐⭐⭐⭐⭐: ${c.r5}</p>
        `;

    container.appendChild(box);
  }
}
updateCollectionList();

// Обновление секретных карточек
function updateSecretList() {
  const sec = document.getElementById("secretList");
  sec.innerHTML = "";

  for (let char in collection) {
    const unlocked = collection[char].r5 >= 5;

    const card = document.createElement("div");
    card.className = unlocked ? "secret-card unlocked" : "secret-card locked";

    card.innerHTML = unlocked
      ? `🔥 СЕКРЕТНАЯ КАРТОЧКА ${char} — ОТКРЫТО`
      : `🔒 СЕКРЕТКА ${char} (нужно 5 × 5★)`;

    if (unlocked) {
      card.style.cursor = "pointer";
      card.onclick = () => showSecretCard(char);
    }
    sec.appendChild(card);
  }
}
updateSecretList();

function showSecretCard(character) {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "flex";
  overlay.style.background = "rgba(131, 114, 28, 0.7)";

  const cardContainer = document.querySelector(".cardContainer");
  cardContainer.innerHTML = "";
  cardContainer.classList.remove("card-list");
  createFloatingBalls();
  const url = cards[character].secret[0];
  const div = document.createElement("div");
  div.className = "card r5";
  div.style.backgroundImage = `url('${url}')`;
  div.style.width = "520px";
  div.style.height = "350px";
  div.onclick = (e) => {
    e.stopPropagation();
    openModal(url);
  };

  cardContainer.appendChild(div);
  const textOverlay = document.querySelector(".overlay-text");
  textOverlay.style.display = "flex";
  textOverlay.innerHTML = description[character].secret;

  document.getElementById("exitButton").style.display = "block";
  document.querySelector(".overlay-content").style.display = "flex";

  document.getElementById("skipBtn").style.display = "none";
  document.getElementById("nextButton").style.display = "none";
}

function createSnowCanvas() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.className = "snow-canvas";
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "0";
  document.body.appendChild(canvas);

  let snowflakes = [];
  const snowflakeCount = 100;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    snowflakes = [];
    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 6 + 3,
        speed: Math.random() * 1.5 + 0.5,
        wind: Math.random() * 1 - 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        swing: Math.random() * 0.05,
        swingSpeed: Math.random() * 0.05 + 0.02,
        swingOffset: Math.random() * Math.PI * 2,
      });
    }
  }

  function animate(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach((flake) => {
      flake.y += flake.speed;
      flake.x += flake.wind;

      flake.x +=
        Math.sin(time * 0.001 * flake.swingSpeed + flake.swingOffset) *
        flake.swing;

      if (flake.y > canvas.height) {
        flake.y = -flake.radius * 2;
        flake.x = Math.random() * canvas.width;
      }

      if (flake.x > canvas.width + flake.radius) {
        flake.x = -flake.radius;
      }
      if (flake.x < -flake.radius) {
        flake.x = canvas.width + flake.radius;
      }

      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);

      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(flake.x + 1, flake.y + 1, flake.radius * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 220, 255, ${flake.opacity * 0.2})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(animate);
}
createSnowCanvas();
