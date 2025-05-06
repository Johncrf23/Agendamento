import con from "../database/connection.js";

async function Listar() {
    let sql = "SELECT * FROM EQUIPAMENTO";
    const [equipamentos] = await con.connection.execute(sql);
    return equipamentos;
}

async function Inserir(nome, numero) {
    let sql = "INSERT INTO EQUIPAMENTO (NOME, NUMERO) VALUES (?, ?)";
    const [result] = await con.connection.query(sql, [nome, numero]);
    return { id: result.insertId, nome, numero };
}

async function Editar(id, nome, numero) {
    let sql = "UPDATE EQUIPAMENTO SET NOME = ?, NUMERO = ? WHERE ID = ?";
    const [result] = await con.connection.query(sql, [nome, numero, id]);
    return { id, nome, numero };
}

async function Excluir(id) {
    let sql = "DELETE FROM EQUIPAMENTO WHERE ID = ?";
    await con.connection.query(sql, [id]);
    return { mensagem: "Equipamento excluído com sucesso" };
}

export default { Listar, Inserir, Editar, Excluir };
