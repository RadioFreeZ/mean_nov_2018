var cake = require('../controllers/cake_controller');

module.exports = function(app) {
  app.get('/cakes', cake.cakes);
}
