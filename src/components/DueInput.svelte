<script>
  import settings from './settings';
  import moment, * as moments from 'moment';

	export let subject = "";
  export let value = "";
  let valueInput = "";
  const schedule = settings.classSchedule;
  const todayWeekdayIndex = moment().format('d');

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
  
  function getNextDateBasedOnWeekdayIndex(dayIndex) {
    let today = moment();
    
    // adaptado do StackOverFlow
    today.add((dayIndex - 1 - today.day() + 7) % 7 + 1, 'days');

    // Settings
    if (settings.dueDateOneDayBefore) today.subtract(1, 'd');
    const settingsTime = moment(settings.time, 'HH:mm', true);
    if (settingsTime.isValid()) {
      today.set({ hour: settingsTime.hours(), minute: settingsTime.minutes(), second: '01' });
    } else {
      today.startOf('day');
    }

    return today;
  }

  // adaptado do ChatGPT
  function findClosestDay(days, today) {
    // Criar uma array com a diferença de hoje pro dia do item atual
    const differences = days.map(day => {
      const difference = day.dayOfWeek - today;
      return (difference + 7) % 7; // Use modular arithmetic to wrap around the week.
    });

    // Pegar o dia que tem menor diferença
    const lowestDifference = Math.min(...differences);
    const lowestDifferenceIndex = differences.indexOf(lowestDifference);

    // Verifique se o dia mais próximo é o dia atual.
    if (lowestDifference == 0) {
      // Se o dia mais próximo for o dia atual, retorna o dia seguinte.
      const nextIndex = (lowestDifferenceIndex + 1) % days.length;
      return days[nextIndex];
    } else {
      // Se o dia mais próximo não for o dia atual, retorne o dia mais próximo.
      return days[lowestDifferenceIndex];
    }
  }

  $: if (subject) value = getNextDateBasedOnWeekdayIndex(findClosestDay(schedule.filter(day => day.subjectsIDs.includes(subject)), todayWeekdayIndex).dayOfWeek);
  $: if (value) valueInput = value.format('yyyy-MM-DD');
  $: if (valueInput) triggerShine(selectElement);
</script>

<input class="py-1.5 px-2 bg-input-grey text-base rounded-xl focus:outline-none focus:shadow-md focus:shadow-shadow-blue focus:transition-shadow transition-shadow invalid:text-placeholder w-full" type="date" name="due" bind:this={selectElement} bind:value={valueInput} required>

<style lang="postcss">
  input[type=date]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
</style>