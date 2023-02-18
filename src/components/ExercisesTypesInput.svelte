<script>
  import settings from './settings';
  import {capitalizeString} from './capitalizeString.js';

  const exercisesTypes = settings.exercisesTypes;
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

<select class="basis-1/2 p-2 bg-input-grey text-base rounded-xl  focus:outline-none focus:shadow-md focus:shadow-shadow-blue focus:transition-shadow transition-shadow invalid:text-placeholder" {value} name="exercisesTypes" placeholder="Exercícios" bind:this={selectElement} on:change={addSelectedToInput} required>
  <option value="" disabled selected hidden>Exercícios</option>
  {#each exercisesTypes as exerciseType}
    <option class="text-white" value={exerciseType.value}>{exerciseType.name}</option>
  {/each}
</select>