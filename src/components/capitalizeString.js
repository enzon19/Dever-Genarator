export function capitalizeString(inputString, replaceMap = {
  "Do ": "do ",
  "Da ": "da ",
  "De ": "de ",
  "E ": "e ",
  "Aos ": "aos ",
  "Pela ": "pela ",
  "Pelo ": "pelo ",
  "Ao ": "ao ",
  "Pelas ": "pelas ",
  "Pelos ": "pelos ",
  "Dos ": "dos ",
  "Das ": "das ",
  "Com ": "com "
}, merge) {
  if (merge && replaceMap) replaceMap = {...replaceMap, ...merge};

  const regex = new RegExp(Object.keys(replaceMap).join("|"),"g");
  const hasSpaceInTheEnd = inputString[inputString.length - 1] == " ";
  inputString = inputString.trim();

  return inputString
    .toLowerCase()
    .split(" ")
    .reduce((accumulator, current) => accumulator + " " + current[0].toUpperCase() + current.substr(1), "")
    .substring(1)
    .replace(regex, matched => replaceMap[matched])
    .replace(/^\w/, c => c.toUpperCase()) + (hasSpaceInTheEnd ? " " : "");
}