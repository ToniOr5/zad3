document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke');
    const jokeButton = document.getElementById('joke-button');
    const categorySelect = document.getElementById('category-select');

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/categories');
            const categories = await response.json();
            categories
                .filter(category => category !== 'explicit')
                .forEach(category => {
                    const option = document.createElement('option');
                    option.value = category;
                    option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
                    categorySelect.appendChild(option);
                });
        } catch (error) {
            jokeContainer.textContent = 'Nešto je pošlo po zlu kod dohvata kategorija.';
        }
    };

    const fetchJoke = async (category) => {
        try {
            const url = category ? `https://api.chucknorris.io/jokes/random?category=${category}` : 'https://api.chucknorris.io/jokes/random';
            const response = await fetch(url);
            const data = await response.json();
            jokeContainer.textContent = data.value;
        } catch (error) {
            jokeContainer.textContent = 'Nešto je pošlo po zlu kod generiranja šale.';
        }
    };

    jokeButton.addEventListener('click', () => {
        const selectedCategory = categorySelect.value;
        fetchJoke(selectedCategory);
    });

    fetchCategories();
});

