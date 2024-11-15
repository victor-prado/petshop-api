import ProprietarioService from "../services/proprietario.service.js";

async function createProprietario(req, res, next) {
    try {
        const proprietario = req.body;
        if(!proprietario.nome || !proprietario.telefone) {
            throw new Error("Nome e telefone são obrigatórios.");
        }
        const novoProp = await ProprietarioService.createProprietario(proprietario);
        res.send(novoProp);
        logger.info(`POST /proprietario - ${JSON.stringify(novoProp)}`);
    } catch(err) {
        next(err);
    }
}

async function getProprietarios(req, res, next) {
    try {
        res.send(await ProprietarioService.getProprietarios());
        logger.info("GET /proprietario");
    } catch (err) {
        next(err);
    }
}

async function getProprietario(req, res, next) {
    try {
        res.send(await ProprietarioService.getProprietario(req.params.id));
        logger.info("GET /proprietario");
    } catch (err) {
        next(err);
    }
}

async function deleteProprietario(req, res, next) {
    try {
        await ProprietarioService.deleteProprietario(req.params.id);
        res.end();
        logger.info("DELETE /proprietario");
    } catch (err) {
        next(err);
    }
}

async function updateProprietario(req, res, next) {
    try {
        const proprietario = req.body;
        if(!proprietario.proprietario_id || !proprietario.nome || !proprietario.telefone) {
            throw new Error("Id, Nome e telefone são obrigatórios.");
        }
        const novoProp = await ProprietarioService.updateProprietario(proprietario);
        res.send(novoProp);
        logger.info(`UPDATE /proprietario - ${JSON.stringify(novoProp)}`);
    } catch (err) {
        next(err);
    }
}


export default {
    createProprietario,
    getProprietarios,
    getProprietario,
    deleteProprietario,
    updateProprietario
}