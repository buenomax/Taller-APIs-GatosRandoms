document.addEventListener("DOMContentLoaded", function() {
    const catImage = document.getElementById("cat-image");
    const newCatButton = document.getElementById("new-cat-button");

    // Función para cargar una imagen aleatoria de un gato
    function fetchRandomCatImage() {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data => {
                const imageUrl = data[0].url;
                catImage.src = imageUrl;
            })
            .catch(error => {
                console.error("Error fetching cat image:", error);
            });
    }

    // Cargar una imagen aleatoria al cargar la página
    fetchRandomCatImage();

    // Actualizar la imagen al hacer clic en el botón
    newCatButton.addEventListener("click", fetchRandomCatImage);
});
