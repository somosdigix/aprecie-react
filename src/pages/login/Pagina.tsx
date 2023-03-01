import './Pagina.css';
import img from '../../img/logo.png';
import { Input } from './componentes/Input';
import { useState } from 'react';
import { Button } from './componentes/Button';


export const Pagina = () => {

    const [cpf, setCpf] = useState('')
    const [dataDeNascimento, setDataDeNascimento] = useState('')

    return (

        <div className="App">

            <div className='bloco-mensagem'>
                <span>
                    <img src={img} className="logo" alt="" />
                </span>


                <div className="frase">

                    <p>O lugar para <strong className='primeiro-destaque'>reconhecer</strong> o que há</p>
                    <p> de melhor em cada um <strong className='segundo-destaque'>um de nós</strong>.</p>
                </div>

            </div>
            <div className='bloco-login'>
                <form className='formulario'>
                    <Input id="cpf"
                        name="cpf"
                        placeholder="___.___.___-__"
                        onChange={e => setCpf(e.target.value)}
                        mask="cpf"
                        label="Me diga, qual é o seu CPF?"
                    />

                   

                <Input id="dataDeNascimento"
                        name="dataDeNascimento"
                        placeholder="__/__/____"
                        onChange={e => setDataDeNascimento(e.target.value)}
                        mask="dataDeNascimento"
                        label="e a data do seu nascimento?"
                  
                />
                   <Button />
                   
                </form>
            </div>
        </div>

    )


}


