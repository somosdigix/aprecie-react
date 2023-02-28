import './Busca.css';
import { useEffect, useState } from 'react';
import { ReconhecimentosService } from '../../services/reconhecimentos/ReconhecimentosService';

interface IColaborador {
    id: number,
    nome: string
}

type BuscaProps = {
    texto: string,
}

export const Busca = (props: BuscaProps) => {
    const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);
    useEffect(() => {
        ReconhecimentosService.todos_os_pilares_e_colaboradores().then((data) => {
            setColaboradores(data.colaboradores);
        });
    }, []);

    const [colaboradorBuscado, setColaboradorBuscado] = useState('');
    const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState<IColaborador[]>([]);

    useEffect(() => {
        if (colaboradorBuscado) {
            setColaboradoresFiltrados(colaboradores.filter((colaborador) => colaborador.nome.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "").includes(colaboradorBuscado.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, ""))));
            if (colaboradoresFiltrados.length > 0) {
                setResultadosBusca(true);
            }
            else {
                setResultadosBusca(false);
            }
        }
        else {
            setResultadosBusca(false);
            setColaboradoresFiltrados([])
        }
    }, [colaboradorBuscado])

    const [resultadosBusca, setResultadosBusca] = useState(false);

    return (
        <div className='busca-container'>
            <div className='campo-busca'>
                <input type="text" placeholder={props.texto} onChange={(e) => setColaboradorBuscado(e.target.value)} value={colaboradorBuscado} />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </div>
            {resultadosBusca ? <div className="resultado" id='resultado'>
                {colaboradoresFiltrados.length > 0 ? colaboradoresFiltrados.map(colaborador => {
                    return <p className='resultado-item' key={colaborador.id}> {colaborador.nome} </p>
                }) : <div></div>}
            </div> : null}


        </div>
    );
}