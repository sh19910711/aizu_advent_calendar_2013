// CPU
var Processor = function(clock_speed, memory) {
  this.registers = {
    RA: 0,
    RB: 0,
    RC: 0,
    RD: 0,
    A: 0,
    PC: 0,
    SP: 0,
    F: 0
  };
  this.memory = memory;
};

Processor.prototype = {
  // 初期化を行う
  init: function() {
    this.registers.RA = 0;
    this.registers.RB = 0;
    this.registers.RC = 0;
    this.registers.RD = 0;
    this.registers.A  = 0;
    this.registers.PC = 0;
    this.registers.SP = 0;
    this.registers.F  = 0;
  },

  // ステップ実行
  step: function() {
    // オペコードを取得する
    var opcode = this.memory.read_8bit(this.registers.PC);
    this.registers.PC += 1;
    console.log(opcode);
  }
};

