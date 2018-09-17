// 作成したパッケージを読み込む
var Omikuji = require('omikuji');

window.addEventListener('load', function () {
  // 初期化用のデータを作成
  var items = ['大吉', '中吉', '末吉', '吉', '凶'];
  // Omikujiクラスを初期化
  var omikuji = new Omikuji(items);

  // ボタンをクリックしたらid="result"におみくじの結果を表示
  var btn = document.getElementById('button');
  var result = document.getElementById('result');
  btn.addEventListener('click', function () {
    result.innerText = omikuji.get();
  });
});