
import { useState } from 'react';
import './App.css';

type ConteudoProps = {
    text: string;
    img: any;

};
const Conteudo = ({ text, img }: ConteudoProps) => {
    return (<h1>{text},{img}</h1>


    );
};

function App() {
    const [counst, setCount] = useState(0);

    return (
     
        <div className="App">
          
          <div className='bloco-mensagem'>
           <span >
                <img src="/logo.digix.png" className='logo' />
            </span>

            <div className="frase">
           
            <p>O lugar para <b className='primeiro-destaque'>reconhecer</b> o que há</p>
            <p> de melhor em cada um <b className='segundo-destaque'>um de nós</b>.</p>
            </div>
            
            </div>
            <div className='bloco-login'>
                <form className='formulario'>
                  <div className='campo-login'>
                    <input id="cpf"  type="text" required/>
                    <label className="label" >Me diga,qual é seu cpf? </label>
                    </div>  
                    
                     </form>
            </div>
        </div>

    );


};

export default App;
