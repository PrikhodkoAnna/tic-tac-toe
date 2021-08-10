class TicTacToe {

    constructor() {
            this.field = [[null, null, null],
                          [null, null, null],
                          [null, null, null] ];
            this.currentPlayerSymbol = 'x';
          
    }

    getCurrentPlayerSymbol() {
            return this.currentPlayerSymbol;
    }

    nextTurn(row, col) {
        if (this.field[row][col] !== null) {
            return;
        }
        else this.field[row][col] = this.currentPlayerSymbol;
        this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
    }

    isFinished() {
        if ((!(this.getWinner() === null)) || (this.isDraw())) {
            return true;
        }
        else return false;
    }

    getWinner() {
        for (let i = 0; i < 3; i++)
        {
            if((this.field[i][0] === this.field[i][1]) && (this.field[i][1] === this.field[i][2]))
            {
                return this.field[i][0]
            }

            if((this.field[0][i] === this.field[1][i]) && (this.field[1][i] === this.field[2][i]))
            {
                return this.field[0][i];
            }

        }
            if((this.field[0][0] === this.field[1][1]) && (this.field[1][1] === this.field[2][2]))
            {
                return this.field[0][0];
            }
            if((this.field[0][2] === this.field[1][1]) && (this.field[1][1] === this.field[2][0]))
            {
                return this.field[0][2];
            }
        
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.field.length; i++) {
            for (let j = 0; j < this.field[i].length; j++) {
              if (this.field[i][j] === null) return false;
            }
          }
          return true;
        }
    

    isDraw() {
        if ((this.noMoreTurns()) && (this.getWinner() === null)) {
            return true;
        }
        else return false;
    }

    getFieldValue(row, col) {
        return this.field[row][col];
    }
}

module.exports = TicTacToe;
