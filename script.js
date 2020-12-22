window.addEventListener("DOMContentLoaded", function(){
    let botones = document.getElementsByClassName("btn")
    console.log(botones)
    for(let boton of botones){
        boton.addEventListener("click", function(){
            let dialogos = document.getElementsByClassName("dialogo")
            for (let dialogo of dialogos) {
                dialogo.remove()
            }
            console.log(boton.parentNode.offsetLeft)
            let posicionx = parseInt(boton.parentNode.offsetLeft) + 185
            let posiciony = boton.offsetTop + 100
            console.log(posiciony)
            let div = document.createElement("div")
            div.className = "dialogo"
            div.style.top = posiciony + "px"
            div.style.left = posicionx + "px"
            document.body.appendChild(div)
            setTimeout(()=>[
                div.style.opacity = "100"                
            ], 100)
        })
    }
})