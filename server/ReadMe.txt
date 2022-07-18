Prerequisites 

1. Create Server Folder
2. CD Server
3. npm install express (npm init -y)
4. npm install --save-dev nodemon
5. package.json ADD "scripts": {"dev":"nodemon app.js"}
6. npm install --save-dev supertest
7. npm install --save-dev jest
8. add 2 new scripts under "scripts"
    "test": "jest --watch --verbose",
    "coverage": "jest --watch --coverage"
