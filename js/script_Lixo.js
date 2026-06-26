import { RecolherLixo } from "./script.js";

const FormEmpresa = document.querySelector('#dados-empresa');

const tabela = document.querySelector('#tabela');

const empresas = [];

FormEmpresa.addEventListener('submit',(evt) => {
    evt.preventDefault();

    const dadosEmpresa = new FormData(FormEmpresa);

    const empresa = {

        nome: dadosEmpresa.get('nome'),
        lixo: dadosEmpresa.get('lixo')
    };
    addEmpresa(empresa);
    FormEmpresa.reset();
});

const addEmpresa = (objLixo) => {
    empresas.push(objLixo);
    listEmpresas();
};

const listEmpresas = () => {
    tbodyLista.innerHTML = '';

    empresas.forEach((elem, i) => {
        const resultCalculo = RecolherLixo(elem);

        const valorFormatado = resultCalculo.valor.toFixed(2).replace('.', ',');
        const PremioFormatado = resultCalculo.premiodolixo.toFixed(2).replace('.', ',');

        const resultadoEnd = resultCalculo.total.toFixed(2).replace('.', ',');

        tbodyLista.innerHTML += `
            <tr>
                <td>${elem.nome}</td>
                <td>${elem.lixo}</td>
                <td>${valorFormatado}</td>
                <td>${PremioFormatado}</td>
                <td>${resultadoEnd}</td>
                </tr>

                 `;
    
    }
        )}
    
    
