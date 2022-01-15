import { carros } from './carros.js';

let carrosTela = carros;

const sectionCarros = document.getElementById('carros');
const inputBusca = document.getElementById('busca');

function atualizaTela() {
    sectionCarros.innerHTML = '';
    carrosTela.forEach(carro => sectionCarros.innerHTML += templateCarro(carro));
};

function templateCarro(carro) {
    return `
    <div class="carro">
        <p>${carro.marca} - ${carro.modelo}</p>
    </div>`;
};

function realizaPesquisa(evento) {
    let pesquisa = evento.target.value.toUpperCase();

    let resultadoPesquisa = carros.filter(carro => {
        return carro.marca.toUpperCase().includes(pesquisa) || 
        carro.modelo.toUpperCase().includes(pesquisa);
    });

    if (resultadoPesquisa.length < 1) {
        carrosTela = [];
        atualizaTela();
    } else {
        carrosTela = resultadoPesquisa;
        atualizaTela();
    }
};

document.onload = atualizaTela();
inputBusca.oninput = (e) => realizaPesquisa(e);