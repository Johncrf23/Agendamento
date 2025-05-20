import con from "../database/connection.js";

async function Listar() {
    let sql = "SELECT * FROM EQUIPAMENTO";
    const [equipamentos] = await con.connection.execute(sql);
    return equipamentos;
}

async function Inserir(descricao, numero) {
    let sql = "INSERT INTO EQUIPAMENTO (DESCRICAO, NUMERO) VALUES (?, ?)";
    const [result] = await con.connection.query(sql, [descricao]);
    return { id: result.insertId, descricao};
}

async function Editar(id, descricao, numero) {
    let sql = "UPDATE EQUIPAMENTO SET NOME = ?, NUMERO = ? WHERE ID = ?";
    const [result] = await con.connection.query(sql, [descricao, id]);
    return { id, descricao};
}

async function Excluir(id) {
    let sql = "DELETE FROM EQUIPAMENTO WHERE ID = ?";
    await con.connection.query(sql, [id]);
    return { mensagem: "Equipamento excluído com sucesso" };
}

export default { Listar, Inserir, Editar, Excluir };
