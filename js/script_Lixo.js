const RecolherLixo = (objLixo) => {
    const TonLixo = 220;
    const qtdLixo = parseInt(objLixo.lixo); 
    const ValordoLixo = TonLixo * qtdLixo;

    let CotaDeLixo = false;
    let premio = 0;

   
    if (qtdLixo < 1000) {
        CotaDeLixo = true;
    } else if (qtdLixo >= 1000 && qtdLixo < 10000) {
        premio = ValordoLixo * 0.08;
    } else if (qtdLixo >= 10000 && qtdLixo < 15000) {
        premio = ValordoLixo * 0.10;
    } else if (qtdLixo >= 15000 && qtdLixo < 25000) {
        premio = ValordoLixo * 0.15;
    } else {
        premio = ValordoLixo * 0.20;
    }

    const ResultadoFinal = ValordoLixo + premio;

    return {
        valor: ValordoLixo,
        premiodolixo: premio,
        cotaAbaixo: CotaDeLixo, 
        total: ResultadoFinal
    };
};

const FormEmpresa = document.querySelector('#dados-empresa');
const tabela = document.querySelector('#tabela');
const empresas = [];

FormEmpresa.addEventListener('submit', (evt) => {
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
    tabela.innerHTML = '';

    empresas.forEach((elem) => {
        const resultCalculo = RecolherLixo(elem);

        const valorFormatado = resultCalculo.valor.toFixed(2).replace('.', ',');
        const resultadoEnd = resultCalculo.total.toFixed(2).replace('.', ',');
        

        let textoPremio;
        if (resultCalculo.cotaAbaixo) {
            textoPremio = "Não atingiu";
        } else {
            textoPremio = "R$ " + resultCalculo.premiodolixo.toFixed(2).replace('.', ',');
        }

        tabela.innerHTML += `
            <tr>
                <td>${elem.nome}</td>
                <td>${elem.lixo}</td>
                <td>R$ ${valorFormatado}</td>
                <td>${textoPremio}</td>
                <td>R$ ${resultadoEnd}</td>
            </tr>
        `;
    });
}