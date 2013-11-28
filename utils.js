var Utils = {
  // 指定した長さで0埋めを行う: "1" -> "01"
  getZeroFilledText: function(filled_text, length) {
    // 長さが指定されていないときは2
    if ( Utils.isUndefined(length) ) {
      length = 2;
    }
    // 0埋めを行った文字列に変換する
    while ( filled_text.length < length ) {
      filled_text = "0" + filled_text;
    }
    return filled_text;
  },

  // 数値を16進数の文字列として取得する
  getHexText: function(x) {
    return parseInt(x, 10).toString(16).toUpperCase();
  },

  // xがundefinedかどうか判定する
  isUndefined: function(x) {
    return typeof x === "undefined";
  }
};
