const randomId =Math.floor((Math.random() * 10) + 1);
var faker = require('faker');
var randomEmail = faker.internet.email();
var passf =  faker.internet.password(8,1);
var usernamef = faker.internet.userName();
var firstnamef = faker.name.firstName();
var lastnamef = faker.name.lastName();
var phonef = faker.phone.phoneNumberFormat();

class UserServices{    

    getUserLogInRequest(){

        cy.fixture('users').then((user)=>{
            var usernameL =user.username;
            var passL = user.password;
            cy.request('GET','/user/login?username='+usernameL+'&password='+passL).then((response)=>{
                 cy.log(response.body);
                 assert.equal(response.status,200);
                 expect(response.body).to.not.be.null;
             });

         })
        
    }


    getUserLogOffRequest(){  

       cy.request('GET','/user/logout').then((response)=>{
            cy.log(response.body);
            assert.equal(response.status,200);
            expect(response.body).to.not.be.null;
             });       
    }

    postUserRequest(){

        cy.writeFile('cypress/fixtures/users.json', { 
            id: randomId,
            username: usernamef, 
            firstName:firstnamef,
            lastName: lastnamef,
            email: randomEmail,
            password: passf,
            phone: phonef,
            userstatus: 0
        });

        cy.request('POST','/user', {
            "id": randomId,
            "username": usernamef,
            "firstName": firstnamef,
            "lastName": lastnamef,
            "email": randomEmail,
            "password": passf,
            "phone": phonef,
            "userStatus": 0
          }).then((response)=>{
            cy.log(response.body);
            assert.equal(response.status,200);
            expect(response.body).to.not.be.null;
      });

     

    }
   
    deleteUserRequest(){
        cy.fixture('users').then((user)=>{
            var user = user.username;
             cy.request('DELETE','user/'+user).then((response)=>{
                cy.log(response.body);
                assert.equal(response.status,200);
                expect(response.body).to.not.be.null;
            });

        });

    }

}
module.exports = new UserServices();