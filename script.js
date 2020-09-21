function tabuar() {
    var numero = document.querySelector('input#number')
    var tab = document.querySelector('select#res')

    if (numero.value.length == 0) {
        alert('Por favor digite um número!')    
    } else {
        var n = Number(numero.value)
        var cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }
}