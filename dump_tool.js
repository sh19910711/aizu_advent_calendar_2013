// Memoryオブジェクトの確認用
var DumpTool = function(memory) {
  // テーブルの行数
  this.rows = Math.ceil(memory.get_capacity() / 16);
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
  get_table_as_text: function() {
    var text = "";

    // ヘッダー
    text += "       ";
    for ( var col = 0; col < 16; ++ col ) {
      text += " " + Utils.get_zero_filled_text(Utils.get_hex_text(col), 2);
    }
    text += "\n";

    // 分割線
    for ( var col = 0; col < 7; ++ col ) {
      text += "-";
    }
    for ( var col = 0; col < 16; ++ col ) {
      text += "---";
    }
    text += "\n";

    // ダンプ部分
    for ( var row = 0; row < this.rows; ++ row ) {
      // xxx0
      var row_number = Utils.get_hex_text(row * 16);
      text += Utils.get_zero_filled_text(row_number, 4) + " | ";
      for ( var col = 0; col < 16; ++ col ) {
        // 16進数に変換しておく
        var cell = Utils.get_hex_text(this.table[row][col]);
        text += " " + Utils.get_zero_filled_text(cell, 2);
      }
      text += "\n";
    }

    return text;
  }
};
