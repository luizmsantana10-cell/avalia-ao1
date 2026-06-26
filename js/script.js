const RecolherLixo = (objLixo) => {
    const TonLixo = 220;

    const ValordoLixo = TonLixo * parseInt(objLixo.lixo);

    let CotaDeLixo = false;

    let premio = 0;

    if (objLixo.lixo < 1000 ) {
        CotaDeLixo =true;
    } else {

        if(objLixo.lixo >= 1000 && objLixo.lixo < 10000 ){

            premio =ValordoLixo * 0.08

        } else if(objLixo.lixo >= 10000 && objLixo.lixo < 15000){

            premio =ValordoLixo * 0.10

        } else if(objLixo.lixo >= 15000 && objLixo.lixo <25000){

            premio =ValordoLixo * 0.15

        } else{
            premio =ValordoLixo * 0.20
        }
    }

    const ResultadoFinal = ValordoLixo + (CotaDeLixo ? 0 : premio);

    return {
        valor: ValordoLixo,
        premiodolixo: CotaDeLixo ? 0 : premio,
        total: ResultadoFinal
        

    };

}

export {RecolherLixo}