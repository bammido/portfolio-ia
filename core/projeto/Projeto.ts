import Tecnologia from "../tecnologia/Tecnologia";
import {NivelKeys} from "./Nivel";
import {TipoKeys} from "./Tipo";

export default interface Projeto {
    id: number
    nome: String
    descricao: String
    imagens: String[]
    nivel: NivelKeys
    tipo: TipoKeys
    destaque: Boolean 
    repositorio: String
    tecnologias: Tecnologia[]
}