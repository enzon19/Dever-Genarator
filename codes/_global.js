function capitalize (str, obj, merge) {
  const defaultReplace = {"Do ": "do ", "Da ": "da ", "De ": "de ", "E ": "e ", "Aos ": "aos ", "Pela ": "pela ", "Pelo ": "pelo ", "Ao ": "ao ", "Pelas ": "pelas ", "Pelos ": "pelos ", "Dos ": "dos ", "Das ": "das ", "Com ": "com "};

  if (!obj) obj = defaultReplace;
  if (merge && obj) obj = {...defaultReplace, ...merge};
  let listToReplace = new RegExp(Object.keys(obj).join("|"),"g");

  return str.toLowerCase().split(" ").reduce((a, c) => a + " " + c[0].toUpperCase() + c.substr(1), "").substring(1).replace(listToReplace, function(matched) {
    return obj[matched];
  });
}

function updateJSONResultBox (result) {
  result.innerHTML = result.innerHTML.replace(/[<]br[/]?[>]/gi,"\n");
  window.Prism.highlightAll();
}

window.updateJSONResultBox = updateJSONResultBox;
window.capitalize = capitalize;