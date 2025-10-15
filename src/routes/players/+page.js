export async function load({ fetch }) {
    const response = await fetch('https://my.api.mockaroo.com/players.json?key=1c2be0a0')
    const players = await response.json();
    return { players };
}