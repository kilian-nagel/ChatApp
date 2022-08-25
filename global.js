
// PATH
const users_database = './src/Models/users.json';
const auth_api = require('./src/Api/auth0');
const database_controller = require('./src/Controllers/database')

module.exports = {
    users_database,
    auth_api,
    database_controller
}