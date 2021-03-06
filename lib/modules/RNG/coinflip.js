'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _BaseCommand2 = require('../../base/BaseCommand');

var _BaseCommand3 = _interopRequireDefault(_BaseCommand2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coinflip = function (_BaseCommand) {
  _inherits(Coinflip, _BaseCommand);

  function Coinflip() {
    _classCallCheck(this, Coinflip);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Coinflip).apply(this, arguments));
  }

  _createClass(Coinflip, [{
    key: 'handle',
    value: function handle() {
      var _this2 = this;

      this.responds(/^(coinflip|cointoss|coins)$/i, function () {
        _this2.send(_this2.channel, _this2.sender.name + ' got **' + _this2.result + '**!');
      });

      this.responds(/^(coinflip|cointoss|coins) (\d+)$/i, function (matches) {
        var replies = [];
        for (var i = 0; i < parseInt(matches[2], 10); i++) {
          replies.push(_this2.result);
        }
        _this2.send(_this2.channel, ['```xl', replies.join(' '), '```', _this2.sender.name + ' got **' + _lodash2.default.countBy(replies)['HEADS'] + '** ' + ('heads and **' + _lodash2.default.countBy(replies)['TAILS'] + '** tails!')].join('\n'));
      });
    }
  }, {
    key: 'result',
    get: function get() {
      var res = ['HEADS', 'TAILS'];
      return _lodash2.default.sample(res);
    }
  }], [{
    key: 'name',
    get: function get() {
      return 'coinflip';
    }
  }, {
    key: 'description',
    get: function get() {
      return 'Flips coins';
    }
  }, {
    key: 'usage',
    get: function get() {
      return ['The **coinflip** command tosses coins and gives you the results.', ['**this.prefix coinflip [number of coins]**' + ' where the no. of coins flipped defaults to 1'], 'e.g. `coinflip 20`'];
    }
  }, {
    key: 'aliases',
    get: function get() {
      return ['cointoss', 'coins'];
    }
  }]);

  return Coinflip;
}(_BaseCommand3.default);

module.exports = Coinflip;
//# sourceMappingURL=coinflip.js.map
