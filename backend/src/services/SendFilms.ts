interface IName {
    name: string
}

interface IStudio {
    name: string
}

interface IFilm{
    filme: IName,
    studio: IStudio,
    atores: string[]
}

interface ISend{
    sendFilm(request: IFilm): void;
}

class SendFilms implements ISend{
    sendFilm({filme, studio, atores}: IFilm){
        console.log(`Cadastrado com sucesso! Filme: ${filme.name} do estudio: ${studio.name}`)
        console.log('Atores:')

        atores.forEach(ator => {
            console.log(' - ', ator);            
        });
    }
}

export default SendFilms;