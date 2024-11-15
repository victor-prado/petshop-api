import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
    try {
        const animal = req.body;
        if(!animal.nome || !animal.tipo || !animal.proprietario_id) {
            throw new Error("Nome, Tipo, e Proprietario_Id são obrigatórios.")
        } 
        const novoAnimal = await AnimalService.createAnimal(animal);
        res.send(novoAnimal);
        logger.info(`POST /animal - ${JSON.stringify(novoAnimal)}`);
    } catch (err) {
        next(err);
    }
}

async function updateAnimal(req, res, next) {
    try {
        const animal = req.body;
        if(!animal.animal_id || !animal.nome || !animal.tipo || !animal.proprietario_id) {
            throw new Error("Animal_Id, Nome, Tipo, e Proprietario_Id são obrigatórios.")
        } 
        const novoAnimal = await AnimalService.updateAnimal(animal);
        res.send(novoAnimal);
        logger.info(`PUT /animal - ${JSON.stringify(novoAnimal)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteAnimal(req, res, next) {
    try {
        await AnimalService.deleteAnimal(req.params.id);
        res.end();
        logger.info("DELETE /animal");
    } catch (err) {
        next(err);
    }
}

async function getAnimais(req, res, next) {
    try {
        res.send(await AnimalService.getAnimais(req.query.proprietario_id));
        logger.info("GET /animal");
    } catch (err) {
        next(err);
    }
}

async function getAnimal(req, res, next) {
    try {
        const animal = await AnimalService.getAnimal(req.params.id);
        res.send(animal);
        logger.info("GET /animal");
    } catch (err) {
        next(err);
    }
}

async function getAnimaisPorProp(req, res, next) {
    try {
        const animais = await AnimalService.getAnimaisPorProp(req.params.id);
        res.send(animais);
        logger.info("GET /animal");
    } catch (err) {
        next(err);
    }
}

export default {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimais,
    getAnimal,
    getAnimaisPorProp
}