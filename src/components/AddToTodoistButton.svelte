<script>
  import settings from './settings';
  import IoIosCheckmarkCircle from 'svelte-icons/io/IoIosCheckmarkCircle.svelte'
  import IoIosWarning from 'svelte-icons/io/IoIosWarning.svelte';
  import { getCookie } from 'svelte-cookie';

  export let homeworkName, subjectID, dueDate;
  let todoistAnswer = new Promise((resolve, reject) => {});
  let loading = false;
  
  async function addToTodoist() {
    const token = getCookie('token');
    if (!homeworkName || !token) throw `Eita. Deu erro. Verifique o token e os campos.`;
    

    const subjectName = settings.subjects.find(subject => subject.todoistID == subjectID)?.name.replace(/ /g, "_") || "";

    const isNoDate = dueDate.hour() == 0 && dueDate.minute() == 0 && dueDate.second() == 0 && dueDate.millisecond() == 0;
    const date = isNoDate ? { due_date: dueDate.format('yyyy-MM-DD') } : { due_datetime: dueDate.format('YYYY-MM-DDTHH:mm:ss.X') };

    const apiObject = {
      content: homeworkName,
      project_id: settings.projectID,
      section_id: settings.sectionID,
      labels: [subjectName],
      ...date
    };

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(apiObject),
      redirect: 'follow'
    };

    loading = true;
    const res = await fetch("https://api.todoist.com/rest/v2/tasks", requestOptions);
    if (res.ok) {
      loading = false;
      return 'OK.';
    } else {
      loading = false;
      throw `Eita. Deu erro. Verifique o token. Erro: ${await res.text()} (${res.status})`;
    }
  }
</script>

<input class="p-2 text-base rounded-xl bg-dark-blue hover:bg-even-darker-blue hover:transition-colors transition-colors cursor-pointer" type="submit" value="Adicionar dever no Todoist" on:click|preventDefault={() => todoistAnswer = addToTodoist()}>

{#await todoistAnswer}
  {#if loading}
    <span>Carregando...</span>
  {/if}
{:then}
  <div on:keydown={() => window.location.reload()} on:click={() => window.location.reload()} class="p-3 rounded-xl bg-good-warning-green cursor-pointer flex items-center justify-center">
    <div class="w-7 mr-3 inline-block"><IoIosCheckmarkCircle/></div>
    Adicionado com sucesso!
  </div>
{:catch error}
  <div on:keydown={() => window.location.reload()} on:click={() => window.location.reload()} class="p-3 rounded-xl bg-bad-warning-red cursor-pointer flex items-center justify-center">
    <div class="w-7 mr-3 inline-block"><IoIosWarning/></div>
    {error}
  </div>
{/await}