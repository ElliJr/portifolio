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

                card.appendChild(img)                
                container.appendChild(card)
            })
        })
}
carregar()