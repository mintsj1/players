<script>
    let { data } = $props();
    console.log(data);
</script>

<h1>Players</h1>
<ul>
    {#each data.players as player}
        <li><a href="/players/{player.id}">{player.first_name} {player.last_name}</a></li>
    {/each}
</ul>