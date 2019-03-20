

describe('Pet Store API Test- Service Pet', () => {
  
  it('POST Pet', () => {
      cy.request('POST','/pet', {
        "id": 1,
        "category": {
          "id": 1,
          "name": "Dog"
        },
        "name": "doggie",
        "photoUrls": [
          "teste"
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
});

    it('GET Pet', () => {
        cy.request('GET','/pet/1').then((response)=>{
            cy.log(response.body);
            assert.equal(response.status,200);
            expect(response.body).to.not.be.null;
        });
    });

    it('PUT Pet', () => {
        cy.request('PUT','/pet', {
            "id": 1,
            "category": {
              "id": 1,
              "name": "Doggy"
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
            "status": "available"
          }).then((response)=>{
            cy.log(response.body);
            assert.equal(response.status,200);
            expect(response.body).to.not.be.null;
      });
    });

    it('DELETE Pet', () => {
        cy.request('DELETE','/pet/1').then((response)=>{
            cy.log(response.body);
            assert.equal(response.status,200);
            expect(response.body).to.not.be.null;
        });
    });
});