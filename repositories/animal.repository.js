import Database from "./db.js";

async function insertAnimal(animal) {
    const conn = await Database.connect();
    try {
        const sql = "INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) RETURNING *";
        const values = [animal.nome, animal.tipo, animal.proprietario_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function updateAnimal(animal) {
    const conn = await Database.connect();
    try {
        const sql = "UPDATE animais SET nome = $1, tipo = $2, proprietario_id = $3 WHERE animal_id = $4";
        const values = [animal.nome, animal.tipo, animal.proprietario_id, animal.animal_id];
        const res = await conn.query(sql, values);
        return {linhasAlteradas: res.rowCount};
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function deleteAnimal(id) {
    const conn = await Database.connect();
    try {
        const sql = "DELETE FROM animais WHERE animal_id = $1";
        await conn.query(sql, [id]);
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getAnimais() {
    const conn = await Database.connect();
    try {
        const sql = "SELECT * FROM animais";
        const res = await conn.query(sql);
        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getAnimal(id) {
    const conn = await Database.connect();
    try {
        const sql = "SELECT * FROM animais WHERE animal_id = $1";
        const res = await conn.query(sql, [id]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getAnimaisPorProp(id) {
    const conn = await Database.connect();
    try {
        const sql = "SELECT * FROM animais WHERE proprietario_id = $1";
        const res = await conn.query(sql, [id]);
        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    insertAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimais,
    getAnimal,
    getAnimaisPorProp
}