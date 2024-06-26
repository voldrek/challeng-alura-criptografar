function criptografar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = btoa(inputText); // Codifica o texto para Base64
    document.getElementById('outputText').value = outputText;
}

function descriptografar() {
    let inputText = document.getElementById('outputText').value;
    try {
        let outputText = atob(inputText); // Tenta decodificar o texto de Base64 para texto normal
        document.getElementById('outputText').value = outputText; // Define o resultado da descriptografia no outputText
    } catch (error) {
        console.error('Erro ao descriptografar:', error);
        alert('Erro ao descriptografar o texto. Certifique-se de que o texto está em Base64 válido.');
    }
}

function copiarTexto() {
    let outputTextarea = document.getElementById('outputText');
    
    // Seleciona o texto dentro do textarea
    outputTextarea.select();
    outputTextarea.setSelectionRange(0, 99999); // Para dispositivos móveis
    
    // Copia o texto selecionado para a área de transferência
    document.execCommand('copy');
    
    // Avisa o usuário que o texto foi copiado
    alert('Texto copiado para a área de transferência!');
}
