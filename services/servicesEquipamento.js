import repositoryEquipamento from "../../repositories/repositoryEquipamento.js";

async function Listar() {
    const equipamentos = await repositoryEquipamento.Listar();  
    return equipamentos;    
}

async function Inserir(descricao) {
    const equipamentos = await repositoryEquipamento.Inserir(descricao);
    return equipamentos;
}

async function Editar(id, descricao) {
    const equipamentos = await repositoryEquipamento.Editar(id, descricao);
    return equipamentos;
}

async function Excluir(id) {
    const equipamentos = await repositoryEquipamento.Excluir(id);
    return equipamentos;
}

export default { Listar, Inserir, Editar, Excluir };
