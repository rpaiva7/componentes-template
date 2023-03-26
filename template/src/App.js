
/* Após ter criado os componentes Garagem e Carro, chame 4 vezes o componente carro dentro do componente garagem. Por fim, chame o componente Garagem dentro do App.js, e veja que ele foi exibido na tela.
 */

/* Exercício de Fixação
Vamos seguir no exercício e adicionar mais quatro componentes a ele:
- Um componente Header;
- Um componente de Footer;
- Um componente de Redes Sociais;
- Um componente de Copywrite, que diz quem criou o site (você);
- Crie os quatro componentes em arquivos separados, e lembre-se de torná-los exportáveis.
- O Footer deve conter os componentes Redes Sociais e Copywrite.
- O App deve receber o Footer e o Header.
- Use a logo da Labenu no componente Header.
- Para estilizar, adicione as classes aos elementos dos componentes.*/


import React from "react";
import "./App.css";
import {Main} from "./components/Main";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

export default function App() {
  
  return (
    <div className="App">

      <Header/>
      <h1>Aula - Componentes React</h1>
      <Main/>
      <Footer/>
    </div>
  );
}


/* O export pode ficar tanto acima quanto abaixo do JSX */