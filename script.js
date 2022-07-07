let listFigure = [];
let listPainting = [];
function createActionItem(nome, imagem, valor){
    listFigure.push({
        nome: nome,
        imagem: imagem,
        valor: valor
    })
    return addItemListFigure()
}
//---------------------------------------------
function createPaintingItem(nome, imagem, valor){
    listPainting.push({
        nome: nome,
        imagem: imagem,
        valor: valor
    })
    return addItemListPainting()
}
//---------------------------------------------
function tratarImagem(){
    let caminho = document.getElementById('inputImagem').value
    let caminhoTratado = '/imagens/' + caminho.substring(12)
    return caminhoTratado
}
//---------------------------------------------
function aviso(){
    alert("Para que a imagem apareça corretamente no catálogo é necessário que ela esteja no camiho 'm1-entrega-javascript-lojageek-Jhonatas-Matheus/imagens'")
}
//---------------------------------------------
function createActionItemUser(nome, imagem, valor){
    let op = document.querySelector('#typeItem').value
    if(op == 'Action figures'){
        listFigure.push({
        nome: document.getElementById('inputName').value,
        imagem: tratarImagem(),
        valor: document.getElementById('inputValue').value,
        
    })
    return addItemUser()
    }else if(op == 'Paintings'){
        listPainting.push({
            nome: document.getElementById('inputName').value,
            imagem: tratarImagem(),
            valor: document.getElementById('inputValue').value
    })
    
    return addItemUser()
}
}
//---------------------------------------------
function addItemListFigure(){
    for(let i =0 ; i < listFigure.length; i++){
        var x = document.createElement('li')
        x.setAttribute('class', 'itens')
        let n =document.createElement('h3')
        n.innerHTML = listFigure[i].nome
        let imagem = document.createElement('img')
        imagem.src = listFigure[i].imagem
        let v = document.createElement('p')
        v.innerHTML = 'R$' + listFigure[i].valor
        x.appendChild(imagem)
        x.appendChild(n)
        x.appendChild(v)
    }
    let y = document.querySelector('.catalogo__2')
       y.appendChild(x)
}
//---------------------------------------------
function addItemListPainting(){
    for(let i =0 ; i < listPainting.length; i++){
        var x = document.createElement('li')
        x.setAttribute('class', 'itens')
        let n =document.createElement('h3')
        n.innerHTML = listPainting[i].nome
        let imagem = document.createElement('img')
        imagem.src = listPainting[i].imagem
        let v = document.createElement('p')
        v.innerHTML = 'R$' + listPainting[i].valor
        x.appendChild(imagem)
        x.appendChild(n)
        x.appendChild(v)
    }
    let y = document.querySelector('.catalogo__1')
       y.appendChild(x)
}
//---------------------------------------------
function addItemUser(){
    let op = document.querySelector('#typeItem').value
    if(op == 'Action figures'){
        for(let i =0 ; i < listFigure.length; i++){
            var x = document.createElement('li')
            x.setAttribute('class', 'itens')
            let n =document.createElement('h3')
            n.innerHTML = listFigure[i].nome
            let imagem = document.createElement('img')
            imagem.src = listFigure[i].imagem
            let v = document.createElement('p')
            v.innerHTML = 'R$' + listFigure[i].valor
            x.appendChild(imagem)
            x.appendChild(n)
            x.appendChild(v)
           
        }
        let y = document.querySelector('.catalogo__2')
           y.appendChild(x)
    }else if(op == 'Paintings'){
        for(let i =0 ; i < listPainting.length; i++){
            var x = document.createElement('li')
            x.setAttribute('class', 'itens')
            let n =document.createElement('h3')
            n.innerHTML = listPainting[i].nome
            let imagem = document.createElement('img')
            imagem.src = listPainting[i].imagem
            let v = document.createElement('p')
            v.innerHTML = 'R$' + listPainting[i].valor
            x.appendChild(imagem)
            x.appendChild(n)
            x.appendChild(v)
           
        }
        let y = document.querySelector('.catalogo__1')
           y.appendChild(x)
    }
}
//---------------------------------------------
function showAddItem(){
    let novoItem = document.querySelector('.add__itens')
    novoItem.setAttribute('class', 'add__itens on')
}
//---------------------------------------------
function hiddenAddItem(){
    let novoItem = document.querySelector('.add__itens')
    novoItem.setAttribute('class', 'add__itens off')
}
//---------------------------------------------
//Itens que já possuem na loja:
createActionItem('animewoman','/assets/img/actions/animewoman.jpg','95,00')
createActionItem('dragonballpersonagem','/assets/img/actions/dragonballpersonagem.jpg','95,00')
createActionItem('starwarspersonagem','/assets/img/actions/starwarspersonagem.jpg','95,00')
createPaintingItem('clock','/assets/img/painting/clock.jpg','200,00')
createPaintingItem('gamepad','/assets/img/painting/gamepad.jpg','150,00')
createPaintingItem('personagem','/assets/img/painting/personagem.jpg','250,00')