const petService = require('../support/services/PetServices.js');


describe('Pet Store API Test- Service Pet', () => {

    it('POST Pet', () => {
        petService.postPetRequest();
    });

    it('GET Pet', () => {
        petService.getPetRequest();
    });

    it('PUT Pet', () => {
        petService.putPetRequest();
    });

    it('DELETE Pet', () => {
        petService.deletePetRequest();
    });
});