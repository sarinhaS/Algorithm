const prompt = require('prompt-sync')()
const lista = []
let sair = false

while(sair == false){
    if(sair === false){
        console.log("+===========================+\n+ CATÁLOGO DE SÉRIES/ANIMES +\n+===========================+\n")
        console.log("Menu Principal (Você possui", lista.length, "registros):\n")
        console.log("O que deseja fazer?\n")
        console.log("1. Adicionar Série/Anime\n2. Remover Série/Anime\n3. Visualizar Lista\n4. Buscar por Gênero\n5. Buscar por Status\n6. Sair\n")
        let opcao = Number(prompt("Escolha uma opção: "))
        console.clear()

        if(opcao == 1){
            let adiciona = adicionarAnime()
            lista.push(adiciona)

        }else if(opcao == 2){
            for(let i in lista){
                let titulo = removerAnime()
                if(titulo == lista[i].titulo){
                    lista.splice(i-1, 1)
                }
            }
            console.clear()

        }else if(opcao == 3){
            console.log("+===========================+\n+ SUA LISTA DE SÉRIES/ANIMES +\n+===========================+\n")
            console.log(lista)
            let continuar = prompt("pressione o enter para continuar: ")        
            console.clear()

        }else if(opcao == 4){
            
            console.log("+===========================+\n+     BUSQUE PELO GÊNERO     +\n+===========================+\n")
            let buscargen = buscarGenero()
            console.log("\n Resultados para o gênero: ", buscargen, "\n")
            for(let i in lista){
                if(buscargen == lista[i].genero){
                    console.log("Título: ", lista[i].titulo)
                }
            }

            continuar = prompt("+ Pressione o ENTER para continuar: ")  
            console.clear()

        }else if(opcao == 5){
            console.log("+===========================+\n+     BUSQUE PELOS STATUS   +\n+===========================+\n")
            let buscarstatus = buscarStatus()
            console.log("\n Resultados para o gênero: ", buscarstatus, "\n")
            for(let i in lista){
                if(buscarstatus == lista[i].status){
                    console.log("Título: ", lista[i].titulo)
                }
            }
            continuar = prompt("pressione o enter para continuar: ") 
            console.clear()

        }else if(opcao == 6){
            sair = true
        }
    
    }
}


function adicionarAnime(){

    let titulo = prompt("Título: ")
    let genero = prompt("Gênero: ")
    let episodios = Number(prompt("Quantidade de Episódios: "))
    console.log("Status: \n1. Assistido\n2. Assistindo\n3. Planejado\n")
    let status = Number(prompt("escolha o status (1-3): "))
    let x = {
        titulo : titulo,
        genero : genero,
        episodios : episodios,
        status : status,
    }
    return x
}

function removerAnime(){
    let titulo = prompt("Digite o título: ")
    return titulo
}

function buscarGenero(){
    let genero = prompt("Digite o gênero: ")
    return genero
}

function buscarStatus(){
    let status = Number(prompt("Digite o status: "))
    return status
}