// Memoryオブジェクトの確認用
var DumpTool = function(memory) {
  // テーブルの行数
  this.rows = Math.ceil(memory.getCapacity() / 16);
  // メモリのデータを格納するテーブル
  this.table = new Array(this.rows);
  for ( var i = 0; i < this.rows; ++ i ) {
    this.table[i] = new Array(16);
  }
  for ( var row = 0; row < this.rows; ++ row ) {
    for ( var col = 0; col < 16; ++ col ) {
      this.table[row][col] = "0";
    }
  }
};

DumpTool.prototype = {
  // 文字列を取得
  getTableAsText: function() {
    var text = "";
    // ヘッダー
    for ( var col = 0; col < 16; ++ col ) {
      text += " " + Utils.getZeroFilledText(Utils.getHexText(col), 2);
    }
    text += "\n";
    for ( var col = 0; col < 16; ++ col ) {
      text += "---";
    }
    text += "\n";
    // ダンプ部分
    for ( var row = 0; row < this.rows; ++ row ) {
      for ( var col = 0; col < 16; ++ col ) {
        // 16進数に変換しておく
        var cell = Utils.getHexText(this.table[row][col]);
        text += " " + Utils.getZeroFilledText(cell, 2);
      }
      text += "\n";
    }
    return text;
  }
};
