var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Omikuji = function () {
  // 配列で「大吉」や「中吉」などの値を設定
  function Omikuji(array) {
    _classCallCheck(this, Omikuji);

    this.items = array;
  }

  _createClass(Omikuji, [{
    key: "get",
    value: function get() {
      // 設定した値をランダムで取得
      var rand = Math.floor(Math.random() * this.items.length);
      return this.items[rand];
    }
  }]);

  return Omikuji;
}();

module.exports = Omikuji;
