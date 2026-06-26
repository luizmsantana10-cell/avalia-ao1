
const RecolherLixo = (objLixo) => {
    const TonLixo = 220;
    const ValordoLixo = TonLixo * parseInt(objLixo.lixo);

    let CotaDeLixo = false;
    let premio = 0;

    if (objLixo.lixo < 1000) {
        CotaDeLixo = true;
    } else {
        if(objLixo.lixo >= 1000 && objLixo.lixo < 10000 ){
            premio = ValordoLixo * 0.08;
        } else if(objLixo.lixo >= 10000 && objLixo.lixo < 15000){
            premio = ValordoLixo * 0.10;
        } else if(objLixo.lixo >= 15000 && objLixo.lixo < 25000){
            premio = ValordoLixo * 0.15;
        } else{
            premio = ValordoLixo * 0.20;
        }
    }

    const ResultadoFinal = ValordoLixo + (CotaDeLixo ? 0 : premio);

    return {
        valor: ValordoLixo,
        premiodolixo: CotaDeLixo ? 0 : premio,
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
        const PremioFormatado = resultCalculo.premiodolixo.toFixed(2).replace('.', ',');
        const resultadoEnd = resultCalculo.total.toFixed(2).replace('.', ',');

        tabela.innerHTML += `
            <tr>
                <td>${elem.nome}</td>
                <td>${elem.lixo}</td>
                <td>R$ ${valorFormatado}</td>
                <td>R$ ${PremioFormatado}</td>
                <td>R$ ${resultadoEnd}</td>
            </tr>
        `;
    });
};