<script>
	import HomeworkNameInput from "../components/HomeworkNameInput.svelte";
	import SubjectsInput from "../components/SubjectsInput.svelte";
	import ExercisesTypesInput from "../components/ExercisesTypesInput.svelte";
	import DueInput from "../components/DueInput.svelte";
	// import JSONOutput from "../components/jsonOutput.svelte";
	import AddToTodoistButton from "../components/AddToTodoistButton.svelte";
	import AddToken from "../components/AddToken.svelte";

	export let inputs = {subject: "", exerciseType: ""};
	let homeworkName = "";
	let dueDate = "";
</script>

<h2 class="text-2xl font-bold text-center px-4 pt-4">Gerador de Dever</h2>
<p class="text-center text-sm mb-4">v2.0.2 • Feito por enzon19</p>
<form class="text-center flex flex-col m-2 gap-2 flex-wrap">
  <HomeworkNameInput bind:inputs bind:homeworkName name="task" placeholder="Nome do dever"></HomeworkNameInput>
  <div class="flex gap-2">
    <SubjectsInput bind:value={inputs.subject} bind:homeworkName></SubjectsInput>
    <ExercisesTypesInput bind:value={inputs.exerciseType} bind:homeworkName></ExercisesTypesInput>
  </div>
  <DueInput bind:subject={inputs.subject} bind:valueInput={dueDate}></DueInput>
	<AddToTodoistButton {homeworkName} {dueDate} subjectID={inputs.subject}></AddToTodoistButton>
	<!-- <JSONOutput {homeworkName} {dueDate} subjectID={inputs.subject}></JSONOutput> -->
</form>
<AddToken/>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.back-grey);
		color: theme(colors.white);
	}
</style>