import './ModalReconhecimento.css';
import { Busca } from '../busca/Busca';

export const ModalReconhecimento = () => {
    return (
        <div className='modal'>
            <div className='modal--container'>
                <Busca texto="Quem você quer reconhecer?" />
                <div className="container--pilares">
                    <label className='pilar'>
                        Colaborar Sempre
                        <input type="radio" name="pilar" value={"colaborarSempre"} className='input-pilar' checked={true} />
                    </label>
                    <label className='pilar'>
                        Fazer Diferente
                        <input type="radio" name="pilar" value={"fazerDiferente"} className='input-pilar' />
                    </label>
                    <label className='pilar'>
                        Focar nas Pessoas
                        <input type="radio" name="pilar" value={"focarNasPessoas"} className='input-pilar' />
                    </label>
                    <label className='pilar'>
                        Planejar, Entregar, Aprender
                        <input type="radio" name="pilar" value={"PlanejarEntregarAprender"} className='input-pilar' />
                    </label>
                </div>
                <div className="container-descricao">
                    <textarea name="descricao" id="descricao-reconhecimento" placeholder='Digite seu reconhecimento' maxLength={220} cols={30} rows={5}></textarea>
                    <span className='contagem-caracteres'>0/220</span>
                </div>
                <div className='container-botoes'>
                    <button className='botao botao-borda-rosa'> Cancelar </button>
                    <button className='botao botao-fundo-rosa'> Reconhecer </button>
                </div>
            </div>
        </div>
    );
}
