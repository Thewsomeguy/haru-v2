'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _FlatDatabase = require('./FlatDatabase');

var _FlatDatabase2 = _interopRequireDefault(_FlatDatabase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SortedDatabase = function () {
  function SortedDatabase(key, options) {
    _classCallCheck(this, SortedDatabase);

    options = options || new _FlatDatabase2.default(_path2.default.join(process.cwd(), 'config/redis.json'));
    this.key = key;
    this.client = _redis2.default.createClient(options.getAll());
  }

  _createClass(SortedDatabase, [{
    key: '_handle',
    value: function _handle(cb, err, res) {
      if (typeof cb === 'function') {
        if (err) return cb(err, res);
        return cb(null, res);
      }
    }
  }, {
    key: 'set',
    value: function set(member, score, cb) {
      var _this = this;

      this.client.zadd(this.key, parseInt(score, 10), member, function (err, res) {
        return _this._handle(cb, err, res);
      });
    }
  }, {
    key: 'get',
    value: function get(member, cb) {
      var _this2 = this;

      this.client.zscore(this.key, member, function (err, res) {
        return _this2._handle(cb, err, res);
      });
    }
  }, {
    key: 'del',
    value: function del(member, cb) {
      var _this3 = this;

      this.client.zrem(this.key, member, function (err, res) {
        return _this3._handle(cb, err, res);
      });
    }
  }, {
    key: 'incr',
    value: function incr(member, _incr, cb) {
      var _this4 = this;

      this.client.zincrby(this.key, parseInt(_incr, 10), member, function (err, res) {
        return _this4._handle(cb, err, res);
      });
    }
  }, {
    key: 'getTotal',
    value: function getTotal(field, cb) {
      var _this5 = this;

      this.client.zcard(this.key, function (err, res) {
        return _this5._handle(cb, err, res);
      });
    }
  }, {
    key: 'getRankFromLowest',
    value: function getRankFromLowest(member, cb) {
      var _this6 = this;

      this.client.zrank(this.key, member, function (err, res) {
        return _this6._handle(cb, err, res);
      });
    }
  }, {
    key: 'getRankFromHighest',
    value: function getRankFromHighest(member, cb) {
      var _this7 = this;

      this.client.zrevrank(this.key, member, function (err, res) {
        return _this7._handle(cb, err, res);
      });
    }
  }]);

  return SortedDatabase;
}();

module.exports = SortedDatabase;
//# sourceMappingURL=SortedDatabase.js.map
