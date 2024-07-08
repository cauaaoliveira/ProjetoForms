function Enviar(){

    let nomePessoa = document.getElementById('nome').value;
    let IdadePessoa = document.getElementById('idade').value;
    let CidadeEntrevistado = document.getElementById('cidade').value;
    let EstadoEntrevistado = document.getElementById('estado').value;
    let GeneroEscolhido = document.querySelector("input[name='genero']:checked").value;

    alert('Seu nome é: ' + nomePessoa+ '\n' 
    + 'Sua idade é: ' + IdadePessoa + '\n'
    + 'Sua cidade é: ' + CidadeEntrevistado + '\n'
    + 'estado : ' + EstadoEntrevistado + '\n'
    + 'Você se declara: ' + GeneroEscolhido+ '\n');

    
}