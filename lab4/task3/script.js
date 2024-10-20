const fruits = ['apple', 'banana', 'cherry', 'date', 'grape', 'kiwi', 'lemon', 'orange'];

document.getElementById('search').addEventListener('input', async (event) => {
    const query = event.target.value.toLowerCase();
    const resultsElement = document.getElementById('results');

    // Імітація затримки для асинхронного пошуку
    const filteredFruits = await new Promise(resolve => setTimeout(() => {
        resolve(fruits.filter(fruit => fruit.includes(query)));
    }, 300));

    resultsElement.innerHTML = filteredFruits.map(fruit => `<li>${fruit}</li>`).join('');
});
