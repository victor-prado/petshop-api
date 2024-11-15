import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
    return await AnimalRepository.insertAnimal(animal);
}

async function updateAnimal(animal) {
    return await AnimalRepository.updateAnimal(animal);
}

async function deleteAnimal(id) {
    await AnimalRepository.deleteAnimal(id);
}

async function getAnimais(proprietario_id) {
    if (proprietario_id) {
        return await AnimalRepository.getAnimaisPorProp(proprietario_id);
    }
    return await AnimalRepository.getAnimais();
}

async function getAnimal(id) {
    return await AnimalRepository.getAnimal(id);
}

async function getAnimaisPorProp(id) {
    return await AnimalRepository.getAnimaisPorProp(id);
}

export default {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimais,
    getAnimal,
    getAnimaisPorProp
}