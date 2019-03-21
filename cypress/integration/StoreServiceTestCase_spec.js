const storeService = require('../support/services/StoreServices.js');


describe('Pet Store API Test- Service Store', () => {
  
  it('POST Store', () => {
        storeService.postStoreRequest();
    });

    it('GET Store', () => {
        storeService.getStoreRequest();
    });
   
    it('DELETE Store', () => {
        storeService.deleteStoreRequest();        
    });
});