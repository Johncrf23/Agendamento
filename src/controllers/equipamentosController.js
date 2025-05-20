import servicesEQUIPAMENTO from "../services/servicesEquipamento.js";

async function Listar(req, res) {
    const equipamentos = await servicesEQUIPAMENTO.Listar();
    res.status(200).json({ equipamentos });        
}

async function Inserir(req, res) {
    const { nome} = req.body;     
    await servicesEQUIPAMENTO.Inserir(nome);
    res.status(201).json({ mensagem: "sucesso" }); 
}

async function Editar(req, res) {
    const id = req.params.id;
    const { descricao, numero } = req.body;     
    const equipamento = await servicesEQUIPAMENTO.Editar(id, descricao); 
    res.status(200).json(equipamento); 
}

async function Excluir(req, res) {
    const id = req.params.id;   
    const resultado = await servicesEQUIPAMENTO.Excluir(id); 
    res.status(200).json(resultado); 
}

export default { Listar, Inserir, Editar, Excluir };
