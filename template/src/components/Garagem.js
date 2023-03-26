
/* Criando um compenente
Vamos criar uma garagem. Para isso, vamos criar dois componentes:
- O primeiro componente será o componente Garagem.
- O segundo componente será o componente Carro.

Para começar, crie um componente Garagem.
O componente Garagem deve retornar um h1, dizendo Garagem de seu-nome.
Nossa garagem possuirá apenas um modelo de carro.
 */

import React from "react"
import Carro from "./Carro";

export function Garagem() {
    return (
        <div>
            <h1>Garagem do Estádio</h1>
            <Carro />
            <Carro />
            <Carro />
            <Carro />
        </div>
    )
}




/* O nome da function sempre precisa ser o nome do arquivo componente criado. */