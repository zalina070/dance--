// Функция для поиска изображений по танцевальному стилю
async function searchImages(randomOne = false) {
    const select = document.getElementById("danceSelect");
    const input = document.getElementById("customDance");

    let query = input.value || select.value;

    if (!query) {
        alert("Please enter or select a dance style!");
        return;
    }

    const apiKey = "F_vHuLfFcEBDIbzCeh06HkfAC4EWaEcSQsUinVzU-E8";
    const count = randomOne ? 1 : 9;
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${apiKey}&per_page=${count}`;

    try {
        // Запрос к API Unsplash для поиска изображений
        const response = await fetch(url);
        const data = await response.json();

        const imagesDiv = document.getElementById("images");
        imagesDiv.innerHTML = ""; // Очищаем контейнер для новых изображений
        if (data.results.length === 0) {
            imagesDiv.innerHTML = "<p>No images found 😢</p>"; // Если картинок не найдено
            return;
        }
