const taskInput = document.getElementById("task");
const result = document.getElementById("result");
const aboutBooks = [
  {
    "day": "Mon",
    "dayBefore": "Sun",
    "materials": [5617257398, 5617259573, 5617268645, 5617268269, 5617215013, 5617208397, 5617188622],
    "subjects": [2159895182, 2159895113, 2159882340, 2159895118, 2159895111],
    "comments": "Apostila Exatas, Apostila Humanas, Apostila Sociologia, Apostila Inglês, Caderno Azul (História), Caderno Cinza (Inglês e Sociologia), Caderno Laranja (Matemáticas)"
  },
  {
    "day": "Tue",
    "dayBefore": "Mon",
    "materials": [5617257398, 5617259573, 5617218404, 5617188622],
    "subjects": [2159895112, 2159895181, 2159876373, 2159882340],
    "comments": "Apostila Exatas, Apostila Humanas, Caderno Verde (Física, Geografia, Português), Caderno Laranja (Matemática 2)"
  },
  {
    "day": "Wed",
    "dayBefore": "Tue",
    "materials": [5617257398, 5617259573, 5617268902, 5617215013, 5617218404],
    "subjects": [2159893392, 2159895182, 2159895180, 2159895112, 2159895115],
    "comments": "Apostila Exatas, Apostila Humanas, Apostila Filosofia, Caderno Azul (Química, História, Biologia), Caderno Verde (Física, Filosofia)"
  },
  {
    "day": "Thu",
    "dayBefore": "Wed",
    "materials": [5617257398, 5617259573, 5617215013, 5617218404, 5617254955],
    "subjects": [2159895184, 2159895180, 2159876373, 2159895193],
    "comments": "Apostila Exatas, Apostila Humanas, Caderno Azul (Literatura, Biologia), Caderno Verde (Português), Caderno Itinerários"
  },
  {
    "day": "Fri",
    "dayBefore": "Thu",
    "materials": [5617259573, 5617254955, 5617255300, 5617208397],
    "subjects": [2159895119, 2159895187, 2159895194],
    "comments": "Apostila Humanas, Caderno Itinerários, Caderno LIV, Caderno Cinza (Produção de Texto)"
  }
];

function nextDate(dayIndex) {
  let today = new Date();
  today.setDate(today.getDate() + (dayIndex - 1 - today.getDay() + 7) % 7 + 1);
  return today;
}

taskInput.onkeyup = function () {
  checkText(this.value);
}

function checkText (text) {
  //Fix letters and accents on input
  const changeSubjects = {"Liv": "LIV", "Portugues": "Português", "Fisica": "Física", "Historia": "História", "Matematica": "Matemática", "Ingles": "Inglês", "Quimica": "Química", "Producao": "Produção", "Produçao": "Produção", "Producão": "Produção", "Capitulo": "Capítulo", " Dde": " de", " Ddo": " do", " Dda": " da"};
  taskInput.value = window.capitalize(text.replace(/ ?(.*)/, "$1"), null, changeSubjects);

  //Check for subjects on input and then select
  checkDropdown(["biologia","filosofia","física","geografia","história","inglês","liv","literatura","matemática 1","matemática 2","matemática financeira","pensadores do futuro","português","produção de texto","química","sociologia"], "subjects");

  //Check for exercise type and then select
  checkDropdown(["capítulo","iniciais","contextualizados"], "exercises");
}

function getDue (dropdown, update) {
  //Selecting the date if the school subject detected
  const selectedSubject = aboutBooks.filter(e => e.subjects.includes(parseInt(dropdown.value))).map(e => e.day);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const duePicker = document.getElementById("due");
  let theDays = [];
  
  for (let i = 0; i < selectedSubject.length; i++) {
    theDays.push(nextDate(days.indexOf(selectedSubject[i])));
  }
  const earliestDay = theDays.sort((a, b) => new Date(a) - new Date(b))[0];
  let dayBefore = new Date();
  dayBefore.setTime(earliestDay.getTime() - ((24*60*60*1000) * 1));

  duePicker.value = dayBefore.toLocaleDateString('en-CA');
  if (duePicker.getAttribute('data-previous') != duePicker.value) {
    duePicker.setAttribute("data-previous", duePicker.value)
    duePicker.classList.add("blink");
    duePicker.style.animation = "none";
    duePicker.offsetHeight;
    duePicker.style.animation = null;
  }

  setDate(dayBefore.toLocaleDateString('en-CA'));
  /*if (update) {
    result.innerText = result.innerText.replace(/"due_date": ".*?"/, `"due_date": "${dayBefore.toLocaleDateString('en-CA')}"`);
    window.updateJSONResultBox(result);
  }*/

  return dayBefore;
}

function checkDropdown(list, elementName) {
  //Getting elements
  const regExp = new RegExp(list.map(e => e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"), "i");
  const optionsOnText = taskInput.value.match(regExp);
  const dropdown = document.getElementById(elementName);
  const options = Array.from(dropdown.options);

  //Selecting and animation
  if (optionsOnText) { 
    options.find(option => option.text == window.capitalize(optionsOnText[0])).selected = true;
    if (dropdown.getAttribute('data-previous') != dropdown.value) {
      dropdown.setAttribute("data-previous", dropdown.value)
      dropdown.classList.add("blink");
      dropdown.style.animation = "none";
      dropdown.offsetHeight;
      dropdown.style.animation = null;
    }
  }
  
  //Showing the JSON on the page
  result.innerText = result.innerText.replace(/"content": .*?,/, `"content": "${taskInput.value}",`);
  if (parseInt(dropdown.value)) {
    result.innerText = result.innerText.replace(/"label_ids": .*?,/, `"label_ids": [${dropdown.value}],`);
    getDue(dropdown, true);
  }
  window.updateJSONResultBox(result);
}

//Interacting with elements on page
function addText (data) {
  if (data.value) {
    taskInput.value += " " + data.options[data.selectedIndex].text;
    getDue(data, true);
    checkText(taskInput.value);
  } else if (data.id == "subjects" && !data.value) {
    result.innerText = result.innerText.replace(/"label_ids": .*?,/, `"label_ids": [],`);
    window.updateJSONResultBox(result);
  }
}

function setDate (date) {
  if (date) {
    result.innerText = result.innerText.replace(/"due_date": ".*?"/, `"due_date": "${date}"`);
    window.updateJSONResultBox(result);
  }
}
