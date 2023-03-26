
/* Criando um componente
Agora, crie um componente Carro, com a seguinte estrutura:
- Um h2 contendo o nome do carro;
- Uma lista não-ordenada contendo:
  - a cor;
  - o ano;
  - um texto dizendo se o carro é ou não flex.
 */

import React from "react"

function Carro() {
    return(
        <div>
            <h2>LandRover Discovery</h2>
            <ul>
              <li>Azul Petróleo</li>
              <li>2022</li>
              <li>Flex</li>
            </ul>
        </div>
    )
}

export default Carro