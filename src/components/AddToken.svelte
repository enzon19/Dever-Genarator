<script>
	import { getCookie, setCookie } from 'svelte-cookie';
  import { onMount } from 'svelte';

  let value;
  let token = "token";

  onMount(() => {
    token = getCookie('token');
  });

  function saveToken() {
    setCookie('token', value, 365, false);
    token = value;
  }
</script>

{#if !token}
  <form class="text-center flex flex-row my-4 m-2 gap-2">
    <input class="p-2 basis-2/3 bg-input-grey text-base rounded-xl focus:outline-none focus:shadow-md focus:shadow-shadow-blue focus:transition-shadow transition-shadow" autocomplete="off" type="text" bind:value={value} placeholder="Todoist Token">
    <input class="p-2 basis-1/3 text-base rounded-xl bg-dark-blue hover:bg-even-darker-blue hover:transition-colors transition-colors cursor-pointer" type="button" value="Salvar token" on:click|preventDefault={saveToken}>
  </form>
{/if}