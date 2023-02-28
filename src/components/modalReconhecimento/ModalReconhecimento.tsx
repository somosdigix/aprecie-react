import './ModalReconhecimento.css';
import { Busca } from '../busca/Busca';

export const ModalReconhecimento = () => {
    return (
        <div className='modal'>
            <div className='modal--container'>
                <Busca texto="Quem você quer reconhecer?" />
                <div className="container--pilares">
                    <div className="pilar pilar-colaborarSempre">
                        <input type="radio" name="pilar" value={"colaborarSempre"} className='input-pilar' defaultChecked id='colaborarSempre' />
                        <label htmlFor='colaborarSempre' className='pilarLabel'> Colaborar Sempre </label>
                    </div>

                    <div className="pilar pilar-fazerDiferente">
                        <input type="radio" name="pilar" value={"fazerDiferente"} className='input-pilar' id='fazerDiferente' />
                        <label htmlFor='fazerDiferente' className='pilarLabel'> Fazer Diferente </label>
                    </div>

                    <div className="pilar pilar-focarNasPessoas">
                        <input type="radio" name="pilar" value={"focarNasPessoas"} className='input-pilar' id='focarNasPessoas' />
                        <label htmlFor='focarNasPessoas' className='pilarLabel'>Focar nas Pessoas </label>
                    </div>

                    <div className="pilar pilar-PlanejarEntregarAprender">
                        <input type="radio" name="pilar" value={"PlanejarEntregarAprender"} className='input-pilar' id='PlanejarEntregarAprender' />
                        <label htmlFor='PlanejarEntregarAprender' className='pilarLabel'> Planejar, Entregar, Aprender</label>
                    </div>
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
