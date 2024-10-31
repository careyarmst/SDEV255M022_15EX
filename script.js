let game = {
  winner: {
    nmwinner: "Commanders",
    score: 18,
  },
  loser: {
    nmloser: "Bears",
    score: 13,
  },
  getMarginOfVictory: function() {
    return this.winner.score - this.loser.score;
  },
  showSummary: function() {
    console.log(this.winner.nmwinner + ": " + this.winner.score);
    console.log(this.loser.nmloser + ": " + this.loser.score);
    console.log("Margin of Victory: " + this.getMarginOfVictory());
  }
};
game.showSummary();