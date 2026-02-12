async function getJson() {
    const factElement = document.getElementById("fact");

    factElement.textContent = "Loading Pokémon fact...";

    // await new Promise(resolve => setTimeout(resolve, 2000));

    try {
        const response = await fetch('https://pokefacts.vercel.app/');
        const data = await response.json();
        console.log(data)
        factElement.textContent = data.data[0];
    } catch (error) {
        factElement.textContent = "Failed to load fact. Try again!";
    }
}


document.getElementById("newFactBtn").addEventListener("click", getJson);
