import { Aprecie } from '../AprecieConfig';
const todos_os_pilares_e_colaboradores = async () => {
    const { data } = await Aprecie().get('reconhecimentos/pilares/');
    return data;
}

export const ReconhecimentosService = {
    todos_os_pilares_e_colaboradores,
};