<script>
export let initialCount = 0;
</script>

<button on:click={() => initialCount++}>
{initialCount}
</button>

<style>
button {
  color: red;
}
</style>