<script>
    let { data } = $props();
    console.log(data);
</script>

<h1>Player Details</h1>
<p>Player ID: {data.id}</p>
<p>Player Name: {data.name}</p>
<p>Player Age: {data.age}</p>