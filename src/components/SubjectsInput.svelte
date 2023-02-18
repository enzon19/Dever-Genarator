<script>
  import settings from './settings';
  import {capitalizeString} from './capitalizeString.js';

  const subjects = settings.subjects;
  export let value = "";
  export let homeworkName = "";

  let selectElement;
  function triggerShine(node) {
    node.animate(
      [
        { boxShadow: '0 0 0px #024d758e' },
        { boxShadow: '0 0 10px #024d758e' },
        { boxShadow: '0 0 0px #024d758e' }
      ],
      {
        duration: 1000,
        easing: 'ease'
      }
    );
  }

  function addSelectedToInput() {
    homeworkName = capitalizeString(homeworkName += selectElement.options[selectElement.selectedIndex].text, undefined, settings.fixSubjectsNames);
    value = selectElement.value;
  }

  // Animar se valor for updated
  $: if (value) triggerShine(selectElement);
</script>

<select class="basis-1/2 p-2 bg-input-grey text-base rounded-xl focus:outline-none focus:shadow-md focus:shadow-shadow-blue focus:transition-shadow transition-shadow invalid:text-placeholder" {value} name="subjects" placeholder="Matéria" bind:this={selectElement} on:change={addSelectedToInput} required>
  <option value="" disabled selected hidden>Matéria</option>
  {#each subjects as subject}
    <option class="text-white" value={subject.todoistID}>{subject.name}</option>
  {/each}
</select>