var gold_controller = require('../controllers/gold_controller');

module.exports = function(app) {
  app.get('/', gold_controller.gold);
}
