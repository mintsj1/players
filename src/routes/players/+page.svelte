<script>
    let { data } = $props();
    console.log(data);
</script>

<h1>Players</h1>
<ul>
    {#each data.players as player}
        <li>{player.first_name} - {player.email}</li>
    {/each}
</ul>