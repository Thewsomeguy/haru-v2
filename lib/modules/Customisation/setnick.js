'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCommand2 = require('../../base/BaseCommand');

var _BaseCommand3 = _interopRequireDefault(_BaseCommand2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SetNick = function (_BaseCommand) {
  _inherits(SetNick, _BaseCommand);

  function SetNick() {
    _classCallCheck(this, SetNick);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SetNick).apply(this, arguments));
  }

  _createClass(SetNick, [{
    key: 'handle',
    value: function handle() {
      var _this2 = this;

      this.responds(/^setnick$/, function () {
        _this2.wrongUsage('setnick');
      });

      this.responds(/^setnick (.+)$/, function (matches) {
        _this2.server.setNickname(matches[1]);
      });
    }
  }, {
    key: 'noPrivate',
    get: function get() {
      return true;
    }
  }], [{
    key: 'name',
    get: function get() {
      return 'setnick';
    }
  }, {
    key: 'description',
    get: function get() {
      return 'Changes the bot nickname';
    }
  }, {
    key: 'usage',
    get: function get() {
      return ['```', ['setnick <nickname> - Changes the bot\'s nickname to the provided nick'], 'This command cannot be run in PMs.', '```'];
    }
  }]);

  return SetNick;
}(_BaseCommand3.default);

module.exports = SetNick;
//# sourceMappingURL=setnick.js.map
