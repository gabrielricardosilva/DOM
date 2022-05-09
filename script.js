const buttonSave = document.querySelector('#save')

const addItem = () =>{
        const area = document.getElementById('area')
        const bairro = document.getElementById('bairro')
        const numero = document.getElementById('numero')
        const cidade = document.getElementById('cidade')

        
        const criarItemLista = document.createElement('li')
        const lista = document.getElementById('ul')
        lista.appendChild(criarItemLista)

    
        const itemLista = lista.lastChild
        itemLista.innerHTML = `${area.value}m², número ${numero.value}( ${bairro.value} - ${cidade.value} )   ` 
        
        
        const createButtonRemove = document.createElement('button')
        itemLista.appendChild(createButtonRemove)

        const buttonRemove = itemLista.lastChild
        buttonRemove.innerHTML = 'Remover'

        
        area.value = ``
        bairro.value = ``
        numero.value = ``
        cidade.value = ``
        area.focus()

        
        const removeItem = () =>{
            buttonRemove.parentNode.remove()
        }
        buttonRemove.addEventListener('click', removeItem)
}
        
    
    buttonSave.addEventListener('click', addItem)