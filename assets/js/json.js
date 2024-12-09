function carregar(){
    fetch("dados.json")
        .then(response => response.json())
        .then(dados =>{
            const container = document.querySelector("#desaines")

            dados.map(dado =>{
                const card = document.createElement("div")
                card.classList.add("card")

                const img = document.createElement("img");
                img.src = dado.imagem
                img.alt = dado.id

                const id = document.createElement("p")
                id.textContent = `ID: ${dado.id}`

                card.appendChild(img)
                card.appendChild(id)
                container.appendChild(card)
            })
        })
}
carregar()