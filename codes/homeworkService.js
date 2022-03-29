removeIfExists();

function removeIfExists () {
  if (document.cookie.split("=")[1]) document.getElementById("tokenSettings").remove();
}

function addHomework () {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + document.cookie.split("=")[1]);
  myHeaders.append("Content-Type", "application/json");

  const raw = document.getElementById("result").innerText.replace(/\n/g, "");
  const referenceElement = document.getElementsByTagName("pre")[0]

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.todoist.com/rest/v1/tasks", requestOptions)
    .then(response => response.text())
    .then(result => referenceElement.insertAdjacentHTML('afterend', `<div onclick="window.location.reload()" class="goodWarning"><ion-icon name="checkmark-circle"></ion-icon>Adicionado com sucesso!</div>`))
    .catch(error => referenceElement.insertAdjacentHTML('afterend', `<div onclick="window.location.reload()" class="badWarning"><ion-icon name="alert"></ion-icon><p style="margin: 0px !important;">Eita. Deu erro. ${error}</p></div>`));
}

function addToken () {
  document.cookie = "id=" + document.getElementById("token").value + "; expires=Fri, 09 Dec 2022 23:00:00 UTC; path=/";
  document.getElementById("tokenSettings").remove();
}
