const carModels = {
  Nissan: [
    "Qashqai",
    "X-Trail",
    "Note",
    "Teana",
    "Murano",
    "Tiida",
    "Almera",
    "Juke",
    "Patrol",
    "Maxima"
  ],

  Hyundai: [
    "Solaris",
    "Creta",
    "Tucson",
    "Santa Fe",
    "Elantra",
    "Accent",
    "ix35",
    "Getz",
    "Sonata",
    "i30"
  ],

  Skoda: [
    "Octavia",
    "Rapid",
    "Kodiaq",
    "Fabia",
    "Superb",
    "Yeti",
    "Roomster",
    "Kamiq",
    "Karoq",
    "Felicia"
  ],

  Mitsubishi: [
    "Outlander",
    "Lancer",
    "Pajero",
    "ASX",
    "Delica",
    "Pajero Sport",
    "Galant",
    "Eclipse Cross",
    "Colt",
    "Airtrek"
  ],

  Toyota: [
    "Corolla",
    "Camry",
    "RAV4",
    "Land Cruiser",
    "Prado",
    "Mark II",
    "Avensis",
    "Vitz",
    "Harrier",
    "Highlander"
  ],

  Kia: [
    "Rio",
    "Sportage",
    "Ceed",
    "Cerato",
    "Sorento",
    "Optima",
    "Soul",
    "Seltos",
    "Picanto",
    "Mohave"
  ],

  Honda: [
    "CR-V",
    "Civic",
    "Accord",
    "Fit",
    "HR-V",
    "Stepwgn",
    "Odyssey",
    "Stream",
    "Freed",
    "Pilot"
  ],

  Volkswagen: [
    "Polo",
    "Passat",
    "Tiguan",
    "Golf",
    "Jetta",
    "Touareg",
    "Transporter",
    "Caddy",
    "Amarok",
    "Bora"
  ],

  Renault: [
    "Duster",
    "Logan",
    "Sandero",
    "Kaptur",
    "Megane",
    "Fluence",
    "Arkana",
    "Scenic",
    "Koleos",
    "Symbol"
  ],

  BMW: [
    "3 Series",
    "5 Series",
    "X5",
    "X3",
    "X6",
    "7 Series",
    "1 Series",
    "X1",
    "X7",
    "E39"
  ],

  Mazda: [
    "3",
    "6",
    "CX-5",
    "CX-7",
    "Demio",
    "CX-9",
    "Familia",
    "Atenza",
    "Tribute",
    "Premacy"
  ],

  Chevrolet: [
    "Niva",
    "Cruze",
    "Lacetti",
    "Aveo",
    "Captiva",
    "Cobalt",
    "Tahoe",
    "Epica",
    "Spark",
    "Orlando"
  ],

  Ford: [
    "Focus",
    "Mondeo",
    "Kuga",
    "Explorer",
    "Fusion",
    "Fiesta",
    "Transit",
    "Escape",
    "Ranger",
    "Maverick"
  ],

  Subaru: [
    "Forester",
    "Outback",
    "Legacy",
    "Impreza",
    "XV",
    "Tribeca",
    "Levorg",
    "WRX",
    "BRZ",
    "Exiga"
  ],

  Lexus: [
    "RX",
    "LX",
    "NX",
    "ES",
    "GX",
    "IS",
    "GS",
    "LS",
    "UX",
    "CT"
  ],

  MercedesBenz: [
    "E-Class",
    "C-Class",
    "M-Class",
    "GLE",
    "GLK",
    "S-Class",
    "G-Class",
    "CLA",
    "Vito",
    "Sprinter"
  ],

  Suzuki: [
    "Grand Vitara",
    "Jimny",
    "Swift",
    "SX4",
    "Vitara",
    "Escudo",
    "Wagon R",
    "Alto",
    "Liana",
    "Every"
  ],

  Haval: [
    "Jolion",
    "F7",
    "H6",
    "Dargo",
    "M6",
    "H9",
    "F7x",
    "H2",
    "H5",
    "Cool Dog"
  ],

  Opel: [
    "Astra",
    "Vectra",
    "Zafira",
    "Corsa",
    "Insignia",
    "Antara",
    "Meriva",
    "Omega",
    "Mokka",
    "Frontera"
  ],

  UAZ: [
    "Patriot",
    "Hunter",
    "Буханка",
    "469",
    "Pickup",
    "Cargo",
    "3151",
    "Simbir",
    "Profi",
    "452"
  ]
};

const repairWorks = {
  Engine: [
    { name: "замена двигателя", price: 16000 },
    { name: "ремонт двигателя", price: 60000 },
    { name: "замена генератора", price: 2400 },
    { name: "замена турбины", price: 5000 },
    { name: "замена масла", price: 400 },
    { name: "замена свечей", price: 1200 },
    { name: "компьютерная диагностика", price: 1000 },
    { name: "замена прокладки клапанной крышки", price: 2500 },
    { name: "замена ремня ГРМ", price: 4500 },
    { name: "ремонт головки блока цилиндров", price: 8000 },
    { name: "замена радиатора охлаждения", price: 3500 },
    { name: "чистка дроссельной заслонки", price: 1500 }
  ],

  Chassis: [
    { name: "диагностика ходовой", price: 500 },
    { name: "замена амортизатора", price: 300 },
    { name: "замена пружин", price: 1200 },
    { name: "замена стоек", price: 1200 },
    { name: "замена шаровой опоры", price: 900 },
    { name: "замена ступичного подшипника", price: 1800 },
    { name: "замена сайлентблоков", price: 1500 },
    { name: "развал-схождение", price: 2000 },
    { name: "замена рулевой рейки", price: 6500 },
    { name: "ремонт подвески", price: 3500 },
    { name: "замена рычагов", price: 2200 },
    { name: "замена стабилизатора", price: 1700 }
  ],

  TO: [
    { name: "замена масла", price: 400 },
    { name: "ремонт фильтров", price: 200 },
    { name: "замена тормозной жидкости", price: 700 },
    { name: "замена масла в трансмиссии", price: 200 },
    { name: "замена воздушного фильтра", price: 500 },
    { name: "замена салонного фильтра", price: 600 },
    { name: "замена антифриза", price: 1200 },
    { name: "замена свечей", price: 1200 },
    { name: "диагностика автомобиля", price: 1000 }
  ],

  Electrical: [
    { name: "компьютерная диагностика", price: 1000 },
    { name: "диагностика автоэлектрики", price: 1000 },
    { name: "восстановление проводки", price: 3000 },
    { name: "ремонт после возгорания", price: 7000 },
    { name: "ремонт генератора", price: 3500 },
    { name: "ремонт стартера", price: 2500 },
    { name: "замена аккумулятора", price: 800 },
    { name: "замена датчиков", price: 1500 },
    { name: "ремонт освещения", price: 1200 },
    { name: "ремонт блока управления", price: 6500 }
  ],

  Tire: [
    { name: "ремонт прокола колеса", price: 1500 },
    { name: "балансировка", price: 1500 },
    { name: "монтаж/демонтаж шин", price: 1500 },
    { name: "шиномонтаж", price: 2000 },
    { name: "подкачка колес", price: 300 },
    { name: "ремонт бокового пореза", price: 1800 },
    { name: "сезонная замена резины", price: 2500 },
    { name: "ремонт дисков", price: 3500 }
  ],

  Transmission: [
    { name: "замена сцепления", price: 12000 },
    { name: "замена редуктора", price: 6000 },
    { name: "замена АКПП", price: 12000 },
    { name: "ремонт коробки передач", price: 15000 },
    { name: "замена масла АКПП", price: 2500 },
    { name: "ремонт вариатора", price: 18000 },
    { name: "замена привода", price: 4500 },
    { name: "ремонт трансмиссии", price: 9000 }
  ]
};

const carSelect = document.getElementById("car");
const modelSelect = document.getElementById("model");

carSelect.addEventListener("change", function () {
  const selectedCar = this.value;
  modelSelect.innerHTML =
    '<option disabled selected value="">Выберите модель авто</option>';
  if (carModels[selectedCar]) {
    carModels[selectedCar].forEach(function (model) {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  }
});

const workSelect = document.getElementById("work");
const checkboxList = document.getElementById("checkbox-list");
const totalPrice = document.querySelector(".itog");


function renderWorks(selectedWork) {
  checkboxList.innerHTML = "";
  totalPrice.textContent = "Итого: 0 рублей";
  if (repairWorks[selectedWork]) {
    repairWorks[selectedWork].forEach(function (work, index) {
      const checkboxBody = document.createElement("div");
      checkboxBody.classList.add("calculator__checkbox-body");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("calculator__checkbox-checkbox");
      checkbox.id = `work-${selectedWork}-${index}`;
      checkbox.dataset.price = work.price;
      const label = document.createElement("label");
      label.classList.add("calculator__checkbox-name");
      label.setAttribute("for", `work-${selectedWork}-${index}`);
      label.textContent = `${work.name} — ${work.price} ₽`;
      checkboxBody.appendChild(checkbox);
      checkboxBody.appendChild(label);
      checkboxList.appendChild(checkboxBody);
    });
  }
  addCalculation();
}


workSelect.addEventListener("change", function () {
  renderWorks(this.value);
});


renderWorks(workSelect.value);

function addCalculation() {
  const checkboxes = document.querySelectorAll(
    ".calculator__checkbox-checkbox"
  );
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", calculateTotal);
  });
}

function calculateTotal() {
  const checkedCheckboxes = document.querySelectorAll(
    ".calculator__checkbox-checkbox:checked"
  );
  let total = 0;
  checkedCheckboxes.forEach(function (checkbox) {
    total += Number(checkbox.dataset.price);
  });
  totalPrice.textContent = `Итого: ${total} рублей`;
}

// const popup = document.querySelector(".popup");
// const openPopupButtons = document.querySelectorAll(
//   ".popup-button"
// );

// openPopupButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     popup.classList.add("active");
//     document.body.classList.add("lock");
//   });
// });

// popup.addEventListener("click", function (event) {
//   if (event.target === popup) {
//     popup.classList.remove("active");
//     document.body.classList.remove("lock");
//   }
// });

const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const openPopupButtons = document.querySelectorAll(".popup-button");

openPopupButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    popup.classList.add("active");
    document.body.classList.add("lock");
  });
});

popup.addEventListener("click", function (event) {
  if (event.target === popup) {
    popup.classList.remove("active");
    document.body.classList.remove("lock");
  }
});

popupClose.addEventListener("click", function () {
  popup.classList.remove("active");
  document.body.classList.remove("lock");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && popup.classList.contains("active")) {
    closePopup();
  }
});