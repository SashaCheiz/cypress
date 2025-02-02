describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');//зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

         cy.get('#mail').type('german@dolnikov.ru');//ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
         cy.get('#loginButton').click();//нажал войти


         cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible');//текст виден пользователю         
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

    })
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('german@dolnikov.ru');//ввели верный логин
        cy.get('#pass').type('iLoveqastudio2');//ввели неверный пароль
        cy.get('#loginButton').click();//нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю, что после авторизации вижу текст

        cy.get('#messageHeader').should('be.visible');//текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
        
   })
it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/');//зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail').type('germa@dolnikov.ru');//ввели неверный логин
    cy.get('#pass').type('iLoveqastudio1');//ввели неверный пароль
    cy.get('#loginButton').click();//нажал войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю, что после авторизации вижу текст

    cy.get('#messageHeader').should('be.visible');//текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
    
})
   it('Проверка валидации логина', function () {
    cy.visit('https://login.qa.studio/');//зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail').type('USER_LOGIN');//ввели неверный логин
    cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
    cy.get('#loginButton').click();//нажал войти

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверяю, что после авторизации вижу текст

    cy.get('#messageHeader').should('be.visible');//текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
    
})
it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');//зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#forgotEmailButton').click();//нажал восстановить пароль 
    cy.get('#mailForgot').type('german@dolnikov.ru');//ввёл почту для восстановления 
    cy.get('#restoreEmailButton').click();//нажал кнопку отправить код 

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверяю, что после отправки кода вижу текст
    cy.get('#messageHeader').should('be.visible');//текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
    
})
it('Проверка приведения к строчным буквам', function () {
    cy.visit('https://login.qa.studio/');//зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail').type('GerMan@Dolnikov.ru');//ввели логин с разным регистром
    cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
    cy.get('#loginButton').click();//нажал войти

    cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible');//текст виден пользователю         
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

})

})