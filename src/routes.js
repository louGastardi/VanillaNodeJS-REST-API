const UserController = require('./Controller/UserController');

module.exports = [
  { endpoint: '/users', method: 'GET', handler: UserController.listUsers },
  { endpoint: '/users', method: 'POST', handler: UserController.createUser },
  { endpoint: '/users/:id', method: 'GET', handler: UserController.getUserById },
  { endpoint: '/users/:id', method: 'PUT', handler: UserController.updateUser },
  { endpoint: '/users/:id', method: 'DELETE', handler: UserController.deleteUser },
];
