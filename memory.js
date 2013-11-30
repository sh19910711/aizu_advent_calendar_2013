var Memory = function(capacity) {
  this.capacity = capacity;
  this.data = new Array(this.capacity);
};

Memory.prototype = {
  // 容量を取得する
  get_capacity: function() {
    return this.capacity;
  },

  // アドレスの妥当性チェック
  // 不正なアドレスが渡されているときは例外を投げる
  check_address: function(address) {
    if ( ! ( 0 <= address && address <= this.capacity ) )
      throw new Error("E001: 範囲外のアドレス");
  },

  // 8ビット書き込み
  write_8bit: function(address, data) {
    this.is_valid_address(address);
    this.data[address] = data & 0xFF;
  },

  // 8ビット読み込み
  read_8bit: function(address) {
    this.is_valid_address(address);
    return this.data[address] & 0xFF;
  }
};

