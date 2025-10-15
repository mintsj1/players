export async function load({ params, fetch }) {
    const response = await fetch(`https://my.api.mockaroo.com/player/${params.id}?key=1c2be0a0`)
    const players = await response.json();
    return { players };
}