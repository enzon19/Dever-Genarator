<!-- EM BREVE DE NOVO PROJETO -->

<script>
  import settings from './settings';
  import { onMount } from 'svelte';

  import Prism from 'prismjs';
  import 'prismjs/themes/prism.css';
  import 'prismjs/components/prism-json.js';
  import 'prismjs/themes/prism-okaidia.css';

  // Add any other language files you need

  // onMount(() => {
  //   Prism.highlightAll();
  // });

  export let homeworkName, subjectID, dueDate;

  $: apiObject = {
    content: homeworkName,
    project_id: settings.projectID,
    section_id: settings.sectionID,
    label_ids: [subjectID],
    due_date: dueDate 
  }

  $: if (typeof window !== 'undefined' && apiObject) Prism.highlightAll();
</script>

<pre><code class="language-json prism-tomorrow-night" style="font-size: 13px; white-space: pre-wrap;">{JSON.stringify(apiObject, null, 2)}</code></pre>

<!-- <script>
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-tomorrow.css';
  import 'prismjs/components/prism-javascript';

  let code = 'console.log("Hello, world!");';

  // $: {
  //   Prism.highlightAll();
  // }
</script>

<pre>
  <code class="language-javascript prism-tomorrow-night">{code}</code>
</pre> -->