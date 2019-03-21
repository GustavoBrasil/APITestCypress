const userService = require('../support/services/UserServices.js');


describe('Pet Store API Test- Service User', () => {

    it('POST User', () => {
        userService.postUserRequest();
    });

    it('GET Use Log In', () => {
        userService.getUserLogInRequest();
    });

    it('GET Use Log Off', () => {
        userService.getUserLogOffRequest();
    });

    it('DELETE User', () => {
        userService.deleteUserRequest();
    });
});