class Omikuji {
  // 配列で「大吉」や「中吉」などの値を設定
  constructor (array) {
    this.items = array
  }

  // 設定した値をランダムで取得
  get () {
    const rand = Math.floor(Math.random() * this.items.length)
    return this.items[rand]
  }
}

module.exports = Omikuji
