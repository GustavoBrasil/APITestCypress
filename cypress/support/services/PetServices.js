class PetServices{

    getPetRequest(){

        cy.request('GET','/pet/2').then((response)=>{
            cy.log(response.body);
            assert.equal(response.status,200);
            expect(response.body).to.not.be.null;
        });
    }

    postPetRequest(){

        cy.request('POST','/pet', {
            "id": 2,
            "category": {
              "id": 2,
              "name": "Doggy"
            },
            "name": "doggie",
            "photoUrls": [
              "imgur"
            ],
            "tags": [
              {
                "id": 1,
                "name": "house"
              }
            ],
            "status": "sold"
          }).then((response)=>{
            cy.log(response.body);
            assert.equal(response.status,200);
            expect(response.body).to.not.be.null;
      });

    }

    putPetRequest(){

        cy.request('PUT','/pet', {
            "id": 2,
            "category": {
              "id": 2,
              "name": "Doggie"
            },
            "name": "doggie",
            "photoUrls": [
              "teste_put"
            ],
            "tags": [
              {
                "id": 1,
                "name": "ok"
              }
            ],
            "status": "pending"
          }).then((response)=>{
            cy.log(response.body);
            assert.equal(response.status,200);
            expect(response.body).to.not.be.null;
      });

    }
    
    deletePetRequest(){

        cy.request('DELETE','/pet/2').then((response)=>{
            cy.log(response.body);
            assert.equal(response.status,200);
            expect(response.body).to.not.be.null;
        });

    }

}
module.exports = new PetServices();