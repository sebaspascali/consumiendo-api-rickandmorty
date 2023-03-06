function getCharacters (done) {
    const results =fetch ("https://rickandmortyapi.com/api/character");

    results
    .then (response => response.json())
    .then(data => {
        done(data)
    });
}

getCharacters(data => {
    
    data.results.forEach(personaje => {
        
        const article = document.createRange().createContextualFragment(`
        
    <article>

        <div class="image-container">
            <img src="${personaje.image}" alt="personaje">
        </div>

        <h2>${personaje.name}</h2>

        <div class="description">
        <span>Status: ${personaje.status}</span>
        <span>Specie: ${personaje.species}</span>
        </div>
        
        <div class="description">
        <span>Sex: ${personaje.gender}</span>
        <span>Location: ${personaje.location.name}</span>
        </div>       
       
    </article>
        
        `)
        
        const main = document.querySelector("main");
        main.append(article);

    });
})