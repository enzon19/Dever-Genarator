<script>
  import settings from './settings';
  import {capitalizeString} from './capitalizeString.js';

  export let name = "";
  export let placeholder = "";
	export let inputs = {subject: "", exerciseType: ""};

	export let homeworkName = "";
  const subjects = settings.subjects;
  const exercisesTypes = settings.exercisesTypes;

  // Array of objects with at least "name" as property
  function lookForTermsOnText(text, terms, property) {
    const termsAsRegex = new RegExp(terms.map(term => term.name).join("|"));
    const foundTermsInInput = text.match(termsAsRegex);
    if (!foundTermsInInput) return "";
    const firstTermFound = foundTermsInInput[0];
    const foundTermObject = terms.find(subject => subject.name == firstTermFound);
    return foundTermObject[property];
  }

  function checkInput() {
		if (homeworkName) homeworkName = capitalizeString(homeworkName, undefined, settings.fixSubjectsNames);
    inputs.subject = lookForTermsOnText(homeworkName, subjects, "todoistID");
    inputs.exerciseType = lookForTermsOnText(homeworkName, exercisesTypes, "value");
	}
</script>


<input class="p-2 bg-input-grey text-base rounded-xl focus:outline-none focus:shadow-md focus:shadow-shadow-blue focus:transition-shadow transition-shadow" autocomplete="off" type="text" {name} {placeholder} bind:value={homeworkName} on:keyup={checkInput} required>