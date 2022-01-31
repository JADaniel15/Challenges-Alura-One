
var botaoCodificar = document.querySelector("#btn-codificar");
var botaoDecodificar = document.querySelector("#btn-decodificar");
var botaoCopiar = document.querySelector("#btn-copy");

// botao e funçao de codificar
botaoCodificar.addEventListener("click", function(event){
    event.preventDefault();

    
    let textoCapturado = inputTexto.value;
    let textoMinusculo = textoCapturado.toLowerCase()

    if(!textoCapturado.match(/enter|imes|ai|ober|ufat/)){
        textoCapturado = textoMinusculo.replaceAll('e', 'enter');
        textoCapturado = textoCapturado.replaceAll('i', 'imes');
        textoCapturado = textoCapturado.replaceAll('a', 'ai');
        textoCapturado = textoCapturado.replaceAll('o', 'ober');
        textoCapturado = textoCapturado.replaceAll('u', 'ufat');
        
        
        document.querySelector('#msg').value = textoCapturado;
     
        return textoCapturado;
    }    


    });// botao e funçao de decodificar
botaoDecodificar.addEventListener("click", function(event){
	event.preventDefault();
	textoCapturado = inputTexto.value;
    textoCapturado = textoCapturado.replaceAll('enter', 'e');
    textoCapturado = textoCapturado.replaceAll('imes', 'i');
    textoCapturado = textoCapturado.replaceAll('ai', 'a');
    textoCapturado = textoCapturado.replaceAll('ober', 'o');
    textoCapturado = textoCapturado.replaceAll('ufat', 'u');
    
    
    document.querySelector('#msg').value = textoCapturado;

    return textoCapturado;
}
    );
    // botao de copiar
botaoCopiar.addEventListener('click', function() {
    navigator.clipboard.writeText(document.querySelector('#msg').value);
            inputTexto.value = '';
    })


