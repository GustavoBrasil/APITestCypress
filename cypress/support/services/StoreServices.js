class StoreServices {

    getStoreRequest() {

        cy.request('GET', '/store/inventory').then((response) => {
            cy.log(response.body);
            assert.equal(response.status, 200);
            expect(response.body).to.not.be.null;
        });
    }

    postStoreRequest() {

        cy.request('POST', 'store/order', {
            "id": 2,
            "petId": 3,
            "quantity": 10,
            "shipDate": "2019-03-21T13:06:52.139Z",
            "status": "placed",
            "complete": false
        }).then((response) => {
            cy.log(response.body);
            assert.equal(response.status, 200);
            expect(response.body).to.not.be.null;
        });

    }


    deleteStoreRequest() {

        cy.request('DELETE', 'store/order/2').then((response) => {
            cy.log(response.body);
            assert.equal(response.status, 200);
            expect(response.body).to.not.be.null;
        });

    }

}
module.exports = new StoreServices();